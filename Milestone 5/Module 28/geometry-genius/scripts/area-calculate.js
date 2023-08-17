// re-usable function ==> to reduce duplicate code

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValuestring = inputField.value;
    const inputValue = parseFloat(inputValuestring);
    return inputValue;
}

function displayInputResult(displayResultId, area){
    const displayResult = document.getElementById(displayResultId)
    return displayResult.innerText = area;
}

function caculateAreaTriangle(){
    // get triangle base value
    const baseValue = getInputValueById('triangle-b')

    // get triangle height value
    const heightValue = getInputValueById('triangle-h');

    // calculate triangle area
    const area = 0.5 * baseValue * heightValue;

    // display the area
    displayInputResult('triangle-area', area);
}

function caculateAreaRectangle(){
    // get rectangle width
    const widthValue = getInputValueById('rectangle-w');

    // get rectangle length
    const lengthValue = getInputValueById('rectangle-l'); 

    // calculate area
    const area = widthValue * lengthValue;

    // display area
    displayInputResult('rectangle-area', area);
}

function caculateAreaParallelogram(){
    const baseValue = getInputValueById('parallelogram-b');

    const heightValue = getInputValueById('parallelogram-h');

    const area = baseValue * heightValue;

    displayInputResult('parallelogram-area', area);

}