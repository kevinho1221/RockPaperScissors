const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    //start the game
    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    //Play Match
    const playMatch = ()=>{
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            })
        })

        //Computer Options
        const computerOptions = ['rock','paper','scissors'];

        options.forEach(option=>{
            option.addEventListener('click',function () {

                const computerNumber = Math.floor(Math.random()*3);
                const computerChoice = computerOptions[computerNumber];

                setTimeout(()=>{
                                
                compareHands(this.textContent,computerChoice);

                //update images, the backtick key is used below(the thing next to the 1 key)
                //that looks llke an apostrophe
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;

                },2000);
                
                //animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            })
        });

    };

    const updateScore = () =>{
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');

        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice)=>{
        
        const winner = document.querySelector('.winner');
        
        //we are checking for a tie
        if(playerChoice === computerChoice){
            winner.textContent="It's a tie!";
            return;
        }

        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
            }else{
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
            }
        }

        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
            }else{
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
            }
        }

        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = 'Player wins!';
                pScore++;
                updateScore();
            }else{
                winner.textContent = 'Computer wins!';
                cScore++;
                updateScore();
            }
        }

    };

    //Call all the inner functions
    startGame();
    playMatch();    
};

//start the game function
game();