
<?php
if (isset($_POST['submitBtn'])) {
    // Form field names and labels
    $formFields = array(
        "projectCode" => "Code Projet",
        "department" => "Département",
        "category" => "Catégorie",
        "type" => "Type",
        "cerCode" => "CER Code",
        "post" => "Post",
        "group" => "Group",
        "description" => "Description",
        "cognosCode" => "Cognos Code",
        "direction" => "Direction",
        "quantity" => "Quantity",
        "unitPrice" => "Unit Price",
        "currency" => "Currency",
        "budgetV0" => "Budget V0",
        "budgetV1" => "Budget V1",
        "approvedRate" => "Approved Rate",
        "freezeNabc" => "Freeze Nabc",
        "blocking" => "Blocking",
        "unblocking" => "Unblocking",
        "additionalBudget" => "Additional Budget",
        "budgetExternal" => "Budget External",
        "approvedBudgetMAD" => "Approved Budget MAD",
        "finalBudgetF3" => "Final Budget F3",
        "subtotalEUR" => "Subtotal EUR",
        "reservedBudget" => "Reserved Budget",
        "bcInitiated" => "BC Initiated",
        "bcCommitted" => "BC Committed",
        "bcRealized" => "BC Realized",
        "remainingBudget" => "Remaining Budget",
        "percentRemainingBudget" => "Percent Remaining Budget"
    );

    // Prepare data for the table
    $tableData = array();
    foreach ($formFields as $field => $label) {
        $tableData[] = array(
            "Field" => $label,
            "Value" => $_POST[$field]
        );
    }
    $apiResponse = file_get_contents('http://localhost:5174/budget/create', false, stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-type: application/json",
            'content' => json_encode($tableData)
        ]
    ]));
    

}
?>

<div id="create" class="container-fluid bg-fooF" style="color:rgb(253, 253, 253); background-color: rgb(144,0,0);" >
    <div class="row">
        <div class="col-sm-12" style="color : white">
            <h2>ENTRÉE DE BUDGET</h2><br>
            <h3>Créez une nouvelle entrée de budget</h3><br>
        </div>
        <!--BOUTON POUR DÉROULER LE TABLEAU CONTENANT LES IMAGES DES budgetS, LEUR PRIX, LEURS DÉTAILS ET SPÉCIFICITÉS, ET UN BOUTON D AJOUT AU PANIER -->
        <div class="col-sm-4">
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModalCreate" onclick="budgetCreatorChilds()">CRÉER UN BUDGET</button>
            <!-- Modal -->
            <div class="modal fade" id="myModalCreate" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="myModalLabel"><strong>Nouveau budget</strong></h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" id="budgetsCreatorContainer" style='color: black'>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>