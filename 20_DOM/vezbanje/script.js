let e1 = document.getElementById("prvi");
    console.log(e1);

let e2 = document.querySelector("div.error");
    console.log(e2);

let e3 = document.querySelector("tr:last-child");
    console.log(e3);

let e4 = document.getElementsByTagName("a");
    console.log(e4);
    for(let i = 0; i < e4.length; i++) {
        console.log(e4[i]);
    }

let e5 = document.getElementsByTagName("img");
    console.log(e5);
    for(let i = 0; i < e5.length; i++) {
        console.log(e5[i]);
    }

/*
t1.innerHTML += "Novi tekst paragrafa sa ID-jem <span class ='bold'>p2</span>";

for(let i = 0; i < el2.length; i++) {
    el2[i].innerHTML = "Promena teksta u elementu sa klasom <span class ='bold'>par</span>"
}

let link = document.querySelector("a");
link.href = "https://www.google.com";
link.target = "_blank";
link.id = "link";


// link.style.color = "red";
// link.style.border = "2px solid blue";
// link.style.fontSize = "24px";

// link.style = "color: red; border: 2px solid blue; font-size:24px";
link.setAttribute("style", "color: red; border: 2px solid blue; font-size:24px;")*/

let par = document.getElementsByTagName("p");
for(let i = 0; i < par.length; i++) {
    par[i].innerHTML += "VAZNO!!!";
}

let divovi = document.querySelectorAll("div.error");
for(let i = 0; i < divovi.length; i++) {
    divovi[i].innerHTML += "<h1>Greska!</h1>";
}

let n = document.getElementsByTagName("p");
for(let i = 0; i < n.length; i++) {
    n[i].innerHTML += (i + 1) ** 2;
}

let slike = document.querySelectorAll("img");
for(let i = 0; i < slike.length; i++) {
slike[i].alt = "neki alternativni tekst";
}

let ljubicasto = document.getElementsByTagName("p");
for(let i = 0; i < ljubicasto.length; i++) {
    ljubicasto[i].style.color = "purple";
}

for(let i = 0; i < ljubicasto.length; i++) {
    if(i % 2 == 0) {
        ljubicasto[i].style.backgroundColor = "green";
    }
    else {
        ljubicasto[i].style.backgroundColor = "green";
    }
}

// let linkovi = document.getElementsByTagName("a");
// for(let i = 0; i < linkovi.length;i++){
// linkovi[i].style.padding = "5px";
//  linkovi[i].style.fontSize = "18px";
//  linkovi[i].style.textDecoration = "none";
//     if(i % 2 == 0){
//         linkovi[i].style = "background-color: green; color: purple"
//     }
//     else {
//         linkovi[i].style = "background-color: blue; color: white"
//     }
// }


// // for(let i = 0; i < linkovi.length; i++) {
// //     linkovi[i].target = "_blank";
// // }



