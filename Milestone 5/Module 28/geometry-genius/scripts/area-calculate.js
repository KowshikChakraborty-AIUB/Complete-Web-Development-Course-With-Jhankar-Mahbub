function caculateAreaTriangle(){
    // get triangle base value
    const baseField = document.getElementById('triangle-b');
    const baseValueString = baseField.value;
    const baseValue = parseFloat(baseValueString);
    console.log(baseValue);

    // get triangle height value
    const heightField = document.getElementById('triangle-h');
    const heightValueString = heightField.value;
    const heightValue = parseFloat(heightValueString);
    console.log(heightValue);
}