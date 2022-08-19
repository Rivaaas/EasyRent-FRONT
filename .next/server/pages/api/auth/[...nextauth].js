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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst options = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    database: process.env.NEXT_PUBLIC_DATABASE_URL,\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.jwt = token.jwt;\n            session.id = token.id;\n            return session;\n        },\n        async jwt ({ token , user , account  }) {\n            if (user) {\n                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/google/callback?access_token=${account.access_token}`);\n                const data = await response.json();\n                token.jwt = data.jwt;\n                token.id = data.user.id;\n            }\n            return token;\n        }\n    }\n};\nconst Auth = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBR3ZELE1BQU1FLE9BQU8sR0FBRztJQUNkQyxTQUFTLEVBQUU7UUFDVEYsaUVBQWMsQ0FBQztZQUNiRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUMvQyxDQUFDO0tBQ0g7SUFDREMsUUFBUSxFQUFFTCxPQUFPLENBQUNDLEdBQUcsQ0FBQ0ssd0JBQXdCO0lBQzlDQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxPQUFPLEVBQUMsRUFBRUEsT0FBTyxHQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxFQUFFO1lBQ3RDRixPQUFPLENBQUNHLEdBQUcsR0FBR0YsS0FBSyxDQUFDRSxHQUFHLENBQUM7WUFDeEJILE9BQU8sQ0FBQ0ksRUFBRSxHQUFHSCxLQUFLLENBQUNHLEVBQUUsQ0FBQztZQUN0QixPQUFPSixPQUFPLENBQUM7U0FDaEI7UUFDRCxNQUFNRyxHQUFHLEVBQUMsRUFBRUYsS0FBSyxHQUFFQyxJQUFJLEdBQUVHLE9BQU8sR0FBRSxFQUFFO1lBQ2xDLElBQUlILElBQUksRUFBRTtnQkFDUixNQUFNSSxRQUFRLEdBQUcsTUFBTUMsS0FBSyxDQUMxQixDQUFDLEVBQUVmLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDZSxtQkFBbUIsQ0FBQyx1Q0FBdUMsRUFBRUgsT0FBTyxDQUFDSSxZQUFZLENBQUMsQ0FBQyxDQUNuRztnQkFDRCxNQUFNQyxJQUFJLEdBQUcsTUFBTUosUUFBUSxDQUFDSyxJQUFJLEVBQUU7Z0JBQ2xDVixLQUFLLENBQUNFLEdBQUcsR0FBR08sSUFBSSxDQUFDUCxHQUFHLENBQUM7Z0JBQ3JCRixLQUFLLENBQUNHLEVBQUUsR0FBR00sSUFBSSxDQUFDUixJQUFJLENBQUNFLEVBQUUsQ0FBQzthQUN6QjtZQUNELE9BQU9ILEtBQUssQ0FBQztTQUNkO0tBQ0Y7Q0FDRjtBQUVELE1BQU1XLElBQUksR0FBRyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsR0FBSzNCLGdEQUFRLENBQUMwQixHQUFHLEVBQUVDLEdBQUcsRUFBRXpCLE9BQU8sQ0FBQztBQUV0RCxpRUFBZXVCLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcbmltcG9ydCBHb29nbGVQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGVcIlxyXG5cclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBHb29nbGVQcm92aWRlcih7XHJcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxyXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9DTElFTlRfU0VDUkVULFxyXG4gICAgfSksXHJcbiAgXSxcclxuICBkYXRhYmFzZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMLFxyXG4gIGNhbGxiYWNrczoge1xyXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuLCB1c2VyIH0pIHtcclxuICAgICAgc2Vzc2lvbi5qd3QgPSB0b2tlbi5qd3Q7XHJcbiAgICAgIHNlc3Npb24uaWQgPSB0b2tlbi5pZDtcclxuICAgICAgcmV0dXJuIHNlc3Npb247XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgand0KHsgdG9rZW4sIHVzZXIsIGFjY291bnQgfSkge1xyXG4gICAgICBpZiAodXNlcikge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgICBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfVVJMfS9hcGkvYXV0aC9nb29nbGUvY2FsbGJhY2s/YWNjZXNzX3Rva2VuPSR7YWNjb3VudC5hY2Nlc3NfdG9rZW59YFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB0b2tlbi5qd3QgPSBkYXRhLmp3dDtcclxuICAgICAgICB0b2tlbi5pZCA9IGRhdGEudXNlci5pZDtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdG9rZW47XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBdXRoID0gKHJlcSwgcmVzKSA9PiBOZXh0QXV0aChyZXEsIHJlcywgb3B0aW9ucyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoOyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwib3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsImRhdGFiYXNlIiwiTkVYVF9QVUJMSUNfREFUQUJBU0VfVVJMIiwiY2FsbGJhY2tzIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImp3dCIsImlkIiwiYWNjb3VudCIsInJlc3BvbnNlIiwiZmV0Y2giLCJORVhUX1BVQkxJQ19BUElfVVJMIiwiYWNjZXNzX3Rva2VuIiwiZGF0YSIsImpzb24iLCJBdXRoIiwicmVxIiwicmVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();