/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../utils/about.js":
/*!*************************!*\
  !*** ../utils/about.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.config = void 0;\nvar config = exports.config = {\n  type: \"items\",\n  label: \"Sobre\",\n  items: {\n    about1: {\n      type: \"string\",\n      component: \"text\",\n      label: \"Extensão desenvolvida por Bilden Inteligência em Negócios\"\n    },\n    aboutlogo: {\n      component: \"text\",\n      label: \"\"\n    },\n    about3: {\n      component: \"link\",\n      url: \"http://www.bildennegocios.com.br/public/\",\n      label: 'bildennegocios.com.br'\n    },\n    about4: {\n      type: \"string\",\n      component: \"text\",\n      label: \"Todos os direitos reservados - 2021\"\n    }\n  }\n};\n\n//# sourceURL=webpack:///../utils/about.js?");

/***/ }),

/***/ "../utils/sheetList.js":
/*!*****************************!*\
  !*** ../utils/sheetList.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getBMList = getBMList;\nexports.getPPList = getPPList;\nexports.getVARList = getVARList;\nfunction getC(t, e) {\n  return t.reduce(function (t, e) {\n    return t && t[e] ? t[e] : null;\n  }, e);\n}\nfunction getPPList(n, a) {\n  var i = a.Promise.defer();\n  var t = getC([\"app\"], n);\n  return t || (t = a.currApp()), t.getList(getC([\"listType\"], n), function (t) {\n    var e = [],\n      r = getC([\"sortBy\"], n) || \"rank\";\n    return t && t.qAppObjectList && t.qAppObjectList.qItems ? (t.qAppObjectList.qItems.sort(function (t, e) {\n      return t.qData[r] - e.qData[r];\n    }).forEach(function (t) {\n      e.push({\n        value: t.qInfo.qId,\n        label: 50 < t.qMeta.title.length ? t.qMeta.title.slice(0, 50) + \"...\" : t.qMeta.title\n      });\n    }), i.resolve(e)) : i.reject(\"qItems is undefined (listType: \" + getC([\"listType\"], n) + \")\");\n  }), i.promise;\n}\nfunction getBMList(n, a) {\n  var i = a.Promise.defer();\n  var t = getC([\"app\"], n);\n  return t || (t = a.currApp()), t.getList(getC([\"listType\"], n), function (t) {\n    var e = [];\n    return t && t.qBookmarkList && t.qBookmarkList.qItems ? (t.qBookmarkList.qItems.forEach(function (t) {\n      e.push({\n        value: t.qInfo.qId,\n        label: 50 < t.qMeta.title.length ? t.qMeta.title.slice(0, 50) + \"...\" : t.qMeta.title\n      });\n    }), i.resolve(e)) : i.reject(\"qItems is undefined (listType: \" + getC([\"listType\"], n) + \")\");\n  }), i.promise;\n}\nfunction getVARList(n, a) {\n  var i = a.Promise.defer();\n  var t = getC([\"app\"], n);\n  return t || (t = a.currApp()), t.getList(getC([\"listType\"], n), function (t) {\n    var e = [];\n    return t && t.qVariableList && t.qVariableList.qItems ? (t.qVariableList.qItems.filter(function (i) {\n      return !i.qIsReserved;\n    }).forEach(function (t) {\n      e.push({\n        value: t.qName,\n        label: 50 < t.qName.length ? t.qName.slice(0, 50) + \"...\" : t.qName\n      });\n    }), i.resolve(e)) : i.reject(\"qItems is undefined (listType: \" + getC([\"listType\"], n) + \")\");\n  }), i.promise;\n}\n\n//# sourceURL=webpack:///../utils/sheetList.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./static/stylepopup.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./static/stylepopup.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".popBody { \\r\\n    \\r\\n}\\r\\n\\r\\n.popBodyFrame { \\r\\n    width: 100%;    \\r\\n    margin-top: 20px;\\r\\n    height: calc(100% - 40px);\\r\\n}\\r\\n\\r\\n.popBodyHTML {\\r\\n    width: calc(100% - 40px);\\r\\n    height: calc(100% - 80px);\\r\\n    margin-top: 39px;\\r\\n    border-top: 1px solid #eee;\\r\\n    padding: 20px;\\r\\n}\\r\\n\\r\\n.divFramePopUp { \\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 92vw; \\r\\n    height: 92vh; \\r\\n    margin-left: 4vw; \\r\\n    margin-top: 4vh; \\r\\n    max-height: 92vh;\\r\\n    position: fixed; \\r\\n    background-color: #fff;     \\r\\n    border: 2px solid #CCC; \\r\\n    z-index: 1002;\\r\\n    overflow: auto;\\r\\n}\\r\\n\\r\\n.divFramePopUpDark {\\r\\n    left: 0;\\r\\n    top: 0;\\r\\n    width: 92vw;\\r\\n    height: 92vh;\\r\\n    margin-left: 4vw;\\r\\n    margin-top: 4vh;\\r\\n    max-height: 92vh;\\r\\n    position: fixed;\\r\\n    background-color: #222;\\r\\n    border: 2px solid #777;\\r\\n    z-index: 1002;\\r\\n    overflow: auto;\\r\\n    color: #ddd;\\r\\n}\\r\\n\\r\\n.closeButton {\\r\\n    float: right;\\r\\n    margin: -13px 4px -30px 0px;\\r\\n    font-size: 50px;\\r\\n    cursor: pointer;\\r\\n    z-index: 1002;\\r\\n}\\r\\n\\r\\n.backdrop { \\r\\n    position: fixed; \\r\\n    width: 100%; \\r\\n    height: 100%; \\r\\n    top: 0px; \\r\\n    left: 0px; \\r\\n    background-color: #777; \\r\\n    opacity: 0.3; \\r\\n    z-index: 999;\\r\\n}\\r\\n\\r\\n.tituloFrame { \\r\\n    float: left; \\r\\n    font-size: 22px; \\r\\n    font-weight: bold; \\r\\n    margin: 10px 0px 0px 10px; \\r\\n}\\r\\n\\r\\n.btnFiltroFixo { \\r\\n    position: fixed; \\r\\n    background-color: white; \\r\\n}\\r\\n\\r\\n.btnFiltroRelativo { \\r\\n    position: fixed; \\r\\n    background-color: white; \\r\\n}\\r\\n\\r\\ndiv[tid=about] div[tid=aboutlogo] {\\r\\n    background: url(http://central.bildennegocios.com.br/static/img/logonome.PNG);\\r\\n    height: 60px;\\r\\n    margin-left: 10%;\\r\\n    margin-top: 10px;\\r\\n    background-size: contain;\\r\\n    background-repeat: no-repeat;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./static/stylepopup.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nvar _methods = __webpack_require__(/*! ./methods */ \"./src/methods/index.js\");\n__webpack_require__(/*! ../static/stylepopup.css */ \"./static/stylepopup.css\");\nvar globals = _interopRequireWildcard(__webpack_require__(/*! ./methods/globals.js */ \"./src/methods/globals.js\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\n//, \"text!./PopUpDinamico.css\"\n\nwindow.define([\"qlik\", \"text!./static/icons-lui.json\", \"text!./static/template.ng.html\", \"text!./static/stylepopup.css\"], function (qlik, l, t, cssContent) {\n  globals.setQlikObject(qlik);\n  globals.setCssContent(cssContent);\n  globals.setluiIcons(l);\n  return {\n    template: t,\n    initialProperties: _methods.initialProperties,\n    definition: _methods.definition,\n    controller: _methods.controller,\n    paint: _methods.paint,\n    resize: _methods.resize,\n    support: {\n      snapshot: false,\n      \"export\": false,\n      exportData: false\n    }\n  };\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/methods/controller.js":
