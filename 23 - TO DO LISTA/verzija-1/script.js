let lista = document.querySelectorAll("li");


lista.forEach(li => {
    li.addEventListener("click", () => {
        if(li.style.textDecoration == "line-through") {
            li.style.textDecoration = "none";
        }
        else {
            li.style.textDecoration = "line-through";
        }        
    });
});

