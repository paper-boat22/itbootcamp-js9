console.log("Objekti");

let blog1 = {
    title: "HTML",
    content: "Ovo je blog o osnovnim HTML tagovima",
    author: "Jelena"
};

// Ispis celog objekta
console.log(blog1);
console.log(typeof blog1);

// Ispis jednog propertija
console.log(blog1.title);
console.log(blog1['title']);

// Izmena propertija
blog1.content = "Osnove HTML-a";
console.log(blog1);
blog1['author'] = "Stefan";
console.log(blog1);

//////////////////////////////////////////////////////

let user = {
    username: "paper_boat",
    age: 28,
    blogs: ["IF naredba grananja", "FOR petlja", "WHILE petlja"],
    login: function() {
        console.log("Ulogovani ste");
    },
    logout: function() {
        console.log("Izlogovani ste");
    },
    logBlogs: function() {
        // console.log(this.blogs);
        this.blogs.forEach(b => {
            console.log(b);
        });
    }
};

user.login();
user.logout();
user.logBlogs();
user.blogs.forEach(b => {
    document.write(`<p>${b}</p>`);
});

//////////////////////////////////////////////////////

let dan = {
    datum: "2022/12/22",
    kisa: true,
    sunce: false,
    oblacno: true,
    vrednostiTemperature: [10, 5, 15, 12, 15, 15, 15],
    // 1.
    prosecnaTemp: function() {
        let suma = 0;
        this.vrednostiTemperature.forEach(t => {
            suma += t;
        });
        return suma / this.vrednostiTemperature.length;
    },
    // 2.
    brNatprosecnih: function() {
        let br = 0;
        let avg = this.prosecnaTemp();
        this.vrednostiTemperature.forEach(t => {
            if(t > avg) {
                br++;
            }
        });
        return br;
    },
    // Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function() {
        let broj = 0;
        let brMax = this.vrednostiTemperature[0];
        this.vrednostiTemperature.forEach(t => {
            if(t > brMax) {
                brMax = t;
            }
        });
        this.vrednostiTemperature.forEach(el => {
            if(el == brMax) {
                broj++;
            }
        });
        return broj;
    },

// 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    tempIzmedjuDve: function(n, m) {
        let izmejuVrednosti = 0;
        this.vrednostiTemperature.forEach(t => {
            if(t > n && t <m) {
                izmejuVrednosti++;
            }
        });
        return izmejuVrednosti;
    },

// 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    toplo: function() {
        if(this.brNatprosecnih() > this.vrednostiTemperature.length/2) {
            return true;
        }
        else {
            return false;
        }
        //return this.brNatprosecnih() > this.vrednostiTemperature.length/2;
    },

// 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function() {
        // // 1. nacin
        // for(let i = 0; i < this.vrednostiTemperature.length; i++) {
        //     if(this.vrednostiTemperature[i] > 0) {
        //         return false;
        //     }
        // }
        // return true;
        // 2. nacin
        // let leden_dan = true;
        // this.vrednostiTemperature.forEach(temp => {
        //     if(temp > 0) {
        //         leden_dan = false;
        //     }
        // });
        // return leden_dan;

        // 3. nacin
        let br_iznad_nule = 0;
        this.vrednostiTemperature.forEach(temp => {
                if(temp > 0) {
                    br_iznad_nule++;
                }
        });
        if(br_iznad_nule == 0) {
            return true;
        }
        else {
            return false;
        }
    }

};

console.log(dan.prosecnaTemp());
console.log(dan.brNatprosecnih());
console.log(dan.maxTemp());
console.log(dan.tempIzmedjuDve(2, 16));
console.log(dan.toplo());
console.log(dan.leden());



