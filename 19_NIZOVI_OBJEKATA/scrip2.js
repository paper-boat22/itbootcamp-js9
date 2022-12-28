let student1 = {
    ime: "Dragan",
    prezime: "Aetrovic",
    godStudija: 3,
    ocene: [8, 9, 7, 8, 8, 10, 9, 6, 7, 8, 8, 9, 10, 9, 7],
};
let student2 = {
    ime: "Milan",
    prezime: "Markovic",
    godStudija: 4,
    ocene: [8, 9, 7, 8, 9, 10, 9, 7, 9, 9, 7, 8, 10, 8],
};
let student3 = {
    ime: "Milos",
    prezime: "Zarkovic",
    godStudija: 4,
    ocene: [8, 9, 7, 8, 9, 6, 6, 8, 7, 8, 9, 8, 7],
};
let student4 = {
    ime: "Mosa",
    prezime: "Aijade",
    godStudija: 4,
    ocene: [8, 9, 7, 8, 9, 10, 9, 7, 9, 9, 7, 8, 10, 8],
};
let studenti = [student1, student2, student3, student4];

//  Funkciji se prosleđuje niz studenata, a ona ispisuje ime i prezime studenta sa maksimalnim prosekom. Ukoliko ima više takvih studenata, ispisati ime i prezime bilo kog takvog studenta.
let prosecnaOcena = ocene => {
    let sum = 0;
    ocene.forEach(o => {
        sum += o;
    });
    return sum / ocene.length;
}

let najStudent = studenti => {

    let naj = studenti[0]; // pretpostavka da je ovo najbolji student
    studenti.forEach(student => {
        if(prosecnaOcena(naj.ocene) < prosecnaOcena(student.ocene)) {
            naj = student; 
        }
    });

    return `${naj.ime} ${naj.prezime}`;

}
console.log(najStudent(studenti));

let najStudent1 = studenti => {

    let imeNajboljeg = "";
    let prezimeNajboljeg = "";
    let prosekNajboljeg = -1;

    let naj = studenti[0]; // pretpostavka da je ovo najbolji student
    studenti.forEach(student => {
        let zbir = 0;
        student.ocene.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.ocene.length;

        // > vraca prvog studenta sa najvecim prosekom
        // Vraca poslednjeg studenta sa najvecim prosekom
        if(prosek > prosekNajboljeg) {
            prosekNajboljeg = prosek;
            imeNajboljeg = student.ime;
            prezimeNajboljeg = student.prezime;
        }

    });

    return `${imeNajboljeg} ${prezimeNajboljeg}`;

}
console.log(najStudent1(studenti));

let sviNajStudenti = studenti => {
    let prosekNajboljeg = -1;

    // 1. Izracunamo koji je najveci prosek
    studenti.forEach(student => {
        let zbir = 0;
        student.ocene.forEach(ocena => {
            zbir += ocena;
        });
        let prosek = zbir / student.ocene.length;

        if(prosek > prosekNajboljeg) {
            prosekNajboljeg = prosek;
        }
    });
    // 2. Trazimo sve studente koji imaju prosek koji smo dobili kao najveci u 1.
    studenti.forEach(student => {
        if(prosekNajboljeg == prosecnaOcena(student.ocene)) {
            console.log(`${student.ime} ${student.prezime}`)
        }
    });


}
sviNajStudenti(studenti);
