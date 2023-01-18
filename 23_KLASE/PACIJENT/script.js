import Pacijent from "./pacijenti.js";

let p1 = new Pacijent("Milica", 158, 53);
let p2 = new Pacijent("Marko", 185, 90);
let p3 = new Pacijent("Marija", 170, 65);

p1.stampaj();
p2.stampaj();
p3.stampaj();

let pacijenti = [p1, p2, p3];

// Ispisati podatke o pacijentu sa najmanjom težinom.
let min = pacijenti[0];
pacijenti.forEach(p => {
    if(p.tezina < min.tezina) {
        min = p;
    }
});
min.stampaj();


// Ispisati podatke o pacijentu sa najvećim bmi vrednošću.
let btnMax = pacijenti[0];
pacijenti.forEach(p => {
    if(p.bmi() > btnMax.bmi()) {
        btnMax = p;
    }
});
btnMax.stampaj();


// Ispisati sve pacijente čije ime sadrži slovo A.
for(let i = 0; i < pacijenti.length; i++) {
    if(pacijenti[i].ime.includes("a") || pacijenti[i].ime.includes("A")) {
        pacijenti[i].stampaj();
    }
}

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.
let srednjaVisina = niz => {
    let sumaVisina = 0;
    let brPac = niz.length;
    niz.forEach(v => {
        sumaVisina += v.visina;
    });
    return sumaVisina / brPac;
}
console.log(srednjaVisina(pacijenti));