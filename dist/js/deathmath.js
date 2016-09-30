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
	module.exports = __webpack_require__(4);


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

	__webpack_require__(2);

	var cov_q3h9eavxj = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/components/base.js',
	      hash = 'e1c1170ce37dcc7afae081cf8b02279dc3b68075',
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
	            column: 19
	          },
	          end: {
	            line: 85,
	            column: 20
	          }
	        },
	        loc: {
	          start: {
	            line: 85,
	            column: 29
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
	            column: 17
	          },
	          end: {
	            line: 104,
	            column: 18
	          }
	        },
	        loc: {
	          start: {
	            line: 104,
	            column: 24
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
	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_q3h9eavxj.b[0][0], {});

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
	      var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_q3h9eavxj.b[9][0], {});
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


	      $.each(params, function (k, v) {
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
	      $.each(keys, function (k) {
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

	//     Zepto.js
	//     (c) 2010-2016 Thomas Fuchs
	//     Zepto.js may be freely distributed under the MIT license.

	var Zepto = (function() {
	  var undefined, key, $, classList, emptyArray = [], concat = emptyArray.concat, filter = emptyArray.filter, slice = emptyArray.slice,
	    document = window.document,
	    elementDisplay = {}, classCache = {},
	    cssNumber = { 'column-count': 1, 'columns': 1, 'font-weight': 1, 'line-height': 1,'opacity': 1, 'z-index': 1, 'zoom': 1 },
	    fragmentRE = /^\s*<(\w+|!)[^>]*>/,
	    singleTagRE = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
	    tagExpanderRE = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,
	    rootNodeRE = /^(?:body|html)$/i,
	    capitalRE = /([A-Z])/g,

	    // special attributes that should be get/set via method calls
	    methodAttributes = ['val', 'css', 'html', 'text', 'data', 'width', 'height', 'offset'],

	    adjacencyOperators = [ 'after', 'prepend', 'before', 'append' ],
	    table = document.createElement('table'),
	    tableRow = document.createElement('tr'),
	    containers = {
	      'tr': document.createElement('tbody'),
	      'tbody': table, 'thead': table, 'tfoot': table,
	      'td': tableRow, 'th': tableRow,
	      '*': document.createElement('div')
	    },
	    readyRE = /complete|loaded|interactive/,
	    simpleSelectorRE = /^[\w-]*$/,
	    class2type = {},
	    toString = class2type.toString,
	    zepto = {},
	    camelize, uniq,
	    tempParent = document.createElement('div'),
	    propMap = {
	      'tabindex': 'tabIndex',
	      'readonly': 'readOnly',
	      'for': 'htmlFor',
	      'class': 'className',
	      'maxlength': 'maxLength',
	      'cellspacing': 'cellSpacing',
	      'cellpadding': 'cellPadding',
	      'rowspan': 'rowSpan',
	      'colspan': 'colSpan',
	      'usemap': 'useMap',
	      'frameborder': 'frameBorder',
	      'contenteditable': 'contentEditable'
	    },
	    isArray = Array.isArray ||
	      function(object){ return object instanceof Array }

	  zepto.matches = function(element, selector) {
	    if (!selector || !element || element.nodeType !== 1) return false
	    var matchesSelector = element.matches || element.webkitMatchesSelector ||
	                          element.mozMatchesSelector || element.oMatchesSelector ||
	                          element.matchesSelector
	    if (matchesSelector) return matchesSelector.call(element, selector)
	    // fall back to performing a selector:
	    var match, parent = element.parentNode, temp = !parent
	    if (temp) (parent = tempParent).appendChild(element)
	    match = ~zepto.qsa(parent, selector).indexOf(element)
	    temp && tempParent.removeChild(element)
	    return match
	  }

	  function type(obj) {
	    return obj == null ? String(obj) :
	      class2type[toString.call(obj)] || "object"
	  }

	  function isFunction(value) { return type(value) == "function" }
	  function isWindow(obj)     { return obj != null && obj == obj.window }
	  function isDocument(obj)   { return obj != null && obj.nodeType == obj.DOCUMENT_NODE }
	  function isObject(obj)     { return type(obj) == "object" }
	  function isPlainObject(obj) {
	    return isObject(obj) && !isWindow(obj) && Object.getPrototypeOf(obj) == Object.prototype
	  }

	  function likeArray(obj) {
	    var length = !!obj && 'length' in obj && obj.length,
	      type = $.type(obj)

	    return 'function' != type && !isWindow(obj) && (
	      'array' == type || length === 0 ||
	        (typeof length == 'number' && length > 0 && (length - 1) in obj)
	    )
	  }

	  function compact(array) { return filter.call(array, function(item){ return item != null }) }
	  function flatten(array) { return array.length > 0 ? $.fn.concat.apply([], array) : array }
	  camelize = function(str){ return str.replace(/-+(.)?/g, function(match, chr){ return chr ? chr.toUpperCase() : '' }) }
	  function dasherize(str) {
	    return str.replace(/::/g, '/')
	           .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
	           .replace(/([a-z\d])([A-Z])/g, '$1_$2')
	           .replace(/_/g, '-')
	           .toLowerCase()
	  }
	  uniq = function(array){ return filter.call(array, function(item, idx){ return array.indexOf(item) == idx }) }

	  function classRE(name) {
	    return name in classCache ?
	      classCache[name] : (classCache[name] = new RegExp('(^|\\s)' + name + '(\\s|$)'))
	  }

	  function maybeAddPx(name, value) {
	    return (typeof value == "number" && !cssNumber[dasherize(name)]) ? value + "px" : value
	  }

	  function defaultDisplay(nodeName) {
	    var element, display
	    if (!elementDisplay[nodeName]) {
	      element = document.createElement(nodeName)
	      document.body.appendChild(element)
	      display = getComputedStyle(element, '').getPropertyValue("display")
	      element.parentNode.removeChild(element)
	      display == "none" && (display = "block")
	      elementDisplay[nodeName] = display
	    }
	    return elementDisplay[nodeName]
	  }

	  function children(element) {
	    return 'children' in element ?
	      slice.call(element.children) :
	      $.map(element.childNodes, function(node){ if (node.nodeType == 1) return node })
	  }

	  function Z(dom, selector) {
	    var i, len = dom ? dom.length : 0
	    for (i = 0; i < len; i++) this[i] = dom[i]
	    this.length = len
	    this.selector = selector || ''
	  }

	  // `$.zepto.fragment` takes a html string and an optional tag name
	  // to generate DOM nodes from the given html string.
	  // The generated DOM nodes are returned as an array.
	  // This function can be overridden in plugins for example to make
	  // it compatible with browsers that don't support the DOM fully.
	  zepto.fragment = function(html, name, properties) {
	    var dom, nodes, container

	    // A special case optimization for a single tag
	    if (singleTagRE.test(html)) dom = $(document.createElement(RegExp.$1))

	    if (!dom) {
	      if (html.replace) html = html.replace(tagExpanderRE, "<$1></$2>")
	      if (name === undefined) name = fragmentRE.test(html) && RegExp.$1
	      if (!(name in containers)) name = '*'

	      container = containers[name]
	      container.innerHTML = '' + html
	      dom = $.each(slice.call(container.childNodes), function(){
	        container.removeChild(this)
	      })
	    }

	    if (isPlainObject(properties)) {
	      nodes = $(dom)
	      $.each(properties, function(key, value) {
	        if (methodAttributes.indexOf(key) > -1) nodes[key](value)
	        else nodes.attr(key, value)
	      })
	    }

	    return dom
	  }

	  // `$.zepto.Z` swaps out the prototype of the given `dom` array
	  // of nodes with `$.fn` and thus supplying all the Zepto functions
	  // to the array. This method can be overridden in plugins.
	  zepto.Z = function(dom, selector) {
	    return new Z(dom, selector)
	  }

	  // `$.zepto.isZ` should return `true` if the given object is a Zepto
	  // collection. This method can be overridden in plugins.
	  zepto.isZ = function(object) {
	    return object instanceof zepto.Z
	  }

	  // `$.zepto.init` is Zepto's counterpart to jQuery's `$.fn.init` and
	  // takes a CSS selector and an optional context (and handles various
	  // special cases).
	  // This method can be overridden in plugins.
	  zepto.init = function(selector, context) {
	    var dom
	    // If nothing given, return an empty Zepto collection
	    if (!selector) return zepto.Z()
	    // Optimize for string selectors
	    else if (typeof selector == 'string') {
	      selector = selector.trim()
	      // If it's a html fragment, create nodes from it
	      // Note: In both Chrome 21 and Firefox 15, DOM error 12
	      // is thrown if the fragment doesn't begin with <
	      if (selector[0] == '<' && fragmentRE.test(selector))
	        dom = zepto.fragment(selector, RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // If it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // If a function is given, call it when the DOM is ready
	    else if (isFunction(selector)) return $(document).ready(selector)
	    // If a Zepto collection is given, just return it
	    else if (zepto.isZ(selector)) return selector
	    else {
	      // normalize array if an array of nodes is given
	      if (isArray(selector)) dom = compact(selector)
	      // Wrap DOM nodes.
	      else if (isObject(selector))
	        dom = [selector], selector = null
	      // If it's a html fragment, create nodes from it
	      else if (fragmentRE.test(selector))
	        dom = zepto.fragment(selector.trim(), RegExp.$1, context), selector = null
	      // If there's a context, create a collection on that context first, and select
	      // nodes from there
	      else if (context !== undefined) return $(context).find(selector)
	      // And last but no least, if it's a CSS selector, use it to select nodes.
	      else dom = zepto.qsa(document, selector)
	    }
	    // create a new Zepto collection from the nodes found
	    return zepto.Z(dom, selector)
	  }

	  // `$` will be the base `Zepto` object. When calling this
	  // function just call `$.zepto.init, which makes the implementation
	  // details of selecting nodes and creating Zepto collections
	  // patchable in plugins.
	  $ = function(selector, context){
	    return zepto.init(selector, context)
	  }

	  function extend(target, source, deep) {
	    for (key in source)
	      if (deep && (isPlainObject(source[key]) || isArray(source[key]))) {
	        if (isPlainObject(source[key]) && !isPlainObject(target[key]))
	          target[key] = {}
	        if (isArray(source[key]) && !isArray(target[key]))
	          target[key] = []
	        extend(target[key], source[key], deep)
	      }
	      else if (source[key] !== undefined) target[key] = source[key]
	  }

	  // Copy all but undefined properties from one or more
	  // objects to the `target` object.
	  $.extend = function(target){
	    var deep, args = slice.call(arguments, 1)
	    if (typeof target == 'boolean') {
	      deep = target
	      target = args.shift()
	    }
	    args.forEach(function(arg){ extend(target, arg, deep) })
	    return target
	  }

	  // `$.zepto.qsa` is Zepto's CSS selector implementation which
	  // uses `document.querySelectorAll` and optimizes for some special cases, like `#id`.
	  // This method can be overridden in plugins.
	  zepto.qsa = function(element, selector){
	    var found,
	        maybeID = selector[0] == '#',
	        maybeClass = !maybeID && selector[0] == '.',
	        nameOnly = maybeID || maybeClass ? selector.slice(1) : selector, // Ensure that a 1 char tag name still gets checked
	        isSimple = simpleSelectorRE.test(nameOnly)
	    return (element.getElementById && isSimple && maybeID) ? // Safari DocumentFragment doesn't have getElementById
	      ( (found = element.getElementById(nameOnly)) ? [found] : [] ) :
	      (element.nodeType !== 1 && element.nodeType !== 9 && element.nodeType !== 11) ? [] :
	      slice.call(
	        isSimple && !maybeID && element.getElementsByClassName ? // DocumentFragment doesn't have getElementsByClassName/TagName
	          maybeClass ? element.getElementsByClassName(nameOnly) : // If it's simple, it could be a class
	          element.getElementsByTagName(selector) : // Or a tag
	          element.querySelectorAll(selector) // Or it's not simple, and we need to query all
	      )
	  }

	  function filtered(nodes, selector) {
	    return selector == null ? $(nodes) : $(nodes).filter(selector)
	  }

	  $.contains = document.documentElement.contains ?
	    function(parent, node) {
	      return parent !== node && parent.contains(node)
	    } :
	    function(parent, node) {
	      while (node && (node = node.parentNode))
	        if (node === parent) return true
	      return false
	    }

	  function funcArg(context, arg, idx, payload) {
	    return isFunction(arg) ? arg.call(context, idx, payload) : arg
	  }

	  function setAttribute(node, name, value) {
	    value == null ? node.removeAttribute(name) : node.setAttribute(name, value)
	  }

	  // access className property while respecting SVGAnimatedString
	  function className(node, value){
	    var klass = node.className || '',
	        svg   = klass && klass.baseVal !== undefined

	    if (value === undefined) return svg ? klass.baseVal : klass
	    svg ? (klass.baseVal = value) : (node.className = value)
	  }

	  // "true"  => true
	  // "false" => false
	  // "null"  => null
	  // "42"    => 42
	  // "42.5"  => 42.5
	  // "08"    => "08"
	  // JSON    => parse if valid
	  // String  => self
	  function deserializeValue(value) {
	    try {
	      return value ?
	        value == "true" ||
	        ( value == "false" ? false :
	          value == "null" ? null :
	          +value + "" == value ? +value :
	          /^[\[\{]/.test(value) ? $.parseJSON(value) :
	          value )
	        : value
	    } catch(e) {
	      return value
	    }
	  }

	  $.type = type
	  $.isFunction = isFunction
	  $.isWindow = isWindow
	  $.isArray = isArray
	  $.isPlainObject = isPlainObject

	  $.isEmptyObject = function(obj) {
	    var name
	    for (name in obj) return false
	    return true
	  }

	  $.isNumeric = function(val) {
	    var num = Number(val), type = typeof val
	    return val != null && type != 'boolean' &&
	      (type != 'string' || val.length) &&
	      !isNaN(num) && isFinite(num) || false
	  }

	  $.inArray = function(elem, array, i){
	    return emptyArray.indexOf.call(array, elem, i)
	  }

	  $.camelCase = camelize
	  $.trim = function(str) {
	    return str == null ? "" : String.prototype.trim.call(str)
	  }

	  // plugin compatibility
	  $.uuid = 0
	  $.support = { }
	  $.expr = { }
	  $.noop = function() {}

	  $.map = function(elements, callback){
	    var value, values = [], i, key
	    if (likeArray(elements))
	      for (i = 0; i < elements.length; i++) {
	        value = callback(elements[i], i)
	        if (value != null) values.push(value)
	      }
	    else
	      for (key in elements) {
	        value = callback(elements[key], key)
	        if (value != null) values.push(value)
	      }
	    return flatten(values)
	  }

	  $.each = function(elements, callback){
	    var i, key
	    if (likeArray(elements)) {
	      for (i = 0; i < elements.length; i++)
	        if (callback.call(elements[i], i, elements[i]) === false) return elements
	    } else {
	      for (key in elements)
	        if (callback.call(elements[key], key, elements[key]) === false) return elements
	    }

	    return elements
	  }

	  $.grep = function(elements, callback){
	    return filter.call(elements, callback)
	  }

	  if (window.JSON) $.parseJSON = JSON.parse

	  // Populate the class2type map
	  $.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(i, name) {
	    class2type[ "[object " + name + "]" ] = name.toLowerCase()
	  })

	  // Define methods that will be available on all
	  // Zepto collections
	  $.fn = {
	    constructor: zepto.Z,
	    length: 0,

	    // Because a collection acts like an array
	    // copy over these useful array functions.
	    forEach: emptyArray.forEach,
	    reduce: emptyArray.reduce,
	    push: emptyArray.push,
	    sort: emptyArray.sort,
	    splice: emptyArray.splice,
	    indexOf: emptyArray.indexOf,
	    concat: function(){
	      var i, value, args = []
	      for (i = 0; i < arguments.length; i++) {
	        value = arguments[i]
	        args[i] = zepto.isZ(value) ? value.toArray() : value
	      }
	      return concat.apply(zepto.isZ(this) ? this.toArray() : this, args)
	    },

	    // `map` and `slice` in the jQuery API work differently
	    // from their array counterparts
	    map: function(fn){
	      return $($.map(this, function(el, i){ return fn.call(el, i, el) }))
	    },
	    slice: function(){
	      return $(slice.apply(this, arguments))
	    },

	    ready: function(callback){
	      // need to check if document.body exists for IE as that browser reports
	      // document ready when it hasn't yet created the body element
	      if (readyRE.test(document.readyState) && document.body) callback($)
	      else document.addEventListener('DOMContentLoaded', function(){ callback($) }, false)
	      return this
	    },
	    get: function(idx){
	      return idx === undefined ? slice.call(this) : this[idx >= 0 ? idx : idx + this.length]
	    },
	    toArray: function(){ return this.get() },
	    size: function(){
	      return this.length
	    },
	    remove: function(){
	      return this.each(function(){
	        if (this.parentNode != null)
	          this.parentNode.removeChild(this)
	      })
	    },
	    each: function(callback){
	      emptyArray.every.call(this, function(el, idx){
	        return callback.call(el, idx, el) !== false
	      })
	      return this
	    },
	    filter: function(selector){
	      if (isFunction(selector)) return this.not(this.not(selector))
	      return $(filter.call(this, function(element){
	        return zepto.matches(element, selector)
	      }))
	    },
	    add: function(selector,context){
	      return $(uniq(this.concat($(selector,context))))
	    },
	    is: function(selector){
	      return this.length > 0 && zepto.matches(this[0], selector)
	    },
	    not: function(selector){
	      var nodes=[]
	      if (isFunction(selector) && selector.call !== undefined)
	        this.each(function(idx){
	          if (!selector.call(this,idx)) nodes.push(this)
	        })
	      else {
	        var excludes = typeof selector == 'string' ? this.filter(selector) :
	          (likeArray(selector) && isFunction(selector.item)) ? slice.call(selector) : $(selector)
	        this.forEach(function(el){
	          if (excludes.indexOf(el) < 0) nodes.push(el)
	        })
	      }
	      return $(nodes)
	    },
	    has: function(selector){
	      return this.filter(function(){
	        return isObject(selector) ?
	          $.contains(this, selector) :
	          $(this).find(selector).size()
	      })
	    },
	    eq: function(idx){
	      return idx === -1 ? this.slice(idx) : this.slice(idx, + idx + 1)
	    },
	    first: function(){
	      var el = this[0]
	      return el && !isObject(el) ? el : $(el)
	    },
	    last: function(){
	      var el = this[this.length - 1]
	      return el && !isObject(el) ? el : $(el)
	    },
	    find: function(selector){
	      var result, $this = this
	      if (!selector) result = $()
	      else if (typeof selector == 'object')
	        result = $(selector).filter(function(){
	          var node = this
	          return emptyArray.some.call($this, function(parent){
	            return $.contains(parent, node)
	          })
	        })
	      else if (this.length == 1) result = $(zepto.qsa(this[0], selector))
	      else result = this.map(function(){ return zepto.qsa(this, selector) })
	      return result
	    },
	    closest: function(selector, context){
	      var nodes = [], collection = typeof selector == 'object' && $(selector)
	      this.each(function(_, node){
	        while (node && !(collection ? collection.indexOf(node) >= 0 : zepto.matches(node, selector)))
	          node = node !== context && !isDocument(node) && node.parentNode
	        if (node && nodes.indexOf(node) < 0) nodes.push(node)
	      })
	      return $(nodes)
	    },
	    parents: function(selector){
	      var ancestors = [], nodes = this
	      while (nodes.length > 0)
	        nodes = $.map(nodes, function(node){
	          if ((node = node.parentNode) && !isDocument(node) && ancestors.indexOf(node) < 0) {
	            ancestors.push(node)
	            return node
	          }
	        })
	      return filtered(ancestors, selector)
	    },
	    parent: function(selector){
	      return filtered(uniq(this.pluck('parentNode')), selector)
	    },
	    children: function(selector){
	      return filtered(this.map(function(){ return children(this) }), selector)
	    },
	    contents: function() {
	      return this.map(function() { return this.contentDocument || slice.call(this.childNodes) })
	    },
	    siblings: function(selector){
	      return filtered(this.map(function(i, el){
	        return filter.call(children(el.parentNode), function(child){ return child!==el })
	      }), selector)
	    },
	    empty: function(){
	      return this.each(function(){ this.innerHTML = '' })
	    },
	    // `pluck` is borrowed from Prototype.js
	    pluck: function(property){
	      return $.map(this, function(el){ return el[property] })
	    },
	    show: function(){
	      return this.each(function(){
	        this.style.display == "none" && (this.style.display = '')
	        if (getComputedStyle(this, '').getPropertyValue("display") == "none")
	          this.style.display = defaultDisplay(this.nodeName)
	      })
	    },
	    replaceWith: function(newContent){
	      return this.before(newContent).remove()
	    },
	    wrap: function(structure){
	      var func = isFunction(structure)
	      if (this[0] && !func)
	        var dom   = $(structure).get(0),
	            clone = dom.parentNode || this.length > 1

	      return this.each(function(index){
	        $(this).wrapAll(
	          func ? structure.call(this, index) :
	            clone ? dom.cloneNode(true) : dom
	        )
	      })
	    },
	    wrapAll: function(structure){
	      if (this[0]) {
	        $(this[0]).before(structure = $(structure))
	        var children
	        // drill down to the inmost element
	        while ((children = structure.children()).length) structure = children.first()
	        $(structure).append(this)
	      }
	      return this
	    },
	    wrapInner: function(structure){
	      var func = isFunction(structure)
	      return this.each(function(index){
	        var self = $(this), contents = self.contents(),
	            dom  = func ? structure.call(this, index) : structure
	        contents.length ? contents.wrapAll(dom) : self.append(dom)
	      })
	    },
	    unwrap: function(){
	      this.parent().each(function(){
	        $(this).replaceWith($(this).children())
	      })
	      return this
	    },
	    clone: function(){
	      return this.map(function(){ return this.cloneNode(true) })
	    },
	    hide: function(){
	      return this.css("display", "none")
	    },
	    toggle: function(setting){
	      return this.each(function(){
	        var el = $(this)
	        ;(setting === undefined ? el.css("display") == "none" : setting) ? el.show() : el.hide()
	      })
	    },
	    prev: function(selector){ return $(this.pluck('previousElementSibling')).filter(selector || '*') },
	    next: function(selector){ return $(this.pluck('nextElementSibling')).filter(selector || '*') },
	    html: function(html){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var originHtml = this.innerHTML
	          $(this).empty().append( funcArg(this, html, idx, originHtml) )
	        }) :
	        (0 in this ? this[0].innerHTML : null)
	    },
	    text: function(text){
	      return 0 in arguments ?
	        this.each(function(idx){
	          var newText = funcArg(this, text, idx, this.textContent)
	          this.textContent = newText == null ? '' : ''+newText
	        }) :
	        (0 in this ? this.pluck('textContent').join("") : null)
	    },
	    attr: function(name, value){
	      var result
	      return (typeof name == 'string' && !(1 in arguments)) ?
	        (0 in this && this[0].nodeType == 1 && (result = this[0].getAttribute(name)) != null ? result : undefined) :
	        this.each(function(idx){
	          if (this.nodeType !== 1) return
	          if (isObject(name)) for (key in name) setAttribute(this, key, name[key])
	          else setAttribute(this, name, funcArg(this, value, idx, this.getAttribute(name)))
	        })
	    },
	    removeAttr: function(name){
	      return this.each(function(){ this.nodeType === 1 && name.split(' ').forEach(function(attribute){
	        setAttribute(this, attribute)
	      }, this)})
	    },
	    prop: function(name, value){
	      name = propMap[name] || name
	      return (1 in arguments) ?
	        this.each(function(idx){
	          this[name] = funcArg(this, value, idx, this[name])
	        }) :
	        (this[0] && this[0][name])
	    },
	    removeProp: function(name){
	      name = propMap[name] || name
	      return this.each(function(){ delete this[name] })
	    },
	    data: function(name, value){
	      var attrName = 'data-' + name.replace(capitalRE, '-$1').toLowerCase()

	      var data = (1 in arguments) ?
	        this.attr(attrName, value) :
	        this.attr(attrName)

	      return data !== null ? deserializeValue(data) : undefined
	    },
	    val: function(value){
	      if (0 in arguments) {
	        if (value == null) value = ""
	        return this.each(function(idx){
	          this.value = funcArg(this, value, idx, this.value)
	        })
	      } else {
	        return this[0] && (this[0].multiple ?
	           $(this[0]).find('option').filter(function(){ return this.selected }).pluck('value') :
	           this[0].value)
	      }
	    },
	    offset: function(coordinates){
	      if (coordinates) return this.each(function(index){
	        var $this = $(this),
	            coords = funcArg(this, coordinates, index, $this.offset()),
	            parentOffset = $this.offsetParent().offset(),
	            props = {
	              top:  coords.top  - parentOffset.top,
	              left: coords.left - parentOffset.left
	            }

	        if ($this.css('position') == 'static') props['position'] = 'relative'
	        $this.css(props)
	      })
	      if (!this.length) return null
	      if (document.documentElement !== this[0] && !$.contains(document.documentElement, this[0]))
	        return {top: 0, left: 0}
	      var obj = this[0].getBoundingClientRect()
	      return {
	        left: obj.left + window.pageXOffset,
	        top: obj.top + window.pageYOffset,
	        width: Math.round(obj.width),
	        height: Math.round(obj.height)
	      }
	    },
	    css: function(property, value){
	      if (arguments.length < 2) {
	        var element = this[0]
	        if (typeof property == 'string') {
	          if (!element) return
	          return element.style[camelize(property)] || getComputedStyle(element, '').getPropertyValue(property)
	        } else if (isArray(property)) {
	          if (!element) return
	          var props = {}
	          var computedStyle = getComputedStyle(element, '')
	          $.each(property, function(_, prop){
	            props[prop] = (element.style[camelize(prop)] || computedStyle.getPropertyValue(prop))
	          })
	          return props
	        }
	      }

	      var css = ''
	      if (type(property) == 'string') {
	        if (!value && value !== 0)
	          this.each(function(){ this.style.removeProperty(dasherize(property)) })
	        else
	          css = dasherize(property) + ":" + maybeAddPx(property, value)
	      } else {
	        for (key in property)
	          if (!property[key] && property[key] !== 0)
	            this.each(function(){ this.style.removeProperty(dasherize(key)) })
	          else
	            css += dasherize(key) + ':' + maybeAddPx(key, property[key]) + ';'
	      }

	      return this.each(function(){ this.style.cssText += ';' + css })
	    },
	    index: function(element){
	      return element ? this.indexOf($(element)[0]) : this.parent().children().indexOf(this[0])
	    },
	    hasClass: function(name){
	      if (!name) return false
	      return emptyArray.some.call(this, function(el){
	        return this.test(className(el))
	      }, classRE(name))
	    },
	    addClass: function(name){
	      if (!name) return this
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        classList = []
	        var cls = className(this), newName = funcArg(this, name, idx, cls)
	        newName.split(/\s+/g).forEach(function(klass){
	          if (!$(this).hasClass(klass)) classList.push(klass)
	        }, this)
	        classList.length && className(this, cls + (cls ? " " : "") + classList.join(" "))
	      })
	    },
	    removeClass: function(name){
	      return this.each(function(idx){
	        if (!('className' in this)) return
	        if (name === undefined) return className(this, '')
	        classList = className(this)
	        funcArg(this, name, idx, classList).split(/\s+/g).forEach(function(klass){
	          classList = classList.replace(classRE(klass), " ")
	        })
	        className(this, classList.trim())
	      })
	    },
	    toggleClass: function(name, when){
	      if (!name) return this
	      return this.each(function(idx){
	        var $this = $(this), names = funcArg(this, name, idx, className(this))
	        names.split(/\s+/g).forEach(function(klass){
	          (when === undefined ? !$this.hasClass(klass) : when) ?
	            $this.addClass(klass) : $this.removeClass(klass)
	        })
	      })
	    },
	    scrollTop: function(value){
	      if (!this.length) return
	      var hasScrollTop = 'scrollTop' in this[0]
	      if (value === undefined) return hasScrollTop ? this[0].scrollTop : this[0].pageYOffset
	      return this.each(hasScrollTop ?
	        function(){ this.scrollTop = value } :
	        function(){ this.scrollTo(this.scrollX, value) })
	    },
	    scrollLeft: function(value){
	      if (!this.length) return
	      var hasScrollLeft = 'scrollLeft' in this[0]
	      if (value === undefined) return hasScrollLeft ? this[0].scrollLeft : this[0].pageXOffset
	      return this.each(hasScrollLeft ?
	        function(){ this.scrollLeft = value } :
	        function(){ this.scrollTo(value, this.scrollY) })
	    },
	    position: function() {
	      if (!this.length) return

	      var elem = this[0],
	        // Get *real* offsetParent
	        offsetParent = this.offsetParent(),
	        // Get correct offsets
	        offset       = this.offset(),
	        parentOffset = rootNodeRE.test(offsetParent[0].nodeName) ? { top: 0, left: 0 } : offsetParent.offset()

	      // Subtract element margins
	      // note: when an element has margin: auto the offsetLeft and marginLeft
	      // are the same in Safari causing offset.left to incorrectly be 0
	      offset.top  -= parseFloat( $(elem).css('margin-top') ) || 0
	      offset.left -= parseFloat( $(elem).css('margin-left') ) || 0

	      // Add offsetParent borders
	      parentOffset.top  += parseFloat( $(offsetParent[0]).css('border-top-width') ) || 0
	      parentOffset.left += parseFloat( $(offsetParent[0]).css('border-left-width') ) || 0

	      // Subtract the two offsets
	      return {
	        top:  offset.top  - parentOffset.top,
	        left: offset.left - parentOffset.left
	      }
	    },
	    offsetParent: function() {
	      return this.map(function(){
	        var parent = this.offsetParent || document.body
	        while (parent && !rootNodeRE.test(parent.nodeName) && $(parent).css("position") == "static")
	          parent = parent.offsetParent
	        return parent
	      })
	    }
	  }

	  // for now
	  $.fn.detach = $.fn.remove

	  // Generate the `width` and `height` functions
	  ;['width', 'height'].forEach(function(dimension){
	    var dimensionProperty =
	      dimension.replace(/./, function(m){ return m[0].toUpperCase() })

	    $.fn[dimension] = function(value){
	      var offset, el = this[0]
	      if (value === undefined) return isWindow(el) ? el['inner' + dimensionProperty] :
	        isDocument(el) ? el.documentElement['scroll' + dimensionProperty] :
	        (offset = this.offset()) && offset[dimension]
	      else return this.each(function(idx){
	        el = $(this)
	        el.css(dimension, funcArg(this, value, idx, el[dimension]()))
	      })
	    }
	  })

	  function traverseNode(node, fun) {
	    fun(node)
	    for (var i = 0, len = node.childNodes.length; i < len; i++)
	      traverseNode(node.childNodes[i], fun)
	  }

	  // Generate the `after`, `prepend`, `before`, `append`,
	  // `insertAfter`, `insertBefore`, `appendTo`, and `prependTo` methods.
	  adjacencyOperators.forEach(function(operator, operatorIndex) {
	    var inside = operatorIndex % 2 //=> prepend, append

	    $.fn[operator] = function(){
	      // arguments can be nodes, arrays of nodes, Zepto objects and HTML strings
	      var argType, nodes = $.map(arguments, function(arg) {
	            var arr = []
	            argType = type(arg)
	            if (argType == "array") {
	              arg.forEach(function(el) {
	                if (el.nodeType !== undefined) return arr.push(el)
	                else if ($.zepto.isZ(el)) return arr = arr.concat(el.get())
	                arr = arr.concat(zepto.fragment(el))
	              })
	              return arr
	            }
	            return argType == "object" || arg == null ?
	              arg : zepto.fragment(arg)
	          }),
	          parent, copyByClone = this.length > 1
	      if (nodes.length < 1) return this

	      return this.each(function(_, target){
	        parent = inside ? target : target.parentNode

	        // convert all methods to a "before" operation
	        target = operatorIndex == 0 ? target.nextSibling :
	                 operatorIndex == 1 ? target.firstChild :
	                 operatorIndex == 2 ? target :
	                 null

	        var parentInDocument = $.contains(document.documentElement, parent)

	        nodes.forEach(function(node){
	          if (copyByClone) node = node.cloneNode(true)
	          else if (!parent) return $(node).remove()

	          parent.insertBefore(node, target)
	          if (parentInDocument) traverseNode(node, function(el){
	            if (el.nodeName != null && el.nodeName.toUpperCase() === 'SCRIPT' &&
	               (!el.type || el.type === 'text/javascript') && !el.src){
	              var target = el.ownerDocument ? el.ownerDocument.defaultView : window
	              target['eval'].call(target, el.innerHTML)
	            }
	          })
	        })
	      })
	    }

	    // after    => insertAfter
	    // prepend  => prependTo
	    // before   => insertBefore
	    // append   => appendTo
	    $.fn[inside ? operator+'To' : 'insert'+(operatorIndex ? 'Before' : 'After')] = function(html){
	      $(html)[operator](this)
	      return this
	    }
	  })

	  zepto.Z.prototype = Z.prototype = $.fn

	  // Export internal API functions in the `$.zepto` namespace
	  zepto.uniq = uniq
	  zepto.deserializeValue = deserializeValue
	  $.zepto = zepto

	  return $
	})()

	// If `$` is not yet defined, point it to `Zepto`
	window.Zepto = Zepto
	window.$ === undefined && (window.$ = Zepto)


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

	__webpack_require__(2);

	var _notification = __webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var cov_1nje7rexrt = function () {
	  var path = '/Users/marksims/_clients/death-match/components/js/components/notification.js',
	      hash = '4ef52d7f737afd6a45ff93cf3a033fed47ea424b',
	      global = new Function('return this')(),
	      gcv = '__coverage__',
	      coverageData = {
	    path: '/Users/marksims/_clients/death-match/components/js/components/notification.js',
	    statementMap: {
	      '0': {
	        start: {
	          line: 18,
	          column: 13
	        },
	        end: {
	          line: 18,
	          column: 21
	        }
	      },
	      '1': {
	        start: {
	          line: 29,
	          column: 4
	        },
	        end: {
	          line: 29,
	          column: 29
	        }
	      },
	      '2': {
	        start: {
	          line: 31,
	          column: 4
	        },
	        end: {
	          line: 33,
	          column: 5
	        }
	      },
	      '3': {
	        start: {
	          line: 32,
	          column: 6
	        },
	        end: {
	          line: 32,
	          column: 13
	        }
	      },
	      '4': {
	        start: {
	          line: 37,
	          column: 4
	        },
	        end: {
	          line: 37,
	          column: 17
	        }
	      },
	      '5': {
	        start: {
	          line: 39,
	          column: 4
	        },
	        end: {
	          line: 39,
	          column: 24
	        }
	      },
	      '6': {
	        start: {
	          line: 40,
	          column: 4
	        },
	        end: {
	          line: 40,
	          column: 39
	        }
	      },
	      '7': {
	        start: {
	          line: 41,
	          column: 4
	        },
	        end: {
	          line: 41,
	          column: 30
	        }
	      },
	      '8': {
	        start: {
	          line: 42,
	          column: 4
	        },
	        end: {
	          line: 42,
	          column: 17
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
	          column: 63
	        }
	      },
	      '11': {
	        start: {
	          line: 48,
	          column: 4
	        },
	        end: {
	          line: 50,
	          column: 5
	        }
	      },
	      '12': {
	        start: {
	          line: 49,
	          column: 6
	        },
	        end: {
	          line: 49,
	          column: 64
	        }
	      },
	      '13': {
	        start: {
	          line: 59,
	          column: 4
	        },
	        end: {
	          line: 59,
	          column: 50
	        }
	      },
	      '14': {
	        start: {
	          line: 68,
	          column: 4
	        },
	        end: {
	          line: 68,
	          column: 50
	        }
	      },
	      '15': {
	        start: {
	          line: 76,
	          column: 4
	        },
	        end: {
	          line: 76,
	          column: 58
	        }
	      },
	      '16': {
	        start: {
	          line: 84,
	          column: 4
	        },
	        end: {
	          line: 84,
	          column: 61
	        }
	      },
	      '17': {
	        start: {
	          line: 92,
	          column: 4
	        },
	        end: {
	          line: 92,
	          column: 25
	        }
	      },
	      '18': {
	        start: {
	          line: 99,
	          column: 4
	        },
	        end: {
	          line: 99,
	          column: 17
	        }
	      },
	      '19': {
	        start: {
	          line: 102,
	          column: 4
	        },
	        end: {
	          line: 102,
	          column: 59
	        }
	      },
	      '20': {
	        start: {
	          line: 103,
	          column: 4
	        },
	        end: {
	          line: 103,
	          column: 54
	        }
	      },
	      '21': {
	        start: {
	          line: 110,
	          column: 4
	        },
	        end: {
	          line: 110,
	          column: 42
	        }
	      },
	      '22': {
	        start: {
	          line: 117,
	          column: 4
	        },
	        end: {
	          line: 117,
	          column: 45
	        }
	      },
	      '23': {
	        start: {
	          line: 126,
	          column: 0
	        },
	        end: {
	          line: 126,
	          column: 83
	        }
	      },
	      '24': {
	        start: {
	          line: 135,
	          column: 0
	        },
	        end: {
	          line: 141,
	          column: 2
	        }
	      }
	    },
	    fnMap: {
	      '0': {
	        name: '(anonymous_0)',
	        decl: {
	          start: {
	            line: 18,
	            column: 13
	          },
	          end: {
	            line: 18,
	            column: 14
	          }
	        },
	        loc: {
	          start: {
	            line: 18,
	            column: 19
	          },
	          end: {
	            line: 18,
	            column: 21
	          }
	        }
	      },
	      '1': {
	        name: '(anonymous_1)',
	        decl: {
	          start: {
	            line: 27,
	            column: 2
	          },
	          end: {
	            line: 27,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 27,
	            column: 31
	          },
	          end: {
	            line: 52,
	            column: 3
	          }
	        }
	      },
	      '2': {
	        name: '(anonymous_2)',
	        decl: {
	          start: {
	            line: 58,
	            column: 2
	          },
	          end: {
	            line: 58,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 58,
	            column: 17
	          },
	          end: {
	            line: 60,
	            column: 3
	          }
	        }
	      },
	      '3': {
	        name: '(anonymous_3)',
	        decl: {
	          start: {
	            line: 67,
	            column: 2
	          },
	          end: {
	            line: 67,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 67,
	            column: 32
	          },
	          end: {
	            line: 69,
	            column: 3
	          }
	        }
	      },
	      '4': {
	        name: '(anonymous_4)',
	        decl: {
	          start: {
	            line: 75,
	            column: 2
	          },
	          end: {
	            line: 75,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 75,
	            column: 23
	          },
	          end: {
	            line: 77,
	            column: 3
	          }
	        }
	      },
	      '5': {
	        name: '(anonymous_5)',
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
	            column: 26
	          },
	          end: {
	            line: 85,
	            column: 3
	          }
	        }
	      },
	      '6': {
	        name: '(anonymous_6)',
	        decl: {
	          start: {
	            line: 91,
	            column: 2
	          },
	          end: {
	            line: 91,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 91,
	            column: 14
	          },
	          end: {
	            line: 93,
	            column: 3
	          }
	        }
	      },
	      '7': {
	        name: '(anonymous_7)',
	        decl: {
	          start: {
	            line: 98,
	            column: 3
	          },
	          end: {
	            line: 98,
	            column: 4
	          }
	        },
	        loc: {
	          start: {
	            line: 98,
	            column: 14
	          },
	          end: {
	            line: 104,
	            column: 3
	          }
	        }
	      },
	      '8': {
	        name: '(anonymous_8)',
	        decl: {
	          start: {
	            line: 109,
	            column: 2
	          },
	          end: {
	            line: 109,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 109,
	            column: 10
	          },
	          end: {
	            line: 111,
	            column: 3
	          }
	        }
	      },
	      '9': {
	        name: '(anonymous_9)',
	        decl: {
	          start: {
	            line: 116,
	            column: 2
	          },
	          end: {
	            line: 116,
	            column: 3
	          }
	        },
	        loc: {
	          start: {
	            line: 116,
	            column: 10
	          },
	          end: {
	            line: 118,
	            column: 3
	          }
	        }
	      }
	    },
	    branchMap: {
	      '0': {
	        loc: {
	          start: {
	            line: 27,
	            column: 18
	          },
	          end: {
	            line: 27,
	            column: 29
	          }
	        },
	        type: 'default-arg',
	        locations: [{
	          start: {
	            line: 27,
	            column: 27
	          },
	          end: {
	            line: 27,
	            column: 29
	          }
	        }]
	      },
	      '1': {
	        loc: {
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 33,
	            column: 5
	          }
	        },
	        type: 'if',
	        locations: [{
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 33,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 31,
	            column: 4
	          },
	          end: {
	            line: 33,
	            column: 5
	          }
	        }]
	      },
	      '2': {
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
	      '3': {
	        loc: {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 50,
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
	            line: 50,
	            column: 5
	          }
	        }, {
	          start: {
	            line: 48,
	            column: 4
	          },
	          end: {
	            line: 50,
	            column: 5
	          }
	        }]
	      },
	      '4': {
	        loc: {
	          start: {
	            line: 102,
	            column: 16
	          },
	          end: {
	            line: 102,
	            column: 41
	          }
	        },
	        type: 'binary-expr',
	        locations: [{
	          start: {
	            line: 102,
	            column: 16
	          },
	          end: {
	            line: 102,
	            column: 33
	          }
	        }, {
	          start: {
	            line: 102,
	            column: 37
	          },
	          end: {
	            line: 102,
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

	    var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : (++cov_1nje7rexrt.b[0][0], {});

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

	      $(_this.el).addClass(_notification.baseClassName + '--' + params.theme);
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

	      $(this.el).addClass(_notification.visibleClassName);
	    }

	    /**
	     * Hide
	     */

	  }, {
	    key: '_hide',
	    value: function _hide() {
	      ++cov_1nje7rexrt.f[9];
	      ++cov_1nje7rexrt.s[22];

	      $(this.el).removeClass(_notification.visibleClassName);
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

/***/ }
/******/ ])
});
;
//# sourceMappingURL=deathmath.js.map