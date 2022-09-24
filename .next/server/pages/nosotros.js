"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/nosotros";
exports.ids = ["pages/nosotros"];
exports.modules = {

/***/ "./pages/nosotros/index.js":
/*!*********************************!*\
  !*** ./pages/nosotros/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/icons-material */ \"@mui/icons-material\");\n/* harmony import */ var _mui_icons_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_icons_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/system */ \"@mui/system\");\n/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_mui_system__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _services_nostros_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/nostros.service */ \"./services/nostros.service.js\");\n\n\n\n\n\n\nconst nosotros = ({ info , error  })=>{\n    const Informacion = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\")(({ theme  })=>({\n            padding: \"1rem\",\n            backgroundColor: \"#eee\",\n            display: \"flex\",\n            display: _mui_system__WEBPACK_IMPORTED_MODULE_3__.flexbox,\n            width: \"50%\"\n        }));\n    const Foto = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__.styled)(\"div\")(({ theme  })=>({\n            padding: \"1rem\",\n            backgroundColor: \"#eee\",\n            display: _mui_system__WEBPACK_IMPORTED_MODULE_3__.flexbox,\n            width: \"50%\"\n        }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Grid, {\n        container: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Informacion, {\n                md: 6,\n                xs: 12,\n                children: info.map((datos)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        display: \"flex\",\n                        justifyContent: \"center\",\n                        flexDirection: \"column\",\n                        alignItems: \"center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                children: datos.attributes.titulo\n                            }, void 0, false, {\n                                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: datos.attributes.descripcion\n                            }, void 0, false, {\n                                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, datos.attributes.titulo, true, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Foto, {\n                md: 6,\n                xs: 6,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: `http://localhost:1337${info[0]?.attributes?.img?.data[0]?.attributes?.url}`,\n                        alt: \"\",\n                        width: \"600px\",\n                        height: \"500px\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            variant: \"outlined\",\n                            severity: \"danger\",\n                            children: \"No se pudo conectar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\REACTJS\\\\LoginGoogle\\\\FRONTEND\\\\frontend\\\\pages\\\\nosotros\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\nconst getServerSideProps = async ()=>{\n    try {\n        const data = await (0,_services_nostros_service__WEBPACK_IMPORTED_MODULE_5__.getInfoNosotros)();\n        return {\n            props: {\n                info: data,\n                error: false\n            }\n        };\n    } catch (err) {\n        return {\n            props: {\n                info: [],\n                error: true\n            }\n        };\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (nosotros);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3NvdHJvcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDTTtBQUNYO0FBQ2I7QUFDd0M7QUFFakUsTUFBTU8sUUFBUSxHQUFHLENBQUMsRUFBRUMsSUFBSSxHQUFFQyxLQUFLLEdBQUUsR0FBSztJQUdwQyxNQUFNQyxXQUFXLEdBQUdQLHFEQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFUSxLQUFLLEdBQUUsR0FBSyxDQUFDO1lBQ2hEQyxPQUFPLEVBQUUsTUFBTTtZQUNmQyxlQUFlLEVBQUUsTUFBTTtZQUN2QkMsT0FBTyxFQUFFLE1BQU07WUFDZkEsT0FBTyxFQUFFVixnREFBTztZQUNoQlcsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFFSCxNQUFNQyxJQUFJLEdBQUdiLHFEQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFUSxLQUFLLEdBQUUsR0FBSyxDQUFDO1lBQ3pDQyxPQUFPLEVBQUUsTUFBTTtZQUNmQyxlQUFlLEVBQUUsTUFBTTtZQUN2QkMsT0FBTyxFQUFFVixnREFBTztZQUNoQlcsS0FBSyxFQUFFLEtBQUs7U0FDYixDQUFDLENBQUM7SUFFSCxxQkFDRSw4REFBQ2IsK0NBQUk7UUFDSGUsU0FBUzs7MEJBRVQsOERBQUNQLFdBQVc7Z0JBQ1ZRLEVBQUUsRUFBRSxDQUFDO2dCQUNMQyxFQUFFLEVBQUUsRUFBRTswQkFFTFgsSUFBSSxDQUFDWSxHQUFHLENBQUMsQ0FBQ0MsS0FBSyxpQkFDZCw4REFBQ3BCLDhDQUFHO3dCQUNGYSxPQUFPLEVBQUMsTUFBTTt3QkFDZFEsY0FBYyxFQUFDLFFBQVE7d0JBQ3ZCQyxhQUFhLEVBQUMsUUFBUTt3QkFDdEJDLFVBQVUsRUFBQyxRQUFROzswQ0FHbkIsOERBQUNDLElBQUU7MENBQUVKLEtBQUssQ0FBQ0ssVUFBVSxDQUFDQyxNQUFNOzs7Ozt5Q0FBTTswQ0FDbEMsOERBQUNDLEdBQUM7MENBQUVQLEtBQUssQ0FBQ0ssVUFBVSxDQUFDRyxXQUFXOzs7Ozt5Q0FBSzs7dUJBSGhDUixLQUFLLENBQUNLLFVBQVUsQ0FBQ0MsTUFBTTs7OztpQ0FJeEIsQ0FDTjs7Ozs7eUJBQ1U7MEJBQ2QsOERBQUNYLElBQUk7Z0JBQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUFFQyxFQUFFLEVBQUUsQ0FBQzs7a0NBQ2hCLDhEQUFDVyxLQUFHO3dCQUFDQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsRUFBRXZCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRWtCLFVBQVUsRUFBRUksR0FBRyxFQUFFRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUVOLFVBQVUsRUFBRU8sR0FBRyxDQUFDLENBQUM7d0JBQUVDLEdBQUcsRUFBQyxFQUFFO3dCQUFDbkIsS0FBSyxFQUFDLE9BQU87d0JBQUNvQixNQUFNLEVBQUMsT0FBTzs7Ozs7aUNBQUc7a0NBQzlILDhEQUFDQyxLQUFHO2tDQUVBM0IsS0FBSyxrQkFDSCw4REFBQzJCLEtBQUc7NEJBQUNDLE9BQU8sRUFBQyxVQUFVOzRCQUFDQyxRQUFRLEVBQUMsUUFBUTtzQ0FBQyxxQkFFMUM7Ozs7O3FDQUFNOzs7OztpQ0FHTjs7Ozs7O3lCQUNEOzs7Ozs7aUJBQ0YsQ0FDUjtDQUNGO0FBRU0sTUFBTUMsa0JBQWtCLEdBQUcsVUFBWTtJQUM1QyxJQUFJO1FBQ0YsTUFBTVAsSUFBSSxHQUFHLE1BQU0xQiwwRUFBZSxFQUFFO1FBQ3BDLE9BQU87WUFDTGtDLEtBQUssRUFBRTtnQkFDTGhDLElBQUksRUFBRXdCLElBQUk7Z0JBQ1Z2QixLQUFLLEVBQUUsS0FBSzthQUNiO1NBQ0YsQ0FBQztLQUNILENBQUMsT0FBT2dDLEdBQUcsRUFBRTtRQUNaLE9BQU87WUFDTEQsS0FBSyxFQUFFO2dCQUNMaEMsSUFBSSxFQUFFLEVBQUU7Z0JBQ1JDLEtBQUssRUFBRSxJQUFJO2FBQ1o7U0FDRixDQUFDO0tBQ0g7Q0FDRjtBQUlELGlFQUFlRixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9wYWdlcy9ub3NvdHJvcy9pbmRleC5qcz8xN2Y4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluZm8gfSBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsJztcclxuaW1wb3J0IHsgQm94LCBHcmlkLCBzdHlsZWQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xyXG5pbXBvcnQgeyBmbGV4Ym94IH0gZnJvbSAnQG11aS9zeXN0ZW0nO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IGdldEluZm9Ob3NvdHJvcyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL25vc3Ryb3Muc2VydmljZSc7XHJcblxyXG5jb25zdCBub3NvdHJvcyA9ICh7IGluZm8sIGVycm9yIH0pID0+IHtcclxuXHJcblxyXG4gIGNvbnN0IEluZm9ybWFjaW9uID0gc3R5bGVkKCdkaXYnKSgoeyB0aGVtZSB9KSA9PiAoe1xyXG4gICAgcGFkZGluZzogJzFyZW0nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2VlZScsXHJcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgIGRpc3BsYXk6IGZsZXhib3gsXHJcbiAgICB3aWR0aDogJzUwJSdcclxuICB9KSk7XHJcblxyXG4gIGNvbnN0IEZvdG8gPSBzdHlsZWQoJ2RpdicpKCh7IHRoZW1lIH0pID0+ICh7XHJcbiAgICBwYWRkaW5nOiAnMXJlbScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZWVlJyxcclxuICAgIGRpc3BsYXk6IGZsZXhib3gsXHJcbiAgICB3aWR0aDogJzUwJSdcclxuICB9KSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZFxyXG4gICAgICBjb250YWluZXJcclxuICAgID5cclxuICAgICAgPEluZm9ybWFjaW9uXHJcbiAgICAgICAgbWQ9ezZ9XHJcbiAgICAgICAgeHM9ezEyfVxyXG4gICAgICA+XHJcbiAgICAgICAge2luZm8ubWFwKChkYXRvcykgPT4gKFxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBkaXNwbGF5PSdmbGV4J1xyXG4gICAgICAgICAgICBqdXN0aWZ5Q29udGVudD0nY2VudGVyJ1xyXG4gICAgICAgICAgICBmbGV4RGlyZWN0aW9uPSdjb2x1bW4nXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM9J2NlbnRlcidcclxuICAgICAgICAgICAga2V5PXtkYXRvcy5hdHRyaWJ1dGVzLnRpdHVsb31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGgxPntkYXRvcy5hdHRyaWJ1dGVzLnRpdHVsb308L2gxPlxyXG4gICAgICAgICAgICA8cD57ZGF0b3MuYXR0cmlidXRlcy5kZXNjcmlwY2lvbn08L3A+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9JbmZvcm1hY2lvbj5cclxuICAgICAgPEZvdG8gbWQ9ezZ9IHhzPXs2fT5cclxuICAgICAgICA8aW1nIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MTMzNyR7aW5mb1swXT8uYXR0cmlidXRlcz8uaW1nPy5kYXRhWzBdPy5hdHRyaWJ1dGVzPy51cmx9YH0gYWx0PScnIHdpZHRoPSc2MDBweCcgaGVpZ2h0PSc1MDBweCcgLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBlcnJvciAmJiAoXHJcbiAgICAgICAgICAgICAgPGRpdiB2YXJpYW50PSdvdXRsaW5lZCcgc2V2ZXJpdHk9XCJkYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIE5vIHNlIHB1ZG8gY29uZWN0YXJcclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0ZvdG8+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW5mb05vc290cm9zKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgaW5mbzogZGF0YSxcclxuICAgICAgICBlcnJvcjogZmFsc2UsXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0gY2F0Y2ggKGVycikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcHJvcHM6IHtcclxuICAgICAgICBpbmZvOiBbXSxcclxuICAgICAgICBlcnJvcjogdHJ1ZSxcclxuICAgICAgfSxcclxuICAgIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5vc290cm9zXHJcbiJdLCJuYW1lcyI6WyJJbmZvIiwiQm94IiwiR3JpZCIsInN0eWxlZCIsImZsZXhib3giLCJSZWFjdCIsImdldEluZm9Ob3NvdHJvcyIsIm5vc290cm9zIiwiaW5mbyIsImVycm9yIiwiSW5mb3JtYWNpb24iLCJ0aGVtZSIsInBhZGRpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJkaXNwbGF5Iiwid2lkdGgiLCJGb3RvIiwiY29udGFpbmVyIiwibWQiLCJ4cyIsIm1hcCIsImRhdG9zIiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImgxIiwiYXR0cmlidXRlcyIsInRpdHVsbyIsInAiLCJkZXNjcmlwY2lvbiIsImltZyIsInNyYyIsImRhdGEiLCJ1cmwiLCJhbHQiLCJoZWlnaHQiLCJkaXYiLCJ2YXJpYW50Iiwic2V2ZXJpdHkiLCJnZXRTZXJ2ZXJTaWRlUHJvcHMiLCJwcm9wcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/nosotros/index.js\n");

