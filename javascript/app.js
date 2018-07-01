var seconds = 60;
var timer;
	$('#timer').text(seconds);

// worked on
var correctAnswers = ["warriors-True", "lbj-False", "no-ring-True", "49ers-True"];

function startTimer(){
	seconds--;
	$('#timer').text(seconds);
	if(seconds == -1){
		clearInterval(timer);
		alert('Game Over');
		seconds = 60;
		$('#timer').text(seconds);
			
		}
}


$('#start-button').on('click', function(){
	timer = setInterval(startTimer, 1000);
});

// function results(){
// 	var correctAnswers = 0;
// 	var incorrectAnswers = 0;
// 	$('#no-ring').on('click', function(){
// 		correctAnswers++;
// 	});
// };


// worked on
var userAnswers = []
$("input").on("click", function () {
	var thisInput = $(this)
	userAnswers.push(thisInput.val())
})

// worked on 
$("#done-button").on("click", function () {
	//.includes
	var correct = 0;

	for (var i = 0; i < correctAnswers.length; i++) {
		var answer = correctAnswers[i]
		if (userAnswers.includes(answer)){
			correct++;
		}
	}

	console.log(correct);
});



