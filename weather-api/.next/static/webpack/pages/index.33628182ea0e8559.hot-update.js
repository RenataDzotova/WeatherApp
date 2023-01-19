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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                children: [\n                    errorMessage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    data.name,\n                    weather && weather.map((w, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: w.main\n                                    }, void 0, false, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"The temperature is \",\n                                            data.main.temp.toFixed(),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Feels like \",\n                                            data.main.feels_like.toFixed(),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Humidity \",\n                                            data.main.humidity,\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Atmospheric pressure \",\n                                            data.main.pressure,\n                                            \"hPa\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Wind \",\n                                            data.wind.speed,\n                                            \"miles/hour\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUE0QjtBQUNFO0FBQ2dCO0FBQ3JCO0FBQ087QUFDeUM7QUFFMUQsU0FBU1MsT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDLENBQUM7SUFDbEMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ1UsU0FBU0MsV0FBVyxHQUFHWCwrQ0FBUUE7SUFDdEMsTUFBTSxDQUFDWSxjQUFjQyxnQkFBZ0IsR0FBR2IsK0NBQVFBLENBQUM7SUFFakQsTUFBTWMsaUJBQWlCLENBQUNDLFFBQVU7UUFDaEMsSUFBSUEsTUFBTUMsR0FBRyxLQUFLLFNBQVE7WUFDeEJqQixpREFBUyxDQUFDbUIsS0FDVEMsSUFBSSxDQUFDLENBQUNDLFdBQWE7Z0JBQ2xCQyxRQUFRQyxLQUFLO2dCQUNiZixRQUFRYSxTQUFTZCxJQUFJO2dCQUNyQmUsUUFBUUUsR0FBRyxDQUFDSCxTQUFTZCxJQUFJO2dCQUN6QkssV0FBV1MsU0FBU2QsSUFBSSxDQUFDSSxPQUFPO2dCQUNoQ0csZ0JBQWdCO1lBQ2xCLEdBQUlXLEtBQUssQ0FBQ0MsQ0FBQUEsTUFBTztnQkFDZkosUUFBUUUsR0FBRyxDQUFDRTtnQkFDWlosZ0JBQWdCO2dCQUNoQk4sUUFBUSxDQUFDO2dCQUNUSTtZQUNGO1lBQ0FGLFlBQVk7UUFDZCxDQUFDO0lBQ0g7SUFFQSxJQUFJaUIsU0FBUztJQUNiLElBQUlDLE9BQU87SUFDWCxJQUFJQyxRQUFRO0lBQ1osTUFBTVYsTUFBTSxxREFBdUVVLE9BQWxCcEIsVUFBUyxXQUF3QmtCLE9BQWZFLE9BQU0sV0FBd0JELE9BQWZELFFBQU8sVUFBYSxPQUFMQztJQUVqSCxxQkFDRSw4REFBQ0U7OzBCQUNDLDhEQUFDakMsa0RBQUlBOztrQ0FDSCw4REFBQ2tDO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ2xDLG1EQUFPQTtnQkFBQ21DLFNBQVE7O29CQUNkekI7a0NBQ0QsOERBQUMwQjt3QkFDREMsT0FBUy9CO3dCQUNUZ0MsVUFBVXpCLENBQUFBLFFBQVFOLFlBQVlNLE1BQU0wQixNQUFNLENBQUNGLEtBQUs7d0JBQ2hERyxhQUFZO3dCQUNaQyxXQUFXN0I7d0JBQ1g4QixNQUFLOzs7Ozs7b0JBR0p0QyxLQUFLMEIsSUFBSTtvQkFFUnRCLFdBQVdBLFFBQVFtQyxHQUFHLENBQUMsQ0FBQ0MsR0FBR0MsUUFBUzt3QkFDbEMscUJBQ0UsOERBQUM5QyxtREFBT0E7c0NBQ1IsNEVBQUM0Qjs7a0RBQ0QsOERBQUNBO2tEQUFLaUIsRUFBRUUsSUFBSTs7Ozs7O2tEQUVWLDhEQUFDbkI7OzRDQUFJOzRDQUFvQnZCLEtBQUswQyxJQUFJLENBQUNDLElBQUksQ0FBQ0MsT0FBTzs0Q0FBRzs7Ozs7OztrREFDbEQsOERBQUNyQjs7NENBQUk7NENBQVl2QixLQUFLMEMsSUFBSSxDQUFDRyxVQUFVLENBQUNELE9BQU87NENBQUc7Ozs7Ozs7a0RBQ2hELDhEQUFDckI7OzRDQUFJOzRDQUFVdkIsS0FBSzBDLElBQUksQ0FBQ0ksUUFBUTs0Q0FBQzs7Ozs7OztrREFDbEMsOERBQUN2Qjs7NENBQUk7NENBQXNCdkIsS0FBSzBDLElBQUksQ0FBQ0ssUUFBUTs0Q0FBQzs7Ozs7OztrREFDOUMsOERBQUN4Qjs7NENBQUk7NENBQU12QixLQUFLZ0QsSUFBSSxDQUFDQyxLQUFLOzRDQUFDOzs7Ozs7OzsrQkFQbkJSOzs7Ozs7Ozs7O29CQVlkOzs7Ozs7Ozs7Ozs7O0FBa0JWLENBQUM7R0FuRnVCMUM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBGbGV4Qm94LCBXcmFwcGVyLCBUZXh0LCBJbWdQbGFjZWhvbGRlciB9IGZyb20gJy4uL3N0eWxlcy9nbG9iYWwnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtkYXRhLCBzZXREYXRhXSA9IHVzZVN0YXRlKHt9KTtcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt3ZWF0aGVyLCBzZXRXZWF0aGVyXSA9IHVzZVN0YXRlKCk7XG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZSgnJylcblxuICBjb25zdCBzZWFyY2hMb2NhdGlvbiA9IChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiRW50ZXJcIil7XG4gICAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuY2xlYXIoKVxuICAgICAgICBzZXREYXRhKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIHNldFdlYXRoZXIocmVzcG9uc2UuZGF0YS53ZWF0aGVyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJcIilcbiAgICAgIH0pIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlBsZWFzZSBlbnRlciBhbm90aGVyIGxvY2F0aW9uXCIpXG4gICAgICAgIHNldERhdGEoe30pXG4gICAgICAgIHNldFdlYXRoZXIoKVxuICAgICAgfSlcbiAgICAgIHNldExvY2F0aW9uKCcnKVxuICAgIH1cbiAgfVxuXG4gIHZhciBhcGlLZXkgPSBcImYxYzNhYmE5ZjQxNmVmZGIxNjcwMmQyODY2NzA5ZTk4XCI7XG4gIHZhciBsYW5nID0gXCJlblwiO1xuICB2YXIgdW5pdHMgPSBcIm1ldHJpY1wiO1xuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZ1bml0cz0ke3VuaXRzfSZhcHBpZD0ke2FwaUtleX0mbGFuZz0ke2xhbmd9YFxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxXcmFwcGVyIGJnSW1hZ2U9XCIva2Vucmljay1taWxscy1NRjlXeTFOQTU1SS11bnNwbGFzaC0yLmpwZ1wiPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWUgPSB7bG9jYXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIlxuICAgICAgICBvbktleURvd249e3NlYXJjaExvY2F0aW9ufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgPC9pbnB1dD5cbiAgICAgICAge2RhdGEubmFtZX1cbiAgICAgICAge1xuICAgICAgICAgIHdlYXRoZXIgJiYgd2VhdGhlci5tYXAoKHcsIGluZGV4KSA9PntcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPEZsZXhCb3g+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXY+e3cubWFpbn08L2Rpdj5cbiAgICAgICAgICAgICAgICB7LyogPGRpdj57dy5kZXNjcmlwdGlvbn08L2Rpdj4gKi99XG4gICAgICAgICAgICAgICAgPGRpdj5UaGUgdGVtcGVyYXR1cmUgaXMge2RhdGEubWFpbi50ZW1wLnRvRml4ZWQoKX3CsEM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkZlZWxzIGxpa2Uge2RhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoKX3CsEM8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pkh1bWlkaXR5IHtkYXRhLm1haW4uaHVtaWRpdHl9JTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXY+QXRtb3NwaGVyaWMgcHJlc3N1cmUge2RhdGEubWFpbi5wcmVzc3VyZX1oUGE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PldpbmQge2RhdGEud2luZC5zcGVlZH1taWxlcy9ob3VyPC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPSBcImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dy5pY29ufUA0eC5wbmdcIiAvPiAqL31cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L1dyYXBwZXI+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJheGlvcyIsInVzZVN0YXRlIiwiRmxleEJveCIsIldyYXBwZXIiLCJUZXh0IiwiSW1nUGxhY2Vob2xkZXIiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZWFyY2hMb2NhdGlvbiIsImV2ZW50Iiwia2V5IiwiZ2V0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJhcGlLZXkiLCJsYW5nIiwidW5pdHMiLCJkaXYiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiYmdJbWFnZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwidHlwZSIsIm1hcCIsInciLCJpbmRleCIsIm1haW4iLCJ0ZW1wIiwidG9GaXhlZCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsInByZXNzdXJlIiwid2luZCIsInNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});