// option-2 ==> add function in onclick event
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3 get the event using id
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlueFunction; //do not need to call the function, simply write the name of the fuction.

function makeBlueFunction (){
    document.body.style.backgroundColor = 'blue';
}

// option-4 direct write the function in makePurple.onclick
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleFunction(){
    document.body.style.backgroundColor = 'purple';
};