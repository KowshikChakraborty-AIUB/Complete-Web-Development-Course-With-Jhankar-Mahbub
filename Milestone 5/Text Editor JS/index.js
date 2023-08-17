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
    getInputElementByIdLeft('text-area');
})
document.getElementById('make-center').addEventListener('click', function () {
    getInputElementByIdCenter('text-area');
})
document.getElementById('make-right').addEventListener('click', function () {
    getInputElementByIdRight('text-area');
})
document.getElementById('make-justify').addEventListener('click', function () {
    getInputElementByIdJustify('text-area');
})