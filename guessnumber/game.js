var guessnumber = document.getElementById("guessnumber")
var result = document.getElementById("result")
var score = document.getElementById("score")
var randomnumber = Math.floor(Math.random()*10)+1
var numberscore = 10

function check(){
    var enternumber = guessnumber.value
    if(enternumber == randomnumber){
        console.log("true")
        result.textContent="true"
        result.style.color = "green"
        alert("YOU OWN")
    }
    else if(numberscore == 0)
        {
            alert("better luck to refresh the Page")
        }
    else{
        console.log("false")
        result.textContent = "false"
        result.style.color ="red"
        numberscore = numberscore - 1
        score.textContent = "SCORE"+ numberscore
    }
}