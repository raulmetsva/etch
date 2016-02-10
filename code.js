

var parent = document.getElementById('row');


for (var i=0; i < (16*16 - 1); i++) {
    var square = document.createElement('div');
	parent.appendChild(square);
}

function changeColor(e) {
	var target;
	target = e.target;
	target.className = 'color';
}

parent.addEventListener('mouseover', function(e) {     
    changeColor(e);                                 
  }, false);
  
  
function removeGrid() {
	var removeEl = document.getElementById('row');
	var containerEl = removeEl.parentNode;
	containerEl.removeChild(removeEl);
	var popup = prompt("Please enter a number");
	
	containerEl.appendChild(removeEl);
	while (removeEl.firstChild) {
		removeEl.removeChild(removeEl.firstChild);
	}
	var paddingValue = 256 / popup;
	for (var a=0; a < (popup*popup); a++) {
        var square = document.createElement('div');
	    parent.appendChild(square);
	}
	$(".container div div").css("padding", paddingValue);
}
  
var button = document.getElementById('btn');

button.addEventListener('click', removeGrid, false);

