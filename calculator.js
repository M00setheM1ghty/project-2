/* define elements */

/* the numbers/operations that will be shown in the output div(=display)*/
let currentNums = document.querySelector('[data-current-nums]');
let prevNums = document.querySelector('[data-prev-nums]');
/* operands and number buttons*/
let dataOperand = document.querySelectorAll('[data-operand]');
let numberButton = document.querySelectorAll('[data-number]');

/*del and AC buttons*/
let delBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-clearall]');

/* eventListeners + functionality */
/*add event listener to all number buttons and append number to display */
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        currentNums.innerHTML += button.innerText
    })
})

/* link clearDisplay() to AC button */
allClearBtn.addEventListener('click', clearDisplay);
/*link deleteLast() to del button */
delBtn.addEventListener('click', deleteLast);

/* required functions */
/*clear display: */
function clearDisplay() {
    currentNums.innerHTML = '';
    prevNums.innerHTML = '';
}
/* delete last entered num (DEL button function) */
function deleteLast() {
    currentNums.innerHTML = currentNums.innerHTML.slice(1, -1);
}
/*. add numbers to display */


/* add operand to display */

/* select operation */

/* solve the given equation */


