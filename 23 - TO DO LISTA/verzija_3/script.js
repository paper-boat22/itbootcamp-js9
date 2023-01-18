let btnDodaj =  document.getElementById('submit');
let ulTasks = document.querySelector("ul");
let inputTask = document.getElementById("task");
btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja
    if(inputTaskValue != "") {
        let liNewTask = document.createElement("li"); // Kreiram novi <li>
        liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
        ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
        inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
    }
})
ulTasks.addEventListener("click", e =>{
  //console.log("kliknuto na ul")
  //  console.log(e);
  //  console.log(e.target);
  //  console.log(e.target.tagName);
if(e.target.tagName == "LI"){
    console.log("Klikknuto na Li");
    if(e.target.style.textDecoration == 'line-through'){
        e.target.style.textDecoration = 'none';
   }
    else{
        e.target.style.textDecoration = 'line-through';
    }
}
});

btnDodaj.addEventListener("click", () => {
    let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja
    if(inputTaskValue != "") {
        if(document.querySelector("input[value='gore']:checked")){
            let liNewTask = document.createElement("li"); // Kreiram novi <li>
            liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
            ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
            // ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
            inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
        }
        else{
            let liNewTask = document.createElement("li"); // Kreiram novi <li>
            liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
            ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
            inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
        }
    }
    let liklick = document.querySelectorAll("li");
    liklick.forEach(list=>{
        list.addEventListener("click", ()=>{
            list.remove()
            // list.style.display = "none";
        })
    })
})
//// INPUT ENTER ////
// btnDodaj.remove();
inputTask.addEventListener("keyup", (event)=>{
    if(event.code === "Enter"){
        let inputTaskValue = inputTask.value; // Uzimam vrednost iz input polja
        if(inputTaskValue != "") {
            if(document.querySelector("input[value='gore']:checked")){
                let liNewTask = document.createElement("li"); // Kreiram novi <li>
                liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
                ulTasks.insertBefore(liNewTask, ulTasks.firstChild);
                // ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
                inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
            }
            else{
                let liNewTask = document.createElement("li"); // Kreiram novi <li>
                liNewTask.textContent += inputTaskValue; // Upisujem u <li> tekst
                ulTasks.appendChild(liNewTask); // Dodajemo <li> čvor na kraj <ul>
                inputTask.value = ""; /// Isprazni input polje nakon dodavanja elementa u <ul>
            }
        }
    }
    let liklick = document.querySelectorAll("li");
    liklick.forEach(list=>{
        list.addEventListener("click", ()=>{
            list.remove()
            // list.style.display = "none";
        })
    })
})
