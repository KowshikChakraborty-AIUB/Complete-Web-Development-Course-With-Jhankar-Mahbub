// Check even or odd numbers

function evenOddChecker(remainder){
    if(remainder%2==0){
        return 'The number is even';
    }
    else{
        return 'The number is odd';
    }
}

let numbers = 6;
console.log('Enter your number:', numbers);

console.log(evenOddChecker(numbers));