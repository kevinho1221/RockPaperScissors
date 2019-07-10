const game = ()=> {
    let pScore = 0;
    let cScore = 0;

    const startGame = ()=> {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", ()=>{
            introScreen.classList.add("fadeOut");
        });
    };

    //Call all the inner functions
    startGame();
};

//start the game function
game();