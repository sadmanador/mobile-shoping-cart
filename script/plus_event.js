document.getElementById('plus-phone').addEventListener('click', () => {
    const quantityPhone = document.getElementById('quantity-phone');
    const quantityPhoneString = quantityPhone.value;
    const quantityPhoneInt = parseInt(quantityPhoneString);
    
    const newQuantityPhone = quantityPhoneInt + 1;
    quantityPhone.value = newQuantityPhone;

    const subTotalField = document.getElementById('subtotal');
    const subtotalString = subTotalField.innerText;
    const subtotalInt = 
});