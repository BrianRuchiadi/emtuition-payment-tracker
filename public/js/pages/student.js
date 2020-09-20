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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/pages/student.js":
/*!***************************************!*\
  !*** ./resources/js/pages/student.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var students = [];
var tbody;

window.onload = function (event) {
  console.log('windows is loaded');
  tbody = document.getElementById('tbody');
  fetchStudents();
};

function fetchStudents() {
  fetch('/api/students', {
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json, text-plain, */*",
      "X-Requested-With": "XMLHttpRequest",
      "X-CSRF-TOKEN": "{{ csrf_token() }}"
    },
    method: 'GET'
  }).then(function (res) {
    return res.json();
  }).then(function (data) {
    students = data.students;

    if (!students || !students.length) {
      return;
    }

    displayStudents(students, tbody);
  })["catch"](function (error) {
    console.log('error here', error);
  });
}

function displayStudents(students, tbody) {
  for (var i = 0; i < students.length; i++) {
    var row = tbody.insertRow(i);
    row.className = "read row_".concat(i);
    var cellOne = row.insertCell(0);
    var cellTwo = row.insertCell(1);
    var cellThree = row.insertCell(2);
    var cellFour = row.insertCell(3);
    var cellFive = row.insertCell(4);
    cellOne.innerHTML = i + 1;
    cellOne.className = "text-center";
    cellTwo.innerHTML = students[i].name;
    cellThree.innerHTML = students[i].level;
    cellThree.className = "text-center";
    cellFour.className = "text-center";
    var buttonEdit = document.createElement("button");
    buttonEdit.className = "button edit";
    var iconPencil = document.createElement("i");
    iconPencil.className = "fas fa-pencil-alt";
    buttonEdit.appendChild(iconPencil);
    buttonEdit.innerHTML = "Edit";
    cellFour.appendChild(buttonEdit);
    cellFive.className = "text-center";
    var buttonRemove = document.createElement("button");
    buttonRemove.innerHTML = "Remove";
    buttonRemove.className = "button danger";
    cellFive.appendChild(buttonRemove);
  }

  console.log('tbody', tbody);
}

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi ./resources/js/pages/student.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Applications/XAMPP/xamppfiles/htdocs/emtuition-payment-tracker/resources/js/pages/student.js */"./resources/js/pages/student.js");


/***/ })

/******/ });