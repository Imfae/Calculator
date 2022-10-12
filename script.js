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
let content = "";
let decimal = document.querySelector("#decimal");
let decimalPressed = false;

const displayValue = function () {
    
    //If a button with className "digit" is pressed
    if (this.className === "digit"){
        if (isEqual){
            display.textContent = "";
            isEqual = false;
            
        }
        display.textContent += this.textContent;
        if (this.textContent === "."){
            decimal.setAttribute('style', 'pointer-events: none');
            decimalPressed = true;
        }
    }

    //If a button with className "operator" is pressed
    if (this.className === "operator"){
        decimalPressed = false;
        a.push(Number(display.textContent));
        if (a[1] === 0 && operator === "/"){
            display.textContent = "";
            display.textContent = "You should have known better...";
        }
        else{
            if(a.length > 1){
                result = operate(operator, a[0], a[1]);
                display.textContent = result;
                a = [];
                a.push(result);
                isEqual = true;
                operator = this.textContent;
                
            }
            else{
                isEqual = false;
                display.textContent = "";
                operator = this.textContent;
            }
        }
        
        
        console.log(`${a[0]} ${a[1]} ${a[2]}`);
    }

    //If a button with className "equal" is pressed
    if (this.className == "equal"){
        decimalPressed = false;
        a.push(Number(display.textContent));
        console.log(`Equal ${a[0]} ${a[1]} ${a[2]}`);
        if (a[1] === 0 && operator === "/"){
            display.textContent = "";
            display.textContent = "You should have known better...";
        }
        else{
            result = operate(operator, a[0], a[1]);
            display.textContent = `${result}`;
            a = [];
            isEqual = true;    
        }
        
    }

    //If the cancel button is pressed
    if (this.textContent === "C"){
        decimalPressed = false;
        display.textContent = "";
        a = [];
    }

    //If the backspace button is pressed
    if (this.textContent === "Back"){
        content = display.textContent;
        content = content.substring(0, content.length - 1);
        display.textContent = content;
    }

    if (decimalPressed === false){
        decimal.removeAttribute("style", "pointer-events: none");
    }
}

const buttons = document.querySelectorAll("button");
const equal = document.querySelector(".equal");
const cancel = document.querySelector("#cancel");
const backspace = document.querySelector("#backspace");
equal.addEventListener("click", displayValue);
document.addEventListener('keydown', (event) => {
	buttons.forEach((button)=>{
        if (event.key === button.textContent){
            console.log('button '+ button.className);
            button.click();
        }
    })
    if (event.key === "Enter"){
        equal.click();
    }
    if (event.key === "Backspace"){
        backspace.click();
    }
    if (event.key === "Escape"){
        cancel.click();
    }
});
buttons.forEach((button)=>{
    button.addEventListener("click", displayValue);
});
