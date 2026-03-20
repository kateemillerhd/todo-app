export function createProject(name) {
    return {
        name, 
        todos: [],
    };
}

export function addTodoToProject(project, todo) {
    project.todos.push(todo);
}

export function deleteTodoFromProject(project, todoId) {
    project.todos = project.todos.filter(todo => todo.id !== todoId);
}
