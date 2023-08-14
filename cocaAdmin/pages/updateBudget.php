<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECCBC ADMIN</title>
    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="../js/script.js"></script>
    <script src="../js/addChild.js"></script>
    <script src = "./update.js"></script>
</head>
<style>
    body {
        font-family: 'Montserrat', sans-serif;
        background-color: #f8f9fa;
        margin: 0;
        padding: 0;
    }

    #updateFormContainer {
        max-width: 600px;
        margin: 50px auto;
        padding: 20px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    form label {
        font-weight: bold;
    }

    form select,
    form input[type="text"],
    form input[type="number"] {
        width: 100%;
        padding: 8px;
        margin-bottom: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
        background-color: #fff;
        font-size: 14px;
    }

    form select {
        height: 36px;
    }

    form button {
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        background-color: #007bff;
        color: #fff;
        font-size: 14px;
        cursor: pointer;
    }

    form button:hover {
        background-color: #0056b3;
    }
</style>
<body>
    <div id ="updateFormContainer">
        <form>
            <label for="projectCode">Code Projet</label>
            <input type="text" id="projectCode" name="projectCode"><br><br>

            <label for="department">Département</label>
            <select id="department" name="department">
                <option value="E&D">E&D</option>
                <option value="R&T">R&T</option>
                <option value="SIC">SIC</option>
            </select><br><br>

            <label for="category">Catégorie</label>
            <select id="category" name="category">
                <option value="Maintenance">Maintenance</option>
                <option value="Projet">Projet</option>
                <option value="Développement">Développement</option>
                <option value="Acquisitions">Acquisitions</option>
                <option value="Consulting">Consulting</option>
            </select><br><br>

            <label for="type">Type</label>
            <select id="type" name="type">
                <option value="Capex">Capex</option>
                <option value="Opex">Opex</option>
            </select><br><br>

            <label for="cerCode">CER Code</label>
            <input type="text" id="cerCode" name="cerCode"><br><br>

            <label for="post">Post</label>
            <select id="post" name="post">
                <option value="Investissement">Investissement</option>
                <option value="Maintenance">Maintenance</option>
            </select><br><br>

            <label for="group">Group</label>
            <select id="group" name="group">
                <option value="Group">Group</option>
                <option value="Local">Local</option>
            </select><br><br>

            <label for="description">Description</label>
            <input type="text" id="description" name="description"><br><br>

            <label for="cognosCode">Cognos Code</label>
            <input type="text" id="cognosCode" name="cognosCode"><br><br>

            <label for="direction">Direction</label>
            <input type="text" id="direction" name="direction"><br><br>

            <label for="quantity">Quantity</label>
            <input type="number" id="quantity" name="quantity"><br><br>

            <label for="unitPrice">Unit Price</label>
            <input type="number" id="unitPrice" name="unitPrice"><br><br>

            <label for="currency">Currency</label>
            <select id="currency" name="currency">
                <option value="MAD">MAD</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
            </select><br><br>

            <label for="budgetV0">Budget V0</label>
            <input type="number" id="budgetV0" name="budgetV0"><br><br>

            <label for="budgetV1">Budget V1</label>
            <input type="number" id="budgetV1" name="budgetV1"><br><br>

            <label for="approvedRate">Approved Rate</label>
            <input type="number" id="approvedRate" name="approvedRate"><br><br>

            <label for="freezeNabc">Freeze Nabc</label>
            <input type="number" id="freezeNabc" name="freezeNabc"><br><br>

            <label for="blocking">Blocking</label>
            <input type="number" id="blocking" name="blocking"><br><br>

            <label for="unblocking">Unblocking</label>
            <input type="number" id="unblocking" name="unblocking"><br><br>

            <label for="additionalBudget">Additional Budget</label>
            <input type="number" id="additionalBudget" name="additionalBudget"><br><br>

            <label for="budgetExternal">Budget External</label>
            <input type="number" id="budgetExternal" name="budgetExternal"><br><br>

            <label for="approvedBudgetMAD">Approved Budget MAD</label>
            <input type="number" id="approvedBudgetMAD" name="approvedBudgetMAD"><br><br>

            <label for="finalBudgetF3">Final Budget F3</label>
            <input type="number" id="finalBudgetF3" name="finalBudgetF3"><br><br>

            <label for="subtotalEUR">Subtotal EUR</label>
            <input type="number" id="subtotalEUR" name="subtotalEUR"><br><br>

            <label for="reservedBudget">Reserved Budget</label>
            <input type="number" id="reservedBudget" name="reservedBudget"><br><br>

            <label for="bcInitiated">BC Initiated</label>
            <input type="number" id="bcInitiated" name="bcInitiated"><br><br>

            <label for="bcCommitted">BC Committed</label>
            <input type="number" id="bcCommitted" name="bcCommitted"><br><br>

            <label for="bcRealized">BC Realized</label>
            <input type="number" id="bcRealized" name="bcRealized"><br><br>

            <label for="remainingBudget">Remaining Budget</label>
            <input type="number" id="remainingBudget" name="remainingBudget"><br><br>

            <label for="percentRemainingBudget">Percent Remaining Budget</label>
            <input type="number" id="percentRemainingBudget" name="percentRemainingBudget"><br><br>

            <button class="btn btn-primary" type="submit">Sauver le budget</button>
        </form>
    </div>
</body>
</html>