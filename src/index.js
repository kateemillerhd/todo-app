import { createTodo } from "./modules/todo";
import { addTodoToProject, deleteTodoFromProject } from "./modules/project";
import { 
    initApp, 
    getCurrentProject, 
    getAppState, 
    addProject, 
    setCurrentProject, 
    deleteProject,
    getAllTodos,
} from "./modules/app";
import { renderTodos, renderProjects, renderUpcomingTodos } from "./modules/dom";
import { saveAppState } from "./modules/storage";
initApp();

const addTodoBtn = document.getElementById("add-todo");
const todosContainer = document.getElementById("todos");
const projectForm = document.getElementById("project-form");
const projectsContainer = document.getElementById("projects-list");

renderUpcomingTodos(getAllTodos());
renderProjects(getAppState());
const currentProject = getCurrentProject();
if (currentProject) renderTodos(currentProject);

projectForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("project-name");
    const name = input.value.trim();

    if (!name) return;

    addProject(name);

    renderProjects(getAppState());
    renderTodos(getCurrentProject());
    renderUpcomingTodos(getAllTodos());

    saveAppState(getAppState());

    projectForm.reset();
});

const todoForm = document.getElementById("todo-form");

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("dueDate").value;
    const priority = document.getElementById("priority").value;
    
    if (!title) return;

    const todo = createTodo(title, description, dueDate, priority);

    const project = getCurrentProject();
    if (!project) return;

    addTodoToProject(project, todo); 

    renderTodos(project);
    renderUpcomingTodos(getAllTodos());
    saveAppState(getAppState());

    todoForm.reset();
});

todosContainer.addEventListener("click", (e) => {
    const target = e.target;

    if (target.tagName === "BUTTON" && target.textContent === "Delete") {
        const id = target.dataset.id;
        const project = getCurrentProject();
        if (!project) return;
    
        deleteTodoFromProject(project, id);
        renderTodos(project);
        renderUpcomingTodos(getAllTodos());
        saveAppState(getAppState());
        return;
    }

    if (target.tagName === "BUTTON" && target.textContent === "Edit") {
        const id = target.dataset.id;
        const project = getCurrentProject();
        if (!project) return;

        const todo = project.todos.find((t) => t.id === id);
        if (!todo) return;

        todo.isEditing = true;
        
        renderTodos(project);
        renderUpcomingTodos(getAllTodos());
        saveAppState(getAppState());
        return;
    }

    if (target.classList.contains("cancel-edit")) {
        const form = target.closest("form");
        const id = form.dataset.id;

        const project = getCurrentProject();
        if (!project) return;

        const todo = project.todos.find(t => t.id === id);
        if (!todo) return;

        todo.isEditing = false;

        renderTodos(project);
        return;
    }

    if (target.classList.contains("todo-title")) {
        const div = target.parentElement;
        const desc = div.querySelector(".todo-description");
        if (desc) {
            desc.style.display = desc.style.display === "none" ? "block" : "none";
        }
    }
});

todosContainer.addEventListener("change", (e) => {
    const target = e.target;
    if (target.classList.contains("complete-checkbox")) {
        const id = target.dataset.id;
        const project = getCurrentProject();
        if (!project) return;

        const todo = project.todos.find((t) => t.id === id);
        if (todo) {
            todo.completed = target.checked;
            saveAppState(getAppState());
            renderTodos(project);
            renderUpcomingTodos(getAllTodos());
        }
    }
});

todosContainer.addEventListener("submit", (e) => {
    if (e.target.classList.contains("edit-form")) {
        e.preventDefault();

        const form = e.target;
        const id = form.dataset.id;

        const project = getCurrentProject();
        if (!project) return;

        const todo = project.todos.find(t => t.id === id);
        if (!todo) return;

        const formData = new FormData(form);

        todo.title = formData.get("title");
        todo.description = formData.get("description");
        todo.dueDate = formData.get("dueDate");
        todo.priority = formData.get("priority");

        todo.isEditing = false;

        renderTodos(project);
        renderUpcomingTodos(getAllTodos());
        saveAppState(getAppState());
    }
});

projectsContainer.addEventListener("click", (e) => {
    const target = e.target;
    const index = Number(target.dataset.index);
    if (isNaN(index)) return;

    if (target.tagName === "BUTTON") {
        deleteProject(index);
        renderProjects(getAppState());

        const currentProject = getCurrentProject();
        if (currentProject) renderTodos(currentProject);
        renderTodos(getCurrentProject());
    } else if (target.tagName === "SPAN") {
        setCurrentProject(index);
        const project = getCurrentProject();
        if (project) renderTodos(project);
    }
});

const project = getCurrentProject();
if (project) renderTodos(project);
renderUpcomingTodos(getAllTodos());
renderProjects(getAppState());
