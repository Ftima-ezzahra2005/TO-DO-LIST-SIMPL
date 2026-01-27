let tasks = [];

function addTask() {
  const input = document.getElementById("taskInput");
  const text = input.value.trim();

  if (text === "") return;

  tasks.push(text);
  input.value = "";
  renderTasks();
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function renderTasks() {
  const container = document.getElementById("tasksContainer");
  const sidebarList = document.getElementById("taskListSidebar");

  container.innerHTML = "";
  sidebarList.innerHTML = "";

  tasks.forEach((task, index) => {
    const div = document.createElement("div");
    div.className = "task";

    div.innerHTML = `
      <span>${task}</span>
      <button onclick="deleteTask(${index})">X</button>
    `;

    container.appendChild(div);

    const li = document.createElement("li");
    li.textContent = "- " + task;
    sidebarList.appendChild(li);
  });

  document.getElementById("totalTasks").textContent = tasks.length;
}
