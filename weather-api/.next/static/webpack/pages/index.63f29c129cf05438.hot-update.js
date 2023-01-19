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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                errorMessage,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: location,\n                    onChange: (event)=>setLocation(event.target.value),\n                    placeholder: \"Enter Location\",\n                    onKeyDown: searchLocation,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                weather && weather.map((w, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                        bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                            dir: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    dir: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            fontSize: \"65px\",\n                                            fontWeight: \"bold\",\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            alignItems: \"flex-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"90px\",\n                                                    fontWeight: \"bold\",\n                                                    children: [\n                                                        data.main.temp.toFixed(),\n                                                        \"\\xb0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                                    margin: \"15px 0 12px 10px\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                        color: \"white\",\n                                                        fontSize: \"30px\",\n                                                        children: [\n                                                            w.main,\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 62\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    bgColor: \"rgba(227, 227, 227, 0.25)\",\n                                    height: \"130px\",\n                                    width: \"50vw\",\n                                    borderRadius: \"30px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: [\n                                                        data.main.feels_like.toFixed(),\n                                                        \"\\xb0C\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 72,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Feels like\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 73,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: [\n                                                        data.main.humidity,\n                                                        \"%\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 76,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Humidity\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 77,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 75,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: [\n                                                        data.main.pressure,\n                                                        \" hPa\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 80,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Pressure\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 81,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 79,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            dir: \"column\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: [\n                                                        data.wind.speed,\n                                                        \" miles/hour\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 84,\n                                                    columnNumber: 25\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    children: \"Wind\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 85,\n                                                    columnNumber: 25\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 83,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNFO0FBQ2dCO0FBQ3JCO0FBQ087QUFDeUM7QUFFMUQsU0FBU1MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFakQsTUFBTWMsaUJBQWlCLENBQUNDLFFBQVU7UUFDaEMsSUFBSUEsTUFBTUMsR0FBRyxLQUFLLFNBQVE7WUFDeEJqQixpREFBUyxDQUFDbUIsS0FDVEMsSUFBSSxDQUFDLENBQUNDLFdBQWE7Z0JBQ2xCQyxRQUFRQyxLQUFLO2dCQUNiZixRQUFRYSxTQUFTZCxJQUFJO2dCQUNyQmUsUUFBUUUsR0FBRyxDQUFDSCxTQUFTZCxJQUFJO2dCQUN6QkssV0FBV1MsU0FBU2QsSUFBSSxDQUFDSSxPQUFPO2dCQUNoQ0csZ0JBQWdCO1lBQ2xCLEdBQUlXLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDZkosUUFBUUUsR0FBRyxDQUFDRTtnQkFDWlosZ0JBQWdCO2dCQUNoQk4sUUFBUSxDQUFDO2dCQUNUSTtZQUNGO1lBQ0FGLFlBQVk7UUFDZCxDQUFDO0lBQ0g7SUFFQSxJQUFJaUIsU0FBUztJQUNiLElBQUlDLE9BQU87SUFDWCxJQUFJQyxRQUFRO0lBQ1osTUFBTVYsTUFBTSxxREFBdUVVLE9BQWxCcEIsVUFBUyxXQUF3QmtCLE9BQWZFLE9BQU0sV0FBd0JELE9BQWZELFFBQU8sVUFBYSxPQUFMQztJQUVqSCxxQkFDRSw4REFBQ0U7a0JBT0MsNEVBQUNDOztnQkFDRWxCOzhCQUNELDhEQUFDbUI7b0JBQ0RDLE9BQVN4QjtvQkFDVHlCLFVBQVVsQixDQUFBQSxRQUFRTixZQUFZTSxNQUFNbUIsTUFBTSxDQUFDRixLQUFLO29CQUNoREcsYUFBWTtvQkFDWkMsV0FBV3RCO29CQUNYdUIsTUFBSzs7Ozs7O2dCQUtIM0IsV0FBV0EsUUFBUTRCLEdBQUcsQ0FBQyxDQUFDQyxHQUFHQyxRQUFTO29CQUNsQyxxQkFDRSw4REFBQ3RDLG1EQUFPQTt3QkFBQ3VDLFNBQVE7a0NBRWIsNEVBQUN4QyxtREFBT0E7NEJBQWF5QyxLQUFJOzs4Q0FDdkIsOERBQUN6QyxtREFBT0E7b0NBQUN5QyxLQUFJOztzREFDWCw4REFBQ3ZDLGdEQUFJQTs0Q0FBQ3dDLE9BQU07NENBQVFDLFVBQVM7NENBQU9DLFlBQVc7c0RBQVF2QyxLQUFLd0MsSUFBSTs7Ozs7O3NEQUM5RCw4REFBQzdDLG1EQUFPQTs0Q0FBQzhDLFlBQVc7OzhEQUNsQiw4REFBQzVDLGdEQUFJQTtvREFBQ3dDLE9BQU07b0RBQVFDLFVBQVM7b0RBQU9DLFlBQVc7O3dEQUFRdkMsS0FBS3dCLElBQUksQ0FBQ2tCLElBQUksQ0FBQ0MsT0FBTzt3REFBRzs7Ozs7Ozs4REFDaEYsOERBQUNoRCxtREFBT0E7b0RBQUNpRCxRQUFPOzhEQUFtQiw0RUFBQy9DLGdEQUFJQTt3REFBQ3dDLE9BQU07d0RBQVFDLFVBQVM7OzREQUFRTCxFQUFFVCxJQUFJOzREQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OENBR3JGLDhEQUFDN0IsbURBQU9BO29DQUFDa0QsU0FBUTtvQ0FBNEJDLFFBQU87b0NBQVFDLE9BQU07b0NBQU9DLGNBQWE7O3NEQUNwRiw4REFBQ3JELG1EQUFPQTs0Q0FBQ3lDLEtBQUk7OzhEQUNYLDhEQUFDdkMsZ0RBQUlBO29EQUFDd0MsT0FBTTs7d0RBQVNyQyxLQUFLd0IsSUFBSSxDQUFDeUIsVUFBVSxDQUFDTixPQUFPO3dEQUFHOzs7Ozs7OzhEQUNwRCw4REFBQzlDLGdEQUFJQTtvREFBQ3dDLE9BQU07OERBQVE7Ozs7Ozs7Ozs7OztzREFFdEIsOERBQUMxQyxtREFBT0E7NENBQUN5QyxLQUFJOzs4REFDWCw4REFBQ3ZDLGdEQUFJQTtvREFBQ3dDLE9BQU07O3dEQUFTckMsS0FBS3dCLElBQUksQ0FBQzBCLFFBQVE7d0RBQUM7Ozs7Ozs7OERBQ3hDLDhEQUFDckQsZ0RBQUlBO29EQUFDd0MsT0FBTTs4REFBUTs7Ozs7Ozs7Ozs7O3NEQUV0Qiw4REFBQzFDLG1EQUFPQTs0Q0FBQ3lDLEtBQUk7OzhEQUNYLDhEQUFDdkMsZ0RBQUlBO29EQUFDd0MsT0FBTTs7d0RBQVNyQyxLQUFLd0IsSUFBSSxDQUFDMkIsUUFBUTt3REFBQzs7Ozs7Ozs4REFDeEMsOERBQUN0RCxnREFBSUE7b0RBQUN3QyxPQUFNOzhEQUFROzs7Ozs7Ozs7Ozs7c0RBRXRCLDhEQUFDMUMsbURBQU9BOzRDQUFDeUMsS0FBSTs7OERBQ1gsOERBQUN2QyxnREFBSUE7b0RBQUN3QyxPQUFNOzt3REFBU3JDLEtBQUtvRCxJQUFJLENBQUNDLEtBQUs7d0RBQUM7Ozs7Ozs7OERBQ3JDLDhEQUFDeEQsZ0RBQUlBO29EQUFDd0MsT0FBTTs4REFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsyQkF2QlpIOzs7Ozs7Ozs7O2dCQThCdEI7Ozs7Ozs7Ozs7OztBQWtCVixDQUFDO0dBdEd1Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmxleEJveCwgV3JhcHBlciwgVGV4dCwgSW1nUGxhY2Vob2xkZXIgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGEud2VhdGhlcilcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICB9KSAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgIH0pXG4gICAgICBzZXRMb2NhdGlvbignJylcbiAgICB9XG4gIH1cblxuICB2YXIgYXBpS2V5ID0gXCJmMWMzYWJhOWY0MTZlZmRiMTY3MDJkMjg2NjcwOWU5OFwiO1xuICB2YXIgbGFuZyA9IFwiZW5cIjtcbiAgdmFyIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD4gKi99XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWUgPSB7bG9jYXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIlxuICAgICAgICBvbktleURvd249e3NlYXJjaExvY2F0aW9ufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgPC9pbnB1dD5cblxuICAgICAgICB7XG4gICAgICAgICAgd2VhdGhlciAmJiB3ZWF0aGVyLm1hcCgodywgaW5kZXgpID0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8V3JhcHBlciBiZ0ltYWdlPVwiL2tlbnJpY2stbWlsbHMtTUY5V3kxTkE1NUktdW5zcGxhc2gtMi5qcGdcIj5cblxuICAgICAgICAgICAgICAgICAgPEZsZXhCb3gga2V5PXtpbmRleH0gZGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjY1cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPntkYXRhLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiOTBweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+e2RhdGEubWFpbi50ZW1wLnRvRml4ZWQoKX3CsDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggbWFyZ2luPVwiMTVweCAwIDEycHggMTBweFwiPjxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjMwcHhcIj57dy5tYWlufSA8L1RleHQ+PC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGJnQ29sb3I9XCJyZ2JhKDIyNywgMjI3LCAyMjcsIDAuMjUpXCIgaGVpZ2h0PVwiMTMwcHhcIiB3aWR0aD1cIjUwdndcIiBib3JkZXJSYWRpdXM9XCIzMHB4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggZGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+e2RhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoKX3CsEM8L1RleHQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPkZlZWxzIGxpa2U8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPntkYXRhLm1haW4uaHVtaWRpdHl9JTwvVGV4dD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+SHVtaWRpdHk8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPntkYXRhLm1haW4ucHJlc3N1cmV9IGhQYTwvVGV4dD4gXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+UHJlc3N1cmU8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPntkYXRhLndpbmQuc3BlZWR9IG1pbGVzL2hvdXI8L1RleHQ+IFxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPldpbmQ8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0gXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3cuaWNvbn1ANHgucG5nXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgPC9XcmFwcGVyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgey8qIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly92ZXJjZWwuY29tP3V0bV9zb3VyY2U9Y3JlYXRlLW5leHQtYXBwJnV0bV9tZWRpdW09ZGVmYXVsdC10ZW1wbGF0ZSZ1dG1fY2FtcGFpZ249Y3JlYXRlLW5leHQtYXBwXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgUG93ZXJlZCBieXsnICd9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMubG9nb30+XG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL3ZlcmNlbC5zdmdcIiBhbHQ9XCJWZXJjZWwgTG9nb1wiIHdpZHRoPXs3Mn0gaGVpZ2h0PXsxNn0gLz5cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvZm9vdGVyPiAqL31cbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJJbWFnZSIsInN0eWxlcyIsImF4aW9zIiwidXNlU3RhdGUiLCJGbGV4Qm94IiwiV3JhcHBlciIsIlRleHQiLCJJbWdQbGFjZWhvbGRlciIsIkhvbWUiLCJkYXRhIiwic2V0RGF0YSIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJ3ZWF0aGVyIiwic2V0V2VhdGhlciIsImVycm9yTWVzc2FnZSIsInNldEVycm9yTWVzc2FnZSIsInNlYXJjaExvY2F0aW9uIiwiZXZlbnQiLCJrZXkiLCJnZXQiLCJ1cmwiLCJ0aGVuIiwicmVzcG9uc2UiLCJjb25zb2xlIiwiY2xlYXIiLCJsb2ciLCJjYXRjaCIsImVyciIsImFwaUtleSIsImxhbmciLCJ1bml0cyIsImRpdiIsIm1haW4iLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsInR5cGUiLCJtYXAiLCJ3IiwiaW5kZXgiLCJiZ0ltYWdlIiwiZGlyIiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJuYW1lIiwiYWxpZ25JdGVtcyIsInRlbXAiLCJ0b0ZpeGVkIiwibWFyZ2luIiwiYmdDb2xvciIsImhlaWdodCIsIndpZHRoIiwiYm9yZGVyUmFkaXVzIiwiZmVlbHNfbGlrZSIsImh1bWlkaXR5IiwicHJlc3N1cmUiLCJ3aW5kIiwic3BlZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});