// Funkcija 1 - prihvata niz kao parametar: niz => {for petljom prodjemo sve elemente u nizu i svaki ispisemo u konzoli}
// funkcija 2 - niz => {for petlja da prodjemo kroz sve elemente niza i svaki ispisemo u div element}

// Funkcija: (niz, nacin ispisa(-callback funkcija-)) => {for petljom prodjemo kroz sve elemente niza i svaki ispisemo na zadati nacin}

function ispisKonzola(poruka) {
    console.log(poruka);
}

function ispisStranica(poruka) {
    let div = document.getElementById('container');
    div.innerHTML = poruka;
}

function ispisNiza(niz, cb) {
    let poruka = "";
    for(let i = 0; i < niz.length; i++) {
        poruka += niz[i] + " "; // prazan string da bi posle svake iteracije i ispisa dosao razmak
    }
    cb(poruka);
}

let a = [1, 9, 5, -7, 3];
ispisNiza(a, ispisKonzola);
ispisNiza(a, ispisStranica);

a.forEach(ispisKonzola);

a.forEach(function(element) {
    console.log(element);
});

a.forEach(elem => {
    console.log(elem);
});

///////////////////////////////////////////////

// 1. Ispisati sve elemente niza od 5 stringova.
let str = ["mama", "tata", "brat", "sestra"];

str.forEach(stringovi => {
    console.log(stringovi);
});

// 2. Odrediti zbir elemenata celobrojnog niza.
let brojevi = [1, 2, 3, 4, 5, 10];
let zbir = 0;
brojevi.forEach(zbirNiza => {
    zbir += zbirNiza;
});
console.log(zbir);

// 3. Odrediti proizvod elemenata celobrojnog niza.
let proizvod = 1;
brojevi.forEach(proizvodNiza => {
    proizvod *= proizvodNiza;
});
console.log(proizvod);

// 4. Odrediti srednju vrednost elemenata celobrojnog niza.
zbir = 0;
br_brojeva = 0;
let arsr = 0;
brojevi.forEach(srednjaVr => {
    zbir += srednjaVr;
    br_brojeva++;
    arsr = zbir / br_brojeva;
});
console.log(arsr);

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVred = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}
console.log(maxVred(brojevi));

// 6. Odrediti minimalnu vrednost u celobrojnom nizu.
let minVred = niz => {
    let min = niz[0];
    niz.forEach(minEl => {
        if(minEl < min) {
            min = minEl;
        }
    });
    return min;
}
console.log(minVred(brojevi));

// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaxVr = niz => {
    let max = niz[0];
    let idx = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            idx = i;
        }
    });
    return idx;
}
console.log(indexMaxVr(brojevi));

let indeksMaks = niz => {
    let max = niz[0];
    let indeks = 0;
    niz.forEach((el, i) => {
        if(el > max) {
            max = el;
            indeks = i;
        }
    });
    return indeks;
}
console.log(indeksMaks(brojevi));

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
let indeksMin = niz => {
    let min = niz[0];
    let indeks = 0;
    niz.forEach((el, i) => {
        if(el < min) {
            min = el;
            indeks = i;
        }
    });
    return indeks;
}
console.log(indeksMin(brojevi));

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
// srednjaVrednost(brojevi);
// let brElem = 0;
// let brElemenata = niz => {
//     for(let i = 0; i < brojevi.length; i++) {
//         if(niz[i] > srednjaVrednost(brojevi)) {
//             brElem++;
//         }
//     }
//     return brElem;
// }
// console.log(brElemenata(brojevi));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let brojevi1 = [-1, 2, -3, 3, 4];
let zbirPoz = niz => {
    let zbir = 0;
    niz.forEach(el => {
        if(el > 0) {
            zbir += el;
        }
    });
    return zbir;
}
console.log(zbirPoz(brojevi1));

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = niz => {
    let brPr = 0;
    niz.forEach(el => {
        if(el % 2 == 0) {
            brPr++;
        }
    });
    return brPr;
}
console.log(brParnih(brojevi1));

