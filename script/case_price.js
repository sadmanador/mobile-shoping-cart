//add eventlister
//catch value caseQuantity
//convert the value to an int
//add 1 with the previous caseQuantity
//set the new caseQuantity to the caseInputField

document.getElementById('plus-case').addEventListener('click', function(){
    const newCaseQuantity = updateInputNumber(true, 'quantity-case');


    updateItemTotalPrice(newCaseQuantity, 59, 'case-price')
});

document.getElementById('minus-case').addEventListener('click', function(){
    const newCaseQuantity = updateInputNumber(false, 'quantity-case');

    updateItemTotalPrice(newCaseQuantity, 59, 'case-price')
})