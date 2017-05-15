(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("immutable-fantasy", [], factory);
	else if(typeof exports === 'object')
		exports["immutable-fantasy"] = factory();
	else
		root["immutable-fantasy"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function() {

  'use strict';

  /* eslint comma-dangle: ["off"], no-var: ["off"], strict: ["error", "function"] */
  /* global self */

  var mapping = {
    equals: 'fantasy-land/equals',
    lte: 'fantasy-land/lte',
    concat: 'fantasy-land/concat',
    empty: 'fantasy-land/empty',
    map: 'fantasy-land/map',
    contramap: 'fantasy-land/contramap',
    ap: 'fantasy-land/ap',
    of: 'fantasy-land/of',
    alt: 'fantasy-land/alt',
    zero: 'fantasy-land/zero',
    reduce: 'fantasy-land/reduce',
    traverse: 'fantasy-land/traverse',
    chain: 'fantasy-land/chain',
    chainRec: 'fantasy-land/chainRec',
    extend: 'fantasy-land/extend',
    extract: 'fantasy-land/extract',
    bimap: 'fantasy-land/bimap',
    promap: 'fantasy-land/promap'
  };

  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = mapping;
  } else {
    self.FantasyLand = mapping;
  }

}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fantasyLand = __webpack_require__(0);

var _fantasyLand2 = _interopRequireDefault(_fantasyLand);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ticketToFantasyLand = function ticketToFantasyLand(Immutable) {
  var Collection = Immutable.Collection,
      Seq = Immutable.Seq;

  // Extends main collection types from which others derive

  [Collection, Seq].forEach(function (_ref) {
    var prototype = _ref.prototype;


    prototype[_fantasyLand2.default.equals] = prototype.equals;
    prototype[_fantasyLand2.default.concat] = prototype.concat;
    prototype[_fantasyLand2.default.map] = prototype.map;
    prototype[_fantasyLand2.default.reduce] = prototype.reduce;

    prototype.chain = prototype[_fantasyLand2.default.chain] = function (fn) {
      return this.flatten(true).map(fn);
    };

    prototype.ap = prototype[_fantasyLand2.default.ap] = function (other) {
      return this.map(function (f) {
        return other.map(function (v) {
          return f(v);
        });
      }).flatten();
    };
  });

  ['Stack', 'Record', 'Set', 'OrderedSet', 'List', 'Map', 'OrderedMap'].forEach(function (type) {
    Immutable[type][_fantasyLand2.default.of] = function () {
      var _Immutable$type;

      return (_Immutable$type = Immutable[type]).of.apply(_Immutable$type, arguments);
    };
    Immutable[type][_fantasyLand2.default.empty] = function () {
      return Immutable[type].of();
    };
    Immutable[type].prototype[_fantasyLand2.default.empty] = function () {
      return Immutable[type].of();
    };
  });

  return Immutable;
};

exports.default = ticketToFantasyLand;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=immutable-fantasy.js.map