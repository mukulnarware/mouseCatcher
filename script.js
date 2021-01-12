let score = 0;
let prevHole = 0;
let highScores=[60,50];
let totalTime = 120;
let maxScore=0;
let  interval;




// setting up the image of rat
function ratImageSet() {
    array = ["bax1", "bax2", "bax3", "bax4", "bax5", "bax6", "bax7", "bax8"];

    let image = document.createElement("img");
    image.setAttribute("src", "rat.png");

    // image.setAttribute("onclick", "tapped()")
    image.addEventListener("click",tapped)

    let rand = Math.floor(Math.random() * 8);
    // console.log(rand);

    document.getElementById(array[prevHole]).innerHTML = "";
    document.getElementById(array[rand]).appendChild(image);

    prevHole = rand;
    // image.querySelector(`#bax${rand} .rat-image`).innerHTML=
    // prevHole=rand;
    document.getElementById("result").style.display="none";
    


}
interval=setInterval(ratImageSet, 650);


function tapped() {
    score += 10;
    document.getElementById("current-score").innerHTML = `Score: ${score}`;
}
/////////////////playAgain//////////////////
function playAgain(){

    score=0;
    totalTime=120;
    interval=setInterval(ratImageSet, 650);
    let temp=document.getElementById("highscore").innerText="";
    document.getElementById("container").style.display="flex";
    document.getElementById("result").style.display="none";
    

}

///////////settime//////////////
setInterval(function () {


    if (totalTime > 0) {
        totalTime--;
        let sec;
        let mins = parseInt(totalTime / 60);
        console.log(totalTime);
        if (totalTime >= 60) { sec = totalTime - 60; } else {
            sec = totalTime;
        }
        let time = document.getElementById("time");
        time.innerHTML = `Remaining time: ${mins} : ${sec}`;
       
    } else {
        clearInterval(interval);
        time.innerHTML="Time Over!";
        if(score>Math.max(...highScores)){
            highScores.push(score);
            
            let temp=document.getElementById("highscore");
            temp.innerText=`Congratulations!! you have Scored highest score : ${score}`;
        }else{
            let temp=document.getElementById("highscore");
            temp.innerText=`Your Score is so poor : ${score}`;
        }
        /////////toggle the container
        document.getElementById("container").style.display="none";
        document.getElementById("result").style.display="flex";
        

    }
}, 1000);