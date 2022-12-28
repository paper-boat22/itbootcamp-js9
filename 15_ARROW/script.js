function sum(a, b) {        // Imenovane funkcije: (function), ime, {param}, {return}
    return a + b;    
}

let rez = sum(1, 2);
console.log(rez);

// Anonimne funkcije
let suma = function(a, b) {     // Anonimna f: (function), {parametri}, {return}
    return a + b;
}

rez = suma(1, 2); // poziv anonimne funkcije preko promenljive suma
console.log(rez);

// Arrow funkcije (anonimne funkcije sa skracenim zapisom)
// => fat arrow (strelica)
let suma2 = (a, b) => {     // odmah idu parametri, =>, {return}
    return a + b;
}

rez = suma2(5, 6);
console.log(rez);

///////
let hello = () => {
    console.log("Hello world!");
}

hello();

///////
let echo = (s1, s2) => {
    let rezultat = s1 + ", " + s2;
    console.log(rezultat);
}

echo("Dusica", "Andric");

// Arrow funkciju koja prihvata tri parametra: ime, prezime, godine.
// - Osoba ____ ______ je punoletna
// - Osoba ____ ______ je maloletna
let osoba = (ime, prezime, godine) => {
    if(godine >= 18) {
        console.log("Osoba " + ime + " " + prezime + " je punoletna.")
    }
    else {
        console.log("Osoba " + ime + " " + prezime + " nije punoletna.")
    }
}
osoba("Jelena", "Matejic", 30);

