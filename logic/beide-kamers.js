const partijenContainer = document.getElementById("beideKamersPartijen");
const datasetKeuze = document.getElementById("beideKamersDataset");
const geselecteerdePartijen = new Set();
const zetelLimieten = {
  tweedeKamer: { totaal: 150, meerderheid: 76 },
  eersteKamer: { totaal: 75, meerderheid: 38 }
};

function haalZetelsOp(partijen, naam) {
  return partijen.find(partij => partij.naam === naam)?.zetels ?? 0;
}

function tekenKamer(canvasId, outputId, partijen, kamer) {
  const { totaal, meerderheid } = zetelLimieten[kamer];
  const aantal = partijen
    .filter(partij => geselecteerdePartijen.has(partij.naam))
    .reduce((som, partij) => som + partij.zetels, 0);
  const canvas = document.getElementById(canvasId);
  const context = canvas.getContext("2d");
  const middenX = canvas.width / 2;
  const middenY = canvas.height;
  const straal = canvas.height;
  let huidigeHoek = Math.PI;

  document.getElementById(outputId).textContent =
    `Geselecteerd: ${aantal} / ${totaal} zetels · meerderheid vanaf ${meerderheid}`;
  context.clearRect(0, 0, canvas.width, canvas.height);

  partijen.forEach(partij => {
    const zetels = geselecteerdePartijen.has(partij.naam) ? partij.zetels : 0;
    if (zetels === 0) return;

    const eindHoek = huidigeHoek + (Math.PI * zetels) / totaal;
    context.beginPath();
    context.moveTo(middenX, middenY);
    context.arc(middenX, middenY, straal, huidigeHoek, eindHoek);
    context.closePath();
    context.fillStyle = partij.kleur;
    context.fill();
    huidigeHoek = eindHoek;
  });

  if (aantal < totaal) {
    context.beginPath();
    context.moveTo(middenX, middenY);
    context.arc(middenX, middenY, straal, huidigeHoek, Math.PI * 2);
    context.closePath();
    context.fillStyle = "#ddd";
    context.fill();
  }
}

function updateKamers(partijen) {
  tekenKamer("tweedeKamerCanvas", "tweedeKamerTotaal", partijen.tweedeKamer, "tweedeKamer");
  tekenKamer("eersteKamerCanvas", "eersteKamerTotaal", partijen.eersteKamer, "eersteKamer");
}

function laadVerdeling() {
  const partijen = beideKamersData[datasetKeuze.value];
  const tweedeKamerPartijen = new Map(partijen.tweedeKamer.map(partij => [partij.naam, partij]));
  const eersteKamerPartijen = new Map(partijen.eersteKamer.map(partij => [partij.naam, partij]));
  const namen = [...new Set([...tweedeKamerPartijen.keys(), ...eersteKamerPartijen.keys()])];

  geselecteerdePartijen.clear();
  partijenContainer.replaceChildren();

  namen.forEach(naam => {
    const knop = document.createElement("button");
    knop.type = "button";
    knop.className = "partij";
    knop.textContent = `${naam} (${haalZetelsOp(partijen.tweedeKamer, naam)} / ${haalZetelsOp(partijen.eersteKamer, naam)})`;
    knop.setAttribute("aria-pressed", "false");
    knop.addEventListener("click", () => {
      if (geselecteerdePartijen.has(naam)) {
        geselecteerdePartijen.delete(naam);
        knop.classList.remove("selected");
        knop.setAttribute("aria-pressed", "false");
      } else {
        geselecteerdePartijen.add(naam);
        knop.classList.add("selected");
        knop.setAttribute("aria-pressed", "true");
      }
      updateKamers(partijen);
    });
    partijenContainer.appendChild(knop);
  });

  updateKamers(partijen);
}

datasetKeuze.addEventListener("change", laadVerdeling);
laadVerdeling();
