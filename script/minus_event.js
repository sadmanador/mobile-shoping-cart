document.getElementById('minus-phone').addEventListener('click', () => {
    const quantityPhone = document.getElementById('quantity-phone');
    const quantityPhoneString = quantityPhone.value;
    const quantityPhoneInt = parseInt(quantityPhoneString);
    
    const newQuantityPhone = quantityPhoneInt - 1;
    quantityPhone.value = newQuantityPhone;
});