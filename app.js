let choices = document.querySelectorAll(".choice")
let msg = document.querySelector("#msg")
let userScorePara = document.querySelector(".user-score")
let compScorePara = document.querySelector(".comp-score")

let userScore=0;
let compScore=0;

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randInx= Math.floor(Math.random()*3);
    return options[randInx];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        msg.innerHTML="You Lose";
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerHTML=userScore;
    }
    else{
        msg.innerHTML="You lose";
        msg.style.backgroundColor = "red";
        compScore++;        
        compScorePara.innerHTML=compScore;
    }
}

const playgame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        msg.innerHTML="Game is draw";
        msg.style.backgroundColor = "#F58A07"
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"? false : true;
        }
        else if(userChoice==="paper"){
            userWin=compChoice==="scissors" ? false : true;
        }
        else{
            userWin= compChoice==="rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach(choice => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
        console.log(userChoice)
    })
})
