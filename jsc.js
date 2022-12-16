const code = document.getElementById("code");
const number = document.getElementsByTagName("strong")[0].textContent;
const list = document.getElementById("hexlist");
let hexa = "";

generateWriteCode();
generateColors();

function generateWriteCode()
{
    for(let i = 0; i < 6; i++)
    {
        var x = parseInt((Math.random() * 16), 10) + 48;
        if(x > 57)
            x += 7;
        hexa += String.fromCharCode(x);
    }
    code.innerHTML = "#" + hexa;
}

function generateColors()
{
    const index = parseInt((Math.random() * number)) + 1;

    for(let i = 0; i < number; i++)
    {
        list.appendChild(document.createElement("a"));
        /*i == index ? (list.style.backgroundColor = "#" + hexa, list.style.padding = "15px") : i++;
        list.children*/
    }
}