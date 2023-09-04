/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/headerImg.js":
/*!**************************!*\
  !*** ./src/headerImg.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const headerImg = document.querySelector(".header-img");

const headerImages = [
    "images/cross-roads.jpg",
    "images/trees.jpg",
    "images/bridge.jpg",
    "images/road.jpg",
];

const randomIndex = Math.floor(Math.random() * headerImages.length);

headerImg.src = headerImages[randomIndex];

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (headerImg);


/***/ }),

/***/ "./src/projectData.js":
/*!****************************!*\
  !*** ./src/projectData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   projectData: () => (/* binding */ projectData)
/* harmony export */ });
const projectData = [
    {
        name: "Events",
        alt: "A screenshot of the Events page.",
        img: "images/events.png",
        description:
            "Events is a webpage that allows users to view, create, and delete group rides and runs. It allows users to see all events or sort events by category. ",
        techStack: "HTML, CSS, JavaScript",
        live: "https://kk17203.github.io/events/",
        code: "https://github.com/kk17203/events",
    },
    {
        name: "Weather App",
        alt: "A screenshot of the Weather App page.",
        img: "images/weather-app.png",
        description:
            "This app shows the current weather of a city. It uses the OpenWeather API to fetch the weather data. The app changes the background image based on the current weather in the area.",
        techStack: "HTML, CSS, JavaScript, OpenWeather API",
        live: "https://kk17203.github.io/weather-page/",
        code: "https://github.com/kk17203/weather-page",
    },
    {
        name: "Tic-Tac-Toe Game",
        alt: "A screenshot of the Tic-Tac-Toe game.",
        img: "images/tic-tac-toe.png",
        description:
            "As the name suggests, this is a Tic-Tac-Toe game. It was built using HTML, CSS, and JavaScript. It was built as part of The Odin Project's curriculum.",
        techStack: "HTML, CSS, JavaScript",
        live: "https://kk17203.github.io/tic-tac-toe/",
        code: "https://github.com/kk17203/tic-tac-toe",
    },
];


/***/ }),

/***/ "./src/projectRender.js":
/*!******************************!*\
  !*** ./src/projectRender.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectData */ "./src/projectData.js");


function renderProjects(num) {
    for (let i = 0; i < num; i++) {
        const project = _projectData__WEBPACK_IMPORTED_MODULE_0__.projectData[i];
        const projectCard = document.createElement("div");
        projectCard.classList.add("project-card");
        projectCard.setAttribute("data-index", i);
        projectCard.innerHTML = `
        <div class="project-img-container">
            <img src="${project.img}" alt="${project.alt}">
        </div>
        <div class="project-info">
            <h2 class="project-name">${project.name}</h2>
            <p class="project-tech-stack"><span>Tech Stack: </span>${project.techStack}</p>
            <p class="project-description">${project.description}</p>
            <div class="project-links">
                <a href="${project.live}" target="_blank" rel="noopener noreferrer">Live</a>
                <a href="${project.code}" target="_blank" rel="noopener noreferrer">Code</a>
            </div>
        </div>
        `;
        document.querySelector(".projects").appendChild(projectCard);
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderProjects);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _headerImg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerImg */ "./src/headerImg.js");
/* harmony import */ var _projectData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectData */ "./src/projectData.js");
/* harmony import */ var _projectRender__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectRender */ "./src/projectRender.js");




console.log(_projectData__WEBPACK_IMPORTED_MODULE_1__.projectData[0].description);
console.log(_projectData__WEBPACK_IMPORTED_MODULE_1__.projectData[0].alt);

