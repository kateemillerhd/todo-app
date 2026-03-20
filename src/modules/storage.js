export function saveAppState(appState) {
    localStorage.setItem("todoApp", JSON.stringify(appState));
}

export function loadAppState() {
    const data = localStorage.getItem("todoApp");
    if (!data) return null;
    return JSON.parse(data);
}