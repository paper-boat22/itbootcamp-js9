let lista = document.querySelectorAll("li");
let ul = document.getElementById("uLista");
let inputUzmi = document.getElementById("uzmiInput");
let pocetak = document.getElementById("pocetak");

inputUzmi.addEventListener("keyup", e => {
    if(e.key === "Enter") {
        let inputUzmiValue = inputUzmi.value;
        if(inputUzmiValue != "") {
            if(pocetak.checked) {
            let li = document.createElement("li");
                ul.insertBefore(li, ul.firstChild);
                li.textContent += inputUzmiValue;
                inputUzmi.value = "";

            }
            else {
            let li = document.createElement("li");
                ul.appendChild(li);
                li.textContent += inputUzmiValue;
                inputUzmi.value = "";

            }
        }
    }
})

let input = document.getElementById("uzmiInput");
    input.addEventListener("keyup", e => {
        if(e.key === "Enter") {
            let inputUzmiValue = inputUzmi.value;
        if(inputUzmiValue != "") {
            let li = document.createElement("li");
            li.textContent += inputUzmiValue;
            ul.appendChild(li);
            inputUzmi.value = "";
        }
        let liDom = document.querySelectorAll("li");
        liDom.forEach(liDom => {
            liDom.addEventListener("click", () => {
                if(liDom.style.textDecoration == "line-through") {
                    liDom.style.textDecoration = "none";
                }
                else {
                    liDom.style.display = "none";
                }        
            });
        });
    }
});



lista.forEach(li => {
    li.addEventListener("click", () => {
        if(li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none";
        }
        else {
            li.style.display = "none";
        }        
    });
});




// let btnInput = document.getElementById("btn");
// let ul = document.getElementById("uLista");
// let inputUzmi = document.getElementById("uzmiInput");
// let btnInput = document.getElementById("btn");
//


// btnInput.addEventListener("click", () => {
//     let inputUzmiValue = inputUzmi.value;
//     if(inputUzmiValue != "") {
//         let li = document.createElement("li");
//         li.textContent += inputUzmiValue;
//         ul.appendChild(li);
//         inputUzmi.value = "";
//     }
//     let liDom = document.querySelectorAll("li");
//     liDom.forEach(liDom => {
//         liDom.addEventListener("click", () => {
//             if(liDom.style.textDecoration == "line-through") {
//                 liDom.style.textDecoration = "none";
//             }
//             else {
//                 liDom.style.display = "none";
//             }        
//         });
//     });
// });

// let pocetak = document.getElementById("pocetak");
// let span = document.getElementById("adding")

// pocetak.addEventListener("click", () => {
    
//     let inputUzmiValue = inputUzmi.value;
//     if(pocetak.checked) {
//         let li = document.createElement("li");
//         li.textContent += inputUzmiValue;
//         span.appendChild(li);
//         inputUzmi.value = "";
//     }
    
// });

// let kraj = document.getElementById("kraj");
// let spanKraj = document.getElementById("addingEnd");

// kraj.addEventListener("click", () => {
//     let inputUzmiValue = inputUzmi.value;
//     if(kraj.checked) {
//         let li = document.createElement("li");
//         li.textContent += inputUzmiValue;
//         spanKraj.appendChild(li);
//         inputUzmi.value = "";
//     }

//     let spanUkloni = document.getElementById("addingEnd");
//     spanUkloni.forEach(spanUkloni => {
//         spanUkloni.addEventListener("click", () => {
//             if(spanUkloni.style.textDecoration == "line-through") {
//                 spanUkloni.style.textDecoration = "none";
//             }
//             else {
//                 spanUkloni.style.display = "none";
//             }  
//         });
//     });
// });

////////////////////////////////////////
// LOCAL STORAGE
////////////////////////////////////////
// Smestanje  u lokalnu memoriju
localStorage.setItem("username", "Dusica");
// localStorage.setItem("name", "Stefan");

localStorage.setItem("city", "Nis");

// Update u lokalnoj memoriji
localStorage.setItem("username", "Jelena");
// Ukoliko key ("username" u ovom slucaju) postoji vec u local storage, onda vrsi update vrednosti za taj key
// Ukoliko key ne postoji u local storage onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"));
console.log(localStorage.getItem("username"));
console.log(localStorage.getItem("name"));
let u = localStorage.getItem("username");
console.log(u);

localStorage.setItem("year", 28);
let god = localStorage.getItem("year");
god++;
localStorage.setItem("year", god);
console.log(`Imam ${god} godina`);