// 12.  Odrediti broj parnih elemenata sa neparnim indeksom.
let brojevi2 = [1, 2, 3, 4, -5, -6, 7, 8];
let brParnihNeparIndex = niz => {
    let brNepInd = 0;
    niz.forEach((el, i) => {
        if(el % 2 == 0 && i % 2 != 0) {
            brNepInd++;
        }
    }); 
    return brNepInd;
}
console.log(brParnihNeparIndex(brojevi2));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
let sumaElemenataParIndex = niz => {
    let sum = 0;
    niz.forEach((el, i) => {
        if(i % 2 == 0) {
            sum += el;
        }
    });
    return sum;
}
console.log(sumaElemenataParIndex(brojevi2));

// 14. Promeniti znak svakom elementu celobrojnog niza.
// let promeniZnak = niz => {
//     niz.forEach(el => {
//         el * (-1);
//     });
//     return niz;
// }
// console.log(promeniZnak(brojevi2));

// 15.  Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.

// 16. 

// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let zivotinje = ["mis", "slon", "zirafa", "patka", "anakonda"];
let duzineSvihStr = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzineSvihStr(zivotinje);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
let maxRec = niz => {
    let max = 0;
    niz.forEach(el => {
        if(el.length > max) {
            max = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el => {
        if(el.length == max && maxStr == undefined){
            maxStr = el;
        }
});
return maxStr;
}
console.log(maxRec(zivotinje));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let prosecnaDuzina = niz => {
    let duz = 0;
    niz.forEach(el => {
        duz += el.length;
    });
    return duz / niz.length;
}

let brojNatprosecnoDugih = niz => {
    let duz = prosecnaDuzina(niz);
    let br = 0;
    niz.forEach(el => {
        if(el.length > duz) {
            br++;
        }
    });
    return br;
}

console.log(prosecnaDuzina(zivotinje));
console.log(brojNatprosecnoDugih(zivotinje));

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
let brojSadrziA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el.includes("a") || el.includes("A")) {
            br++;
        }
    });
    return br;
}   
console.log(brojSadrziA(zivotinje));

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
let sadrziPrvoA = niz => {
    let brElem = 0;
    niz.forEach(el => {
        if(el[0] == "A" || el[0] == "a") {
            brElem++;
        }
    });
    return brElem;
}
console.log(sadrziPrvoA(zivotinje));
//////////////////////////////////////////////////////////////////////
// OBJEKTI
// 1. Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).
// 2. Napisati metode koje:
// Određuje i vraća prosečnu temperaturu izmerenu tog dana.
// Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
// Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
// Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
// Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
// Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
let dan = {
    datum: "2022/12/17",
    kisa: false,
    sunce: true,
    oblacno: false,
    temperatura: [-2, 2, 5, 7, 9, 12, 10, 8, 5, 0],
    prosecnaTemp: function() {
        let sum = 0;
        let br_brojeva = 0;
        let arsr = 0;
        this.temperatura.forEach(temperatura => {
            sum += temperatura;
            br_brojeva++;
            arsr = sum / br_brojeva;
        });
        return arsr;
    },
    natprosecnaTemp: function() {
        let brNatprosecne = 0;
        let avg = this.prosecnaTemp();
        this.temperatura.forEach(t => {
            if(t > avg) {
                brNatprosecne++;
            } 
        });
        return brNatprosecne;
    }
};
console.log(dan.prosecnaTemp());
console.log(dan.natprosecnaTemp());



//////////////////////
// let sto = (d1, d2, d3) => {
// 	// d1 > d2 > d3
// 	if(d1-d2 == d2-d3) {
// 		return d3 - (d1 - d2);
// 	}
//      else if(d1-d2 > d2-d3) {
// 		return d1 - (d2 - d3);
// 	}
// 	else {
// 		return d2 - (d1 - d2);
// 	}
// }