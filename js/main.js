
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
  if (todoInput.value !== "") {
    var todoli = document.createElement("li");
    var buttonDiv = document.createElement("div");
    todoli.className = "list-group-item";
    todoli.innerHTML = todoInput.value;


    var deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.style.color = "white";
        //deleteButton.style.display = "block";
        deleteButton.addEventListener("click", deleteToDoTask);

    var changeButton = document.createElement("button");
        changeButton.innerHTML = "Change";
        changeButton.setAttribute("class","change");
        changeButton.style.color = "white";
        //changeButton.style.display = "block";
        //changeButton.addEventListener("click", changeToDoTask);

    var finishedButton = document.createElement("button");
        finishedButton.innerHTML = "Finished";
        finishedButton.style.color = "white";
        //finishedButton.style.display = "inline-block";
        //finishedButton.addEventListener("click", finishedToDoTask);

    buttonDiv.appendChild(changeButton);
    buttonDiv.appendChild(finishedButton);
    buttonDiv.appendChild(deleteButton);

    todoli.appendChild(buttonDiv);

    todoList.appendChild(todoli);
    todoInput.value ="";

  }
}

//Function to delete the task that has been added to ToDo list
function deleteToDoTask(){



}

/*function changeToDoTask(){
var changeInput = document.createElement("input");
//this.innerText = changeInput.value
  }*/

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
