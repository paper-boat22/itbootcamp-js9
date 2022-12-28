let cars = ["Toyota", "BMW", "Volvo"];
console.log(cars);
console.log(cars[0]);
console.log(cars[2]);
console.log(cars[3]);
cars[1] = "Peugeot";
console.log(cars);

cars[1] = cars[1] + " 208";
console.log(cars);

let razno = [15, -3.5, "hello", true, [1, 2, 3]];
console.log(razno);

// ISPIS ELEMENATA NIZA CARS
for(let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

// Pristup elementima niza razno
for(let i = 0; i < razno.length; i++) {
    console.log(razno[i]);
}
let unutrasnjiNiz = razno[4];
for(let i = 0; i < unutrasnjiNiz.length; i++) {
    console.log(unutrasnjiNiz[i]);
}

for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

razno[4][1] = 5;
for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

// Uvecana vrednost unutrasnjeg niza za 10%
for(let i = 0; i < razno[4].length; i++) {
    razno[4][i] = razno[4][i] * 1.1;
}
for(let i = 0; i < razno[4].length; i++) {
    console.log(razno[4][i]);
}

///////////////////////

let brojevi = [8, 4, -2, 0, 1, 0];
let brojevi2 = [10, -5, 0, -3];

// Zadatak 2
let sumaElem = niz => {
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        zbir += niz[i];
    }
    return zbir;
}
console.log(sumaElem(brojevi));
console.log(sumaElem(brojevi2));

// Zadatak 3
let proizvodElem = niz => {
    let proizvod = 1;
    for(let i = 0; i < niz.length; i++) {
        proizvod *= niz[i];
    }
    return proizvod;
}
let brojevi3 = [5, 1, 2];
console.log(proizvodElem(brojevi3));

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
let brojevi4 = [2, 22, 4, 4, 7, 12];
let srednjaVrednost = niz => {
    let sum = 0;
    let broj_brojeva = 0;
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i];
        broj_brojeva++;
    } 
    return sum / broj_brojeva;
}
console.log(srednjaVrednost(brojevi4));

// druga varijanta 4og
let srVrednost2 = niz => {
    let zbir = sumaElem(niz);
    let br = niz.length;
    return zbir / br;
}
console.log(srednjaVrednost(brojevi4));

// treca varijanta 4og
let srednjaVrednost1 = niz => sumaElem(niz) / niz.length;
console.log(srednjaVrednost1(brojevi4));

// 4a. naci srednju vrednost parnih brojeva niza
let srednjaVrednostParnih = niz => {
    let sum = 0;
    let broj_brojeva = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
        sum += niz[i];
        broj_brojeva++;
       }
    }
    return sum / broj_brojeva;
}
console.log(srednjaVrednostParnih(brojevi4));


// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let brojevi5 = [1, -5, 33, 7, 11];
//console.log(Math.max(...brojevi5));

let maxNiza = niz => {
    let max = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] > max) {
            max = niz[i];
        }
    }
    return max;
}
console.log(maxNiza(brojevi5));

let br = [8, 11, 10, 11, 4];
console.log(maxNiza(br));

// 6. 
//console.log(Math.min(...brojevi5));
let minNiza = niz => {
    let min = niz[0];
    for(let i = 1; i < niz.length; i++) {
        if(niz[i] < min) {
            min = niz[i];
        }
    }
    return min;
}
console.log(minNiza(br));


// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
// Ova funkcija vraca indeks poslednjeg maksimuma!
//let indexMax = brojevi5.indexOf(maxNiza(brojevi5));
//console.log(indexMax);
let indMaxNiza = niz => {
    let max = maxNiza(niz);
    let indeks = -1;
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            indeks = i;
        }
    }
    return indeks;
}
let elementi = [15, 13, 15, 10, 15];
console.log(indMaxNiza(elementi));

// Ova funkcija vraca indeks prvog maksimuma
let indMaxNiza2 = niz => {
    let max = maxNiza(niz);
    for(let i = 0; i < niz.length; i++) {
        if(max == niz[i]) {
            return i;
        }
    }
}
console.log(indMaxNiza2(elementi));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
//let indexMin = br.indexOf(minNiza(br));
//console.log(indexMin);

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
let broj1 = [1, 12, -4, 17, -2, 16];
let brElem = 0;
let brojeElemenata = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > srednjaVrednost(niz)) {
            brElem++;
//            console.log(srednjaVrednost(niz));
        }
    }
    return brElem;
}
console.log(brojeElemenata(broj1));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let zbirPozElem = niz => {
    let brElem = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] > 0) {
            brElem += niz[i];
        }
    }
    return brElem;
}
console.log(zbirPozElem(broj1));

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brojParnih = niz => {
   let brElem = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0) {
            brElem++;
        }
    }
    return brElem;
}
console.log(brojParnih(broj1));

// 12.  Odrediti broj parnih elemenata sa neparnim indeksom.
let broj2 = [1, 12, -4, 16, -2];
let paranBrNeparanInd = niz => {
    let br = 0;
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 == 0 && i % 2 != 0) {
            br++;
        }
    }
    return br;
}
console.log(paranBrNeparanInd(broj2));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemParanInd = niz => {
    let sumParnihEl = 0;
    for(let i = 0; i < niz.length; i++) {
        if(i % 2 == 0) {
            sumParnihEl += niz[i];
        }
    }
    return sumParnihEl;
}
let broj22 = [1, 4, 6, -3, 2, -7, -22];
console.log(sumaElemParanInd(broj22));

// 14. Promeniti znak svakom elementu celobrojnog niza.
let promeniZnak = niz => {
    for(let i = 0; i < niz.length; i++) {
        niz[i] = niz[i] * (-1);
    }
    return niz;
}
console.log(promeniZnak(broj22));

// 15.  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
let promeniZnak1 = niz => {
    for(let i = 0; i < niz.length; i++) {
        if(niz[i] % 2 != 0 && i % 2 == 0) {
           niz[i] = niz[i] * (-1);
        }
    }
    return niz;
}
let broj23 = [1, 2, -3, -4, 5, 6];
console.log(promeniZnak1(broj23));

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.

