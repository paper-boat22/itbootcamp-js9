console.log("Nizovi objekata");

let blog1 = {
    title: "HTML",
    likes: 30,
    dislikes: 5
};

let blog2 = {
    title: "CSS",
    likes: 20,
    dislikes: 15
};

let blog3 = {
    title: "Java Script",
    likes: 70,
    dislikes: 7
};

let blogs = [blog1, blog2, blog3];
// Ispis niza objekata
console.log(blogs); 

// ISpis jednog objekta iz niza
console.log(blogs[2]);

// Ispis propertija za objekat
console.log(blogs[2].title);


// Ispis svih naslova blogova u konzoli
blogs.forEach(blog => {
    console.log(blog.title);
});

// Ispis svih naslova blogova na stranici
for(let i = 0; i < blogs.length; i++) {
    document.body.innerHTML += `<h3>${blogs[i].title}</h3>`;
    document.body.innerHTML += `<p>likes: ${blogs[i].likes}</p>`;
    document.body.innerHTML += `<p>dislikes: ${blogs[i].dislikes}</p>`;
}

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let sumLikes = arrObjs => {
    let sum = 0;
    arrObjs.forEach(obj => {
        sum += obj.likes;
    });
    return sum;
}

console.log(sumLikes(blogs));

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let avgLikes = blogs => {
    return sumLikes(blogs) / blogs.length;
}
console.log(`Prosecan broj lajkova je: ${avgLikes(blogs)}`);

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
// let visePozOdNeg = blogs => {
//    for(let i = 0; i < blogs.length; i++){
//         if(blogs[i].likes > blogs[i].dislikes) {
//             console.log(blogs[i].title);
//         }
//     };
// }

// visePozOdNeg(blogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

////////////////////////////////////////

