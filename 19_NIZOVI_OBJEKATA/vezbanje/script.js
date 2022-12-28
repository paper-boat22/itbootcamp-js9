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
};

// 7. 
console.log(dan.tropska());
// 8. 
console.log(dan.nepovoljan());
// 9. 
console.log(dan.neuobicajen());