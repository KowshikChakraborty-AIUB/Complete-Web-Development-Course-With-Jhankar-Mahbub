// option-2 ==> add function in onclick event (will use this)
function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// option-3 get the event using id
const makeBlue = document.getElementById('make-blue');
makeBlue.onclick = makeBlueFunction; //do not need to call the function, simply write the name of the fuction.

function makeBlueFunction (){
    document.body.style.backgroundColor = 'blue';
}

// option-3 alternative => direct write the function in makePurple.onclick
const makePurple = document.getElementById('make-purple');
makePurple.onclick = function makePurpleFunction(){
    document.body.style.backgroundColor = 'purple';
};

// option-4 adding addEventListener function
const makePink = document.getElementById('make-pink');
makePink.addEventListener('click', makePinkFunction);

function makePinkFunction(){
    document.body.style.backgroundColor = 'pink';
};

// option-4 alternative => direct write the function in makeGreen.addEventListener
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreenFunction(){
    document.body.style.backgroundColor = 'green';
})


// option-4 the ultimate final (will use this)
const makeGoldenRod = document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})