let inp = document.getElementById('inp');
let inp2= document.getElementById('inp2')
let button = document.getElementById('btn');
const mainDiv= document.getElementById('data')
function todo ()
{
    const myDiv= document.createElement('div')
    const ele = document.createElement('p')
    //<p></p>
    const image = document.createElement('img')
    //<img src="" alt="">
    image.src = inp2.value

    image.alt = "something"
    image.style.height="100px"
    ele.textContent = inp.value;
    myDiv.append(image, ele);
    mainDiv.appendChild(myDiv)
    myDiv.classList.add('card')
    inp.value = ""
    inp2.value=""
}