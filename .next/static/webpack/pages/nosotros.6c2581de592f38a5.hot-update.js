"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/nosotros",{

/***/ "./pages/nosotros/index.js":
/*!*********************************!*\
  !*** ./pages/nosotros/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/system */ \"./node_modules/@mui/system/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _this = undefined;\n\n\n\n\nvar nosotros = function(param) {\n    var info = param.info, error = param.error;\n    var ref, ref1, ref2, ref3, ref4;\n    var Informacion = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\")(function(param) {\n        var theme = param.theme;\n        var _obj;\n        return _obj = {\n            padding: \"1rem\",\n            backgroundColor: \"#eee\",\n            display: \"flex\"\n        }, (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_obj, \"display\", _mui_system__WEBPACK_IMPORTED_MODULE_4__.flexbox), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_obj, \"width\", \"50%\"), _obj;\n    });\n    var Foto = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\")(function(param) {\n        var theme = param.theme;\n        return {\n            padding: \"1rem\",\n            backgroundColor: \"#eee\",\n            display: _mui_system__WEBPACK_IMPORTED_MODULE_4__.flexbox,\n            width: \"50%\"\n        };\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        container: true,\n        xs: 6,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Informacion, {\n                xs: 12,\n                md: 6,\n                children: info.map(function(datos) {\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: datos.attributes.titulo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, _this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: datos.attributes.descripcion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, _this)\n                        ]\n                    }, datos.attributes.titulo, true, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, _this);\n                })\n            }, void 0, false, {\n                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Foto, {\n                xs: 12,\n                md: 6,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"http://localhost:1337\".concat((ref3 = (ref = info[0]) === null || ref === void 0 ? void 0 : (ref1 = ref.attributes) === null || ref1 === void 0 ? void 0 : (ref2 = ref1.img) === null || ref2 === void 0 ? void 0 : ref2.data[0]) === null || ref3 === void 0 ? void 0 : (ref4 = ref3.attributes) === null || ref4 === void 0 ? void 0 : ref4.url),\n                        alt: \"\",\n                        width: \"600px\",\n                        height: \"500px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, _this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            variant: \"outlined\",\n                            severity: \"danger\",\n                            children: \"No se pudo conectar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                            lineNumber: 54,\n                            columnNumber: 15\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (nosotros);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly9fTl9FLy4vcGFnZXMvbm9zb3Ryb3MvaW5kZXguanM/MTdmOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIEdyaWQsIHN0eWxlZCB9IGZyb20gJ0BtdWkvbWF0ZXJpYWwnXHJcbmltcG9ydCB7IGZsZXhib3ggfSBmcm9tICdAbXVpL3N5c3RlbSc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgZ2V0SW5mb05vc290cm9zIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvbm9zdHJvcy5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IG5vc290cm9zID0gKHsgaW5mbywgZXJyb3IgfSkgPT4ge1xyXG5cclxuXHJcbiAgY29uc3QgSW5mb3JtYWNpb24gPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcclxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgZGlzcGxheTogZmxleGJveCxcclxuICAgIHdpZHRoOiAnNTAlJ1xyXG4gIH0pKTtcclxuXHJcbiAgY29uc3QgRm90byA9IHN0eWxlZCgnZGl2JykoKHsgdGhlbWUgfSkgPT4gKHtcclxuICAgIHBhZGRpbmc6ICcxcmVtJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNlZWUnLFxyXG4gICAgZGlzcGxheTogZmxleGJveCxcclxuICAgIHdpZHRoOiAnNTAlJ1xyXG4gIH0pKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkXHJcbiAgICAgIGNvbnRhaW5lclxyXG4gICAgICB4cz17Nn1cclxuICAgID5cclxuICAgICAgPEluZm9ybWFjaW9uXHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICAgIG1kPXs2fVxyXG4gICAgICA+XHJcbiAgICAgICAge2luZm8ubWFwKChkYXRvcykgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAga2V5PXtkYXRvcy5hdHRyaWJ1dGVzLnRpdHVsb31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgxPntkYXRvcy5hdHRyaWJ1dGVzLnRpdHVsb308L2gxPlxyXG4gICAgICAgICAgICA8cD57ZGF0b3MuYXR0cmlidXRlcy5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9JbmZvcm1hY2lvbj5cclxuICAgICAgPEZvdG9cclxuICAgICAgICB4cz17MTJ9XHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgID5cclxuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW5mb1swXT8uYXR0cmlidXRlcz8uaW1nPy5kYXRhWzBdPy5hdHRyaWJ1dGVzPy51cmx9YH0gYWx0PScnIHdpZHRoPSc2MDBweCcgaGVpZ2h0PSc1MDBweCcgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiB2YXJpYW50PSdvdXRsaW5lZCcgc2V2ZXJpdHk9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vIHNlIHB1ZG8gY29uZWN0YXJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZvdG8+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW5mb05vc290cm9zKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgaW5mbzogZGF0YSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBpbmZvOiBbXSxcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vc290cm9zXHJcbiJdLCJuYW1lcyI6WyJCb3giLCJHcmlkIiwic3R5bGVkIiwiZmxleGJveCIsIlJlYWN0Iiwibm9zb3Ryb3MiLCJpbmZvIiwiZXJyb3IiLCJJbmZvcm1hY2lvbiIsInRoZW1lIiwicGFkZGluZyIsImJhY2tncm91bmRDb2xvciIsImRpc3BsYXkiLCJ3aWR0aCIsIkZvdG8iLCJjb250YWluZXIiLCJ4cyIsIm1kIiwibWFwIiwiZGF0b3MiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwiaDEiLCJhdHRyaWJ1dGVzIiwidGl0dWxvIiwicCIsImRlc2NyaXBjaW9uIiwiaW1nIiwic3JjIiwiZGF0YSIsInVybCIsImFsdCIsImhlaWdodCIsImRpdiIsInZhcmlhbnQiLCJzZXZlcml0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nosotros/index.js\n"));

/***/ })

});