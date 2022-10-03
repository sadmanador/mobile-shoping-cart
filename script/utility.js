function getValueFromInputFieldById(inputFiledID){
    const valueFromInputField = document.getElementById(inputFiledID);
    const valueFromInputFieldString = valueFromInputField.value;
    const valueFromInputFieldInt = parseInt(valueFromInputFieldString); 
}


function getValueFromTextFieldById(textFiledID){
    const valueFromTextFiled = document.getElementById(textFiledID);
    const valueFromTextFiledString = valueFromTextFiled.innerText;
    const valueFromTextFiledInt = parseInt(valueFromTextFiledString);
}

function setTextValueByID(textField, value){
    const getTextFieldId = document.getElementById(textField);
    getTextFieldId.innerText = value;
    return getTextFieldId;
}

function setInputValueByID(inputField, value){
    const getInputField = document.getElementById(inputField);
    getInputField.value = value;
    return getInputField;
}