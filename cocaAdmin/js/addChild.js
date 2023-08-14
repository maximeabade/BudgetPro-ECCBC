let idToRead= "";
let createContainer = document.getElementById("budgetsCreatorContainer");



function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function fetchAndDisplayBudgets() {
  fetch('http://localhost:5174/budget/readAll')
      .then(response => response.json())
      .then(data => {
          budgetsTab = data;
          console.log(budgetsTab);
          // Update the budgetsTab with the latest data
          budgetChilds(); // Call the function to display budgets with the updated data
      })
      .catch(error => {
          console.error("Error fetching budgets:", error.message);
          // Handle error here
      });
}

//////////////////////////////////////--GÉNÉRATION DES HTML DES PRODUITS + INTERACTIONS--//////////////////////////////////////
//function to get the data of the element we want to update, and save it to localStorage
function getOldData(id) {
  //At first we want to clear localStorage from its item oldData to make sure we have the very newest 
  if(localStorage.getItem("oldData")){localStorage.removeItem("oldData")}

  fetch(`http://localhost:5174/budget/readOne/${id}`)
  .then(response => {
      if (!response.ok) {
          throw new Error("Network response was not ok");
      }
      return response.json();
  })
  .then(data => {
      localStorage.setItem("oldData", JSON.stringify(data.budgetEntry));
  })
  .catch(error => {
      console.error(error);
  });
}


