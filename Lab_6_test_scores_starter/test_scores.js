var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore(){
	var name = $("name").value;
	if (isNaN!=(name)){

		alert("Intput is not a Stirng");
		alert("please provide a string input");
	}
	var score = $("score").value;
	
	if (isNaN (score)){
		alert("Intput is not a number") ;
		alert ("Enter a whole number");
	}
	names.push(name);
	scores.push(score);
}



//write a fuction start
var displayResults = function (){
	var avg = 0.0,
	highest = 0;
	for(var i = 0;i <scores.length; i++){
		avg += parseFloat(scores[i]);
		if(scores[highest]<scores[i])
		highest= i;

	}
	avg = avg/scores.length;
	$("results").innerHTML = "Average score = " + avg+"<br/>";
	$("results").innerHTML +="High Score = " +names [highest] +"with a ascore of " +  scores[highest];
}



function displayScores(){
	var str = "<table>";
	str += "<tr align= 'left'><th>Name</th><th>Score</th></tr>";
	for (var i = 0;i<scores.length; i++){

		str +="<tr><td>" +names[i] +"</td><td>"+scores[i]+"</td></tr>";
	
	}
	str += "</table>";
	$("scores_table").innerHTML = str;
}
window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};


