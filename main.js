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
    "images/cross-roads-2.jpg",
    // "images/trees.jpg",
    // "images/bridge.jpg",
    // "images/road.jpg",
    "images/abandoned-road.jpg",
    "images/silo.jpg",
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
        name: "PoCo Cycling Social Page",
        alt: "A screenshot of the PoCo Cycling Page page",
        description:
            "PoCo Cycling page is a social media page for the organization, Polk County Cycling Club. It allows users to sign-up, post, reply, like, upload images, and more!",
        img: "images/poco-screenshot-2.png",
        techStack:
            "JavaScript, Node.js, Express, MongoDB, Google Cloud, HTML, CSS",
        live: "https://poco-cycling.up.railway.app/",
        code: "https://github.com/kk17203/social-page",
    },
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
        <a href="${project.live}" target="_blank" rel="noopener nofreferrer">
            <img src="${project.img}" alt="${project.alt}">
            </a>
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmbEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6RTRDOztBQUU1QztBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHdCQUF3QixxREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsd0JBQXdCLFlBQVksU0FBUyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BELHFFQUFxRSxrQkFBa0I7QUFDdkYsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUM1QjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNRO0FBQ0M7O0FBRTdDLDBEQUFjLENBQUMscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaGVhZGVySW1nLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdFJlbmRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItaW1nXCIpO1xuXG5jb25zdCBoZWFkZXJJbWFnZXMgPSBbXG4gICAgXCJpbWFnZXMvY3Jvc3Mtcm9hZHMtMi5qcGdcIixcbiAgICAvLyBcImltYWdlcy90cmVlcy5qcGdcIixcbiAgICAvLyBcImltYWdlcy9icmlkZ2UuanBnXCIsXG4gICAgLy8gXCJpbWFnZXMvcm9hZC5qcGdcIixcbiAgICBcImltYWdlcy9hYmFuZG9uZWQtcm9hZC5qcGdcIixcbiAgICBcImltYWdlcy9zaWxvLmpwZ1wiLFxuXTtcblxuY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWFkZXJJbWFnZXMubGVuZ3RoKTtcblxuaGVhZGVySW1nLnNyYyA9IGhlYWRlckltYWdlc1tyYW5kb21JbmRleF07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckltZztcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUG9DbyBDeWNsaW5nIFNvY2lhbCBQYWdlXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFBvQ28gQ3ljbGluZyBQYWdlIHBhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlBvQ28gQ3ljbGluZyBwYWdlIGlzIGEgc29jaWFsIG1lZGlhIHBhZ2UgZm9yIHRoZSBvcmdhbml6YXRpb24sIFBvbGsgQ291bnR5IEN5Y2xpbmcgQ2x1Yi4gSXQgYWxsb3dzIHVzZXJzIHRvIHNpZ24tdXAsIHBvc3QsIHJlcGx5LCBsaWtlLCB1cGxvYWQgaW1hZ2VzLCBhbmQgbW9yZSFcIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9wb2NvLXNjcmVlbnNob3QtMi5wbmdcIixcbiAgICAgICAgdGVjaFN0YWNrOlxuICAgICAgICAgICAgXCJKYXZhU2NyaXB0LCBOb2RlLmpzLCBFeHByZXNzLCBNb25nb0RCLCBHb29nbGUgQ2xvdWQsIEhUTUwsIENTU1wiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8vcG9jby1jeWNsaW5nLnVwLnJhaWx3YXkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3NvY2lhbC1wYWdlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiU2hvcHBpbmcgQ2FydFwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBTaG9wcGluZyBDYXJ0IHBhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIlRoaXMgaXMgYSBzaG9wcGluZyBjYXJ0IHdlYnNpdGUgdGhhdCBhbGxvd3MgdXNlcnMgdG8gYnJvd3NlIHByb2R1Y3RzIGZlY3RjaGVkIGZyb20gYW4gQVBJIGFuZCBhZGQgLyByZW1vdmUgdGhlbSBmcm9tIHRoZWlyIGNhcnQuIEl0IHVzZXMgUmVhY3QgdG8gZGlzcGxheSB0aGUgaXRlbXMgYW5kIFJlYWN0IFJvdXRlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHBhZ2VzLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL3Nob3BwaW5nLWNhcnQtMS5wbmdcIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgUmVhY3RcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL3Nob3BwaW5nLWFwcC0xNzIwMy5uZXRsaWZ5LmFwcC9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy9zaG9wcGluZy1hcHBcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJNYXRyaXggVG9kbyBMaXN0XCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFRvZG8gYXBwLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL21hdHJpeC10b2RvLnBuZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiTWF0cml4IFRvZG8gTGlzdCBpcyBhIHNpbXBsZSB0b2RvIGxpc3QgdXNpbmcgUmVhY3QgdG8gZGlzcGxheSBjdXJyZW50IGFuZCBjb21wbGV0ZWQgdG9kbyBpdGVtcy4gSXQgdGFrZXMgYWR2YW50YWdlIG9mIHRoZSBmZWF0dXJlcyBSZWFjdCBoYXMgdG8gb2ZmZXIgaW5jbHVkaW5nIHVzZVN0YXRlLCB1c2VFZmZlY3QsIFByb3BzLCBQcm9wVHlwZXMsIGV0Yy4gTWFraW5nIHN1cmUgdG8gc2VwYXJhdGUgY29tcG9uZW50cyBpbnRvIHRoZWlyIG93biBmaWxlcy5cIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgUmVhY3RcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL21hdHJpeC1yZWFjdC10b2RvMTcyMDMubmV0bGlmeS5hcHAvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvcmVhY3QtdG9kb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNWIEFwcGxpY2F0aW9uXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIENWIEFwcGxpY2F0aW9uIHBhZ2UuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvQ1YtQXBwLnBuZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiQ1YgQXBwbGljYXRpb24gaXMgYSB3ZWJzaXRlIGJ1aWx0IHRvIGFsbG93IHRoZSB1c2VyIHRvIGlucHV0IGluZm9ybWF0aW9uIGludG8gYSBzZXJpZXMgb2YgZm9ybXMgdG8gbWFrZSB0aGVpciBvd24gcGVyc29uYWxpemVkIENWLiBUaGlzIGFwcGxpY2F0aW9uIHNob3djYXNlcyBrbm93bGVkZ2Ugb2YgUmVhY3QgJ3VzZVN0YXRlJyBhbmQgJ3Byb3BzJyBmZWF0dXJlcy5cIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgUmVhY3RcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL2N2LWFwcGxpY2F0aW9uLTk0NS5uZXRsaWZ5LmFwcC9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy9DVi1BcHBsaWNhdGlvblwiLFxuICAgIH0sXG5cbiAgICAvLyB7XG4gICAgLy8gICAgIG5hbWU6IFwiUG9jbyBDeWNsaW5nIEV2ZW50c1wiLFxuICAgIC8vICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBFdmVudHMgcGFnZS5cIixcbiAgICAvLyAgICAgaW1nOiBcImltYWdlcy9ldmVudHMucG5nXCIsXG4gICAgLy8gICAgIGRlc2NyaXB0aW9uOlxuICAgIC8vICAgICAgICAgXCJQb2NvIEN5Y2xpbmcgRXZlbnRzIGlzIGEgd2VicGFnZSB0aGF0IGFsbG93cyB1c2VycyB0byB2aWV3LCBjcmVhdGUsIGFuZCBkZWxldGUgZ3JvdXAgcmlkZXMgYW5kIHJ1bnMuIEl0IGFsbG93cyB1c2VycyB0byBzZWUgYWxsIGV2ZW50cyBvciBzb3J0IGV2ZW50cyBieSBjYXRlZ29yeS4gXCIsXG4gICAgLy8gICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIEphdmFTY3JpcHRcIixcbiAgICAvLyAgICAgbGl2ZTogXCJodHRwczovL2trMTcyMDMuZ2l0aHViLmlvL2V2ZW50cy9cIixcbiAgICAvLyAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy9ldmVudHNcIixcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJXZWF0aGVyIEFwcFwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBXZWF0aGVyIEFwcCBwYWdlLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL3dlYXRoZXItYXBwLnBuZ1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgIFwiVGhpcyBhcHAgc2hvd3MgdGhlIGN1cnJlbnQgd2VhdGhlciBvZiBhIGNpdHkuIEl0IHVzZXMgdGhlIE9wZW5XZWF0aGVyIEFQSSB0byBmZXRjaCB0aGUgd2VhdGhlciBkYXRhLiBUaGUgYXBwIGNoYW5nZXMgdGhlIGJhY2tncm91bmQgaW1hZ2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgd2VhdGhlciBpbiB0aGUgYXJlYS5cIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgSmF2YVNjcmlwdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vd2VhdGhlci1wYWdlL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3dlYXRoZXItcGFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlRpYy1UYWMtVG9lIEdhbWVcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgVGljLVRhYy1Ub2UgZ2FtZS5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy90aWMtdGFjLXRvZS5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkFzIHRoZSBuYW1lIHN1Z2dlc3RzLCB0aGlzIGlzIGEgVGljLVRhYy1Ub2UgZ2FtZS4gSXQgd2FzIGJ1aWx0IHVzaW5nIEhUTUwsIENTUywgYW5kIEphdmFTY3JpcHQuIEl0IHdhcyBidWlsdCBhcyBwYXJ0IG9mIFRoZSBPZGluIFByb2plY3QncyBjdXJyaWN1bHVtLlwiLFxuICAgICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9razE3MjAzLmdpdGh1Yi5pby90aWMtdGFjLXRvZS9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy90aWMtdGFjLXRvZVwiLFxuICAgIH0sXG5dO1xuIiwiaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cyhudW0pIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0RGF0YVtpXTtcbiAgICAgICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jYXJkXCIpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgICAgICBwcm9qZWN0Q2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltZy1jb250YWluZXJcIj5cbiAgICAgICAgPGEgaHJlZj1cIiR7cHJvamVjdC5saXZlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vZnJlZmVycmVyXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7cHJvamVjdC5pbWd9XCIgYWx0PVwiJHtwcm9qZWN0LmFsdH1cIj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWluZm9cIj5cbiAgICAgICAgICAgIDxoMiBjbGFzcz1cInByb2plY3QtbmFtZVwiPiR7cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtdGVjaC1zdGFja1wiPjxzcGFuPlRlY2ggU3RhY2s6IDwvc3Bhbj4ke3Byb2plY3QudGVjaFN0YWNrfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwicHJvamVjdC1kZXNjcmlwdGlvblwiPiR7cHJvamVjdC5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1saW5rc1wiPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+TGl2ZTwvYT5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9qZWN0LmNvZGV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkNvZGU8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUHJvamVjdHM7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBoZWFkZXJJbWcgZnJvbSBcIi4vaGVhZGVySW1nXCI7XG5pbXBvcnQgeyBwcm9qZWN0RGF0YSB9IGZyb20gXCIuL3Byb2plY3REYXRhXCI7XG5pbXBvcnQgcmVuZGVyUHJvamVjdHMgZnJvbSBcIi4vcHJvamVjdFJlbmRlclwiO1xuXG5yZW5kZXJQcm9qZWN0cyhwcm9qZWN0RGF0YS5sZW5ndGgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9