//Reversed string chars
function charReverse(myString){
    let reversed = '';
    for(i=myString.length-1; i>=0; i--){
        element = myString[i];
        reversed = reversed + element;
    }
    return reversed;
}

//Reversed string words
function wordReverse(myString){
    const myStringArray = myString.split(' ');
    const wordReversed = [];
    for(i=myStringArray.length-1; i>=0; i--){
        const element = myStringArray[i];
        wordReversed.push(element);
    }
    return wordReversed.join(' ');
}

const myString = 'I am a good boy';
console.log('String is:', myString);

const reversedString = charReverse(myString);
console.log('Reversed string is:', reversedString);

const reversedWordString = wordReverse(myString);
console.log('Reversed string in word is:', reversedWordString);