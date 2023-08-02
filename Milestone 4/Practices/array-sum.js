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

let arr = [50, 50, 10, 40, 50];
console.log('Enter array numbers:', arr);

console.log('Sum of array is:', arraySum(arr));