document.getElementById('plus-phone').addEventListener('click', function(){
    const newPhoneQuantity = updateInputNumber(true, 'quantity-phone');

    updateItemTotalPrice(newPhoneQuantity, 1219, 'phone-price')
});

document.getElementById('minus-phone').addEventListener('click', function(){
    const newPhoneQuantity = updateInputNumber(false, 'quantity-phone');

    updateItemTotalPrice(newPhoneQuantity, 1219, 'phone-price')
})