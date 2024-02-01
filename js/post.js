function loadPost() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPost(data))
}

function displayPost(post) {
    const postContainer = document.getElementById('post-container')
    for (const user of post) {
        const postDiv = document.createElement('div');
        postDiv.classList.add('post')
        postDiv.innerHTML = `
        <h2>User-${user.id}</h2>
        <h5>Post Title:${user.title}</h5>
        <p>Post Description:${user.body}</p>
        `
        postContainer.appendChild(postDiv)
    }
}
loadPost();
