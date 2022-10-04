document.getElementById('plus-case').addEventListener('click', function(){
    const newCaseQuantity = updateInputNumber(true, 'quantity-case');


    const totalCasePrice = updateItemTotalPrice(newCaseQuantity, 59, 'case-price');

    const subTotalCalculation = subTotal('case-price','subtotal', totalCasePrice)
    
    const estimatedTax = taxEstimation(subTotalCalculation);

    grandTotalCalculation(estimatedTax, subTotalCalculation);
});

document.getElementById('minus-case').addEventListener('click', function(){
    const newCaseQuantity = updateInputNumber(false, 'quantity-case');

    const totalCasePrice = updateItemTotalPrice(newCaseQuantity, 59, 'case-price');

    const subTotalCalculation = subTotal('case-price','subtotal', totalCasePrice)
    
    const estimatedTax = taxEstimation(subTotalCalculation);

    grandTotalCalculation(estimatedTax, subTotalCalculation);
})