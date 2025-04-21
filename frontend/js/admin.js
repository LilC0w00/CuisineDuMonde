function showSection(id) {
  document
    .querySelectorAll(".admin-section")
    .forEach((sec) => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

const searchInput = document.querySelector("#search");

if (searchInput) {
  searchInput.addEventListener("input", function () {
    const value = this.value.toLowerCase();
    document.querySelectorAll("table tr").forEach((row, index) => {
      if (index === 0) return; // ignorer l'entête
      const text = row.innerText.toLowerCase();
      row.style.display = text.includes(value) ? "" : "none";
    });
  });
}
