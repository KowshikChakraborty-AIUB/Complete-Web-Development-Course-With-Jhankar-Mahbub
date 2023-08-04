//includes

const lyrics = 'Cause you only know you\'ve been high when you\'re feeling low, only hate the road when you\'re missing home, only know you love her when you let her go.';

const search = 'MIsSiNg';
const searchLowerCase = search.toLowerCase();
const lyricsLowerCase = lyrics.toLowerCase();


const doesExist = lyricsLowerCase.includes(searchLowerCase);
console.log(doesExist);


//indexOf()

//console.log(lyrics.indexOf('only'));

if(lyrics.indexOf('only') !== -1){
    console.log('Found it!');
}else{
    console.log('Can not find it');
}


//startsWith()

console.log(lyrics.startsWith('Cause'));


//endsWith()

console.log(lyrics.endsWith('.'));