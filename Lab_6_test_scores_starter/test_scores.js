var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

function addScore(){
	var name = $("name").value;
	var score = $("score").value;
	if (name.length == 0 ){

		alert("Name field are empty ");
		
	}
	else if(score.length==0){
		alert("Please enter a number in the score filed");
	}
	else if(name.length==0 && score.length==0 ){
		alert("bothe filed are empty");
	}

	else if ( name.length==0 && (isNaN (score))){
		alert("You entered a string in socre field");
	}
	else if (score>=0 && name.length==0){
		alert("Name filed is empty");
	}
	
	else if ((name.length !=0) && score.length==0){
		alert("Please enter a number in the score filed");
	}

	if (isNaN (score)){
		alert("Intput is not a number") ;
	}
	else if (score<0){
		alert("Enter a positive number");
	}
	else if (score>100){
		alert("Enter a number 0 to 100");
	}
	
	
	else if (name.length !=0 && score.length!=0 && score>=0 && score <=100 ){
		names.push(name);
		scores.push(score);
		
	}
	
	
	
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


