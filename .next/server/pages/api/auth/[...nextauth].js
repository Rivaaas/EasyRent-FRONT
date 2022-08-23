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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst options = {\n    providers: [\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        }), \n    ],\n    database: \"postgres://strapi:strapi@localhost:5432/strapi?synchronize=true\",\n    callbacks: {\n        async session ({ session , token , user  }) {\n            session.jwt = token.jwt;\n            session.id = token.id;\n            return session;\n        },\n        async jwt ({ token , user , account  }) {\n            if (user) {\n                const response = await fetch(`${\"http://localhost:1337\"}/api/auth/google/callback?access_token=${account.access_token}`);\n                const data = await response.json();\n                token.jwt = data.jwt;\n                token.id = data.user.id;\n            }\n            return token;\n        }\n    }\n};\nconst Auth = (req, res)=>next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Auth);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWlDO0FBQ3NCO0FBR3ZELE1BQU1FLE9BQU8sR0FBRztJQUNkQyxTQUFTLEVBQUU7UUFDVEYsaUVBQWMsQ0FBQztZQUNiRyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxnQkFBZ0I7WUFDdENDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLG9CQUFvQjtTQUMvQyxDQUFDO0tBQ0g7SUFDREMsUUFBUSxFQUFFTCxpRUFBb0M7SUFDOUNPLFNBQVMsRUFBRTtRQUNULE1BQU1DLE9BQU8sRUFBQyxFQUFFQSxPQUFPLEdBQUVDLEtBQUssR0FBRUMsSUFBSSxHQUFFLEVBQUU7WUFDdENGLE9BQU8sQ0FBQ0csR0FBRyxHQUFHRixLQUFLLENBQUNFLEdBQUcsQ0FBQztZQUN4QkgsT0FBTyxDQUFDSSxFQUFFLEdBQUdILEtBQUssQ0FBQ0csRUFBRSxDQUFDO1lBQ3RCLE9BQU9KLE9BQU8sQ0FBQztTQUNoQjtRQUNELE1BQU1HLEdBQUcsRUFBQyxFQUFFRixLQUFLLEdBQUVDLElBQUksR0FBRUcsT0FBTyxHQUFFLEVBQUU7WUFDbEMsSUFBSUgsSUFBSSxFQUFFO2dCQUNSLE1BQU1JLFFBQVEsR0FBRyxNQUFNQyxLQUFLLENBQzFCLENBQUMsRUFBRWYsdUJBQStCLENBQUMsdUNBQXVDLEVBQUVhLE9BQU8sQ0FBQ0ksWUFBWSxDQUFDLENBQUMsQ0FDbkc7Z0JBQ0QsTUFBTUMsSUFBSSxHQUFHLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSSxFQUFFO2dCQUNsQ1YsS0FBSyxDQUFDRSxHQUFHLEdBQUdPLElBQUksQ0FBQ1AsR0FBRyxDQUFDO2dCQUNyQkYsS0FBSyxDQUFDRyxFQUFFLEdBQUdNLElBQUksQ0FBQ1IsSUFBSSxDQUFDRSxFQUFFLENBQUM7YUFDekI7WUFDRCxPQUFPSCxLQUFLLENBQUM7U0FDZDtLQUNGO0NBQ0Y7QUFFRCxNQUFNVyxJQUFJLEdBQUcsQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEdBQUszQixnREFBUSxDQUFDMEIsR0FBRyxFQUFFQyxHQUFHLEVBQUV6QixPQUFPLENBQUM7QUFFdEQsaUVBQWV1QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0uanM/NTI3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiO1xyXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcclxuXHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xyXG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcclxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgZGF0YWJhc2U6IHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiwgdXNlciB9KSB7XHJcbiAgICAgIHNlc3Npb24uand0ID0gdG9rZW4uand0O1xyXG4gICAgICBzZXNzaW9uLmlkID0gdG9rZW4uaWQ7XHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcclxuICAgICAgaWYgKHVzZXIpIHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgICAgYCR7cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQVBJX1VSTH0vYXBpL2F1dGgvZ29vZ2xlL2NhbGxiYWNrP2FjY2Vzc190b2tlbj0ke2FjY291bnQuYWNjZXNzX3Rva2VufWBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgdG9rZW4uand0ID0gZGF0YS5qd3Q7XHJcbiAgICAgICAgdG9rZW4uaWQgPSBkYXRhLnVzZXIuaWQ7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHRva2VuO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgQXV0aCA9IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aDsiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHb29nbGVQcm92aWRlciIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHT09HTEVfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJkYXRhYmFzZSIsIk5FWFRfUFVCTElDX0RBVEFCQVNFX1VSTCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJ0b2tlbiIsInVzZXIiLCJqd3QiLCJpZCIsImFjY291bnQiLCJyZXNwb25zZSIsImZldGNoIiwiTkVYVF9QVUJMSUNfQVBJX1VSTCIsImFjY2Vzc190b2tlbiIsImRhdGEiLCJqc29uIiwiQXV0aCIsInJlcSIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

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