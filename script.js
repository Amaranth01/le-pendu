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
let trying = 11;
let letterUsed = [];
let findWord = document.getElementById('word');

//choose a random word

let randomWord = myWords[Math.floor(Math.random()*myWords.length)];

for (let i = 0; i < randomWord.length; i++) {
    letterUsed[i] = " _ ";
    findWord.innerHTML = letterUsed.join(" ");
}

//function for choose the difficult

function choiceDifficult () {
    let easy = document.getElementById('easy');
    let middle = document.getElementById('middle');
    let hard = document.getElementById('hard');
    //difficult easy
    easy.addEventListener("click", function (){
        trying = 11;
        game();
    })
    //difficult middle
    middle.addEventListener("click", function (){
        trying = 8;
        game();
    })
    //difficult hard
    hard.addEventListener("click", function (){
        trying = 6;
        document.getElementById('word').innerHTML = trying;
        game();
    })
}

// Look if player win or loose

function characterInWord (character){
    let wrong = false;
    let currentWordList = randomWord.split('');

    for (let i = 0; i < currentWordList.length; i++) {
        if (character.toLowerCase === currentWordList[i]) {
            myWords[i] = character.toLowerCase();
            wrong = true;

            //victory
            if (myWords.join('') === randomWord) {
                alert("Tu as trouvé le bon mot !");
            }

        }
    }
    //defeat
    if (wrong === false) {
        trying = trying -1;

        if (trying===0) {
            document.getElementById('try').innerHTML = 'Perdu le mot était...' + randomWord;
        }
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

//Show hyphens if the word is empty

function blankScreen() {
    myWords.length = randomWord.length;
    myWords.fill('_');
}

// reset

function reset () {
    if (trying <= 0) {
        alert('Vous avez perdu !');
        window.location.reload();
    }
    else {
        alert('Vous avez gagné !');
        window.location.reload();
    }
}

function game () {
    addLetter();
    choiceDifficult();
    blankScreen();
    reset();
    characterInWord();
}