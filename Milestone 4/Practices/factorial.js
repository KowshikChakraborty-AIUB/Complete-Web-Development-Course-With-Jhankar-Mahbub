// Print Factorial of any number

function factorial(num){
    let factorial = 1;
    for(let i=1; i<=num; i++){
        factorial = factorial * i;
    }
    return factorial;
}

let num = 5;
console.log('Enter your number:', num);

console.log('The factorial of' + ' ' + num + ' ' + 'is:', factorial(num));