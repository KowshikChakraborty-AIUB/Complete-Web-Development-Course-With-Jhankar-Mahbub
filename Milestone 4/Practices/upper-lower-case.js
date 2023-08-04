const userName= 'kowshikChakraborty';
const userInput = 'kowshikChakrabortY';

console.log(userName.toLowerCase());
console.log(userName.toUpperCase());

console.log(userName.toLocaleLowerCase()); //Converts all alphabetic characters to lowercase, taking into account the host environment's current locale.

console.log(userName.toLocaleUpperCase()); //Returns a string where all alphabetic characters have been converted to uppercase, taking into account the host environment's current locale.

if(userName.toLowerCase() === userInput.toLowerCase()){
    console.log('Valid User');
}else{
    console.log('Invalid User');
}