//remove duplicate elements from an array
function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const elements = names[i];
        if(unique.includes(elements) === false){
            unique.push(elements);
        }
    }
    return unique;
}


const names = ['Jodu', 'Modu', 'Kodu', 'Sodu', 'Kalu', 'Kalu', 'Jodu', 'Malu', 'Sodu', 'Modu', 'Kodu']
console.log('Registered People for Biriyani Packets:', names);

const uniqueNames = removeDuplicate(names);
console.log('Unique People Lists:', uniqueNames);