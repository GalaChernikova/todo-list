const todoList = document.querySelector("#todo-list"); //find list of tasks
const todoForm = document.querySelector("#todo-form"); //find input & button form
const todoInput = document.querySelector("#text-input"); //find input
const submitBtn = document.querySelector('#submit') //find submit button


todoForm.addEventListener("submit", formHandler); //change form state on submit

function formHandler(event) {
  //recieve event
  event.preventDefault(); //prevent refreshing the page

  //get text from input
  const todoText = todoInput.value;

  //add new task
  const newTask = document.createElement("li"); //create <li>
  newTask.innerText = todoText; //get text from input
  todoList.append(newTask); //add new task in todo-list
  todoInput.value = ''; //clear input
  todoInput.focus(); // add focus on input

  //delete task
  const deleteBtn = document.createElement("button"); //create <button>
  deleteBtn.setAttribute("role", "button"); //set role='button'
  deleteBtn.setAttribute(
    "style",
    "float:right; border:none; background-color:#B9D4FF; border-radius:10px; padding:10px;"
  ); //add button style
  deleteBtn.innerText = "done"; //add inner text
  newTask.append(deleteBtn); //add button when new task is in todo-list
  deleteBtn.addEventListener("click", function () {
    this.closest("li").remove(); //delete new task
  });
}

function submitTask() {
  //disable button when input is empty
  if (todoInput.value === '') {
    submitBtn.disabled = true;
  } else {
    submitBtn.disabled = false;
  }
}
