// Time stamps
const mins = document.querySelector("#mins");
const sec = document.querySelector("#sec");
const msec = document.querySelector("#msec");


// Buttons 
startBtn = document.querySelector("#start");
stopBtn = document.querySelector("#stop");
resetBtn = document.querySelector("#reset");
let milliSec = 0;
let secondCount = 0;
let minCount = 0;
let interval = 0;

startBtn.addEventListener("click", ()=>{
    setInterval(
        function incrementMillSec() {
           if(milliSec < 100) {
            milliSec++;
            msec.innerText = milliSec;

        }else {
                clearInterval()
                secondCount = secondCount + 1;
                sec.innerText= secondCount;
                milliSec = 0;

                if (secondCount === 60) {
                    minCount++;
                    mins.innerText = minCount;
                    secondCount = 0;
                }
            }
        }
        
        , 10
    )

})