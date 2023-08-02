// Sum of an array

function arraySum(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        let element = arr[i];
        sum = sum + element;
        console.log('Processing...', sum);
    }
    return sum;
}


// Odd numbers of an array

function arrayOddNumbers(arr){
    let oddNumbers = [];
    for(var i=0; i<arr.length; i++){
        if((arr[i] % 2)!==0){
            oddNumbers.push(arr[i]);
        }
    }
    return oddNumbers;
}

let arr = [50, 101, 110, 5, 31];
console.log('Enter array numbers:', arr);

odds = arrayOddNumbers(arr);
console.log('Odd numbers are:', odds);

oddsSum = arraySum(odds);
console.log('Sum of odd number is:', oddsSum);

