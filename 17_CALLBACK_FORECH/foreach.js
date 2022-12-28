// Zadatak 2 - Odrediti zbir elemenata celobrojnog niza.
let sumaElem = niz => {
    let suma = 0;
    niz.forEach(el => {
        suma += el;
    }); // ova arrow f-ja JESTE callback funkcija
    return suma;
}

let a = [1, 3, 4, 6];
console.log(sumaElem(a)); // sumaElem NIJE callback funkcija

// 5. Odrediti maksimalnu vrednost u celobrojnom nizu.
let maxVr = niz => {
    let max = niz[0];
    niz.forEach(el => {
        if(el > max) {
            max = el;
        }
    });
    return max;
}

console.log(maxVr(a));

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

let indexMaxVr2 = niz => {
    let idx = undefined;
    let max = maxVr(niz);
    niz.forEach((el, i) => {
        if(el == max && idx == undefined) {
            idx = i;
        }
    });
    return idx;
}

let indexSvihMaxVr = niz => {
    let idx = undefined;
    let max = maxVr(niz);
    let indices = [];
    niz.forEach((el, i) => {
        if(el == max) {
            indices.push(i);
        }
    });
    return indices;
}

console.log(indexMaxVr(a));

let b = [1, 3, 6, -8, 6, 6, 4];
// console.log(indexMaxVr(b)); // vraca 2 
console.log(indexMaxVr2(b)); // vraca 5
console.log(indexSvihMaxVr(b)); // vraca 5

let naziv = "ITBootcamp";
console.log(naziv.length);

// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let zivotinje = ["mis", "slon", "zirafa", "patka"];
let duzineSvihStr = niz => {
    niz.forEach(el => {
        console.log(el.length);
    });
}
duzineSvihStr(zivotinje);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
let maxDuzinaPrvi = niz => {
    let maxd = 0;
    niz.forEach(el =>{
        if(el.length > maxd){
            maxd = el.length;
        }
    });
    let maxStr = undefined;
    niz.forEach(el=>{
        if(el.length == maxd && maxStr == undefined){
            maxStr = el;
        }
});
return maxStr
}
console.log(maxDuzinaPrvi(zivotinje)); 

// zadatak 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
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
zivotinje = ["Anakonda", "mis", "slon", "zirafa", "patka"];

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
let brojPocinjeA = niz => {
    let br = 0;
    niz.forEach(el => {
        if(el[0] == "a" || el[0] == "A") {
            br++;
        }
    });
    return br;
}   
console.log(brojPocinjeA(zivotinje));