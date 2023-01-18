class Pacijent {
    constructor(ime, visina, tezina) {
        this.ime = ime;
        this.visina = visina;
        this.tezina = tezina;
    }

    get ime() {
        return this._ime;
    }  

    set ime(i) {
        if(i.length > 0) {
            this._ime = i;
        }
        else {
            this._ime = "NN";
        }
    }

    get visina() {
        return this._visina;
    }

    set visina(v) {
        if(v  > 0 && v  < 250) {
            this._visina = v;
        }
        else {
            this._visina = 0;
        }
    }

    get tezina() {
        return this._tezina;
    }

    set tezina(t) {
        if(t > 0 && t < 550) {
            this._tezina = t;
        }
        else {
            this._tezina = 0;
        }
    }

    stampaj() {
        console.log(`Ime pacijenta: ${this.ime}, visina pacijenta: ${this.visina}cm, tezina pacijenta: ${this.tezina}kg`);
        // console.log(this)
    }

    bmi() {
        let bmiVrednost = (this.tezina) / ((this.visina / 100) * (this.visina / 100));
        return bmiVrednost;
    }

    kritican() {
        if(this.bmi() < 15 || this.bmi() > 40) {
            return true;
        }
        else {
            return false;
        }
    }
}

export default Pacijent;