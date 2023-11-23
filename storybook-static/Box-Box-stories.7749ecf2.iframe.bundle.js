/*! For license information please see Box-Box-stories.7749ecf2.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[556],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/Box/Box.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BoxAlert:()=>BoxAlert,BoxError:()=>BoxError,BoxSuccess:()=>BoxSuccess,Default:()=>Default,Primary:()=>Primary,default:()=>Box_stories});var defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),_excluded=["rounded","border","filledBackground","type","children","className"],__jsx=react.createElement,boxClassMap={primary:"bg-primary",secondary:"bg-tertiary",dark:"bg-dark",alert:"bg-yellow-100 text-yellow-100",success:"bg-green-100 text-green-100",error:"bg-error-100 text-error-100"},Box=function Box(_ref){var _ref$rounded=_ref.rounded,rounded=void 0!==_ref$rounded&&_ref$rounded,_ref$border=_ref.border,border=void 0!==_ref$border&&_ref$border,_ref$filledBackground=_ref.filledBackground,filledBackground=void 0!==_ref$filledBackground&&_ref$filledBackground,_ref$type=_ref.type,type=void 0===_ref$type?"primary":_ref$type,children=_ref.children,rest=(_ref.className,(0,objectWithoutProperties.Z)(_ref,_excluded)),classes=classnames_default()((0,defineProperty.Z)({"rounded-md":rounded,"border border-gray-100":border,"bg-dark":filledBackground},boxClassMap[type],type));return __jsx("div",(0,esm_extends.Z)({className:classes},rest),children)};Box.displayName="Box",Box.__docgenInfo={description:"",methods:[],displayName:"Box",props:{rounded:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},border:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},filledBackground:{defaultValue:{value:"false",computed:!1},required:!1,tsType:{name:"boolean"},description:""},type:{defaultValue:{value:'"primary"',computed:!1},required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark" | "alert" | "success" | "error"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'},{name:"literal",value:'"alert"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const Box_Box=Box;try{Box.displayName="Box",Box.__docgenInfo={description:"",displayName:"Box",props:{rounded:{defaultValue:{value:"false"},description:"",name:"rounded",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"",name:"border",required:!1,type:{name:"boolean"}},filledBackground:{defaultValue:{value:"false"},description:"",name:"filledBackground",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"primary"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"primary"'},{value:'"secondary"'},{value:'"dark"'},{value:'"success"'},{value:'"error"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Box/Box.tsx#Box"]={docgenInfo:Box.__docgenInfo,name:"Box",path:"components/Box/Box.tsx#Box"})}catch(__react_docgen_typescript_loader_error){}var _Primary$parameters,_Primary$parameters2,_Default$parameters,_Default$parameters2,_BoxAlert$parameters,_BoxAlert$parameters2,_BoxSuccess$parameter,_BoxSuccess$parameter2,_BoxError$parameters,_BoxError$parameters2;function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,defineProperty.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const Box_stories={title:"Design System/Atoms/Box",component:Box_Box,argTypes:{children:{type:"string"},type:{type:"string",options:["alert","primary","secondary","dark","success","error"],control:{type:"select"}},rounded:{type:"boolean"},border:{type:"boolean"},filledBackground:{type:"boolean"},className:{type:"string"}}};var Primary={args:{}},Default={args:{children:"Este é uma Box Padrão",filledBackground:!0,type:"primary"}},BoxAlert={args:{children:"Este é um alerta!",filledBackground:!0,rounded:!0,type:"alert"}},BoxSuccess={args:{children:"Operação concluída com sucesso!",filledBackground:!0,rounded:!0,type:"success"}},BoxError={args:{children:"Ocorreu um erro durante a operação.",filledBackground:!0,rounded:!0,type:"error"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {}\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Este é uma Box Padrão",\n    filledBackground: true,\n    type: "primary"\n  }\n}'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2=_Default$parameters2.docs)||void 0===_Default$parameters2?void 0:_Default$parameters2.source)})}),BoxAlert.parameters=_objectSpread(_objectSpread({},BoxAlert.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BoxAlert$parameters=BoxAlert.parameters)||void 0===_BoxAlert$parameters?void 0:_BoxAlert$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Este é um alerta!",\n    filledBackground: true,\n    rounded: true,\n    type: "alert"\n  }\n}'},null===(_BoxAlert$parameters2=BoxAlert.parameters)||void 0===_BoxAlert$parameters2||null===(_BoxAlert$parameters2=_BoxAlert$parameters2.docs)||void 0===_BoxAlert$parameters2?void 0:_BoxAlert$parameters2.source)})}),BoxSuccess.parameters=_objectSpread(_objectSpread({},BoxSuccess.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BoxSuccess$parameter=BoxSuccess.parameters)||void 0===_BoxSuccess$parameter?void 0:_BoxSuccess$parameter.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Operação concluída com sucesso!",\n    filledBackground: true,\n    rounded: true,\n    type: "success"\n  }\n}'},null===(_BoxSuccess$parameter2=BoxSuccess.parameters)||void 0===_BoxSuccess$parameter2||null===(_BoxSuccess$parameter2=_BoxSuccess$parameter2.docs)||void 0===_BoxSuccess$parameter2?void 0:_BoxSuccess$parameter2.source)})}),BoxError.parameters=_objectSpread(_objectSpread({},BoxError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_BoxError$parameters=BoxError.parameters)||void 0===_BoxError$parameters?void 0:_BoxError$parameters.docs),{},{source:_objectSpread({originalSource:'{\n  args: {\n    children: "Ocorreu um erro durante a operação.",\n    filledBackground: true,\n    rounded: true,\n    type: "error"\n  }\n}'},null===(_BoxError$parameters2=BoxError.parameters)||void 0===_BoxError$parameters2||null===(_BoxError$parameters2=_BoxError$parameters2.docs)||void 0===_BoxError$parameters2?void 0:_BoxError$parameters2.source)})})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);