// // Jedan auto plac vodi evidenciju o svim automobilima koji se trenutno nalaze na placu.
// Za svaki automobil čuvaju se sledeći podaci:
// ● marka (string - marka automobila),
// ● km (realan broj - broj pređenih kilometara automobila),
// ● godište (ceo broj - godina proizvodnje automobila),
// ● vlasnici (niz stringova - imena svih prethodnih vlasnika. Zbog jednostavnosti,
// pamtiti samo imena, recimo “Pera”, “Mika”, “Laza”).

let auto1 = {
    marka: "BMW",
    km: 2200,
    godiste: 2010,
    vlasnici: ["Dusica", "Andjela", "Ivona", "Niksa"]
};

let auto2 = {
    marka: "Mini Cooper",
    km: 1900,
    godiste: 2018,
    vlasnici: ["Marija", "Tijana", "Ivana"]
};

let auto3 = {
    marka: "Toyota",
    km: 3200,
    godiste: 2007,
    vlasnici: ["Stefan", "Jelena", "Andjela", "Sanja", "Bojan"]
};

let auto4 = {
    marka: "Jeep",
    km: 1200,
    godiste: 2020,
    vlasnici: ["Iskra", "Andjela"]
};

// Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
// vraća prosečno godište proizvodnje automobila.
// Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
// deo.
// Pozvati funkciju i rezultat ispisati u konzoli.
let automobili = [auto1, auto2, auto3, auto4];

let prosecnoGodiste = niz => {
    let sum = 0;
    let broj = 0;
    niz.forEach(niz => {
    sum += niz.godiste;
    broj++;        
    });
    return Math.floor(sum / broj);
}
console.log(prosecnoGodiste(automobili));

/* Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
prešao najmanje kilometara.
Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
automobila, vratiti bilo koji od njih.

Pozvati funkciju i rezultat ispisati u konzoli.*/
let markaNajmanjeKm = (niz, marka) => {
    let min = niz.km;
    let br = 0;
    niz.forEach(niz => {
        if(niz.marka == marka) {
            return null;
        }
        else if(niz.marka == marka){
            br++;
            if(br == 1) {
                return 
            }
        }
        else if(niz.marka == marka) {
            if(min > niz.km) {
                min == niz.km;
            }
        }
    }); 
    // return automobili;
    
}
console.log(markaNajmanjeKm(automobili, "BMW"))

// Napisati funkciju prosekKm10 kojoj se prosleđuje niz automobila, a koja vraća
// prosečnu pređenu kilometražu svih automobila ne starijih od 10 godina.
// Pozvati funkciju i rezultat ispisati u konzoli.
let prosekKm10 = niz => {
    let sum = 0;
    let br = 0;
    let starost = 2022 - 10;
    niz.forEach(niz => {
        if(niz.godiste > starost) {
        sum += niz.km;
        br++;
        }
    });
    let arsr = sum / br;
    return arsr;
}
console.log(prosekKm10(automobili));

// Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
// koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
// vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
// Pozvati funkciju i rezultat ispisati u konzoli.
let rokfeler = (niz, imeVlasnika) => {
    let br = 0;
    niz.forEach(niz => {
        if(niz.vlasnici.includes(imeVlasnika)) {
            br++;
        }
    });
        if(br > 2) {
            return true;
        }
        else {
            return false;
        }
}
console.log(rokfeler(automobili, "Andjela"));
