
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

//Add eventlistener to buttons
addButton.addEventListener("click", addToDoTask);


//Function to add a task to ToDo list
function addToDoTask(){
  var todoli = document.createElement("li");
  todoli.innerHTML = todoInput.value;

  var deleteButton = document.createElement("button");
  deleteButton.innerHTML = "Delete";
  deleteButton.addEventListener("click", deleteToDoTask);
  todoli.appendChild(deleteButton);

  todoList.appendChild(todoli);
}

//Function to delete the task that has been added to ToDo list
function deleteToDoTask(e){
  console.log(e);
  todoList.removeChild(this.parentNode);
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
