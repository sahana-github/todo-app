let inputbox = document.getElementById("todoInput");
let Saar = document.getElementById("Saar");
let todoButton = document.getElementById("todoButton");
let Todos = document.getElementsByClassName("lists")[0];


function Todosaver(todo, Saar) {
  if (todo == "") return;
  console.log(todo);
  let existingtodo = JSON.parse(localStorage.getItem("Todos"));
  if (existingtodo == null) {
    existingtodo = [];
  }
  existingtodo.push({todo : todo, Saar : Saar});
  localStorage.setItem("Todos", JSON.stringify(existingtodo));
  reloader();
  inputbox.value = "";
}

function reloader() {
  let existingtodo = JSON.parse(localStorage.getItem("Todos"));
  Todos.innerHTML = "";
  for (todo of existingtodo) { 
  // console.log(existingtodo[todo])
    
    Todos.innerHTML += `<div class="list">
                        <input type="radio" name="" id="">
                        <h3>${existingtodo[todo]["todo"]}</h3>
                        <p>${existingtodo[todo]["Saar"]}</p>
                        <span>Del</span>
                        </div>`;
  }
}

function deleter() {
    
  localStorage.removeItem("Todos");
  reloader()
}
