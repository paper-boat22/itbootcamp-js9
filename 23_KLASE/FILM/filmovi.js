class Film {
    constructor(naslov, reziser, godinaIzdanja, ocene) {
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
        this.ocene = ocene;
    }

    get naslov() {
        return this._naslov;
    }

    set naslov(n) {
        if(n.length > 0) {
            this._naslov = n;
        }
        else {
            this._naslov = "Film";
        }
    }

    get reziser() {
        return this._reziser;
    }

    set reziser(r) {
        if(r.length > 0) {
            this._reziser = r;
        }
        else {
            this._reziser = "Reziser";
        }
    }

    get godinaIzdanja() {
        return this._godinaIzdanja;
    }

    set godinaIzdanja(g) {
        if(g > 1800) {
            this._godinaIzdanja = g;
        }
        else {
            this._godinaIzdanja = 1800;
        }
   
    }

    get ocene() {
        return this._ocene;
    }

    set ocene(o) {
        if(Array.isArray(o)) {
            this._ocene = o;
        }
        else {
            this._ocene = [];
        }
    }

    stampaj() {
        console.log(`${this.naslov} - ${this.reziser} (${this.godinaIzdanja})`);
    }

    prosek() {
        let sumaOcena = 0;
        this.ocene.forEach(ocena => {
            sumaOcena += ocena;
        });
        return sumaOcena / this.ocene.length;
    }
}

export default Film;