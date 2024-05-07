const mainDiv = document.getElementById("main")
let todos;
//https://jsonplaceholder.typicode.com/posts -- title n body
function APILogic ()
{
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (res) { return res.json() })
        .then((function (res2) { todos = res2;  displayData()}))
        .catch(function (err) { console.log(err) });
}
APILogic()
function displayData ()
{
    todos.forEach(function (td)
    {
        const div = document.createElement('div');
        div.classList.add('todo')
        const p = document.createElement('p');
        p.textContent = td.title;
        div.appendChild(p)
        mainDiv.appendChild(div)
    })
}

