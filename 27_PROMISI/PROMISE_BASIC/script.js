let getSomething = () => {
    let obj = new Promise((resolve, reject) => {
        // resolve("Nesto resolve"); // Ako je sve prsolo ok onda je resolve
        reject("Nesto reject"); // Ako nesto nije proslo dobro onda je reject
    });
    return obj; // Vraca objekat Promise
}

// Ako je Promise vratio resolve, realizuje se .then grana, a ako je Promise vratio reject, realizuje se .catch grana
getSomething().then( a => {
    console.log(`Aktivirana je .then grana ${a}`);
}).catch( b => {
    console.log(`Aktivirana je .catch grana ${b}`);
});
