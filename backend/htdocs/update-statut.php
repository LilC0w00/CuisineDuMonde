<?php
$pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde", "root", "");
$stmt = $pdo->prepare("UPDATE reservations SET statut = ? WHERE id = ?");
$stmt->execute([$_POST['statut'], $_POST['id']]);
header("Location: reservations.php");
exit();
