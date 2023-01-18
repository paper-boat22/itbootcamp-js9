// prvo pravimo listu pitanja...
let svaPitanja = [

    {
        pitanje: "Koje životinje su odgajile Tarzana?",
        odgovori: {
            a: "gorile", 
            b: "vukovi", 
            c: "ptice", 
            d: "psi"
        },
        indeks: 'b'
    },

    {
        pitanje: "Koja princeza je bila prva Diznijeva princeza?",
        odgovori: {
           a: "Pepeljuga", 
           b: "Snežana (Snežana i sedam patuljaka)", 
           c: "Jasmin", 
           d: "Ariel"
        },
        indeks: 'b'
    },

    {
        pitanje: "Kako se zovu Pepeljugine zle sestre?",
        odgovori: {
           a: "Beatrice i Daphine", 
           b: "Ana i Gloria", 
           c: "Girlanda i Anastasia", 
           d: "Anastasia i Drizella"
        },
        indeks: 'd'
    },

    {
        pitanje: "Koje su bile prve reči Miki Mausa?",
        odgovori: {
           a: "hot dogs", 
           b: "bread", 
           c: "Minnie", 
           d: "mama"
        },
        indeks: 'a'
    },

    {
        pitanje: "Ko je napravio drvenog lutka zvanog Pinokio?",
        odgovori: {
           a: "vila", 
           b: "Đepeto", 
           c: "Figaro", 
           d: "Đuzepe"
        },
        indeks: 'b'
    },

    {
        pitanje: "Šta Petar Pan nije želeo?",
        odgovori: {
           a: "da se oženi", 
           b: "da nađe posao", 
           c: "da odraste", 
           d: "da osedi"
        },
        indeks: 'c'
    },

    {
        pitanje: "Koliko su Pongo i Perdita imali štenića u '101 dalmatinac'?",
        odgovori: {
           a: 7, 
           b: 101, 
           c: 102, 
           d: 15
        },
        indeks: 'd'
    },

    {
        pitanje: "Ko nije Snežanin patuljak?",
        odgovori: {
           a: "Happy", 
           b: "Sleepy", 
           c: "Lucky", 
           d: "Grumpy"
        },
        indeks: 'c'
    },

    {
        pitanje: "Ko je najbolji prijatelj Vini Pua?",
        odgovori: {
           a: "sova", 
           b: "tigar", 
           c: "Kristofer Robin", 
           d: "Piglet"
        },
        indeks: 'd'
    },

    {
        pitanje: "Koliko godina je duh bio u čarobnoj lampi pre nego što ga je Aladin oslobodio?",
        odgovori: {
           a: 1000,
           b: 100,
           c: 10000,
           d: 10
        },
        indeks: 'c'
    }
];
function kreirajKviz(tekst, kviz, rezultati, dugmePosalji) {
    function pitanja(tekst, kviz) {
    let rezultat = [];
    let odgovori;
    for(let i = 0; i < tekst.length; i++) {
        odgovori = [];
        for(slovo in tekst[i].odgovori){
            odgovori.push(
                '<label>'
                    + '<input type="radio" name="tekst'+i+'" value="'+ slovo + '">'
                    + slovo + ': '
                    + tekst[i].odgovori[slovo]
                + '</label>'
            );
        }
        rezultat.push(
            '<div class="pitanje"><div class="tekst">' + tekst[i].pitanje + '</div>'
            + '<div class="odgovori">' + odgovori.join('') + '</div></div>'
        );
    }
    kviz.innerHTML = rezultat.join('');
}
    function prikaziRezultat(tekst, kviz, rezultati){
    let odgovoriKviz = kviz.querySelectorAll('.odgovori');
    let odgovorKorisnika = '';
    let br_tacnost = 0;
    for(let i = 0; i < tekst.length; i++) {
        odgovorKorisnika = (prikaziRezultat[i].querySelector('input[name=tekst'+i+']:checked')||{}).value;
        if(odgovorKorisnika===tekst[i].indeks){
            br_tacnost++;
            prikaziRezultat[i].style.color = 'green';
        }
        else{
            prikaziRezultat[i].style.color = 'red';
        }
    }
    rezultati.innerHTML = br_tacnost + ' pogođenih od ukupno ' + tekst.length;
}
    pitanja(tekst, kviz);
    dugmePosalji.onclick = function(){
        odgovoriKviz(tekst, kviz, rezultati);
    }
}
let kviz = document.getElementById('kviz');
let rezultati = document.getElementById('rezultati');
let dugmePosalji = document.getElementById('submit');
let spanTacnoNetacno = document.getElementById('tacno_netacno');
dugmePosalji.addEventListener("click", () =>{
    for(let i = 0; i < tekst.length; i++){
        if(odgovorKorisnika === tekst[i].indeks){
              spanTacnoNetacno.innerHTML = 'Tačno ste odgovorili na ${i}. pitanje';
        }
        else{
              spanTacnoNetacno.innerHTML = 'Niste tačno odgovorili na ${i}. pitanje';
        }
    }
});