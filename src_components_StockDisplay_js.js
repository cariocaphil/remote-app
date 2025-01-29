"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkremote_app"] = self["webpackChunkremote_app"] || []).push([["src_components_StockDisplay_js"],{

/***/ "./src/components/StockDisplay.js":
/*!****************************************!*\
  !*** ./src/components/StockDisplay.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StockDisplay = _ref => {\n  let {\n    stockId\n  } = _ref;\n  const [stockPrice, setStockPrice] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [marketStats, setMarketStats] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n  const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n\n  // ✅ Fetch Global Market Stats (On Mount)\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    fetch(\"https://api.coingecko.com/api/v3/global\").then(response => response.json()).then(data => {\n      setMarketStats(data.data);\n    }).catch(error => console.error(\"Error fetching market data:\", error));\n  }, []); // Runs only on mount\n\n  // ✅ Fetch Stock Price (When `stockId` changes)\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    setLoading(true);\n    setError(null);\n    fetch(\"https://api.coingecko.com/api/v3/simple/price?ids=\".concat(stockId, \"&vs_currencies=usd\")).then(response => response.json()).then(data => {\n      setStockPrice(data[stockId]);\n      setLoading(false);\n    }).catch(error => {\n      setError(error.message);\n      setLoading(false);\n    });\n  }, [stockId]); // Runs when stock selection changes\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", {\n    style: {\n      marginTop: \"20px\"\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Stock Information (Remote App)\"), loading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading stock price...\"), error && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Error: \", error), stockPrice && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Current Price: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"$\", stockPrice.usd)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"h2\", null, \"Global Market Overview\"), marketStats ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Total Market Cap: \", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"strong\", null, \"$\", marketStats.total_market_cap.usd.toLocaleString())) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"p\", null, \"Loading market data...\"));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StockDisplay);\n\n//# sourceURL=webpack://remote-app/./src/components/StockDisplay.js?");

/***/ })

}]);