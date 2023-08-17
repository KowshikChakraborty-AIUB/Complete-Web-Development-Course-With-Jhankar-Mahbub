function getInputElementByIdBold(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.fontWeight = 'bold');
    return inputElementStyle;
}
function getInputElementByIdItalic(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.fontStyle = 'italic');
    return inputElementStyle;
}
function getInputElementByIdUnderline(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.textDecoration = 'underline');
    return inputElementStyle;
}

function getInputElementByIdLeft(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = inputElement.style.textAlign = 'left';
    return inputElementStyle;
}
function getInputElementByIdCenter(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = inputElement.style.textAlign = 'center';
    return inputElementStyle;
}
function getInputElementByIdRight(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = inputElement.style.textAlign = 'right';
    return inputElementStyle;
}
function getInputElementByIdJustify(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = inputElement.style.textAlign = 'justify';
    return inputElementStyle;
}