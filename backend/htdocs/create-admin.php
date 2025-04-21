<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

session_start();
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  // Connexion à la base de données
  $pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde", "root", "");

  // Récupère les valeurs du formulaire
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT);  // Hash du mot de passe

  // Vérifie si l'email existe déjà
  $stmt = $pdo->prepare("SELECT * FROM utilisateurs WHERE email = ?");
  $stmt->execute([$email]);
  $user = $stmt->fetch();

  if ($user) {
    echo "Cet email est déjà utilisé.";
  } else {
    // Insérer l'utilisateur dans la base de données
    $stmt = $pdo->prepare("INSERT INTO utilisateurs (email, password) VALUES (?, ?)");
    $stmt->execute([$email, $password]);
    echo "Utilisateur créé avec succès !";
  }
}
?>

<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <title>Créer un utilisateur admin</title>

  <link rel="stylesheet" href="../../frontend/css/logcrea.css">

</head>

<body id="createadmin">
  <h1>Créer un utilisateur admin</h1>
  <form method="POST">
    <input type="email" name="email" placeholder="Email" required><br>
    <input type="password" name="password" placeholder="Mot de passe" required><br>
    <button type="submit">Créer l'admin</button>

  </form>
  <a href="admin-login.html">
    <button id="button-connect">Vous connectez</button>
  </a>
</body>

</html>