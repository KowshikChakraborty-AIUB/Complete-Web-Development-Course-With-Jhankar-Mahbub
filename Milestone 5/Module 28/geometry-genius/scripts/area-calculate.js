function caculateAreaTriangle(){
    // get triangle base value
    const baseField = document.getElementById('triangle-b');
    const baseValueString = baseField.value;
    const baseValue = parseFloat(baseValueString);

    // get triangle height value
    const heightField = document.getElementById('triangle-h');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);

    // calculate triangle area
    const area = 0.5 * baseValue * heightValue;
    console.log(area);

    // display the area
    const displayArea = document.getElementById('triangle-area');
    displayArea.innerText = area;
}

function caculateAreaRectangle(){
    // get rectangle width
    const widthField = document.getElementById('rectangle-w');
    const widthValueString = widthField.value;
    const widthValue = parseFloat(widthValueString);

    // get rectangle length
    const lengthField = document.getElementById('rectangle-l');
    const lengthValueString = lengthField.value;
    const lengthValue = parseFloat(lengthValueString); 

    // calculate area
    const area = widthValue * lengthValue;

    // display area
    const displayArea = document.getElementById('rectangle-area');
    displayArea.innerText = area;
}