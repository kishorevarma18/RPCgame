function getComputerChoice(){
    let randomnum = Math.random();

    if (randomnum <= 0.33)
        return "rock";
    else if (randomnum <= 0.66)
        return "paper";
    else return "scissor";
}

console.log(getComputerChoice());

function getHumanChoice(){
    let humanchoice = prompt("Enter your choice");
    return humanchoice.toLowerCase();
}
console.log(getHumanChoice());