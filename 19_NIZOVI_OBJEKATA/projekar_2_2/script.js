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
]

// let svaPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

function init() {
    let elementiKviza = document.getElementById("quiz");

    // let forma = '';
    // forma += `<form><button type="submit">Pošalji odgovore</button> <button type="submit">Nova pitanja</button></form>`
    // <button type="submit">Pošalji odgovore</button>

    let string = '';
    svaPitanja.forEach((question, pitanjeIndeks) => {
        let odgovoriString = '';
        question.odgovori.forEach((odgovor, odgovorIndeks) => {
            odgovoriString += 
                `
                    <li>
                        <label>
                            <input type="radio" name="pitanje-${pitanjeIndeks}" data-correct="${question.indeks === odgovorIndeks}">
                            ${odgovor}
                        </label>
                    </li>
                `
        });

        string += 
            `
                <h4>${question.pitanje}</h4>
                    <ul>
                        ${odgovoriString}
                    </ul>
                      
            `

      
        // let povratnaInformacija = document.getElementById("alert");


    });
    
    elementiKviza.innerHTML = string;
    // // povratnaInformacija.innerHTML = 
    elementiKviza.addEventListener('submit', function(e) {
        e.preventDefault();
       let cekiraniOdgovori = document.querySelector('input[type=radio]:checked');
       console.log(cekiraniOdgovori);
    });
} // end of the code

init()