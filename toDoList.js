(function () {
    // Here, I selected the elements that I kept in the HTML, using the DOM tree.
    const form = document.querySelector("form");
    const ul = document.querySelector("ul");
    
    // In this function, I formatted the time and date so that when I enter a new task, the date is updated.
    function getFormattedData() {
    const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const fullYear = date.getFullYear();
    return `${hour}:${minutes.toString().padStart(2, '0')} - ${day.toString().padStart(2, '0')}/${month}/${fullYear}`;
    }
  
    //In the function below, I created elements using JavaScript. Previously, I had already created the same elements in HTML and included 
    //the styles in CSS. 
    //However, to make it interactive, I deleted them in HTML and created them here using JavaScript.
    //The classes inserted had already been created in HTML and styled in CSS as well.
    function createTaskElement(taskText) {

      const li = document.createElement("li");
  
      const p = document.createElement("p");
      p.classList.add("taskP");
  
      const pData = document.createElement("p");
      pData.classList.add("taskD");
  
      const divIcons = document.createElement("div");
      divIcons.classList.add("icons");
  
      const remove = document.createElement("i");
      remove.classList.add("fa-solid", "fa-delete-left");
  
      const editInput = document.createElement("input");
      editInput.classList.add("editInput");
  
      const editButton = document.createElement("button");
      editButton.classList.add("editButton");
      editButton.textContent = "Ok!";
  
      const edit = document.createElement("i");
      edit.classList.add("fa-solid", "fa-pen-to-square");
  
      const divEdit = document.createElement("div");
      divEdit.classList.add("editNone", "edit");
    //Below, I inserted the elements, one inside the other, using the same logic as in the HTML language.
      li.appendChild(p);
      li.appendChild(pData);
      divIcons.appendChild(edit);
      divIcons.appendChild(remove);
      li.appendChild(divIcons);
      p.textContent = taskText;
      divEdit.appendChild(editInput);
      divEdit.appendChild(editButton);
      li.appendChild(divEdit);
      pData.textContent = getFormattedData();
      ul.appendChild(li);
    
      //Here below is the first event. It will be triggered when you click on the edit icon. Previously in HTML, 
      //I had created a div element with two classes, one called "editNone" with display: none, and the other "edit" with display: block. 
      //Without executing the event, the class with display none is active. When executing the event, 
      //I added the method to remove the "editNone" class, causing the display: none to disappear and leaving only display: block.

      //Upon triggering the event, a div with an input and a submit button will open to pass a value. 
      //The div, input, and button were previously created in HTML, styled in CSS, and then deleted in HTML to make the event fully interactive.
      edit.addEventListener("click", function () {
        divEdit.classList.remove("editNone");
        
        //Within the triggered event, another event will be fired after clicking the button. 
        //Clicking the button will trigger the event that passes the value entered in the input to the main field, 
        //editing the main value to the value passed in this input.
        editButton.addEventListener("click", function () {
          p.textContent = editInput.value;
          document.querySelector("input").value = ""; // Clear the field of main input;
          editInput.value = ""; // Clear the field of EditInput
          
        });
      });
      // This function below is triggered when the user clicks on the trash bin icon. It removes the selected list item (LI).
      remove.addEventListener("click", function () {
        ul.removeChild(li);
      });
    }
    //And finally, the main function is the one that includes the list item (LI) with the value entered by the user in the main input. 
    //Since the submit button, by default, refreshes the page when the user clicks it, 
    //I opted to use the preventDefault() method. This way, when the user submits the input value, the page will not be refreshed.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.querySelector("input").value.trim();
      if (input !== "") {
        createTaskElement(input);
        document.querySelector("input").value = "";
        
        
      }
    });
})();










