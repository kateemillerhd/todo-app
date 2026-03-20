/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/todo */ \"./src/modules/todo.js\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n/* harmony import */ var _modules_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/app */ \"./src/modules/app.js\");\n/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ \"./src/modules/dom.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n(0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.initApp)();\n\nconst addTodoBtn = document.getElementById(\"add-todo\");\nconst todosContainer = document.getElementById(\"todos\");\nconst projectForm = document.getElementById(\"project-form\");\nconst projectsContainer = document.getElementById(\"projects-list\");\n\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\nconst currentProject = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\nif (currentProject) (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProject);\n\nprojectForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    const input = document.getElementById(\"project-name\");\n    const name = input.value.trim();\n\n    if (!name) return;\n\n    (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.addProject)(name);\n\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n\n    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n\n    projectForm.reset();\n});\n\nconst todoForm = document.getElementById(\"todo-form\");\n\ntodoForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n\n    const title = document.getElementById(\"title\").value;\n    const description = document.getElementById(\"description\").value;\n    const dueDate = document.getElementById(\"dueDate\").value;\n    const priority = document.getElementById(\"priority\").value;\n    \n    if (!title) return;\n\n    const todo = (0,_modules_todo__WEBPACK_IMPORTED_MODULE_0__.createTodo)(title, description, dueDate, priority);\n\n    const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n    if (!project) return;\n\n    (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.addTodoToProject)(project, todo); \n\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n    (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n    (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n\n    todoForm.reset();\n});\n\ntodosContainer.addEventListener(\"click\", (e) => {\n    const target = e.target;\n\n    if (target.tagName === \"BUTTON\" && target.textContent === \"Delete\") {\n        const id = target.dataset.id;\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (!project) return;\n    \n        (0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.deleteTodoFromProject)(project, id);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n        (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n        return;\n    }\n\n    if (target.tagName === \"BUTTON\" && target.textContent === \"Edit\") {\n        const id = target.dataset.id;\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (!project) return;\n\n        const todo = project.todos.find((t) => t.id === id);\n        if (!todo) return;\n\n        todo.isEditing = true;\n        \n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n        (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n        return;\n    }\n\n    if (target.classList.contains(\"cancel-edit\")) {\n        const form = target.closest(\"form\");\n        const id = form.dataset.id;\n\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (!project) return;\n\n        const todo = project.todos.find(t => t.id === id);\n        if (!todo) return;\n\n        todo.isEditing = false;\n\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n        return;\n    }\n\n    if (target.classList.contains(\"todo-title\")) {\n        const div = target.parentElement;\n        const desc = div.querySelector(\".todo-description\");\n        if (desc) {\n            desc.style.display = desc.style.display === \"none\" ? \"block\" : \"none\";\n        }\n    }\n});\n\ntodosContainer.addEventListener(\"change\", (e) => {\n    const target = e.target;\n    if (target.classList.contains(\"complete-checkbox\")) {\n        const id = target.dataset.id;\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (!project) return;\n\n        const todo = project.todos.find((t) => t.id === id);\n        if (todo) {\n            todo.completed = target.checked;\n            (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n            (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n            (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n        }\n    }\n});\n\ntodosContainer.addEventListener(\"submit\", (e) => {\n    if (e.target.classList.contains(\"edit-form\")) {\n        e.preventDefault();\n\n        const form = e.target;\n        const id = form.dataset.id;\n\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (!project) return;\n\n        const todo = project.todos.find(t => t.id === id);\n        if (!todo) return;\n\n        const formData = new FormData(form);\n\n        todo.title = formData.get(\"title\");\n        todo.description = formData.get(\"description\");\n        todo.dueDate = formData.get(\"dueDate\");\n        todo.priority = formData.get(\"priority\");\n\n        todo.isEditing = false;\n\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n        (0,_modules_storage__WEBPACK_IMPORTED_MODULE_4__.saveAppState)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n    }\n});\n\nprojectsContainer.addEventListener(\"click\", (e) => {\n    const target = e.target;\n    const index = Number(target.dataset.index);\n    if (isNaN(index)) return;\n\n    if (target.tagName === \"BUTTON\") {\n        (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.deleteProject)(index);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n\n        const currentProject = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (currentProject) (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(currentProject);\n        (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)());\n    } else if (target.tagName === \"SPAN\") {\n        (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.setCurrentProject)(index);\n        const project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\n        if (project) (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n    }\n});\n\nconst project = (0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getCurrentProject)();\nif (project) (0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderTodos)(project);\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderUpcomingTodos)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAllTodos)());\n(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderProjects)((0,_modules_app__WEBPACK_IMPORTED_MODULE_2__.getAppState)());\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?\n}");

/***/ },

