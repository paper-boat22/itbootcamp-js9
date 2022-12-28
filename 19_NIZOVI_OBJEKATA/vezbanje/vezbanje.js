// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let dan = {
    datum: "2022/12/12",
    kisa: true,
    sunce: false,
    oblacno: true,
    temperatura: [-3, -3, -1, 0, 2, 4, 6, 7, 5, 3, 1, -2, 0, -7],
    // 1. Određuje i vraća prosečnu temperaturu izmerenu tog dana.
    prosecnaTemp: function() {
        let sum = 0;
        this.temperatura.forEach(prosek => {
            sum += prosek;
        });
        return sum / this.temperatura.length;
    },

    // 2. Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    natprosecnaTemp: function() {
        let br_nat = 0;
        let avg = this.prosecnaTemp();
        this.temperatura.forEach(t => {
            if(t > avg) {
                br_nat++;
            }
        });
        return br_nat;
    },

    // 3. Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    maxTemp: function() {
        let br = 0;
        let max = this.temperatura[0];
        this.temperatura.forEach(t => {
            if(max < t) {
                max = t;
            }
        });
        this.temperatura.forEach(el => {
            if(el == max) {
                br++;
            }
        });
        return br;
    },

    // 4. Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    tempIzmedju: function(n, m) {
        let br = 0;
        this.temperatura.forEach(t => {
            if(t > n && t < m) {
                br++;
            }
        });
        return br;
    },

    // 5. Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    tempIznadProseka: function() {
            if(this.natprosecnaTemp() > this.temperatura.length / 2) {
                return true;
            }
            else {
                return false;
            }
    },

    // 6. Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    leden: function() {
        for(i = 0; i < this.temperatura.length; i++) {
            if(this.temperatura[i] > 0) {
                return false;
            }
        }
        return true;
    },

    // 7. Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.
    tropska: function() {
        for(i = 0; i < this.temperatura.length; i++) {
            if(this.temperatura[i] < 24) {
                return false;
            }
        }
        return true;
    },

    // 8. Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false.
    nepovoljan: function() {
        for(i = 0; i < this.temperatura.length; i++) {
            if(this.temperatura[i] - (this.temperatura[i + 1]) > 8) {
                return true;
            }
        }
        return false;
    },

    // 9. Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.
    neuobicajen: function() {
        for(i = 0; i < this.temperatura.length; i++) {
            if((this.kisa == true && this.temperatura[i] < -5) || (this.oblacno == true && this.temperatura[i] > 25) || (this.kisa == true && this.oblacno == true && this.sunce == true)) {
                return true;
            }
        }
        return false;
    }

    // 10. 
};

    // 1. 
    console.log(dan.prosecnaTemp());
    // 2.
    console.log(dan.natprosecnaTemp());
    // 3.
    console.log(dan.maxTemp());
    // 4. 
    console.log(dan.tempIzmedju(1, 7));
    // 5. 
    console.log(dan.tempIznadProseka());
    // 6. 
    console.log(dan.leden());
    // 7. 
    console.log(dan.tropska());
    // 8. 
    console.log(dan.nepovoljan());
    // 9. 
    console.log(dan.neuobicajen());



