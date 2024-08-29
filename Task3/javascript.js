let inputvalue = document.querySelector(".input");
let add = document.querySelector(".add")

const wordApp = () => {
    let i = inputvalue.value.length-1
    while (i > -1) {
        let text = document.querySelector(".text");
        let p = document.createElement("p")
        text.appendChild(p);
        p.innerHTML = inputvalue.value[i];
       console.log(inputvalue.value[i])
        i--;
    }
}
add.addEventListener("click", wordApp)


/* let ul = document.querySelector("ul");
        let li = document.createElement("li")
        ul.appendChild(li);
        li.innerHTML = inputvalue.value[i];*/ 