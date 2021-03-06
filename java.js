let diceImages = document.getElementById("diceImages");
const rollDice = document.getElementById("rollDice");

let score = document.getElementById("playerScore");
let display = document.getElementById("answer"); 
let playerScore = 0 

let dice = [
    {value: 1, img: "diceImages/dice1.png"},
    {value: 2, img: "diceImages/dice2.png"},
    {value: 3, img: "diceImages/dice3.png"},
    {value: 4, img: "diceImages/dice4.png"},
    {value: 5, img: "diceImages/dice5.png"},
    {value: 6, img: "diceImages/dice6.png"},
];

diceImages.src = dice [0].img;

const reset = () => {
    rollDice.textContent = "Begin a New Gameð®"
    playerScore = 0;
    score.innerHTML = (playerScore)
}

rollDice.addEventListener("click", () =>{
    let player = dice[Math.floor(Math.random() * dice.length)];
    diceImages.src = player.img;
    rollDice.textContent = ("Click here to roll the dice!ð");
    answer.textContent = ("Roll again!ð");
    if (player.value == 1){
        answer.textContent = ("You lost!ð Try again if you like!ð¸");
        reset();
    }else{
        playerScore += player.value;
        score.textContent = (playerScore);
    }
    if (playerScore >= 10){
        answer.textContent = ("Winner!ð");
        reset();
    }
}
)