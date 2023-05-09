/* define elements */

/* the numbers/operations that will be shown in the output div(=display)*/
let currentNums = document.querySelector('[data-current-nums]');
let prevNums = document.querySelector('[data-prev-nums]');
/* operands and number buttons*/
let dataOperands = document.querySelectorAll('[data-operand]');
let numberButtons = document.querySelectorAll('[data-number]');

/*del and AC buttons*/
let delBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-clearall]');

/* required functions */
/*1. clear display: */
function clearDisplay(){
    currentNums = '';
    prevNums = '';
}

/*. add numbers to display */
function addNums(){
    numberButtons.forEach.addEventlistener('click', ()=>{
        currentNums.append(numberButtons.innerText);
    })
}

/* add operand to display */

/* select operation */

/* solve the given equation */

/* delete last entered num (DEL button function) */

/* link clear display to AC button */
