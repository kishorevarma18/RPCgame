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

function getHumanChoice(){
    let humanchoice = prompt("Enter your choice");
    document.getElementById("S2").innerHTML= "Your choice: "+humanchoice;
    return humanchoice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    if (humanChoice == "rock" && computerChoice == "scissor"){
        document.getElementById("demo").innerHTML="You won! Rock beats Scissors";
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        document.getElementById("demo").innerHTML="You won! Scissor beats Paper";
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        document.getElementById("demo").innerHTML="You won! Paper beats Rock";
        humanScore++;
    }
    else if (humanChoice == computerChoice){
        document.getElementById("demo").innerHTML="It's a tie, both have selected same choice";
    }
    else {document.getElementById("demo").innerHTML="You lose! "+computerChoice.charAt(0).toUpperCase()+computerChoice.substring(1,computerChoice.length)+" beats "+humanChoice.charAt(0).toUpperCase()+humanChoice.substring(1,humanChoice.length);
        computerScore++;
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
document.getElementById("S1").innerHTML= "Computer choice: "+computerSelection;
playRound(humanSelection,computerSelection);