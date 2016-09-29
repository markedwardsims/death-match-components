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

	module.exports = __webpack_require__(1);


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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=base.js.map