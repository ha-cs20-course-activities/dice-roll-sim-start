// Dice Roll Simulator

// Add Event Listeners
document.getElementById("rollBtn").addEventListener("click", rollDie);
document.getElementById("roll100Btn").addEventListener("click", roll100);


// Global Variables
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
let total5 = 0;
let total6 = 0;


// Event Function
function rollDie() {
    // Simulate a single roll of a six-sided die.  Display result and totals.

    // Get a random roll number 1 - 6
    let rollNum = Math.floor(Math.random() * 6) + 1;

    // Update totals & roll result
    document.getElementById("rollResult").innerHTML = rollNum;
    if (rollNum == 1) {
        total1++;
        document.getElementById("total1").innerHTML = total1;
    } else if (rollNum == 2) {
        total2++;
        document.getElementById("total2").innerHTML = total2;
    } else if (rollNum == 3) {
        total3++;
        document.getElementById("total3").innerHTML = total3;
    } else if (rollNum == 4) {
        total4++;
        document.getElementById("total4").innerHTML = total4;
    } else if (rollNum == 5) {
        total5++;
        document.getElementById("total5").innerHTML = total5;
    } else if (rollNum == 6) {
        total6++;
        document.getElementById("total6").innerHTML = total6;
    }

}

function roll100() {
    for (let n = 0; n < 100; n++) {
        // Roll a single die
        rollDie();
    }
}