function budgetChilds() {

    var container = document.getElementById("budgetsReaderContainer");
    if(container.firstChild){
      clearContainer(container);
    }
    if(budgetsTab.length !== 0){
      for (var i = 0; i < budgetsTab.length; i++) {
          var budget = budgetsTab[i];
          console.log(budget);

          var div1 = document.createElement("div");
          div1.setAttribute("class", "row");
          div1.setAttribute("style", "margin-bottom: 10px; border-bottom: 5px solid black;");
          div1.setAttribute("id", budget.id);
          div1.setAttribute("onmouseover", "idToRead = this.id;");
          //display ids in the console
          div1.setAttribute("onmouseover", "console.log(this.id);");

          var div3 = document.createElement("div");
          div3.setAttribute("class", "col-sm-12");
          div3.setAttribute("id", budget.id + "div");




          var h4 = document.createElement("h4");
          var Strong1 = document.createElement("strong");
          Strong1.innerHTML = "Code Projet: '" + budget.projectCode + "'";
          h4.appendChild(Strong1);



          var p1 = document.createElement("p");
          p1.innerHTML = "Description: " + budget.description;

          var p2 = document.createElement("p");
          var p3 = document.createElement("p");
          var p4 = document.createElement("p");
          var p5 = document.createElement("p");
          var p6 = document.createElement("p");
          var p7 = document.createElement("p");

          p2.innerHTML = "Department: " + budget.department;
          p3.innerHTML = "Category: " + budget.category;
          p4.innerHTML = "Type: " + budget.type;
          p5.innerHTML = "CER Code: " + budget.cerCode;
          p6.innerHTML = "Post: " + budget.post;
          p7.innerHTML = "Group: " + budget.group;

          var p8 = document.createElement("p");
          p8.innerHTML = "Cognos Code: " + budget.cognosCode;

          var p9 = document.createElement("p");
          p9.innerHTML = "Direction: " + budget.direction;

          var p10 = document.createElement("p");
          p10.innerHTML = "Quantity: " + budget.quantity;

          // Ajoutez d'autres éléments p pour afficher les autres propriétés

          var pFinalBudget = document.createElement("p");
          pFinalBudget.innerHTML = "Final Budget: " + budget.finalBudgetF3 + " DIRHAMS";

          div3.appendChild(h4);
          div3.appendChild(p1);
          div3.appendChild(p2);
          div3.appendChild(p3);
          div3.appendChild(p4);
          div3.appendChild(p5);
          div3.appendChild(p6);
          div3.appendChild(p7);
          div3.appendChild(p8);
          div3.appendChild(p9);
          div3.appendChild(p10);
          div3.appendChild(pFinalBudget);
          (function(budgetId, budgetData) {
            var updateBtn = document.createElement("button");
            updateBtn.textContent = "Update";
            updateBtn.className = "btn btn-primary ";
            updateBtn.addEventListener("click", function () {
              //redirect to another page for update. So first, we weend to get the old infos
              getOldData(budgetId);
              window.location.href = "http://localhost/cocaAdmin/pages/updateBudget.php";
            });

            var deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.className = "btn btn-danger ";
            deleteBtn.addEventListener("click", function() {
              // Make a DELETE request to the API
              fetch(`http://localhost:5174/budget/deleteOne/${budgetId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                }
              })
              .then(response => response.json())
              .then(data => {
                  console.log(data.message); // Display success message
                  // You might want to refresh the list of budgets after deletion
                  fetchAndDisplayBudgets();
              })
              .catch(error => {
                  console.error("Error deleting budget entry:", error.message);
                  // Handle error here
              });
              //directly remove div1 and its children from container
              container.removeChild(div1);
            });

            var buttonsDiv = document.createElement("div");
            buttonsDiv.appendChild(updateBtn);
            buttonsDiv.appendChild(deleteBtn);
            div3.appendChild(buttonsDiv);
          })(budget.id, budget);


          div1.appendChild(div3);
          container.appendChild(div1);
          container.setAttribute("style", "margin-top: 10px; margin-bottom: 10px; color: black;");
      }
    }else{
      var div1 = document.createElement("div");
      div1.setAttribute("class", "row");
      div1.setAttribute("style", "margin-bottom: 10px; border-bottom: 5px solid black;");

      var div3 = document.createElement("div");
      div3.setAttribute("class", "col-sm-12");
      div3.setAttribute("id", "div");

      var p1 = document.createElement("p");
      p1.innerHTML = "No Budgets Found";

      div3.appendChild(p1);
      div1.appendChild(div3);
      container.appendChild(div1);
      container.setAttribute("style", "margin-top: 10px; margin-bottom: 10px; color: black;");
    }
}

function budgetCreatorChilds(){
  
    const departments = ["E&D", "R&T", "SIC"];
    const categories = [
      "Maintenance",
      "Projet",
      "Développement",
      "Acquisitions",
      "Consulting",
    ];
    const types = ["Capex", "Opex"];
    const posts = ["Investissement", "Maintenance"];
    const groups = ["Group", "Local"];
    const currencyRates = { MAD: 1, EUR: 10.68, USD: 9.8 };
    const createContainer = document.getElementById("budgetsCreatorContainer");
    clearContainer(createContainer);

    function createInput(name, type, label) {
      const labelElem = document.createElement("label");
      labelElem.textContent = label;

      const input = document.createElement("input");
      input.type = type;
      input.name = name;

      labelElem.appendChild(input);
      return labelElem;
    }

    function createSelect(name, options, label) {
      const labelElem = document.createElement("label");
      labelElem.textContent = label;

      const select = document.createElement("select");
      select.name = name;

      for (let i = 0; i < options.length; i++) {
        const option = document.createElement("option");
        option.value = options[i];
        option.textContent = options[i];
        select.appendChild(option);
      }

      labelElem.appendChild(select);
      return labelElem;
    }

    function createForm() {
        let form = document.createElement("form");
        form.appendChild(createInput("projectCode", "text", "Code Projet"));
        form.appendChild(createSelect("department", departments, "Département"));
        form.appendChild(createSelect("category", categories, "Catégorie"));
        form.appendChild(createSelect("type", types, "Type"));
        form.appendChild(createInput("cerCode", "text", "CER Code"));
        form.appendChild(createSelect("post", posts, "Post"));
        form.appendChild(createSelect("group", groups, "Group"));
        form.appendChild(createInput("description", "text", "Description"));
        form.appendChild(createInput("cognosCode", "text", "Cognos Code"));
        form.appendChild(createInput("direction", "text", "Direction"));
        form.appendChild(createInput("quantity", "number", "Quantity"));
        form.appendChild(createInput("unitPrice", "number", "Unit Price"));
        form.appendChild(createSelect("currency", Object.keys(currencyRates), "Currency"));
        form.appendChild(createInput("budgetV0", "number", "Budget V0"));
        form.appendChild(createInput("budgetV1", "number", "Budget V1"));
        form.appendChild(createInput("approvedRate", "number", "Approved Rate"));
        form.appendChild(createInput("freezeNabc", "number", "Freeze Nabc"));
        form.appendChild(createInput("blocking", "number", "Blocking"));
        form.appendChild(createInput("unblocking", "number", "Unblocking"));
        form.appendChild(createInput("additionalBudget", "number", "Additional Budget"));
        form.appendChild(createInput("budgetExternal", "number", "Budget External"));
        form.appendChild(createInput("approvedBudgetMAD", "number", "Approved Budget MAD"));
        form.appendChild(createInput("finalBudgetF3", "number", "Final Budget F3"));
        form.appendChild(createInput("subtotalEUR", "number", "Subtotal EUR"));
        form.appendChild(createInput("reservedBudget", "number", "Reserved Budget"));
        form.appendChild(createInput("bcInitiated", "number", "BC Initiated"));
        form.appendChild(createInput("bcCommitted", "number", "BC Committed"));
        form.appendChild(createInput("bcRealized", "number", "BC Realized"));
        form.appendChild(createInput("remainingBudget", "number", "Remaining Budget"));
        form.appendChild(createInput("percentRemainingBudget", "number", "Percent Remaining Budget"));

        // Ajout du formulaire au contenu du modal
        createContainer.appendChild(form);
        let submitBtn = document.createElement("button");
        submitBtn.classList.add("btn", "btn-primary");
        submitBtn.textContent = "Sauver le budget";
        submitBtn.type = "submit";

        submitBtn.addEventListener("click", (e) => {
          e.preventDefault();
          let body = {};
          let inputs = form.querySelectorAll("input");
          let selects = form.querySelectorAll("select");
          for (let i = 0; i < inputs.length; i++) {
            body[inputs[i].name] = inputs[i].value;
          }
          for (let i = 0; i < selects.length; i++) {
            body[selects[i].name] = selects[i].value;
          }
          if(body.projectCode !== null && body.projectCode !== undefined && body.projectCode !== "") {
          fetch("http://localhost:5174/budget/create", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          }).then(function (response) {
            console.log(response);
            if (response.status - 200 >= 100) {
              console.error("Error creating budget: " + response.status);
              return;
            }
            else {
              alert("Budget created successfully");
            }
            //refresh the list of budgets
            fetchAndDisplayBudgets();
          }).catch(function (error) {
            console.error("Error creating budget: " + error);
          });
          //reset all the values
          inputs.forEach((input) => {
            input.value = "";
          }
          //rafraichir la page
          );
         window.location.reload();
        }
        else
        {
          alert("Please enter a project code");
        }

        });
        form.appendChild(submitBtn);
    }

    createForm();
    //close modal window after sending  a correct body
    


    fetchAndDisplayBudgets();
}   

