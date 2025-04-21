document.querySelector("#form-reservation").addEventListener("submit", (e) => {
  e.preventDefault();

  // Récupérer les champs du formulaire
  const nom = document.querySelector("#nom").value;
  const email = document.querySelector("#email").value;
  const tel = document.querySelector("#tel").value;
  const heure = document.querySelector("#heure").value || "00/00";

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
  fetch("http://localhost/CuisineDuMonde/backend/htdocs/save_reservation.php", {
    method: "POST",
    body: formData,
  })
    .then((response) => response.text())
    .then((data) => {
      // Afficher message de confirmation
      const formContainer = document.querySelector("#form-container");
      formContainer.innerHTML = `
        <p>Merci pour votre réservation, ${nom} !</p>
      `;

      // Créer un bouton et l'ajouter au container
      const button = document.createElement("button");
      button.textContent = "Retour à l'accueil";
      button.addEventListener("click", () => {
        window.location.href = "../index.html";
      });

      formContainer.appendChild(button);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
