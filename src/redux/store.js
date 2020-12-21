import { createStore,applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

let finalCreateStore
if (process.env.NODE_ENV === 'production') {  //这里判断项目环境，正式的话打印的，和可视化的中间件可以去掉
    finalCreateStore = [thunk]
} else if (window.__REDUX_DEVTOOLS_EXTENSION__) { //检查到有redux可视化工具就使用
    finalCreateStore =[thunk, createLogger()]
} else {
    finalCreateStore = [thunk, createLogger()]
}
let store = createStore(
    rootReducer ,
    composeWithDevTools(
        applyMiddleware(...finalCreateStore)
    )
)


export default store;
