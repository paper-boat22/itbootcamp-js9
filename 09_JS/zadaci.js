let sati = 17;
let minuti = 42;
let minUkupno = sati * 60 + minuti;

console.log(minUkupno);

// Zadatak jedan

let sat = 18;
let minut = 16;
let odPonoci = sati * 60 + minuti;

console.log(odPonoci);

let doPonoci = 24 * 60 - odPonoci;
console.log(doPonoci);

// Zadatak dva

let minOdPonoci = 135;
let hours = Math.floor(minOdPonoci / 60);
let minutes = minOdPonoci % 60;
console.log(hours + ":" + minutes);

// Zadatak 2a
minutes = minOdPonoci % 60; // 95 % 60 = 35 (ostatak)
hours = (minOdPonoci - minutes) / 60; // (95 - 35) = 60 / 60 = 1
console.log(hours + ":" + minutes);

// Zadatak cetiri
let datum = new Date(); // datum je objekat koji sadrzi info o trenutnom datumu i vremenu
//let mesec = datum.getMonth() + 1;
//console.log(datum.getFullYear() + "/" + mesec);
let h = datum.getHours();
let m = datum.getMinutes();
console.log(h + ":" + m);
let mop = h * 60 + m;
console.log(mop);