/***/ }),

/***/ "./services/nostros.service.js":
/*!*************************************!*\
  !*** ./services/nostros.service.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getInfoNosotros\": () => (/* binding */ getInfoNosotros)\n/* harmony export */ });\nconst getInfoNosotros = async ()=>{\n    return await fetch(`${process.env.URL_API_RENT}/api/nosotros?populate=img`, {\n        method: \"GET\"\n    }).then((res)=>res.json()).then(({ data  })=>data);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9ub3N0cm9zLnNlcnZpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLGVBQWUsR0FBRyxVQUFZO0lBQ3pDLE9BQU8sTUFBTUMsS0FBSyxDQUFDLENBQUMsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFlBQVksQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO1FBQzFFQyxNQUFNLEVBQUUsS0FBSztLQUNkLENBQUMsQ0FDREMsSUFBSSxDQUFDLENBQUNDLEdBQUcsR0FBS0EsR0FBRyxDQUFDQyxJQUFJLEVBQUUsQ0FBQyxDQUN6QkYsSUFBSSxDQUFDLENBQUMsRUFBQ0csSUFBSSxHQUFDLEdBQUtBLElBQUksQ0FBQztDQUN4QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQvLi9zZXJ2aWNlcy9ub3N0cm9zLnNlcnZpY2UuanM/YWRlYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgZ2V0SW5mb05vc290cm9zID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBhd2FpdCBmZXRjaChgJHtwcm9jZXNzLmVudi5VUkxfQVBJX1JFTlR9L2FwaS9ub3NvdHJvcz9wb3B1bGF0ZT1pbWdgLCB7XHJcbiAgICBtZXRob2Q6ICdHRVQnXHJcbiAgfSlcclxuICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxyXG4gIC50aGVuKCh7ZGF0YX0pID0+IGRhdGEpXHJcbn07Il0sIm5hbWVzIjpbImdldEluZm9Ob3NvdHJvcyIsImZldGNoIiwicHJvY2VzcyIsImVudiIsIlVSTF9BUElfUkVOVCIsIm1ldGhvZCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/nostros.service.js\n");

/***/ }),

/***/ "@mui/icons-material":
/*!**************************************!*\
  !*** external "@mui/icons-material" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@mui/icons-material");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@mui/system");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/nosotros/index.js"));
module.exports = __webpack_exports__;

})();