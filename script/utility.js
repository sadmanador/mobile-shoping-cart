function getValueFromInputFieldByID(inputFiledID){
    const valueFromInputField = document.getElementById(inputFiledID);
    const valueFromInputFieldString = valueFromInputField.value;
    const valueFromInputFieldInt = parseInt(valueFromInputFieldString); 
}


function getValueFromTextFieldByID(textFiledID){
    const valueFromTextFiled = document.getElementById(textFiledID);
    const valueFromTextFiledString = valueFromTextFiled.innerText;
    const valueFromTextFiledInt = parseInt(valueFromTextFiledString);
}