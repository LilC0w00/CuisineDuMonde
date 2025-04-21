document.querySelector("#form-reservation").addEventListener("submit", (e) => {
  e.preventDefault();

  // Récupérer les champs du formulaire
  const nom = document.querySelector("#nom").value;
  const email = document.querySelector("#email").value;
  const tel = document.querySelector("#tel").value;
  const heure = document.querySelector("#heure").value;

  // Récupérer les infos précédentes
  const theme = localStorage.getItem("theme");
  const date = localStorage.getItem("date");
  const nbPersonnes = localStorage.getItem("nbPersonnes");

  // Préparer les données à envoyer
  const formData = new FormData();
  formData.append("nom", nom);
  formData.append("email", email);
  formData.append("tel", tel);
  formData.append("heure", heure);
  formData.append("theme", theme);
  formData.append("date", date);
  formData.append("nb_personnes", nbPersonnes);

  // Envoi vers le fichier PHP
  fetch("backend/htdocs/save_reservation.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Afficher message de confirmation
      document.querySelector("#form-container").innerHTML = `
          <p>Merci pour votre réservation, ${nom} !</p>
          <button onclick="window.location.href='index.html'">Retour à l'accueil</button>
        `;
    });
});
