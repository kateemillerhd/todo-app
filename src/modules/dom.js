export function renderTodos(project) {
    const todosContainer = document.getElementById("todos");
    todosContainer.innerHTML = "";

    if (!project) return;

    project.todos.forEach((todo) => {
        const div = document.createElement("div");

        if (todo.completed) {
            div.classList.add("completed");
        }

        let bgColor;
        switch (todo.priority) {
            case "high":
                bgColor = "#f28b82";
                break;
            case "medium":
                bgColor = "#fbbc04";
                break;
            default:
                bgColor = "#ccff90";
        }
        div.style.backgroundColor = bgColor;
        div.style.padding = "8px";
        div.style.marginBottom = "4px";
        div.style.borderRadius = "4px";

        if (todo.isEditing) {
            div.innerHTML = `
            <form class="edit-form" data-id="${todo.id}">
                <input type="text" name="title" value="${todo.title}" required />
                <input type="text" name="description" value="${todo.description}" />
                <input type="date" name="dueDate" value="${todo.dueDate}" />
                
                <select name="priority">
                    <option value="low" ${todo.priority === "low" ? "selected" : ""}>Low</option>
                    <option value="medium" ${todo.priority === "medium" ? "selected" : ""}>Medium</option>
                    <option value="high" ${todo.priority === "high" ? "selected" : ""}>High</option>
                </select>
                
                <button type="submit">Save</button>
                <button type="button" class="cancel-edit">Cancel</button>
            </form>
            `;
        } else {
            div.innerHTML = `
                <input type="checkbox" class="complete-checkbox" data-id="${todo.id}" ${todo.completed ? "checked" : ""}>
                
                <strong class="todo-title">${todo.title}</strong><br>

                <div class="todometa">
                    Due: ${todo.dueDate}<br>
                    Priority: ${todo.priority}<br>
                </div>
                
                <div class="todo-description" style="display:none;">
                    ${todo.description}
                </div>
            `;

            const editBtn = document.createElement("button");
            editBtn.textContent = "Edit";
            editBtn.dataset.id = todo.id;

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.dataset.id = todo.id;

            div.appendChild(editBtn);
            div.appendChild(deleteBtn);
        }  

        todosContainer.appendChild(div);
    });
}

export function renderProjects(appState) {
    const projectsContainer = document.getElementById("projects-list");
    projectsContainer.innerHTML = "";

    appState.projects.forEach((project, index) => {
        const div = document.createElement("div");
        div.dataset.index = index;
        div.id = "tasks";

        const nameSpan = document.createElement("span");
        nameSpan.textContent = project.name;
        nameSpan.dataset.index = index;
        nameSpan.style.cursor = "pointer";
        nameSpan.style.marginRight = "8px";

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete Project";
        deleteBtn.dataset.index = index;
        deleteBtn.style.marginLeft = "8px";
        deleteBtn.style.padding = "8px";

        div.appendChild(nameSpan);
        div.appendChild(deleteBtn);

        projectsContainer.appendChild(div);
    });
}

export function renderUpcomingTodos(todos) {
    const container = document.getElementById("calendar");
    container.innerHTML = "<h2>Upcoming Due Dates</h2>";

    const filtered = todos.filter(todo => todo.dueDate);

    filtered.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

    const upcoming = filtered.slice(0, 5);

    upcoming.forEach(todo => {
        const div = document.createElement("div");

        const today = new Date();
        const due = new Date(todo.dueDate);

        today.setHours(0, 0, 0, 0);
        due.setHours(0, 0, 0, 0);

        if (due < today) {
            div.style.color = "#F7775E";
        } else if (due.getTime() === today.getTime()) {
            div.style.color = "#E89910";
        } else {
            div.style.color = "#71E810";
        }

        div.innerHTML = `
            <strong>${todo.title}</strong><br>
            Due: ${todo.dueDate}
            `;

        div.style.marginBottom = "8px";
        div.style.padding = "6px";
        div.style.borderBottom = "1px solid #ccc";

        container.appendChild(div);

    });

    if (upcoming.length === 0) {
        container.innerHTML += "<p>No Upcoming Todos</p>";
    }
}