"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./context/FlowContext.jsx":
/*!*********************************!*\
  !*** ./context/FlowContext.jsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"FlowProvider\": function() { return /* binding */ FlowProvider; },\n/* harmony export */   \"useFlow\": function() { return /* binding */ useFlow; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_contract__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/contract */ \"./constants/contract.js\");\n/* harmony import */ var starknetkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! starknetkit */ \"./node_modules/starknetkit/dist/starknetkit.js\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\n\n// Create the context with default values\nconst FlowContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\n// Custom hook to use the Flow context\nconst useFlow = ()=>{\n    _s();\n    return (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(FlowContext);\n};\n_s(useFlow, \"gDsCjeeItUuvgOWf1v4qoK9RF6k=\");\n// Provider component to wrap around components that need access to the context\nconst FlowProvider = (param)=>{\n    let { children  } = param;\n    _s1();\n    const [allCommunity, setAllCommunity] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"learn\");\n    const [modalOpen, setModalOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [isUserMember, setIsUserMember] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [hideConnectBtn, setHideConnectBtn] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [provider, setProvider] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [connection, setConnection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const [walletAddress, setWalletAddress] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const connectToStarknet = async ()=>{\n            const { wallet  } = await (0,starknetkit__WEBPACK_IMPORTED_MODULE_3__.connect)({\n                modalMode: \"neverAsk\"\n            });\n            if (wallet && wallet.isConnected) {\n                setConnection(wallet);\n                setProvider(wallet.account);\n                setWalletAddress(wallet.selectedAddress);\n            }\n        };\n        connectToStarknet();\n    }, []);\n    const connectWallet = async ()=>{\n        const { wallet  } = await (0,starknetkit__WEBPACK_IMPORTED_MODULE_3__.connect)();\n        if (wallet && wallet.isConnected) {\n            setConnection(wallet);\n            setProvider(wallet.account);\n            setWalletAddress(wallet.selectedAddress);\n        }\n    };\n    const conectwithContract = async ()=>{};\n    // Function to create a new community\n    const createCommunity = async (name, description, image)=>{};\n    // Function to join an existing community\n    const joinCommunity = async (communityId)=>{};\n    const retriveUserCommunity = async ()=>{};\n    const ifMember = async (_communityId)=>{};\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        retriveUserCommunity();\n        ifMember();\n    }, [\n        walletAddress\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(FlowContext.Provider, {\n        value: {\n            allCommunity,\n            active,\n            modalOpen,\n            setModalOpen,\n            isUserMember,\n            createCommunity,\n            joinCommunity,\n            setActive,\n            hideConnectBtn,\n            setHideConnectBtn,\n            walletAddress,\n            connectWallet,\n            setWalletAddress,\n            ifMember\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/macbook/Desktop/Development/Lang-Bound/frontend/context/FlowContext.jsx\",\n        lineNumber: 80,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(FlowProvider, \"ADuhTHQ+WlENsMknGKwNCeOKCu8=\");\n_c = FlowProvider;\nvar _c;\n$RefreshReg$(_c, \"FlowProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0L0Zsb3dDb250ZXh0LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE4RTtBQUM5QztBQUN1QztBQUN0QjtBQUdqRCx5Q0FBeUM7QUFDekMsTUFBTVUsNEJBQWNULG9EQUFhQSxDQUFDVTtBQUVsQyxzQ0FBc0M7QUFDL0IsTUFBTUMsVUFBVSxJQUFNVjs7SUFBQUEsT0FBQUEsaURBQVVBLENBQUNRO0FBQVcsRUFBRTtHQUF4Q0U7QUFFYiwrRUFBK0U7QUFDeEUsTUFBTUMsZUFBZSxTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdaLCtDQUFRQSxDQUFDLEVBQUU7SUFDbkQsTUFBTSxDQUFDYSxRQUFRQyxVQUFVLEdBQUdkLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ2UsV0FBV0MsYUFBYSxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUNoRCxNQUFNLENBQUNpQixjQUFjQyxnQkFBZ0IsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFDdEQsTUFBTSxDQUFDbUIsZ0JBQWdCQyxrQkFBa0IsR0FBR3BCLCtDQUFRQSxDQUFDLEtBQUs7SUFDMUQsTUFBTSxDQUFDcUIsVUFBVUMsWUFBWSxHQUFHdEIsK0NBQVFBO0lBQ3hDLE1BQU0sQ0FBQ3VCLFlBQVlDLGNBQWMsR0FBR3hCLCtDQUFRQTtJQUc1QyxNQUFNLENBQUN5QixlQUFlQyxpQkFBaUIsR0FBRzFCLCtDQUFRQSxDQUFDLElBQUk7SUFFdkRELGdEQUFTQSxDQUFDLElBQU07UUFFZCxNQUFNNEIsb0JBQW9CLFVBQVk7WUFFcEMsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBRyxNQUFNeEIsb0RBQU9BLENBQUU7Z0JBQUV5QixXQUFXO1lBQVc7WUFFMUQsSUFBSUQsVUFBVUEsT0FBT0UsV0FBVyxFQUFFO2dCQUNoQ04sY0FBY0k7Z0JBQ2ROLFlBQVlNLE9BQU9HLE9BQU87Z0JBQzFCTCxpQkFBaUJFLE9BQU9JLGVBQWU7WUFDekMsQ0FBQztRQUNIO1FBRUFMO0lBQ0YsR0FBRyxFQUFFO0lBRUwsTUFBTU0sZ0JBQWdCLFVBQVk7UUFDaEMsTUFBTSxFQUFFTCxPQUFNLEVBQUUsR0FBRyxNQUFNeEIsb0RBQU9BO1FBRWxDLElBQUd3QixVQUFVQSxPQUFPRSxXQUFXLEVBQUU7WUFDL0JOLGNBQWNJO1lBQ2ROLFlBQVlNLE9BQU9HLE9BQU87WUFDMUJMLGlCQUFpQkUsT0FBT0ksZUFBZTtRQUN6QyxDQUFDO0lBQ0Q7SUFFQSxNQUFNRSxxQkFBcUIsVUFBWSxDQUV2QztJQUVBLHFDQUFxQztJQUNyQyxNQUFNQyxrQkFBa0IsT0FBT0MsTUFBTUMsYUFBYUMsUUFBVSxDQUU1RDtJQUVBLHlDQUF5QztJQUN6QyxNQUFNQyxnQkFBZ0IsT0FBT0MsY0FBZ0IsQ0FFN0M7SUFFQSxNQUFNQyx1QkFBdUIsVUFBWSxDQUV6QztJQUVBLE1BQU1DLFdBQVcsT0FBT0MsZUFBaUIsQ0FFekM7SUFFQTVDLGdEQUFTQSxDQUFDLElBQU07UUFDZDBDO1FBQ0FDO0lBQ0YsR0FBRztRQUFDakI7S0FBYztJQUVsQixxQkFDRSw4REFBQ25CLFlBQVlzQyxRQUFRO1FBQ25CQyxPQUFPO1lBQ0xsQztZQUNBRTtZQUNBRTtZQUNBQztZQUNBQztZQUNBa0I7WUFDQUk7WUFDQXpCO1lBQ0FLO1lBQ0FDO1lBQ0FLO1lBQ0FRO1lBQ0FQO1lBQ0FnQjtRQUNGO2tCQUVDaEM7Ozs7OztBQUdQLEVBQUU7SUF2RldEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbnRleHQvRmxvd0NvbnRleHQuanN4PzU1NGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGV0aGVycyB9IGZyb20gXCJldGhlcnNcIjtcbmltcG9ydCB7IGNvbW11bml0eUFiaSwgY29tbXVuaXR5QWRkcmVzcyB9IGZyb20gXCIuLi9jb25zdGFudHMvY29udHJhY3RcIjtcbmltcG9ydCB7IGNvbm5lY3QsIGRpc2Nvbm5lY3QgfSBmcm9tICdzdGFya25ldGtpdCdcblxuXG4vLyBDcmVhdGUgdGhlIGNvbnRleHQgd2l0aCBkZWZhdWx0IHZhbHVlc1xuY29uc3QgRmxvd0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbi8vIEN1c3RvbSBob29rIHRvIHVzZSB0aGUgRmxvdyBjb250ZXh0XG5leHBvcnQgY29uc3QgdXNlRmxvdyA9ICgpID0+IHVzZUNvbnRleHQoRmxvd0NvbnRleHQpO1xuXG4vLyBQcm92aWRlciBjb21wb25lbnQgdG8gd3JhcCBhcm91bmQgY29tcG9uZW50cyB0aGF0IG5lZWQgYWNjZXNzIHRvIHRoZSBjb250ZXh0XG5leHBvcnQgY29uc3QgRmxvd1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbYWxsQ29tbXVuaXR5LCBzZXRBbGxDb21tdW5pdHldID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoXCJsZWFyblwiKTtcbiAgY29uc3QgW21vZGFsT3Blbiwgc2V0TW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2lzVXNlck1lbWJlciwgc2V0SXNVc2VyTWVtYmVyXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2hpZGVDb25uZWN0QnRuLCBzZXRIaWRlQ29ubmVjdEJ0bl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtwcm92aWRlciwgc2V0UHJvdmlkZXJdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbY29ubmVjdGlvbiwgc2V0Q29ubmVjdGlvbl0gPSB1c2VTdGF0ZSgpXG5cblxuICBjb25zdCBbd2FsbGV0QWRkcmVzcywgc2V0V2FsbGV0QWRkcmVzc10gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuIFxuICAgIGNvbnN0IGNvbm5lY3RUb1N0YXJrbmV0ID0gYXN5bmMgKCkgPT4ge1xuICAgIFxuICAgICAgY29uc3QgeyB3YWxsZXQgfSA9IGF3YWl0IGNvbm5lY3QoIHsgbW9kYWxNb2RlOiBcIm5ldmVyQXNrXCIgfSApXG4gICAgXG4gICAgICBpZiAod2FsbGV0ICYmIHdhbGxldC5pc0Nvbm5lY3RlZCkge1xuICAgICAgICBzZXRDb25uZWN0aW9uKHdhbGxldCk7XG4gICAgICAgIHNldFByb3ZpZGVyKHdhbGxldC5hY2NvdW50KTtcbiAgICAgICAgc2V0V2FsbGV0QWRkcmVzcyh3YWxsZXQuc2VsZWN0ZWRBZGRyZXNzKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIFxuICAgIGNvbm5lY3RUb1N0YXJrbmV0KCk7XG4gIH0sIFtdKVxuXG4gIGNvbnN0IGNvbm5lY3RXYWxsZXQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyB3YWxsZXQgfSA9IGF3YWl0IGNvbm5lY3QoKTtcbiBcbiAgaWYod2FsbGV0ICYmIHdhbGxldC5pc0Nvbm5lY3RlZCkge1xuICAgIHNldENvbm5lY3Rpb24od2FsbGV0KVxuICAgIHNldFByb3ZpZGVyKHdhbGxldC5hY2NvdW50KVxuICAgIHNldFdhbGxldEFkZHJlc3Mod2FsbGV0LnNlbGVjdGVkQWRkcmVzcylcbiAgfVxuICB9O1xuXG4gIGNvbnN0IGNvbmVjdHdpdGhDb250cmFjdCA9IGFzeW5jICgpID0+IHtcbiAgXG4gIH07XG5cbiAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IGNvbW11bml0eVxuICBjb25zdCBjcmVhdGVDb21tdW5pdHkgPSBhc3luYyAobmFtZSwgZGVzY3JpcHRpb24sIGltYWdlKSA9PiB7XG4gICBcbiAgfTtcblxuICAvLyBGdW5jdGlvbiB0byBqb2luIGFuIGV4aXN0aW5nIGNvbW11bml0eVxuICBjb25zdCBqb2luQ29tbXVuaXR5ID0gYXN5bmMgKGNvbW11bml0eUlkKSA9PiB7XG4gICAgXG4gIH07XG5cbiAgY29uc3QgcmV0cml2ZVVzZXJDb21tdW5pdHkgPSBhc3luYyAoKSA9PiB7XG4gICBcbiAgfTtcblxuICBjb25zdCBpZk1lbWJlciA9IGFzeW5jIChfY29tbXVuaXR5SWQpID0+IHtcbiAgICBcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJldHJpdmVVc2VyQ29tbXVuaXR5KCk7XG4gICAgaWZNZW1iZXIoKTtcbiAgfSwgW3dhbGxldEFkZHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxGbG93Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgYWxsQ29tbXVuaXR5LFxuICAgICAgICBhY3RpdmUsXG4gICAgICAgIG1vZGFsT3BlbixcbiAgICAgICAgc2V0TW9kYWxPcGVuLFxuICAgICAgICBpc1VzZXJNZW1iZXIsXG4gICAgICAgIGNyZWF0ZUNvbW11bml0eSxcbiAgICAgICAgam9pbkNvbW11bml0eSxcbiAgICAgICAgc2V0QWN0aXZlLFxuICAgICAgICBoaWRlQ29ubmVjdEJ0bixcbiAgICAgICAgc2V0SGlkZUNvbm5lY3RCdG4sXG4gICAgICAgIHdhbGxldEFkZHJlc3MsXG4gICAgICAgIGNvbm5lY3RXYWxsZXQsXG4gICAgICAgIHNldFdhbGxldEFkZHJlc3MsXG4gICAgICAgIGlmTWVtYmVyXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L0Zsb3dDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJldGhlcnMiLCJjb21tdW5pdHlBYmkiLCJjb21tdW5pdHlBZGRyZXNzIiwiY29ubmVjdCIsImRpc2Nvbm5lY3QiLCJGbG93Q29udGV4dCIsInVuZGVmaW5lZCIsInVzZUZsb3ciLCJGbG93UHJvdmlkZXIiLCJjaGlsZHJlbiIsImFsbENvbW11bml0eSIsInNldEFsbENvbW11bml0eSIsImFjdGl2ZSIsInNldEFjdGl2ZSIsIm1vZGFsT3BlbiIsInNldE1vZGFsT3BlbiIsImlzVXNlck1lbWJlciIsInNldElzVXNlck1lbWJlciIsImhpZGVDb25uZWN0QnRuIiwic2V0SGlkZUNvbm5lY3RCdG4iLCJwcm92aWRlciIsInNldFByb3ZpZGVyIiwiY29ubmVjdGlvbiIsInNldENvbm5lY3Rpb24iLCJ3YWxsZXRBZGRyZXNzIiwic2V0V2FsbGV0QWRkcmVzcyIsImNvbm5lY3RUb1N0YXJrbmV0Iiwid2FsbGV0IiwibW9kYWxNb2RlIiwiaXNDb25uZWN0ZWQiLCJhY2NvdW50Iiwic2VsZWN0ZWRBZGRyZXNzIiwiY29ubmVjdFdhbGxldCIsImNvbmVjdHdpdGhDb250cmFjdCIsImNyZWF0ZUNvbW11bml0eSIsIm5hbWUiLCJkZXNjcmlwdGlvbiIsImltYWdlIiwiam9pbkNvbW11bml0eSIsImNvbW11bml0eUlkIiwicmV0cml2ZVVzZXJDb21tdW5pdHkiLCJpZk1lbWJlciIsIl9jb21tdW5pdHlJZCIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./context/FlowContext.jsx\n"));

/***/ })

});