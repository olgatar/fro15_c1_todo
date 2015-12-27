
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

//Add eventlistener to addButton
addButton.addEventListener("click", addToDoTask);

//Function to add a task to ToDo list
function addToDoTask(){
  if (todoInput.value !== "") {
    var todoli = document.createElement("li");
    var todoliText = document.createElement("div");

    var buttonDiv = document.createElement("div");
    todoli.className = "list-group-item";
    todoliText.innerHTML = todoInput.value;

    var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.style.color = "white";

    var changeButton = document.createElement("button");
        changeButton.innerHTML = "Change";
        changeButton.style.color = "white";

    var saveChangeButton = document.createElement("button");
        saveChangeButton.innerHTML = "Save changes";
        saveChangeButton.style.color = "white";

    var finishedButton = document.createElement("button");
        finishedButton.innerHTML = "Finished";
        finishedButton.style.color = "white";

    //Add eventlistener to new buttons
    deleteButton.addEventListener("click", deleteToDoTask);
    changeButton.addEventListener("click", changeToDoTask);
    saveChangeButton.addEventListener("click", saveChangeToDoTask);
    finishedButton.addEventListener("click", finishedToDoTask);

    //Append all elements to ToDoList
    buttonDiv.appendChild(changeButton);
    buttonDiv.appendChild(saveChangeButton);
    buttonDiv.appendChild(finishedButton);
    buttonDiv.appendChild(deleteButton);
    todoli.appendChild(todoliText);
    todoli.appendChild(buttonDiv);
    todoList.appendChild(todoli);
    todoInput.value ="";
  }
}

//Function to delete the task that has been added to ToDo list
function deleteToDoTask(){
  var deleteLastDiv = this.parentNode;
  var deleteFirstDiv = this.parentNode.previousSibling;
  deleteLastDiv.remove();
  deleteFirstDiv.parentNode.remove();
}

//Function to change the task that has been added to ToDo list
function changeToDoTask(){
  var changeToDoTask = this.parentNode.previousSibling;
  changeToDoTask.contentEditable="true";
  changeToDoTask.style.color = "red";
}

//Function to save changes to the task that has been added to ToDo list
function saveChangeToDoTask(){
  var changeToDoTask = this.parentNode.previousSibling;
  changeToDoTask.contentEditable="false";
  changeToDoTask.style.color = "black";
}

//Function to delete the task that has been added to ToDo list
function finishedToDoTask(){
  var finishedLastDiv = this.parentNode;
  var finishedFirstDiv = this.parentNode.previousSibling;
  for (var i=0; i<finishedLastDiv.childNodes.length; i++) {
    finishedLastDiv.removeChild(finishedLastDiv.childNodes[i]);
   }
   for (var i=0; i<finishedLastDiv.childNodes.length; i++) {
     finishedLastDiv.removeChild(finishedLastDiv.childNodes[i]);
   }
  finishedList.appendChild(finishedFirstDiv.parentNode);
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
