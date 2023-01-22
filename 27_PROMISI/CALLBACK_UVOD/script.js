console.log("Primeri callback funkcija");

let myFunc = callback => {
    callback();
}

myFunc(() => {
    console.log("Callback funkcija okinuta");
});

/////////////////////////////////////////////
// callback funkcija za sabiranje dva broja//
/////////////////////////////////////////////

let sum = callback => {
    callback(5, 7);
}

// 1. nacin
// Kreirali smo posebnu funkciju koja nam sluzi kao realizacija i koju cmo prosledjivati kao parametar
function printSum(a, b) {
    console.log(a + b);
}

sum(printSum); // poziv funkcije koja realizuje callback ide bez zagrada // PRVI NACIN POZIVA


// 2. nacin // DRUGI NACIN POZIVA
sum((a, b) => {
    console.log(a + b);
});

/////////////////////////////////////////////

let racunaj = (str, cb) => {
    console.log(str);
    let rez = cb(10, 5);
    console.log(rez);
}

racunaj("Oduzimanje", (x, y) => {
    return x - y;
});

racunaj("Deljenje", (x, y) => {
    return x / y;
});

/////////////////////////////////////////////

let racunaj2 = (str, br1, br2, funkcija) => {
    console.log(str, funkcija(br1, br2));
}

racunaj2("Mnozenje", 4, 7, (x, y) => {
    return x * y;
});