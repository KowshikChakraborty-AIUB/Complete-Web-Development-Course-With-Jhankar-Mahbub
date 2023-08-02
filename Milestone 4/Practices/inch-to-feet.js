// Convert Inch to Feet

function inchToFeet(inches){
    let feet = inches/12;
    return feet;
}

let inchesToConvert = 84;

console.log('Enter Your Number in Inches:', inchesToConvert);

let covertToFeet = inchToFeet(inchesToConvert);

console.log('Your Coverted Number in Feet:', covertToFeet);


// Covert Miles to Kilometer

function milesToKm(miles){
    let km = miles*1.609;
    return km;
}

let milesToConvert = 2;

console.log('Enter Your Number in Miles:', milesToConvert);

let covertToKm = milesToKm(milesToConvert);

console.log('Your Coverted Number in Kilometer:', covertToKm);