<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Restaurante Gostosin</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css">
</head>
<body>
    <section class="sections">
        <section id="inicio">
            <?php include_once("layout/menu.html")?>
            <?php include_once("layout/banner.html")?>
        </section>
        <div class="clear"></div>
        <section id="cardapio">
            <?php include_once("layout/cardapio.html")?>
        </section>
        <section id="reserva">
            <?php include_once("layout/reserva.html")?>
        </section>
    </section>
    
    <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
    <script src="assets/js/open-mob.js"></script>
    <script src="assets/js/main.js"></script>
</body>
</html>