// 
let ispisHTML = (ime, prezime, godine) => {
    if(godine >= 18) {
        let ispis = `<p>Osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else {
        let ispis = `<p>Osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}

document.body.innerHTML += ispisHTML("Jelena", "Matejic", 30);
document.body.innerHTML += ispisHTML("Jelena", "Peric", 15);

// 3. Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.
let neparan = (n) => {
    if(n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}

console.log(neparan(7));
console.log(neparan(4));


// verzija 2
let neparan4 = (n) => {
    if(n % 2 == 1) {
        return true;
    }
    else {
        return false;
    }
}

// verzija 2, skracena varijanta
let neparan5 = (n) => {
    return (n % 2 == 1);
}

console.log(neparan5(9));
console.log(neparan5(2));

// varijanta, samo koristeci svojstva arrow fukcija
// 1) Ako arrow f prosledjujemo TACNO JEDAN parametar, onda () nisu obavezne
// 2) Ako se telo arrow f sastoji samo od return naredbe, ona nije obavezna
let neparan6 = n => (n % 2 == 1);

console.log(neparan6(9));
console.log(neparan6(2));

// 4. Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.
let maks2 = (a, b) => {
    if(a > b) {
        return a;
    }
    else {
        return b;
    }
}

console.log(maks2(13, 7));

// Skracena varijanta
let max2 = (a, b) => (a > b) ? a : b; 
    console.log(max2);

// Maks4
let maks4 = (a, b, c, d) => maks2(maks2(a, b), maks2(c, d));

console.log(maks4(23, 5, 76, 9));

// Maks4 2 varijanta
let maks4a = (a, b, c, d) => maks2(maks2(maks2(a, b), c), d);

console.log(maks4(23, 5, 76, 9));
console.log(maks4a(23, 5, 76, 9));

// 5. Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.
let slika = photo => {
    document.write(`<img src="${photo}">`);
}
slika("cuko.jpeg")

// 6. Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.
let paragraf = boja => {
    document.write(`<p style="color:${boja}">Boja teksta</p>`)
}
paragraf("red");

// 7. Napisati program koji sadrži funkciju sedmiDan koja za uneti broj n ispisuje n-ti dan u nedelji (npr. za 0 ispisuje “Nedelja”, za 1 se ispisuje „Ponedeljak“, za 2 se ispisuje „Utorak“, ... ,  a za 7 opet “Nedelja”). Pitanje: Kako bismo realizovali ovaj zadatak da se tražio n-ti mesec u godini?
//let sedmiDan = n => {
//     let i = n;
//     if(i == 0 || i == 7) {
//         return "Nedelja";
//     }
//     else if(i == 1) {
//         return "Ponedeljak";
//     }
//     else if(i == 2) {
//         return "Utorak";
//     }
//     else if(i == 3) {
//         return "Sreda";
//     }
//     else if(i == 4) {
//         return "Cetvrtak";
//     }
//     else if(i == 5) {
//         return "Petak";
//     }
//     else {
//         return "Subota";
//     }
// //}
// console.log(sedmiDan(1));



let sedmiDan = n => {
    let sedmiDan = new Date(Date.UTC(2012, 0, n + 1, 3, 0, 0));
    let dan = sedmiDan.toLocaleDateString("sr-SR", { weekday:"long"});
    return dan;
}
console.log(sedmiDan(7));

let mesec = n => {
    let mesec = new Date(Date.UTC(2012, n - 1, 20, 3, 0, 0));
    let month = mesec.toLocaleDateString("sr-SR", { month:"long"});
    return month;
}
console.log(mesec(12));

// 8. Napisati funkciju deljivSaTri koja se koristi u ispisivanju brojeva koji su deljivi sa tri u intervalu od n do m. Prebrojati koliko ima ovakvih brojeva od n do m.
let brojalica = 0;
let deljivSaTri = (n, m) => {
    for(i = n; i <= m; i++) {
        if(i % 3 == 0) {
            brojalica++;
            
        }
    }
    return brojalica;

}
console.log(deljivSaTri(3, 15));

// 9. Napisati funkciju sumiraj koja određuje sumu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let sumiraj = (n, m) => {
    let sum = 0;
    for(i = n; i <= m; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumiraj(2, 5));

// 10. Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let mnozi = (n, m) => {
    let sum = 1;
    for(i = n; i <= m; i++) {
        sum *= i;
    }
    return sum;
}
console.log(mnozi(2, 4));

// 11. Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.
let arsr = (n, m) => {
    let sum = 0;
    let brojalica = 0;
    let arsr1;
    for(i = n; i <= m; i++) {
        sum += i;
        brojalica++;
        arsr1 = sum / brojalica;
        
    }
    return arsr1;
}
console.log(arsr(1, 5));

// 12. Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.
let arSr = (n, m) => {
    let sum = 0;
    let brojalica = 0;
    let arsr1;
    for(i = n; i <= m; i++) {
        if(i % 10 == 3) {
        sum += i;
        brojalica++;
        arsr1 = sum / brojalica;
        }
    }
    return arsr1;
}
console.log(arSr(1, 15));

// 13. Dobili ste plaćenu programersku praksu u trajanju od n meseci. Prvog meseca, plata će biti a dinara, a ako budete vredno radili svakog narednog meseca ćete dobiti povišicu od d dinara. Brojeve n, a i d određujete sami.  Napišite funkciju kojoj se prosleđuju brojevi n, a i d. Funkcija treba da vrati vrednost koliko ćete ukupno navca zaraditi, ukoliko svakog meseca budete dobijali povišicu.  Testirati zadatak (pozvati funkciju i ispisati vrednost koju ona vraća).
let plata = (n, a, d) => {
    n = 12;
    a = 100000;
    d = 5000;
    let ukupno = (n - 1) * d + a;
    return ukupno;
    document.write(`Za ${n} meseci rada, ukupno cu zaraditi ${ukupno}`);

}
plata(12, 100000, 5000);

// 19. Ispisati dužinu svakog elementa u nizu stringova. 
let zivotinje = ["slon", "mis", "lisicA", "cuko", "zirafa"];
let lengths = zivotinje.map(function(word){
    return word.length;
   });
   console.log(lengths);

// 20. Odrediti element u nizu stringova sa najvećom dužinom.
console.log(Math.max(...lengths));
let najduzaRec = niz => {
let maxWord = zivotinje[0];
for(let i = 1; i < niz.length; i++) {
    if(zivotinje[i] > maxWord) {
        maxWord = zivotinje[i];
        }
    }
    return maxWord;
}
console.log(najduzaRec(zivotinje));

// 21. Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.
let zivotinje1 = ["slon", "mis", "lisica", "cuko", "zirafa"];
let najduziElementi = niz => {
    let sum = 0;
    let arsr = 0;
    let zbir = 0;
    for(let i = 0; i < niz.length; i++) {
        sum += niz[i].length;
        arsr = sum / niz.length;
            
    }
    console.log(sum);
    console.log(arsr);
    if(arsr < lengths) {
        zbir++;
    }
    console.log(zbir)
    return sum;
}
console.log(najduziElementi(zivotinje1));

// 22. Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 
let letter1 = ["a"];
let out = zivotinje1.filter(el => {
  let count = 0;
  el.split('').forEach(letter => {
    if(letter1[count] === letter) { count++; }
  });
  return count === letter1.length;
});

console.log(out);

// 23. Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 
