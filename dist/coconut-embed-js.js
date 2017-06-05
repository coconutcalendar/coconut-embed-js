(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  isFullUrl: function isFullUrl(url) {
    var pattern = new RegExp(/^(https?:\/\/)/);

    return pattern.test(url);
  },
  parameterize: function parameterize(object) {
    return Object.keys(object).reduce(function (value, key, i) {
      var delimiter = i === 0 ? '?' : '&';
      var val = encodeURIComponent(object[key]);
      key = encodeURIComponent(key);

      return [value, delimiter, key, '=', val].join('');
    }, '');
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /* eslint-disable no-undef */


var _utils = __webpack_require__(0);

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CoconutCalendar = function () {
  function CoconutCalendar(path) {
    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '100%';
    var height = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '580px';

    _classCallCheck(this, CoconutCalendar);

    this.path = path;
    this.width = width;
    this.height = height;
    this.params = _utils2.default.parameterize(params);
    this.iframe = document.createElement('iframe');

    this.iframe.setAttribute('seamless', true);
    this.iframe.setAttribute('frameborder', 0);
    this.iframe.setAttribute('width', this.width);
    this.iframe.setAttribute('height', this.height);

    var url = _utils2.default.isFullUrl(this.path) ? this.path + '/embed' : 'https://' + this.path + '.coconutcalendar.com/embed';
    this.iframe.setAttribute('src', '' + url + this.params);
  }

  _createClass(CoconutCalendar, [{
    key: 'embed',
    value: function embed(id) {
      var div = document.getElementById(id);

      div.appendChild(this.iframe);
    }
  }]);

  return CoconutCalendar;
}();

module.exports = CoconutCalendar;

/***/ })
/******/ ]);
});
//# sourceMappingURL=coconut-embed-js.js.map