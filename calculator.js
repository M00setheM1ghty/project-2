/* define elements */

/* the numbers/operations that will be shown in the output div(=display)*/
let currentNums = document.querySelector('[data-current-nums]');
let prevNums = document.querySelector('[data-prev-nums]');
/* operands and number buttons*/
let dataOperand = document.querySelectorAll('[data-operand]');
let currentDataOperand;
let numberButton = document.querySelectorAll('[data-number]');

/*del, AC and equals buttons*/
let delBtn = document.querySelector('[data-delete]');
let allClearBtn = document.querySelector('[data-clearall]');
let equalsBtn = document.querySelector('[data-equals]');

/* eventListeners + functionality */
/*add event listener to all number buttons and append number to display */
numberButton.forEach(button => {
    button.addEventListener('click', () => {
        // if(numberButton.innerHTML === '.' && currentNums.innerHTML.includes('.')) return
        currentNums.innerHTML += button.innerText
    })
})
/*add eventlistener to operands */
dataOperand.forEach(button => {
    button.addEventListener('click', () => {
        prevNums.innerHTML = currentNums.innerHTML;
        currentNums.innerHTML = '';
    })
})
// set current data operand
dataOperand.forEach(button =>{
    button.addEventListener('click', ()=>{
        currentDataOperand = button.innerHTML
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
    currentDataOperand = '';
}
/* delete last entered num (DEL button function) */
function deleteLast() {
    currentNums.innerHTML = currentNums.innerHTML.slice(0, -1);
}
/* solve the given equation 
link data-equals button to solveEquation() */
equalsBtn.addEventListener('click', () => {
    let solved;
    let current = parseFloat(currentNums.innerHTML);
    let previous = parseFloat(prevNums.innerHTML);
    switch (currentDataOperand) {
        case '+':
            solved = current + previous;
            break;
        case '-':
            solved = previous - current;
            break;
        case '*':
            solved = current * previous;
            break;
        case '/':
            solved = previous / current;
            break;
        case '%':
            solved = previous % current;
            break;
    }
    prevNums.innerHTML = '';
    currentNums.innerHTML = solved;
});

