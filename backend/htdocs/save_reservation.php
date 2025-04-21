<?php
// Étape 1 : Connexion à la base de données
try {
  $pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde;charset=utf8", "root", "");
} catch (PDOException $e) {
  die("Erreur de connexion : " . $e->getMessage());
}

// Étape 2 : Récupération des données du formulaire (méthode POST)
$nom = $_POST['nom'] ?? '';
$email = $_POST['email'] ?? '';
$tel = $_POST['tel'] ?? '';
$heure = $_POST['heure'] ?? '';
$theme = $_POST['theme'] ?? '';
$date = $_POST['date'] ?? '';
$nb_personnes = $_POST['nb_personnes'] ?? '';

// Étape 3 : Préparation et exécution de la requête SQL
$sql = "INSERT INTO reservations (nom, email, tel, heure, theme, date, nb_personnes)
        VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$nom, $email, $tel, $heure, $theme, $date, $nb_personnes]);

// Étape 4 : Réponse vers le front (facultative mais utile)
echo "Réservation enregistrée avec succès.";
