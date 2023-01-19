"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                errorMessage,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: location,\n                    onChange: (event)=>setLocation(event.target.value),\n                    placeholder: \"Enter Location\",\n                    onKeyDown: searchLocation,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                weather && weather.map((w, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                        bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                            dir: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    dir: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            fontSize: \"65px\",\n                                            fontWeight: \"bold\",\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            alignItems: \"flex-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"90px\",\n                                                    fontWeight: \"bold\",\n                                                    children: [\n                                                        data.main.temp.toFixed(),\n                                                        \"\\xb0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                                    margin: \"15px 0 12px 10px\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                        color: \"white\",\n                                                        fontSize: \"30px\",\n                                                        children: [\n                                                            w.main,\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 62\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    bgColor: \"rgba(227, 227, 227, 0.25)\",\n                                    border: \"rgba(227, 227, 227) solid 2px\",\n                                    height: \"130px\",\n                                    width: \"55vw\",\n                                    borderRadius: \"30px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"65px\",\n                                                    children: [\n                                                        data.main.feels_like.toFixed(),\n                                                        \"\\xb0C\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Feels like\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"65px\",\n                                                    children: [\n                                                        data.main.humidity,\n                                                        \"%\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Humidity\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                            color: \"white\",\n                                                            fontSize: \"65px\",\n                                                            children: [\n                                                                data.main.pressure,\n                                                                \" \"\n                                                            ]\n                                                        }, void 0, true, {\n                                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 34\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                            fontSize: \"20px\",\n                                                            children: \"hPa\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                            lineNumber: 80,\n                                                            columnNumber: 98\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Pressure\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                            color: \"white\",\n                                                            fontSize: \"65px\",\n                                                            children: data.wind.speed\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 34\n                                                        }, this),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                            fontSize: \"20px\",\n                                                            children: \"MPH\"\n                                                        }, void 0, false, {\n                                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                            lineNumber: 84,\n                                                            columnNumber: 94\n                                                        }, this)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Wind\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bURBQU9BOzRDQUFDeUMsS0FBSTs7OERBQ1gsOERBQUN2QyxnREFBSUE7b0RBQUN3QyxPQUFNO29EQUFRQyxVQUFTOzt3REFBUXRDLEtBQUt3QixJQUFJLENBQUMyQixRQUFRO3dEQUFDOzs7Ozs7OzhEQUN4RCw4REFBQ3RELGdEQUFJQTtvREFBQ3dDLE9BQU07OERBQVE7Ozs7Ozs7Ozs7OztzREFFdEIsOERBQUMxQyxtREFBT0E7NENBQUN5QyxLQUFJOzs4REFDWCw4REFBQ3pDLG1EQUFPQTs7c0VBQUMsOERBQUNFLGdEQUFJQTs0REFBQ3dDLE9BQU07NERBQVFDLFVBQVM7O2dFQUFRdEMsS0FBS3dCLElBQUksQ0FBQzRCLFFBQVE7Z0VBQUM7Ozs7Ozs7c0VBQVEsOERBQUN2RCxnREFBSUE7NERBQUN5QyxVQUFTO3NFQUFPOzs7Ozs7Ozs7Ozs7OERBQy9GLDhEQUFDekMsZ0RBQUlBO29EQUFDd0MsT0FBTTs4REFBUTs7Ozs7Ozs7Ozs7O3NEQUV0Qiw4REFBQzFDLG1EQUFPQTs0Q0FBQ3lDLEtBQUk7OzhEQUNYLDhEQUFDekMsbURBQU9BOztzRUFBQyw4REFBQ0UsZ0RBQUlBOzREQUFDd0MsT0FBTTs0REFBUUMsVUFBUztzRUFBUXRDLEtBQUtxRCxJQUFJLENBQUNDLEtBQUs7Ozs7OztzRUFBUSw4REFBQ3pELGdEQUFJQTs0REFBQ3lDLFVBQVM7c0VBQU87Ozs7Ozs7Ozs7Ozs4REFDM0YsOERBQUN6QyxnREFBSUE7b0RBQUN3QyxPQUFNOzhEQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzJCQXZCWkg7Ozs7Ozs7Ozs7Z0JBOEJ0Qjs7Ozs7Ozs7Ozs7O0FBa0JWLENBQUM7R0F0R3VCbkM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGbGV4Qm94LCBXcmFwcGVyLCBUZXh0LCBJbWdQbGFjZWhvbGRlciB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIil7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldFdlYXRoZXIocmVzcG9uc2UuZGF0YS53ZWF0aGVyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIilcbiAgICAgIH0pIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhbm90aGVyIGxvY2F0aW9uXCIpXG4gICAgICAgIHNldERhdGEoe30pXG4gICAgICAgIHNldFdlYXRoZXIoKVxuICAgICAgfSlcbiAgICAgIHNldExvY2F0aW9uKCcnKVxuICAgIH1cbiAgfVxuXG4gIHZhciBhcGlLZXkgPSBcImYxYzNhYmE5ZjQxNmVmZGIxNjcwMmQyODY2NzA5ZTk4XCI7XG4gIHZhciBsYW5nID0gXCJlblwiO1xuICB2YXIgdW5pdHMgPSBcIm1ldHJpY1wiO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX0mbGFuZz0ke2xhbmd9YFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIHsvKiA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPiAqL31cblxuICAgICAgPG1haW4+XG4gICAgICAgIHtlcnJvck1lc3NhZ2V9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICB2YWx1ZSA9IHtsb2NhdGlvbn1cbiAgICAgICAgb25DaGFuZ2U9e2V2ZW50PT4gc2V0TG9jYXRpb24oZXZlbnQudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBMb2NhdGlvblwiXG4gICAgICAgIG9uS2V5RG93bj17c2VhcmNoTG9jYXRpb259XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgPlxuICAgICAgICA8L2lucHV0PlxuXG4gICAgICAgIHtcbiAgICAgICAgICB3ZWF0aGVyICYmIHdlYXRoZXIubWFwKCh3LCBpbmRleCkgPT57XG4gICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgIDxXcmFwcGVyIGJnSW1hZ2U9XCIva2Vucmljay1taWxscy1NRjlXeTFOQTU1SS11bnNwbGFzaC0yLmpwZ1wiPlxuXG4gICAgICAgICAgICAgICAgICA8RmxleEJveCBrZXk9e2luZGV4fSBkaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggZGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiNjVweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+e2RhdGEubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBhbGlnbkl0ZW1zPVwiZmxleC1zdGFydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCI5MHB4XCIgZm9udFdlaWdodD1cImJvbGRcIj57ZGF0YS5tYWluLnRlbXAudG9GaXhlZCgpfcKwPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBtYXJnaW49XCIxNXB4IDAgMTJweCAxMHB4XCI+PFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiMzBweFwiPnt3Lm1haW59IDwvVGV4dD48L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggYmdDb2xvcj1cInJnYmEoMjI3LCAyMjcsIDIyNywgMC4yNSlcIiBib3JkZXI9XCJyZ2JhKDIyNywgMjI3LCAyMjcpIHNvbGlkIDJweFwiIGhlaWdodD1cIjEzMHB4XCIgd2lkdGg9XCI1NXZ3XCIgYm9yZGVyUmFkaXVzPVwiMzBweFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiNjVweFwiPntkYXRhLm1haW4uZmVlbHNfbGlrZS50b0ZpeGVkKCl9wrBDPC9UZXh0PiBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5GZWVscyBsaWtlPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBkaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjY1cHhcIj57ZGF0YS5tYWluLmh1bWlkaXR5fSU8L1RleHQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPkh1bWlkaXR5PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBkaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94PjxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjY1cHhcIj57ZGF0YS5tYWluLnByZXNzdXJlfSA8L1RleHQ+PFRleHQgZm9udFNpemU9XCIyMHB4XCI+aFBhPC9UZXh0PjwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5QcmVzc3VyZTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggZGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveD48VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCI2NXB4XCI+e2RhdGEud2luZC5zcGVlZH08L1RleHQ+PFRleHQgZm9udFNpemU9XCIyMHB4XCI+TVBIPC9UZXh0PjwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5XaW5kPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9IFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3Lmljb259QDR4LnBuZ1wiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJheGlvcyIsInVzZVN0YXRlIiwiRmxleEJveCIsIldyYXBwZXIiLCJUZXh0IiwiSW1nUGxhY2Vob2xkZXIiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZWFyY2hMb2NhdGlvbiIsImV2ZW50Iiwia2V5IiwiZ2V0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJhcGlLZXkiLCJsYW5nIiwidW5pdHMiLCJkaXYiLCJtYWluIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJ0eXBlIiwibWFwIiwidyIsImluZGV4IiwiYmdJbWFnZSIsImRpciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibmFtZSIsImFsaWduSXRlbXMiLCJ0ZW1wIiwidG9GaXhlZCIsIm1hcmdpbiIsImJnQ29sb3IiLCJib3JkZXIiLCJoZWlnaHQiLCJ3aWR0aCIsImJvcmRlclJhZGl1cyIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsInByZXNzdXJlIiwid2luZCIsInNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});