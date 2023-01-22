console.log("CALLBACK");

let getTodos = (resource, callback) => {
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

getTodos("../JSON/todos.json", (data, err) => {
    // console.log(data, err);
    if(data) {
        console.log(data); // ispisuje podatke sa kojima moze dalje da se raspolaze
    }
    else {
        console.log(err);
    }
});

console.log("KRAJ"); // izlazi na vrhu, jer treba vremena da se povuku podaci