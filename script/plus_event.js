document.getElementById('plus-phone').addEventListener('click', () => {
    const quantityPhone = document.getElementById('quantity-phone');
    const quantityPhoneString = quantityPhone.value;
    const quantityPhoneInt = parseInt(quantityPhoneString);
    
    const newQuantityPhone = quantityPhoneInt + 1;
    const setInputValue = setInputValueByID('quantity-phone', newQuantityPhone);

    const totalPhonePrice = setTextPriceTotal('phone-price', 'quantity-phone', 1219);

    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = totalPhonePrice;
});





document.getElementById('minus-phone').addEventListener('click', () => {
    const quantityPhone = document.getElementById('quantity-phone');
    const quantityPhoneString = quantityPhone.value;
    const quantityPhoneInt = parseInt(quantityPhoneString);
        
    const newQuantityPhone = quantityPhoneInt - 1;
    const setNewQuant = setInputValueByID('quantity-phone', newQuantityPhone);

    const totalPhonePrice = setTextPriceTotal('phone-price', 'quantity-phone', 1219);

    const subTotal = document.getElementById('subtotal');
    subTotal.innerText = totalPhonePrice;
});

