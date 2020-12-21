    引入 react-app-rewired 插件来实现配置覆盖。
    需要在根目录新建一个 config-overrides.js 文件
    地址：
    https://github.com/timarney/react-app-rewired/blob/master       /README_zh.md
    1 .npm run eject 暴露webpack配置

        2.package.json 配置antd-mobile,按需加载
        "babel": {
            "presets": [
              "react-app"
            ],
            "plugins":
            [
              [
                "import",
                {
                  "libraryName": "antd-mobile",
                  "libraryDirectory": "es",
                  "style": "css"
                }
              ]
            ]
            }
        确保src下没有.babelrc文件，重启项目，一切很OK;
        
        3.安装lib-flexible 移动端适配手淘H5方案，安装px2rem-loader，作用自动   将px转化为rem。注意顺序，放在cssloder后面。或者安装postcss-px2rem
        {
                // Options for PostCSS as we reference these options    twice
                // Adds vendor prefixing based on your specified    browser support in
                // package.json
                loader: require.resolve('postcss-loader'),
                options: {
                  // Necessary for external CSS imports to work
                  // https://github.com/facebook/create-react-app/issues/2677
                  ident: 'postcss',
                  plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                      autoprefixer: {
                        flexbox: 'no-2009',
                      },
                      stage: 3,
                    }),
                    // Adds PostCSS Normalize as the reset css with default options,
                    // so that it honors browserslist config in package.json
                    // which in turn let's users customize the target behavior as per their needs.
                    postcssNormalize(),
                  ],
                  sourceMap: isEnvProduction && shouldUseSourceMap,
                  px2rem({remUnit: 37.5})
                },
              },
         
    4.配置scss， 安装sass-loader node-sass;

    5.配置路径别名
    '@': path.resolve(__dirname, '../src'),
        '@common': path.resolve(__dirname, '../src/common'),
        '@components': path.resolve(__dirname, '../src/components'),
        '@pages': path.resolve(__dirname, '../src/pages'),
        '@static': path.resolve(__dirname, '../src/static'),
        '@config': path.resolve(__dirname, '../src/config'),
        
     6. css默认样式重置  
     （1） https://necolas.github.io/normalize.css/8.0 .1/normaliz.css   
     （2）https://segmentfault.com/a/1190000009369872
      全局配置css样式
       use: getStyleLoaders(
                 {
                   importLoaders: 3,
                   sourceMap: isEnvProduction && shouldUseSourceMap,
                 },
                 'sass-loader'
               ).concat({
                 // 这行的意思是引入加载器 sass-resources-loader
                 loader: 'sass-resources-loader',
                 options: {
                   // 这里是需要引入全局的资源文件，它可以是一个字符串或者是一个数组， 通常用数组去代替。
                   resources: ['./src/assets/css/normalize.scss']
                 }
               }),
   
   
               
        7.配置代理
          修改package.json文件
          "proxy":"http://172.19.5.35:9536",
          2 react porxy 代理多个
            "proxy":{
              "/api": {
                  "target": "http://172.19.5.35:9536",
                  "ws": true
                },
            "/apc": {
                  "target": "http://179.19.5.35:9536",
                  "ws": true
                }
            },
            自定义配置代理 安装http-proxy-middleware
            在项目目录src/下新建setupProxy.js文件，然后写入如下代码:
            const proxy = require(‘http-proxy-middleware‘);
            module.exports = function(app) {
              app.use(proxy(‘/api‘, { 
                   target: ‘http://192.168.1.144:8181‘ ,
                   secure: false,
                   changeOrigin: true,
                   pathRewrite: {
                    "^/api": "/"
                   },
                   // cookieDomainRewrite: "http://localhost:3000"
                }));
            };
            在 start.js里面做一下配置
          require('../src/setupProxy')(devServer);
  
    8.axios封装
          /**axios封装
           * 请求拦截、相应拦截、错误统一处理
           */
          import axios from 'axios';
          import { Toast } from 'antd-mobile';
          
          // 环境的切换
          if (process.env.NODE_ENV == 'development') {
              axios.defaults.baseURL = '/api';
          } else if (process.env.NODE_ENV == 'debug') {
              axios.defaults.baseURL = '';
          } else if (process.env.NODE_ENV == 'production') {
              axios.defaults.baseURL = '/';
          }
          
          // 请求超时时间
          axios.defaults.timeout = 10000;
          
          // post请求头
          // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
          axios.defaults.headers.post['Content-Type']='application/json'
          
          // 请求拦截器
          axios.interceptors.request.use(
              config => {
                  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
                  // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
                  const token =localStorage.getItem('token');
                  token && (config.headers.Authorization = token);
                  return config;
              },
              error => {
                  return Promise.error(error);
              })
          
          // 响应拦截器
          axios.interceptors.response.use(
              response => {
                  if (response.status === 200) {
                      return Promise.resolve(response);
                  } else {
                      return Promise.reject(response);
                  }
              },
              // 服务器状态码不是200的情况
              error => {
                  if (error.response.status) {
                      switch (error.response.status) {
                          // 401: 未登录
                          // 未登录则跳转登录页面，并携带当前页面的路径
                          // 在登录成功后返回当前页面，这一步需要在登录页操作。
                          case 401:
          
                              // router.replace({
                              //     path: '/login',
                              //     query: { redirect: router.currentRoute.fullPath }
                              // });
          
                              break;
                          // 403 token过期
                          // 登录过期对用户进行提示
                          // 清除本地token和清空vuex中token对象
                          // 跳转登录页面
                          case 403:
                              Toast.fail('登录过期，请重新登录', 1);
                              // 清除token
                              localStorage.removeItem('token');
          
                              // store.commit('loginSuccess', null);
          
                              // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          
                              // setTimeout(() => {
                              //     router.replace({
                              //         path: '/login',
                              //         query: {
                              //             redirect: router.currentRoute.fullPath
                              //         }
                              //     });
                              // }, 1000);
                              break;
                          // 404请求不存在
                          case 404:
                              Toast.fail('网络请求不存在', 1);
                              break;
                          // 其他错误，直接抛出错误提示
                          default:
                              Toast.fail(error.response.data.message, 1);
          
                      }
                      return Promise.reject(error.response);
                  }
              }
          );
          /**
           * get方法，对应get请求
           * @param {String} url [请求的url地址]
           * @param {Object} params [请求时携带的参数]
           */
          export function get(url, params){
              return new Promise((resolve, reject) =>{
                  axios.get(url, {
                      params: params
                  })
                      .then(res => {
                          resolve(res.data);
                      })
                      .catch(err => {
                          reject(err.data)
                      })
              });
          }
          /**
           * post方法，对应post请求
           * @param {String} url [请求的url地址]
           * @param {Object} params [请求时携带的参数]
           */
          export function post(url, params) {
              return new Promise((resolve, reject) => {
                  axios.post(url,params)
                      .then(res => {
                          resolve(res.data);
                      })
                      .catch(err => {
                          reject(err.data)
                      })
              });
          }
          
    9.安装全家桶 react-router redux redux-saga redux-logger redux-thunk  react-redux
    10.redux 调试工具   redux-devtools-extension
    11.babel-plugin-syntax-dynamic-import用以解析识别import()动态导入语法---并非转换，而是解析识别
    12.网易云音乐api
    https://github.com/Binaryify/NeteaseCloudMusicApi
    13.浏览器兼容
    config.entry.app = ["babel-polyfill", "./src/main.js"];
