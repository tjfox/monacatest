webpackJsonp([0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(){l["default"].render(i["default"].createElement(a.AppContainer,null,i["default"].createElement(f["default"],null)),p)}n(1);var a=n(4),u=n(8),i=r(u),c=n(38),l=r(c),s=n(177),f=r(s);n(186),n(193);var p=document.getElementById("app");document.addEventListener("deviceready",o,!1),function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"rootElement","/Users/tfox/workspace/monaca-test/sample2/src/main.jsx"),__REACT_HOT_LOADER__.register(o,"onDeviceReady","/Users/tfox/workspace/monaca-test/sample2/src/main.jsx"))}()},1:function(e,t,n){e.exports=n(2)},2:function(e,t,n){"use strict";e.exports=n(3)},3:function(e,t){"use strict"},4:function(e,t,n){e.exports=n(5)},5:function(e,t,n){"use strict";var r=n(6);e.exports=function(e){throw this&&this.callback?new Error('React Hot Loader: The Webpack loader is now exported separately. If you use Babel, we recommend that you remove "react-hot-loader" from the "loaders" section of your Webpack configuration altogether, and instead add "react-hot-loader/babel" to the "plugins" section of your .babelrc file. If you prefer not to use Babel, replace "react-hot-loader" or "react-hot" with "react-hot-loader/webpack" in the "loaders" section of your Webpack configuration.'):e&&e.types&&e.types.IfStatement?new Error('React Hot Loader: The Babel plugin is exported separately. Replace "react-hot-loader" with "react-hot-loader/babel" in the "plugins" section of your .babelrc file. While we recommend the above, if you prefer not to use Babel, you may remove "react-hot-loader" from the "plugins" section of your .babelrc file altogether, and instead add "react-hot-loader/webpack" to the "loaders" section of your Webpack configuration.'):new Error('React Hot Loader does not have a default export. If you use the import statement, make sure to include the curly braces: import { AppContainer } from "react-hot-loader". If you use CommonJS, make sure to read the named export: require("react-hot-loader").AppContainer.')},e.exports.AppContainer=r},6:function(e,t,n){"use strict";e.exports=n(7)},7:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(8),c=i.Component,l=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){return this.props.component?i.createElement(this.props.component,this.props.prop):i.Children.only(this.props.children)}}]),t}(c);e.exports=l},177:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(8),l=r(c),s=n(38),f=(r(s),n(178)),p=n(184),d=r(p),_=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"renderPage",value:function(e,t){var n=e.props||{};return n.navigator=t,l["default"].createElement(e.component,n)}},{key:"render",value:function(){return l["default"].createElement(f.Navigator,{initialRoute:{component:d["default"]},renderPage:this.renderPage})}}]),t}(l["default"].Component),h=_;t["default"]=h,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"App","/Users/tfox/workspace/monaca-test/sample2/src/App.jsx"),__REACT_HOT_LOADER__.register(h,"default","/Users/tfox/workspace/monaca-test/sample2/src/App.jsx"))}()},184:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(8),l=r(c),s=n(38),f=(r(s),n(178)),p=n(185),d=r(p),_=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"pushPage",value:function(){this.props.navigator.pushPage({component:d["default"]})}},{key:"takeScan",value:function(){window.cordova.plugins.barcodeScanner.scan(function(e){alert("We got a barcode\nResult: "+e.text+"\nFormat: "+e.format+"\nCancelled: "+e.cancelled)},function(e){alert("Scanning failed: "+e)},{preferFrontCamera:!0,showFlipCameraButton:!0,showTorchButton:!0,torchOn:!0,saveHistory:!0,prompt:"Place a barcode inside the scan area",resultDisplayDuration:500,formats:"PDF_417",orientation:"portrait",disableAnimations:!0,disableSuccessBeep:!1})}},{key:"renderToolbar",value:function(){return l["default"].createElement(f.Toolbar,null,l["default"].createElement("div",{className:"center"},"Navigator"))}},{key:"render",value:function(){return l["default"].createElement(f.Page,{renderToolbar:this.renderToolbar},l["default"].createElement("p",{style:{textAlign:"center"}},l["default"].createElement(f.Button,{onClick:this.pushPage.bind(this)},"Push page")),l["default"].createElement("p",{style:{textAlign:"center"}},l["default"].createElement(f.Button,{onClick:this.takeScan.bind(this)},"Take Scan")))}}]),t}(l["default"].Component),h=_;t["default"]=h,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(_,"MainPage","/Users/tfox/workspace/monaca-test/sample2/src/MainPage.jsx"),__REACT_HOT_LOADER__.register(h,"default","/Users/tfox/workspace/monaca-test/sample2/src/MainPage.jsx"))}()},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(8),l=r(c),s=n(38),f=(r(s),n(178)),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"pushPage",value:function(){this.props.navigator.pushPage({component:t})}},{key:"popPage",value:function(){this.props.navigator.popPage()}},{key:"renderToolbar",value:function(){return l["default"].createElement(f.Toolbar,null,l["default"].createElement("div",{className:"left"},l["default"].createElement(f.BackButton,null,"Back")),l["default"].createElement("div",{className:"center"},"Another page"))}},{key:"render",value:function(){return l["default"].createElement(f.Page,{renderToolbar:this.renderToolbar},l["default"].createElement("p",{style:{textAlign:"center"}},l["default"].createElement(f.Button,{onClick:this.pushPage.bind(this)},"Push page"),l["default"].createElement(f.Button,{onClick:this.popPage.bind(this)},"Pop page")))}}]),t}(l["default"].Component),d=p;t["default"]=d,function(){"undefined"!=typeof __REACT_HOT_LOADER__&&(__REACT_HOT_LOADER__.register(p,"SecondPage","/Users/tfox/workspace/monaca-test/sample2/src/SecondPage.jsx"),__REACT_HOT_LOADER__.register(d,"default","/Users/tfox/workspace/monaca-test/sample2/src/SecondPage.jsx"))}()},186:function(e,t){},193:186});