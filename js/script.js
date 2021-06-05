const numberOfGuessesAllowed = 5;
let numberOfGuesses = 0;
let randomNumber = generateRandomNumber();

const reset = document.querySelector('.reset');
let message = document.querySelector('.message');
const buttons = document.getElementsByClassName('button');
const winnerSection = document.getElementById('winner');
const playAgain = document.querySelectorAll('.play-again');
const loserSection = document.getElementById('loser');

function generateRandomNumber(){
    return Math.floor(Math.random() * 20) + 1;
}

reset.addEventListener('click',resetGame);


for(let i=0; i<buttons.length; i++){
    buttons[i].addEventListener('click', function(){
        numberOfGuesses+=1;
        let value = Number(buttons[i].value);
        if(numberOfGuesses<numberOfGuessesAllowed){
            document.querySelector('.number-of-guesses').textContent=numberOfGuesses;
            document.querySelector('.guess-array').innerHTML+=value+' ';
            
            if(value===randomNumber){
                message.textContent='WINNER';
                winner();

            }
            else if(value>randomNumber){
                message.textContent='TRY LOWER ⬇';

            }
            else if(value<randomNumber){
                message.textContent='TRY HIGHER ⬆';

            }
        }
        else{
            loser();
        } 
        this.disabled = true;
        this.classList.add('clicked-button');
    });
}



function winner(){
    winnerSection.style.marginLeft='0%';
    winnerSection.style.transition='margin-left .3s';
    document.querySelector('.winner-number').textContent=randomNumber;
}
function loser(){
    loserSection.style.marginLeft='0%';
    loserSection.style.transition='margin-left .3s';
    document.querySelector('.winner-number-loser').textContent=randomNumber;
}

function resetGame(){
    numberOfGuesses=0;
    document.querySelector('.number-of-guesses').textContent=numberOfGuesses;
    document.querySelector('.guess-array').textContent='Guesses: ';
    message.textContent='Start guessing';
    randomNumber = generateRandomNumber();
    for(let i=0; i<buttons.length; i++){
        buttons[i].disabled=false;
        buttons[i].classList.remove('clicked-button');
    }
}

for(let i=0; i<playAgain.length; i++){
    playAgain[i].addEventListener('click', function(){
        resetGame();
        winnerSection.style.marginLeft='-100%';
        loserSection.style.marginLeft='-100%';
    });
}

// let obj = {
//     firstName:'Vildan',
//     lastName:'Asllani',
//     age:25
// };
// localStorage.setItem('user', JSON.stringify(obj));
// const hs = localStorage.getItem('user');
// // console.log(hs);
// localStorage.removeItem('user');