const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

//add task
addBtn.addEventListener('click', () => {
  const task = taskInput.value.trim();
  if (task !== "") {
    addTask(task);
    taskInput.value = "";
  }
});

//add on "Enter" key
taskInput.addEventListener('keypress', (e) => {
  if (e.key === "Enter") {
    addBtn.click();
  }
});

//create and append task
function addTask(text) {
  const li = document.createElement('li');
  li.className = 'task-item';

  const span = document.createElement('span');
  span.className = 'task-text';
  span.textContent = text;

  //mark button 
  const markBtn = document.createElement('button');
  markBtn.className = 'mark-btn';
  markBtn.textContent = '✔'; //checkmark icon
  markBtn.title = "Mark as completed";

  markBtn.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  //edit button 
  const editBtn = document.createElement('button');
  editBtn.className = 'edit-btn';
  editBtn.textContent = '✎'; //pencil icon
  editBtn.title ="Edit";

  editBtn.addEventListener('click', () => {
    let newText = prompt("Edit your task:", span.textContent);
    if (newText && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  //delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✕'; //cross icon
  deleteBtn.title = "Delete";

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });

  //add element to task item
  li.appendChild(span);
  li.appendChild(markBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  //add task item 
  taskList.appendChild(li);
}