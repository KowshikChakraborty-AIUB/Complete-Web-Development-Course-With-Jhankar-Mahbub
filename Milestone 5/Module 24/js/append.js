// 1. Where to append
const placeList = document.getElementById('places-list');

// 2. What to be appended
const li = document.createElement('li');
li.innerText = 'Himalaya';

// 3. add the child
placeList.appendChild(li);


// 1. Where to append
const mainContainer = document.getElementById('main-container');

// 2. What to be appended
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Biriyani';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'Biriyani';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'Biriyani';
ul.appendChild(li3);

section.appendChild(ul);

// 3. add the child
mainContainer.appendChild(section);


// set innerHTML directly 

const sectionDress = document.createElement('section');

sectionDress.innerHTML = `
    <h1>My Dress</h1>
    <ul>
        <li>T-shirt</li>
        <li>Pant</li>
        <li>Lungi</li>
    </ul>
`;

mainContainer.appendChild(sectionDress);