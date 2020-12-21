(this["webpackJsonpcreate-cli"]=this["webpackJsonpcreate-cli"]||[]).push([[4],{176:function(e,n,t){"use strict";t(98),t(99),t(179)},177:function(e,n,t){"use strict";var o=t(21),i=t.n(o),r=t(7),a=t.n(r),c=t(9),s=t.n(c),l=t(10),u=t.n(l),p=t(6),h=t.n(p),d=t(11),v=t.n(d),f=t(14),m=t.n(f),g=t(0),y=t(178),b=t(68),E=function(e,n){var t={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(o=Object.getOwnPropertySymbols(e);i<o.length;i++)n.indexOf(o[i])<0&&(t[o[i]]=e[o[i]])}return t},C=/^[\u4e00-\u9fa5]{2}$/,M=C.test.bind(C);function O(e){return"string"===typeof e}function T(e){return O(e.type)&&M(e.props.children)?g.cloneElement(e,{},e.props.children.split("").join(" ")):O(e)?(M(e)&&(e=e.split("").join(" ")),g.createElement("span",null,e)):e}var N=function(e){function n(){return s()(this,n),h()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments))}return v()(n,e),u()(n,[{key:"render",value:function(){var e,n=this.props,t=n.children,o=n.className,r=n.prefixCls,c=n.type,s=n.size,l=n.inline,u=n.disabled,p=n.icon,h=n.loading,d=n.activeStyle,v=n.activeClassName,f=n.onClick,C=E(n,["children","className","prefixCls","type","size","inline","disabled","icon","loading","activeStyle","activeClassName","onClick"]),M=h?"loading":p,O=m()(r,o,(e={},a()(e,r+"-primary","primary"===c),a()(e,r+"-ghost","ghost"===c),a()(e,r+"-warning","warning"===c),a()(e,r+"-small","small"===s),a()(e,r+"-inline",l),a()(e,r+"-disabled",u),a()(e,r+"-loading",h),a()(e,r+"-icon",!!M),e)),N=g.Children.map(t,T),j=void 0;if("string"===typeof M)j=g.createElement(b.a,{"aria-hidden":"true",type:M,size:"small"===s?"xxs":"md",className:r+"-icon"});else if(M){var w=M.props&&M.props.className,S=m()("am-icon",r+"-icon","small"===s?"am-icon-xxs":"am-icon-md");j=g.cloneElement(M,{className:w?w+" "+S:S})}return g.createElement(y.a,{activeClassName:v||(d?r+"-active":void 0),disabled:u,activeStyle:d},g.createElement("a",i()({role:"button",className:O},C,{onClick:u?void 0:f,"aria-disabled":u}),j,N))}}]),n}(g.Component);N.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1,activeStyle:{}},n.a=N},178:function(e,n,t){"use strict";var o=t(21),i=t.n(o),r=t(9),a=t.n(r),c=t(10),s=t.n(c),l=t(6),u=t.n(l),p=t(11),h=t.n(p),d=t(0),v=t.n(d),f=t(14),m=t.n(f),g=function(e){function n(){a()(this,n);var e=u()(this,(n.__proto__||Object.getPrototypeOf(n)).apply(this,arguments));return e.state={active:!1},e.onTouchStart=function(n){e.triggerEvent("TouchStart",!0,n)},e.onTouchMove=function(n){e.triggerEvent("TouchMove",!1,n)},e.onTouchEnd=function(n){e.triggerEvent("TouchEnd",!1,n)},e.onTouchCancel=function(n){e.triggerEvent("TouchCancel",!1,n)},e.onMouseDown=function(n){e.triggerEvent("MouseDown",!0,n)},e.onMouseUp=function(n){e.triggerEvent("MouseUp",!1,n)},e.onMouseLeave=function(n){e.triggerEvent("MouseLeave",!1,n)},e}return h()(n,e),s()(n,[{key:"componentDidUpdate",value:function(){this.props.disabled&&this.state.active&&this.setState({active:!1})}},{key:"triggerEvent",value:function(e,n,t){var o="on"+e,i=this.props.children;i.props[o]&&i.props[o](t),n!==this.state.active&&this.setState({active:n})}},{key:"render",value:function(){var e=this.props,n=e.children,t=e.disabled,o=e.activeClassName,r=e.activeStyle,a=t?void 0:{onTouchStart:this.onTouchStart,onTouchMove:this.onTouchMove,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel,onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onMouseLeave:this.onMouseLeave},c=v.a.Children.only(n);if(!t&&this.state.active){var s=c.props,l=s.style,u=s.className;return!1!==r&&(r&&(l=i()({},l,r)),u=m()(u,o)),v.a.cloneElement(c,i()({className:u,style:l},a))}return v.a.cloneElement(c,a)}}]),n}(v.a.Component),y=g;g.defaultProps={disabled:!1},t.d(n,"a",(function(){return y}))},179:function(e,n,t){},186:function(e,n,t){"use strict";t.r(n);t(176);var o=t(177),i=t(62),r=t(63),a=t(66),c=t(64),s=t(67),l=t(0),u=t.n(l),p=t(65),h=function(e){function n(e){return Object(i.a)(this,n),Object(a.a)(this,Object(c.a)(n).call(this,e))}return Object(s.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,this.props.number,u.a.createElement(o.a,{onClick:this.props.increment},"+1"),u.a.createElement("div",null,"current number\uff1a ",this.props.number," ",u.a.createElement(o.a,{onClick:function(){return e.props.watchIncrement()}},"\u70b9\u51fb2\u79d2\u540e+1")))}}]),n}(l.Component);n.default=Object(p.b)((function(e){return console.log(e),{number:e.number}}),(function(e){return{increment:function(){return e({type:"INCREMENT"})},watchIncrement:function(){return e({type:"INCREMENT"})}}}))(h)}}]);
//# sourceMappingURL=4.d2eacc1a.chunk.js.map