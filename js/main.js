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

if (storageAvailable('localStorage')) {

  //Get all first elements that we need
  var todoInput = document.getElementById('todoitem');
  var addButton = document.getElementById('addButton');
  var todoList = document.getElementById('todoul');
  var finishedList = document.getElementById('finishedul');
	var explainMessage = document.createElement("span");
	explainMessage.innerHTML = "Click on task to change!";
	explainMessage.style.visibility = "hidden";

  //Add eventlistener to addButton
  addButton.addEventListener("click", addToDoTask);

  //Function to add tasks to ToDo list
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
          deleteButton.setAttribute("onclick","deleteToDoTask.call(this)");

      var changeButton = document.createElement("button");
          changeButton.innerHTML = "Change";
          changeButton.style.color = "white";
          changeButton.setAttribute("onclick","changeToDoTask.call(this)");

      var saveChangeButton = document.createElement("button");
          saveChangeButton.innerHTML = "Save changes";
          saveChangeButton.style.color = "white";
          saveChangeButton.setAttribute("onclick","saveChangeToDoTask.call(this)");

      var finishedButton = document.createElement("button");
          finishedButton.innerHTML = "Finished";
          finishedButton.style.color = "white";
          finishedButton.setAttribute("onclick","finishedToDoTask.call(this)");

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
			buttonDiv.appendChild(explainMessage);
			//buttonDiv.lastChild.style.visibility = "hidden";
      todoli.appendChild(todoliText);
      todoli.appendChild(buttonDiv);
      todoList.appendChild(todoli);
      todoInput.value ="";

			//Call Function to save data to local storage
			saveToLocalStorage();
    }
  }

  //Function to delete the task that has been added to ToDo list
  function deleteToDoTask(){
    var deleteLastDiv = this.parentNode;
    var deleteFirstDiv = this.parentNode.previousSibling;
    deleteLastDiv.remove();
    deleteFirstDiv.parentNode.remove();

		//Call Function to save data to local storage
    saveToLocalStorage();
  }

  //Function to change the task that has been added to ToDo list
  function changeToDoTask(){
		var changeToDoTaskFirstDiv = this.parentNode;
    var changeToDoTask = this.parentNode.previousSibling;
    changeToDoTask.contentEditable="true";
		changeToDoTaskFirstDiv.lastChild.style.visibility = "visible";
    changeToDoTask.style.color = "red";

		//Call Function to save data to local storage
    saveToLocalStorage();
  }

  //Function to save changes to the task that has been added to ToDo list
  function saveChangeToDoTask(){
		var changeToDoTaskFirstDiv = this.parentNode;
    var changeToDoTask = this.parentNode.previousSibling;
    changeToDoTask.contentEditable="false";
    changeToDoTask.style.color = "black";
		changeToDoTaskFirstDiv.lastChild.style.visibility = "hidden";

		//Call Function to save data to local storage
    saveToLocalStorage();
  }

  //Function to move the task to Finished ToDo list
  function finishedToDoTask(){
    var finishedLastDiv = this.parentNode;
    var finishedFirstDiv = this.parentNode.previousSibling;
		finishedFirstDiv.style.color = "black";
    for (var i=0; i<finishedLastDiv.childNodes.length; i++) {
      finishedLastDiv.removeChild(finishedLastDiv.childNodes[i]);
     }
     for (var i=0; i<finishedLastDiv.childNodes.length; i++) {
       finishedLastDiv.removeChild(finishedLastDiv.childNodes[i]);
     }
    finishedList.appendChild(finishedFirstDiv.parentNode);

		//Call Function to save data to local storage
    saveToLocalStorage();
  }

	//Function to save data to local storage
  function saveToLocalStorage() {
		if(todoList.innerHTML != "undefined" && todoList.innerHTML != null){
			localStorage.todo = JSON.stringify(todoList.innerHTML);
		}
		if(finishedList.innerHTML != "undefined" && finishedList.innerHTML != null){
		localStorage.finished = JSON.stringify(finishedList.innerHTML);
		}
  }

	//Function to get data from local storage
  function getFromLocalStorage() {
		if(todoList.innerHTML != "undefined" && todoList.innerHTML != null){
		todoList.innerHTML = JSON.parse(localStorage.todo);

		}
		if(finishedList.innerHTML != "undefined" && finishedList.innerHTML != null){
			finishedList.innerHTML = JSON.parse(localStorage.finished);
		}
  }

	//Function to get data from local storage
	getFromLocalStorage();

}
else {
	alert("No Local Storage!");
}
