/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
var wrapper = document.querySelector('.wrapper');
var input = document.querySelector('.input');
var requestBtn = document.querySelector('.btn1');
var btn2 = document.querySelector('.btn2');
var updateArray = [];
btn2.addEventListener('click', function (e) {
  wrapper.innerHTML = "";
  UpdateData(e);
});
requestBtn.addEventListener('click', function (e) {
  e.preventDefault();
  sendRequest(input.value);
  input.value = '';
});

function sendRequest(city) {
  var URL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(city, "&units=metric&APPID=5d066958a60d315387d9492393935c19");
  fetch(URL, {
    method: 'GET'
  }).then(function (res) {
    if (res.ok) {
      updateArray.push(city);
      return res.json();
    } else {
      console.log(res);
      console.error(res.statusText);
    }
  }).then(function (res) {
    renderTemplate(res);
  });
}

function UpdateData(event) {
  event.preventDefault();
  updateArray.forEach(function (item) {
    var URL = "https://api.openweathermap.org/data/2.5/weather?q=".concat(item, "&units=metric&APPID=5d066958a60d315387d9492393935c19");
    fetch(URL, {
      method: 'GET'
    }).then(function (res) {
      return res.json();
    }).then(function (res) {
      reRender(res);
    });
  });
}

function clickHref() {
  wrapper.addEventListener('click', function (event) {
    if (event.target.classList.contains('href')) {
      event.preventDefault();
      event.target.closest('.href').nextElementSibling.classList.toggle('closed');
    }
  });
}

clickHref();

function reRender(data) {
  wrapper.innerHTML += "\n    <div class=\"card col-1\" style=\"width: 18rem;\">\n            <img class=\"card-img-top weather-img img-card\" src=\"https://openweathermap.org/img/w/".concat(data.weather[0].icon, ".png\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title  weather-city\"> Weather in ").concat(data.name, " </h5>\n                <p class=\"card-text weather-description\"> ").concat(data.weather[0].description, "</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> Now tempreture : <b>").concat(Math.round(data.main.temp), "&deg;</b> </li>\n                <li class=\"list-group-item\"> Min temperature : <b>").concat(Math.round(data.main.temp_min), "&deg;</b></li>\n                <li class=\"list-group-item\"> Max temperature : <b>").concat(Math.round(data.main.temp_max), "&deg;</b></li>\n            </ul>\n            <ul class=\"list-group\">\n                <a class=\"href link-info\" href=\"#\"> more info </a>\n                <div class=\"inner closed\">\n                    <li class=\"list-group-item\">Wind Speed : ").concat(Math.round(data.wind.speed), " km/h</li>\n                    <li class=\"list-group-item\">Presure : ").concat(data.main.pressure, " hPa </li>\n                    <li class=\"list-group-item\">Humidity : ").concat(data.main.humidity, " %</li>\n                </div>\n            </ul>\n        </div>");
}

function renderTemplate(data) {
  wrapper.insertAdjacentHTML('beforeend', "\n    <div class=\"card col-1\" style=\"width: 18rem;\">\n            <img class=\"card-img-top weather-img img-card\" src=\"https://openweathermap.org/img/w/".concat(data.weather[0].icon, ".png\" alt=\"Card image cap\">\n            <div class=\"card-body\">\n                <h5 class=\"card-title  weather-city\"> Weather in ").concat(data.name, " </h5>\n                <p class=\"card-text weather-description\"> ").concat(data.weather[0].description, "</p>\n            </div>\n            <ul class=\"list-group list-group-flush\">\n                <li class=\"list-group-item\"> Now tempreture : <b>").concat(Math.round(data.main.temp), "&deg;</b> </li>\n                <li class=\"list-group-item\"> Min temperature : <b>").concat(Math.round(data.main.temp_min), "&deg;</b></li>\n                <li class=\"list-group-item\"> Max temperature : <b>").concat(Math.round(data.main.temp_max), "&deg;</b></li>\n            </ul>\n            <ul class=\"list-group\">\n                <a class=\"href link-info\" href=\"#\"> more info </a>\n                <div class=\"inner closed\">\n                    <li class=\"list-group-item\">Wind Speed : ").concat(Math.round(data.wind.speed), " km/h</li>\n                    <li class=\"list-group-item\">Presure : ").concat(data.main.pressure, " hPa </li>\n                    <li class=\"list-group-item\">Humidity : ").concat(data.main.humidity, " %</li>\n                </div>\n            </ul>\n        </div>"));
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.f0fbe5ebc4c9f9b77964.js.map