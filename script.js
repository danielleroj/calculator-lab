/*----- state variables -----*/
let input, output = '';
    
	/*----- cached elements  -----*/
const buttonCntr = document.getElementById('buttons');
const clearBtn = document.getElementById('clear'); 
const display = document.getElementById('display');

	/*----- event listeners -----*/
buttonCntr.addEventListener('click', handleClick);
clearBtn.addEventListener('click', initOrClear);

	/*----- functions -----*/
initOrClear (); 

function initOrClear() {
    output = "";
    render();
}

function render() {
    display.innerText = output;
}

// old code, arithmetic not working 
// function handleClick(event) { 
//     input = event.target.innerText;
//     if (isNaN(input) && input !== '=') return;
//     if (input === '=') return calculate();
//     output += input
//     render()
// }
function handleClick(event) { 
    const clickedValue = event.target.innerText;

    // Check if the clicked button is a number, decimal point, or arithmetic operator
    if (!isNaN(clickedValue) || clickedValue === '.' || ['+', '-', '*', '/'].includes(clickedValue)) {
        // Append the clicked value to the output sequence
        output += clickedValue;
    } else if (clickedValue === '=') {
        // If "=" is clicked, perform the calculation
        calculate();
    }

    // Update the display
    render();
}

function calculate() {
    const calculation = new Function(`return ${output}`);
    output = String(calculation());
    render();
}

function calculate() {
    const calculation = new Function(`return ${output}`);
    output = String(calculation());
    render();
}