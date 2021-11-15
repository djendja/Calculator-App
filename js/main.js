let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let clearButton = document.querySelector('[data-clear]');
let display = document.getElementById('result');

let num = "";
let numsArray = [];
let operatorArray = [];

//get number and add operator


let buttons = document.getElementsByClassName('calc-wrapper__button');



for(let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", function() {
        display.value += numberButtons[i].innerHTML;
        numsArray.push(parseInt(numberButtons[i].innerHTML));
        console.log(numsArray);
    })
}

numsArray.forEach((el, i)  => {
     el+2 
    });

let arrFilter = numsArray.filter((el) => {
    return el % 2 === 0 
})


let arr = [7,7,7];
console.log(numsArray);
let num1;
// let num1 = Number(numsArray.join(''));
// console.log(numsArray.join(""));
let test = Number(arr.join(''));
console.log(test);
console.log(num1);

for(let i = 0; i < operationButtons.length; i++) {
    operationButtons[i].addEventListener("click", function() {
        num1 = parseInt(Number(numsArray.join('')));
        display.value = num1 + operationButtons[i].innerHTML;
        operatorArray.push(operationButtons[i].innerHTML);
        console.log(num1);
    })
}

console.log(operatorArray);

if(operatorArray.length === 1) {
    
}

let result;

equalsButton.addEventListener("click", equal);

function equal() {
    for(let i = 0; i < operatorArray.length; i++) {
        switch (operatorArray[i]) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
        }
    }
    return display.value = result;
}

clearButton.addEventListener("click",clear);

function clear() {
    display.value = "";
    numsArray = [];
    operatorArray = [];
}





/*let a=5;
let b=3;

var f = 77;

// console.log(sum(a, b));
//console.log(sub(a, b));
//console.log(div(a, b));
//console.log(mul(a, b));
// console.log(c);


// var sum = 6;

function sum(x, y) {
    // console.log("F =", f);
    var f = 55;
    return x + y; 
}

// console.log(sum(a,b));




function sub(x, y) {
    return x - y; 
}

function div(x, y) {
    return x / y; 
}

function mul(x, y) {
    return x * y; 
}

let arrowFunction =  a  =>  {
  return a + b;
}
console.log(arrowFunction(a));

*/
