<div id="budgets" class="container-fluid bg-fooF" style="color:rgb(253, 253, 253); background-color: black;">
    <div class="row">
        <div class="col-sm-12" style="color : white">
            <h2>BUDGETS</h2><br>
            <h3>Visualiser les budgets</h3><br>
        </div>
        <!--BOUTON POUR DÉROULER LE TABLEAU CONTENANT LES IMAGES DES budgetS, LEUR PRIX, LEURS DÉTAILS ET SPÉCIFICITÉS, ET UN BOUTON D AJOUT AU PANIER -->
        <div class="col-sm-4">
            <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal" onclick="budgetChilds()">VOIR LES BUDGETS</button>
            <!-- Modal -->
            <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title" id="myModalLabel"><strong>Budgets Enregistrés</strong></h1>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body" id="budgetsContainer">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>