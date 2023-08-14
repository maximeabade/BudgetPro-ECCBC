let idToRead= "";


function clearContainer(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

//////////////////////////////////////--GÉNÉRATION DES HTML DES PRODUITS + INTERACTIONS--//////////////////////////////////////

function budgetChilds() {
    var container = document.getElementById("budgetsContainer");
    clearContainer(container);
    var container = document.getElementById("budgetsContainer");
    for (var i = 0; i < budgetsTab.length; i++) {
        var budget = budgetsTab[i];

        var div1 = document.createElement("div");
        div1.setAttribute("class", "row");
        div1.setAttribute("style", "margin-bottom: 10px; border-bottom: 5px solid black;");
        div1.setAttribute("id", budget.id);
        div1.setAttribute("onmouseover", "idToRead = this.id;");

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

        div1.appendChild(div3);
        container.appendChild(div1);
        container.setAttribute("style", "margin-top: 10px; margin-bottom: 10px; color: black;");
    }
}