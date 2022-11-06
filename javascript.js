let currentNum = "";
let previousNum = "";
let operator = "";

const displayCurrentNumber = document.querySelector('.currentNumber');
const displayPreviousNumber = document.querySelector('.previousNumber');

const equal = document.querySelector('.equal');

const decimal = document.querySelector('.punct');

const clear = document.querySelector('.clear');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

numberButtons.forEach(btn =>{
    btn.addEventListener('click', (e) => {
        handleNumber(e.target.textContent);
    });
});

function handleNumber(number){
    if( currentNum.length <= 11){
        currentNum += number;
        displayCurrentNumber.textContent = number;
    }
}

operatorButtons.forEach((btn) => {
    btn.addEventListener("click", (e) =>{
        handleOperator(e.target.textContent)
    })
})

function handleOperator(op){
    operator = op;
    previousNum = currentNum;
    displayPreviousNumber.textContent = previousNum + " " + operator;
    currentNum = "";
    displayCurrentNumber.textContent = "";
}

function calculate(){
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);

    if(operator === "+"){
        previousNum += currentNum;
    }
    else if(operator === "-"){
        previousNum -=  currentNum;
    }
    else if(operator === "x"){
        previousNum *=  currentNum;
    }
    else if(operator === "/"){
        if(currentNum <= 0){
           previousNum = "Error";
           displayPreviousNumber.textContent = "";
           displayCurrentNumber.textContent = previousNum;
           operator = "";
           return
        }
        previousNum /=  currentNum;
    }

    previousNum = previousNum.toString();
    displayPreviousNumber.textContent = "";
    displayCurrentNumber.textContent = previousNum;
    operator = "";
}

