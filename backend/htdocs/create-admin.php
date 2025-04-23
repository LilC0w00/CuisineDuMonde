<?php
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

<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Créer un compte</title>

  <link rel="stylesheet" href="../../frontend/css/logcrea.css">
</head>

<body>
  <h2>Créer un compte formateur</h2>
  <form method="POST">
    <input type="email" name="email" placeholder="Email" required />
    <input type="password" name="password" placeholder="Mot de passe" required />
    <button type="submit">S'inscrire</button>
  </form>
</body>

</html>