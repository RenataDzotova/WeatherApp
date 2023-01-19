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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"../node_modules/axios/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_global__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/global */ \"./styles/global.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({});\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [weather, setWeather] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();\n    const [errorMessage, setErrorMessage] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const searchLocation = (event)=>{\n        if (event.key === \"Enter\") {\n            axios__WEBPACK_IMPORTED_MODULE_5__[\"default\"].get(url).then((response)=>{\n                console.clear();\n                setData(response.data);\n                console.log(response.data);\n                setWeather(response.data.weather);\n                setErrorMessage(\"\");\n            }).catch((err)=>{\n                console.log(err);\n                setErrorMessage(\"Please enter another location\");\n                setData({});\n                setWeather();\n            });\n            setLocation(\"\");\n        }\n    };\n    var apiKey = \"f1c3aba9f416efdb16702d2866709e98\";\n    var lang = \"en\";\n    var units = \"metric\";\n    const url = \"https://api.openweathermap.org/data/2.5/weather?q=\".concat(location, \"&units=\").concat(units, \"&appid=\").concat(apiKey, \"&lang=\").concat(lang);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n                children: [\n                    errorMessage,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        value: location,\n                        onChange: (event)=>setLocation(event.target.value),\n                        placeholder: \"Enter Location\",\n                        onKeyDown: searchLocation,\n                        type: \"text\"\n                    }, void 0, false, {\n                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    weather && weather.map((w, index)=>{\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_global__WEBPACK_IMPORTED_MODULE_4__.Wrapper, {\n                            bgImage: \"/kenrick-mills-MF9Wy1NA55I-unsplash-2.jpg\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: data.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: w.main\n                                    }, void 0, false, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"The temperature is \",\n                                            data.main.temp.toFixed(),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 65,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Feels like \",\n                                            data.main.feels_like.toFixed(),\n                                            \"\\xb0C\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Humidity \",\n                                            data.main.humidity,\n                                            \"%\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Atmospheric pressure \",\n                                            data.main.pressure,\n                                            \"hPa\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 68,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        children: [\n                                            \"Wind \",\n                                            data.wind.speed,\n                                            \"miles/hour\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                        lineNumber: 69,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, index, true, {\n                                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                            lineNumber: 60,\n                            columnNumber: 15\n                        }, this);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/renatadzotova/Desktop/Dynamic Content/week3/weather-api/pages/index.js\",\n        lineNumber: 39,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"fLhzWfIng8vDAf0Gw1NlEsI0sWQ=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgRmxleEJveCwgV3JhcHBlciwgVGV4dCwgSW1nUGxhY2Vob2xkZXIgfSBmcm9tICcuLi9zdHlsZXMvZ2xvYmFsJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZSh7fSk7XG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbd2VhdGhlciwgc2V0V2VhdGhlcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbZXJyb3JNZXNzYWdlLCBzZXRFcnJvck1lc3NhZ2VdID0gdXNlU3RhdGUoJycpXG5cbiAgY29uc3Qgc2VhcmNoTG9jYXRpb24gPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpe1xuICAgICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmNsZWFyKClcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZS5kYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS5kYXRhKVxuICAgICAgICBzZXRXZWF0aGVyKHJlc3BvbnNlLmRhdGEud2VhdGhlcilcbiAgICAgICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpXG4gICAgICB9KSAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICBzZXRFcnJvck1lc3NhZ2UoXCJQbGVhc2UgZW50ZXIgYW5vdGhlciBsb2NhdGlvblwiKVxuICAgICAgICBzZXREYXRhKHt9KVxuICAgICAgICBzZXRXZWF0aGVyKClcbiAgICAgIH0pXG4gICAgICBzZXRMb2NhdGlvbignJylcbiAgICB9XG4gIH1cblxuICB2YXIgYXBpS2V5ID0gXCJmMWMzYWJhOWY0MTZlZmRiMTY3MDJkMjg2NjcwOWU5OFwiO1xuICB2YXIgbGFuZyA9IFwiZW5cIjtcbiAgdmFyIHVuaXRzID0gXCJtZXRyaWNcIjtcbiAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mdW5pdHM9JHt1bml0c30mYXBwaWQ9JHthcGlLZXl9Jmxhbmc9JHtsYW5nfWBcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge2Vycm9yTWVzc2FnZX1cbiAgICAgICAgPGlucHV0XG4gICAgICAgIHZhbHVlID0ge2xvY2F0aW9ufVxuICAgICAgICBvbkNoYW5nZT17ZXZlbnQ9PiBzZXRMb2NhdGlvbihldmVudC50YXJnZXQudmFsdWUpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIExvY2F0aW9uXCJcbiAgICAgICAgb25LZXlEb3duPXtzZWFyY2hMb2NhdGlvbn1cbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICA+XG4gICAgICAgIDwvaW5wdXQ+XG5cbiAgICAgICAge1xuICAgICAgICAgIHdlYXRoZXIgJiYgd2VhdGhlci5tYXAoKHcsIGluZGV4KSA9PntcbiAgICAgICAgICAgIHJldHVybihcbiAgICAgICAgICAgICAgPFdyYXBwZXIgYmdJbWFnZT1cIi9rZW5yaWNrLW1pbGxzLU1GOVd5MU5BNTVJLXVuc3BsYXNoLTIuanBnXCI+XG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXY+e2RhdGEubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2Pnt3Lm1haW59PC9kaXY+XG4gICAgICAgICAgICAgICAgey8qIDxkaXY+e3cuZGVzY3JpcHRpb259PC9kaXY+ICovfVxuICAgICAgICAgICAgICAgIDxkaXY+VGhlIHRlbXBlcmF0dXJlIGlzIHtkYXRhLm1haW4udGVtcC50b0ZpeGVkKCl9wrBDPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5GZWVscyBsaWtlIHtkYXRhLm1haW4uZmVlbHNfbGlrZS50b0ZpeGVkKCl9wrBDPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5IdW1pZGl0eSB7ZGF0YS5tYWluLmh1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PkF0bW9zcGhlcmljIHByZXNzdXJlIHtkYXRhLm1haW4ucHJlc3N1cmV9aFBhPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5XaW5kIHtkYXRhLndpbmQuc3BlZWR9bWlsZXMvaG91cjwvZGl2PlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz0gXCJodHRwOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3cuaWNvbn1ANHgucG5nXCIgLz4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L1dyYXBwZXI+XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgPC9tYWluPlxuXG4gICAgICB7LyogPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICA8YVxuICAgICAgICAgIGhyZWY9XCJodHRwczovL3ZlcmNlbC5jb20/dXRtX3NvdXJjZT1jcmVhdGUtbmV4dC1hcHAmdXRtX21lZGl1bT1kZWZhdWx0LXRlbXBsYXRlJnV0bV9jYW1wYWlnbj1jcmVhdGUtbmV4dC1hcHBcIlxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXG4gICAgICAgID5cbiAgICAgICAgICBQb3dlcmVkIGJ5eycgJ31cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfT5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9XCIvdmVyY2VsLnN2Z1wiIGFsdD1cIlZlcmNlbCBMb2dvXCIgd2lkdGg9ezcyfSBoZWlnaHQ9ezE2fSAvPlxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+ICovfVxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSGVhZCIsIkltYWdlIiwic3R5bGVzIiwiYXhpb3MiLCJ1c2VTdGF0ZSIsIkZsZXhCb3giLCJXcmFwcGVyIiwiVGV4dCIsIkltZ1BsYWNlaG9sZGVyIiwiSG9tZSIsImRhdGEiLCJzZXREYXRhIiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsIndlYXRoZXIiLCJzZXRXZWF0aGVyIiwiZXJyb3JNZXNzYWdlIiwic2V0RXJyb3JNZXNzYWdlIiwic2VhcmNoTG9jYXRpb24iLCJldmVudCIsImtleSIsImdldCIsInVybCIsInRoZW4iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJjbGVhciIsImxvZyIsImNhdGNoIiwiZXJyIiwiYXBpS2V5IiwibGFuZyIsInVuaXRzIiwiZGl2IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJpbnB1dCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsIm9uS2V5RG93biIsInR5cGUiLCJtYXAiLCJ3IiwiaW5kZXgiLCJiZ0ltYWdlIiwidGVtcCIsInRvRml4ZWQiLCJmZWVsc19saWtlIiwiaHVtaWRpdHkiLCJwcmVzc3VyZSIsIndpbmQiLCJzcGVlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});