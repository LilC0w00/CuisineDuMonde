<?php

// Autoriser les requêtes CORS
header("Access-Control-Allow-Origin: *");  // Autoriser toutes les origines
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  // Méthodes autorisées
header("Access-Control-Allow-Headers: Content-Type, Authorization");  // En-têtes autorisés

// Si c'est une requête OPTIONS, on répond simplement avec un statut 200
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
  http_response_code(200);
  exit;
}
// Étape 1 : Connexion à la base de données

ini_set('display_errors', 1);
error_reporting(E_ALL);

try {
  $pdo = new PDO("mysql:host=localhost;dbname=cuisine_du_monde;charset=utf8", "root", "");
} catch (PDOException $e) {
  die("Erreur de connexion : " . $e->getMessage());
}

// Étape 2 : Récupération des données du formulaire (méthode POST)
$nom = $_POST['nom'] ?? '';
$email = $_POST['email'] ?? '';
$tel = $_POST['tel'] ?? '';
$heure = $_POST['heure'] ?? '00:00';
$theme = $_POST['theme'] ?? '';
$date = $_POST['date'] ?? '2025-01-01';
$nb_personnes = $_POST['nb_personnes'] ?? 1;

if (empty($heure)) {
  $heure = '00:00'; // Assigner une valeur par défaut si vide
}

if (empty($date)) {
  $date = '2025-01-01'; // Valeur par défaut si vide
}

// Étape 3 : Préparation et exécution de la requête SQL
$sql = "INSERT INTO reservations (nom, email, tel, heure, theme, date, nb_personnes)
        VALUES (?, ?, ?, ?, ?, ?, ?)";
$stmt = $pdo->prepare($sql);
$stmt->execute([$nom, $email, $tel, $heure, $theme, $date, $nb_personnes]);

// Étape 4 : Réponse vers le front (facultative mais utile)
echo "Réservation enregistrée avec succès.";
