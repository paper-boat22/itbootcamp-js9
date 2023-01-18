import Film from "./filmovi.js";

let f1 = new Film("The Best Offer", "Djuzepe Tornatore", 2013, [9, 7, 9, 9 ,8]);
let f2 = new Film("Titanic", "James Cameron", 1997, [7, 10, 8, 6, 9, 10]);
let f3 = new Film("Psycho", "Alfred Hitchcock", 1760, [6, 4, 7, 5, 5, 2, 3]);

f1.stampaj();
f2.stampaj();
f3.stampaj();

let filmovi = [f1, f2, f3];

console.log(`Prosecna ocena ${f1.naslov} filma je ${f1.prosek()}`);


// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku
let vekFilmova = (niz, vek) => {
    let pocinjeVek = vek * 100 - 99;
    let zavrsavaVek = vek * 100;
    niz.forEach(film => {
        if(film.godinaIzdanja >= pocinjeVek && film.godinaIzdanja <= zavrsavaVek) {
            console.log(film.naslov);
        }
    });
}

vekFilmova(filmovi, 18);

// Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.
let prosecnaOcena = niz => {
    let sumaSvihOcena = 0;
    let brojOcena = 0;
    niz.forEach((f) => {
        let ocene = f.ocene;
        console.log(ocene);
        ocene.forEach(o => {
            sumaSvihOcena += o;
        });
        brojOcena += ocene.length;
    })
    return Math.floor(sumaSvihOcena / brojOcena);    
}
console.log(`Prosecna ocena svih filmova je ${prosecnaOcena(filmovi)}`);
