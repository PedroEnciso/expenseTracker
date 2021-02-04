
let totalRows = 1;
let numberOfRows = document.getElementById('expenseTable').rows[0].cells.length;

function addToTable() {
    let expenseTable = document.getElementById('expenseTable');
    let newRow = expenseTable.insertRow(totalRows);

    newRow = createTableRow(newRow);

    totalRows++;
}

function createTableRow(newRow) {
    //get info from the forms
    let inputName = document.getElementById('name').value;
    let inputDate = document.getElementById('date').value;
    let inputAmount = document.getElementById('amount').value;

    let nameTd = document.createElement('td');
    let dateTd = document.createElement('td');
    let amountTd = document.createElement('td');

    //convert info from the forms into text nodes
    let nameText = document.createTextNode(inputName);
    let dateText = document.createTextNode(inputDate);
    let amountText = document.createTextNode(inputAmount);

    let buttonTd = createButton();


    for (i = 0; i < (numberOfRows); i++) {
        let column = newRow.insertCell(i);
        if (i == 0) { column.appendChild(nameText); }
        else if (i == 1) { column.appendChild(dateText); }
        else if (i == 2) { column.appendChild(amountText); }
        else if (i == 3) { column.appendChild(buttonTd); }
    }

    return newRow;
}


function createButton() {
    //create a button to clear the row for the last column
    let clearButton = document.createElement('button');
    clearButton.innerHTML = "Clear Row";
    clearButton.onclick = function () {
        this.parentElement.parentElement.parentElement.style.display = 'none';
    }
    //put button into a table data element
    let buttonTd = document.createElement('td');
    buttonTd.appendChild(clearButton);

    return buttonTd;
}