(0,_projectRender__WEBPACK_IMPORTED_MODULE_2__["default"])(_projectData__WEBPACK_IMPORTED_MODULE_1__.projectData.length);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JsQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDL0I0Qzs7QUFFNUM7QUFDQSxvQkFBb0IsU0FBUztBQUM3Qix3QkFBd0IscURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZLFNBQVMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQscUVBQXFFLGtCQUFrQjtBQUN2Riw2Q0FBNkMsb0JBQW9CO0FBQ2pFO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzFCOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ1E7QUFDQzs7QUFFN0MsWUFBWSxxREFBVztBQUN2QixZQUFZLHFEQUFXOztBQUV2QiwwREFBYyxDQUFDLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2hlYWRlckltZy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3Byb2plY3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWltZ1wiKTtcblxuY29uc3QgaGVhZGVySW1hZ2VzID0gW1xuICAgIFwiaW1hZ2VzL2Nyb3NzLXJvYWRzLmpwZ1wiLFxuICAgIFwiaW1hZ2VzL3RyZWVzLmpwZ1wiLFxuICAgIFwiaW1hZ2VzL2JyaWRnZS5qcGdcIixcbiAgICBcImltYWdlcy9yb2FkLmpwZ1wiLFxuXTtcblxuY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWFkZXJJbWFnZXMubGVuZ3RoKTtcblxuaGVhZGVySW1nLnNyYyA9IGhlYWRlckltYWdlc1tyYW5kb21JbmRleF07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckltZztcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiRXZlbnRzXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIEV2ZW50cyBwYWdlLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL2V2ZW50cy5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkV2ZW50cyBpcyBhIHdlYnBhZ2UgdGhhdCBhbGxvd3MgdXNlcnMgdG8gdmlldywgY3JlYXRlLCBhbmQgZGVsZXRlIGdyb3VwIHJpZGVzIGFuZCBydW5zLiBJdCBhbGxvd3MgdXNlcnMgdG8gc2VlIGFsbCBldmVudHMgb3Igc29ydCBldmVudHMgYnkgY2F0ZWdvcnkuIFwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9razE3MjAzLmdpdGh1Yi5pby9ldmVudHMvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvZXZlbnRzXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiV2VhdGhlciBBcHBcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgV2VhdGhlciBBcHAgcGFnZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy93ZWF0aGVyLWFwcC5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlRoaXMgYXBwIHNob3dzIHRoZSBjdXJyZW50IHdlYXRoZXIgb2YgYSBjaXR5LiBJdCB1c2VzIHRoZSBPcGVuV2VhdGhlciBBUEkgdG8gZmV0Y2ggdGhlIHdlYXRoZXIgZGF0YS4gVGhlIGFwcCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdlYXRoZXIgaW4gdGhlIGFyZWEuXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIEphdmFTY3JpcHQsIE9wZW5XZWF0aGVyIEFQSVwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vd2VhdGhlci1wYWdlL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3dlYXRoZXItcGFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRpYy1UYWMtVG9lIEdhbWVcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgVGljLVRhYy1Ub2UgZ2FtZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy90aWMtdGFjLXRvZS5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFzIHRoZSBuYW1lIHN1Z2dlc3RzLCB0aGlzIGlzIGEgVGljLVRhYy1Ub2UgZ2FtZS4gSXQgd2FzIGJ1aWx0IHVzaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQuIEl0IHdhcyBidWlsdCBhcyBwYXJ0IG9mIFRoZSBPZGluIFByb2plY3QncyBjdXJyaWN1bHVtLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9razE3MjAzLmdpdGh1Yi5pby90aWMtdGFjLXRvZS9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy90aWMtdGFjLXRvZVwiLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhudW0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RGF0YVtpXTtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHtwcm9qZWN0LmltZ31cIiBhbHQ9XCIke3Byb2plY3QuYWx0fVwiPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW5mb1wiPlxuICAgICAgICAgICAgPGgyIGNsYXNzPVwicHJvamVjdC1uYW1lXCI+JHtwcm9qZWN0Lm5hbWV9PC9oMj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC10ZWNoLXN0YWNrXCI+PHNwYW4+VGVjaCBTdGFjazogPC9zcGFuPiR7cHJvamVjdC50ZWNoU3RhY2t9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LWRlc2NyaXB0aW9uXCI+JHtwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWxpbmtzXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cHJvamVjdC5saXZlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5MaXZlPC9hPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2plY3QuY29kZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+Q29kZTwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0c1wiKS5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQcm9qZWN0cztcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGhlYWRlckltZyBmcm9tIFwiLi9oZWFkZXJJbWdcIjtcbmltcG9ydCB7IHByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcbmltcG9ydCByZW5kZXJQcm9qZWN0cyBmcm9tIFwiLi9wcm9qZWN0UmVuZGVyXCI7XG5cbmNvbnNvbGUubG9nKHByb2plY3REYXRhWzBdLmRlc2NyaXB0aW9uKTtcbmNvbnNvbGUubG9nKHByb2plY3REYXRhWzBdLmFsdCk7XG5cbnJlbmRlclByb2plY3RzKHByb2plY3REYXRhLmxlbmd0aCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=