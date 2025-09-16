// Get reference to the results table
let table = document.getElementById("resultsTable");

let keepGoing = true;

while (keepGoing) {
    // Prompt for X value
    let x = prompt("Enter the first number (x):");
    if (x === null) break; // user clicked Cancel

    // Prompt for Y value
    let y = prompt("Enter the second number (y):");
    if (y === null) break; // user clicked Cancel

    // Prompt for operator
    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break; // user clicked Cancel

    // Create a new row
    let row = table.insertRow();
    let cellX = row.insertCell(0);
    let cellOp = row.insertCell(1);
    let cellY = row.insertCell(2);
    let cellResult = row.insertCell(3);

    cellX.textContent = x;
    cellOp.textContent = operator;
    cellY.textContent = y;

    // Convert to numbers
    let numX = parseFloat(x);
    let numY = parseFloat(y);

    // Validate input
    if (isNaN(numX) || isNaN(numY)) {
        cellResult.textContent = "Error: Non-numeric input.";
    } else {
        // Perform calculation
        let result;
        switch (operator) {
            case "+":
                result = numX + numY;
                break;
            case "-":
                result = numX - numY;
                break;
            case "*":
                result = numX * numY;
                break;
            case "/":
                result = (numY === 0) ? "Error: Division by zero." : numX / numY;
                break;
            case "%":
                result = numX % numY;
                break;
            default:
                result = "Error: Invalid operator.";
        }
        cellResult.textContent = result;
    }

    // Ask if the user wants to continue
    keepGoing = confirm("Do you want to perform another calculation?");
}