// Text Styling (Bold, Italic, Underline)
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

// Text Align (Left, Center, Right, Justify)
function getInputElementByIdTextAlign(inputElementId, align){
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.textAlign = align);
    return inputElementStyle;
}

// Text Font Size
function getInputElementByIdFontSize(inputElementId){
    const fontSizeInputEelement = document.getElementById('font-size');
    const fontSizeInputEelementString = fontSizeInputEelement.value;
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.fontSize = fontSizeInputEelementString+'px');
    return inputElementStyle;
}

// Text Uppercase, Lowercase

function getElementByIdTextCase(inputElementId){
    const inputElement = document.getElementById(inputElementId);
    const inputElementString = inputElement.innerText;

    if(inputElementString === inputElementString.toLowerCase()){
        inputElement.innerText = inputElementString.toUpperCase();
    }else if(inputElementString === inputElementString.toUpperCase()){
        inputElement.innerText = inputElementString.toLowerCase();
    }
}

// Text color change
function getElementByIdTextColor(inputElementId){
    const colorInputElement = document.getElementById('text-color');
    const colorInputElementString = colorInputElement.value;
    const inputElement = document.getElementById(inputElementId);
    const inputElementStyle = (inputElement.style.color = colorInputElementString);
    return inputElementStyle;

}