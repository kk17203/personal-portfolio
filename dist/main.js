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
        name: "Shopping Cart",
        alt: "A screenshot of the Shopping Cart page",
        description:
            "This is a shopping cart website that allows users to browse products fectched from an API and add / remove them from their cart. It uses React to display the items and React Router to navigate between pages.",
        img: "images/shopping-cart-1.png",
        techStack: "HTML, CSS, React",
        live: "https://shopping-app-17203.netlify.app/",
        code: "https://github.com/kk17203/shopping-app",
    },
    {
        name: "Matrix Todo List",
        alt: "A screenshot of the Todo app.",
        img: "images/matrix-todo.png",
        description:
            "Matrix Todo List is a simple todo list using React to display current and completed todo items. It takes advantage of the features React has to offer including useState, useEffect, Props, PropTypes, etc. Making sure to separate components into their own files.",
        techStack: "HTML, CSS, React",
        live: "https://matrix-react-todo17203.netlify.app/",
        code: "https://github.com/kk17203/react-todo",
    },
    {
        name: "CV Application",
        alt: "A screenshot of the CV Application page.",
        img: "images/CV-App.png",
        description:
            "CV Application is a website built to allow the user to input information into a series of forms to make their own personalized CV. This application showcases knowledge of React 'useState' and 'props' features.",
        techStack: "HTML, CSS, React",
        live: "https://cv-application-945.netlify.app/",
        code: "https://github.com/kk17203/CV-Application",
    },

    // {
    //     name: "Poco Cycling Events",
    //     alt: "A screenshot of the Events page.",
    //     img: "images/events.png",
    //     description:
    //         "Poco Cycling Events is a webpage that allows users to view, create, and delete group rides and runs. It allows users to see all events or sort events by category. ",
    //     techStack: "HTML, CSS, JavaScript",
    //     live: "https://kk17203.github.io/events/",
    //     code: "https://github.com/kk17203/events",
    // },
    {
        name: "Weather App",
        alt: "A screenshot of the Weather App page.",
        img: "images/weather-app.png",
        description:
            "This app shows the current weather of a city. It uses the OpenWeather API to fetch the weather data. The app changes the background image based on the current weather in the area.",
        techStack: "HTML, CSS, JavaScript",
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




(0,_projectRender__WEBPACK_IMPORTED_MODULE_2__["default"])(_projectData__WEBPACK_IMPORTED_MODULE_1__.projectData.length);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2JsQjtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7Ozs7Ozs7Ozs7Ozs7OztBQzlENEM7O0FBRTVDO0FBQ0Esb0JBQW9CLFNBQVM7QUFDN0Isd0JBQXdCLHFEQUFXO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWSxTQUFTLFlBQVk7QUFDekQ7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BELHFFQUFxRSxrQkFBa0I7QUFDdkYsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUMxQjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNRO0FBQ0M7O0FBRTdDLDBEQUFjLENBQUMscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaGVhZGVySW1nLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdFJlbmRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItaW1nXCIpO1xuXG5jb25zdCBoZWFkZXJJbWFnZXMgPSBbXG4gICAgXCJpbWFnZXMvY3Jvc3Mtcm9hZHMuanBnXCIsXG4gICAgXCJpbWFnZXMvdHJlZXMuanBnXCIsXG4gICAgXCJpbWFnZXMvYnJpZGdlLmpwZ1wiLFxuICAgIFwiaW1hZ2VzL3JvYWQuanBnXCIsXG5dO1xuXG5jb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGhlYWRlckltYWdlcy5sZW5ndGgpO1xuXG5oZWFkZXJJbWcuc3JjID0gaGVhZGVySW1hZ2VzW3JhbmRvbUluZGV4XTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVySW1nO1xuIiwiZXhwb3J0IGNvbnN0IHByb2plY3REYXRhID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJTaG9wcGluZyBDYXJ0XCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFNob3BwaW5nIENhcnQgcGFnZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVGhpcyBpcyBhIHNob3BwaW5nIGNhcnQgd2Vic2l0ZSB0aGF0IGFsbG93cyB1c2VycyB0byBicm93c2UgcHJvZHVjdHMgZmVjdGNoZWQgZnJvbSBhbiBBUEkgYW5kIGFkZCAvIHJlbW92ZSB0aGVtIGZyb20gdGhlaXIgY2FydC4gSXQgdXNlcyBSZWFjdCB0byBkaXNwbGF5IHRoZSBpdGVtcyBhbmQgUmVhY3QgUm91dGVyIHRvIG5hdmlnYXRlIGJldHdlZW4gcGFnZXMuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvc2hvcHBpbmctY2FydC0xLnBuZ1wiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBSZWFjdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8vc2hvcHBpbmctYXBwLTE3MjAzLm5ldGxpZnkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3Nob3BwaW5nLWFwcFwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIk1hdHJpeCBUb2RvIExpc3RcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgVG9kbyBhcHAuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvbWF0cml4LXRvZG8ucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJNYXRyaXggVG9kbyBMaXN0IGlzIGEgc2ltcGxlIHRvZG8gbGlzdCB1c2luZyBSZWFjdCB0byBkaXNwbGF5IGN1cnJlbnQgYW5kIGNvbXBsZXRlZCB0b2RvIGl0ZW1zLiBJdCB0YWtlcyBhZHZhbnRhZ2Ugb2YgdGhlIGZlYXR1cmVzIFJlYWN0IGhhcyB0byBvZmZlciBpbmNsdWRpbmcgdXNlU3RhdGUsIHVzZUVmZmVjdCwgUHJvcHMsIFByb3BUeXBlcywgZXRjLiBNYWtpbmcgc3VyZSB0byBzZXBhcmF0ZSBjb21wb25lbnRzIGludG8gdGhlaXIgb3duIGZpbGVzLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBSZWFjdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8vbWF0cml4LXJlYWN0LXRvZG8xNzIwMy5uZXRsaWZ5LmFwcC9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy9yZWFjdC10b2RvXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ1YgQXBwbGljYXRpb25cIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgQ1YgQXBwbGljYXRpb24gcGFnZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9DVi1BcHAucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJDViBBcHBsaWNhdGlvbiBpcyBhIHdlYnNpdGUgYnVpbHQgdG8gYWxsb3cgdGhlIHVzZXIgdG8gaW5wdXQgaW5mb3JtYXRpb24gaW50byBhIHNlcmllcyBvZiBmb3JtcyB0byBtYWtlIHRoZWlyIG93biBwZXJzb25hbGl6ZWQgQ1YuIFRoaXMgYXBwbGljYXRpb24gc2hvd2Nhc2VzIGtub3dsZWRnZSBvZiBSZWFjdCAndXNlU3RhdGUnIGFuZCAncHJvcHMnIGZlYXR1cmVzLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBSZWFjdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8vY3YtYXBwbGljYXRpb24tOTQ1Lm5ldGxpZnkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL0NWLUFwcGxpY2F0aW9uXCIsXG4gICAgfSxcblxuICAgIC8vIHtcbiAgICAvLyAgICAgbmFtZTogXCJQb2NvIEN5Y2xpbmcgRXZlbnRzXCIsXG4gICAgLy8gICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIEV2ZW50cyBwYWdlLlwiLFxuICAgIC8vICAgICBpbWc6IFwiaW1hZ2VzL2V2ZW50cy5wbmdcIixcbiAgICAvLyAgICAgZGVzY3JpcHRpb246XG4gICAgLy8gICAgICAgICBcIlBvY28gQ3ljbGluZyBFdmVudHMgaXMgYSB3ZWJwYWdlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIHZpZXcsIGNyZWF0ZSwgYW5kIGRlbGV0ZSBncm91cCByaWRlcyBhbmQgcnVucy4gSXQgYWxsb3dzIHVzZXJzIHRvIHNlZSBhbGwgZXZlbnRzIG9yIHNvcnQgZXZlbnRzIGJ5IGNhdGVnb3J5LiBcIixcbiAgICAvLyAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgSmF2YVNjcmlwdFwiLFxuICAgIC8vICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vZXZlbnRzL1wiLFxuICAgIC8vICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL2V2ZW50c1wiLFxuICAgIC8vIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIldlYXRoZXIgQXBwXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFdlYXRoZXIgQXBwIHBhZ2UuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvd2VhdGhlci1hcHAucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUaGlzIGFwcCBzaG93cyB0aGUgY3VycmVudCB3ZWF0aGVyIG9mIGEgY2l0eS4gSXQgdXNlcyB0aGUgT3BlbldlYXRoZXIgQVBJIHRvIGZldGNoIHRoZSB3ZWF0aGVyIGRhdGEuIFRoZSBhcHAgY2hhbmdlcyB0aGUgYmFja2dyb3VuZCBpbWFnZSBiYXNlZCBvbiB0aGUgY3VycmVudCB3ZWF0aGVyIGluIHRoZSBhcmVhLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9razE3MjAzLmdpdGh1Yi5pby93ZWF0aGVyLXBhZ2UvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvd2VhdGhlci1wYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiVGljLVRhYy1Ub2UgR2FtZVwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBUaWMtVGFjLVRvZSBnYW1lLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL3RpYy10YWMtdG9lLnBuZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQXMgdGhlIG5hbWUgc3VnZ2VzdHMsIHRoaXMgaXMgYSBUaWMtVGFjLVRvZSBnYW1lLiBJdCB3YXMgYnVpbHQgdXNpbmcgSFRNTCwgQ1NTLCBhbmQgSmF2YVNjcmlwdC4gSXQgd2FzIGJ1aWx0IGFzIHBhcnQgb2YgVGhlIE9kaW4gUHJvamVjdCdzIGN1cnJpY3VsdW0uXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIEphdmFTY3JpcHRcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL2trMTcyMDMuZ2l0aHViLmlvL3RpYy10YWMtdG9lL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3RpYy10YWMtdG9lXCIsXG4gICAgfSxcbl07XG4iLCJpbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKG51bSkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyBpKyspIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3REYXRhW2ldO1xuICAgICAgICBjb25zdCBwcm9qZWN0Q2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RDYXJkLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNhcmRcIik7XG4gICAgICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgICAgIHByb2plY3RDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1nLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1nfVwiIGFsdD1cIiR7cHJvamVjdC5hbHR9XCI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXRlY2gtc3RhY2tcIj48c3Bhbj5UZWNoIFN0YWNrOiA8L3NwYW4+JHtwcm9qZWN0LnRlY2hTdGFja308L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9qZWN0LmxpdmV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkxpdmU8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cHJvamVjdC5jb2RlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5Db2RlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclByb2plY3RzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaGVhZGVySW1nIGZyb20gXCIuL2hlYWRlckltZ1wiO1xuaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3Byb2plY3RSZW5kZXJcIjtcblxucmVuZGVyUHJvamVjdHMocHJvamVjdERhdGEubGVuZ3RoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==