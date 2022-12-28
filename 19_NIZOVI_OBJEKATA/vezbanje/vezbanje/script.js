let blog1 = {
    title: "PSI!",
    likes: 120,
    dislikes: 3
};

let blog2 = {
    title: "MACKE",
    likes: 100,
    dislikes: 70
};

let blog3 = {
    title: "DOMACE ZIVOTINJE",
    likes: 30,
    dislikes: 5
};

let blog4 = {
    title: "PSI ZA USVAJANJE!",
    likes: 120,
    dislikes: 3
};

let blog5 = {
    title: "DIVLJE MACKE",
    likes: 100,
    dislikes: 70
};

let blog6 = {
    title: "DIVLJE ZIVOTINJE",
    likes: 70,
    dislikes: 5
};

let blogs = [blog1, blog2, blog3, blog4, blog5, blog6];

blogs.forEach(blog => {
    document.write(`<h3>${blog.title}</h3>`);
});

// 1. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova
let ukupnoLajkova = niz => {
    let sum = 0;
    niz.forEach(lajkovi => {
        sum += lajkovi.likes;
    });
    return sum;
}
console.log(ukupnoLajkova(blogs));

// 2. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova
let prosecanBrLajkova = niz => {
    return ukupnoLajkova(blogs) / niz.length;
}
console.log(prosecanBrLajkova(blogs));

// 3. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena
let naslovi = niz => {
    niz.forEach(poz => {
        if(poz.likes > poz.dislikes) {
            console.log(poz.title);
        }
    });
}
naslovi(blogs);

// 4. Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena
let likeDislike = niz => {
    niz.forEach(duplo => {
        if(duplo.dislikes > duplo.likes / 2) {
            console.log(duplo.title);
        }
    });
}
likeDislike(blogs);

// 5. Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom
let uzvicnik = niz => {
    niz.forEach(niz => {
        if(niz.title.includes("!")) {
            console.log(niz.title);
        }
    });
}
uzvicnik(blogs);

////////////////////////////////
// 1. U objektu user, napraviti metod koji ispisuje sve blogove korisnika 
// 2. Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user1 = {
    username: "paper_boat",
    age: 28,
    blogs: [blog1, blog2],
    blogovi: function() {
        this.blogs.forEach(niz => {
            console.log(niz.title);
        });
    }
};
console.log(user1.blogs);

let user2 = {
    username: "snesko",
    age: 28,
    blogs: [blog3, blog4, blog5],
    blogovi: function() {
        this.blogs.forEach(niz => {
            console.log(niz.title);
        });
    }
};

let user3 = {
    username: "JohnDoe",
    age: 17,
    blogs: [blog6, blog3],
    blogovi: function() {
        this.blogs.forEach(niz => {
            console.log(niz.title);
        });
    }
};

// 3. Ispisati imena onih autora koji imaju ispod 18 godina
let users = [user1, user2, user3];
users.forEach(niz => {
    if(niz.age < 18) {
        console.log(niz.username);
    }
});

// 4. Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(niz => {
    let blogs = niz.blogs;
    blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });    
});

// 5. Ispisati sve blogove autora čiji je username ’JohnDoe’





