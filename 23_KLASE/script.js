import { Auto } from "./auto.js";

let a1 = new Auto("Audi", "bela", true);
console.log(a1);
console.log(a1._marka); // vraca Audi
console.log(a1.marka); // ovo je parametar, vraca undefined

let a2 = new Auto("Opel", "crvena", false);
console.log(a2);

// Klasa je sablon, korisnicki tip
// Objekat je < instanca > (realizacija) klase = promenljiva neke klase

a1.sviraj();
a2.sviraj();

a1._marka = "Skoda";
console.log(a1);

a1._marka = "";
console.log(a1);

a1.marka = "Peugeot"; // U pozadini se poziva metoda set marka, a kao parametar se prosledjuje string Pezoa
console.log(a1);

a1.marka = "";
a1.boja = "zuta";
a1.imaKrov = false;
console.log(a1);
console.log(a1.marka + " " + a1.boja + " " + a1.imaKrov);
