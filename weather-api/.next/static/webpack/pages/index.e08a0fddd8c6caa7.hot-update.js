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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n            children: [\n                errorMessage,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    value: location,\n                    onChange: (event)=>setLocation(event.target.value),\n                    placeholder: \"Enter Location\",\n                    onKeyDown: searchLocation,\n                    type: \"text\"\n                }, void 0, false, {\n                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this),\n                weather && weather.map((w, index)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                        bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                            dir: \"column\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    dir: \"column\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            fontSize: \"65px\",\n                                            fontWeight: \"bold\",\n                                            children: data.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                            alignItems: \"flex-start\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                    color: \"white\",\n                                                    fontSize: \"90px\",\n                                                    fontWeight: \"bold\",\n                                                    children: [\n                                                        data.main.temp.toFixed(),\n                                                        \"\\xb0\"\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 66,\n                                                    columnNumber: 27\n                                                }, this),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                                    margin: \"15px 0 12px 10px\",\n                                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                                        color: \"white\",\n                                                        fontSize: \"30px\",\n                                                        children: [\n                                                            w.main,\n                                                            \" \"\n                                                        ]\n                                                    }, void 0, true, {\n                                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                        lineNumber: 67,\n                                                        columnNumber: 62\n                                                    }, this)\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 27\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 25\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 21\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.FlexBox, {\n                                    bgColor: \"grey\",\n                                    height: \"130px\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Feels like \",\n                                                data.main.feels_like.toFixed(),\n                                                \"\\xb0C\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 71,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Humidity \",\n                                                data.main.humidity,\n                                                \"%\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 72,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Pressure \",\n                                                data.main.pressure,\n                                                \" hPa\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 73,\n                                            columnNumber: 23\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Text, {\n                                            color: \"white\",\n                                            children: [\n                                                \"Wind \",\n                                                data.wind.speed,\n                                                \" miles/hour\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                            lineNumber: 74,\n                                            columnNumber: 23\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 21\n                                }, this)\n                            ]\n                        }, index, true, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 62,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 15\n                    }, this);\n                })\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n            lineNumber: 46,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDeUIsUUFBUTtnREFBQzs7Ozs7OztzREFDakQsOERBQUNwRCxnREFBSUE7NENBQUN3QyxPQUFNOztnREFBUTtnREFBTXJDLEtBQUtrRCxJQUFJLENBQUNDLEtBQUs7Z0RBQUM7Ozs7Ozs7Ozs7Ozs7OzJCQVpoQ2pCOzs7Ozs7Ozs7O2dCQWtCdEI7Ozs7Ozs7Ozs7OztBQWtCVixDQUFDO0dBMUZ1Qm5DO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmxleEJveCwgV3JhcHBlciwgVGV4dCwgSW1nUGxhY2Vob2xkZXIgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGEud2VhdGhlcilcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICB9KSAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgIH0pXG4gICAgICBzZXRMb2NhdGlvbignJylcbiAgICB9XG4gIH1cblxuICB2YXIgYXBpS2V5ID0gXCJmMWMzYWJhOWY0MTZlZmRiMTY3MDJkMjg2NjcwOWU5OFwiO1xuICB2YXIgbGFuZyA9IFwiZW5cIjtcbiAgdmFyIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICB7LyogPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD4gKi99XG5cbiAgICAgIDxtYWluPlxuICAgICAgICB7ZXJyb3JNZXNzYWdlfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgdmFsdWUgPSB7bG9jYXRpb259XG4gICAgICAgIG9uQ2hhbmdlPXtldmVudD0+IHNldExvY2F0aW9uKGV2ZW50LnRhcmdldC52YWx1ZSl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgTG9jYXRpb25cIlxuICAgICAgICBvbktleURvd249e3NlYXJjaExvY2F0aW9ufVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgID5cbiAgICAgICAgPC9pbnB1dD5cblxuICAgICAgICB7XG4gICAgICAgICAgd2VhdGhlciAmJiB3ZWF0aGVyLm1hcCgodywgaW5kZXgpID0+e1xuICAgICAgICAgICAgcmV0dXJuKFxuICAgICAgICAgICAgICA8V3JhcHBlciBiZ0ltYWdlPVwiL2tlbnJpY2stbWlsbHMtTUY5V3kxTkE1NUktdW5zcGxhc2gtMi5qcGdcIj5cblxuICAgICAgICAgICAgICAgICAgPEZsZXhCb3gga2V5PXtpbmRleH0gZGlyPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGRpcj1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjY1cHhcIiBmb250V2VpZ2h0PVwiYm9sZFwiPntkYXRhLm5hbWV9PC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggYWxpZ25JdGVtcz1cImZsZXgtc3RhcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiIGZvbnRTaXplPVwiOTBweFwiIGZvbnRXZWlnaHQ9XCJib2xkXCI+e2RhdGEubWFpbi50ZW1wLnRvRml4ZWQoKX3CsDwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsZXhCb3ggbWFyZ2luPVwiMTVweCAwIDEycHggMTBweFwiPjxUZXh0IGNvbG9yPVwid2hpdGVcIiBmb250U2l6ZT1cIjMwcHhcIj57dy5tYWlufSA8L1RleHQ+PC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9GbGV4Qm94PlxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICAgIDxGbGV4Qm94IGJnQ29sb3I9XCJncmV5XCIgaGVpZ2h0PVwiMTMwcHhcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+RmVlbHMgbGlrZSB7ZGF0YS5tYWluLmZlZWxzX2xpa2UudG9GaXhlZCgpfcKwQzwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICA8VGV4dCBjb2xvcj1cIndoaXRlXCI+SHVtaWRpdHkge2RhdGEubWFpbi5odW1pZGl0eX0lPC9UZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIDxUZXh0IGNvbG9yPVwid2hpdGVcIj5QcmVzc3VyZSB7ZGF0YS5tYWluLnByZXNzdXJlfSBoUGE8L1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAgPFRleHQgY29sb3I9XCJ3aGl0ZVwiPldpbmQge2RhdGEud2luZC5zcGVlZH0gbWlsZXMvaG91cjwvVGV4dD5cbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9IFwiaHR0cDovL29wZW53ZWF0aGVybWFwLm9yZy9pbWcvd24vJHt3Lmljb259QDR4LnBuZ1wiIC8+ICovfVxuICAgICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgICAgICA8L0ZsZXhCb3g+XG4gICAgICAgICAgICAgIDwvV3JhcHBlcj5cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICA8L21haW4+XG5cbiAgICAgIHsvKiA8Zm9vdGVyIGNsYXNzTmFtZT17c3R5bGVzLmZvb3Rlcn0+XG4gICAgICAgIDxhXG4gICAgICAgICAgaHJlZj1cImh0dHBzOi8vdmVyY2VsLmNvbT91dG1fc291cmNlPWNyZWF0ZS1uZXh0LWFwcCZ1dG1fbWVkaXVtPWRlZmF1bHQtdGVtcGxhdGUmdXRtX2NhbXBhaWduPWNyZWF0ZS1uZXh0LWFwcFwiXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcbiAgICAgICAgPlxuICAgICAgICAgIFBvd2VyZWQgYnl7JyAnfVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmxvZ299PlxuICAgICAgICAgICAgPEltYWdlIHNyYz1cIi92ZXJjZWwuc3ZnXCIgYWx0PVwiVmVyY2VsIExvZ29cIiB3aWR0aD17NzJ9IGhlaWdodD17MTZ9IC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgICA8L2Zvb3Rlcj4gKi99XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJIZWFkIiwiSW1hZ2UiLCJzdHlsZXMiLCJheGlvcyIsInVzZVN0YXRlIiwiRmxleEJveCIsIldyYXBwZXIiLCJUZXh0IiwiSW1nUGxhY2Vob2xkZXIiLCJIb21lIiwiZGF0YSIsInNldERhdGEiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwid2VhdGhlciIsInNldFdlYXRoZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJzZWFyY2hMb2NhdGlvbiIsImV2ZW50Iiwia2V5IiwiZ2V0IiwidXJsIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImNsZWFyIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJhcGlLZXkiLCJsYW5nIiwidW5pdHMiLCJkaXYiLCJtYWluIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJvbktleURvd24iLCJ0eXBlIiwibWFwIiwidyIsImluZGV4IiwiYmdJbWFnZSIsImRpciIsImNvbG9yIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibmFtZSIsImFsaWduSXRlbXMiLCJ0ZW1wIiwidG9GaXhlZCIsIm1hcmdpbiIsImJnQ29sb3IiLCJoZWlnaHQiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJwcmVzc3VyZSIsIndpbmQiLCJzcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});