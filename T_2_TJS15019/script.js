// // Zadatak 1
// ➢ Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
// vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je
// ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u
// konzoli.
// Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst
// „Radno vreme još uvek nije počelo“.
// Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst
// „Radno vreme je već završeno“.

let date = new Date();
let sati = date.getHours();
let minuti = date.getMinutes();
let krajRadnogVremena = 17;
let krajRadnogVremenaMinuti = krajRadnogVremena * 60;
let ostaloDoKrajaSati = Math.floor((krajRadnogVremenaMinuti - (sati * 60)) / 60) - 1;
console.log(`Do kraja radnog vremena ostalo je ${ostaloDoKrajaSati} sata i ${60 - minuti} minuta.`);

if(sati < 9) {
    console.log(`Radno vreme još uvek nije počelo`);
} 
else if(sati > 17) {
    console.log(`Radno vreme je već završeno`);
}

// // Zadatak 2
// Prilikom transporta buketa cveća u drugi grad, potrebno je platiti
// poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće
// sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na
// cenu izračunate poštarine po sledećoj tarifi:
// ➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na
// pošiljku preko 2kg pošta daje popust od 10%.
// ➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika
// je cena poštarine bez popusta i sa popustom.
// Ispis treba da bude u formatu:
// Cena bez popusta je _____ dinara.
// Cena sa popustom je _____ dinara.

let cenaPostarine = 5;
let grama = 2500;
let cenaUgramima = grama * 5;
let grKg = grama / 1000;
let popust5 = cenaUgramima * 5 / 100;
let popust5ukupno = cenaUgramima - popust5;
let popust10 = cenaUgramima * 10 / 100;
let popust10ukupno = cenaUgramima - popust10;
console.log(`Cena bez popusta je ${cenaUgramima} dinara.`)
if(grKg > 1 && grKg < 2) {
    console.log(`Cena sa popustom je ${popust5ukupno} dinara`);
}
else if(grKg > 2) {
    console.log(`Cena sa popustom je ${popust10ukupno} dinara`);
}


// // 4. Zadatak 4
// ➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve
//     n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m
//     odredite sami.
//     U konzoli ispisati:
//     ● U prvom redu ispisati sumu
//     ● U drugom redu ispisati broj brojeva
//     ● U trećem redu ispisati proizvod sume i broja brojeva

let n = 7;
let m = 35;
let sum = 0;
let br_brojeva = 0;
for(i = n; i <= m; i++) {
    if(i % 7 == 0 && i % 2 !== 0) {
        sum += i;
        br_brojeva ++;
    }
    
}

console.log(`Suma je ${sum}.`);
console.log(`Broj brojeva je ${br_brojeva}.`);
console.log(`Proizvod sume i broja brojeva je ${sum * br_brojeva}.`)


// // Zadatak 5
// ➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja
// brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i
// m).
// ➢ Rezultat računanja ispisati u konzoli.

n = 3;
m = 13;
sum = 0;
br_brojeva = 0;
for(i = n; i <= m; i++) {
    if(i % 3 == 0) {
        sum += i;
    }
    if(i % 10 == 3) {
        br_brojeva++;
    }
}
console.log(sum);
console.log(br_brojeva);
console.log(sum - br_brojeva);

// // Zadatak 3
//➢ Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža
// koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli
// ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki
// kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u
// radnji.
// ➢ Primer 1:
// ○ Broj ruža u cvećari 101
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po
// 5 ruža).
// ➢ Primer 2:
// ○ Broj ruža u cvećari 100
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po
// 4 ruže).

let brojRuza = 45;
let brojKupaca = 22;
let ruze = Math.floor(brojRuza / brojKupaca);
let zaSve = brojRuza - (brojKupaca * ruze);

let zaSvakogKupca = brojKupaca * ruze + brojKupaca;
let dokupiti = zaSvakogKupca - brojRuza;
if(zaSve % 10 == 0) {
    console.log(`Cvecarka treba da dokupi ${zaSve} ruza`);
}
else {
    console.log(`Cvecarka treba da dokupi ${dokupiti} ruzu.`);
}