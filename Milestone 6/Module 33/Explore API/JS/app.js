function loadData2(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';
    fetch(url)
      .then(response => response.json())
      .then(json => console.log(json))
}

function loadUsers(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(json => displayUsers(json))
}


function loadUsers2(){
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(json => displayUsers2(json))
}

function displayUsers(data){
    console.log(data);
}

function displayUsers2(data){
    const ul = document.getElementById('users-list');

    for(user of data){
        const li = document.createElement('li');
        li.innerText = user.name;
        ul.appendChild(li);
    }
}