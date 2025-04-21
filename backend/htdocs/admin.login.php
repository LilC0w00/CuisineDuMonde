<?php
session_start();

$pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde", "root", "");

// Recherche utilisateur
$stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ? AND password = ?");
$stmt->execute([$_POST['email'], $_POST['password']]); // ⚠️ à sécuriser plus tard
$user = $stmt->fetch();

if ($user) {
  $_SESSION['admin'] = $user['email'];
  header("Location: admin-dashboard.php");
} else {
  echo "Identifiants incorrects";
}
