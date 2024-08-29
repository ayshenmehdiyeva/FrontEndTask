function Calculate() {
let num1 = document.querySelector("#number1");
let num2 = document.querySelector("#number2");

if( !num1.value || isNaN(num1.value)){
    alert("zehmet olmasa bir eded yazin")
}
if( !num2.value || isNaN(num2.value)){
    alert("zehmet olmasa bir eded yazin")
}

num1 = Number(num1.value);
num2 = Number(num2.value);

let result = 0;

let operation = document.querySelector("#operation").value;
switch(operation){
    case "sm": result = num1 + num2
        break;
        case "sb": result = num1 - num2
        break;
        case "ml": result = num1 * num2
        break;
        case "dv": result = num1 / num2
        break;
}

document.querySelector("#result span").innerText = result;
}




