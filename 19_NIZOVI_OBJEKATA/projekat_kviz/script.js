// prvo pravimo listu pitanja...
let mojaPitanja = [
    {
        tekst: "Gde je rodjen Ivo Andrić?",
        odgovori: {
            a: 'Sarajevo',
            b: 'Beograd',
            c: 'Mostar',
            d: 'Travnik',
        },
        indeks_korektnog_odgovora: 'd'
    },
    {
        tekst: "Glavni junak u romanu Tvrđava, koji je napisao Meša Selimović je?",
        odgovori: {
            a: 'Ahmet Šabo',
            b: 'Avdaga Osmanagić',
            c: 'Mehmed Paša'
        },
        indeks_korektnog_odgovora: 'a'
    },
    {
        tekst: "Jovan Jovanović Zmaj je nadimak Zmaj dobio po:?",
        odgovori: {
            a: 'Satiričnom listu "Zmaj"',
            b: 'Zmaju od Noćaja',
            c: 'Industriji mašina "Zmaj"'
        },
        indeks_korektnog_odgovora: 'a'
    },
    {
        tekst: "U kojem gradu je rođen Aleksa Šantić?",
        odgovori: {
            a: 'Beograd',
            b: 'Mostar',
            c: 'Zagreb'
        },
        indeks_korektnog_odgovora: 'b'
    },
    {
        tekst: "Autor romana Seobe je?",
        odgovori: {
            a: 'Branko Ćopić',
            b: 'Miloš Crnjanski',
            c: 'Ivo Andrić'
        },
        indeks_korektnog_odgovora: 'b'
    },
        {
        tekst: "Ko je napisao 'Hazarski rečnik'?",
        odgovori: {
            a: 'Milorad Pavić',
            b: 'Dobrica Ćopić',
            c: 'Danilo Kiš',
            d: 'Branko Ćopić'
        },
        indeks_korektnog_odgovora: 'a'
    },
        {
        tekst: "Koje delo počinje i završava se rečima :'Beskrajni, plavi krug. U njemu, zvezda'.?",
        odgovori: {
            a: 'Prokleta Avlija',
            b: 'Nečista krv',
            c: 'Seobe',
            d: 'Znakovi pored puta'
        },
        indeks_korektnog_odgovora: 'c'
    },
        {
        tekst: "Ko je napisao pesmu 'Domovina se brani lepotom'?",
        odgovori: {
            a: 'Milan Rakić',
            b: 'Jovan Dučić',
            c: 'Ljubivoje Ršumović',
            d: 'Vasko Popa'
        },
        indeks_korektnog_odgovora: 'c'
    },
        {
        tekst: "Ko je napisao dramu 'Sumnjivo lice'?",
        odgovori: {
            a: 'Branislav Nušić',
            b: 'Laza Lazarević',
            c: 'Branko Ćopić'
        },
        indeks_korektnog_odgovora: 'a'
    },
    {
        tekst: "Ko je prvi Srpski pisac?",
        odgovori: {
            a: 'Stefan Prvovenčani',
            b: 'Sveti Sava',
            c: 'Teodosije'
        },
        indeks_korektnog_odgovora: 'b'
    }
];
function generisiKviz(teksts, quizContainer, rezContainer, posaljiDugme){
    function prikazPitanja(teksts, quizContainer){
    // prostor za output i opcije odgovora
    let output = [];
    let odgovori;
    // za svako pitanje...
    for(let i=0; i<teksts.length; i++){
        // prvo resetujemo listu odgovora
        odgovori = [];
        // za svaku opciju odgovora na dato pitanje...
        for(letter in teksts[i].odgovori){
            // ...dodajemo radio button
            odgovori.push(
                '<label>'
                    + '<input type="radio" name="tekst'+i+'" value="'+letter+'">'
                    + letter + ': '
                    + teksts[i].odgovori[letter]
                + '</label>'
            );
        }
        // dodajemo specificno pitanje i odgovore za dato pitanje
        output.push(
            '<div class="pitanje"><div class="tekst">' + teksts[i].tekst + '</div>'
            + '<div class="odgovori">' + odgovori.join('') + '</div></div>'
        );
    }
    // finalni output koji se stavlja na stranicu
    quizContainer.innerHTML = output.join('');
}
    function showResults(teksts, quizContainer, rezContainer){
    // prikupljanje odgovora iz celog kviza
    let answerContainers = quizContainer.querySelectorAll('.odgovori');
    // sacuvati odgovore korisnika..
    let userAnswer = '';
    // za svako pitanje...
    for(let i=0; i<teksts.length; i++){
        // pronalazenje svakog odgovora
        userAnswer = (answerContainers[i].querySelector('input[name=tekst'+i+']:checked')||{}).value;
        // ako je odgovor tacan
        if(userAnswer===teksts[i].indeks_korektnog_odgovora){
           
            spanTacnoNetacno.innerHTML += `tacno ${i} pitanje`;
        }
        // ako je odgovor netacan ili prazan
        else{
            // boja je, logicno, crvena...
            spanTacnoNetacno.innerHTML += `netacno ${i} pitanje<br>`;

        }
    }
    // prikaz ukupnog broja tacnih odgovora od sumarnog broja pitanja
    rezContainer.innerHTML = numCorrect + ' pogođenih od ukupno <br>' + teksts.length;
}
    // prikaz odgovora
    prikazPitanja(teksts, quizContainer);
    // kad se klikne "posalji" dugme prikaz rezultata
    posaljiDugme.onclick = function(){
        showResults(teksts, quizContainer, rezContainer);
    }
}
let quizContainer = document.getElementById('quiz');
let rezContainer = document.getElementById('results');
let posaljiDugme = document.getElementById('submit');
let spanTacnoNetacno = document.getElementById('tacno-netacno');
// posaljiDugme.addEventListener("click", () => { 
//     for(let i=0; i<teksts.length; i++){
//         if(userAnswer===teksts[i].indeks_korektnog_odgovora){
//               spanTacnoNetacno.innerHTML = 'tacno ${i} pitanje';
//         }
//         else{
//               spanTacnoNetacno.innerHTML = 'netacno ${i} pitanje';
//         }
//     }
// });