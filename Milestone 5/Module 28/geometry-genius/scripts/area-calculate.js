// re-usable function ==> to reduce duplicate code

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValuestring = inputField.value;
    const inputValue = parseFloat(inputValuestring);
    return inputValue;
}

function displayInputResult(displayResultId, area){
    const displayResult = document.getElementById(displayResultId)
    displayResult.innerText = area; //no need to return this, we'll just display text.
}

// Area Calculations

function caculateAreaTriangle(){
    // get triangle base value
    const baseValue = getInputValueById('triangle-b')

    // get triangle height value
    const heightValue = getInputValueById('triangle-h');

    // calculate triangle area
    const area = (0.5 * baseValue * heightValue).toFixed(2);

    // display the area
    displayInputResult('triangle-area', area);
}

function caculateAreaRectangle(){
    // get rectangle width
    const widthValue = getInputValueById('rectangle-w');

    // get rectangle length
    const lengthValue = getInputValueById('rectangle-l'); 

    // calculate area
    const area = (widthValue * lengthValue).toFixed(2);

    // display area
    displayInputResult('rectangle-area', area);
}

function caculateAreaParallelogram(){
    const baseValue = getInputValueById('parallelogram-b');

    const heightValue = getInputValueById('parallelogram-h');

    const area = (baseValue * heightValue).toFixed(2);

    displayInputResult('parallelogram-area', area);

}

function caculateAreaRhombus(){
    const d1value = getInputValueById('rhombus-d1');

    const d2value = getInputValueById('rhombus-d2');

    const area = (0.5 * d1value * d2value).toFixed(2);

    displayInputResult('rhombus-area', area);
}
function caculateAreaPentagon(){
    const pValue = getInputValueById('pentagon-p');

    const bValue = getInputValueById('pentagon-b');

    const area = (0.5 * pValue * bValue).toFixed(2);

    displayInputResult('pentagon-area', area);
}
function caculateAreaEllipse(){
    const aValue = getInputValueById('ellipse-a');

    const bValue = getInputValueById('ellipse-b');

    const area = (3.1416 * aValue * bValue).toFixed(2);

    displayInputResult('ellipse-area', area);
}