/*!***********************************!*\
  !*** ./src/methods/controller.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar popup = _interopRequireWildcard(__webpack_require__(/*! ./popup.js */ \"./src/methods/popup.js\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nvar _default = exports[\"default\"] = [\"$scope\", \"$element\", function ($scope, $element) {\n  $scope.ExibirPopUp = function (layout) {\n    popup.ExibirPopUp(layout);\n  };\n}];\n\n//# sourceURL=webpack:///./src/methods/controller.js?");

/***/ }),

/***/ "./src/methods/definition.js":
/*!***********************************!*\
  !*** ./src/methods/definition.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar about = _interopRequireWildcard(__webpack_require__(/*! ../../../utils/about */ \"../utils/about.js\"));\nvar sheetList = _interopRequireWildcard(__webpack_require__(/*! ../../../utils/sheetList */ \"../utils/sheetList.js\"));\nvar globals = _interopRequireWildcard(__webpack_require__(/*! ./globals.js */ \"./src/methods/globals.js\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nvar _default = exports[\"default\"] = {\n  type: \"items\",\n  component: \"accordion\",\n  items: {\n    appearancePanel: {\n      uses: \"settings\",\n      items: {\n        json: {\n          type: 'items',\n          label: 'Configuração',\n          items: {\n            popId: {\n              ref: \"popId\",\n              expression: false,\n              type: \"string\",\n              label: \"Pop-up ID (precisa ser único na aba)\",\n              defaultValue: \"\"\n            },\n            tituloPopUp: {\n              ref: \"tituloPopUp\",\n              expression: 'optional',\n              type: \"string\",\n              label: \"Tí­tulo do Pop-up\",\n              defaultValue: \"\"\n            },\n            showSelectionBar: {\n              ref: \"showSelectionBar\",\n              type: \"boolean\",\n              label: \"Exibir barra de seleções?\"\n            },\n            buttonIconsLui: {\n              type: \"string\",\n              component: \"dropdown\",\n              label: \"Ícone do botão\",\n              ref: \"buttonIconsLui\",\n              options: function options() {\n                return function (e) {\n                  var t = JSON.parse(e).icons,\n                    l = [];\n                  return t.forEach(function (e) {\n                    l.push({\n                      value: e.id,\n                      label: e.name\n                    });\n                  }), l.sort(function (e, t) {\n                    return (\"\" + e.label).localeCompare(t.label);\n                  }), l.unshift({\n                    value: \"\",\n                    label: \">> No icon <<\"\n                  }), l;\n                }(globals.luiIcons);\n              }\n            },\n            tituloBotao: {\n              ref: \"tituloBotao\",\n              expression: \"optional\",\n              type: \"string\",\n              label: \"Label do botão\",\n              defaultValue: \"\"\n            },\n            posicionarFixo: {\n              ref: \"posicionarFixo\",\n              expression: false,\n              type: \"boolean\",\n              label: \"Posicionamento Fixo?\",\n              defaultValue: true\n            },\n            btnRight: {\n              ref: \"btnRight\",\n              expression: false,\n              type: \"number\",\n              label: \"Posição do botão (direita)\",\n              defaultValue: \"90\",\n              show: function show(e) {\n                return e.posicionarFixo;\n              }\n            },\n            btnTop: {\n              ref: \"btnTop\",\n              expression: false,\n              type: \"number\",\n              label: \"Posição do botão (topo)\",\n              defaultValue: \"90\",\n              show: function show(e) {\n                return e.posicionarFixo;\n              }\n            },\n            embedarDashboard: {\n              ref: \"embedarDashboard\",\n              expression: false,\n              type: \"boolean\",\n              label: \"Exibir sheet?\",\n              defaultValue: true\n            },\n            conteudoHTML: {\n              ref: \"conteudoHTML\",\n              expression: \"optional\",\n              type: \"string\",\n              label: \"Conteúdo HTML\",\n              defaultValue: \"\",\n              show: function show(e) {\n                return !e.embedarDashboard;\n              }\n            },\n            sheetList: {\n              type: \"string\",\n              component: \"dropdown\",\n              label: \"Selecione a aba carregada\",\n              ref: \"sheetId\",\n              show: function show(e) {\n                return e.embedarDashboard;\n              },\n              options: function options() {\n                return sheetList.getPPList({\n                  listType: \"sheet\",\n                  sortBy: \"title\"\n                }, globals.qlikObject);\n              }\n            }\n          }\n        }\n      }\n    },\n    about: about.config\n  }\n};\n\n//# sourceURL=webpack:///./src/methods/definition.js?");

