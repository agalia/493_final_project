// for transitions
const swup = new Swup()

// for stopwatch
//time tracker
let seconds = 0;
let minutes = 0;

//count logic
function counter(){
    //basic counter
    seconds++;
    //convert time capsules, upwards incrementation
    if(seconds / 60 == 1) {
        seconds = 0;
        minutes++;
    }
    //display functionality
    let minutePlaceholder = "";
    let secondPlaceholder = "";
    if(seconds/10 < 1){
        secondPlaceholder= "0";
    }
    if(minutes/10 < 1) {
        minutePlaceholder = "0";
    }
    document.getElementById("display").innerHTML = minutePlaceholder+ minutes + ":" + secondPlaceholder + seconds;
}
//setTimeout(counter, 3000)
window.setInterval(counter, 1000)



//maze logic
// class maze {
//     constructor(width, height)
// }

//linkedin leaderboard logic
