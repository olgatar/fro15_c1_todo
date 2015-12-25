
/*
//Function that check if a Web Storage Support is available
//Used an example on the MDN site on Using the Web Storage API
function storageAvailable(type) {
	try {
		var storage = window[type],
			x = '__storage_test__';
		storage.setItem(x, x);
		storage.removeItem(x);
		return true;
	}
	catch(e) {
		return false;
	}
}
*/

//Get all elements that we need
var todoInput = document.getElementById('todoitem');
var addButton = document.getElementById('addButton');
var todoList = document.getElementById('todoul');
var finishedList = document.getElementById('finishedul');
//var changeTaskPopup = document.getElementById('changeTaskPopup');
//var popupButton = document.getElementById('popupButton');

//Add eventlistener to buttons
addButton.addEventListener("click", addToDoTask);


//Function to add a task to ToDo list
function addToDoTask(){
  var todoli = document.createElement("li");
  todoli.className = "list-group-item";
  todoli.innerHTML = todoInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", deleteToDoTask);

  var changeButton = document.createElement("button");
  changeButton.innerHTML = "Change";
  changeButton.addEventListener("click", changeToDoTask(todoli));

  todoli.appendChild(deleteButton);
  todoli.appendChild(changeButton);

  todoList.appendChild(todoli);
  todoInput.value ="";
}

//Function to delete the task that has been added to ToDo list
function deleteToDoTask(){
  todoList.removeChild(this.parentNode);
}

//Function to delete the task that has been added to ToDo list
/* function changeToDoTask(todoli){
  changeTaskPopup.className = "show";
  var changeTask = document.getElementById('changeitem');
  var popupButton = document.getElementById('popupButton');
  popupButton.addEventListener("click", function(){
  todoli.innerHTML = changeTask.value;
  todoli.appendChild(deleteButton);
  todoli.appendChild(changeButton);*/
  })
}


/*
if (storageAvailable('localStorage')) {
	alert("Yes!");
}
else {
	alert("No web local storage support!");
}

if(typeof(storage) !== "undefined") {
    // Code for localStorage/sessionStorage.
} else {
    // Sorry! No Web Storage support..
}
*/
