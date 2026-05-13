let lijnGrafiekUitslagen = null;

function tekenLijnGrafiekUitslagen() {
    const canvas = document.getElementById("lijnGrafiekUitslagen");
    
    const uitslagen = Object.keys(zetelData)
        .filter(k => zetelData[k].meta && zetelData[k].meta.type === "Verkiezingsuitslag")
        .map(k => ({
            datum: zetelData[k].meta.datum,
            data: zetelData[k].data
        }));

    uitslagen.sort((a, b) => new Date(a.datum) - new Date(b.datum));

    const allePartijen = Array.from(
        new Set(uitslagen.flatMap(v => v.data.map(p => p.naam)))
    );

    const labels = uitslagen.map(v => v.datum);
    
    const datasets = allePartijen.map(naam => {
        const kleur = uitslagen
            .map(v => v.data.find(p => p.naam === naam)?.kleur)
            .find(k => k);
        
        const zetelwaarden = uitslagen.map(v => {
            const partijData = v.data.find(p => p.naam === naam);
            return partijData ? partijData.zetels : 0;
        });

        return {
            label: naam,
            data: zetelwaarden,
            borderColor: kleur || "#999",
            backgroundColor: kleur ? kleur + "55" : "#99999955",
            tension: 0.3,
            pointRadius: 4,
            pointHoverRadius: 7,
        };
    });

    if (lijnGrafiekUitslagen) lijnGrafiekUitslagen.destroy();

    const isSmallScreen = window.innerWidth < 780;

    lijnGrafiekUitslagen = new Chart(canvas, {
        type: "line",
        data: {
            labels: labels,
            datasets: datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: isSmallScreen ? "bottom" : "right",
                    labels: {
                        boxWidth: 20,
                        font: {
                            size: isSmallScreen ? 10 : 12,
                        }
                    }
                },
                title: {
                    display: true,
                    text: "Verkiezingsuitslagen per partij over de jaren",
                },
            },
            scales: {
                y: {
                    beginAtZero : true,
                    max: 55,
                    title: {
                        display: true,
                        text: "Aantal zetels",
                    },
                },
                x: {
                    title: {
                        display: true,
                        text: "Datum",
                    },
                },
            },
        },
    });
    
}

window.addEventListener("load", tekenLijnGrafiekUitslagen);
window.addEventListener("resize", tekenLijnGrafiekUitslagen);