/***/ "./src/modules/app.js"
/*!****************************!*\
  !*** ./src/modules/app.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addProject: () => (/* binding */ addProject),\n/* harmony export */   deleteProject: () => (/* binding */ deleteProject),\n/* harmony export */   getAllTodos: () => (/* binding */ getAllTodos),\n/* harmony export */   getAppState: () => (/* binding */ getAppState),\n/* harmony export */   getCurrentProject: () => (/* binding */ getCurrentProject),\n/* harmony export */   initApp: () => (/* binding */ initApp),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/modules/project.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\nconst appState = {\n    projects: [],\n    currentProjectIndex: 0,\n};\n\nfunction initApp() {\n\n    const loaded = (0,_storage__WEBPACK_IMPORTED_MODULE_1__.loadAppState)();\n    if (loaded) {\n        appState.projects = loaded.projects;\n        appState.currentProjectIndex = loaded.currentProjectIndex;\n    } else {\n        const defaultProject = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(\"Default\");\n        appState.projects.push(defaultProject);\n    }\n}\n\nfunction getCurrentProject() {\n    if (appState.projects.length === 0) return null;\n    return appState.projects[appState.currentProjectIndex];\n}\n\nfunction getAppState() {\n    return appState;\n}\n\nfunction addProject(name) {\n    const project = (0,_project__WEBPACK_IMPORTED_MODULE_0__.createProject)(name);\n    appState.projects.push(project);\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveAppState)(appState);\n}\n\nfunction setCurrentProject(index) {\n    appState.currentProjectIndex = index;\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveAppState)(appState);\n}\n\nfunction deleteProject(index) {\n    appState.projects.splice(index, 1);\n\n    if (appState.currentProjectIndex >= appState.projects.length) {\n        appState.currentProjectIndex = appState.projects.length - 1;\n    }\n    (0,_storage__WEBPACK_IMPORTED_MODULE_1__.saveAppState)(appState);\n}\n\nfunction getAllTodos() {\n    return appState.projects.flatMap(project => project.todos);\n}\n\n//# sourceURL=webpack://todo-app/./src/modules/app.js?\n}");

/***/ },

/***/ "./src/modules/dom.js"
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderProjects: () => (/* binding */ renderProjects),\n/* harmony export */   renderTodos: () => (/* binding */ renderTodos),\n/* harmony export */   renderUpcomingTodos: () => (/* binding */ renderUpcomingTodos)\n/* harmony export */ });\nfunction renderTodos(project) {\n    const todosContainer = document.getElementById(\"todos\");\n    todosContainer.innerHTML = \"\";\n\n    if (!project) return;\n\n    project.todos.forEach((todo) => {\n        const div = document.createElement(\"div\");\n\n        if (todo.completed) {\n            div.classList.add(\"completed\");\n        }\n\n        let bgColor;\n        switch (todo.priority) {\n            case \"high\":\n                bgColor = \"#f28b82\";\n                break;\n            case \"medium\":\n                bgColor = \"#fbbc04\";\n                break;\n            default:\n                bgColor = \"#ccff90\";\n        }\n        div.style.backgroundColor = bgColor;\n        div.style.padding = \"8px\";\n        div.style.marginBottom = \"4px\";\n        div.style.borderRadius = \"4px\";\n\n        if (todo.isEditing) {\n            div.innerHTML = `\n            <form class=\"edit-form\" data-id=\"${todo.id}\">\n                <input type=\"text\" name=\"title\" value=\"${todo.title}\" required />\n                <input type=\"text\" name=\"description\" value=\"${todo.description}\" />\n                <input type=\"date\" name=\"dueDate\" value=\"${todo.dueDate}\" />\n                \n                <select name=\"priority\">\n                    <option value=\"low\" ${todo.priority === \"low\" ? \"selected\" : \"\"}>Low</option>\n                    <option value=\"medium\" ${todo.priority === \"medium\" ? \"selected\" : \"\"}>Medium</option>\n                    <option value=\"high\" ${todo.priority === \"high\" ? \"selected\" : \"\"}>High</option>\n                </select>\n                \n                <button type=\"submit\">Save</button>\n                <button type=\"button\" class=\"cancel-edit\">Cancel</button>\n            </form>\n            `;\n        } else {\n            div.innerHTML = `\n                <input type=\"checkbox\" class=\"complete-checkbox\" data-id=\"${todo.id}\" ${todo.completed ? \"checked\" : \"\"}>\n                \n                <strong class=\"todo-title\">${todo.title}</strong><br>\n\n                <div class=\"todometa\">\n                    Due: ${todo.dueDate}<br>\n                    Priority: ${todo.priority}<br>\n                </div>\n                \n                <div class=\"todo-description\" style=\"display:none;\">\n                    ${todo.description}\n                </div>\n            `;\n\n            const editBtn = document.createElement(\"button\");\n            editBtn.textContent = \"Edit\";\n            editBtn.dataset.id = todo.id;\n\n            const deleteBtn = document.createElement(\"button\");\n            deleteBtn.textContent = \"Delete\";\n            deleteBtn.dataset.id = todo.id;\n\n            div.appendChild(editBtn);\n            div.appendChild(deleteBtn);\n        }  \n\n        todosContainer.appendChild(div);\n    });\n}\n\nfunction renderProjects(appState) {\n    const projectsContainer = document.getElementById(\"projects-list\");\n    projectsContainer.innerHTML = \"\";\n\n    appState.projects.forEach((project, index) => {\n        const div = document.createElement(\"div\");\n        div.dataset.index = index;\n        div.id = \"tasks\";\n\n        const nameSpan = document.createElement(\"span\");\n        nameSpan.textContent = project.name;\n        nameSpan.dataset.index = index;\n        nameSpan.style.cursor = \"pointer\";\n        nameSpan.style.marginRight = \"8px\";\n\n        const deleteBtn = document.createElement(\"button\");\n        deleteBtn.textContent = \"Delete Project\";\n        deleteBtn.dataset.index = index;\n        deleteBtn.style.marginLeft = \"8px\";\n        deleteBtn.style.padding = \"8px\";\n\n        div.appendChild(nameSpan);\n        div.appendChild(deleteBtn);\n\n        projectsContainer.appendChild(div);\n    });\n}\n\nfunction renderUpcomingTodos(todos) {\n    const container = document.getElementById(\"calendar\");\n    container.innerHTML = \"<h2>Upcoming Due Dates</h2>\";\n\n    const filtered = todos.filter(todo => todo.dueDate);\n\n    filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));\n\n    const upcoming = filtered.slice(0, 5);\n\n    upcoming.forEach(todo => {\n        const div = document.createElement(\"div\");\n\n        const today = new Date();\n        const due = new Date(todo.dueDate);\n\n        today.setHours(0, 0, 0, 0);\n        due.setHours(0, 0, 0, 0);\n\n        if (due < today) {\n            div.style.color = \"#F7775E\";\n        } else if (due.getTime() === today.getTime()) {\n            div.style.color = \"#E89910\";\n        } else {\n            div.style.color = \"#71E810\";\n        }\n\n        div.innerHTML = `\n            <strong>${todo.title}</strong><br>\n            Due: ${todo.dueDate}\n            `;\n\n        div.style.marginBottom = \"8px\";\n        div.style.padding = \"6px\";\n        div.style.borderBottom = \"1px solid #ccc\";\n\n        container.appendChild(div);\n\n    });\n\n    if (upcoming.length === 0) {\n        container.innerHTML += \"<p>No Upcoming Todos</p>\";\n    }\n}\n\n//# sourceURL=webpack://todo-app/./src/modules/dom.js?\n}");

/***/ },

