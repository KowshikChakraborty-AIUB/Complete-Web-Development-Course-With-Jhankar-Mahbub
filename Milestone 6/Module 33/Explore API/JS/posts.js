function loadPosts(){
    const url = 'https://jsonplaceholder.typicode.com/posts';
    fetch(url)
      .then(response => response.json())
      .then(json => displayPosts(json))
}

function displayPosts(posts){
    const postContainer = document.getElementById('posts-container');
    for(const post of posts){
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `
            <h4>User: ${post.id}</h4>
            <h5>Post Title: ${post.title}</h5>
            <p>Post Description: ${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}

loadPosts();