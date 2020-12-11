//variables
const choices = document.querySelectorAll('.choices');
const score = document.querySelector('.score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');

//scoreboard
const scoreboard = {
    player: 0,
    computer: 0
}

//the main function to play game
function playGame(e) {
    restart.style.display = 'inline-block';
    const playerChoice = e.target.id;
    const computerChoice = getComputerChoice();
    const winner = getWinner(playerChoice, computerChoice);
    showWinner(winner, computerChoice);

}

//get computer choice using Math.random
function getComputerChoice() {
    const random = Math.random();
    if(random < 0.34) {
        return 'rock';
    }else if(random <= 0.67) {
        return 'paper';
    }else {
        return 'scissors';
    }
}

//get winner by the basic logic of rps game
function getWinner(p, c) {
    if(p === c) {
        return 'draw';
    }else if(p === 'rock') {
        if(c === 'paper') {
            return 'computer';
        }else if(c === 'scissors') {
            return 'player;'
        }
    }else if(p === 'paper') {
        if(c === 'rock') {
            return 'player';
        }else if(c === 'scissors') {
            return 'computer';
        }
    }else if(p === 'scissors') {
        if(c === 'rock') {
            return 'computer';
        }else if(c === 'paper') {
            return 'player';
        }
    }
}

//show winner and add scores
function showWinner(winner, computerChoice) {
    //get to know who wins and change score
    if(winner === 'player') {
        scoreboard.player++;
        result.innerHTML = `
        <h1 class="text-win">You win :)</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!</strong></p>
        `;
    }else if(winner === 'computer') {
        scoreboard.computer++;
        result.innerHTML = `
        <h1 class="text-lose">You lose :(</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!</strong></p>
        `;
    }else {
        result.innerHTML = `
        <h1>It's A Draw!</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}!</strong></p>
        `;
    }

    //show score
    score.innerHTML = `
    <p>Player: ${scoreboard.player}</p>
    <p>Computer: ${scoreboard.computer}</p>
    `;

    //show modal
    modal.style.display = 'block';
}

function restartGame() {
    scoreboard.player = 0;
    scoreboard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}

//clear modal if clicked outside
function clearModal(e) {
    if(e.target == modal) {
        modal.style.display = 'none';
    }
}

//event listeners
choices.forEach(choice => choice.addEventListener('click', playGame));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);