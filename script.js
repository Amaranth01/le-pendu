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
let findWord = document.getElementById('word');
let submit = document.getElementById('submit');
let addLetters = document.getElementById('addLetter');
let trying = 10;

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

// check if the lettre is present into the world

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
//victory, defeat, reload
    if (spanArray !== newRandomWord) {
        trying--;
        document.getElementById('try').innerHTML = trying.toString();
    }
    if (trying <= 0) {
        alert ("Vous n'avez pas sauvé le pendu. Le mot était " + randomWord);
        window.location.reload();
    }
    if (spanArray.length === randomWord) {
        alert('Vous avez gagné !');
        window.location.reload();
    }
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

addLetter();