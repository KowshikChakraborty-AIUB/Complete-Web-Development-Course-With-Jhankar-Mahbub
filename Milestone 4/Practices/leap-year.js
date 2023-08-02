// Check Leap Year

function leapYearChecker(year){
    if(year%4==0){
        console.log(year,'is leap year');
    }
    else{
        console.log(year,'is not leap year');
    }
}

let year = 2028;
console.log('Enter your year:',year);

leapYearChecker(year);