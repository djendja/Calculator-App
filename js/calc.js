let numberButtons = document.querySelectorAll('[data-number]');
let operationButtons = document.querySelectorAll('[data-operation]');
let equalsButton = document.querySelector('[data-equals]');
let clearButton = document.querySelector('[data-clear]');
let display = document.getElementById('result');



let num = "";
let numsArray = [];
let operatorArray = [];

function showNumbers(number) {
display.value += number.innerHTML;
        num += number.innerHTML;
    //    numsArray.push(parseInt(num));
        num = parseInt(num);
       console.log(numsArray); 
}


function showOperators(operator) {
    numsArray.push(num);
    display.value = num + operator.innerHTML;
    operatorArray.push(operator.innerHTML);
    num = "";
    // console.log(num);
}

numberButtons.forEach((el) => {
    el.addEventListener("click", function ()  {
        showNumbers(el); 
    });
});

operationButtons.forEach((el) => {
    el.addEventListener("click", function() {
        showOperators(el);
})
});

clearButton.addEventListener("click", clear);

function clear() {
    display.value = "";
    numsArray = [];
    operatorArray = [];
    result = 0;
    num = "";
}

equalsButton.addEventListener("click", equals);

let result;

function equals() {
    numsArray.push(num);
    result = numsArray[0];
        for(let i = 0; i < numsArray.length-1; i++) {
            switch(operatorArray[i]) {
                case '+':
                    result += numsArray[i+1];
                    break;
                case '-':
                    result -= numsArray[i+1];
                    break;
                case '*':
                    result *= numsArray[i+1];
                    break;
                case '/':
                    result /= numsArray[i+1];
                    break;
            }
        }
    display.value = result;
    numsArray = [];
    num = result;
    // numsArray = [numsArray[0]];
}