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
let letterUsed = [];
let findWord = document.getElementById('word');

//choose a random word

let randomWord = myWords[Math.floor(Math.random()*myWords.length)];

//boucle pour voir les lettres utilisées avec let space et mettre des espaces entre

for (let i = 0; i < randomWord.length; i++) {
    letterUsed[i] = " _ ";
    findWord.innerHTML = letterUsed.join(" ");
}

//nombre d'essai avec boucle for i > X et décrémenter i ou fonction...



// fonction nombre de victoire

function victory() {
    
}

function characterInWord (character){
    let nice = false;
    let currentWordList = randomWord.split('');

    for (let i = 0; i < currentWordList.length; i++) {
        if (character.toLowerCase === currentWordList[i]) {
            arr[i] = character.toLowerCase();
            nice = true;

            //look is player win
            if (arr.join('') === randomWord) {
                alert("Tu as trouvé le bon mot !");
                victory = victory + 1;
                victory();
            }

        }
    }

    if (nice === false) {
        trying = trying -1;
        choiceDifficult();

        if (trying===0) {
            document.getElementById('//afficher le mot correct créer une div').innerHTML = 'Perdu le mot était...' + randomWord;
        }
    }
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
        letterAlreadyUsed();
        charactereInWord(userKeypress);
    }
}

function blankScreen() {
    myWords.length = randomWord.length;
    myWords.fill('_');
}

// reset

function reset () {
    letterUsed = [];
    arr = [];
    trying = '' + choiceDifficult.length;
}

document.onkeydown = function (event){
    let keyPress = string.fromCharCode(event.keyCode);
    document.getElementById('used-letters').innerHTML = keyPress;
    addLetter(keyPress);
}

function game () {
    addLetter();
    choiceDifficult();
    blankScreen();
    reset();
    characterInWord();
}

//function for choose the difficult

function choiceDifficult () {
    let easy = document.getElementById('facile');
    let middle = document.getElementById('moyen');
    let hard = document.getElementById('hard');

    easy.addEventListener("click", function (){
        trying = 11;
        game();
    })

    middle.addEventListener("click", function (){
        trying = 8;
        game();
    })

    hard.addEventListener("click", function (){
        trying = 6;
        game();
    })
}