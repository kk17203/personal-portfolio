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
        name: "Matrix Todo List",
        alt: "A screenshot of the Events page.",
        img: "images/matrix-todo.png",
        description:
            "Matrix Todo List is a simple todo list using React to display current and completed todo items. It takes advantage of the features React has to offer including useState, useEffect, Props, PropTypes, etc. Making sure to separate components into their own files.",
        techStack: "HTML, CSS, JavaScript, React",
        live: "https://matrix-react-todo17203.netlify.app/",
        code: "https://github.com/kk17203/react-todo",
    },
    {
        name: "CV Application",
        alt: "A screenshot of the Events page.",
        img: "images/CV-App.png",
        description:
            "CV Application is a website built to allow the user to input information into a series of forms to make their own personalized CV. This application showcases knowledge of React 'useState' and 'props' features.",
        techStack: "HTML, CSS, JavaScript, React",
        live: "https://cv-application-945.netlify.app/",
        code: "https://github.com/kk17203/CV-Application",
    },

    {
        name: "Poco Cycling Events",
        alt: "A screenshot of the Events page.",
        img: "images/events.png",
        description:
            "Poco Cycling Events is a webpage that allows users to view, create, and delete group rides and runs. It allows users to see all events or sort events by category. ",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JsQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEQ0Qzs7QUFFNUM7QUFDQSxvQkFBb0IsU0FBUztBQUM3Qix3QkFBd0IscURBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixZQUFZLFNBQVMsWUFBWTtBQUN6RDtBQUNBO0FBQ0EsdUNBQXVDLGFBQWE7QUFDcEQscUVBQXFFLGtCQUFrQjtBQUN2Riw2Q0FBNkMsb0JBQW9CO0FBQ2pFO0FBQ0EsMkJBQTJCLGFBQWE7QUFDeEMsMkJBQTJCLGFBQWE7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGNBQWMsRUFBQzs7Ozs7OztVQzFCOUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTm9DO0FBQ1E7QUFDQzs7QUFFN0MsWUFBWSxxREFBVztBQUN2QixZQUFZLHFEQUFXOztBQUV2QiwwREFBYyxDQUFDLHFEQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2hlYWRlckltZy5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdERhdGEuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL3Byb2plY3RSZW5kZXIuanMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGhlYWRlckltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyLWltZ1wiKTtcblxuY29uc3QgaGVhZGVySW1hZ2VzID0gW1xuICAgIFwiaW1hZ2VzL2Nyb3NzLXJvYWRzLmpwZ1wiLFxuICAgIFwiaW1hZ2VzL3RyZWVzLmpwZ1wiLFxuICAgIFwiaW1hZ2VzL2JyaWRnZS5qcGdcIixcbiAgICBcImltYWdlcy9yb2FkLmpwZ1wiLFxuXTtcblxuY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWFkZXJJbWFnZXMubGVuZ3RoKTtcblxuaGVhZGVySW1nLnNyYyA9IGhlYWRlckltYWdlc1tyYW5kb21JbmRleF07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckltZztcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWF0cml4IFRvZG8gTGlzdFwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBFdmVudHMgcGFnZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9tYXRyaXgtdG9kby5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIk1hdHJpeCBUb2RvIExpc3QgaXMgYSBzaW1wbGUgdG9kbyBsaXN0IHVzaW5nIFJlYWN0IHRvIGRpc3BsYXkgY3VycmVudCBhbmQgY29tcGxldGVkIHRvZG8gaXRlbXMuIEl0IHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmVhdHVyZXMgUmVhY3QgaGFzIHRvIG9mZmVyIGluY2x1ZGluZyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBQcm9wcywgUHJvcFR5cGVzLCBldGMuIE1ha2luZyBzdXJlIHRvIHNlcGFyYXRlIGNvbXBvbmVudHMgaW50byB0aGVpciBvd24gZmlsZXMuXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIEphdmFTY3JpcHQsIFJlYWN0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9tYXRyaXgtcmVhY3QtdG9kbzE3MjAzLm5ldGxpZnkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3JlYWN0LXRvZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDViBBcHBsaWNhdGlvblwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBFdmVudHMgcGFnZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9DVi1BcHAucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJDViBBcHBsaWNhdGlvbiBpcyBhIHdlYnNpdGUgYnVpbHQgdG8gYWxsb3cgdGhlIHVzZXIgdG8gaW5wdXQgaW5mb3JtYXRpb24gaW50byBhIHNlcmllcyBvZiBmb3JtcyB0byBtYWtlIHRoZWlyIG93biBwZXJzb25hbGl6ZWQgQ1YuIFRoaXMgYXBwbGljYXRpb24gc2hvd2Nhc2VzIGtub3dsZWRnZSBvZiBSZWFjdCAndXNlU3RhdGUnIGFuZCAncHJvcHMnIGZlYXR1cmVzLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBSZWFjdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8vY3YtYXBwbGljYXRpb24tOTQ1Lm5ldGxpZnkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL0NWLUFwcGxpY2F0aW9uXCIsXG4gICAgfSxcblxuICAgIHtcbiAgICAgICAgbmFtZTogXCJQb2NvIEN5Y2xpbmcgRXZlbnRzXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIEV2ZW50cyBwYWdlLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL2V2ZW50cy5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlBvY28gQ3ljbGluZyBFdmVudHMgaXMgYSB3ZWJwYWdlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHZpZXcsIGNyZWF0ZSwgYW5kIGRlbGV0ZSBncm91cCByaWRlcyBhbmQgcnVucy4gSXQgYWxsb3dzIHVzZXJzIHRvIHNlZSBhbGwgZXZlbnRzIG9yIHNvcnQgZXZlbnRzIGJ5IGNhdGVnb3J5LiBcIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgSmF2YVNjcmlwdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vZXZlbnRzL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL2V2ZW50c1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFdlYXRoZXIgQXBwIHBhZ2UuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvd2VhdGhlci1hcHAucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUaGlzIGFwcCBzaG93cyB0aGUgY3VycmVudCB3ZWF0aGVyIG9mIGEgY2l0eS4gSXQgdXNlcyB0aGUgT3BlbldlYXRoZXIgQVBJIHRvIGZldGNoIHRoZSB3ZWF0aGVyIGRhdGEuIFRoZSBhcHAgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBpbWFnZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3ZWF0aGVyIGluIHRoZSBhcmVhLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBPcGVuV2VhdGhlciBBUElcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL2trMTcyMDMuZ2l0aHViLmlvL3dlYXRoZXItcGFnZS9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy93ZWF0aGVyLXBhZ2VcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUaWMtVGFjLVRvZSBHYW1lXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFRpYy1UYWMtVG9lIGdhbWUuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvdGljLXRhYy10b2UucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJBcyB0aGUgbmFtZSBzdWdnZXN0cywgdGhpcyBpcyBhIFRpYy1UYWMtVG9lIGdhbWUuIEl0IHdhcyBidWlsdCB1c2luZyBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJdCB3YXMgYnVpbHQgYXMgcGFydCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgY3VycmljdWx1bS5cIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgSmF2YVNjcmlwdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vdGljLXRhYy10b2UvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvdGljLXRhYy10b2VcIixcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IHByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMobnVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdERhdGFbaV07XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcbiAgICAgICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICAgICAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pbWd9XCIgYWx0PVwiJHtwcm9qZWN0LmFsdH1cIj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGVjaC1zdGFja1wiPjxzcGFuPlRlY2ggU3RhY2s6IDwvc3Bhbj4ke3Byb2plY3QudGVjaFN0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+TGl2ZTwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9qZWN0LmNvZGV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkNvZGU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBoZWFkZXJJbWcgZnJvbSBcIi4vaGVhZGVySW1nXCI7XG5pbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdFJlbmRlclwiO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0RGF0YVswXS5kZXNjcmlwdGlvbik7XG5jb25zb2xlLmxvZyhwcm9qZWN0RGF0YVswXS5hbHQpO1xuXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0RGF0YS5sZW5ndGgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9