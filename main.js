// Variables (global)
let partijen = zetelData.tk2023;
let gekozenPartijen = [];

const meerderheid = 76;
const maxAantalZetels = 150;

document.addEventListener("DOMContentLoaded", () => {
  const datasetSelect = document.getElementById("zetelDataset");
  const resetBtn = document.getElementById("resetBtn");
  const eigenVerdelingSelectie = document.getElementById("eigenVerdelingSelectie");
  const opslaanBtn = document.getElementById("opslaanZetels");
  const gebruikAangepasteBtn = document.getElementById("gebruikAangepasteVerdeling");

  // Initialisatie
  laadPartijen();
  tekenVergelijkingChart();

  // Dataset selectie
  datasetSelect.addEventListener("change", () => {
    const gekozen = datasetSelect.value;
    partijen = zetelData[gekozen].map(p => ({ ...p }));
    laadPartijen();
    tekenVergelijkingChart();

    // Toon bewerk-interface bij eigen verdeling
    if (gekozen === "eigenVerdeling") {
      eigenVerdelingSelectie.style.display = "block";
    } else {
      eigenVerdelingSelectie.style.display = "none";
    }
  });

  // Reset-knop
  resetBtn.addEventListener("click", () => {
    gekozenPartijen = [];
    document.querySelectorAll(".partij").forEach(div => div.classList.remove("selected"));
    updateZetels();
  });

  // Opslaan met legenda
  opslaanBtn.addEventListener("click", downloadMetLegenda);

  // Eigen verdeling toepassen
  gebruikAangepasteBtn.addEventListener("click", () => {
    const inputs = document.querySelectorAll('#bewerk-container input');
    let totaal = 0;
    const nieuweVerdeling = [];

    inputs.forEach(input => {
      const partijNaam = input.dataset.partij;
      const waarde = parseInt(input.value, 10);

      if (!isNaN(waarde) && waarde >= 0) {
        totaal += waarde;
        nieuweVerdeling.push({ naam: partijNaam, zetels: waarde });
      }
    });

    if (totaal !== 150) {
      alert(`Het totaal aantal zetels moet 150 zijn. Je hebt nu ${totaal} zetels.`);
      return;
    }

    nieuweVerdeling.forEach(nieuw => {
      const partij = partijen.find(p => p.naam === nieuw.naam);
      if (partij) partij.zetels = nieuw.zetels;
    });

    gekozenPartijen = [];
    laadPartijen();
    tekenVergelijkingChart();
  });
});
