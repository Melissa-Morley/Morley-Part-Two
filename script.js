//prompt user for name (variable playerName)

//prompt if they want to play 3 or 6 holes

//prompt user either 3 or 6 times for each hole asking the number of putts (loop)
    //ask for number of putts
    //add to total number
    //print total

//compare cumulative score to par
    //if statements

//after last hole console log response depending on if they are under, equal to, or over par

let playerName = prompt ("Welcome to GC mini golf! What is your name?");

let holeCount = Number ( prompt ("Hi, " + playerName + "! Would you like to play 3 or 6 holes?"));
let total = 0;


for (let i = 1; i <= holeCount; i++) {
    let puttCount = Number (prompt ("How many putts for hole " + i + "?"));
    total += puttCount;
}


if (holeCount == 3) {
    coursePar = 9;
}
else {
    coursePar = 18;
}
    
// console.log(coursePar)
let playerPar = coursePar - total
// console.log (playerPar)


if (playerPar < 0) {
    console.log ("Nice try, " + playerName + ". Your total par was: +" + -1 * playerPar + ".")
}
else if (playerPar > 0) {
    console.log ("Great job, " + playerName + "! Your total par was: -" + playerPar + ".")
}
else {
    console.log ("Good game, " + playerName + ". Your total par was: " + playerPar + ".")
}