let humanScore = 0;
let computerScore = 0;
function getComputerChoice(){
    let randomnum = Math.random();

    if (randomnum <= 0.33)
        return "rock";
    else if (randomnum <= 0.66)
        return "paper";
    else return "scissor";
}

function getHumanChoice(humanchoice){
    return humanchoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if ((humanChoice == "rock" && computerChoice == "scissor")||(humanChoice == "scissors" && computerChoice == "paper")||(humanChoice == "paper" && computerChoice == "rock")){
        humanScore++;
        return ("You won! "+""+humanChoice.charAt(0).toUpperCase()+humanChoice.substring(1,humanChoice.length)+" beats "+computerChoice.charAt(0).toUpperCase()+computerChoice.substring(1,computerChoice.length));
    }
    else if (humanChoice == computerChoice){
        return ("It's a tie, both have selected same choice");
    }
    else {
        computerScore++;
        return ("You lose! "+computerChoice.charAt(0).toUpperCase()+computerChoice.substring(1,computerChoice.length)+" beats "+humanChoice.charAt(0).toUpperCase()+humanChoice.substring(1,humanChoice.length));
        
    }
}


function playGame(num){
    alert("Let's play Rock Paper Scissor"+"\n"+"You get 5 chances to win the game!!"+"\n"+"Let's start the game by clicking on 'Ok'");
    for(i=1;i<=num;i++){
    let humanchoice = prompt("Round: "+i+"\n"+"Enter your choice:");
    let humanSelection = getHumanChoice(humanchoice);
    let computerSelection = getComputerChoice();
    alert("Your choice: "+humanchoice+"\n"+"Computer choice: "+computerSelection+"\n"+playRound(humanSelection,computerSelection)+"\n"+"Computer score = "+computerScore+ " Your score = "+humanScore);
    }
    if(humanScore>computerScore)
        alert("You won the game!!");
    else if(computerScore>humanScore)
        alert("You lost the game....");
    else alert("It's a tie.")
}

playGame(5);