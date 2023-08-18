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

function areaCalculator(shapeType, area){
    const areaCalculator = document.getElementById('area-calculator');
    const childCount = areaCalculator.childElementCount;
    const p = document.createElement('p');
    p.classList.add('my-2')
    p.innerHTML = `<b>${childCount + 1}. ${shapeType} 
    <span id = 'area-convert'>${area}</span> 
    <span id ='unit-convert'>cm<sup>2</sup></span></b> 
    <button id = "convert-meterSquared" class='btn hover:bg-[#1067d8] bg-[#1090D8] text-white rounded normal-case ml-2'> Convert to m<sup>2</sup> </button>`;
    areaCalculator.appendChild(p);

    document.getElementById('convert-meterSquared').addEventListener('click', function(){
        const unitConvert = document.getElementById('unit-convert');
        const areaToConvert = document.getElementById('area-convert');
        const areaToConvertValue = parseFloat(areaToConvert.innerText);
        const convertedArea = areaToConvertValue/100;
        areaToConvert.innerText = convertedArea;
        unitConvert.innerHTML = `
            m<sup>2</sup>
        ` 
    })
}

// function inputDataValidation(input1, input2){
//     if(isNaN(input1) || isNaN(input2)){
//         alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
//         return input1, input2;
//     }
// }

/**
 * Three ways of Data Validation:
 * 1. set the proper type of the input field (number, text, email)
 * 2. check typeOf() (string, number, array)
 * 3. check isNaN() (not a number)
 */

// Area Calculations

function caculateAreaTriangle(){
    // get triangle base value
    const baseValue = getInputValueById('triangle-b')

    // get triangle height value
    const heightValue = getInputValueById('triangle-h');

    // validation
    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    // calculate triangle area
    const area = (0.5 * baseValue * heightValue).toFixed(2);

    // display the area
    displayInputResult('triangle-area', area);

    // display in Area Calculator Field
    areaCalculator('Triangle', area);
}

function caculateAreaRectangle(){
    // get rectangle width
    const widthValue = getInputValueById('rectangle-w');

    // get rectangle length
    const lengthValue = getInputValueById('rectangle-l'); 

    // validation
    if(isNaN(widthValue) || isNaN(lengthValue)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    // calculate area
    const area = (widthValue * lengthValue).toFixed(2);

    // display area
    displayInputResult('rectangle-area', area);

    // display in Area Calculator Field
    areaCalculator('Rectangle', area);
}

function caculateAreaParallelogram(){
    const baseValue = getInputValueById('parallelogram-b');

    const heightValue = getInputValueById('parallelogram-h');

    if(isNaN(baseValue) || isNaN(heightValue)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    const area = (baseValue * heightValue).toFixed(2);

    displayInputResult('parallelogram-area', area);

    areaCalculator('Parallelogram', area);

}

function caculateAreaRhombus(){
    const d1value = getInputValueById('rhombus-d1');

    const d2value = getInputValueById('rhombus-d2');

    if(isNaN(d1value) || isNaN(d2value)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    const area = (0.5 * d1value * d2value).toFixed(2);

    displayInputResult('rhombus-area', area);

    areaCalculator('Rhombus', area);
}
function caculateAreaPentagon(){
    const pValue = getInputValueById('pentagon-p');

    const bValue = getInputValueById('pentagon-b');

    if(isNaN(pValue) || isNaN(bValue)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    const area = (0.5 * pValue * bValue).toFixed(2);

    displayInputResult('pentagon-area', area);

    areaCalculator('Pentagon', area);
}
function caculateAreaEllipse(){
    const aValue = getInputValueById('ellipse-a');

    const bValue = getInputValueById('ellipse-b');

    if(isNaN(aValue) || isNaN(bValue)){
        alert('ফাইজলামি বন্ধ কইরা চুপচাপ ভদ্র মানুষের মতো নাম্বার দে 😡😡');
        return;
    }

    const area = (3.1416 * aValue * bValue).toFixed(2);

    displayInputResult('ellipse-area', area);

    areaCalculator('Ellipse', area);
}