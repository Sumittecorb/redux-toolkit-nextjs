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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"center\": \"Home_center__4BFgC\",\n\t\"logo\": \"Home_logo__27_tb\",\n\t\"thirteen\": \"Home_thirteen__cMI_k\",\n\t\"rotate\": \"Home_rotate____XsI\",\n\t\"content\": \"Home_content__Zy02X\",\n\t\"vercelLogo\": \"Home_vercelLogo__dtSk9\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sLWtpdC8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/MmZkMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fNDFPd2tcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19zdVBFUlwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX0d4UTg1XCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fX0xwTDFcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fNEJGZ0NcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX18yN190YlwiLFxuXHRcInRoaXJ0ZWVuXCI6IFwiSG9tZV90aGlydGVlbl9fY01JX2tcIixcblx0XCJyb3RhdGVcIjogXCJIb21lX3JvdGF0ZV9fX19Yc0lcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19aeTAyWFwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2R0U2s5XCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./component/navbar/index.tsx":
/*!************************************!*\
  !*** ./component/navbar/index.tsx ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Navbar)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store/hooks */ \"./store/hooks.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Navbar() {\n    const items = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_1__.useAppSelector)((state)=>state.cart);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const hanldeSubmit = ()=>{\n        router.push(\"/\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n            className: \"navbar navbar-expand-lg navbar-light bg-light\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"container-fluid\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"logo\",\n                        children: \"Redux Store\"\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"navbar-toggler\",\n                                type: \"button\",\n                                \"data-bs-toggle\": \"collapse\",\n                                \"data-bs-target\": \"#navbarSupportedContent\",\n                                \"aria-controls\": \"navbarSupportedContent\",\n                                \"aria-expanded\": \"false\",\n                                \"aria-label\": \"Toggle navigation\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"navbar-toggler-icon\"\n                                }, void 0, false, {\n                                    fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                    lineNumber: 19,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                lineNumber: 18,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: {\n                                    display: \"flex\",\n                                    justifyContent: \"space-between\"\n                                },\n                                id: \"navbarSupportedContent\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    className: \"navbar-nav me-auto mb-2 mb-lg-0\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"nav-link active\",\n                                                \"aria-current\": \"page\",\n                                                onClick: hanldeSubmit,\n                                                children: \"Home\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                                lineNumber: 24,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                            lineNumber: 23,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"nav-link active\",\n                                                type: \"button\",\n                                                onClick: ()=>router.push(\"/cart\"),\n                                                children: \"Cart\"\n                                            }, void 0, false, {\n                                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                                lineNumber: 27,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                            lineNumber: 26,\n                                            columnNumber: 33\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            className: \"nav-item\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                className: \"nav-link active\",\n                                                \"aria-current\": \"page\",\n                                                children: [\n                                                    \"Your Cart: \",\n                                                    items.length\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                                lineNumber: 30,\n                                                columnNumber: 37\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                            lineNumber: 29,\n                                            columnNumber: 33\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                    lineNumber: 22,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n                lineNumber: 15,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/component/navbar/index.tsx\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnQvbmF2YmFyL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBQ1A7QUFHeEIsU0FBU0UsU0FBUztJQUM3QixNQUFNQyxRQUFRSCw0REFBY0EsQ0FBQyxDQUFDSSxRQUFVQSxNQUFNQyxJQUFJO0lBQ2xELE1BQU1DLFNBQVNMLHNEQUFTQTtJQUV4QixNQUFNTSxlQUFlLElBQU07UUFDdkJELE9BQU9FLElBQUksQ0FBQztJQUNoQjtJQUNBLHFCQUNJO2tCQUNJLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNYLDRFQUFDQztnQkFBSUQsV0FBVTs7a0NBQ1gsOERBQUNFO3dCQUFLRixXQUFVO2tDQUFPOzs7Ozs7a0NBQ3ZCLDhEQUFDQzs7MENBQ0csOERBQUNFO2dDQUFPSCxXQUFVO2dDQUFpQkksTUFBSztnQ0FBU0Msa0JBQWU7Z0NBQVdDLGtCQUFlO2dDQUEwQkMsaUJBQWM7Z0NBQXlCQyxpQkFBYztnQ0FBUUMsY0FBVzswQ0FDeEwsNEVBQUNQO29DQUFLRixXQUFVOzs7Ozs7Ozs7OzswQ0FFcEIsOERBQUNDO2dDQUFJUyxPQUFPO29DQUFFQyxTQUFTO29DQUFRQyxnQkFBZ0I7Z0NBQWdCO2dDQUFHQyxJQUFHOzBDQUNqRSw0RUFBQ0M7b0NBQUdkLFdBQVU7O3NEQUNWLDhEQUFDZTs0Q0FBR2YsV0FBVTtzREFDViw0RUFBQ2dCO2dEQUFFaEIsV0FBVTtnREFBa0JpQixnQkFBYTtnREFBT0MsU0FBU3JCOzBEQUFjOzs7Ozs7Ozs7OztzREFFOUUsOERBQUNrQjs0Q0FBR2YsV0FBVTtzREFDViw0RUFBQ2dCO2dEQUFFaEIsV0FBVTtnREFBa0JJLE1BQUs7Z0RBQVNjLFNBQVMsSUFBTXRCLE9BQU9FLElBQUksQ0FBQzswREFBVTs7Ozs7Ozs7Ozs7c0RBRXRGLDhEQUFDaUI7NENBQUdmLFdBQVU7c0RBQ1YsNEVBQUNnQjtnREFBRWhCLFdBQVU7Z0RBQWtCaUIsZ0JBQWE7O29EQUFPO29EQUFZeEIsTUFBTTBCLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUy9HLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sLWtpdC8uL2NvbXBvbmVudC9uYXZiYXIvaW5kZXgudHN4PzJlNWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiQC9zdG9yZS9ob29rc1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlU2VsZWN0b3IgfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZiYXIoKSB7XG4gICAgY29uc3QgaXRlbXMgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmNhcnQpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICAgIGNvbnN0IGhhbmxkZVN1Ym1pdCA9ICgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1saWdodCBiZy1saWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nbG9nbyc+UmVkdXggU3RvcmU8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCIgdHlwZT1cImJ1dHRvblwiIGRhdGEtYnMtdG9nZ2xlPVwiY29sbGFwc2VcIiBkYXRhLWJzLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCIgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIiBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIiBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nIH19IGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1lLWF1dG8gbWItMiBtYi1sZy0wXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiIG9uQ2xpY2s9e2hhbmxkZVN1Ym1pdH0+SG9tZTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGluayBhY3RpdmVcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9jYXJ0Jyl9PkNhcnQ8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmsgYWN0aXZlXCIgYXJpYS1jdXJyZW50PVwicGFnZVwiPllvdXIgQ2FydDoge2l0ZW1zLmxlbmd0aH08L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VBcHBTZWxlY3RvciIsInVzZVJvdXRlciIsIk5hdmJhciIsIml0ZW1zIiwic3RhdGUiLCJjYXJ0Iiwicm91dGVyIiwiaGFubGRlU3VibWl0IiwicHVzaCIsIm5hdiIsImNsYXNzTmFtZSIsImRpdiIsInNwYW4iLCJidXR0b24iLCJ0eXBlIiwiZGF0YS1icy10b2dnbGUiLCJkYXRhLWJzLXRhcmdldCIsImFyaWEtY29udHJvbHMiLCJhcmlhLWV4cGFuZGVkIiwiYXJpYS1sYWJlbCIsInN0eWxlIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiaWQiLCJ1bCIsImxpIiwiYSIsImFyaWEtY3VycmVudCIsIm9uQ2xpY2siLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./component/navbar/index.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _component_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/component/navbar */ \"./component/navbar/index.tsx\");\n/* harmony import */ var _product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product */ \"./pages/product/index.tsx\");\n\n\n\n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_component_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"mt-5\",\n                style: {\n                    textAlign: \"center\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: \"Welcome to the toolkit store\"\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                children: \"Products\"\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                                lineNumber: 16,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_product__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                                    fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                                    lineNumber: 18,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/index.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBS01BO0FBTGlDO0FBR1A7QUFJakIsU0FBU0csT0FBTztJQUU3QixxQkFDRTs7MEJBQ0UsOERBQUNGLHlEQUFNQTs7Ozs7MEJBQ1AsOERBQUNHO2dCQUFJQyxXQUFVO2dCQUFPQyxPQUFPO29CQUFFQyxXQUFXO2dCQUFTOztrQ0FDakQsOERBQUNDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDOzswQ0FDQyw4REFBQ0M7MENBQUc7Ozs7OzswQ0FDSiw4REFBQ047Z0NBQUlDLFdBQVU7MENBQ2IsNEVBQUNILGdEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sLWtpdC8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnQC9jb21wb25lbnQvbmF2YmFyJ1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgUHJvZHVjdHMgZnJvbSAnLi9wcm9kdWN0J1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogWydsYXRpbiddIH0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPE5hdmJhciAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8aDI+V2VsY29tZSB0byB0aGUgdG9vbGtpdCBzdG9yZTwvaDI+XG4gICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgIDxoMz5Qcm9kdWN0czwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC01XCI+XG4gICAgICAgICAgICA8UHJvZHVjdHMgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIk5hdmJhciIsIlByb2R1Y3RzIiwiSG9tZSIsImRpdiIsImNsYXNzTmFtZSIsInN0eWxlIiwidGV4dEFsaWduIiwiaDIiLCJzZWN0aW9uIiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./pages/product/index.tsx":
