

//testing to see if the file is linked in the right place
console.log("hello world Am I even linked up right?");

$( document ).ready(function() { 

var correct= 0;

var incorrect = 0;

var unanswered = 0;

var correctAnswers =["a","a","a"];

var userInput =[];

var time = 45;




//hides the target divs 

function hideTotal () {
    $("#totaldiv").hide();
}

function hideTimer () {
    $("#timerdiv").hide();
}

function hideMiddle () {
    $("#middlediv").hide();
}

function hideStart () {
    $("#startdiv").hide();
}

//Show the target div

function showTotal () {
    $("#totaldiv").show();
}

function showTimer () {
    $("#timerdiv").show();
}
function showMiddle (){
    $("#middlediv").show();
}

//checks the answers


function checkAnswer() {

$("input[type='radio']").each(function() {
    var name = $(this).attr("name");
    if($("input:radio[name="+name+"]:checked").length == 0){
        userInput.push("");  
    }else {
        if  ($(this).is(":checked")) 
        userInput.push($(this).val());
    }
});
for(i=0; i < userInput.length; i++) {

    if (correctAnswers[i] == userInput[i]) {

        correct++;

    }else if (userInput[i] == "") {

        unanswered++;

    }else {

        incorrect++;

    }

}


//timer stuff

function run() {
      setInterval(count, 1000);
    }

function count(){

time -=1;

$("#timer").text(time);

}

// New Game function 

function newGame () {
    hideStart()
    showTimer()
    showMiddle()
    checkAnswers()
}

//Game Over Function 

function gameOver () {
    hideTimer()
    hideStart()
    hideMiddle()
    showTotal()

    var totalLoser = incorrect + unanswered

    if(totalLoser > correct) {
        $("#winorlose").append("You Win!");
    }else {
        $("#winorlose").append("You Lose!");
    }

    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
}

//when the page loads

hideTimer()
hideMiddle()
hideTotal()

//Begins the Game 

$("#startbutton").click(function(){
    newGame();
})

$("#donebutton").click(function(){
    gameOver()
})

});
