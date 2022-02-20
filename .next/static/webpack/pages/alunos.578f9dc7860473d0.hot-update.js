"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/alunos",{

/***/ "./src/components/AlunosCard/AlunosPage.jsx":
/*!**************************************************!*\
  !*** ./src/components/AlunosCard/AlunosPage.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AlunosPage_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./AlunosPage.module.scss */ \"./src/components/AlunosCard/AlunosPage.module.scss\");\n/* harmony import */ var _AlunosPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_AlunosPage_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/api */ \"./services/api.js\");\n/* harmony import */ var _Card_AlunosCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Card/AlunosCard */ \"./src/components/AlunosCard/Card/AlunosCard.jsx\");\n/* harmony import */ var _CustomTable_CustomTable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../CustomTable/CustomTable */ \"./src/components/CustomTable/CustomTable.jsx\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar AlunosPage = function() {\n    var _this1 = _this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(), alunosData = ref[0], setAlunosData = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get('/alunos').then(function(response) {\n            return setAlunosData(response.data.userData);\n        });\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_AlunosPage_module_scss__WEBPACK_IMPORTED_MODULE_5___default().tableContainer),\n        children: alunosData && alunosData.map(function(aluno) {\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card_AlunosCard__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                name: aluno.name,\n                id: aluno.id,\n                isActive: aluno.isActive\n            }, void 0, false, {\n                fileName: \"C:\\\\ProjetoAcademias\\\\projeto-academix\\\\src\\\\components\\\\AlunosCard\\\\AlunosPage.jsx\",\n                lineNumber: 19,\n                columnNumber: 11\n            }, _this1);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\ProjetoAcademias\\\\projeto-academix\\\\src\\\\components\\\\AlunosCard\\\\AlunosPage.jsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, _this));\n};\n_s(AlunosPage, \"ARrBhKCnyC2+WZwbxvtaOTW2oQA=\");\n_c = AlunosPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AlunosPage);\nvar _c;\n$RefreshReg$(_c, \"AlunosPage\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BbHVub3NDYXJkL0FsdW5vc1BhZ2UuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrRDtBQUNMO0FBQ047QUFDRztBQUNVOzs7QUFFcEQsR0FBSyxDQUFDTyxVQUFVLEdBQUcsUUFBUSxHQUFGLENBQUM7OztJQUN4QixHQUFLLENBQStCTCxHQUFVLEdBQVZBLCtDQUFRLElBQXJDTSxVQUFVLEdBQW1CTixHQUFVLEtBQTNCTyxhQUFhLEdBQUlQLEdBQVU7SUFFOUNELGdEQUFTLENBQUMsUUFBUSxHQUFGLENBQUM7UUFDZkcseURBQU8sQ0FBQyxDQUFTLFVBQ2RPLElBQUksQ0FBQ0MsUUFBUSxDQUFSQSxRQUFRO1lBQUlILE1BQU0sQ0FBTkEsYUFBYSxDQUFDRyxRQUFRLENBQUNDLElBQUksQ0FBQ0MsUUFBUTs7SUFDMUQsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQ0hDLENBQUc7UUFBQ0MsU0FBUyxFQUFFYiwrRUFBcUI7a0JBQ2xDSyxVQUFVLElBQ1RBLFVBQVUsQ0FBQ1UsR0FBRyxDQUFFQyxRQUFRLENBQVJBLEtBQUs7MEJBQ25CLE1BQU0sK0RBQUxkLHdEQUFVO2dCQUNUZSxJQUFJLEVBQUVELEtBQUssQ0FBQ0MsSUFBSTtnQkFDaEJDLEVBQUUsRUFBRUYsS0FBSyxDQUFDRSxFQUFFO2dCQUNaQyxRQUFRLEVBQUVILEtBQUssQ0FBQ0csUUFBUTs7Ozs7Ozs7Ozs7O0FBTXBDLENBQUM7R0FyQktmLFVBQVU7S0FBVkEsVUFBVTtBQXVCaEIsK0RBQWVBLFVBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQWx1bm9zQ2FyZC9BbHVub3NQYWdlLmpzeD8wOGY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9BbHVub3NQYWdlLm1vZHVsZS5zY3NzJ1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL2FwaSdcclxuaW1wb3J0IEFsdW5vc0NhcmQgZnJvbSAnLi9DYXJkL0FsdW5vc0NhcmQnXHJcbmltcG9ydCBDdXN0b21UYWJsZSBmcm9tICcuLi9DdXN0b21UYWJsZS9DdXN0b21UYWJsZSdcclxuXHJcbmNvbnN0IEFsdW5vc1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FsdW5vc0RhdGEsIHNldEFsdW5vc0RhdGFdID0gdXNlU3RhdGUoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBpLmdldCgnL2FsdW5vcycpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHNldEFsdW5vc0RhdGEocmVzcG9uc2UuZGF0YS51c2VyRGF0YSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmxlQ29udGFpbmVyfT5cclxuICAgICAge2FsdW5vc0RhdGEgJiYgXHJcbiAgICAgICAgYWx1bm9zRGF0YS5tYXAoKGFsdW5vID0+IFxyXG4gICAgICAgICAgPEFsdW5vc0NhcmQgXHJcbiAgICAgICAgICAgIG5hbWU9e2FsdW5vLm5hbWV9IFxyXG4gICAgICAgICAgICBpZD17YWx1bm8uaWR9IFxyXG4gICAgICAgICAgICBpc0FjdGl2ZT17YWx1bm8uaXNBY3RpdmV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFsdW5vc1BhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsImFwaSIsIkFsdW5vc0NhcmQiLCJDdXN0b21UYWJsZSIsIkFsdW5vc1BhZ2UiLCJhbHVub3NEYXRhIiwic2V0QWx1bm9zRGF0YSIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJ1c2VyRGF0YSIsImRpdiIsImNsYXNzTmFtZSIsInRhYmxlQ29udGFpbmVyIiwibWFwIiwiYWx1bm8iLCJuYW1lIiwiaWQiLCJpc0FjdGl2ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AlunosCard/AlunosPage.jsx\n");

/***/ })

});