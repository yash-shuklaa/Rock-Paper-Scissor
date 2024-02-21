let icons = document.querySelectorAll(".icon");
let comp = document.querySelector(".comp");

let userScorePoints=0;
let compScorePoints=0;

let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#com-score");

let genCompChoice=()=>{
    let options=["rock","paper","scissor"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

let draw=()=>{
    console.log("Game was drawn");
}

let showWinner=(userWin, userChoice, compChoice)=>{
        if(userWin){
        userScorePoints++;
        userScore.innerText=userScorePoints;
        comp.innerText = `You Win. Your ${userChoice} beats Computer's ${compChoice}`;
    }
    else{
        compScorePoints++;
        compScore.innerText=compScorePoints;
        comp.innerText = `You Lost. Computer's ${compChoice} beats Your ${userChoice}`;
    }
};

function playGames(userChoice) {
    console.log("userchoice", userChoice);
    let compChoice = genCompChoice();
    console.log("compchoice", compChoice);

    if (userChoice === compChoice) {
        draw();
        comp.innerText = `Game Drawn. Your Choice is ${userChoice} and Computer's Choice is ${compChoice}`;
    }

    else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = (compChoice == "paper" ? false : true);
        }
        else if (userChoice == "paper") {
            userWin = (compChoice == "scissor" ? false : true);
        }
        else {
            userWin = (compChoice == "rock" ? false : true);
        }
        // console.log(userWin);
        showWinner(userWin, userChoice, compChoice);
    }
}


icons.forEach((icon)=>{
    console.log(icon);
    icon.addEventListener("click",()=>{
        let userChoice = icon.getAttribute("id");
        comp.style.display="block";
        playGames(userChoice);
    });
});