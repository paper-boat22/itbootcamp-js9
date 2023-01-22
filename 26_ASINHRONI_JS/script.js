// let request = new XMLHttpRequest();
// // request.addEventListener('readystatechange', () => {
// //     // console.log(request.readyState);
// //     if(request.readyState == 4) {
// //         console.log(request.responseText);
// //     }
// // });


// request.addEventListener('readystatechange', () => {
//     if(request.readyState == 4 && request.status === 200) {
//         let data = JSON.parse(request.responseText); // data = javascript objekat
//         console.log(data);
//     }
//     else if(request.readyState === 4) {
//         console.log('Desila se greska');
//     }
// });

// request.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// request.send();

/*
let request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request.responseText);
        console.log(data);
    }
});
request.open('GET', 'https://jsonplaceholder.typicode.com/users');
request.send();

let request1 = new XMLHttpRequest();

request1.addEventListener('readystatechange', () => {
    if(request.readyState == 4 && request.status == 200) {
        let data = JSON.parse(request1.responseText);
        console.log(data);

    let user = JSON.parse(request1.responseText);
        for(let i = 0; i < user.length; i++) {
            if(user[i].website.endsWith(".com")) {
                console.log(user[i].username)
            }
        }    
    }
});

request1.open('GET', 'https://jsonplaceholder.typicode.com/users');
request1.send();
*/


///// Zadaci sa slajda broj 16

let getUsers = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if(request.readyState == 4 && request.status === 200) {
            let data = JSON.parse(request.responseText); 
            resolve(data);
        }
        else if(request.readyState === 4) {
            reject('Desila se greska');
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/users');
    request.send();
}

let ispisKonzola = poruka => {
    console.log(poruka);
}

// Zadatak 2 treba da pozove getUsers f-ju
// Ispisati u konzoli one korisnike čiji website ima domen „.com“.
let websiteCom = niz => {
    niz.forEach(user => { // for(let i = 0; i < niz.length; i++) {let user = niz[i;]}
        if(user.website.includes(".com")) {
            console.log(user.website);
        }

    });
}
getUsers(websiteCom, ispisKonzola);

// Zadatak 3 isto
// Ispisati korisnike čije ime sadrži reč „Clementin“.
let imeClementin = niz => {
    niz.forEach(user => {
        if(user.name.includes("Clementin")) {
            console.log(user.name);
        }
    })
}
getUsers(imeClementin, ispisKonzola);

// Zadatak 4 - Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group“, ili reč „LLC“. 
getUsers((niz) => {
    niz.forEach(user => {
        if(user.company.name.includes("Group") || user.company.name.includes("LLC")) {
            // console.log(user.company.name);
    document.body.innerHTML += user.company.name + `<br>`;

        }
    });
}, (poruka) => {
    // console.log(poruka);
    document.body.innerHTML += poruka;
});

// Zadatak 5 - Ispisati sve različite gradove u kojima rade ovi korisnici.
// getUsers((niz) => {
//     let nizGradova = [];
//     niz.forEach(user => {
//         let city = user.address.city;
//         if(!nizGradova.includes(city)) {
//             nizGradova.push(city);
//         }
//     })
// },  (poruka) => {
//     console.log(poruka); 
// });

// Zadatak 6 - Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
getUsers(niz => {
    let brKorisnika = 0;
    niz.forEach(user => {
        if(user.address.geo.lat < 0 && user.address.geo.lng < 0) {
            brKorisnika++;
        }
    });
    console.log(brKorisnika);
});

// 7. 