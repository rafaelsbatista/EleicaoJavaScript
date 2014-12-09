$(document).ready(function() {
	myfunction();
	getPartidos();
});


function getPartidos(){
	$.getJSON('resources/partidos.json',function(data){
		var option = $("#selectPartido");
		var newOption = document.createElement("option");
		newOption.text = data.value;
		option.append(newOption);
	}
	);
}
function myfunction(){
var option = $("#selectPartido");
option.empty();
var newOption = document.createElement("option");
newOption.text = "Todos";
option.append(newOption);
}