
class Pacijent {
    constructor (ime, visina, tezina) {
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
            this._ime = "Niste uneli ime";
        }
    }

    get visina() {
        return this._visina;
    }

    set visina(v) {
        if(v > 0 && v < 250) {
            this._visina = v;
        }
        else {
            this._visina = "Proverite broj koji ste uneli";
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
            this._tezina = "Proverite broj koji ste uneli";
        }
    }

    stampaj() {
        console.log(this);
    }

    stampajListu() {
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}cm</li>
            <li>Tezina: ${this.tezina}kg</li>
        </ul>`;
        return htmlLista;
    }


    bmi() {
        let bmiVrednosti = this.tezina / ((this.visina / 100) * (this.visina / 100));
        return Math.floor(bmiVrednosti);
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