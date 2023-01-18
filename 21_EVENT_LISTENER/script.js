console.log("Events");

// 1. Dohvatiti element na koji zelimo da postavimo osluskivac
let btnHello = document.getElementById("hello");

// 2. Postavljamo osluskivac na element koji smo dohvatili
btnHello.addEventListener("click", () => {
    console.log("Hello!");
});

////////////////////////////

let btnHelloHello = document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick", () => {
    console.log("Hello hello!")
});
////////////////////////////

let btnEvents = document.getElementById("hello3");
btnEvents.addEventListener("click", () => {
    console.log("Event click");
});

// btnEvents = addEventListener("dblclick", () => {
//     console.log("Event dblclick");
// });

////////////////////////////
// 1. Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.
// let btnBrojac = document.getElementById("dugme");
// let brojac = 1;
// btnBrojac.addEventListener("click", () => {
//     console.log(`Brojac je ${brojac++}`);
//     let paragraf = document.getElementById("dugme");
//     paragraf.innerHTML=brojac;
//     //brojac = brojac + 1; ili brojac += 1;
// });

// 2.  Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.

// 3. Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1.
// Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.
let btnMinus =  document.getElementById("minus");
let btnPlus =  document.getElementById("plus");
let spanRez = document.getElementById("rezultat");
let br = 0;

btnMinus.addEventListener("click", () => {
    br--;
    if(br < 0) {
        br = 0;
    }
    spanRez.innerHTML = br;
});

btnPlus.addEventListener("click", () => {
    br++;
    spanRez.innerHTML = br;
});




// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

// Brojevi između 0 i 10 zelenom bojom. Brojevi preko 10 crvenom bojom.

// 5. Napraviti input polje i dugme. U input polje treba da se unese ime neke osobe, a na ekranu u paragrafu da se ispiše Zdravo i ime osobe preuzeto iz input polja.
let inputUnos = document.getElementById("ime");
let btnPrikazi = document.getElementById("prikazi");
let spanPrikaz = document.getElementById("prikaz");
// let inputPol = document.querySelectorAll("input[name='pol']");

btnPrikazi.addEventListener("click", () => {
    let value = inputUnos.value;
    spanPrikaz.innerHTML = `Hello ${value}!`;
   // inputUnos.value = "";
});

btnPrikazi.addEventListener("dblclick", () => {
    // Selektovanje samo jednog radio button-a koji je cekiran
    let checkedPol = document.querySelector("input[name='pol']:checked"); // Jedan radio button koji je cekiran (vraca HTML tag)
    // console.log(checkedPol);
    let valueCheckedPol = checkedPol.value; // Daje vrednost (value) iz selktovanog HTML taga
    console.log(valueCheckedPol);

    //////////// Selektovanje svih radio button-a prema name atributu /////////////

    let inputRadios = document.getElementsByName('pol');
    inputRadios.forEach(input => {
        if(input.checked) {
            console.log(input.value);
        }
    });

    ///////// Isto postizemo i ukoliko koristimo querySelectorAll /////////
    let inputRadiosQuery = document.querySelectorAll('input[name="pol"]');
    inputRadiosQuery.forEach(input => {
        if(input.checked) {
            console.log(input.value);
        }
    });
});

let inputKvadrat = document.getElementById("broj");
let btnRacunaj = document.getElementById("izracunati");
let prikazSpan = document.getElementById("prikazati");

btnRacunaj.addEventListener("click", () => {
    let value = inputKvadrat.value;
    prikazSpan.innerHTML = value * value;
});

let inputPolovina = document.getElementById("broj2");
let btnIzracunaj = document.getElementById("izracunati2");  
let prikazSpan2 = document.getElementById("prikazati2");

btnIzracunaj.addEventListener("click", () => {
    let value = inputPolovina.value;
    prikazSpan2.innerHTML = value / 2;
});

let inputPolovina3 = document.getElementById("broj3");
let btnIzracunaj3 = document.getElementById("izracunati3");
let prikazSpan3 = document.getElementById("prikazati3");

btnIzracunaj3.addEventListener("click", () => {
    let value = inputPolovina3.value;
    prikazSpan3.innerHTML = value * value * Math.PI;
});
