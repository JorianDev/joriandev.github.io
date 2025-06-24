const partijen23 = [
    { naam: "PVV", zetels: 37},
    { naam: "GroenLinks/PvdA", zetels: 25},
    { naam: "VVD", zetels: 24},
    { naam: "NSC", zetels: 20},
    { naam: "CDA", zetels: 5},
    { naam: "D66", zetels: 9},
    { naam: "JA21", zetels: 1},
    { naam: "SP", zetels: 5},
    { naam: "FVD", zetels: 3},
    { naam: "PvdDieren", zetels: 3},
    { naam: "SGP", zetels: 3},
    { naam: "DENK", zetels: 3},
    { naam: "Volt", zetels: 2},
    { naam: "ChristenUnie", zetels: 3},
    { naam: "BBB", zetels: 7},
];

const meerderheid = 76;
let gekozenPartijen = [];

const container = document.getElementById("partijenContainer");
const zetelTeller = document.getElementById("zetelTeller");
const statusLabel = document.getElementById("statusLabel");

partijen23.forEach(partij => {
    const div = document.createElement("div");
    div.classList.add("partij");
    div.textContent = `${partij.naam} (${partij.zetels})`;
    div.addEventListener("click", () => togglePartij(partij, div));
    container.appendChild(div);
});

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
}