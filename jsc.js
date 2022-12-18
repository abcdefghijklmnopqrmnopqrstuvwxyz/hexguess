const code = document.getElementById("code");
const list = document.getElementById("hexlist");
let number = "";
let hexa = "";

callMethods();

function generateWriteCode()
{
    hexa = "";
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
    number = document.getElementsByTagName("strong")[0].textContent;
    const index = parseInt((Math.random() * number)) + 1;
    for(let i = 0; i < number; i++)
    {
        const element = document.createElement("a");
        list.appendChild(element);
        element.setAttribute("href", "#");
        element.setAttribute("id", i);
        element.setAttribute("onClick", "checkAnswer(this.id)");
        i == index ? element.style.backgroundColor = "#" + hexa : element.style.backgroundColor = "#" + generateRandomCode();
    }
}

function checkAnswer(clickedId)
{
    let list = [];
    const color = document.getElementById(clickedId).style.backgroundColor;
    let num = "";
    for(let i = 0; i < color.length; i++)
    {
        isNaN(color.charAt(i)) ? num != "" ? (list.push(parseInt(num).toString(16)), num = "") : num : num += color.charAt(i);
    }
    list.forEach(element => {
        num += element.toUpperCase();
    });
    console.log(num);
    console.log(hexa);
    num != hexa ? console.log("wrong") : console.log("right");
    
}

function removeChild()
{
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
}

function callMethods()
{
    removeChild();
    generateWriteCode();
    generateColors();
}


function diffClickEvent(clickedId)
{
    const replace = document.getElementById("diff").getElementsByTagName("strong")[0]
    const elementReplace = document.createElement("a");
    elementReplace.setAttribute("id", replace.id);
    elementReplace.setAttribute("href", "#");
    elementReplace.setAttribute("onClick", "diffClickEvent(this.id)");
    elementReplace.innerHTML = replace.innerHTML;
    replace.replaceWith(elementReplace);

    const element = document.createElement("strong");
    element.innerHTML = document.getElementById(clickedId).innerHTML;
    document.getElementById(clickedId).replaceWith(element);
    element.setAttribute("id", clickedId);
    element.setAttribute("href", "#");
    element.setAttribute("onClick", "diffClickEvent(this.id)");

    callMethods();
}