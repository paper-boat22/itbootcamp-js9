let listElement = document.querySelector('.list')
let inputElement = document.querySelector('.text-input')
let buttonElement = document.querySelector(".add-btn")
let lists = JSON.parse(localStorage.getItem('lista')) || []

buttonElement.setAttribute('onclick', 'dodaj()')

inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {  
      dodaj();
    }
  });


  
function dodajUlistu() {
    listElement.innerHTML = ''

    for (item of lists) {
        let itemList = document.createElement('li')
        let itemP = document.createElement('p')
        let itemText = document.createTextNode(item)

        itemList.setAttribute('class', 'item')

        let linkElement = document.createElement('button')
    

        let pos = lists.indexOf(item)
        linkElement.setAttribute('class', 'close-icon fa fa-close')
        linkElement.setAttribute('onclick', `ukloni(${pos})`)

        itemP.appendChild(itemText)
        itemList.appendChild(itemP)
        itemList.appendChild(linkElement)
        listElement.appendChild(itemList)
        
    }

}

dodajUlistu()

function dodaj() {
    const tarefa = inputElement.value

    if (tarefa != '') {
      lists.push(tarefa)
      inputElement.value =''
      dodajUlistu()
    }
    
}

function ukloni(pos) {
    lists.splice(pos, 1)
    dodajUlistu()
    noLocalStorage()
}

function noLocalStorage() {
    localStorage.setItem('lista', JSON.stringify(lists))
}

// ulTasks.addEventListener("click", e =>{
//     if(e.target.tagName == "LI"){
//        e.target.remove();
//        noLocalStorage();
//     }
//     function noLocalStorage() {
//         localStorage.setItem('tasks', JSON.stringify(tasks))
//     }
//       });

