let myWords = [
    "Valhalla",
    "Sovengard",
    "Odin",
    "Freya",
    "Yggdrasil",
    "Dragon",
    "Fourchette",
    "Couteau",
    "Cuillère",
    "Elfe",
    "Seigneur",
    "Anneaux",
    "Nains",
    "Voiture",
    "Cheval",
    "Chien" ,
    "Chat",
    "Fruits",
    "Viande",
    "Légumes",
    "Dessert",
    "Chocolat",
    "Sel",
    "Poivre",
    "Epée",
    "Bouclier",
    "Armure",
    "Cuirasse",
    "Chevalier",
    "Sorcier",
    "Sorcière",
    "Démon",
];
let letterUsed = [];
let letterFalse = [];
let findWord = document.getElementById('word');
let trying = document.getElementById('try').innerHTML;
let find = "";
let submit = document.getElementById('submit');

//choose a random word

let randomWord = myWords[Math.floor(Math.random()*myWords.length)];
let newRandomWord = [];
let spanArray = [];

for (let i = 0; i < randomWord.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = " _ ";
    findWord.appendChild(span);
    spanArray.push(span);

    newRandomWord.push(randomWord[i].toLowerCase());
}
console.log(newRandomWord);
console.log(spanArray);

// check if the lettre is present into the world

submit.addEventListener('click', function addLetterInWord () {

    let addLetter = document.getElementById('addLetter');
    let value = addLetter.value.toLowerCase();

    if (newRandomWord.includes(value)) {

        while (newRandomWord.indexOf(value) !== -1) {
            let index = newRandomWord.indexOf(value);
            newRandomWord[index] = "_";
            spanArray[index].innerHTML = value;
        }
    }
    addLetter.value = "";

})

//Letter used with keyboard

function addLetter(userKeypress) {

    let repeatLetter = letterUsed.some(function (item){
        return item === userKeypress;
    })
    if (repeatLetter) {
        alert('La lettre' + " " + userKeypress + " " + "est déjà utilisée");
    }
    else {
        letterUsed.push(userKeypress);
    }
}

document.onkeydown = function (event){
    let keyPress = String.fromCharCode(event.keyCode);
    document.getElementById('used-letters').innerHTML += keyPress;
    addLetter(keyPress);
}

//image of hangman
function image(error){
    document.getElementById("image").querySelector("img").src = "img/pendu_" + error + ".png";
    document.getElementById("image").querySelector("img").alt = error;
}

//function for choose the difficult

function choiceDifficult () {
    let trouve = true;
    let easy = document.getElementById('easy');
    let middle = document.getElementById('middle');
    let hard = document.getElementById('hard');
    //difficult easy
    easy.addEventListener("click", function () {
        trying = 10;
        if () {

        }
        document.getElementById('try').innerHTML = '11';
    })
    //difficult middle
    middle.addEventListener("click", function (){
        trying = 8;
        if (){

        }
        document.getElementById('try').innerHTML = '8';
    })
    //difficult hard
    hard.addEventListener("click",function (){
        trying = 6;
        if (){

        }
        document.getElementById('try').innerHTML = '6';
    })
}


addLetter();
choiceDifficult();