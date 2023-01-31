let currentColor = document.querySelector('.current-color');
let bodyElem = document.querySelector('body');
let generateBtn = document.querySelector('.generate-btn')

bodyElem.style.backgroundColor = currentColor.innerText;

generateBtn.addEventListener('click', ()=> {
    let randomColour = "";
    let charactors = "0123456789abcdef"


    /*
        FOR LOOP IS VERY USEFUL IN JAVASCRIPT SYNTAX:
        for (initialiser; condition. increment) {
            code
        }
    */

    for (let i = 0; i < 6; i++) {
        randomColour = randomColour + charactors [Math.floor(Math.random()  * 16)] ;
}

    currentColor.innerText = "#" + randomColour;
    bodyElem.style.backgroundColor = "#" + randomColour;
})
