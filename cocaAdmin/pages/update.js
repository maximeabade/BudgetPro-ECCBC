let oldObject = localStorage.getItem('oldData');
//now we want to prefill the form with the old data
//localStorage.oldObjectJSON is a string, we need to convert it to JSON 
let oldObjectJSON = JSON.parse(oldObject);
console.log(typeof oldObjectJSON);
console.log(oldObjectJSON.projectCode);

function setFieldValue(fieldId, fieldValue) {
    const field = document.getElementById(fieldId);
    if (field) {
        field.setAttribute('value', fieldValue);
    }
}
document.addEventListener("DOMContentLoaded", function() {
    // Call the function for each field with its corresponding value
    setFieldValue('projectCode', oldObjectJSON.projectCode);
    setFieldValue('department', oldObjectJSON.department);
    setFieldValue('category', oldObjectJSON.category);
    setFieldValue('type', oldObjectJSON.type);
    setFieldValue('cerCode', oldObjectJSON.cerCode);
    setFieldValue('post', oldObjectJSON.post);
    setFieldValue('group', oldObjectJSON.group);
    setFieldValue('description', oldObjectJSON.description);
    setFieldValue('cognosCode', oldObjectJSON.cognosCode);
    setFieldValue('direction', oldObjectJSON.direction);
    setFieldValue('quantity', oldObjectJSON.quantity);
    setFieldValue('unitPrice', oldObjectJSON.unitPrice);
    setFieldValue('currency', oldObjectJSON.currency);
    setFieldValue('budgetV0', oldObjectJSON.budgetV0);
    setFieldValue('budgetV1', oldObjectJSON.budgetV1);
    setFieldValue('approvedRate', oldObjectJSON.approvedRate);
    setFieldValue('freezeNabc', oldObjectJSON.freezeNabc);
    setFieldValue('blocking', oldObjectJSON.blocking);
    setFieldValue('unblocking', oldObjectJSON.unblocking);
    setFieldValue('additionalBudget', oldObjectJSON.additionalBudget);
    setFieldValue('budgetExternal', oldObjectJSON.budgetExternal);
    setFieldValue('approvedBudgetMAD', oldObjectJSON.approvedBudgetMAD);
    setFieldValue('finalBudgetF3', oldObjectJSON.finalBudgetF3);
    setFieldValue('subtotalEUR', oldObjectJSON.subtotalEUR);
    setFieldValue('reservedBudget', oldObjectJSON.reservedBudget);
    setFieldValue('bcInitiated', oldObjectJSON.bcInitiated);
    setFieldValue('bcCommitted', oldObjectJSON.bcCommitted);
    setFieldValue('bcRealized', oldObjectJSON.bcRealized);
    setFieldValue('remainingBudget', oldObjectJSON.remainingBudget);
    setFieldValue('percentRemainingBudget', oldObjectJSON.percentRemainingBudget);
    

    const form = document.querySelector('form');

    // Add an event listener to the form's submit button
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Create an object to hold the updated form data
        let updatedFormData = {
            projectCode: document.getElementById('projectCode').value,
            department: document.getElementById('department').value,
            category: document.getElementById('category').value,
            type: document.getElementById('type').value,
            cerCode: document.getElementById('cerCode').value,
            post: document.getElementById('post').value,
            group: document.getElementById('group').value,
            description: document.getElementById('description').value,
            cognosCode: document.getElementById('cognosCode').value,
            direction: document.getElementById('direction').value,
            quantity: document.getElementById('quantity').value,
            unitPrice: document.getElementById('unitPrice').value,
            currency: document.getElementById('currency').value,
            budgetV0: document.getElementById('budgetV0').value,
            budgetV1: document.getElementById('budgetV1').value,
            approvedRate: document.getElementById('approvedRate').value,
            freezeNabc: document.getElementById('freezeNabc').value,
            blocking: document.getElementById('blocking').value,
            unblocking: document.getElementById('unblocking').value,
            additionalBudget: document.getElementById('additionalBudget').value,
            budgetExternal: document.getElementById('budgetExternal').value,
            approvedBudgetMAD: document.getElementById('approvedBudgetMAD').value,
            finalBudgetF3: document.getElementById('finalBudgetF3').value,
            subtotalEUR: document.getElementById('subtotalEUR').value,
            reservedBudget: document.getElementById('reservedBudget').value,
            bcInitiated: document.getElementById('bcInitiated').value,
            bcCommitted: document.getElementById('bcCommitted').value,
            bcRealized: document.getElementById('bcRealized').value,
            remainingBudget: document.getElementById('remainingBudget').value,
            percentRemainingBudget: document.getElementById('percentRemainingBudget').value,
            id : document.getElementById('projectCode').value
        };

        fetch(`http://localhost:5174/budget/updateOne/${oldObjectJSON.projectCode}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedFormData), // Update with the data you want to send
        })
            .then(function (response) {
              console.log(response);
              if (response.status - 200 <= 100) {
                alert("Budget updated successfully");
                // Refresh the list of budgets
                window.location.href = "http://localhost/cocaAdmin";                
              } else {
                console.error("Error updating budget: " + response.status);
              }
            })
            .catch(function (error) {
              console.error("Error updating budget: " + error);
            });
    });
});


