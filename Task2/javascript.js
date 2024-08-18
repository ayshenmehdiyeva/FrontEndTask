/* <li>
                <div class="div"><p class="textt"></p></div>
                <div class="div">
                    <button class="complete"><i class="fa-solid fa-circle-check"></i></button>
                <button
                    class="delete"><i class="fa-solid fa-trash"></i>
                </button></div>*/



const inputvalue = document.querySelector(".input");
const addlist = document.querySelector(".add");
const listtext = document.querySelector(".text");
const list = document.querySelector("ul");

const Render =(getTask)=> {
 const li = document.createElement("li");
 const Text = document.createElement("p");
 const deletebuton = document.createElement("button");
 const completebuton = document.createElement("button");
 Text.classList.add("textt");
 Text.innerHTML = getTask;
 deletebuton.classList.add("delete");
 deletebuton.innerHTML = "X";
 completebuton.classList.add("complete");
 completebuton.innerHTML = "ok";
 li.appendChild(Text);
 li.appendChild(deletebuton);
 li.appendChild(completebuton);
 list.appendChild(li);
 deletebuton.addEventListener("click", ()=>{
    li.remove()
 })
 
 completebuton.addEventListener("click", ()=>{
    Text.style.textDecorationLine = "line-through";
 })
inputvalue.value="";

 }
 
 const Addtask =()=>{
    if (inputvalue.value === ""){
        alert("Bosdur")
    }
    else {
        Render(inputvalue.value)
    }
 }
 


addlist.addEventListener('click', Addtask);