console.log("CALLBACK");

let getResponse = (resource) => {
    // 1. korak - kreiranje XML objekta
    let request = new XMLHttpRequest();

    // 2. korak - otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. korak - slanje zahteva
    request.send();

    return new Promise((resolve, reject) => {
        request.addEventListener("readystatechange", () => {
            if(request.readyState == 4 && request.status == 200) {
                // Sve ok i koristimo resolve
                resolve(request.responseText);// Sve ok i prosledjujemo podatke iz JSON fajla
            }
            else if(request.readyState == 4) {
                // Nesto nije ok i koristimo reject, kome saljemo tekst greske
                reject("Nije moguce dohvatiti podatke");
            }
        });
    });   
}

getResponse("../JSON/prvi.json").then(sadrzaj => {
    console.log("prvi.json resolved", sadrzaj);
    return getResponse("../JSON/drugi.json"); // Vraca Promise
}).then(sadrzajDrugog => {
    console.log("drugi.json resolved", sadrzajDrugog);
    return getResponse("../JSON/treci.json"); // Vraca Promise ukoliko je resolved, na njega se odnosi naredni .then
}).then(sadrzajTreceg => {
    console.log("treci.json resolved", sadrzajTreceg)
})
.catch(greska => {
    console.log("Promise reject", greska);
});

console.log("KRAJ"); // izlazi na vrhu, jer treba vremena da se povuku podaci