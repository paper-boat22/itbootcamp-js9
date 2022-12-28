// 2. Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function zbir(a, b) {
    console.log("Zbir dva broja je " + `${a + b}`);
    console.log("Razlika dva broja je " + `${a - b}`);
    console.log("Proizvod dva broja je " + `${a * b}`);
    console.log("Kolicnik dva broja je " + `${a / b}`);

}
zbir(14, 7);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(photo) {
    document.write(`<img src="${photo}" style="width: 120px;">`);
}
slika("cuko.jpeg");

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function boja(oboji) {
    document.write(`<p style="color:${oboji}">Oboji tekst</p>`);
}
boja("red");

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function font(velicina) {
    document.write(`<p style="font-size:${velicina}px">Zameni velicinu fonta</p>`);
}
font("30");

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 
function povecavanjeFonta(velicina) {
    document.write(`<p style="font-size:${i}px">Zameni velicinu fonta</p>`);
}
for(i = 32; i < 37; i++) {
    povecavanjeFonta(i);
}

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
function neparan(n) {
    if(n % 2 == 0){
        return true;
    }
    else {
        return false;
    }
} 
let broj = neparan(4);
console.log(broj);

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
function maks2 (a, b) {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

let maksimum = maks2(7, 14);
console.log(maksimum);

function maks4(a, b, c, d) {
    return maks2(maks2 (a, b), maks2(c, d));
}
let max = maks4(22, 7, 3, 10);
console.log(max);

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.
function deljivSaTri(n, m) {
    let brojalica = 0;
    for(i = n; i <= m; i++) {
        if(i % 3 == 0) {
            brojalica++;
        }
    }
    console.log(brojalica);
}
deljivSaTri(3, 12);

// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function sumiraj(n, m) {
    let sum = 0;
    for(i = n; i <= m; i++) {
        sum += i;
    }
    console.log(sum);
}
sumiraj(3, 7);

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function mnozi(n, m) {
    let pro = 1;
    for(i = n; i <= m; i++) {
        pro *= i;
    }
    console.log(pro);
}
mnozi(2, 4);

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
function aritmetickaSredina(n, m) {
    let sum = 0;
    let zbir = 0;
    for(i = n; i <= m; i++) {
        sum++;
        zbir += i;
    }
    let arsr = zbir / sum;
    return arsr;
}
let arsr2 = aritmetickaSredina(2, 6);
console.log(arsr2);

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
function aritmetickaSredina2(n, m) {
    let sum = 0;
    let zbir = 0;
    for(i = n; i <= m; i++) {
        if(i % 10 == 3) {
        sum++;
        zbir += i;
       }
    }
    let arsr = zbir / sum;
    return arsr;
}
let arsr3 = aritmetickaSredina2(2, 25);
console.log(arsr3);

// 