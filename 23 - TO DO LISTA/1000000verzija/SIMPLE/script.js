var input = document.getElementById("input");
var btn = document.getElementById("btn");
var toDoList = document.getElementById("todo-list");
// var reset = document.getElementById("reset");
var index = document.getElementsByClassName("index");
// var reset = document.getElementById("reset");
var list = [];

btn.addEventListener("click", function() {
  if (input.value != "") {
    list.push(input.value);

    toDoList.innerHTML += '<li class="index"  onclick="done(this.id)" id="' + (list.length - 1) +'">' +list[list.length - 1] +"</li>";

    input.value = "";

    localStorage["tasks"] = JSON.stringify(list);

    //localStorage.removeItem("tasks");
  }
});

// function done(id) {
//   index[id].classList.toggle("checked");
// }

input.addEventListener("keydown", function() {
  if (event.keyCode === 13) {
    btn.click();
  }
});

if ("tasks" in localStorage) {
  var retrievedTasks = localStorage.getItem("tasks");

  list = JSON.parse(retrievedTasks);

  for (var i = 0; i < list.length; i++) {
    toDoList.innerHTML += '<li class="index"  onclick="done(this.id)" id="' + i + '">' + list[i] +
      "</li>";
  }
}


// reset.addEventListener("click", function(){
//   if ("tasks" in localStorage) {
// 			localStorage.removeItem("tasks");
// 			location.reload(true);
//   }
// });