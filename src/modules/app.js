import { createProject } from "./project";
import { loadAppState, saveAppState } from "./storage";

const appState = {
    projects: [],
    currentProjectIndex: 0,
};

export function initApp() {

    const loaded = loadAppState();
    if (loaded) {
        appState.projects = loaded.projects;
        appState.currentProjectIndex = loaded.currentProjectIndex;
    } else {
        const defaultProject = createProject("Default");
        appState.projects.push(defaultProject);
    }
}

export function getCurrentProject() {
    if (appState.projects.length === 0) return null;
    return appState.projects[appState.currentProjectIndex];
}

export function getAppState() {
    return appState;
}

export function addProject(name) {
    const project = createProject(name);
    appState.projects.push(project);
    saveAppState(appState);
}

export function setCurrentProject(index) {
    appState.currentProjectIndex = index;
    saveAppState(appState);
}

export function deleteProject(index) {
    appState.projects.splice(index, 1);

    if (appState.currentProjectIndex >= appState.projects.length) {
        appState.currentProjectIndex = appState.projects.length - 1;
    }
    saveAppState(appState);
}

export function getAllTodos() {
    return appState.projects.flatMap(project => project.todos);
}