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
let trying = document.getElementById('try').innerHTML;
let find = "";

//choose a random word

let randomWord = myWords[Math.floor(Math.random()*myWords.length)];

//loop to determine the length of the word

for (let i = 0; i < randomWord.length; i++) {
    letterUsed[i] = " _ ";
    findWord.innerHTML = letterUsed.join(" ");
}
console.log(randomWord);

//Letter used with keyboard

// function addLetter(userKeypress) {
//
//     let repeatLetter = letterUsed.some(function (item){
//         return item === userKeypress;
//     })
//     if (repeatLetter) {
//         alert('La lettre' + " " + userKeypress + " " + "est déjà utilisée");
//     }
//     else {
//         letterUsed.push(userKeypress);
//     }
// }
//
// document.onkeydown = function (event){
//     let keyPress = String.fromCharCode(event.keyCode);
//     document.getElementById('used-letters').innerHTML += keyPress;
//     addLetter(keyPress);
// }

// check if the lettre is present into the world

function addLetterInWord () {
    let input = document.getElementById('addLetter').value;
    randomWord = letterUsed.indexOf(input);
    letterUsed = findWord.innerHTML;
}

//function for choose the difficult

function choiceDifficult () {
    let trouve = true;
    let easy = document.getElementById('easy');
    let middle = document.getElementById('middle');
    let hard = document.getElementById('hard');
    //difficult easy
    easy.addEventListener("click", function (){
        trying = 11;
        document.getElementById('try').innerHTML = "11";
        if (trouve === true){
            if (randomWord === find) {
                alert("vous avez gagné");
            }
            else if (trying <= 0){
                alert("Vous avez perdu");
            }
        }
    })
    //difficult middle
    middle.addEventListener("click", function (){
        trying = 8;
        if (trouve === true)
        document.getElementById('try').innerHTML = '8';
    })
    //difficult hard
    hard.addEventListener("click",function (){
        trying = 6;
        if (trouve === true)
        document.getElementById('try').innerHTML = '6';
    })
}

addLetter();
choiceDifficult();
addLetterInWord ();