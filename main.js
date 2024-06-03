const bar = document.querySelector(".bar");
let num1;
let op;
let num2;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>{
    button.addEventListener("click", () =>{
        if (button.id == "C"){
            bar.textContent = "";
        }
        else if (bar.textContent === "+"){
            bar.textContent = "";
        }
        else{
            bar.textContent += button.id; 
        }
    })
});

function addFunction(){
     num1 = bar.textContent;
     op = "+";
     bar.textContent = "";
}
const add = document.querySelector(".add");
add.onclick = addFunction;

function subtractFunction(){
    num1 = bar.textContent;
    op = "-";
    bar.textContent = "";
}
const subtract = document.querySelector(".subtract");
subtract.onclick = subtractFunction;

function multiplyFunction(){
    num1 = bar.textContent;
    op = "*";
    bar.textContent = "";
}
const multiply = document.querySelector(".multiply");
multiply.onclick = multiplyFunction;

function divideFunction(){
    num1 = bar.textContent;
     op = "/";
     bar.textContent = "";

}
const divide = document.querySelector(".divide");
divide.onclick = divideFunction;

function dos(){
    num2 = bar.textContent;
    operate(num1,op,num2);
}
const enter = document.querySelector("#enter");
enter.onclick = dos;

function operate(num1,op,num2){
    if (op == "+"){
        bar.textContent = parseInt(num1) + parseInt(num2);
    }
    else if (op == "-"){
        bar.textContent = parseInt(num1) - parseInt(num2);
    }
    else if (op == "*"){
        bar.textContent = parseInt(num1) * parseInt(num2);
    }
    else if (op == "/"){
        bar.textContent = parseInt(num1) / parseInt(num2);
    }
}

