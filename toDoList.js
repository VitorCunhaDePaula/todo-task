(function () {
    const form = document.querySelector("form");
    const ul = document.querySelector("ul");
  
    function getFormattedData() {
      const date = new Date();
      const hour = date.getHours();
      const minutes = date.getMinutes();
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const fullYear = date.getFullYear();
  
      return `${hour}:${minutes.toString().padStart(2, '0')} - ${day.toString().padStart(2, '0')}/${month}/${fullYear}`;
    }
  
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
  
      edit.addEventListener("click", function () {
        divEdit.classList.remove("editNone");
        editButton.addEventListener("click", function () {
          p.textContent = editInput.value;
          document.querySelector("input").value = "";
          editInput.value = "";
          
        });
      });
  
      remove.addEventListener("click", function () {
        ul.removeChild(li);
      });
    }
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.querySelector("input").value.trim();
      if (input !== "") {
        createTaskElement(input);
        document.querySelector("input").value = "";
      }
    });
  })();










