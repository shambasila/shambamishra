document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
  
    taskForm.addEventListener('submit', function(event) {
      event.preventDefault();
      addTask(taskInput.value);
      taskInput.value = '';
    });
  
    loadTasks();
  
    function addTask(taskText, completed = false) {
      const li = document.createElement('li');
      li.className = 'task';
      li.classList.toggle('completed', completed);
  
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = completed;
      checkbox.addEventListener('change', function() {
        toggleTaskCompletion(li);
      });

      const span = document.createElement('span');
      span.textContent = taskText;

      const editButton = document.createElement('button');
      editButton.textContent = 'Edit';
      editButton.addEventListener('click', function() {
        editTask(li, span.textContent);
      });

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', function() {
        deleteTask(li);
      });
  
      li.appendChild(checkbox);
      li.appendChild(span);
      li.appendChild(editButton);
      li.appendChild(deleteButton);
  
      taskList.appendChild(li);
  
      saveTasks();
    }
  
    function editTask(li, currentText) {
      const newText = prompt('Edit task:', currentText);
      if (newText !== null) {
        li.querySelector('span').textContent = newText;
        saveTasks();
      }
    }
  
    function deleteTask(li) {
      if (confirm('Are you sure you want to delete this task?')) {
        taskList.removeChild(li);
        saveTasks();
      }
    }
  
    function toggleTaskCompletion(li) {
      li.classList.toggle('completed');
      saveTasks();
    }
  
    function saveTasks() {
      const tasks = [];
      const taskElements = document.querySelectorAll('.task');
      
      taskElements.forEach((taskElement) => {
        const task = {
          text: taskElement.querySelector('span').textContent,
          completed: taskElement.classList.contains('completed')
        };
        tasks.push(task);
      });
  
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  
    function loadTasks() {
      const storedTasks = localStorage.getItem('tasks');
      if (storedTasks) {
        const tasks = JSON.parse(storedTasks);
        tasks.forEach((task) => {
          addTask(task.text, task.completed);
        });
      }
    }
  });
  