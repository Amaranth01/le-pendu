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
let trying = 11;

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

    let value = addLetters.value.toLowerCase();

    if (newRandomWord.includes(value)) {

        while (newRandomWord.indexOf(value) !== -1) {
            let index = newRandomWord.indexOf(value);
            newRandomWord[index] = "_";
            spanArray[index].innerHTML = value;
        }
    }
    addLetters.value = "";

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

function essai () {
    if (spanArray !== newRandomWord) {
        trying--;
        document.getElementById('try').innerHTML = trying;
    }
    if (trying <= 0) {
        alert("Perdu ! Le mot était : " + randomWord);
    }
    if (spanArray === newRandomWord) {
        alert("Gagné !");
    }
}

addLetter();
essai();