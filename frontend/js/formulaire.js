document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".reserve-btn button");

  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault(); // ⛔ Empêche la soumission du formulaire

      const theme = document.querySelector("#theme").value;
      const date = document.querySelector("#date").value || "2025-01-01";
      const nbPersonnes = document.querySelector("#persons-input").value || 1;

      localStorage.setItem("theme", theme);
      localStorage.setItem("date", date);
      localStorage.setItem("nbPersonnes", nbPersonnes);

      // ✅ Redirection manuelle
      window.location.href = "/frontend/pages/reserv-finale.html";
    });
  }

  // --- Affichage récap (sur page finale)
  const theme = localStorage.getItem("theme");
  const date = localStorage.getItem("date");
  const nbPersonnes = localStorage.getItem("nbPersonnes");

  if (theme && date && nbPersonnes) {
    const elTheme = document.querySelector("#theme-selectionne");
    const elDate = document.querySelector("#date-selectionnee");
    const elNb = document.querySelector("#nb-personnes");

    if (elTheme) elTheme.textContent = `${theme}`;
    if (elDate) elDate.textContent = `${date}`;
    if (elNb) elNb.textContent = `${nbPersonnes} personnes`;
  } else {
    const recap = document.querySelector("#recap-reservation");
    if (recap) {
      recap.textContent = "Aucune réservation trouvée.";
    }
  }
});