/***/ }),

/***/ "./src/methods/globals.js":
/*!********************************!*\
  !*** ./src/methods/globals.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.qlikObject = exports.luiIcons = exports.cssContent = void 0;\nexports.setCssContent = setCssContent;\nexports.setQlikObject = setQlikObject;\nexports.setluiIcons = setluiIcons;\nvar qlikObject;\nvar luiIcons;\nfunction setQlikObject(q) {\n  exports.qlikObject = qlikObject = q;\n}\nfunction setluiIcons(l) {\n  exports.luiIcons = luiIcons = l;\n}\nvar cssContent;\nfunction setCssContent(c) {\n  exports.cssContent = cssContent = c;\n}\n\n//# sourceURL=webpack:///./src/methods/globals.js?");

/***/ }),

/***/ "./src/methods/index.js":
/*!******************************!*\
  !*** ./src/methods/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nObject.defineProperty(exports, \"controller\", {\n  enumerable: true,\n  get: function get() {\n    return _controller[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"definition\", {\n  enumerable: true,\n  get: function get() {\n    return _definition[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"initialProperties\", {\n  enumerable: true,\n  get: function get() {\n    return _initialProperties[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"paint\", {\n  enumerable: true,\n  get: function get() {\n    return _paint[\"default\"];\n  }\n});\nObject.defineProperty(exports, \"resize\", {\n  enumerable: true,\n  get: function get() {\n    return _resize[\"default\"];\n  }\n});\nvar _initialProperties = _interopRequireDefault(__webpack_require__(/*! ./initial-properties */ \"./src/methods/initial-properties.js\"));\nvar _definition = _interopRequireDefault(__webpack_require__(/*! ./definition */ \"./src/methods/definition.js\"));\nvar _controller = _interopRequireDefault(__webpack_require__(/*! ./controller */ \"./src/methods/controller.js\"));\nvar _paint = _interopRequireDefault(__webpack_require__(/*! ./paint */ \"./src/methods/paint.js\"));\nvar _resize = _interopRequireDefault(__webpack_require__(/*! ./resize */ \"./src/methods/resize.js\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\n\n//# sourceURL=webpack:///./src/methods/index.js?");

