var taskIndex = 0; // Initialize task index

document.getElementById('addTaskBtn').addEventListener('click', addTask);

document.getElementById('taskInput').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    addTask();
  }
});

function addTask() {
  var taskInput = document.getElementById('taskInput');
  var taskText = taskInput.value.trim();
  if (taskText !== '') {
    var taskList = document.getElementById('taskList');
    var listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.innerHTML = `
      <span>${++taskIndex}. ${taskText}</span>
      <div>
        <input type="checkbox" class="form-check-input me-2" onchange="toggleComplete(this)">
        <button class="btn btn-danger btn-sm" onclick="deleteTask(this)">Delete</button>
      </div>
    `;
    taskList.appendChild(listItem);
    taskInput.value = '';
  } else {
    alert("Please give any task name before adding a task.");
  }
}

function toggleComplete(checkbox) {
  var listItem = checkbox.closest('.list-group-item');
  if (checkbox.checked) {
    listItem.classList.add('list-group-item-success');
  } else {
    listItem.classList.remove('list-group-item-success');
  }
}

function deleteTask(btn) {
  var listItem = btn.closest('.list-group-item');
  listItem.remove();
  updateTaskIndex();
}

function updateTaskIndex() {
  var taskItems = document.querySelectorAll('.list-group-item');
  taskIndex = 0;
  taskItems.forEach(function(item) {
    item.querySelector('span').textContent = `${++taskIndex}. ${item.querySelector('span').textContent.split('. ')[1]}`;
  });
}
