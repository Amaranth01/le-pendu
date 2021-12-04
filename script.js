let word = document.getElementById('completeWord');
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
let arr;
let trying = 11;
let currentWord = "";
let letterUsed = [];
let victory = 0;

//choose a word with random
for (let i = 0 ; i < myWords.length; i++) {
    word.innerHTML = myWords[Math.floor(Math.random() * myWords.length)];
}

// un espace entre chaque lettre avec fonction créer variable = tableau.join et let arr
function space () {
    let myVar =
}

//fonction pour voir les lettres utilisées avec let space et mettre des espaces entre

//nombre d'essai avec boucle for i > X et décrémenter i ou fonction...

// fonction nombre de victoire

function victory() {
    
}

//letter used
function addLetter(userKeypress) {
    let repeatLetter = letterUsed.some(function (item){
        return item === userKeypress;
    })
    if (repeatLetter) {
        alert('La lettre' + " " + userKeypress + " " + "est déjà utilisée");
    }
    else {
        letterUsed.push(userKeypress);
        showLetterUsed();
        charactereInWord(userKeypress);
    }
}

function characterInWord //CHANGER NOM DE FONCTION POUR COMPRENDRE QUELQUE CHOSE(character) {
    let nice = false;
    let currentWordList = currentWord.split('');

    for (let i = 0; i < currentWordList.length; i++) {
        if (character.toLowerCase === currentWordList[i]) {
            arr[i] = character.toLowerCase();
            currentWordOnScreen();
            nice = true;
            //look is player win
            if (arr.join('') === currentWord) {
                alert("Tu as trouvé le bon mot !");
                victory = victory + 1;
                showWins();
            }

        }
    }


if (flag === false) {
    trial = trial -1;//trial = essai
    showTrial();

    if (trial===0) {
        document.getElementById('//afficher le mot correct créer une div').innerHTML = 'Perdu le mot était...'
    }
}
}

function blankArrayOnScreen //CHANGER NOM DE FONCTION POUR COMPRENDRE QUELQUE CHOSE() {
    myWords.length = currentWord.length;
    myWords.fill('_');
}

//reset

// function reset () {
//     letterUsed = [];
//     arr = [];
//     trial = '' + 11;
// }
//
// document.onkeydown = function (event){
//     let keyPress = string.fromCharCode(event.keyCode);
//     document.getElementById('used-letters').innerHTML = keyPress;
//     addLetter(keyPress);
// }

function game () {
    addLetter(); //invoquer toutes les fonctions utilisées
}

document.getElementById(//voir HTMl).addEventListener('click', function () {
//fonction invocation

// }