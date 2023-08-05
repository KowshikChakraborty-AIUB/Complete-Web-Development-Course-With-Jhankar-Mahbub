/*
1. Show output from 1-50,
2. If the number is divisible by 3, then instead of the number, show 'foo'
3. If the number is divisible by 5, then instead of the number, show 'bar'
4. If the number is divisible by both 3 and 5, then instead of the number, show 'foobar'
*/

const arr = [];

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        //console.log('foobar');
        arr.push('foobar');
    }
    else if(i%3 === 0){
        //console.log('foo');
        arr.push('foo');
    }
    else if(i%5 === 0){
        //console.log('bar');
        arr.push('bar');
    }
    else{
        //console.log(i);
        arr.push(i);
    }
}

console.log(arr);