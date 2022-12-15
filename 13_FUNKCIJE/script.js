console.log(`Funkcije`);

function zdravo() {
    console.log(`Zdravo!`);
}
zdravo();
zdravo();
console.log(`Hello!`);
zdravo();

for(i = 1; i <= 5; i++) {
    zdravo(); // Poziva funkciju onoliko puta koliko se izvrsi FOR petlja
}

//////////////////////////////////////////

function hello(name) {
    console.log(`Hello ${name}`);
}

hello("Andjela");
hello("Dusica");

//////////////////////////////////////////

function hello_full_name(ime, prezime) {
    console.log(`Hello ${ime} ${prezime}`);
}

hello_full_name("Dusica", "Andric");

let im = "Ana";
let pr = "Ivanovic";
hello_full_name(im, pr);


///////////////////////////////////////////

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
function bojiParagraf(boja) {
    document.write(`<p style="color:${boja}">Obojeni tekst</p>`);
}

bojiParagraf("red");
bojiParagraf("orange");

// 2. Napisati funkciju zbir koja računa zbir dva realna broja. Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja.
function sabiranje(a, b) {
    console.log(a + b);
    console.log(a * b);
    console.log(a - b);
    console.log(a / b);
}
sabiranje(12, 4);

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
function slika(photo) {
    document.write(`<img src=${photo}>`)
}
slika("cuko.jpeg");

// 13. Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.
function font(size) {
    document.write(`<p style="font-size: ${size}">Velicina teksta</p> `);
}
font("27px");

// 14. Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora.
function font(size) {
    document.write(`<p style="font-size: ${size}">Velicina teksta</p> `);
}
for(i = 20; i < 25; i++){
font(`${i}px`);
}

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
 
function neparan(n) {
    if(n % 2 == 0) {
        return "Paran broj";
    }
    else {
        return "Neparan broj";
    }
}

let tekst = neparan(11);
console.log(tekst);
document.write(tekst);

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

function maks2(br1, br2) {
    if(br1 > br2) {
        return br1;
    }
    else {
        return br2;
    } 
}

let m1 = maks2(3, 6);
console.log(`Veci je broj ${m1}`);

////////
function maks4(br1, br2, br3, br4) {
    if(br1 > br2 && br1 > br3 && br1 > br4) {
        return br1;
    }
    else if(br2 > br1 && br2 > br3 && br2 > br4) {
        return br2;
    }
    else if(br3 > br1 && br3 > br2 && br3 > br4) {
        return br3;
    }
    else {
        return br4;
    }
}
let m2 = maks4(2, 15, 7, 100);
console.log(`Najveci je ${m2}`);

///// 2. nacin
function maks4(br1, br2, br3, br4) {
    // let veci1 = maks2(br1, br2);
    // let veci2 = maks2(br3, br4);
    // let najveci = maks2(veci1, veci2);
    // return najveci;
    return najveci = maks2(maks2(br1, br2), maks2(br3, br4));
}

let naj = maks4(15, 2, 14, 3);
console.log(naj);

