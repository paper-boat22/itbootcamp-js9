console.log("CALLBACK");

let getResponse = (resource, callback) => {
    // 1. korak - kreiranje XML objekta
    let request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
        if(request.readyState == 4 && request.status == 200) {
            // Sve ok
            // console.log(request.responseText);
            callback(request.responseText, undefined);
        }
        else if(request.readyState == 4) {
            // Nesto nije ok
            // console.log("Nije moguce dohvatiti podatke");
            callback(undefined, "Nije moguce dohvatiti podatke");
        }
    });

    // 2. korak - otvaranje kreiranog zahteva
    request.open("GET", resource);

    // 3. korak - slanje zahteva
    request.send();
}

// Ucitaj najpe prvi.json fajl
getResponse("../JSON/prvi.json", (data, err) => {
    if(data) {
        // Ukoliko je sve ok sa prvi.json fajlom, ispisi njegove podaatke i potom ucitaj drugi.json fajl
        console.log(data);
        getResponse("../JSON/drugi.json", (data, err) => {
            if(data) {
                // Ukoliko je sve ok sa drugi.json fajlom ispisi njegove podatke i potom ucitaj treci.json fajl
                console.log(data);
                getResponse("../JSON/treci.json", (data, err) => {
                    if(data) {
                        console.log(data);
                    }
                    else {
                        console.log(err); // ispisuje gresku ako treci.json nije prosao
                    }
                });
            }
            else {
                console.log(err); // ispisuje gresku ako drugi.json nije prosao
            }
        });
    }
    else {
        console.log(err); // ispisuje gresku ako prvi.json nije prosao
    }
});

console.log("KRAJ"); // izlazi na vrhu, jer treba vremena da se povuku podaci