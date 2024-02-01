function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser2(data))
}

function displayUser2(data) {
    for (const user of data) {
        console.log(user.name);
    }
}
