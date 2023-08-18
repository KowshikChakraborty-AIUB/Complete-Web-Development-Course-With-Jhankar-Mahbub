// Text Styling (Bold, Italic, Underline)

document.getElementById('make-bold').addEventListener('click', function () {
    getInputElementByIdBold('text-area');
})
document.getElementById('make-italic').addEventListener('click', function () {
    getInputElementByIdItalic('text-area');
})
document.getElementById('make-underline').addEventListener('click', function () {
    getInputElementByIdUnderline('text-area');
})

// Text Align (Left, Center, Right, Justify)

document.getElementById('make-left').addEventListener('click', function () {
    getInputElementByIdTextAlign('text-area', 'left');
})
document.getElementById('make-center').addEventListener('click', function () {
    getInputElementByIdTextAlign('text-area', 'center');
})
document.getElementById('make-right').addEventListener('click', function () {
    getInputElementByIdTextAlign('text-area', 'right');
})
document.getElementById('make-justify').addEventListener('click', function () {
    getInputElementByIdTextAlign('text-area', 'justify');
})

// Text Font Size

document.getElementById('font-size').addEventListener('input', function(){
    getInputElementByIdFontSize('text-area');
})

// Text uppercase, lowercase

document.getElementById('text-case').addEventListener('click', function(){
    getElementByIdTextCase('text-area');
})

// Text color change
document.getElementById('text-color').addEventListener('input', function(){
    getElementByIdTextColor('text-area');
})