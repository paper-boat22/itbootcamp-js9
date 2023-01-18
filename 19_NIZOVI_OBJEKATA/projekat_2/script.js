let pitanje1 = {
    pitanje: "Koje životinje su odgajile Tarzana?",
    odgovori: ["gorile", "vukovi", "ptice", "psi"],
    indeks: 1
};

let pitanje2 = {
    pitanje: "Koja princeza je bila prva Diznijeva princeza?",
    odgovori: ["Pepeljuga", "Snežana (Snežana i sedam patuljaka)", "Jasmin", "Ariel"],
    indeks: 1
};

let pitanje3 = {
    pitanje: "Kako se zovu Pepeljugine zle sestre?",
    odgovori: ["Beatrice i Daphine", "Ana i Gloria", "Girlanda i Anastasia", "Anastasia i Drizella"],
    indeks: 3
};

let pitanje4 = {
    pitanje: "Koje su bile prve reči Miki Mausa?",
    odgovori: ["hot dogs", "bread", "Minnie", "mama"],
    indeks: 0
};

let pitanje5 = {
    pitanje: "Ko je napravio drvenog lutka zvanog Pinokio?",
    odgovori: ["vila", "Đepeto", "Figaro", "Đuzepe"],
    indeks: 1
};

let pitanje6 = {
    pitanje: "Šta Petar Pan nije želeo?",
    odgovori: ["da se oženi", "da nađe posao", "da odraste", "da osedi"],
    indeks: 1
};

let pitanje7 = {
    pitanje: "Koliko su Pongo i Perdita imali štenića u '101 dalmatinac'?",
    odgovori: [7, 101, 102, 15],
    indeks: 3
};

let pitanje8 = {
    pitanje: "Ko nije Snežanin patuljak?",
    odgovori: ["Happy", "Sleepy", "Lucky", "Grumpy"],
    indeks: 2
};

let pitanje9 = {
    pitanje: "Ko je najbolji prijatelj Vini Pua?",
    odgovori: ["sova", "tigar", "Kristofer Robin", "Piglet"],
    indeks: 3
};

let pitanje10 = {
    pitanje: "Koliko godina je duh bio u čarobnoj lampi pre nego što ga je Aladin oslobodio?",
    odgovori: [1000, 100, 10000, 10],
    indeks: 2
};

let svaPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

function mesanje (niz) {
    var i = 0
      , j = 0
      , temp = null
  
    for (i = niz.length - 1; i > 0; i -= 1) {
      j = Math.floor(Math.random() * (i + 1));
      temp = niz[i];
      niz[i] = niz[j];
      niz[j] = temp;
    }
    console.log(niz);
  }
  mesanje(svaPitanja);

///////////////// DOM
 
let div1 = document.createElement("div");
  document.body.append(div1);
  div1.style.backgroundColor = "violet";
  div1.style.width = "600px";
  div1.style.height = "800px";
  div1.style.border = "1px solid black";


for(let i = 0; i < 5; i++) {
    let par = document.createElement("p");
    par.innerHTML = `${i + 1}. ${svaPitanja[i].pitanje}`;
    
    let unLi = document.createElement("ul");
    ///// list item
    let listItem = document.createElement("li");
    let listItem1 = document.createElement("li");
    let listItem2 = document.createElement("li");
    let listItem3 = document.createElement("li");

    listItem.style.listStyle = "none";
    listItem1.style.listStyle = "none";
    listItem2.style.listStyle = "none";
    listItem3.style.listStyle = "none";

    ////// radio button
    let radio = document.createElement("input");
    let radio1 = document.createElement("input");
    let radio2= document.createElement("input");
    let radio3 = document.createElement("input");

    radio.name = "odgovori";
    radio1.name = "odgovori";
    radio2.name = "odgovori";
    radio3.name = "odgovori";


    radio.type = "radio";
    radio1.type = "radio";
    radio2.type = "radio";
    radio3.type = "radio";

    ////// label
    let label = document.createElement("label");
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
   

    label.innerHTML = svaPitanja[i].odgovori[0];
    label1.innerHTML = svaPitanja[i].odgovori[1];
    label2.innerHTML = svaPitanja[i].odgovori[2];
    label3.innerHTML = svaPitanja[i].odgovori[3];

    div1.append(par);

    par.append(unLi);

    ////// ul + li
    unLi.append(listItem);
    unLi.append(listItem1);
    unLi.append(listItem2);
    unLi.append(listItem3);

    ////// li + radio
    listItem.append(radio);
    listItem1.append(radio1);
    listItem2.append(radio2);
    listItem3.append(radio3);

    ////// li + label
    listItem.append(label);
    listItem1.append(label1);
    listItem2.append(label2);
    listItem3.append(label3);

    // if(svaPitanja.checked == svaPitanja.indeks) {
    //     let tacanOdgovor = document.createElement("p");
    //     tacanOdgovor = `Tačno ste odgovorili na ${i}. pitanje`;
    //     div2.append.tacanOdgovor;
    
    // } else {
    //     let netacanOdgovor = document.createElement("p");
    //     netacanOdgovor = `Niste tačno odgovorili na ${i}. pitanje`;
    //     div2.append.netacanOdgovor;
    // }
  

}
let div2 = document.createElement("div");
document.body.append(div2);

