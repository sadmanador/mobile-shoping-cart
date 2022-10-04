document.getElementById('plus-phone').addEventListener('click', function(){
    const newPhoneQuantity = updateInputNumber(true, 'quantity-phone');

    const totalPhonePrice = updateItemTotalPrice(newPhoneQuantity, 1219, 'phone-price');
    
    const subTotalCalculation = subTotal('case-price','subtotal', totalPhonePrice)
    
    const estimatedTax = taxEstimation(subTotalCalculation);

    grandTotalCalculation(estimatedTax, subTotalCalculation);
});

document.getElementById('minus-phone').addEventListener('click', function(){
    const newPhoneQuantity = updateInputNumber(false, 'quantity-phone');

    const totalPhonePrice = updateItemTotalPrice(newPhoneQuantity, 1219, 'phone-price');

    const subTotalCalculation = subTotal('case-price','subtotal', totalPhonePrice)
    
    const estimatedTax = taxEstimation(subTotalCalculation);

    grandTotalCalculation(estimatedTax, subTotalCalculation);
})