/***/ "./src/modules/project.js"
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addTodoToProject: () => (/* binding */ addTodoToProject),\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   deleteTodoFromProject: () => (/* binding */ deleteTodoFromProject)\n/* harmony export */ });\nfunction createProject(name) {\n    return {\n        name, \n        todos: [],\n    };\n}\n\nfunction addTodoToProject(project, todo) {\n    project.todos.push(todo);\n}\n\nfunction deleteTodoFromProject(project, todoId) {\n    project.todos = project.todos.filter(todo => todo.id !== todoId);\n}\n\n\n//# sourceURL=webpack://todo-app/./src/modules/project.js?\n}");

/***/ },

/***/ "./src/modules/storage.js"
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAppState: () => (/* binding */ loadAppState),\n/* harmony export */   saveAppState: () => (/* binding */ saveAppState)\n/* harmony export */ });\nfunction saveAppState(appState) {\n    localStorage.setItem(\"todoApp\", JSON.stringify(appState));\n}\n\nfunction loadAppState() {\n    const data = localStorage.getItem(\"todoApp\");\n    if (!data) return null;\n    return JSON.parse(data);\n}\n\n//# sourceURL=webpack://todo-app/./src/modules/storage.js?\n}");

/***/ },

/***/ "./src/modules/todo.js"
/*!*****************************!*\
  !*** ./src/modules/todo.js ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createTodo: () => (/* binding */ createTodo)\n/* harmony export */ });\nfunction  createTodo(title, description, dueDate, priority) {\n    return {\n        id: crypto.randomUUID(),\n        title,\n        description,\n        dueDate,\n        priority,\n        completed: false,\n    };\n}\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/todo.js?\n}");

/***/ }

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
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;