let myWords = [
    "valhalla",
    "sovengard",
    "odin",
    "freya",
    "yggdrasil",
    "dragon",
    "fourchette",
    "couteau",
    "cuillère",
    "elfe",
    "seigneur",
    "anneaux",
    "nains",
    "voiture",
    "cheval",
    "chien" ,
    "chat",
    "fruits",
    "viande",
    "légumes",
    "dessert",
    "chocolat",
    "sel",
    "poivre",
    "épée",
    "bouclier",
    "armure",
    "cuirasse",
    "chevalier",
    "sorcier",
    "sorcière",
    "démon",
];
let letterUsed = [];
let findWord = document.getElementById('word');
let submit = document.getElementById('submit');
let addLetters = document.getElementById('addLetter');
let trying = 12;

//choose a random word
let randomWord = myWords[Math.floor(Math.random()*myWords.length)];
let newRandomWord = [];
let spanArray = [];

for (let i = 0; i < randomWord.length; i++) {
    let span = document.createElement('span');
    span.innerHTML = " _ ";
    findWord.appendChild(span);
    spanArray.push(span);
    //push the word in the second array
    newRandomWord.push(randomWord[i].toLowerCase());
}

// check if the lettre is present into the word

submit.addEventListener('click', function addLetterInWord () {
    let value = addLetters.value.toLowerCase();

    if (newRandomWord.includes(value)) {

        while (newRandomWord.indexOf(value) !== -1) {
            let index = newRandomWord.indexOf(value);
            newRandomWord[index] = "_";
            spanArray[index].innerHTML = value;
        }
    }
    addLetters.value = "";
    victoryCondition();
})

//check condition of victory, defeat, reload
function victoryCondition () {
    if (spanArray !== newRandomWord) {
        trying--;
        document.getElementById('try').innerHTML = trying.toString();
    }
    if (trying <= 0) {
        alert ("Vous n'avez pas sauvé le pendu. Le mot était " + randomWord);
        window.location.reload();
    }
    if (randomWord === newRandomWord.length) {
        alert('Vous avez gagné !');
        window.location.reload();
    }
}

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

addLetter();