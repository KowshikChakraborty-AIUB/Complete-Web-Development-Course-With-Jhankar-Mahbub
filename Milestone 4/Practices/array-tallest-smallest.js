//Find Tallest Number
function maxInArray(number){
    let largest = number[0];
    for(let i=0; i<number.length; i++){
        const element = number[i];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

//Find Smallest Number
function minInArray(number){
    let min = number[0];
    for(let i=0; i<number.length; i++){
        const element = number[i];
        if(element < min){
            min = element;
        }
    }
    return min;
}

const heights = [90, 300, 800, 115, 700];
console.log('Heights are:', heights);

const tallest = maxInArray(heights);
console.log('Tallest number is:', tallest);

const smallest = minInArray(heights);
console.log('Smallest number is:', smallest);

