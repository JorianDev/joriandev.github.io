// Variables (global)
// let partijen = zetelData[kamerConfig.basisDataset].data.map(p => ({ ...p }));
let gekozenPartijen = [];

const meerderheid = kamerConfig.meerderheid;
const maxAantalZetels = kamerConfig.zetelAantal;

document.addEventListener("DOMContentLoaded", () => {
  const datasetSelect = document.getElementById("zetelDataset");
  const resetBtn = document.getElementById("resetBtn");
  // const eigenVerdelingSelectie = document.getElementById("eigenVerdelingSelectie");
  const opslaanBtn = document.getElementById("opslaanZetels");
  const gebruikAangepasteBtn = document.getElementById("gebruikAangepasteVerdeling");


  // Check localStorage
  const opgeslagenVerdeling = localStorage.getItem('eigenVerdeling');
  if (opgeslagenVerdeling) {
    try {
      const verdelingArray = JSON.parse(opgeslagenVerdeling);
      eigenPartijen = zetelData[kamerConfig.basisDataset].data.map(p => ({ ...p }));
      eigenPartijen.forEach(partij => {
        const opgeslagenPartij = verdelingArray.find(p => p.naam === partij.naam);
        if (opgeslagenPartij) {
          partij.zetels = opgeslagenPartij.zetels;
        }
      });
    } catch(e) {
      console.error("Fout bij laden opgeslagen verdeling:", e);
    }
  } 

  // Initialisatie
  laadPartijen();

  // Dataset selectie
  datasetSelect.addEventListener("change", laadPartijen);

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

    if (totaal !== kamerConfig.zetelAantal) {
      alert(`Het totaal aantal zetels moet ${kamerConfig.zetelAantal} zijn. Je hebt nu ${totaal} zetels.`);
      return;
    }

    eigenverdelingAangepast = true;
    const eigen = getEigenPartijen();
    nieuweVerdeling.forEach(nieuw => {
      const partij = eigen.find(p => p.naam === nieuw.naam);
      if (partij) partij.zetels = nieuw.zetels;
    });

    localStorage.setItem('eigenVerdeling', JSON.stringify(nieuweVerdeling));

    gekozenPartijen = [];
    laadPartijen();
  });
});
