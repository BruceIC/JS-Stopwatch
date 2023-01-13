// Time stamps
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");
const msec = document.querySelector("#msec");


// Buttons 
startBtn = document.querySelector("#start");
stopBtn = document.querySelector("#stop");
resetBtn = document.querySelector("#reset");
let milliSec = 00;
let secondCount = 00;
let minCount = 00;
let interval = 0;

startBtn.onclick = function() {
    clearInterval(interval)
    interval = setInterval(incrementValues, 10);
}

// startBtn.addEventListener("click", () => {
//     clearInterval(interval)
//     interval = setInterval(incrementValues, 10);
// })

stopBtn.onclick = function () {
    clearInterval(interval);
}

resetBtn.onclick = function() {
    clearInterval(interval);
    msec.innerText = '0' + 00;
    sec.innerText = "0" + 00;
    mins.innerText = "0"+00;

}

function incrementValues() {
          
                if (milliSec < 100) {
                    milliSec++;
                    if (milliSec < 10) {
                        milliSec = "0" + milliSec
                    }
                    msec.innerText = milliSec;

                } else {
                    clearInterval()
                    secondCount = secondCount + 1;
                    if (secondCount < 10) {
                        sec.innerText= "0" + secondCount;
                    }
                    sec.innerText = secondCount;
                    milliSec = 0;
                    if (secondCount === 60) {
                        minCount++;
                        mins.innerText = minCount;
                        secondCount = 0;
                    }
                }
            }

          

    s