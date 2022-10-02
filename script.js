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
        case 'add':
            return add(a, b);
        break;
        case "subtract":
            return subtract(a, b);
        break;
        case "multiply":
            return multiply(a, b);
        break;
        case "divide":
            return divide(a, b);
        break;
    }

}



const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener("click", ()=>{console.log(this.textContent)});
});
