<?php
session_start();

$pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde", "root", "");

// Sécurité à améliorer, mais on reste simple pour l’instant
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
$stmt->execute([$_POST['email']]);
$user = $stmt->fetch();

if ($user && password_verify($_POST['password'], $user['password'])) {
  $_SESSION['admin'] = $user['email'];
  header("Location: admin.php");
  exit();
} else {
  echo "Identifiants incorrects";
}
// Pour aider au debug :
var_dump($_POST);
