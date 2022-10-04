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
    let totalCasePrice = newUnitQuantity * unitPrice;

    const unitTotalText = document.getElementById(id);
    unitTotalText.innerText = totalCasePrice;

    return totalCasePrice;
}

function subTotal(oppositeID, subtotalID, selectedItemInt){
    const oppositeFiled = document.getElementById(oppositeID);
    const oppositeString = oppositeFiled.innerText;
    const oppositeInt = parseInt(oppositeString);

    const subTotal = document.getElementById(subtotalID);
    const subTotalAmount =  selectedItemInt + oppositeInt;
    subTotal.innerText = subTotalAmount;
    return subTotalAmount;
}

function taxEstimation(subTotalCalculation){
    const taxTextField = document.getElementById('tax');
    const estimatedTaxString = (subTotalCalculation * 0.1).toFixed(2);
    const estimatedTax =  parseFloat(estimatedTaxString);
    taxTextField.innerText = estimatedTax;
    return estimatedTax;
}

function grandTotalCalculation(estimatedTax, subTotalCalculation){
    const grandTotalField = document.getElementById('grand-total');
    const calculationGrandTotal = estimatedTax + subTotalCalculation;
    grandTotalField.innerText = calculationGrandTotal;
}