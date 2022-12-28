// 7. Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMax = brojevi5.indexOf(maxNiza(brojevi5));
console.log(indexMax);

// 8. Odrediti indeks minimalnog elementa celobrojnog niza.
let indexMin = br.indexOf(minNiza(br));
console.log(indexMin);

// 9. Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.
srednjaVrednost(brojevi4);
let brElem = 0;
let brElemenata = niz => {
    for(let i = 0; i < brojevi4.length; i++) {
        if(niz[i] > srednjaVrednost(brojevi4)) {
            brElem++;
        }
    }
    return brElem;
}
console.log(brElemenata(brojevi4));

// 10. Izračunati zbir pozitivnih elemenata celobrojnog niza.
let broj1 = [1, -4, -16, 9, 2, 12];
let sum1 = 0;
let zbirPozElem = niz => {
    for(let i = 0; i < broj1.length; i++) {
        if(niz[i] > 0) {
            sum1 += niz[i];
        }
    }
    return sum1;
} 
console.log(zbirPozElem(broj1));

// 11. Odrediti broj parnih elemenata u celobrojnom nizu.
let brParnih = 0;
let brojParnih = niz => {
    for(let i = 0; i < broj1.length; i++) {
        if(niz[i] % 2 == 0) {
            brParnih++;
        }
    }
    return brParnih;
}
console.log(brojParnih(broj1));

// 12. Odrediti broj parnih elemenata sa neparnim indeksom.
let brParnihNepar = 0;
let brojParnihNepar = niz => {
    for(let i = 0; i < broj1.length; i++) {
        if(niz[i] % 2 == 0 ) {
            if(i % 2 !== 0) {
            brParnihNepar++;
            }
        }
    }
    return brParnihNepar;
}
console.log(brojParnihNepar(broj1));

// 13. Izračunati sumu elemenata niza sa parnim indeksom.
let broj2 = [2, 15, -6, 8, 1];
let sumElPar = 0;
let sumaElemenataParIndex = niz => {
    for(let i = 0; i < broj2.length; i++) {
        if(i % 2 == 0) {
            sumElPar += niz[i];
        }
    }
    return sumElPar;
}
console.log(sumaElemenataParIndex(broj2));

// 14. Promeniti znak svakom elementu celobrojnog niza.
let broj3 = [1, -2, 3, -4, 5, -6];
let promeniZnak = niz => {
    for(let i = 0; i < broj3.length; i++) {
        niz[i] = niz[i] * (-1);        
    }
    return niz;
}
console.log(promeniZnak(broj3));

// 15. Promeniti znak svakom neparnom elementu celobrojnog niza sa parnim indeksom.
broj3 = [-1, -2, -3, 4, 5, 6];
let promeniZnak1 = niz => {
    for(let i = 0; i < broj3.length; i++) {
        if(i % 2 == 0) {
            niz[i] = niz[i] * (-1);        
        }
    }
    return niz;
}
console.log(promeniZnak1(broj3));

// 16. Dat je niz stavki za kupovinu (članovi niza su stringovi). Prolaskom kroz niz napraviti neuređenu listu i ispisati je u html dokument.
let spisak = ["jabuke", "banane", "cokolada", "brasno"];
spisak = '<ul>' + '<li>' + spisak[0] + '</li>' +'<li>' + spisak[1] + '</li>' + '<li>' + spisak[2] + '</li>' + '<li>' + spisak[3] + '</li>' + '</ul>';
console.log(spisak)
document.write(spisak);

// 17. Dat je niz imena košarkaškog tima. Prolaskom kroz niz formirati tabelu u čijim su redovima imena tima, i tabelu ispisati u html dokument.