/***/ }),

/***/ "./src/methods/initial-properties.js":
/*!*******************************************!*\
  !*** ./src/methods/initial-properties.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = exports[\"default\"] = {\n  qHyperCubeDef: {\n    qDimensions: [],\n    qMeasures: [],\n    qInitialDataFetch: [{\n      qWidth: 3,\n      qHeight: 1000\n    }]\n  }\n};\n\n//# sourceURL=webpack:///./src/methods/initial-properties.js?");

/***/ }),

/***/ "./src/methods/paint.js":
/*!******************************!*\
  !*** ./src/methods/paint.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\nvar globals = _interopRequireWildcard(__webpack_require__(/*! ./globals.js */ \"./src/methods/globals.js\"));\nvar popup = _interopRequireWildcard(__webpack_require__(/*! ./popup.js */ \"./src/methods/popup.js\"));\nfunction _getRequireWildcardCache(e) { if (\"function\" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }\nfunction _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return { \"default\": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if (\"default\" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n[\"default\"] = e, t && t.set(e, n), n; }\nfunction _default($element, layout) {\n  // if(!this._inEditState) {\n  // \t$element.html('not edit');\n  // } else {\n  // \t$element.html('edit');\n  // }\n\n  $('<style>').html(globals.cssContent).appendTo('head');\n  $('#' + layout.popId).remove();\n  var classePop = 'popBodyFrame';\n  if (!layout.embedarDashboard) {\n    classePop = 'popBodyHTML';\n  }\n  var classeDivFramePopUp = 'divFramePopUp';\n  if ($('body').hasClass('nightmode')) classeDivFramePopUp = 'divFramePopUpDark';\n  var html = function html(l) {\n    return \"<div id='base\".concat(l.popId, \"' class=\\\"modal_popup\\\" style=\\\"z-index: 10; display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0\\\">\\n\\t\\t<div class=\\\"backdrop\\\" onclick=\\\"$('#base\").concat(l.popId, \"').css('display','none');\\\" ></div>\\n\\t\\t<div class='\").concat(classeDivFramePopUp, \"' id='\").concat(l.popId, \"'>\\n\\t\\t\\t<span class='tituloFrame'>\\n\\t\\t\\t\\t\").concat(l.tituloPopUp, \"\\n\\t\\t\\t</span>\\n\\t\\t\\t<span class='closeButton' onclick=\\\"$('#base\").concat(l.popId, \"').css('display','none');\\\" >&times;</span>\\n\\t\\t\\t<div class='popBody \").concat(classePop, \"'></div>\\n\\t\\t</div>\\n\\t</div>\");\n  };\n  var div = $(html(layout));\n  $('#qs-page-container').prepend(div[0]);\n  $($('.divFrame', '#' + layout.popId).closest('.object-wrapper')[0]).find('a[q-title-translation=\"Tooltip.ZoomIn\"]').hide();\n}\n\n//# sourceURL=webpack:///./src/methods/paint.js?");

