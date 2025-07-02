// Variabelen
const container = document.getElementById("partijenContainer");
const zetelTeller = document.getElementById("zetelTeller");
const statusLabel = document.getElementById("statusLabel");
const datasetSelect = document.getElementById("zetelDataset");
const eigenVerdelingSelectie = document.getElementById("eigenVerdelingSelectie");


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

  tekenVergelijkingChart();
  updateZetels();
}


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


let vergelijkingChart = null;

function tekenVergelijkingChart() {
  const gekozen = datasetSelect.value;
  if (gekozen === "eigenVerdeling") return; // Geen vergelijking mogelijk

  const huidige = zetelData.tk2023;
  const peiling = zetelData[gekozen];

  const partijenNamen = huidige.map(p => p.naam);
  const kleuren = huidige.map(p => p.kleur);
  const huidigeZetels = partijenNamen.map(naam => {
    const partij = huidige.find(p => p.naam === naam);
    return partij ? partij.zetels : 0;
  });

  const peilingZetels = partijenNamen.map(naam => {
    const partij = peiling.find(p => p.naam === naam);
    return partij ? partij.zetels : 0;
  });

  const ctx = document.getElementById("vergelijkingChart").getContext("2d");

  if (vergelijkingChart) vergelijkingChart.destroy(); // voorkom dubbele charts

  vergelijkingChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: partijenNamen,
      datasets: [
        {
          label: 'Uitslag TK 2023',
          data: huidigeZetels,
          backgroundColor: kleuren,
        },
        {
          label: `Peiling (${gekozen})`,
          data: peilingZetels,
          backgroundColor: kleuren.map(k => k + "66"), // transparanter
        }
      ]
    },
    options: {
      responsive: false,
      plugins: {
        legend: { position: 'top' },
        title: {
          display: true,
          text: 'Vergelijking tussen uitslag en peiling'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 50
        }
      }
    }
  });
}


document.getElementById("opslaanZetels").addEventListener("click", downloadMetLegenda);

function downloadMetLegenda() {
  const sourceCanvas = document.getElementById("kamerCanvas");
  const legendPadding = 20;
  const lineHeight = 20;
  const legendWidth = 230;
  const legendHeight = legendPadding + (gekozenPartijen.length + 2) * lineHeight;

  //Breder en indien nodig hoger canvas maken
  const outCanvas = document.createElement("canvas");
  outCanvas.width = sourceCanvas.width + legendWidth;
  outCanvas.height = Math.max(sourceCanvas.height, legendHeight);
  const ctxOut = outCanvas.getContext("2d");

  // Witte achtergrond
  ctxOut.fillStyle = "#fff";
  ctxOut.fillRect(0,0, outCanvas.width, outCanvas.height);

  // Halve cirkel
  ctxOut.drawImage(sourceCanvas, 0, 0);

  // Legenda
  ctxOut.font = "15px sans-serif";
  ctxOut.fillStyle = "#000";
  ctxOut.fillText("Legenda", sourceCanvas.width + 10, legendPadding);

  gekozenPartijen.forEach((partij, i) => {
    const y = legendPadding + (i + 2) * lineHeight;

    ctxOut.fillStyle = partij.kleur;
    ctxOut.fillRect(sourceCanvas.width + 10, y - 12, 14, 14);

    ctxOut.fillStyle = "#000";
    ctxOut.fillText(`${partij.naam} (${partij.zetels})`, sourceCanvas.width + 30, y);

  });

  const link = document.createElement("a");
  link.download = "zetelverdeling.png"
  link.href = outCanvas.toDataURL("image/png");
  link.click();
}