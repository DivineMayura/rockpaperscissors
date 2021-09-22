
var generatebutton = document.querySelector("#start");
console.log(play());


var wins=0;
var losses=0;
var ties=0;



function play(){




var options = ["r","p","s"];
var answer = prompt("choose your hand ", "");
var result = options[numGen()];


if (!options.includes(answer)){
    alert("Invalid input, try again!")
    return;
};



function numGen(){// gives the computer to choose rock paper or scissors at random
    
    var number = Math.floor(Math.random() * 3)

    return number;
};


confirm("The computer has chosen " + result + "!")

console.log(answer + result);
if (answer === result) {
    ties +=1;
    alert("Tied!");
    return;
} else if   ((answer === "r" && result === "s")
            ||(answer === "s" && result === "p")
            ||(answer === "p" && result === "r"))
                {
    wins +=1;
    alert("YOU WON OH MY GOD THAT'S CRAZY");
    return;
} else {
    losses +=1;
    alert("you lost lmao, trash, pathetic, loser, get destroyed");
};



alert("Stats: \nWins:" + wins + "\nTies:" + ties + "\nLosses:" + losses );



console.log(result + answer);

console.log(answer);












};
// generatebutton.addEventListener("click", play);