/***/ }),

/***/ "./src/methods/popup.js":
/*!******************************!*\
  !*** ./src/methods/popup.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.ExibirPopUp = ExibirPopUp;\nfunction ExibirPopUp(layout) {\n  $('#base' + layout.popId).css('display', 'block');\n\n  // $('#' + popup_id).show();\n  // $('#' + popup_id + 'backdrop').show();\n\n  if (layout.embedarDashboard) {\n    var appId = window.location.href.substring(window.location.href.indexOf(\"app\") + 4, window.location.href.indexOf(\"sheet\") - 1);\n    var url = window.location.origin + \"/single/?appid=\" + appId + \"&sheet=\" + layout.sheetId;\n    if (layout.showSelectionBar) url += \"&opt=currsel\";\n    var iframePop = $('<iframe style=\"border:none;width:100%;height:100%; border-top: 1px solid #e8e8e8;\">').attr('src', url);\n    $(iframePop).closest(\".cell\").css(\"z-index\", \"1000\");\n    $('.popBody', '#' + layout.popId).html('');\n    $('.popBody', '#' + layout.popId).append(iframePop);\n  } else {\n    $('.popBody', '#' + layout.popId).html(layout.conteudoHTML);\n  }\n}\n\n//# sourceURL=webpack:///./src/methods/popup.js?");

/***/ }),

/***/ "./src/methods/resize.js":
/*!*******************************!*\
  !*** ./src/methods/resize.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = _default;\nfunction _default($element, layout) {\n  // ..resize code here\n}\n\n//# sourceURL=webpack:///./src/methods/resize.js?");

/***/ }),

/***/ "./static/stylepopup.css":
/*!*******************************!*\
  !*** ./static/stylepopup.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./stylepopup.css */ \"./node_modules/css-loader/dist/cjs.js!./static/stylepopup.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./static/stylepopup.css?");

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/index.js */\"./src/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/index.js?");

/***/ })

/******/ });