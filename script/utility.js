function updateInputNumber(isIncrease, id){
    const inputField = document.getElementById(id);
    const inputFieldString = inputField.value;
    const inputFieldValue = parseInt(inputFieldString);

    let newUnitQuantity;

    if(isIncrease){
        newUnitQuantity = inputFieldValue + 1;
    } else {
        newUnitQuantity = inputFieldValue - 1;
    }

    inputField.value = newUnitQuantity;
    return newUnitQuantity;
}

function updateItemTotalPrice(newUnitQuantity, unitPrice, id){
    const totalCasePrice = newUnitQuantity * unitPrice;
    const unitTotalText = document.getElementById(id);
    unitTotalText.innerText = totalCasePrice;
}