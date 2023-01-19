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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                errorMessage,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: location,\n                    onChange: (event)=>setLocation(event.target.value),\n                    placeholder: \"Enter Location\",\n                    onKeyDown: searchLocation,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                weather && weather.map((w, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                        bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                            dir: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    dir: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            fontSize: \"65px\",\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            alignItems: \"flex-end\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"65px\",\n                                                    children: [\n                                                        data.main.temp.toFixed(),\n                                                        \"\\xb0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"30px\",\n                                                    children: [\n                                                        w.main,\n                                                        \" \"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Feels like \",\n                                                data.main.feels_like.toFixed(),\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Humidity \",\n                                                data.main.humidity,\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Pressure \",\n                                                data.main.pressure,\n                                                \" hPa\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Wind \",\n                                                data.wind.speed,\n                                                \" miles/hour\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsS0FBSztnREFBQzs7Ozs7Ozs7Ozs7Ozs7MkJBWmhDYjs7Ozs7Ozs7OztnQkFrQnRCOzs7Ozs7Ozs7Ozs7QUFrQlYsQ0FBQztHQTFGdUJuQztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IEZsZXhCb3gsIFdyYXBwZXIsIFRleHQsIEltZ1BsYWNlaG9sZGVyIH0gZnJvbSAnLi4vc3R5bGVzL2dsb2JhbCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUoe30pO1xuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3dlYXRoZXIsIHNldFdlYXRoZXJdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2Vycm9yTWVzc2FnZSwgc2V0RXJyb3JNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuXG4gIGNvbnN0IHNlYXJjaExvY2F0aW9uID0gKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCJFbnRlclwiKXtcbiAgICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgY29uc29sZS5jbGVhcigpXG4gICAgICAgIHNldERhdGEocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSlcbiAgICAgICAgc2V0V2VhdGhlcihyZXNwb25zZS5kYXRhLndlYXRoZXIpXG4gICAgICAgIHNldEVycm9yTWVzc2FnZShcIlwiKVxuICAgICAgfSkgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiUGxlYXNlIGVudGVyIGFub3RoZXIgbG9jYXRpb25cIilcbiAgICAgICAgc2V0RGF0YSh7fSlcbiAgICAgICAgc2V0V2VhdGhlcigpXG4gICAgICB9KVxuICAgICAgc2V0TG9jYXRpb24oJycpXG4gICAgfVxuICB9XG5cbiAgdmFyIGFwaUtleSA9IFwiZjFjM2FiYTlmNDE2ZWZkYjE2NzAyZDI4NjY3MDllOThcIjtcbiAgdmFyIGxhbmcgPSBcImVuXCI7XG4gIHZhciB1bml0cyA9IFwibWV0cmljXCI7XG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JnVuaXRzPSR7dW5pdHN9JmFwcGlkPSR7YXBpS2V5fSZsYW5nPSR7bGFuZ31gXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgey8qIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+ICovfVxuXG4gICAgICA8bWFpbj5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlID0ge2xvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQ9PiBzZXRMb2NhdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExvY2F0aW9uXCJcbiAgICAgICAgb25LZXlEb3duPXtzZWFyY2hMb2NhdGlvbn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICA+XG4gICAgICAgIDwvaW5wdXQ+XG5cbiAgICAgICAge1xuICAgICAgICAgIHdlYXRoZXIgJiYgd2VhdGhlci5tYXAoKHcsIGluZGV4KSA9PntcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFdyYXBwZXIgYmdJbWFnZT1cIi9rZW5yaWNrLW1pbGxzLU1GOVd5MU5BNTVJLXVuc3BsYXNoLTIuanBnXCI+XG5cbiAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGtleT17aW5kZXh9IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBkaXI9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCIgZm9udFNpemU9XCI2NXB4XCI+e2RhdGEubmFtZX08L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8RmxleEJveCBhbGlnbkl0ZW1zPVwiZmxleC1lbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiNjVweFwiPntkYXRhLm1haW4udGVtcC50b0ZpeGVkKCl9wrA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjMwcHhcIj57dy5tYWlufSA8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgIDwvRmxleEJveD5cbiAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPkZlZWxzIGxpa2Uge2RhdGEubWFpbi5mZWVsc19saWtlLnRvRml4ZWQoKX3CsEM8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPkh1bWlkaXR5IHtkYXRhLm1haW4uaHVtaWRpdHl9JTwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+UHJlc3N1cmUge2RhdGEubWFpbi5wcmVzc3VyZX0gaFBhPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5XaW5kIHtkYXRhLndpbmQuc3BlZWR9IG1pbGVzL2hvdXI8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxpbWcgc3JjPSBcImh0dHA6Ly9vcGVud2VhdGhlcm1hcC5vcmcvaW1nL3duLyR7dy5pY29ufUA0eC5wbmdcIiAvPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkZsZXhCb3giLCJXcmFwcGVyIiwiVGV4dCIsIkltZ1BsYWNlaG9sZGVyIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsImdldCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsImNhdGNoIiwiZXJyIiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwiZGl2IiwibWFpbiIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwib25LZXlEb3duIiwidHlwZSIsIm1hcCIsInciLCJpbmRleCIsImJnSW1hZ2UiLCJkaXIiLCJjb2xvciIsImZvbnRTaXplIiwibmFtZSIsImFsaWduSXRlbXMiLCJ0ZW1wIiwidG9GaXhlZCIsImZlZWxzX2xpa2UiLCJodW1pZGl0eSIsInByZXNzdXJlIiwid2luZCIsInNwZWVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});