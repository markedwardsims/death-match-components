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

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(3);
	__webpack_require__(8);
	__webpack_require__(4);
	__webpack_require__(6);
	__webpack_require__(7);
	__webpack_require__(9);
	__webpack_require__(2);
	module.exports = __webpack_require__(5);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * # Base Component
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * The base class for Spark JS components. This class should never be
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * instantiated directly.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Element} el
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @param {Object} params
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * @module components/base.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */

	var _each = __webpack_require__(2);

	var _each2 = _interopRequireDefault(_each);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_q3h9eavxj = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/components/base.js',
	      hash = '20e02cfb6cceb993b45ceeb6f292b6502f16c547',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/components/base.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 14,
	          column: 13
	        },
	        end: {
	          line: 14,
	          column: 26
	        }
	      },
	      '1': {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 25,
	          column: 5
	        }
	      },
	      '2': {
	        start: {
	          line: 24,
	          column: 6
	        },
	        end: {
	          line: 24,
	          column: 13
	        }
	      },
	      '3': {
	        start: {
	          line: 27,
	          column: 4
	        },
	        end: {
	          line: 27,
	          column: 46
	        }
	      },
	      '4': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 27
	        }
	      },
	      '5': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 57
	        }
	      },
	      '6': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 30,
	          column: 43
	        }
	      },
	      '7': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 5
	        }
	      },
	      '8': {
	        start: {
	          line: 41,
	          column: 6
	        },
	        end: {
	          line: 41,
	          column: 35
	        }
	      },
	      '9': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      '10': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 46
	        }
	      },
	      '11': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 48,
	          column: 36
	        }
	      },
	      '12': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 50,
	          column: 16
	        }
	      },
	      '13': {
	        start: {
	          line: 62,
	          column: 4
	        },
	        end: {
	          line: 64,
	          column: 5
	        }
	      },
	      '14': {
	        start: {
	          line: 63,
	          column: 6
	        },
	        end: {
	          line: 63,
	          column: 35
	        }
	      },
	      '15': {
	        start: {
	          line: 66,
	          column: 4
	        },
	        end: {
	          line: 66,
	          column: 68
	        }
	      },
	      '16': {
	        start: {
	          line: 67,
	          column: 4
	        },
	        end: {
	          line: 67,
	          column: 43
	        }
	      },
	      '17': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 71,
	          column: 5
	        }
	      },
	      '18': {
	        start: {
	          line: 70,
	          column: 6
	        },
	        end: {
	          line: 70,
	          column: 32
	        }
	      },
	      '19': {
	        start: {
	          line: 73,
	          column: 4
	        },
	        end: {
	          line: 73,
	          column: 16
	        }
	      },
	      '20': {
	        start: {
	          line: 85,
	          column: 4
	        },
	        end: {
	          line: 89,
	          column: 7
	        }
	      },
	      '21': {
	        start: {
	          line: 86,
	          column: 6
	        },
	        end: {
	          line: 88,
	          column: 7
	        }
	      },
	      '22': {
	        start: {
	          line: 87,
	          column: 8
	        },
	        end: {
	          line: 87,
	          column: 20
	        }
	      },
	      '23': {
	        start: {
	          line: 91,
	          column: 4
	        },
	        end: {
	          line: 91,
	          column: 16
	        }
	      },
	      '24': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 60
	        }
	      },
	      '25': {
	        start: {
	          line: 103,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 26
	        }
	      },
	      '26': {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 106,
	          column: 7
	        }
	      },
	      '27': {
	        start: {
	          line: 105,
	          column: 6
	        },
	        end: {
	          line: 105,
	          column: 22
	        }
	      },
	      '28': {
	        start: {
	          line: 108,
	          column: 4
	        },
	        end: {
	          line: 108,
	          column: 16
	        }
	      },
	      '29': {
	        start: {
	          line: 117,
	          column: 0
	        },
	        end: {
	          line: 117,
	          column: 39
	        }
	      },
	      '30': {
	        start: {
	          line: 126,
	          column: 0
	        },
	        end: {
	          line: 126,
	          column: 29
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 14,
	            column: 13
	          },
	          end: {
	            line: 14,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 14,
	            column: 24
	          },
	          end: {
	            line: 14,
	            column: 26
	          }
	        }
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 21,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 21,
	            column: 31
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        }
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 38,
	            column: 2
	          },
	          end: {
	            line: 38,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 38,
	            column: 23
	          },
	          end: {
	            line: 51,
	            column: 3
	          }
	        }
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 60,
	            column: 2
	          },
	          end: {
	            line: 60,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 60,
	            column: 26
	          },
	          end: {
	            line: 74,
	            column: 3
	          }
	        }
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 83,
	            column: 2
	          },
	          end: {
	            line: 83,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 83,
	            column: 27
	          },
	          end: {
	            line: 92,
	            column: 3
	          }
	        }
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 85,
	            column: 17
	          },
	          end: {
	            line: 85,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 85,
	            column: 27
	          },
	          end: {
	            line: 89,
	            column: 5
	          }
	        }
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 100,
	            column: 2
	          },
	          end: {
	            line: 100,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 100,
	            column: 27
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        }
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 104,
	            column: 15
	          },
	          end: {
	            line: 104,
	            column: 16
	          }
	        },
	        loc: {
	          start: {
	            line: 104,
	            column: 22
	          },
	          end: {
	            line: 106,
	            column: 5
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 21,
	            column: 18
	          },
	          end: {
	            line: 21,
	            column: 29
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 21,
	            column: 27
	          },
	          end: {
	            line: 21,
	            column: 29
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 4
	          },
	          end: {
	            line: 25,
	            column: 5
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 8
	          },
	          end: {
	            line: 23,
	            column: 32
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 23,
	            column: 8
	          },
	          end: {
	            line: 23,
	            column: 25
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 29
	          },
	          end: {
	            line: 23,
	            column: 32
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 27,
	            column: 19
	          },
	          end: {
	            line: 27,
	            column: 38
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 27,
	            column: 19
	          },
	          end: {
	            line: 27,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 36
	          },
	          end: {
	            line: 27,
	            column: 38
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 29,
	            column: 5
	          },
	          end: {
	            line: 29,
	            column: 32
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 29,
	            column: 5
	          },
	          end: {
	            line: 29,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 29,
	            column: 28
	          },
	          end: {
	            line: 29,
	            column: 32
	          }
	        }]
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 30,
	            column: 5
	          },
	          end: {
	            line: 30,
	            column: 30
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 30,
	            column: 5
	          },
	          end: {
	            line: 30,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 30,
	            column: 26
	          },
	          end: {
	            line: 30,
	            column: 30
	          }
	        }]
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 42,
	            column: 5
	          }
	        }]
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }]
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 44,
	            column: 8
	          },
	          end: {
	            line: 44,
	            column: 54
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 44,
	            column: 8
	          },
	          end: {
	            line: 44,
	            column: 21
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 25
	          },
	          end: {
	            line: 44,
	            column: 32
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 36
	          },
	          end: {
	            line: 44,
	            column: 54
	          }
	        }]
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 60,
	            column: 13
	          },
	          end: {
	            line: 60,
	            column: 24
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 60,
	            column: 22
	          },
	          end: {
	            line: 60,
	            column: 24
	          }
	        }]
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 62,
	            column: 4
	          },
	          end: {
	            line: 64,
	            column: 5
	          }
	        }]
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 66,
	            column: 5
	          },
	          end: {
	            line: 66,
	            column: 32
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 66,
	            column: 5
	          },
	          end: {
	            line: 66,
	            column: 24
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 28
	          },
	          end: {
	            line: 66,
	            column: 32
	          }
	        }]
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 66,
	            column: 45
	          },
	          end: {
	            line: 66,
	            column: 58
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 66,
	            column: 45
	          },
	          end: {
	            line: 66,
	            column: 47
	          }
	        }, {
	          start: {
	            line: 66,
	            column: 51
	          },
	          end: {
	            line: 66,
	            column: 58
	          }
	        }]
	      },
	      '13': {
	        loc: {
	          start: {
	            line: 67,
	            column: 5
	          },
	          end: {
	            line: 67,
	            column: 30
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 67,
	            column: 5
	          },
	          end: {
	            line: 67,
	            column: 22
	          }
	        }, {
	          start: {
	            line: 67,
	            column: 26
	          },
	          end: {
	            line: 67,
	            column: 30
	          }
	        }]
	      },
	      '14': {
	        loc: {
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 69,
	            column: 4
	          },
	          end: {
	            line: 71,
	            column: 5
	          }
	        }]
	      },
	      '15': {
	        loc: {
	          start: {
	            line: 86,
	            column: 6
	          },
	          end: {
	            line: 88,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 86,
	            column: 6
	          },
	          end: {
	            line: 88,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 6
	          },
	          end: {
	            line: 88,
	            column: 7
	          }
	        }]
	      },
	      '16': {
	        loc: {
	          start: {
	            line: 86,
	            column: 10
	          },
	          end: {
	            line: 86,
	            column: 60
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 86,
	            column: 10
	          },
	          end: {
	            line: 86,
	            column: 51
	          }
	        }, {
	          start: {
	            line: 86,
	            column: 55
	          },
	          end: {
	            line: 86,
	            column: 60
	          }
	        }]
	      },
	      '17': {
	        loc: {
	          start: {
	            line: 102,
	            column: 11
	          },
	          end: {
	            line: 102,
	            column: 59
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 102,
	            column: 35
	          },
	          end: {
	            line: 102,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 102,
	            column: 42
	          },
	          end: {
	            line: 102,
	            column: 59
	          }
	        }]
	      },
	      '18': {
	        loc: {
	          start: {
	            line: 103,
	            column: 12
	          },
	          end: {
	            line: 103,
	            column: 25
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 103,
	            column: 12
	          },
	          end: {
	            line: 103,
	            column: 17
	          }
	        }, {
	          start: {
	            line: 103,
	            column: 21
	          },
	          end: {
	            line: 103,
	            column: 25
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0,
	      '25': 0,
	      '26': 0,
	      '27': 0,
	      '28': 0,
	      '29': 0,
	      '30': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0
	    },
	    b: {
	      '0': [0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0, 0],
	      '9': [0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0],
	      '13': [0, 0],
	      '14': [0, 0],
	      '15': [0, 0],
	      '16': [0, 0],
	      '17': [0, 0],
	      '18': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var noop = (++cov_q3h9eavxj.s[0], function () {
	  ++cov_q3h9eavxj.f[0];
	});

	var Base = function () {

	  /**
	   * Set parameters and cache elements.
	   */
	  function Base(el) {
	    var params = arguments.length <= 1 || arguments[1] === undefined ? (++cov_q3h9eavxj.b[0][0], {}) : arguments[1];

	    _classCallCheck(this, Base);

	    ++cov_q3h9eavxj.f[1];
	    ++cov_q3h9eavxj.s[1];


	    if ((++cov_q3h9eavxj.b[2][0], params.elRequired) && (++cov_q3h9eavxj.b[2][1], !el)) {
	      ++cov_q3h9eavxj.b[1][0];
	      ++cov_q3h9eavxj.s[2];

	      return;
	    } else {
	      ++cov_q3h9eavxj.b[1][1];
	    }

	    ++cov_q3h9eavxj.s[3];
	    this.setParams((++cov_q3h9eavxj.b[3][0], this.defaults) || (++cov_q3h9eavxj.b[3][1], {}), true);
	    ++cov_q3h9eavxj.s[4];
	    this.setParams(params);
	    ++cov_q3h9eavxj.s[5];
	    ((++cov_q3h9eavxj.b[4][0], this._cacheElements) || (++cov_q3h9eavxj.b[4][1], noop)).call(this, el, params);
	    ++cov_q3h9eavxj.s[6];
	    ((++cov_q3h9eavxj.b[5][0], this._parseParams) || (++cov_q3h9eavxj.b[5][1], noop)).call(this);
	  }

	  /**
	   * Remove the component from the DOM and prepare for garbage collection by dereferencing values.
	   * @param {Boolean} leaveElement Leave the element intact.
	   */


	  _createClass(Base, [{
	    key: 'remove',
	    value: function remove(leaveElement) {
	      ++cov_q3h9eavxj.f[2];
	      ++cov_q3h9eavxj.s[7];


	      if (this._removeEventListeners) {
	        ++cov_q3h9eavxj.b[6][0];
	        ++cov_q3h9eavxj.s[8];

	        this._removeEventListeners();
	      } else {
	        ++cov_q3h9eavxj.b[6][1];
	      }

	      ++cov_q3h9eavxj.s[9];
	      if ((++cov_q3h9eavxj.b[8][0], !leaveElement) && (++cov_q3h9eavxj.b[8][1], this.el) && (++cov_q3h9eavxj.b[8][2], this.el.parentNode)) {
	        ++cov_q3h9eavxj.b[7][0];
	        ++cov_q3h9eavxj.s[10];

	        this.el.parentNode.removeChild(this.el);
	      } else {
	        ++cov_q3h9eavxj.b[7][1];
	      }

	      ++cov_q3h9eavxj.s[11];
	      this.unsetParams(this.defaults);

	      ++cov_q3h9eavxj.s[12];
	      return this;
	    }

	    /**
	     * Update the component to use a new element or reparse from
	     * the existing element.
	     * @param {Element} el Optional
	     * @param {Object} params Optional
	     */

	  }, {
	    key: 'update',
	    value: function update(el) {
	      var params = arguments.length <= 1 || arguments[1] === undefined ? (++cov_q3h9eavxj.b[9][0], {}) : arguments[1];
	      ++cov_q3h9eavxj.f[3];
	      ++cov_q3h9eavxj.s[13];


	      if (this._removeEventListeners) {
	        ++cov_q3h9eavxj.b[10][0];
	        ++cov_q3h9eavxj.s[14];

	        this._removeEventListeners();
	      } else {
	        ++cov_q3h9eavxj.b[10][1];
	      }

	      ++cov_q3h9eavxj.s[15];
	      ((++cov_q3h9eavxj.b[11][0], this._cacheElements) || (++cov_q3h9eavxj.b[11][1], noop)).call(this, (++cov_q3h9eavxj.b[12][0], el) || (++cov_q3h9eavxj.b[12][1], this.el), params);
	      ++cov_q3h9eavxj.s[16];
	      ((++cov_q3h9eavxj.b[13][0], this._parseParams) || (++cov_q3h9eavxj.b[13][1], noop)).call(this);

	      ++cov_q3h9eavxj.s[17];
	      if (this._addEventListeners) {
	        ++cov_q3h9eavxj.b[14][0];
	        ++cov_q3h9eavxj.s[18];

	        this._addEventListeners();
	      } else {
	        ++cov_q3h9eavxj.b[14][1];
	      }

	      ++cov_q3h9eavxj.s[19];
	      return this;
	    }

	    /**
	     * Set a hash of parameters if they're whitelisted or we're told to force the set.
	     * This is used to set initial values as well as set passed parameters.
	     * @param {Object} params
	     * @param {Boolean} force Force setting even if the param is not whitelisted.
	     */

	  }, {
	    key: 'setParams',
	    value: function setParams(params, force) {
	      var _this = this;

	      ++cov_q3h9eavxj.f[4];
	      ++cov_q3h9eavxj.s[20];


	      (0, _each2.default)(params, function (k, v) {
	        ++cov_q3h9eavxj.f[5];
	        ++cov_q3h9eavxj.s[21];

	        if ((++cov_q3h9eavxj.b[16][0], _this._whitelistedParams.indexOf(k) !== -1) || (++cov_q3h9eavxj.b[16][1], force)) {
	          ++cov_q3h9eavxj.b[15][0];
	          ++cov_q3h9eavxj.s[22];

	          _this[k] = v;
	        } else {
	          ++cov_q3h9eavxj.b[15][1];
	        }
	      });

	      ++cov_q3h9eavxj.s[23];
	      return this;
	    }

	    /**
	     * Unset all parameters.
	     * @param {Array|Object} keys
	     * @param {Object} scope The object to unset the params from. Defaults to `this`.
	     */

	  }, {
	    key: 'unsetParams',
	    value: function unsetParams(keys, scope) {
	      ++cov_q3h9eavxj.f[6];
	      ++cov_q3h9eavxj.s[24];


	      keys = keys instanceof Array ? (++cov_q3h9eavxj.b[17][0], keys) : (++cov_q3h9eavxj.b[17][1], Object.keys(keys));
	      ++cov_q3h9eavxj.s[25];
	      scope = (++cov_q3h9eavxj.b[18][0], scope) || (++cov_q3h9eavxj.b[18][1], this);
	      ++cov_q3h9eavxj.s[26];
	      (0, _each2.default)(keys, function (k) {
	        ++cov_q3h9eavxj.f[7];
	        ++cov_q3h9eavxj.s[27];

	        delete scope[k];
	      });

	      ++cov_q3h9eavxj.s[28];
	      return this;
	    }
	  }]);

	  return Base;
	}();

	/**
	 * Whitelisted parameters which can be set on construction.
	 * @type {Array}
	 */


	++cov_q3h9eavxj.s[29];
	Base.prototype._whitelistedParams = [];

	/**
	 * Default values for internal properties we will be setting.
	 * These are set on each construction so we don't leak properties
	 * into the prototype chain.
	 * @type {Object}
	 */
	++cov_q3h9eavxj.s[30];
	Base.prototype.defaults = {};

	exports.default = Base;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var cov_1dlp0xnwuj = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/util/each.js',
	      hash = '28e439b5478d4c37f51ffed371ff3d6ea0d0a3d3',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/util/each.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 18,
	          column: 2
	        },
	        end: {
	          line: 20,
	          column: 3
	        }
	      },
	      '1': {
	        start: {
	          line: 19,
	          column: 4
	        },
	        end: {
	          line: 19,
	          column: 11
	        }
	      },
	      '2': {
	        start: {
	          line: 22,
	          column: 2
	        },
	        end: {
	          line: 24,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 23,
	          column: 64
	        }
	      },
	      '4': {
	        start: {
	          line: 26,
	          column: 10
	        },
	        end: {
	          line: 26,
	          column: 11
	        }
	      },
	      '5': {
	        start: {
	          line: 27,
	          column: 12
	        },
	        end: {
	          line: 27,
	          column: 23
	        }
	      },
	      '6': {
	        start: {
	          line: 30,
	          column: 2
	        },
	        end: {
	          line: 42,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 5
	        }
	      },
	      '8': {
	        start: {
	          line: 32,
	          column: 6
	        },
	        end: {
	          line: 34,
	          column: 7
	        }
	      },
	      '9': {
	        start: {
	          line: 33,
	          column: 8
	        },
	        end: {
	          line: 33,
	          column: 23
	        }
	      },
	      '10': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 5
	        }
	      },
	      '11': {
	        start: {
	          line: 40,
	          column: 6
	        },
	        end: {
	          line: 40,
	          column: 18
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'each',
	        decl: {
	          start: {
	            line: 16,
	            column: 9
	          },
	          end: {
	            line: 16,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 16,
	            column: 24
	          },
	          end: {
	            line: 43,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 18,
	            column: 2
	          },
	          end: {
	            line: 20,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 18,
	            column: 2
	          },
	          end: {
	            line: 20,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 18,
	            column: 2
	          },
	          end: {
	            line: 20,
	            column: 3
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 22,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 30,
	            column: 2
	          },
	          end: {
	            line: 42,
	            column: 3
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 32,
	            column: 6
	          },
	          end: {
	            line: 34,
	            column: 7
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 32,
	            column: 6
	          },
	          end: {
	            line: 34,
	            column: 7
	          }
	        }, {
	          start: {
	            line: 32,
	            column: 6
	          },
	          end: {
	            line: 34,
	            column: 7
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 32,
	            column: 10
	          },
	          end: {
	            line: 32,
	            column: 53
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 32,
	            column: 10
	          },
	          end: {
	            line: 32,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 32,
	            column: 31
	          },
	          end: {
	            line: 32,
	            column: 53
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	/**
	 * # Each
	 * Apply a callback function to a list of any kind: Array, NodeList, HTMLCollection or Object.
	 *
	 * @param {Array|NodeList|HTMLCollection|Object} list
	 * @param {Function} cb
	 *
	 * @example
	 * each([], callback);
	 * each(el.children, callback);
	 * each(el.childNodes, callback);
	 * each({}, callback);
	 *
	 * @module helpers/util/each.js
	 */
	function each(list, cb) {
	  ++cov_1dlp0xnwuj.f[0];
	  ++cov_1dlp0xnwuj.s[0];


	  if (!list) {
	    ++cov_1dlp0xnwuj.b[0][0];
	    ++cov_1dlp0xnwuj.s[1];

	    return;
	  } else {
	    ++cov_1dlp0xnwuj.b[0][1];
	  }

	  ++cov_1dlp0xnwuj.s[2];
	  if (typeof cb !== 'function') {
	    ++cov_1dlp0xnwuj.b[1][0];
	    ++cov_1dlp0xnwuj.s[3];

	    throw new Error('Cannot invoke `each` without a callback!');
	  } else {
	    ++cov_1dlp0xnwuj.b[1][1];
	  }

	  var i = (++cov_1dlp0xnwuj.s[4], 0);
	  var len = (++cov_1dlp0xnwuj.s[5], list.length);

	  // Object
	  ++cov_1dlp0xnwuj.s[6];
	  if (len === undefined) {
	    ++cov_1dlp0xnwuj.b[2][0];
	    ++cov_1dlp0xnwuj.s[7];

	    for (i in list) {
	      ++cov_1dlp0xnwuj.s[8];

	      if ((++cov_1dlp0xnwuj.b[4][0], i !== 'prototype') && (++cov_1dlp0xnwuj.b[4][1], list.hasOwnProperty(i))) {
	        ++cov_1dlp0xnwuj.b[3][0];
	        ++cov_1dlp0xnwuj.s[9];

	        cb(i, list[i]);
	      } else {
	        ++cov_1dlp0xnwuj.b[3][1];
	      }
	    }
	  }
	  // Array-like
	  else {
	      ++cov_1dlp0xnwuj.b[2][1];
	      ++cov_1dlp0xnwuj.s[10];

	      for (; i < len; i++) {
	        ++cov_1dlp0xnwuj.s[11];

	        cb(list[i]);
	      }
	    }
	}

	exports.default = each;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _base = __webpack_require__(1);

	var _base2 = _interopRequireDefault(_base);

	var _addClass = __webpack_require__(4);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(7);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	var _notification = __webpack_require__(8);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_1nje7rexrt = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/components/notification.js',
	      hash = '8b4a75f1478fda1ce96504a0888782a219c2e6ab',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/components/notification.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 19,
	          column: 13
	        },
	        end: {
	          line: 19,
	          column: 21
	        }
	      },
	      '1': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 30,
	          column: 29
	        }
	      },
	      '2': {
	        start: {
	          line: 32,
	          column: 4
	        },
	        end: {
	          line: 34,
	          column: 5
	        }
	      },
	      '3': {
	        start: {
	          line: 33,
	          column: 6
	        },
	        end: {
	          line: 33,
	          column: 13
	        }
	      },
	      '4': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 17
	        }
	      },
	      '5': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 24
	        }
	      },
	      '6': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 39
	        }
	      },
	      '7': {
	        start: {
	          line: 42,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 30
	        }
	      },
	      '8': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 17
	        }
	      },
	      '9': {
	        start: {
	          line: 45,
	          column: 4
	        },
	        end: {
	          line: 47,
	          column: 5
	        }
	      },
	      '10': {
	        start: {
	          line: 46,
	          column: 6
	        },
	        end: {
	          line: 46,
	          column: 61
	        }
	      },
	      '11': {
	        start: {
	          line: 49,
	          column: 4
	        },
	        end: {
	          line: 51,
	          column: 5
	        }
	      },
	      '12': {
	        start: {
	          line: 50,
	          column: 6
	        },
	        end: {
	          line: 50,
	          column: 64
	        }
	      },
	      '13': {
	        start: {
	          line: 60,
	          column: 4
	        },
	        end: {
	          line: 60,
	          column: 50
	        }
	      },
	      '14': {
	        start: {
	          line: 69,
	          column: 4
	        },
	        end: {
	          line: 69,
	          column: 50
	        }
	      },
	      '15': {
	        start: {
	          line: 77,
	          column: 4
	        },
	        end: {
	          line: 77,
	          column: 58
	        }
	      },
	      '16': {
	        start: {
	          line: 85,
	          column: 4
	        },
	        end: {
	          line: 85,
	          column: 61
	        }
	      },
	      '17': {
	        start: {
	          line: 93,
	          column: 4
	        },
	        end: {
	          line: 93,
	          column: 25
	        }
	      },
	      '18': {
	        start: {
	          line: 100,
	          column: 4
	        },
	        end: {
	          line: 100,
	          column: 17
	        }
	      },
	      '19': {
	        start: {
	          line: 103,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 59
	        }
	      },
	      '20': {
	        start: {
	          line: 104,
	          column: 4
	        },
	        end: {
	          line: 104,
	          column: 54
	        }
	      },
	      '21': {
	        start: {
	          line: 111,
	          column: 4
	        },
	        end: {
	          line: 111,
	          column: 40
	        }
	      },
	      '22': {
	        start: {
	          line: 118,
	          column: 4
	        },
	        end: {
	          line: 118,
	          column: 43
	        }
	      },
	      '23': {
	        start: {
	          line: 127,
	          column: 0
	        },
	        end: {
	          line: 127,
	          column: 83
	        }
	      },
	      '24': {
	        start: {
	          line: 136,
	          column: 0
	        },
	        end: {
	          line: 142,
	          column: 2
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 19,
	            column: 13
	          },
	          end: {
	            line: 19,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 19,
	            column: 19
	          },
	          end: {
	            line: 19,
	            column: 21
	          }
	        }
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 28,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 28,
	            column: 31
	          },
	          end: {
	            line: 53,
	            column: 3
	          }
	        }
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 59,
	            column: 2
	          },
	          end: {
	            line: 59,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 59,
	            column: 17
	          },
	          end: {
	            line: 61,
	            column: 3
	          }
	        }
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 68,
	            column: 2
	          },
	          end: {
	            line: 68,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 68,
	            column: 32
	          },
	          end: {
	            line: 70,
	            column: 3
	          }
	        }
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 76,
	            column: 2
	          },
	          end: {
	            line: 76,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 76,
	            column: 23
	          },
	          end: {
	            line: 78,
	            column: 3
	          }
	        }
	      },
	      '5': {
	        name: '(anonymous_5)',
	        decl: {
	          start: {
	            line: 84,
	            column: 2
	          },
	          end: {
	            line: 84,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 84,
	            column: 26
	          },
	          end: {
	            line: 86,
	            column: 3
	          }
	        }
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 92,
	            column: 2
	          },
	          end: {
	            line: 92,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 92,
	            column: 14
	          },
	          end: {
	            line: 94,
	            column: 3
	          }
	        }
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 99,
	            column: 3
	          },
	          end: {
	            line: 99,
	            column: 4
	          }
	        },
	        loc: {
	          start: {
	            line: 99,
	            column: 14
	          },
	          end: {
	            line: 105,
	            column: 3
	          }
	        }
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 110,
	            column: 2
	          },
	          end: {
	            line: 110,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 110,
	            column: 10
	          },
	          end: {
	            line: 112,
	            column: 3
	          }
	        }
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 117,
	            column: 2
	          },
	          end: {
	            line: 117,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 117,
	            column: 10
	          },
	          end: {
	            line: 119,
	            column: 3
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 28,
	            column: 18
	          },
	          end: {
	            line: 28,
	            column: 29
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 28,
	            column: 27
	          },
	          end: {
	            line: 28,
	            column: 29
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 32,
	            column: 4
	          },
	          end: {
	            line: 34,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 32,
	            column: 4
	          },
	          end: {
	            line: 34,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 32,
	            column: 4
	          },
	          end: {
	            line: 34,
	            column: 5
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 45,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 45,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 45,
	            column: 4
	          },
	          end: {
	            line: 47,
	            column: 5
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 4
	          },
	          end: {
	            line: 51,
	            column: 5
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 103,
	            column: 16
	          },
	          end: {
	            line: 103,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 103,
	            column: 16
	          },
	          end: {
	            line: 103,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 103,
	            column: 37
	          },
	          end: {
	            line: 103,
	            column: 41
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0,
	      '23': 0,
	      '24': 0
	    },
	    f: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0
	    },
	    b: {
	      '0': [0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * # Notification
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * A notification element that is removed from DOM on click.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @example
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * new Notification(el, {
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   onAfterClick: handlerFunction,
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *   autoDismissTimeout: 5000
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * });
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @module components/notification.js
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

	var noop = (++cov_1nje7rexrt.s[0], function () {
	  ++cov_1nje7rexrt.f[0];
	});

	var Notification = function (_Base) {
	  _inherits(Notification, _Base);

	  /**
	   * Expand constructor.
	   * @param {Element} el
	   * @param {Object} params
	   */
	  function Notification(el) {
	    var _this;

	    var params = arguments.length <= 1 || arguments[1] === undefined ? (++cov_1nje7rexrt.b[0][0], {}) : arguments[1];

	    _classCallCheck(this, Notification);

	    ++cov_1nje7rexrt.f[1];
	    ++cov_1nje7rexrt.s[1];


	    params.elRequired = true;

	    ++cov_1nje7rexrt.s[2];
	    if (!(_this = _possibleConstructorReturn(this, (Notification.__proto__ || Object.getPrototypeOf(Notification)).call(this, el, params)), _this)) {
	      ++cov_1nje7rexrt.b[1][0];
	      ++cov_1nje7rexrt.s[3];

	      return _possibleConstructorReturn(_this);
	    } else {
	      ++cov_1nje7rexrt.b[1][1];
	    }

	    // TODO: what is the advantage of using _cacheElements to create this reference
	    // to the element?
	    ++cov_1nje7rexrt.s[4];
	    _this.el = el;

	    ++cov_1nje7rexrt.s[5];
	    _this._bindDismiss();
	    ++cov_1nje7rexrt.s[6];
	    _this._bindEventListenerCallbacks();
	    ++cov_1nje7rexrt.s[7];
	    _this._addEventListeners();
	    ++cov_1nje7rexrt.s[8];
	    _this._show();

	    ++cov_1nje7rexrt.s[9];
	    if (params.theme) {
	      ++cov_1nje7rexrt.b[2][0];
	      ++cov_1nje7rexrt.s[10];

	      (0, _addClass2.default)(_this.el, _notification.baseClassName + '--' + params.theme);
	    } else {
	      ++cov_1nje7rexrt.b[2][1];
	    }

	    ++cov_1nje7rexrt.s[11];
	    if (params.autoDismissTimeout) {
	      ++cov_1nje7rexrt.b[3][0];
	      ++cov_1nje7rexrt.s[12];

	      setTimeout(_this._dismissBound, params.autoDismissTimeout);
	    } else {
	      ++cov_1nje7rexrt.b[3][1];
	    }

	    return _possibleConstructorReturn(_this);
	  }

	  /**
	   * Because we're calling the dismiss method from insise a timeout
	   * we need to bind it to the Notification class context
	   */


	  _createClass(Notification, [{
	    key: '_bindDismiss',
	    value: function _bindDismiss() {
	      ++cov_1nje7rexrt.f[2];
	      ++cov_1nje7rexrt.s[13];

	      this._dismissBound = this._dismiss.bind(this);
	    }

	    /**
	     * Create bound versions of event listener callbacks and store them.
	     * Otherwise we can't unbind from these events later because the
	     * function signatures won't match.
	     */

	  }, {
	    key: '_bindEventListenerCallbacks',
	    value: function _bindEventListenerCallbacks() {
	      ++cov_1nje7rexrt.f[3];
	      ++cov_1nje7rexrt.s[14];

	      this._onClickBound = this._onClick.bind(this);
	    }

	    /**
	     * Add event listeners for DOM events. Auto envoced by the base class on 
	     * update and remove.
	     */

	  }, {
	    key: '_addEventListeners',
	    value: function _addEventListeners() {
	      ++cov_1nje7rexrt.f[4];
	      ++cov_1nje7rexrt.s[15];

	      this.el.addEventListener('click', this._onClickBound);
	    }

	    /**
	     * Remove event listeners for DOM events. Auto envoced by the base class on 
	     * update and remove.
	     */

	  }, {
	    key: '_removeEventListeners',
	    value: function _removeEventListeners() {
	      ++cov_1nje7rexrt.f[5];
	      ++cov_1nje7rexrt.s[16];

	      this.el.removeEventListener('click', this._onClickBound);
	    }

	    /**
	     * When we are clicked, dismiss the notification.
	     * @param {Object} e
	     */

	  }, {
	    key: '_onClick',
	    value: function _onClick(e) {
	      ++cov_1nje7rexrt.f[6];
	      ++cov_1nje7rexrt.s[17];

	      this._dismissBound();
	    }

	    /**
	     * Dismiss
	     */

	  }, {
	    key: '_dismiss',
	    value: function _dismiss() {
	      ++cov_1nje7rexrt.f[7];
	      ++cov_1nje7rexrt.s[18];

	      this._hide();
	      // delay the click callback by the length of the fade transition
	      // TODO: having the animation time in css AND js doesn't feel good
	      ++cov_1nje7rexrt.s[19];
	      setTimeout((++cov_1nje7rexrt.b[4][0], this.onAfterClick) || (++cov_1nje7rexrt.b[4][1], noop), _notification.animationTime);
	      ++cov_1nje7rexrt.s[20];
	      setTimeout(this.remove.bind(this), _notification.animationTime);
	    }

	    /**
	     * Show
	     */

	  }, {
	    key: '_show',
	    value: function _show() {
	      ++cov_1nje7rexrt.f[8];
	      ++cov_1nje7rexrt.s[21];

	      (0, _addClass2.default)(this.el, _notification.visibleClassName);
	    }

	    /**
	     * Hide
	     */

	  }, {
	    key: '_hide',
	    value: function _hide() {
	      ++cov_1nje7rexrt.f[9];
	      ++cov_1nje7rexrt.s[22];

	      (0, _removeClass2.default)(this.el, _notification.visibleClassName);
	    }
	  }]);

	  return Notification;
	}(_base2.default);

	/**
	 * Whitelisted parameters which can be set on construction.
	 * @type {Array}
	 */


	++cov_1nje7rexrt.s[23];
	Notification.prototype._whitelistedParams = ['onAfterClick', 'autoDismissTimeout'];

	/**
	 * Default values for internal properties we will be setting.
	 * These are set on each construction so we don't leak properties
	 * into the prototype chain.
	 * @type {Object}
	 */
	++cov_1nje7rexrt.s[24];
	Notification.prototype.defaults = {
	  el: null,
	  onAfterClick: null,
	  autoDismissTimeout: null,
	  _onClickBound: null,
	  _dismissBound: null
	};

		exports.default = Notification;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _trim = __webpack_require__(5);

	var _trim2 = _interopRequireDefault(_trim);

	var _hasClass = __webpack_require__(6);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_1w4pk1rw55 = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/dom/add-class.js',
	      hash = '7dcba861c8d9953065579c03ebdcc5f3f0712a95',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/dom/add-class.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 15,
	          column: 9
	        },
	        end: {
	          line: 15,
	          column: 14
	        }
	      },
	      '1': {
	        start: {
	          line: 16,
	          column: 14
	        },
	        end: {
	          line: 16,
	          column: 23
	        }
	      },
	      '2': {
	        start: {
	          line: 20,
	          column: 2
	        },
	        end: {
	          line: 25,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 21,
	          column: 4
	        },
	        end: {
	          line: 21,
	          column: 32
	        }
	      },
	      '4': {
	        start: {
	          line: 24,
	          column: 4
	        },
	        end: {
	          line: 24,
	          column: 83
	        }
	      },
	      '5': {
	        start: {
	          line: 28,
	          column: 2
	        },
	        end: {
	          line: 33,
	          column: 3
	        }
	      },
	      '6': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 31,
	          column: 5
	        }
	      },
	      '7': {
	        start: {
	          line: 30,
	          column: 6
	        },
	        end: {
	          line: 30,
	          column: 32
	        }
	      },
	      '8': {
	        start: {
	          line: 32,
	          column: 4
	        },
	        end: {
	          line: 32,
	          column: 14
	        }
	      },
	      '9': {
	        start: {
	          line: 35,
	          column: 14
	        },
	        end: {
	          line: 35,
	          column: 16
	        }
	      },
	      '10': {
	        start: {
	          line: 36,
	          column: 10
	        },
	        end: {
	          line: 36,
	          column: 11
	        }
	      },
	      '11': {
	        start: {
	          line: 37,
	          column: 10
	        },
	        end: {
	          line: 37,
	          column: 21
	        }
	      },
	      '12': {
	        start: {
	          line: 39,
	          column: 16
	        },
	        end: {
	          line: 39,
	          column: 115
	        }
	      },
	      '13': {
	        start: {
	          line: 42,
	          column: 2
	        },
	        end: {
	          line: 47,
	          column: 3
	        }
	      },
	      '14': {
	        start: {
	          line: 43,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 19
	        }
	      },
	      '15': {
	        start: {
	          line: 44,
	          column: 4
	        },
	        end: {
	          line: 46,
	          column: 5
	        }
	      },
	      '16': {
	        start: {
	          line: 45,
	          column: 6
	        },
	        end: {
	          line: 45,
	          column: 23
	        }
	      },
	      '17': {
	        start: {
	          line: 49,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 3
	        }
	      },
	      '18': {
	        start: {
	          line: 50,
	          column: 4
	        },
	        end: {
	          line: 55,
	          column: 5
	        }
	      },
	      '19': {
	        start: {
	          line: 51,
	          column: 6
	        },
	        end: {
	          line: 51,
	          column: 83
	        }
	      },
	      '20': {
	        start: {
	          line: 53,
	          column: 9
	        },
	        end: {
	          line: 55,
	          column: 5
	        }
	      },
	      '21': {
	        start: {
	          line: 54,
	          column: 6
	        },
	        end: {
	          line: 54,
	          column: 94
	        }
	      },
	      '22': {
	        start: {
	          line: 58,
	          column: 2
	        },
	        end: {
	          line: 58,
	          column: 12
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'addClass',
	        decl: {
	          start: {
	            line: 18,
	            column: 9
	          },
	          end: {
	            line: 18,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 28
	          },
	          end: {
	            line: 59,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 20,
	            column: 2
	          },
	          end: {
	            line: 25,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 20,
	            column: 2
	          },
	          end: {
	            line: 25,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 2
	          },
	          end: {
	            line: 25,
	            column: 3
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 20,
	            column: 6
	          },
	          end: {
	            line: 20,
	            column: 56
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 20,
	            column: 6
	          },
	          end: {
	            line: 20,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 20,
	            column: 32
	          },
	          end: {
	            line: 20,
	            column: 56
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 24,
	            column: 11
	          },
	          end: {
	            line: 24,
	            column: 82
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 24,
	            column: 35
	          },
	          end: {
	            line: 24,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 42
	          },
	          end: {
	            line: 24,
	            column: 82
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 2
	          },
	          end: {
	            line: 33,
	            column: 3
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 28,
	            column: 6
	          },
	          end: {
	            line: 28,
	            column: 39
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 28,
	            column: 6
	          },
	          end: {
	            line: 28,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 27
	          },
	          end: {
	            line: 28,
	            column: 39
	          }
	        }]
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 29,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 29,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 29,
	            column: 4
	          },
	          end: {
	            line: 31,
	            column: 5
	          }
	        }]
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 39,
	            column: 16
	          },
	          end: {
	            line: 39,
	            column: 115
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 39,
	            column: 51
	          },
	          end: {
	            line: 39,
	            column: 63
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 67
	          },
	          end: {
	            line: 39,
	            column: 114
	          }
	        }]
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 39,
	            column: 67
	          },
	          end: {
	            line: 39,
	            column: 114
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 39,
	            column: 85
	          },
	          end: {
	            line: 39,
	            column: 109
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 112
	          },
	          end: {
	            line: 39,
	            column: 114
	          }
	        }]
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 4
	          },
	          end: {
	            line: 46,
	            column: 5
	          }
	        }]
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 44,
	            column: 8
	          },
	          end: {
	            line: 44,
	            column: 40
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 44,
	            column: 8
	          },
	          end: {
	            line: 44,
	            column: 12
	          }
	        }, {
	          start: {
	            line: 44,
	            column: 16
	          },
	          end: {
	            line: 44,
	            column: 40
	          }
	        }]
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 49,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 49,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 49,
	            column: 2
	          },
	          end: {
	            line: 56,
	            column: 3
	          }
	        }]
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 50,
	            column: 4
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }]
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 53,
	            column: 9
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 53,
	            column: 9
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 53,
	            column: 9
	          },
	          end: {
	            line: 55,
	            column: 5
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}(); /**
	      * # Add Class
	      * Add a class on an element.
	      *
	      * @param {Element|Array} el An element or array of elements to update.
	      * @param {String} name
	      * @return {Element}
	      *
	      * @module helpers/dom/add-class.js
	      */

	var ws = (++cov_1w4pk1rw55.s[0], /\s+/);
	var cleanup = (++cov_1w4pk1rw55.s[1], /\s{2,}/g);

	function addClass(el, name) {
	  ++cov_1w4pk1rw55.f[0];
	  ++cov_1w4pk1rw55.s[2];


	  if ((++cov_1w4pk1rw55.b[1][0], arguments.length === 2) && (++cov_1w4pk1rw55.b[1][1], typeof name === 'string')) {
	    ++cov_1w4pk1rw55.b[0][0];
	    ++cov_1w4pk1rw55.s[3];

	    name = (0, _trim2.default)(name).split(ws);
	  } else {
	    ++cov_1w4pk1rw55.b[0][1];
	    ++cov_1w4pk1rw55.s[4];

	    name = name instanceof Array ? (++cov_1w4pk1rw55.b[2][0], name) : (++cov_1w4pk1rw55.b[2][1], Array.prototype.slice.call(arguments, 1));
	  }

	  // optimize for best, most common case
	  ++cov_1w4pk1rw55.s[5];
	  if ((++cov_1w4pk1rw55.b[4][0], name.length === 1) && (++cov_1w4pk1rw55.b[4][1], el.classList)) {
	    ++cov_1w4pk1rw55.b[3][0];
	    ++cov_1w4pk1rw55.s[6];

	    if (name[0]) {
	      ++cov_1w4pk1rw55.b[5][0];
	      ++cov_1w4pk1rw55.s[7];

	      el.classList.add(name[0]);
	    } else {
	      ++cov_1w4pk1rw55.b[5][1];
	    }
	    ++cov_1w4pk1rw55.s[8];
	    return el;
	  } else {
	    ++cov_1w4pk1rw55.b[3][1];
	  }

	  var toAdd = (++cov_1w4pk1rw55.s[9], []);
	  var i = (++cov_1w4pk1rw55.s[10], 0);
	  var l = (++cov_1w4pk1rw55.s[11], name.length);
	  var item = void 0;
	  var clsName = (++cov_1w4pk1rw55.s[12], typeof el.className === 'string' ? (++cov_1w4pk1rw55.b[6][0], el.className) : (++cov_1w4pk1rw55.b[6][1], el.getAttribute ? (++cov_1w4pk1rw55.b[7][0], el.getAttribute('class')) : (++cov_1w4pk1rw55.b[7][1], '')));

	  // see if we have anything to add
	  ++cov_1w4pk1rw55.s[13];
	  for (; i < l; i++) {
	    ++cov_1w4pk1rw55.s[14];

	    item = name[i];
	    ++cov_1w4pk1rw55.s[15];
	    if ((++cov_1w4pk1rw55.b[9][0], item) && (++cov_1w4pk1rw55.b[9][1], !(0, _hasClass2.default)(clsName, item))) {
	      ++cov_1w4pk1rw55.b[8][0];
	      ++cov_1w4pk1rw55.s[16];

	      toAdd.push(item);
	    } else {
	      ++cov_1w4pk1rw55.b[8][1];
	    }
	  }

	  ++cov_1w4pk1rw55.s[17];
	  if (toAdd.length) {
	    ++cov_1w4pk1rw55.b[10][0];
	    ++cov_1w4pk1rw55.s[18];

	    if (typeof el.className === 'string') {
	      ++cov_1w4pk1rw55.b[11][0];
	      ++cov_1w4pk1rw55.s[19];

	      el.className = (0, _trim2.default)((clsName + ' ' + toAdd.join(' ')).replace(cleanup, ' '));
	    } else {
	        ++cov_1w4pk1rw55.b[11][1];
	        ++cov_1w4pk1rw55.s[20];
	        if (el.setAttribute) {
	          ++cov_1w4pk1rw55.b[12][0];
	          ++cov_1w4pk1rw55.s[21];

	          el.setAttribute('class', (0, _trim2.default)((clsName + ' ' + toAdd.join(' ')).replace(cleanup, ' ')));
	        } else {
	          ++cov_1w4pk1rw55.b[12][1];
	        }
	      }
	  } else {
	    ++cov_1w4pk1rw55.b[10][1];
	  }

	  ++cov_1w4pk1rw55.s[22];
	  return el;
	}

	exports.default = addClass;

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var cov_2gk055lswp = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/util/trim.js',
	      hash = '0a4cd527ef8fb6f36127adc82063d604f9074066',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/util/trim.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 10,
	          column: 15
	        },
	        end: {
	          line: 10,
	          column: 51
	        }
	      },
	      '1': {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 33
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'trim',
	        decl: {
	          start: {
	            line: 12,
	            column: 9
	          },
	          end: {
	            line: 12,
	            column: 13
	          }
	        },
	        loc: {
	          start: {
	            line: 12,
	            column: 19
	          },
	          end: {
	            line: 14,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {},
	    s: {
	      '0': 0,
	      '1': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {}
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	/**
	 * # Trim
	 * Trim whitespace on a string.
	 *
	 * @param {String} str
	 *
	 * @module helpers/util/trim.js
	 */

	var trimRE = (++cov_2gk055lswp.s[0], /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g);

	function trim(str) {
	  ++cov_2gk055lswp.f[0];
	  ++cov_2gk055lswp.s[1];

	  return str.replace(trimRE, '');
	}

	exports.default = trim;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var cov_2fzuwwu3fs = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/dom/has-class.js',
	      hash = '6743a968dc9f91a0717a427837010e4a8dbb9d9a',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/dom/has-class.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 12,
	          column: 14
	        },
	        end: {
	          line: 12,
	          column: 149
	        }
	      },
	      '1': {
	        start: {
	          line: 13,
	          column: 2
	        },
	        end: {
	          line: 13,
	          column: 62
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'hasClass',
	        decl: {
	          start: {
	            line: 11,
	            column: 9
	          },
	          end: {
	            line: 11,
	            column: 17
	          }
	        },
	        loc: {
	          start: {
	            line: 11,
	            column: 28
	          },
	          end: {
	            line: 14,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 12,
	            column: 15
	          },
	          end: {
	            line: 12,
	            column: 120
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 12,
	            column: 40
	          },
	          end: {
	            line: 12,
	            column: 109
	          }
	        }, {
	          start: {
	            line: 12,
	            column: 112
	          },
	          end: {
	            line: 12,
	            column: 120
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 12,
	            column: 40
	          },
	          end: {
	            line: 12,
	            column: 109
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 12,
	            column: 40
	          },
	          end: {
	            line: 12,
	            column: 52
	          }
	        }, {
	          start: {
	            line: 12,
	            column: 58
	          },
	          end: {
	            line: 12,
	            column: 73
	          }
	        }, {
	          start: {
	            line: 12,
	            column: 77
	          },
	          end: {
	            line: 12,
	            column: 101
	          }
	        }, {
	          start: {
	            line: 12,
	            column: 106
	          },
	          end: {
	            line: 12,
	            column: 108
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 12,
	            column: 112
	          },
	          end: {
	            line: 12,
	            column: 120
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 12,
	            column: 112
	          },
	          end: {
	            line: 12,
	            column: 114
	          }
	        }, {
	          start: {
	            line: 12,
	            column: 118
	          },
	          end: {
	            line: 12,
	            column: 120
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0, 0, 0],
	      '2': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	/**
	 * # Has Class
	 * See if an element has a class.
	 *
	 * @param {Element|String} el
	 * @param {String} name
	 * @return {Boolean}
	 *
	 * @module helpers/dom/has-class.js
	 */
	function hasClass(el, name) {
	  ++cov_2fzuwwu3fs.f[0];

	  var cName = (++cov_2fzuwwu3fs.s[0], ((typeof el === 'undefined' ? 'undefined' : _typeof(el)) === 'object' ? (++cov_2fzuwwu3fs.b[0][0], (++cov_2fzuwwu3fs.b[1][0], el.className) || (++cov_2fzuwwu3fs.b[1][1], el.getAttribute) && (++cov_2fzuwwu3fs.b[1][2], el.getAttribute('class')) || (++cov_2fzuwwu3fs.b[1][3], '')) : (++cov_2fzuwwu3fs.b[0][1], (++cov_2fzuwwu3fs.b[2][0], el) || (++cov_2fzuwwu3fs.b[2][1], ''))).replace(/[\t\r\n\f]/g, ' '));
	  ++cov_2fzuwwu3fs.s[1];
	  return (' ' + cName + ' ').indexOf(' ' + name + ' ') !== -1;
	}

	exports.default = hasClass;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _trim = __webpack_require__(5);

	var _trim2 = _interopRequireDefault(_trim);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_2q37j9022r = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/dom/remove-class.js',
	      hash = '75c62480d1aba5449d7048e057fd54f881345969',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/dom/remove-class.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 14,
	          column: 11
	        },
	        end: {
	          line: 14,
	          column: 16
	        }
	      },
	      '1': {
	        start: {
	          line: 15,
	          column: 16
	        },
	        end: {
	          line: 15,
	          column: 25
	        }
	      },
	      '2': {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 24,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 20,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 32
	        }
	      },
	      '4': {
	        start: {
	          line: 23,
	          column: 4
	        },
	        end: {
	          line: 23,
	          column: 83
	        }
	      },
	      '5': {
	        start: {
	          line: 27,
	          column: 2
	        },
	        end: {
	          line: 30,
	          column: 3
	        }
	      },
	      '6': {
	        start: {
	          line: 28,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 46
	        }
	      },
	      '7': {
	        start: {
	          line: 28,
	          column: 17
	        },
	        end: {
	          line: 28,
	          column: 46
	        }
	      },
	      '8': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 14
	        }
	      },
	      '9': {
	        start: {
	          line: 33,
	          column: 16
	        },
	        end: {
	          line: 33,
	          column: 129
	        }
	      },
	      '10': {
	        start: {
	          line: 34,
	          column: 15
	        },
	        end: {
	          line: 34,
	          column: 22
	        }
	      },
	      '11': {
	        start: {
	          line: 37,
	          column: 2
	        },
	        end: {
	          line: 44,
	          column: 3
	        }
	      },
	      '12': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 22
	        }
	      },
	      '13': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 63
	        }
	      },
	      '14': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 43,
	          column: 5
	        }
	      },
	      '15': {
	        start: {
	          line: 41,
	          column: 6
	        },
	        end: {
	          line: 41,
	          column: 17
	        }
	      },
	      '16': {
	        start: {
	          line: 42,
	          column: 6
	        },
	        end: {
	          line: 42,
	          column: 77
	        }
	      },
	      '17': {
	        start: {
	          line: 47,
	          column: 2
	        },
	        end: {
	          line: 54,
	          column: 3
	        }
	      },
	      '18': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 53,
	          column: 5
	        }
	      },
	      '19': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 49,
	          column: 56
	        }
	      },
	      '20': {
	        start: {
	          line: 51,
	          column: 9
	        },
	        end: {
	          line: 53,
	          column: 5
	        }
	      },
	      '21': {
	        start: {
	          line: 52,
	          column: 6
	        },
	        end: {
	          line: 52,
	          column: 67
	        }
	      },
	      '22': {
	        start: {
	          line: 56,
	          column: 2
	        },
	        end: {
	          line: 56,
	          column: 12
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'removeClass',
	        decl: {
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 17,
	            column: 31
	          },
	          end: {
	            line: 57,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 24,
	            column: 3
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 19,
	            column: 6
	          },
	          end: {
	            line: 19,
	            column: 56
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 19,
	            column: 6
	          },
	          end: {
	            line: 19,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 32
	          },
	          end: {
	            line: 19,
	            column: 56
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 23,
	            column: 11
	          },
	          end: {
	            line: 23,
	            column: 82
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 23,
	            column: 35
	          },
	          end: {
	            line: 23,
	            column: 39
	          }
	        }, {
	          start: {
	            line: 23,
	            column: 42
	          },
	          end: {
	            line: 23,
	            column: 82
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 30,
	            column: 3
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 27,
	            column: 6
	          },
	          end: {
	            line: 27,
	            column: 39
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 27,
	            column: 6
	          },
	          end: {
	            line: 27,
	            column: 23
	          }
	        }, {
	          start: {
	            line: 27,
	            column: 27
	          },
	          end: {
	            line: 27,
	            column: 39
	          }
	        }]
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 28,
	            column: 4
	          },
	          end: {
	            line: 28,
	            column: 46
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 28,
	            column: 4
	          },
	          end: {
	            line: 28,
	            column: 46
	          }
	        }, {
	          start: {
	            line: 28,
	            column: 4
	          },
	          end: {
	            line: 28,
	            column: 46
	          }
	        }]
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 33,
	            column: 23
	          },
	          end: {
	            line: 33,
	            column: 122
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 33,
	            column: 58
	          },
	          end: {
	            line: 33,
	            column: 70
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 74
	          },
	          end: {
	            line: 33,
	            column: 121
	          }
	        }]
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 33,
	            column: 74
	          },
	          end: {
	            line: 33,
	            column: 121
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 33,
	            column: 92
	          },
	          end: {
	            line: 33,
	            column: 116
	          }
	        }, {
	          start: {
	            line: 33,
	            column: 119
	          },
	          end: {
	            line: 33,
	            column: 121
	          }
	        }]
	      },
	      '8': {
	        loc: {
	          start: {
	            line: 39,
	            column: 12
	          },
	          end: {
	            line: 39,
	            column: 62
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 39,
	            column: 22
	          },
	          end: {
	            line: 39,
	            column: 57
	          }
	        }, {
	          start: {
	            line: 39,
	            column: 60
	          },
	          end: {
	            line: 39,
	            column: 62
	          }
	        }]
	      },
	      '9': {
	        loc: {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 40,
	            column: 4
	          },
	          end: {
	            line: 43,
	            column: 5
	          }
	        }]
	      },
	      '10': {
	        loc: {
	          start: {
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 54,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 54,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 47,
	            column: 2
	          },
	          end: {
	            line: 54,
	            column: 3
	          }
	        }]
	      },
	      '11': {
	        loc: {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }]
	      },
	      '12': {
	        loc: {
	          start: {
	            line: 51,
	            column: 9
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 51,
	            column: 9
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 51,
	            column: 9
	          },
	          end: {
	            line: 53,
	            column: 5
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0,
	      '11': 0,
	      '12': 0,
	      '13': 0,
	      '14': 0,
	      '15': 0,
	      '16': 0,
	      '17': 0,
	      '18': 0,
	      '19': 0,
	      '20': 0,
	      '21': 0,
	      '22': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0],
	      '8': [0, 0],
	      '9': [0, 0],
	      '10': [0, 0],
	      '11': [0, 0],
	      '12': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}(); /**
	      * # Remove Class
	      * Remove a class on an element.
	      *
	      * @param {Element|Array} el An element or array of elements to update.
	      * @param {String} name
	      * @return {Element}
	      *
	      * @module helpers/dom/remove-class.js
	      */

	var ws = (++cov_2q37j9022r.s[0], /\s+/);
	var cleanup = (++cov_2q37j9022r.s[1], /\s{2,}/g);

	function removeClass(el, name) {
	  ++cov_2q37j9022r.f[0];
	  ++cov_2q37j9022r.s[2];


	  if ((++cov_2q37j9022r.b[1][0], arguments.length === 2) && (++cov_2q37j9022r.b[1][1], typeof name === 'string')) {
	    ++cov_2q37j9022r.b[0][0];
	    ++cov_2q37j9022r.s[3];

	    name = (0, _trim2.default)(name).split(ws);
	  } else {
	    ++cov_2q37j9022r.b[0][1];
	    ++cov_2q37j9022r.s[4];

	    name = name instanceof Array ? (++cov_2q37j9022r.b[2][0], name) : (++cov_2q37j9022r.b[2][1], Array.prototype.slice.call(arguments, 1));
	  }

	  // optimize for best, most common case
	  ++cov_2q37j9022r.s[5];
	  if ((++cov_2q37j9022r.b[4][0], name.length === 1) && (++cov_2q37j9022r.b[4][1], el.classList)) {
	    ++cov_2q37j9022r.b[3][0];
	    ++cov_2q37j9022r.s[6];

	    if (name[0]) {
	        ++cov_2q37j9022r.b[5][0];
	        ++cov_2q37j9022r.s[7];
	        el.classList.remove(name[0]);
	      } else {
	      ++cov_2q37j9022r.b[5][1];
	    }++cov_2q37j9022r.s[8];
	    return el;
	  } else {
	    ++cov_2q37j9022r.b[3][1];
	  }

	  // store two copies
	  var clsName = (++cov_2q37j9022r.s[9], ' ' + (typeof el.className === 'string' ? (++cov_2q37j9022r.b[6][0], el.className) : (++cov_2q37j9022r.b[6][1], el.getAttribute ? (++cov_2q37j9022r.b[7][0], el.getAttribute('class')) : (++cov_2q37j9022r.b[7][1], ''))) + ' ');
	  var result = (++cov_2q37j9022r.s[10], clsName);
	  var current = void 0;
	  var start = void 0;
	  ++cov_2q37j9022r.s[11];
	  for (var i = 0, l = name.length; i < l; i++) {
	    ++cov_2q37j9022r.s[12];

	    current = name[i];
	    ++cov_2q37j9022r.s[13];
	    start = current ? (++cov_2q37j9022r.b[8][0], result.indexOf(' ' + current + ' ')) : (++cov_2q37j9022r.b[8][1], -1);
	    ++cov_2q37j9022r.s[14];
	    if (start !== -1) {
	      ++cov_2q37j9022r.b[9][0];
	      ++cov_2q37j9022r.s[15];

	      start += 1;
	      ++cov_2q37j9022r.s[16];
	      result = result.slice(0, start) + result.slice(start + current.length);
	    } else {
	      ++cov_2q37j9022r.b[9][1];
	    }
	  }

	  // only write if modified
	  ++cov_2q37j9022r.s[17];
	  if (clsName !== result) {
	    ++cov_2q37j9022r.b[10][0];
	    ++cov_2q37j9022r.s[18];

	    if (typeof el.className === 'string') {
	      ++cov_2q37j9022r.b[11][0];
	      ++cov_2q37j9022r.s[19];

	      el.className = (0, _trim2.default)(result.replace(cleanup, ' '));
	    } else {
	        ++cov_2q37j9022r.b[11][1];
	        ++cov_2q37j9022r.s[20];
	        if (el.setAttribute) {
	          ++cov_2q37j9022r.b[12][0];
	          ++cov_2q37j9022r.s[21];

	          el.setAttribute('class', (0, _trim2.default)(result.replace(cleanup, ' ')));
	        } else {
	          ++cov_2q37j9022r.b[12][1];
	        }
	      }
	  } else {
	    ++cov_2q37j9022r.b[10][1];
	  }

	  ++cov_2q37j9022r.s[22];
	  return el;
	}

	exports.default = removeClass;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var cov_1me4d1kqtj = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/config/notification.js',
	      hash = 'e31a1cca2cdafb4e703135503b93b96e67036f90',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/config/notification.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 1,
	          column: 29
	        },
	        end: {
	          line: 1,
	          column: 54
	        }
	      },
	      '1': {
	        start: {
	          line: 2,
	          column: 32
	        },
	        end: {
	          line: 2,
	          column: 59
	        }
	      },
	      '2': {
	        start: {
	          line: 3,
	          column: 29
	        },
	        end: {
	          line: 3,
	          column: 32
	        }
	      }
	    },
	    fnMap: {},
	    branchMap: {},
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0
	    },
	    f: {},
	    b: {}
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}();

	var baseClassName = exports.baseClassName = (++cov_1me4d1kqtj.s[0], 'notification-list__item');
	var visibleClassName = exports.visibleClassName = (++cov_1me4d1kqtj.s[1], baseClassName + '--visible');
	var animationTime = exports.animationTime = (++cov_1me4d1kqtj.s[2], 300);

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _hasClass = __webpack_require__(6);

	var _hasClass2 = _interopRequireDefault(_hasClass);

	var _addClass = __webpack_require__(4);

	var _addClass2 = _interopRequireDefault(_addClass);

	var _removeClass = __webpack_require__(7);

	var _removeClass2 = _interopRequireDefault(_removeClass);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_28ym5fmns3 = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/helpers/dom/toggle-class.js',
	      hash = '4afa21b04f484cfc97beee7352d62462efdf8814',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/helpers/dom/toggle-class.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 19,
	          column: 2
	        },
	        end: {
	          line: 21,
	          column: 3
	        }
	      },
	      '1': {
	        start: {
	          line: 20,
	          column: 4
	        },
	        end: {
	          line: 20,
	          column: 11
	        }
	      },
	      '2': {
	        start: {
	          line: 24,
	          column: 2
	        },
	        end: {
	          line: 31,
	          column: 3
	        }
	      },
	      '3': {
	        start: {
	          line: 26,
	          column: 4
	        },
	        end: {
	          line: 28,
	          column: 5
	        }
	      },
	      '4': {
	        start: {
	          line: 27,
	          column: 6
	        },
	        end: {
	          line: 27,
	          column: 39
	        }
	      },
	      '5': {
	        start: {
	          line: 30,
	          column: 4
	        },
	        end: {
	          line: 30,
	          column: 11
	        }
	      },
	      '6': {
	        start: {
	          line: 34,
	          column: 2
	        },
	        end: {
	          line: 39,
	          column: 3
	        }
	      },
	      '7': {
	        start: {
	          line: 35,
	          column: 4
	        },
	        end: {
	          line: 35,
	          column: 75
	        }
	      },
	      '8': {
	        start: {
	          line: 36,
	          column: 4
	        },
	        end: {
	          line: 36,
	          column: 39
	        }
	      },
	      '9': {
	        start: {
	          line: 38,
	          column: 4
	        },
	        end: {
	          line: 38,
	          column: 51
	        }
	      },
	      '10': {
	        start: {
	          line: 41,
	          column: 2
	        },
	        end: {
	          line: 41,
	          column: 63
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: 'toggleClass',
	        decl: {
	          start: {
	            line: 17,
	            column: 9
	          },
	          end: {
	            line: 17,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 17,
	            column: 39
	          },
	          end: {
	            line: 42,
	            column: 1
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 19,
	            column: 2
	          },
	          end: {
	            line: 21,
	            column: 3
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 2
	          },
	          end: {
	            line: 31,
	            column: 3
	          }
	        }]
	      },
	      '2': {
	        loc: {
	          start: {
	            line: 24,
	            column: 6
	          },
	          end: {
	            line: 24,
	            column: 51
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 24,
	            column: 6
	          },
	          end: {
	            line: 24,
	            column: 28
	          }
	        }, {
	          start: {
	            line: 24,
	            column: 32
	          },
	          end: {
	            line: 24,
	            column: 51
	          }
	        }]
	      },
	      '3': {
	        loc: {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }, {
	          start: {
	            line: 34,
	            column: 2
	          },
	          end: {
	            line: 39,
	            column: 3
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 35,
	            column: 13
	          },
	          end: {
	            line: 35,
	            column: 74
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 35,
	            column: 44
	          },
	          end: {
	            line: 35,
	            column: 65
	          }
	        }, {
	          start: {
	            line: 35,
	            column: 68
	          },
	          end: {
	            line: 35,
	            column: 74
	          }
	        }]
	      },
	      '5': {
	        loc: {
	          start: {
	            line: 36,
	            column: 13
	          },
	          end: {
	            line: 36,
	            column: 38
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 36,
	            column: 22
	          },
	          end: {
	            line: 36,
	            column: 27
	          }
	        }, {
	          start: {
	            line: 36,
	            column: 30
	          },
	          end: {
	            line: 36,
	            column: 38
	          }
	        }]
	      },
	      '6': {
	        loc: {
	          start: {
	            line: 38,
	            column: 13
	          },
	          end: {
	            line: 38,
	            column: 50
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 38,
	            column: 34
	          },
	          end: {
	            line: 38,
	            column: 42
	          }
	        }, {
	          start: {
	            line: 38,
	            column: 45
	          },
	          end: {
	            line: 38,
	            column: 50
	          }
	        }]
	      },
	      '7': {
	        loc: {
	          start: {
	            line: 41,
	            column: 10
	          },
	          end: {
	            line: 41,
	            column: 51
	          }
	        },
	        type: 'cond-expr',
	        locations: [{
	          start: {
	            line: 41,
	            column: 29
	          },
	          end: {
	            line: 41,
	            column: 37
	          }
	        }, {
	          start: {
	            line: 41,
	            column: 40
	          },
	          end: {
	            line: 41,
	            column: 51
	          }
	        }]
	      }
	    },
	    s: {
	      '0': 0,
	      '1': 0,
	      '2': 0,
	      '3': 0,
	      '4': 0,
	      '5': 0,
	      '6': 0,
	      '7': 0,
	      '8': 0,
	      '9': 0,
	      '10': 0
	    },
	    f: {
	      '0': 0
	    },
	    b: {
	      '0': [0, 0],
	      '1': [0, 0],
	      '2': [0, 0],
	      '3': [0, 0],
	      '4': [0, 0],
	      '5': [0, 0],
	      '6': [0, 0],
	      '7': [0, 0]
	    }
	  },
	      coverage = global[gcv] || (global[gcv] = {});

	  if (coverage[path] && coverage[path].hash === hash) {
	    return coverage[path];
	  }

	  coverageData.hash = hash;
	  return coverage[path] = coverageData;
	}(); /**
	      * # Toggle Class
	      * Toggle a class on an element given a condition.
	      *
	      * @param {Element|Array} el An element or array of elements to update.
	      * @param {String} name
	      * @param {Boolean} enable
	      * @return {Element}
	      *
	      * @module  helpers/dom/toggle-class.js
	      */

	function toggleClass(el, name, enable) {
	  ++cov_28ym5fmns3.f[0];
	  ++cov_28ym5fmns3.s[0];


	  if (!el) {
	    ++cov_28ym5fmns3.b[0][0];
	    ++cov_28ym5fmns3.s[1];

	    return;
	  } else {
	    ++cov_28ym5fmns3.b[0][1];
	  }

	  // If we're passed an array, toggle the class on each.
	  ++cov_28ym5fmns3.s[2];
	  if ((++cov_28ym5fmns3.b[2][0], el instanceof NodeList) || (++cov_28ym5fmns3.b[2][1], el instanceof Array)) {
	    ++cov_28ym5fmns3.b[1][0];
	    ++cov_28ym5fmns3.s[3];


	    for (var i = 0, len = el.length; i < len; i++) {
	      ++cov_28ym5fmns3.s[4];

	      toggleClass(el[i], name, enable);
	    }

	    ++cov_28ym5fmns3.s[5];
	    return;
	  } else {
	    ++cov_28ym5fmns3.b[1][1];
	  }

	  var action = void 0;
	  ++cov_28ym5fmns3.s[6];
	  if (enable !== undefined) {
	    ++cov_28ym5fmns3.b[3][0];
	    ++cov_28ym5fmns3.s[7];

	    enable = typeof enable === 'function' ? (++cov_28ym5fmns3.b[4][0], enable.call(null, el)) : (++cov_28ym5fmns3.b[4][1], enable);
	    ++cov_28ym5fmns3.s[8];
	    action = enable ? (++cov_28ym5fmns3.b[5][0], 'add') : (++cov_28ym5fmns3.b[5][1], 'remove');
	  } else {
	    ++cov_28ym5fmns3.b[3][1];
	    ++cov_28ym5fmns3.s[9];

	    action = (0, _hasClass2.default)(el, name) ? (++cov_28ym5fmns3.b[6][0], 'remove') : (++cov_28ym5fmns3.b[6][1], 'add');
	  }

	  ++cov_28ym5fmns3.s[10];
	  return (action === 'add' ? (++cov_28ym5fmns3.b[7][0], _addClass2.default) : (++cov_28ym5fmns3.b[7][1], _removeClass2.default))(el, name);
	}

	exports.default = toggleClass;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=deathmath.js.map