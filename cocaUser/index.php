<?php
session_start();

function getBudgets() {
    $budgetsTabObject = [];
    try {
        $response = file_get_contents('http://localhost:5174/budget/readAll');
        $data = json_decode($response);
        $budgetsTabObject[] = $data;
        return $budgetsTabObject;
    } catch (Exception $error) {
        echo $error->getMessage();
    }
}

$budgetsTab = getBudgets();
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ECCBC USER</title>
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="./js/script.js"></script>
    <script src="./js/addChild.js"></script>
</head>
<body>
    <?php
        include './php/components/navbar.php';
        include './php/components/accueil.php';
        include './php/components/budgets.php';
        include './php/components/footer.php';
    ?>
</body>
<script>
    var tabOfTabs = <?php echo json_encode($budgetsTab); ?>;
    let budgetsTab = tabOfTabs[0];
    let tableauDesId = [];


</script>

</html>
