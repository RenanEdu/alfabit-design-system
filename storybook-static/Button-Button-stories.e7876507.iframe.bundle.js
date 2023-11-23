"use strict";(self.webpackChunkalfabit_design_system=self.webpackChunkalfabit_design_system||[]).push([[228],{"./node_modules/@babel/runtime/helpers/esm/defineProperty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Z:()=>_defineProperty})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.d(__webpack_exports__,{Z:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}__webpack_require__.d(__webpack_exports__,{Z:()=>_objectWithoutProperties})},"./components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/next/dist/compiled/react/index.js"),_excluded=["variant","children","className","disabled"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;function getVariant(variant,disabled){switch(variant){case"primary":return disabled?"bg-disabled text-disabled":"bg-primary text-whitee";case"secondary":return disabled?"bg-disabled text-disabled":"bg-quaternary text-primary";default:return""}}var Button=function Button(_ref){var _ref$variant=_ref.variant,variant=void 0===_ref$variant?"primary":_ref$variant,children=_ref.children,className=_ref.className,disabled=_ref.disabled,rest=(0,C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.Z)(_ref,_excluded);return __jsx("button",(0,C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.Z)({className:" rounded-md px-6 py-2 ".concat(getVariant(variant,disabled)," ").concat(className),disabled},rest),children)};Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:"'primary'",computed:!1},required:!1,tsType:{name:"union",raw:"'primary' | 'secondary' | 'tertiary'",elements:[{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'tertiary'"}]},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};const __WEBPACK_DEFAULT_EXPORT__=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./components/Button/Button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Disabled:()=>Disabled,Primary:()=>Primary,Secondary:()=>Secondary,SecondaryDisabled:()=>SecondaryDisabled,Tertiary:()=>Tertiary,TertiaryDisabled:()=>TertiaryDisabled,Violet:()=>Violet,VioletSecondary:()=>VioletSecondary,VioletTertiary:()=>VioletTertiary,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _Primary$parameters,_Primary$parameters2,_Disabled$parameters,_Disabled$parameters2,_Secondary$parameters,_Secondary$parameters2,_SecondaryDisabled$pa,_SecondaryDisabled$pa2,_Tertiary$parameters,_Tertiary$parameters2,_TertiaryDisabled$par,_TertiaryDisabled$par2,_Violet$parameters,_Violet$parameters2,_VioletSecondary$para,_VioletSecondary$para2,_VioletTertiary$param,_VioletTertiary$param2,C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,C_Users_User_OneDrive_rea_de_Trabalho_Alfabit_alfabit_design_system_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}const __WEBPACK_DEFAULT_EXPORT__={title:"Design System/Molecules/Button",component:__webpack_require__("./components/Button/Button.tsx").Z,argTypes:{children:{type:"string"},disabled:{type:"boolean"},className:{type:"string"},onClick:{action:"clicked"}}};var Primary={args:{children:"Botão"}},Disabled={args:{children:"Botão",disabled:!0}},Secondary={args:{children:"Botão",variant:"secondary"}},SecondaryDisabled={args:{children:"Botão",variant:"secondary",disabled:!0}},Tertiary={args:{children:"Botão",variant:"tertiary"}},TertiaryDisabled={args:{children:"Botão",variant:"tertiary",disabled:!0}},Violet={args:{children:"Botão",className:"theme-violet"}},VioletSecondary={args:{children:"Botão",className:"theme-violet",variant:"secondary"}},VioletTertiary={args:{children:"Botão",className:"theme-violet",variant:"tertiary"}};Primary.parameters=_objectSpread(_objectSpread({},Primary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Primary$parameters=Primary.parameters)||void 0===_Primary$parameters?void 0:_Primary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão'\n  }\n}"},null===(_Primary$parameters2=Primary.parameters)||void 0===_Primary$parameters2||null===(_Primary$parameters2=_Primary$parameters2.docs)||void 0===_Primary$parameters2?void 0:_Primary$parameters2.source)})}),Disabled.parameters=_objectSpread(_objectSpread({},Disabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    disabled: true\n  }\n}"},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters2=_Disabled$parameters2.docs)||void 0===_Disabled$parameters2?void 0:_Disabled$parameters2.source)})}),Secondary.parameters=_objectSpread(_objectSpread({},Secondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Secondary$parameters=Secondary.parameters)||void 0===_Secondary$parameters?void 0:_Secondary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    variant: 'secondary'\n  }\n}"},null===(_Secondary$parameters2=Secondary.parameters)||void 0===_Secondary$parameters2||null===(_Secondary$parameters2=_Secondary$parameters2.docs)||void 0===_Secondary$parameters2?void 0:_Secondary$parameters2.source)})}),SecondaryDisabled.parameters=_objectSpread(_objectSpread({},SecondaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SecondaryDisabled$pa=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa?void 0:_SecondaryDisabled$pa.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    variant: 'secondary',\n    disabled: true\n  }\n}"},null===(_SecondaryDisabled$pa2=SecondaryDisabled.parameters)||void 0===_SecondaryDisabled$pa2||null===(_SecondaryDisabled$pa2=_SecondaryDisabled$pa2.docs)||void 0===_SecondaryDisabled$pa2?void 0:_SecondaryDisabled$pa2.source)})}),Tertiary.parameters=_objectSpread(_objectSpread({},Tertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Tertiary$parameters=Tertiary.parameters)||void 0===_Tertiary$parameters?void 0:_Tertiary$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    variant: 'tertiary'\n  }\n}"},null===(_Tertiary$parameters2=Tertiary.parameters)||void 0===_Tertiary$parameters2||null===(_Tertiary$parameters2=_Tertiary$parameters2.docs)||void 0===_Tertiary$parameters2?void 0:_Tertiary$parameters2.source)})}),TertiaryDisabled.parameters=_objectSpread(_objectSpread({},TertiaryDisabled.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_TertiaryDisabled$par=TertiaryDisabled.parameters)||void 0===_TertiaryDisabled$par?void 0:_TertiaryDisabled$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    variant: 'tertiary',\n    disabled: true\n  }\n}"},null===(_TertiaryDisabled$par2=TertiaryDisabled.parameters)||void 0===_TertiaryDisabled$par2||null===(_TertiaryDisabled$par2=_TertiaryDisabled$par2.docs)||void 0===_TertiaryDisabled$par2?void 0:_TertiaryDisabled$par2.source)})}),Violet.parameters=_objectSpread(_objectSpread({},Violet.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Violet$parameters=Violet.parameters)||void 0===_Violet$parameters?void 0:_Violet$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    className: 'theme-violet'\n  }\n}"},null===(_Violet$parameters2=Violet.parameters)||void 0===_Violet$parameters2||null===(_Violet$parameters2=_Violet$parameters2.docs)||void 0===_Violet$parameters2?void 0:_Violet$parameters2.source)})}),VioletSecondary.parameters=_objectSpread(_objectSpread({},VioletSecondary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VioletSecondary$para=VioletSecondary.parameters)||void 0===_VioletSecondary$para?void 0:_VioletSecondary$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    className: 'theme-violet',\n    variant: 'secondary'\n  }\n}"},null===(_VioletSecondary$para2=VioletSecondary.parameters)||void 0===_VioletSecondary$para2||null===(_VioletSecondary$para2=_VioletSecondary$para2.docs)||void 0===_VioletSecondary$para2?void 0:_VioletSecondary$para2.source)})}),VioletTertiary.parameters=_objectSpread(_objectSpread({},VioletTertiary.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_VioletTertiary$param=VioletTertiary.parameters)||void 0===_VioletTertiary$param?void 0:_VioletTertiary$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    children: 'Botão',\n    className: 'theme-violet',\n    variant: 'tertiary'\n  }\n}"},null===(_VioletTertiary$param2=VioletTertiary.parameters)||void 0===_VioletTertiary$param2||null===(_VioletTertiary$param2=_VioletTertiary$param2.docs)||void 0===_VioletTertiary$param2?void 0:_VioletTertiary$param2.source)})})}}]);