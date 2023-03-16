// Home side
// incrementation buttons
let countHome = document.getElementById("count-home")
homeCount=0

function plusOneHome() {
    homeCount += 1
    countHome.textContent=homeCount
}

function plustwoHome() {
    homeCount += 2
    countHome.textContent = homeCount
}

function plusthreeHome() {
    homeCount += 3
    countHome.textContent = homeCount
}

// foul button
let foulsH = document.getElementById("fouls-home")
homeFouls=0

function foulsHome() { 
    if (homeFouls === 5){ 
        homeFouls = 0
        foulsH.textContent = homeFouls
}   else {
    homeFouls += 1
    foulsH.textContent = homeFouls
}}

// go back button
//let arrays = [homeCount, homeFouls];
//function goBack() {
   // for (let i = 0; i < arrays.length; i++) {
    //if (arrays[i].length > 0 && arrays[i][arrays[i].length - 1]) {
    //let removedElement = arrays[i].pop();
    //let latestEle = document.getElementById(${i+1})
    //latestEle.textContent = ${i+1}
    //}}}

//Bonus button 
let changeButton = document.getElementById("home-bonus-btn");
let text = document.getElementById("bonus-home");
changeButton.addEventListener("click", function() {
    if (text.style.color === "white") {
        // Change the text color to red
        text.style.color = "red";
    } else {
        // Change the text color back to black
        text.style.color = "white";
}})

//Position button 
let posiButton = document.getElementById("home-position-btn")
let posiText = document.getElementById("position")
posiButton.addEventListener("click", function() {
    //if the text Poss or Poss=> change it to the <=Poss
    if ((posiText.textContent === "Poss") || (posiText.textContent === "Poss=>")) {
        posiText.textContent = "<=Poss" }
    else {
        posiText.textContent = "Poss"
    }
})



//Guest side 
// increment buttons
let countGuest = document.getElementById("count-guest")
guestCount=0

function plusoneGuest() {
    guestCount += 1
    countGuest.textContent = guestCount
}

function plustwoGuest() {
    guestCount += 2
    countGuest.textContent = guestCount
}

function plusthreeGuest() {
    guestCount += 3
    countGuest.textContent = guestCount
}

// Guest foul button

let foulsG = document.getElementById("fouls-guest")
guestFouls=0

function foulsGuest() {
    if (guestFouls === 5){ guestFouls = 0
        foulsG.textContent = guestFouls
    }
    else {
    guestFouls += 1
    foulsG.textContent = guestFouls
    }}

//Bonus button 
let changeBonusG = document.getElementById("guest-bonus-btn");
let textGuest = document.getElementById("bonus-guest");
changeBonusG.addEventListener("click", function() {
    if (textGuest.style.color === "white") {
        // Change the text color to red
        textGuest.style.color = "red";
    } else {
        // Change the text color back to black
        textGuest.style.color = "white";
}})

//Position button 
let posiButtonG = document.getElementById("guest-position-btn")
let posiTextG = document.getElementById("position")
posiButtonG.addEventListener("click", function() {
    //if the text Poss or Poss=> change it to the <=Poss
    if ((posiTextG.textContent === "Poss") || (posiTextG.textContent === "<=Poss")) {
        posiTextG.textContent = "Poss=>" }
    else {
        posiTextG.textContent = "Poss"
    }
})

// setting a timer for the match

let startButton = document.getElementById("cp-start");
let timerDisplay = document.getElementById("timer");
let counterDisplay = document.getElementById("period");

function startTimer() {
  // Set the initial values
    timer = 12 * 60; // 12 minutes in seconds
    counter = 0;
  // Start the timer
    updateTimer();
}

function updateTimer() {
    let minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, "0")}`;

    if (timer === 0) {
    // The timer has finished
    counter++;
    counterDisplay.textContent = counter;
    startButton.disabled = false;
    return;
}

    timer--;
    timerId = setTimeout(updateTimer, 1000);
    }

startButton.addEventListener("click", function() {
    startButton.disabled = false;
    startTimer();
    });

startButton.addEventListener("dblclick", function() {
    clearTimeout(timerId);
    timerDisplay.textContent = "12:00";
    counter++;
    counterDisplay.textContent = counter;
    startTimer();
    });

// reset button
function reset() {
    if ((homeCount > 0) 
    || (guestCount > 0) 
    || (homeFouls > 0)
    || (guestFouls > 0)
    || (timer > 0)) {
    if (window.confirm("Do you really want to reset?")) {
    countHome.textContent = 0 //homeCounter
    homeCount=0
    foulsH.textContent = 0 // homeFouls
    homeFouls=0
    
    countGuest.textContent = 0 //guest counter
    guestCount=0
    foulsG.textContent = 0 // guestFouls
    guestFouls=0
    
    timerDisplay.textContent = 0 //timer
    }}}

// shorclock buttons

