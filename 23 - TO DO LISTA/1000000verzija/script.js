let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");
inputTask.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        let inputTaskValue = inputTask.value;
        let liNewTask = document.createElement("li");
        liNewTask.textContent += inputTaskValue;
        if(inputTaskValue != "") {
            let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
            let task = {
                value: inputTaskValue,
                position: "appendChild"
            }
            if(document.querySelector("input[value='gore']:checked")){
                task.position = "insertBefore";
                ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
            } else {
                task.position = "appendChild";
                ulTasks.appendChild(liNewTask);
            }
            // tasks.push(task);
            localStorage.setItem("tasks", JSON.stringify(tasks));
        }
        inputTask.value = "";
    }
    ulTasks.addEventListener("click", e =>{
        if(e.target.tagName == "LI"){
           e.target.remove();
        }
          });
});
window.addEventListener("load", () => {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    if(tasks.length>0){
        tasks.forEach((task) => {
            let liNewTask = document.createElement("li");
            liNewTask.textContent += task.value;
            if(task.position === "insertBefore") {
                ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
            } else {
                ulTasks.appendChild(liNewTask);
            }
        });
    }
});