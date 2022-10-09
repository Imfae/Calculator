const add = function(a, b){
    return a + b;
}

const subtract = function(a, b){
    return a - b;
}

const multiply = function(a, b){
    return a * b;
}

const divide =  function(a, b){
    return a / b;
}

const operate = function (operator, a, b) {
    switch (operator){
        case "+":
            return add(a, b);
        break;
        case "-":
            return subtract(a, b);
        break;
        case "*":
            return multiply(a, b);
        break;
        case "/":
            return divide(a, b);
        break;
    }

}

const display = document.querySelector(".display");
let a = [];
let operator = "";
let isEqual = false;
let result = 0;
const displayValue = function () {
    
    if (this.className === "digit"){
        if (isEqual){
            display.textContent = "";
            isEqual = false;
        }
        
        display.textContent += this.textContent;
        
    }
    if (this.className === "operator"){
        a.push(Number(display.textContent));
        if(a.length > 1){
            
            result = operate(operator, a[0], a[1]);
            display.textContent = result;
            a = [];
            a.push(result);
            isEqual = true;
            operator = this.textContent;
            console.log(a.length);
        }
        else{
            isEqual = false;
            display.textContent = "";
            operator = this.textContent;
        }
        
        
        console.log(`${a[0]} ${a[1]} ${a[2]}`);
    }
    if (this.className == "equal"){
        if(operator){
            a.push(Number(display.textContent));
            result = operate(operator, a[0], a[1]);
            display.textContent = `${result}`;
            a = [];
            isEqual = true;
            
        }
        console.log(`${a[0]} ${a[1]} ${a[2]}`);
    }
    
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", displayValue);
});
