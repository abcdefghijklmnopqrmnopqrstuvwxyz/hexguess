const code = document.getElementById("code");
const list = document.getElementById("hexlist");
const text = document.getElementById("answer");
const button = document.getElementById("button");
let number = "";
let hexa = "";
let index = "";

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
        let z = parseInt((Math.random() * 16), 10) + 48;
        if(z > 57)
            z += 7;
        x += String.fromCharCode(z);
    }
    return x;
}

function generateColors()
{
    number = document.getElementsByTagName("strong")[0].textContent;
    index = parseInt((Math.random() * number));
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
    const clicked = document.getElementById(clickedId)
    clickedId == index ? rightAnswer() : wrongAnswer(clicked);
}

function resetText()
{
    text.innerHTML = "GUESS THE COLOR";
    code.style.color = "#000000";
    if(button.firstChild)
        button.removeChild(button.firstChild);
}

function rightAnswer()
{
    text.innerHTML = "CORRECT!";
    code.style.color = code.innerHTML;
    const element = document.createElement("button");
    element.innerHTML = "NEW GAME";
    element.setAttribute("onclick", "callMethods()");
    button.appendChild(element);
    for(let i = 0; i < number; i++)
    {
        let colorBall = document.getElementById(i);
        i != index ? (colorBall.style.backgroundColor = document.body.style.backgroundColor, colorBall.removeAttribute("href"), colorBall.removeAttribute("onclick")) : colorBall.removeAttribute("href"), colorBall.removeAttribute("onclick");
    }
}

function wrongAnswer(clicked)
{
    let colorText = "" + clicked.style.backgroundColor;
    let hex = "";
    let a = "";
    for(let i = 0; i < colorText.length; i++)
    {
        if(!isNaN(colorText.charAt(i)) && colorText.charAt(i) != "" && colorText.charAt(i) != " ")
        {
            a += colorText.charAt(i);
        }
        else
        {
            let x = parseInt(a).toString(16);
            if(x != "NaN")
            {
                if(x.length == 2)
                {
                    hex += x;
                }
                else
                {
                    hex += 0 + x;
                }
            }
            a = "";
        }
    }
    const coloredElement = document.createElement("a");
    coloredElement.innerHTML = "#" + hex.toUpperCase();
    coloredElement.style.color = "#" + hex;
    text.innerHTML = "TRY AGAIN. THAT COLOR WAS ";
    text.appendChild(coloredElement);
    clicked.style.backgroundColor = document.body.style.backgroundColor;
    clicked.removeAttribute("href");
    clicked.removeAttribute("onclick");
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
    resetText();
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

    callMethods();
}