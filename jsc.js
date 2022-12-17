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

function generateRandomCode(x = "")
{
    for(let i = 0; i < 6; i++)
    {
        var z = parseInt((Math.random() * 16), 10) + 48;
        if(z > 57)
            z += 7;
        x += String.fromCharCode(z);
    }
    return x;
}

function generateColors()
{
    const index = parseInt((Math.random() * number)) + 1;
    for(let i = 0; i < number; i++)
    {
        const element = document.createElement("div");
        list.appendChild(element);
        element.style.padding = "50px";
        element.style.margin = "0 2%";
        element.style.borderRadius = "50%";
        i == index ? element.style.backgroundColor = "#" + hexa : element.style.backgroundColor = "#" + generateRandomCode();
    }
}