/*!*********************************!*\
  !*** ./pages/product/index.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Products)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_cartSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/cartSlice */ \"./store/cartSlice.ts\");\n\n\n\n\n\nfunction Products() {\n    const [product, setProduct] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();\n    const handleAdd = (data)=>{\n        dispatch((0,_store_cartSlice__WEBPACK_IMPORTED_MODULE_3__.add)(data));\n    };\n    const fetchProduct = async ()=>{\n        const res = await fetch(\"https://fakestoreapi.com/products\");\n        const data = await res.json();\n        console.log(data);\n        setProduct(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchProduct();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: product?.map((data)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: data.image,\n                        alt: \"\"\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        children: data.title\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        children: data.price\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>handleAdd(data),\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn),\n                        children: \"Add to cart\"\n                    }, void 0, false, {\n                        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n                lineNumber: 37,\n                columnNumber: 21\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/home/gaurav/Project/redux-toolkit-nextjs/pages/product/index.tsx\",\n        lineNumber: 34,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNGO0FBQ1E7QUFDTjtBQUU1QixTQUFTSyxXQUFXO0lBUy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUE7SUFDdEMsTUFBTU8sV0FBV04sd0RBQVdBO0lBRTVCLE1BQU1PLFlBQVksQ0FBQ0MsT0FBYztRQUM3QkYsU0FBU0oscURBQUdBLENBQUNNO0lBQ2pCO0lBQ0EsTUFBTUMsZUFBZSxVQUFZO1FBQzdCLE1BQU1DLE1BQU0sTUFBTUMsTUFBTTtRQUN4QixNQUFNSCxPQUFPLE1BQU1FLElBQUlFLElBQUk7UUFDM0JDLFFBQVFDLEdBQUcsQ0FBQ047UUFFWkgsV0FBV0c7SUFDZjtJQUVBVixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXO0lBQ0osR0FBRyxFQUFFO0lBRUwscUJBQ0ksOERBQUNNO2tCQUNJWCxTQUFTWSxJQUFJLENBQUNSLE9BQVM7WUFDcEIscUJBQ0ksOERBQUNPOztrQ0FDRyw4REFBQ0U7d0JBQUlDLEtBQUtWLEtBQUtXLEtBQUs7d0JBQUVDLEtBQUk7Ozs7OztrQ0FDMUIsOERBQUNDO2tDQUFJYixLQUFLYyxLQUFLOzs7Ozs7a0NBQ2YsOERBQUNDO2tDQUFJZixLQUFLZ0IsS0FBSzs7Ozs7O2tDQUNmLDhEQUFDQzt3QkFBT0MsU0FBUyxJQUFNbkIsVUFBVUM7d0JBQU9tQixXQUFXMUIsb0VBQVU7a0NBQUU7Ozs7Ozs7Ozs7OztRQUczRTs7Ozs7O0FBR1osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Rvb2wta2l0Ly4vcGFnZXMvcHJvZHVjdC9pbmRleC50c3g/MjkwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IGFkZCB9IGZyb20gXCIuLi8uLi9zdG9yZS9jYXJ0U2xpY2VcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0cygpIHtcbiAgICB0eXBlIGRhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGltYWdlOiBhbnksXG4gICAgICAgICAgICB0aXRsZTogYW55LFxuICAgICAgICAgICAgcHJpY2U6IGFueVxuICAgICAgICB9XG4gICAgXVxuXG4gICAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGU8ZGF0YT4oKVxuICAgIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKVxuXG4gICAgY29uc3QgaGFuZGxlQWRkID0gKGRhdGE6IGFueSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChhZGQoZGF0YSkpXG4gICAgfVxuICAgIGNvbnN0IGZldGNoUHJvZHVjdCA9IGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vZmFrZXN0b3JlYXBpLmNvbS9wcm9kdWN0cycpXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuXG4gICAgICAgIHNldFByb2R1Y3QoZGF0YSk7XG4gICAgfVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgZmV0Y2hQcm9kdWN0KClcbiAgICB9LCBbXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgPlxuICAgICAgICAgICAge3Byb2R1Y3Q/Lm1hcCgoZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17ZGF0YS5pbWFnZX0gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoND57ZGF0YS50aXRsZX08L2g0PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntkYXRhLnByaWNlfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUFkZChkYXRhKX0gY2xhc3NOYW1lPXtzdHlsZXMuYnRufT5BZGQgdG8gY2FydDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZURpc3BhdGNoIiwic3R5bGVzIiwiYWRkIiwiUHJvZHVjdHMiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImRpc3BhdGNoIiwiaGFuZGxlQWRkIiwiZGF0YSIsImZldGNoUHJvZHVjdCIsInJlcyIsImZldGNoIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJtYXAiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsImg0IiwidGl0bGUiLCJoNSIsInByaWNlIiwiYnV0dG9uIiwib25DbGljayIsImNsYXNzTmFtZSIsImJ0biJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/index.tsx\n");

