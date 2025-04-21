<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Connexion à la base de données
$pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde", "root", "");

// Nombre total de réservations
$total = $pdo->query("SELECT COUNT(*) FROM reservations")->fetchColumn();

// Nombre de réservations en attente
$attente = $pdo->query("SELECT COUNT(*) FROM reservations WHERE statut = 'en attente'")->fetchColumn();

// Récupération des réservations
$reservations = $pdo->query("SELECT * FROM reservations ORDER BY date DESC")->fetchAll();


?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Admin | CuisineDuMonde</title>

  <!-- CSS LINK -->
  <link rel="stylesheet" href="../../frontend/css/admin.css">
</head>

<body>
  <div class="admin-container">
    <!-- Sidebar -->
    <aside class="sidebar">
      <img src="" alt="">
      <h4>Admin</h4>
      <ul>
        <li><img src="" alt=""><a href="../../backend/htdocs/admin.php">Dashboard</a></li>
        <li><img src="" alt=""><a href="../../backend/htdocs/reservations.php">Réservations</a></li>
        <li><img src="" alt="">Planning</li>
        <li><img src="" alt="">Paramètres</li>
      </ul>

      <img src="" alt="">
    </aside>

    <!-- Main content -->
    <main class="main-content">
      <section id="dashboard" class="admin-section active">
        <h2>Dashboard</h2>
        <div>Total de réservations : <strong><?= $total ?></strong></div>
        <div>Réservations en attente : <strong><?= $attente ?></strong></div>
      </section>
    </main>
  </div>
  <script src="../../frontend/js/admin.js"></script>
</body>

</html>