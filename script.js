// Datasets
const zetelData = {
    tk2023: [
        { naam: "PVV", zetels: 37, kleur: "#1E90FF"},
        { naam: "GroenLinks/PvdA", zetels: 25, kleur: "#ff0000"},
        { naam: "VVD", zetels: 24, kleur: "#ff6400"},
        { naam: "NSC", zetels: 20, kleur: "#143272"},
        { naam: "CDA", zetels: 5, kleur: "#2cc84d"},
        { naam: "D66", zetels: 9, kleur: "#00ae41"},
        { naam: "JA21", zetels: 1, kleur: "#242b57"},
        { naam: "SP", zetels: 5, kleur: "#ec1b23"},
        { naam: "FVD", zetels: 3, kleur: "#84171a"},
        { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
        { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
        { naam: "DENK", zetels: 3, kleur: "#00b7b3"},
        { naam: "Volt", zetels: 2, kleur: "#502378"},
        { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
        { naam: "BBB", zetels: 7, kleur: "#93c01f"},
    ],

    peilingMDH_Juni: [
        { naam: "PVV", zetels: 30, kleur: "#1E90FF"},
        { naam: "GroenLinks/PvdA", zetels: 29, kleur: "#ff0000"},
        { naam: "VVD", zetels: 22, kleur: "#ff6400"},
        { naam: "NSC", zetels: 0, kleur: "#143272"},
        { naam: "CDA", zetels: 21, kleur: "#2cc84d"},
        { naam: "D66", zetels: 8, kleur: "#00ae41"},
        { naam: "JA21", zetels: 8, kleur: "#242b57"},
        { naam: "SP", zetels: 7, kleur: "#ec1b23"},
        { naam: "FVD", zetels: 4, kleur: "#84171a"},
        { naam: "PvdDieren", zetels: 4, kleur: "#00621e"},
        { naam: "SGP", zetels: 4, kleur: "#e95d0f"},
        { naam: "DENK", zetels: 4, kleur: "#00b7b3"},
        { naam: "Volt", zetels: 3, kleur: "#502378"},
        { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
        { naam: "BBB", zetels: 3, kleur: "#93c01f"},
    ],

    eigenVerdeling: [
        { naam: "PVV", zetels: 37, kleur: "#1E90FF"},
        { naam: "GroenLinks/PvdA", zetels: 25, kleur: "#ff0000"},
        { naam: "VVD", zetels: 24, kleur: "#ff6400"},
        { naam: "NSC", zetels: 20, kleur: "#143272"},
        { naam: "CDA", zetels: 5, kleur: "#2cc84d"},
        { naam: "D66", zetels: 9, kleur: "#00ae41"},
        { naam: "JA21", zetels: 1, kleur: "#242b57"},
        { naam: "SP", zetels: 5, kleur: "#ec1b23"},
        { naam: "FVD", zetels: 3, kleur: "#84171a"},
        { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
        { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
        { naam: "DENK", zetels: 3, kleur: "#00b7b3"},
        { naam: "Volt", zetels: 2, kleur: "#502378"},
        { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
        { naam: "BBB", zetels: 7, kleur: "#93c01f"},
    ],
};


// Variables
let partijen = zetelData.tk2023;
let gekozenPartijen = [];

const meerderheid = 76;
const container = document.getElementById("partijenContainer");
const zetelTeller = document.getElementById("zetelTeller");
const statusLabel = document.getElementById("statusLabel");
const datasetSelect = document.getElementById("zetelDataset");
const resetBtn = document.getElementById("resetBtn");
const eigenVerdelingSelectie = document.getElementById("eigenVerdelingSelectie");

// Functions
function laadPartijen() {
  container.innerHTML = "";
  const bewerkContainer = document.getElementById("bewerk-container");
  bewerkContainer.innerHTML = "";

  gekozenPartijen = [];

  partijen.forEach(partij => {
    // Zetelknop
    const div = document.createElement("div");
    div.classList.add("partij");
    div.textContent = `${partij.naam} (${partij.zetels})`;
    div.addEventListener("click", () => togglePartij(partij, div));
    container.appendChild(div);

    // Invoer velden
    const wrapper = document.createElement("div");
    wrapper.classList.add("bewerk-item");
    wrapper.innerHTML = `
      <div><strong>${partij.naam}</strong></div>
      <label>Zetels: <input type="number" min="0" value="${partij.zetels}" data-partij="${partij.naam}"></label>
    `;

    bewerkContainer.appendChild(wrapper);
  });

  if (datasetSelect.value === "eigenVerdeling") {
    eigenVerdelingSelectie.style.display = "block";
  } else {
    eigenVerdelingSelectie.style.display = "none";
  }

  updateZetels();
}

document.getElementById("opslaanZetels").addEventListener("click", () => {
  const inputs = document.querySelectorAll('#bewerk-container input');

  inputs.forEach(input => {
    const partijNaam = input.dataset.partij;
    const nieuweWaarde = parseInt(input.value);

    const partij = partijen.find(p => p.naam === partijNaam);
    if (partij && !isNaN(nieuweWaarde)) {
      partij.zetels = nieuweWaarde;
    }
  });

  updateZetels(); // UI herladen'

  const canvas = document.getElementById("kamerCanvas");
  const link = document.createElement("a");
  link.download = "zetelverdeling.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
});


// Als gebruiker andere dataset kiest
datasetSelect.addEventListener("change", () => {
  const gekozen = datasetSelect.value;
  partijen = zetelData[gekozen].map(p => ({ ...p})); // veilige deep copy
  laadPartijen();

  if (gekozen === "eigenVerdeling") {
    eigenVerdelingSelectie.style.display = "block";
  } else {
    eigenVerdelingSelectie.style.display = "none";
  }
});

// Resetknop geklikt
resetBtn.addEventListener("click", () => {
  gekozenPartijen = [];

  // Verwijder selectie uit UI
  document.querySelectorAll(".partij").forEach(div => {
    div.classList.remove("selected");
  });

  updateZetels();
});

// Partij knop gedrukt
function togglePartij(partij, element) {
    const index = gekozenPartijen.indexOf(partij);
    if (index === -1) {
        gekozenPartijen.push(partij);
        element.classList.add("selected"); //add selected-css layout
    } else {
        gekozenPartijen.splice(index, 1);
        element.classList.remove("selected");
    }
    updateZetels();
}

// Zetels tellen en meerderheid checken
function updateZetels() {
    const totaal = gekozenPartijen.reduce((sum, partij) => sum + partij.zetels, 0);
    zetelTeller.textContent = totaal;
    if (totaal >= meerderheid) {
        statusLabel.textContent = "Meerderheid!";
        statusLabel.className = "meerderheid";
    } else {
        statusLabel.textContent = "Geen meerderheid"
        statusLabel.className = "geen-meerderheid";
    }

    tekenKamer();
}

// Kamer tekenen
function tekenKamer() {
    const canvas = document.getElementById("kamerCanvas");
    const ctx = canvas.getContext("2d");
    const totaalZetels = gekozenPartijen.reduce((sum, partij) => sum + partij.zetels, 0);
    const straal = 200;
    const middenX = canvas.width / 2;
    const middenY = canvas.height;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    let huidigeHoek = Math.PI;
    const hoekPerZetel = Math.PI / 150; // max 150 zetels (ruimte verdeling)

    // Teken geselecteerde partijen in volgorde van klik
    gekozenPartijen.forEach(partij => {
        for (let i = 0; i < partij.zetels; i++) {
            const startHoek = huidigeHoek;
            const eindHoek = huidigeHoek + hoekPerZetel;

            ctx.beginPath();
            ctx.moveTo(middenX, middenY);
            ctx.arc(middenX, middenY, straal, startHoek, eindHoek);
            ctx.closePath();
            ctx.fillStyle = partij.kleur;
            ctx.fill();

            huidigeHoek = eindHoek;
        }
    });

    // Teken lege zetels tot aan 150
    const resterend = 150 - totaalZetels;
    for (let i = 0; i < resterend; i++) {
        const startHoek = huidigeHoek;
        const eindHoek = huidigeHoek + hoekPerZetel;

        ctx.beginPath();
        ctx.moveTo(middenX, middenY);
        ctx.arc(middenX, middenY, straal, startHoek, eindHoek);
        ctx.closePath();
        ctx.fillStyle = "#ddd";
        ctx.fill();

        huidigeHoek = eindHoek;
    }
}

// Door gebruiker aangepaste verdeling
document.getElementById("gebruikAangepasteVerdeling").addEventListener("click", () => {
  const inputs = document.querySelectorAll('#bewerk-container input');

  // Zetels bijwerken
  inputs.forEach(input => {
    const partijNaam = input.dataset.partij;
    const nieuweWaarde = parseInt(input.value);
    const partij = partijen.find(p => p.naam === partijNaam);
    if (partij && !isNaN(nieuweWaarde)) {
      partij.zetels = nieuweWaarde;
    }
  });

  // Reset selectie (want zetels kunnen gewijzigd zijn)
  gekozenPartijen = [];

  // UI updaten (zetelblokken opnieuw tekenen met nieuwe aantallen)
  laadPartijen();
});


laadPartijen();