/***/ }),

/***/ "./store/cartSlice.ts":
/*!****************************!*\
  !*** ./store/cartSlice.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"add\": () => (/* binding */ add),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"remove\": () => (/* binding */ remove)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst initialState = [];\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cart\",\n    initialState,\n    reducers: {\n        add (state, action) {\n            state.push(action.payload);\n        },\n        remove (state, action) {\n            state = state.filter((item)=>item.id !== action.payload);\n        }\n    }\n});\nconst { add , remove  } = cartSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cartSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9jYXJ0U2xpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEM7QUFFOUMsTUFBTUMsZUFBb0IsRUFBRTtBQUU1QixNQUFNQyxZQUFZRiw2REFBV0EsQ0FBQztJQUMxQkcsTUFBTTtJQUNORjtJQUNBRyxVQUFVO1FBQ05DLEtBQUlDLEtBQUssRUFBRUMsTUFBTSxFQUFFO1lBQ2ZELE1BQU1FLElBQUksQ0FBQ0QsT0FBT0UsT0FBTztRQUM3QjtRQUNBQyxRQUFPSixLQUFLLEVBQUVDLE1BQU0sRUFBRTtZQUNsQkQsUUFBUUEsTUFBTUssTUFBTSxDQUFDLENBQUNDLE9BQXNCQSxLQUFLQyxFQUFFLEtBQUtOLE9BQU9FLE9BQU87UUFDMUU7SUFDSjtBQUNKO0FBRU8sTUFBTSxFQUFFSixJQUFHLEVBQUVLLE9BQU0sRUFBRSxHQUFHUixVQUFVWSxPQUFPO0FBQ2hELGlFQUFlWixVQUFVYSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9vbC1raXQvLi9zdG9yZS9jYXJ0U2xpY2UudHM/OGJjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcblxuY29uc3QgaW5pdGlhbFN0YXRlOiBhbnkgPSBbXVxuXG5jb25zdCBjYXJ0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogJ2NhcnQnLFxuICAgIGluaXRpYWxTdGF0ZSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBhZGQoc3RhdGUsIGFjdGlvbikge1xuICAgICAgICAgICAgc3RhdGUucHVzaChhY3Rpb24ucGF5bG9hZClcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHN0YXRlID0gc3RhdGUuZmlsdGVyKChpdGVtOiB7IGlkOiBhbnkgfSkgPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXG4gICAgICAgIH1cbiAgICB9XG59KVxuXG5leHBvcnQgY29uc3QgeyBhZGQsIHJlbW92ZSB9ID0gY2FydFNsaWNlLmFjdGlvbnNcbmV4cG9ydCBkZWZhdWx0IGNhcnRTbGljZS5yZWR1Y2VyIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5pdGlhbFN0YXRlIiwiY2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiYWRkIiwic3RhdGUiLCJhY3Rpb24iLCJwdXNoIiwicGF5bG9hZCIsInJlbW92ZSIsImZpbHRlciIsIml0ZW0iLCJpZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/cartSlice.ts\n");

