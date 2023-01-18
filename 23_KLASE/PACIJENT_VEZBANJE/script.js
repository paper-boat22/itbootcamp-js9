import Pacijent from "./pacijent.js";

let p1 = new Pacijent("Milica", 165, 43);
let p2 = new Pacijent("Goran", 202, 105);
let p3 = new Pacijent("Milan", 169, 70);
let p4 = new Pacijent("Nensi", 173, 70);

let pacijenti = [p1, p2, p3, p4];

// Ispiati podatke o pacijentu sa najmanjom tezinom
let btnMinTezina = document.getElementById("racunajMinTezinu");
btnMinTezina.addEventListener("click", () => {
    let minPac = pacijenti[0];
    pacijenti.forEach( p => {
        if(p.tezina < minPac.tezina) {
            minPac = p;
        }
    });
    minPac.stampaj();
    let pMinTezina = document.getElementById("minTezina");
    pMinTezina.innerHTML = minPac.stampajListu();
});


let btnMaxBmi = document.getElementById("racunajMaxBmi");
btnMaxBmi.addEventListener("click", () => {
    let maxBmi = pacijenti[0];
    pacijenti.forEach( p => {
        if(p.bmi() > maxBmi.bmi()) {
            maxBmi = p;
        }
    });
    maxBmi.stampaj();
    let pMaxBmi = document.getElementById("maxBmi");
    pMaxBmi.innerHTML = maxBmi.stampajListu();
});


let btnA = document.getElementById("sadrziA");
let ppacijenti = document.getElementById("slovo")
btnA.addEventListener("click",()=>{
for(let i = 0; i < pacijenti.length; i++){
    if(pacijenti[i].ime.includes("A") || pacijenti[i].ime.includes("a")){
     pacijenti[i].stampaj();
   ppacijenti.innerHTML += pacijenti[i].stampajListu();
    }
}
});

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
    let sumaVisina = 0;
    let brPac = niz.length;
    niz.forEach(p => {
        sumaVisina += p.visina;
    });
    return sumaVisina / brPac;
}
console.log(srednjaVisina(pacijenti));

let divAvgVisina = document.querySelector("#avgVisina");
divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je ${srednjaVisina(pacijenti)}cm;`