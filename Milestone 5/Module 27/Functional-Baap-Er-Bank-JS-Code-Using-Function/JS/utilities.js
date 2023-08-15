function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = '';
    return inputFieldValue;
}

function getDisplayElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function setNewDisplayElementValueById(elementId, newElementTotal){
    const element = document.getElementById(elementId);
    element.innerText = newElementTotal;
}