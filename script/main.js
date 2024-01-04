function allowDrop(ev) {
	ev.preventDefault();
	return false;	
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
	return false;
}

function drop(ev) {
	ev.preventDefault();
	var data = ev.dataTransfer.getData("text");
	var draggedElement = document.getElementById(data);
	ev.target.appendChild(draggedElement);
}