/***/ }),

/***/ "./store/hooks.ts":
/*!************************!*\
  !*** ./store/hooks.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAppDispatch\": () => (/* binding */ useAppDispatch),\n/* harmony export */   \"useAppSelector\": () => (/* binding */ useAppSelector)\n/* harmony export */ });\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_0__);\n\n// Use throughout your app instead of plain `useDispatch` and `useSelector`\nconst useAppDispatch = react_redux__WEBPACK_IMPORTED_MODULE_0__.useDispatch;\nconst useAppSelector = react_redux__WEBPACK_IMPORTED_MODULE_0__.useSelector;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9ob29rcy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQXNEO0FBSXRELDJFQUEyRTtBQUNwRSxNQUFNRSxpQkFBb0NGLG9EQUFXQSxDQUFBO0FBQ3JELE1BQU1HLGlCQUFrREYsb0RBQVdBLENBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b29sLWtpdC8uL3N0b3JlL2hvb2tzLnRzP2QwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlRGlzcGF0Y2gsIHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdHlwZSB7IFR5cGVkVXNlU2VsZWN0b3JIb29rIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgdHlwZSB7IFJvb3RTdGF0ZSwgQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi9zdG9yZS9zdG9yZSdcblxuLy8gVXNlIHRocm91Z2hvdXQgeW91ciBhcHAgaW5zdGVhZCBvZiBwbGFpbiBgdXNlRGlzcGF0Y2hgIGFuZCBgdXNlU2VsZWN0b3JgXG5leHBvcnQgY29uc3QgdXNlQXBwRGlzcGF0Y2g6ICgpID0+IEFwcERpc3BhdGNoID0gdXNlRGlzcGF0Y2hcbmV4cG9ydCBjb25zdCB1c2VBcHBTZWxlY3RvcjogVHlwZWRVc2VTZWxlY3Rvckhvb2s8Um9vdFN0YXRlPiA9IHVzZVNlbGVjdG9yIl0sIm5hbWVzIjpbInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJ1c2VBcHBEaXNwYXRjaCIsInVzZUFwcFNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/hooks.ts\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();