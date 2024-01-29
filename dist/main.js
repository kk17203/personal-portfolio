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
            "Welcome to PoCo Cycling, a personalized project crafted to demonstrate my skills and expertise in web development.<br><br> Designed as a showcase for potential employers, it offers a glimpse into my capabilities in creating interactive and engaging online platforms. While the frontend is optimized for desktop viewing and simplified for demonstration purposes, the backend demonstrates the system's resilience and scalability.<br><br> The website exhibits an array of backend features, such as user authentication, database management, and seamless integration with Google Cloud Storage for image uploads, all enhancing the user experience.",
        img: "images/poco-screenshot-2.png",
        techStack:
            "JavaScript, Node.js, Express, MongoDB, Google Cloud, HTML, CSS",
        live: "https://poco-cycling.up.railway.app/",
        code: "https://github.com/kk17203/social-page",
    },
    {
        name: "Simply Kaitie",
        alt: "A screenshot of the Simpy Kaitie page",
        description:
            "Introducing Simply Kaitie—a dynamic blog website focused on delivering a seamless experience across mobile devices. Integrating cutting-edge technologies, it's crafted using a stack of HTML, CSS, and JavaScript for front-end elegance, and powered by Node.js, Express, and MongoDB for robust back-end functionality. Additionally, leveraging Google Cloud Storage for seamless data management and Railway and Cloudflare for lightning-fast deployment.<br><br>Behind the scenes, Simply Kaitie boasts exclusive administrator-only pages, empowering the owner with effortless control to create, edit, and delete blog posts. Furthermore, comprehensive analytics tools offer valuable insights into website performance, while seamless integration allows for efficient management of email subscribers. <br><br> Explore Simply Kaitie today and witness the convergence of creativity and innovation in web development.",
        img: "images/simplykaitie-screenshot.png",
        techStack:
            "HTML, CSS, JavaScript, Node.Js, Express, MongoDB, Google Cloud, Railway, Cloudflare",
        live: "https://simplykaitie.com/",
        code: "https://github.com/kk17203/blog",
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
    // {
    //     name: "Weather App",
    //     alt: "A screenshot of the Weather App page.",
    //     img: "images/weather-app.png",
    //     description:
    //         "This app shows the current weather of a city. It uses the OpenWeather API to fetch the weather data. The app changes the background image based on the current weather in the area.",
    //     techStack: "HTML, CSS, JavaScript",
    //     live: "https://kk17203.github.io/weather-page/",
    //     code: "https://github.com/kk17203/weather-page",
    // },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNmbEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRjRDOztBQUU1QztBQUNBLG9CQUFvQixTQUFTO0FBQzdCLHdCQUF3QixxREFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGFBQWE7QUFDaEMsd0JBQXdCLFlBQVksU0FBUyxZQUFZO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxhQUFhO0FBQ3BELHFFQUFxRSxrQkFBa0I7QUFDdkYsNkNBQTZDLG9CQUFvQjtBQUNqRTtBQUNBLDJCQUEyQixhQUFhO0FBQ3hDLDJCQUEyQixhQUFhO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjLEVBQUM7Ozs7Ozs7VUM1QjlCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05vQztBQUNRO0FBQ0M7O0FBRTdDLDBEQUFjLENBQUMscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaGVhZGVySW1nLmpzIiwid2VicGFjazovL3BlcnNvbmFsLXBvcnRmb2xpby8uL3NyYy9wcm9qZWN0RGF0YS5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvcHJvamVjdFJlbmRlci5qcyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcGVyc29uYWwtcG9ydGZvbGlvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9wZXJzb25hbC1wb3J0Zm9saW8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaGVhZGVySW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXItaW1nXCIpO1xuXG5jb25zdCBoZWFkZXJJbWFnZXMgPSBbXG4gICAgXCJpbWFnZXMvY3Jvc3Mtcm9hZHMtMi5qcGdcIixcbiAgICAvLyBcImltYWdlcy90cmVlcy5qcGdcIixcbiAgICAvLyBcImltYWdlcy9icmlkZ2UuanBnXCIsXG4gICAgLy8gXCJpbWFnZXMvcm9hZC5qcGdcIixcbiAgICBcImltYWdlcy9hYmFuZG9uZWQtcm9hZC5qcGdcIixcbiAgICBcImltYWdlcy9zaWxvLmpwZ1wiLFxuXTtcblxuY29uc3QgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBoZWFkZXJJbWFnZXMubGVuZ3RoKTtcblxuaGVhZGVySW1nLnNyYyA9IGhlYWRlckltYWdlc1tyYW5kb21JbmRleF07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlckltZztcbiIsImV4cG9ydCBjb25zdCBwcm9qZWN0RGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUG9DbyBDeWNsaW5nIFNvY2lhbCBQYWdlXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFBvQ28gQ3ljbGluZyBQYWdlIHBhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIldlbGNvbWUgdG8gUG9DbyBDeWNsaW5nLCBhIHBlcnNvbmFsaXplZCBwcm9qZWN0IGNyYWZ0ZWQgdG8gZGVtb25zdHJhdGUgbXkgc2tpbGxzIGFuZCBleHBlcnRpc2UgaW4gd2ViIGRldmVsb3BtZW50Ljxicj48YnI+IERlc2lnbmVkIGFzIGEgc2hvd2Nhc2UgZm9yIHBvdGVudGlhbCBlbXBsb3llcnMsIGl0IG9mZmVycyBhIGdsaW1wc2UgaW50byBteSBjYXBhYmlsaXRpZXMgaW4gY3JlYXRpbmcgaW50ZXJhY3RpdmUgYW5kIGVuZ2FnaW5nIG9ubGluZSBwbGF0Zm9ybXMuIFdoaWxlIHRoZSBmcm9udGVuZCBpcyBvcHRpbWl6ZWQgZm9yIGRlc2t0b3Agdmlld2luZyBhbmQgc2ltcGxpZmllZCBmb3IgZGVtb25zdHJhdGlvbiBwdXJwb3NlcywgdGhlIGJhY2tlbmQgZGVtb25zdHJhdGVzIHRoZSBzeXN0ZW0ncyByZXNpbGllbmNlIGFuZCBzY2FsYWJpbGl0eS48YnI+PGJyPiBUaGUgd2Vic2l0ZSBleGhpYml0cyBhbiBhcnJheSBvZiBiYWNrZW5kIGZlYXR1cmVzLCBzdWNoIGFzIHVzZXIgYXV0aGVudGljYXRpb24sIGRhdGFiYXNlIG1hbmFnZW1lbnQsIGFuZCBzZWFtbGVzcyBpbnRlZ3JhdGlvbiB3aXRoIEdvb2dsZSBDbG91ZCBTdG9yYWdlIGZvciBpbWFnZSB1cGxvYWRzLCBhbGwgZW5oYW5jaW5nIHRoZSB1c2VyIGV4cGVyaWVuY2UuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvcG9jby1zY3JlZW5zaG90LTIucG5nXCIsXG4gICAgICAgIHRlY2hTdGFjazpcbiAgICAgICAgICAgIFwiSmF2YVNjcmlwdCwgTm9kZS5qcywgRXhwcmVzcywgTW9uZ29EQiwgR29vZ2xlIENsb3VkLCBIVE1MLCBDU1NcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL3BvY28tY3ljbGluZy51cC5yYWlsd2F5LmFwcC9cIixcbiAgICAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy9zb2NpYWwtcGFnZVwiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNpbXBseSBLYWl0aWVcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgU2ltcHkgS2FpdGllIHBhZ2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkludHJvZHVjaW5nIFNpbXBseSBLYWl0aWXigJRhIGR5bmFtaWMgYmxvZyB3ZWJzaXRlIGZvY3VzZWQgb24gZGVsaXZlcmluZyBhIHNlYW1sZXNzIGV4cGVyaWVuY2UgYWNyb3NzIG1vYmlsZSBkZXZpY2VzLiBJbnRlZ3JhdGluZyBjdXR0aW5nLWVkZ2UgdGVjaG5vbG9naWVzLCBpdCdzIGNyYWZ0ZWQgdXNpbmcgYSBzdGFjayBvZiBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0IGZvciBmcm9udC1lbmQgZWxlZ2FuY2UsIGFuZCBwb3dlcmVkIGJ5IE5vZGUuanMsIEV4cHJlc3MsIGFuZCBNb25nb0RCIGZvciByb2J1c3QgYmFjay1lbmQgZnVuY3Rpb25hbGl0eS4gQWRkaXRpb25hbGx5LCBsZXZlcmFnaW5nIEdvb2dsZSBDbG91ZCBTdG9yYWdlIGZvciBzZWFtbGVzcyBkYXRhIG1hbmFnZW1lbnQgYW5kIFJhaWx3YXkgYW5kIENsb3VkZmxhcmUgZm9yIGxpZ2h0bmluZy1mYXN0IGRlcGxveW1lbnQuPGJyPjxicj5CZWhpbmQgdGhlIHNjZW5lcywgU2ltcGx5IEthaXRpZSBib2FzdHMgZXhjbHVzaXZlIGFkbWluaXN0cmF0b3Itb25seSBwYWdlcywgZW1wb3dlcmluZyB0aGUgb3duZXIgd2l0aCBlZmZvcnRsZXNzIGNvbnRyb2wgdG8gY3JlYXRlLCBlZGl0LCBhbmQgZGVsZXRlIGJsb2cgcG9zdHMuIEZ1cnRoZXJtb3JlLCBjb21wcmVoZW5zaXZlIGFuYWx5dGljcyB0b29scyBvZmZlciB2YWx1YWJsZSBpbnNpZ2h0cyBpbnRvIHdlYnNpdGUgcGVyZm9ybWFuY2UsIHdoaWxlIHNlYW1sZXNzIGludGVncmF0aW9uIGFsbG93cyBmb3IgZWZmaWNpZW50IG1hbmFnZW1lbnQgb2YgZW1haWwgc3Vic2NyaWJlcnMuIDxicj48YnI+IEV4cGxvcmUgU2ltcGx5IEthaXRpZSB0b2RheSBhbmQgd2l0bmVzcyB0aGUgY29udmVyZ2VuY2Ugb2YgY3JlYXRpdml0eSBhbmQgaW5ub3ZhdGlvbiBpbiB3ZWIgZGV2ZWxvcG1lbnQuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvc2ltcGx5a2FpdGllLXNjcmVlbnNob3QucG5nXCIsXG4gICAgICAgIHRlY2hTdGFjazpcbiAgICAgICAgICAgIFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0LCBOb2RlLkpzLCBFeHByZXNzLCBNb25nb0RCLCBHb29nbGUgQ2xvdWQsIFJhaWx3YXksIENsb3VkZmxhcmVcIixcbiAgICAgICAgbGl2ZTogXCJodHRwczovL3NpbXBseWthaXRpZS5jb20vXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvYmxvZ1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlNob3BwaW5nIENhcnRcIixcbiAgICAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgU2hvcHBpbmcgQ2FydCBwYWdlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJUaGlzIGlzIGEgc2hvcHBpbmcgY2FydCB3ZWJzaXRlIHRoYXQgYWxsb3dzIHVzZXJzIHRvIGJyb3dzZSBwcm9kdWN0cyBmZWN0Y2hlZCBmcm9tIGFuIEFQSSBhbmQgYWRkIC8gcmVtb3ZlIHRoZW0gZnJvbSB0aGVpciBjYXJ0LiBJdCB1c2VzIFJlYWN0IHRvIGRpc3BsYXkgdGhlIGl0ZW1zIGFuZCBSZWFjdCBSb3V0ZXIgdG8gbmF2aWdhdGUgYmV0d2VlbiBwYWdlcy5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9zaG9wcGluZy1jYXJ0LTEucG5nXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIFJlYWN0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9zaG9wcGluZy1hcHAtMTcyMDMubmV0bGlmeS5hcHAvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvc2hvcHBpbmctYXBwXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiTWF0cml4IFRvZG8gTGlzdFwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBUb2RvIGFwcC5cIixcbiAgICAgICAgaW1nOiBcImltYWdlcy9tYXRyaXgtdG9kby5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIk1hdHJpeCBUb2RvIExpc3QgaXMgYSBzaW1wbGUgdG9kbyBsaXN0IHVzaW5nIFJlYWN0IHRvIGRpc3BsYXkgY3VycmVudCBhbmQgY29tcGxldGVkIHRvZG8gaXRlbXMuIEl0IHRha2VzIGFkdmFudGFnZSBvZiB0aGUgZmVhdHVyZXMgUmVhY3QgaGFzIHRvIG9mZmVyIGluY2x1ZGluZyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBQcm9wcywgUHJvcFR5cGVzLCBldGMuIE1ha2luZyBzdXJlIHRvIHNlcGFyYXRlIGNvbXBvbmVudHMgaW50byB0aGVpciBvd24gZmlsZXMuXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIFJlYWN0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9tYXRyaXgtcmVhY3QtdG9kbzE3MjAzLm5ldGxpZnkuYXBwL1wiLFxuICAgICAgICBjb2RlOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9razE3MjAzL3JlYWN0LXRvZG9cIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJDViBBcHBsaWNhdGlvblwiLFxuICAgICAgICBhbHQ6IFwiQSBzY3JlZW5zaG90IG9mIHRoZSBDViBBcHBsaWNhdGlvbiBwYWdlLlwiLFxuICAgICAgICBpbWc6IFwiaW1hZ2VzL0NWLUFwcC5wbmdcIixcbiAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICBcIkNWIEFwcGxpY2F0aW9uIGlzIGEgd2Vic2l0ZSBidWlsdCB0byBhbGxvdyB0aGUgdXNlciB0byBpbnB1dCBpbmZvcm1hdGlvbiBpbnRvIGEgc2VyaWVzIG9mIGZvcm1zIHRvIG1ha2UgdGhlaXIgb3duIHBlcnNvbmFsaXplZCBDVi4gVGhpcyBhcHBsaWNhdGlvbiBzaG93Y2FzZXMga25vd2xlZGdlIG9mIFJlYWN0ICd1c2VTdGF0ZScgYW5kICdwcm9wcycgZmVhdHVyZXMuXCIsXG4gICAgICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIFJlYWN0XCIsXG4gICAgICAgIGxpdmU6IFwiaHR0cHM6Ly9jdi1hcHBsaWNhdGlvbi05NDUubmV0bGlmeS5hcHAvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvQ1YtQXBwbGljYXRpb25cIixcbiAgICB9LFxuXG4gICAgLy8ge1xuICAgIC8vICAgICBuYW1lOiBcIlBvY28gQ3ljbGluZyBFdmVudHNcIixcbiAgICAvLyAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgRXZlbnRzIHBhZ2UuXCIsXG4gICAgLy8gICAgIGltZzogXCJpbWFnZXMvZXZlbnRzLnBuZ1wiLFxuICAgIC8vICAgICBkZXNjcmlwdGlvbjpcbiAgICAvLyAgICAgICAgIFwiUG9jbyBDeWNsaW5nIEV2ZW50cyBpcyBhIHdlYnBhZ2UgdGhhdCBhbGxvd3MgdXNlcnMgdG8gdmlldywgY3JlYXRlLCBhbmQgZGVsZXRlIGdyb3VwIHJpZGVzIGFuZCBydW5zLiBJdCBhbGxvd3MgdXNlcnMgdG8gc2VlIGFsbCBldmVudHMgb3Igc29ydCBldmVudHMgYnkgY2F0ZWdvcnkuIFwiLFxuICAgIC8vICAgICB0ZWNoU3RhY2s6IFwiSFRNTCwgQ1NTLCBKYXZhU2NyaXB0XCIsXG4gICAgLy8gICAgIGxpdmU6IFwiaHR0cHM6Ly9razE3MjAzLmdpdGh1Yi5pby9ldmVudHMvXCIsXG4gICAgLy8gICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvZXZlbnRzXCIsXG4gICAgLy8gfSxcbiAgICAvLyB7XG4gICAgLy8gICAgIG5hbWU6IFwiV2VhdGhlciBBcHBcIixcbiAgICAvLyAgICAgYWx0OiBcIkEgc2NyZWVuc2hvdCBvZiB0aGUgV2VhdGhlciBBcHAgcGFnZS5cIixcbiAgICAvLyAgICAgaW1nOiBcImltYWdlcy93ZWF0aGVyLWFwcC5wbmdcIixcbiAgICAvLyAgICAgZGVzY3JpcHRpb246XG4gICAgLy8gICAgICAgICBcIlRoaXMgYXBwIHNob3dzIHRoZSBjdXJyZW50IHdlYXRoZXIgb2YgYSBjaXR5LiBJdCB1c2VzIHRoZSBPcGVuV2VhdGhlciBBUEkgdG8gZmV0Y2ggdGhlIHdlYXRoZXIgZGF0YS4gVGhlIGFwcCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGltYWdlIGJhc2VkIG9uIHRoZSBjdXJyZW50IHdlYXRoZXIgaW4gdGhlIGFyZWEuXCIsXG4gICAgLy8gICAgIHRlY2hTdGFjazogXCJIVE1MLCBDU1MsIEphdmFTY3JpcHRcIixcbiAgICAvLyAgICAgbGl2ZTogXCJodHRwczovL2trMTcyMDMuZ2l0aHViLmlvL3dlYXRoZXItcGFnZS9cIixcbiAgICAvLyAgICAgY29kZTogXCJodHRwczovL2dpdGh1Yi5jb20va2sxNzIwMy93ZWF0aGVyLXBhZ2VcIixcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJUaWMtVGFjLVRvZSBHYW1lXCIsXG4gICAgICAgIGFsdDogXCJBIHNjcmVlbnNob3Qgb2YgdGhlIFRpYy1UYWMtVG9lIGdhbWUuXCIsXG4gICAgICAgIGltZzogXCJpbWFnZXMvdGljLXRhYy10b2UucG5nXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOlxuICAgICAgICAgICAgXCJBcyB0aGUgbmFtZSBzdWdnZXN0cywgdGhpcyBpcyBhIFRpYy1UYWMtVG9lIGdhbWUuIEl0IHdhcyBidWlsdCB1c2luZyBIVE1MLCBDU1MsIGFuZCBKYXZhU2NyaXB0LiBJdCB3YXMgYnVpbHQgYXMgcGFydCBvZiBUaGUgT2RpbiBQcm9qZWN0J3MgY3VycmljdWx1bS5cIixcbiAgICAgICAgdGVjaFN0YWNrOiBcIkhUTUwsIENTUywgSmF2YVNjcmlwdFwiLFxuICAgICAgICBsaXZlOiBcImh0dHBzOi8va2sxNzIwMy5naXRodWIuaW8vdGljLXRhYy10b2UvXCIsXG4gICAgICAgIGNvZGU6IFwiaHR0cHM6Ly9naXRodWIuY29tL2trMTcyMDMvdGljLXRhYy10b2VcIixcbiAgICB9LFxuXTtcbiIsImltcG9ydCB7IHByb2plY3REYXRhIH0gZnJvbSBcIi4vcHJvamVjdERhdGFcIjtcblxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMobnVtKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW07IGkrKykge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdERhdGFbaV07XG4gICAgICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY2FyZFwiKTtcbiAgICAgICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgICAgICAgcHJvamVjdENhcmQuaW5uZXJIVE1MID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbWctY29udGFpbmVyXCI+XG4gICAgICAgIDxhIGhyZWY9XCIke3Byb2plY3QubGl2ZX1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub2ZyZWZlcnJlclwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCIke3Byb2plY3QuaW1nfVwiIGFsdD1cIiR7cHJvamVjdC5hbHR9XCI+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pbmZvXCI+XG4gICAgICAgICAgICA8aDIgY2xhc3M9XCJwcm9qZWN0LW5hbWVcIj4ke3Byb2plY3QubmFtZX08L2gyPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LXRlY2gtc3RhY2tcIj48c3Bhbj5UZWNoIFN0YWNrOiA8L3NwYW4+JHtwcm9qZWN0LnRlY2hTdGFja308L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY3JpcHRpb25cIj4ke3Byb2plY3QuZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtbGlua3NcIj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiJHtwcm9qZWN0LmxpdmV9XCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPkxpdmU8L2E+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiR7cHJvamVjdC5jb2RlfVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIj5Db2RlPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzXCIpLmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlclByb2plY3RzO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaGVhZGVySW1nIGZyb20gXCIuL2hlYWRlckltZ1wiO1xuaW1wb3J0IHsgcHJvamVjdERhdGEgfSBmcm9tIFwiLi9wcm9qZWN0RGF0YVwiO1xuaW1wb3J0IHJlbmRlclByb2plY3RzIGZyb20gXCIuL3Byb2plY3RSZW5kZXJcIjtcblxucmVuZGVyUHJvamVjdHMocHJvamVjdERhdGEubGVuZ3RoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==