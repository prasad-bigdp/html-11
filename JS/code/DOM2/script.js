
let p2 = document.getElementById('para2')
let input= document.getElementById('inp')

function update ()
{
    const str = input.value;
    let rev='';
    for (let i = str.length - 1; i >= 0;i--)
    {
        rev=rev+str[i]
    }
    p2.textContent = rev;
    p2.style.backgroundColor = "red"
    p2.style.fontSize="48px"
    if (rev === str)
    {
        alert("given string is pallindrome")
        }
}
/* wap to take an input value- string and reverse it and print */ 