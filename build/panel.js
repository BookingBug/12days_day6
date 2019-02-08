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
/******/ 	__webpack_require__.p = "./";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _geese = __webpack_require__(3);

var _geese2 = _interopRequireDefault(_geese);

var _bookingbugConfiguratorJs = __webpack_require__(4);

var _bookingbugConfiguratorJs2 = _interopRequireDefault(_bookingbugConfiguratorJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// add new page to the "Clients" sections of the studio app
_bookingbugConfiguratorJs2.default.addPage('Clients', 'geese', {
    style: 'tab',
    layout: [[{
        type: 'bb-geese-panel',
        width: 12,
        index: 0,
        panel_params: {}
    }]]
});

// A a new tab to the "client profile" set of tabs - that is set to shwo the new page
_bookingbugConfiguratorJs2.default.addNamedTab('client_profile', {
    name: 'Geese',
    path: '.views({view: "geese"})',
    position: -1
});

var GeeseCtrl = function () {
    function GeeseCtrl(bbAuthorisation) {
        _classCallCheck(this, GeeseCtrl);

        this.company = bbAuthorisation.getCompany();
        this.client = this.filter.client;
    }

    GeeseCtrl.prototype.email_geese = function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var app, data, result;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.next = 2;
                            return this.company.$get('apps', { app_name: 'day6' });

                        case 2:
                            app = _context.sent;
                            data = { client_id: this.client.id, client_email: this.client.email };
                            _context.next = 6;
                            return app.$post('admin_script', { name: 'Message' }, data);

                        case 6:
                            result = _context.sent;

                        case 7:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function email_geese() {
            return _ref.apply(this, arguments);
        }

        return email_geese;
    }();

    return GeeseCtrl;
}();

var geesePanel = {
    templateUrl: _geese2.default.id,
    controller: GeeseCtrl,
    scope: true,
    bindings: {
        filter: '<'
    }
};

angular.module('BBAdminDashboard').component('bbGeesePanel', geesePanel);

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var angular=window.angular,ngModule;
try {ngModule=angular.module(["ng"])}
catch(e){ngModule=angular.module("ng",[])}
var v1="<h3>{{$ctrl.client.name}}'s Geese</h3>\n<br/>\n<a class=\"btn btn-primary\" ng-click=\"$ctrl.email_geese()\">Email about geese</a>\n<br/>\n";
var id1="day6/geese.html";
var inj=angular.element(window.document).injector();
if(inj){inj.get("$templateCache").put(id1,v1);}
else{ngModule.run(["$templateCache",function(c){c.put(id1,v1)}]);}
exports.id=id1;
exports.template=v1;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = bbConfig;

/***/ })
/******/ ]);