// Funkcija 1: niz(parametar) => {for petljom prodjemo kroz elemente niza i svaki ispisemo u konzoli}
// Funkcija 2: niz => {for petljom prolazimo kroz sve elemente niza i svaki pisemo u div element}
// Moze li ovako?
// Funkcija: (niz, nacinIspisa) => { for petljom prodjemo kroz sve elemente niza i svaki ispisemo na zadati nacin}

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById("container");
    div.innerHTML = poruka;
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += (niz[i] + " ");
    }
    cb(poruka);
}

ispisKonzola("bla bla");
ispisStranica("bla bla bla");

let a = [6, 13, -5, 11, 1];
let b = ["pera", "mika", "laza"];
ispisNiza(a, ispisStranica);
ispisNiza(a, ispisKonzola);
ispisNiza(b, ispisKonzola);

a.forEach(ispisKonzola);
// forEach petlja je metoda koja za svaki element niza poziva callback funkciju, a kao parametar te callback funkcije prosledjuje bas taj element niza. Konkretno 32. linija koda za niz a poziva sledece: 
// pozove ispisKonzola za broj (6); // 6
// pozove ispisKonzolla (13); // 13
// pozove ispisKonzolla (-5); // -5
// pozove ispisKonzolla (11); // 11
// pozove ispisKonzolla (1); // 1

b.forEach(ispisKonzola);

a.forEach(function(element) {
    console.log(element);
});

//forEach ce za svaki element niza a da ppozove anonimnu funkciju i prosledice svaki put po jedan element niza.

a.forEach(elem => {
    console.log(elem);
});
//poziva se arrow funkcija sa parametrom a[1] (elem postaje a[1])

