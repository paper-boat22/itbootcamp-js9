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
    likes: 7,
    dislikes: 7
};

let blog4 = {
    title: "Responsive web design",
    likes: 3,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB",
    likes: 200,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 700,
    dislikes: 70
};

let user = {
    username: "Jelena",
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
};

let blogs = [blog1, blog2, blog3, blog4, blog5, blog6];
// Napraviti niz korisnika gde svaki od korisnika sadrži niz blogova. Svaki blog u ovom nizu je objekat.
let user1 = {
    username: "Stefan",
    age: 13,
    blogs: [blog4, blog5],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
}

let user2 = {
    username: "JohnDoe",
    age: 6,
    blogs: [blog6],
    logBlogs: function() {
        this.blogs.forEach(blog => {
            console.log(blog.title);
        });
    }
}

// Ispisati sve blogove korisnika user
console.log(user.blogs);

console.log(user.blogs[0]); // Ovo je prvi blog
console.log(user.blogs[0].title); // Ispisati naslov prvog bloga koji je napisao korisnik user

user.logBlogs();

/////////////////////////////////////

let users = [user, user1, user2];


// Ispisati imena onih autora koji imaju ispod 18 godina
users.forEach(u => {
    if(u.age < 18) {
        console.log(u.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova
users.forEach(user => {
    let blogs = user.blogs; // niz blogova tekuceg user-a
    blogs.forEach(blog => {
        if(blog.likes > 50) {
            console.log(blog.title);
        }
    });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user => {
    if(user.username == "JohnDoe") {
        user.logBlogs();
    }
});

// Napraviti arrow f-ju kojoj se prosledjuje username auto bloga, a on ispisuje sve njegove blogove.
let printBlogs = username => {
    users.forEach(user => {
        if(user.username == "JohnDoe") {
            user.logBlogs();
        }
    });
}
printBlogs("Stefan");

// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali
users.forEach(user => {
    let blogs = user.blogs;
    let sum = 0;
    blogs.forEach(niz => {
        sum += niz.likes;
        if(sum > 100) {
            console.log(user.username);
        }
    });
});

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

let avgLikes = users => {
    let sum = 0; // ukupna suma lajkova
    let br = 0; // ukupan broj blogova
    for(let i = 0; i < users.length; i++) {
        let user = users[i]; // Ovo daje objekat (jedan element iz niza users)
        let blogs = user.blogs; // Ovo daje niz blogova za selektovanog korisnika
        for(let j = 0; j < blogs.length; j++) {
           let blog = blogs[j]; // ovo daje objekat blog (jedan element iz niza blogs)
            sum += blog.likes; // dodajem lajkove na sumu
            br++; // dodajem da sam naisla na jos jedan blog
        }
    }
    return sum / br;
}

let iznadProsekaLajkovi = users => {
    let prosekLajkova = avgLikes(users);
    for(let i = 0; i < users.length; i++) {
        let user = users[i];
        let blogs = user.blogs;
        for(let j = 0; j < blogs.length; j++) {
            let blog = blogs[j];
            if(blog.likes > prosekLajkova) {
                console.log(blog.title);
            }
        }
    }
}

console.log(`Prosecan broj lajkova je ${avgLikes(users)}`);
iznadProsekaLajkovi(users);