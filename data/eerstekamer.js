const kamerConfig = {
    zetelAantal: 75,
    meerderheid: 38,
    basisDataset: "currentSituation"
}

const zetelData = {
    currentSituation: {
        meta: {
            bron: "Kiesraad",
            datum: "2026-10-03",
            type: "Huidig"
        },

        data: [
            { naam: "GroenLinks/PvdA", zetels: 14, kleur: "#ff0000"},
            { naam: "BBB", zetels: 11, kleur: "#93c01f"},
            { naam: "VVD", zetels: 9, kleur: "#ff6400"},
            { naam: "D66", zetels: 7, kleur: "#00ae41"},
            { naam: "CDA", zetels: 6, kleur: "#2cc84d"},
            { naam: "PVV", zetels: 4, kleur: "#1E90FF"},
            { naam: "SP", zetels: 3, kleur: "#ec1b23"},
            { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
            { naam: "FVD", zetels: 3, kleur: "#84171a"},
            { naam: "JA21", zetels: 2, kleur: "#242b57"},
            { naam: "PvdDieren", zetels: 2, kleur: "#00621e"},
            { naam: "SGP", zetels: 2, kleur: "#e95d0f"},
            { naam: "Volt", zetels: 2, kleur: "#502378"},
            { naam: "OPNL", zetels: 1, kleur: "#00b7b3"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
            { naam: "Fractie-Beukering", zetels: 1, kleur: "#721fc0ff"},
            { naam: "Fractie-Van Gasteren", zetels: 1, kleur: "#721fc0ff"},
            { naam: "Fractie-Van de Sanden (EK)", zetels: 1, kleur: "#721fc0ff"},
            { naam: "Fractie-Visseren-Hamakers", zetels: 1, kleur: "#721fc0ff"},
            { naam: "Fractie-Walenkamp", zetels: 1, kleur: "#721fc0ff"},
        ]
    },

    ek2023: {
        meta: {
            bron: "Kiesraad",
            datum: "2023-05-30",
            type: "Verkiezingsuitslag"
        },

        data: [
            { naam: "GroenLinks/PvdA", zetels: 14, kleur: "#ff0000"},
            { naam: "BBB", zetels: 16, kleur: "#93c01f"},
            { naam: "VVD", zetels: 10, kleur: "#ff6400"},
            { naam: "D66", zetels: 5, kleur: "#00ae41"},
            { naam: "CDA", zetels: 6, kleur: "#2cc84d"},
            { naam: "PVV", zetels: 4, kleur: "#1E90FF"},
            { naam: "SP", zetels: 3, kleur: "#ec1b23"},
            { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
            { naam: "FVD", zetels: 2, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
            { naam: "JA21", zetels: 3, kleur: "#242b57"},
            { naam: "SGP", zetels: 2, kleur: "#e95d0f"},
            { naam: "Volt", zetels: 2, kleur: "#502378"},
            { naam: "OPNL", zetels: 1, kleur: "#00b7b3"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
        ]
    },
}

const hoppers = [
    { naam: "Eric Kemperman", van: "BBB", naar: "eigen fractie, daarna FVD", datum: "19/20 mei 2025; FVD 9 september 2025", reden: "Herkende zich niet meer in inhoudelijke keuzes BBB op gebied van oorlog en vrede, coronabeleid, vrijheiden, natuur en landbouw, wooncrisis" },
    { naam: "Robert Croll", van: "BBB", naar: "D66", datum: "3 juni 2025", reden: "Kritiek op BBB-standpunt over Israël en Gaza" },
    { naam: "Cees van de Sanden", van: "VVD", naar: "eigen fractie", datum: "8 oktober 2025", reden: "Onvrede over koers van de partij" },
    { naam: "Ingrid Visseren-Hamakers", van: "PvdD", naar: "eigen fractie", datum: "7 november 2025", reden: "Onenigheid over koers van de partij, liep uit op conflict over lidmaatschap van Niko Koffeman" },
    { naam: "Arie Griffioen", van: "BBB", naar: "D66", datum: "28 november 2025", reden: "Vond BBB te rechts, onder meer op migratie" },
    { naam: "Robert van Gasteren", van: "BBB", naar: "eigen fractie", datum: "31 maart / 1 april 2026", reden: "Zegde BBB-lidmaatschap op uit onvrede over gebrek aan duidelijke koers. BBB zette hem uit de fractie en vroeg zetel terug, wat hij weigerde" }
]

const vertrokken = [
    { naam: "Jan Klopman", van: "BBB" , datum: "5 juli 2023", reden: "Nieuwe functie als Gedeupteerde Staten Flevoland" },
    { naam: "Diederik van Dijk (SGP) en Marjolein Faber (PVV)", van: "SGP & PVV", datum: "6 december 2023", reden: "Ze werden lid van de Tweede Kamer wat onverenigbaar is met senaatlidmaatschap" },
    { naam: "Pim Walenkamp", van: "BBB", datum: "1 februari 2024", reden: "Drukte en verminderde gezondheid. Keerde 23 sept 2025 terug, maar BBB liet hem niet toe en hij werd een eenmansfractie" },
    { naam: "Tiny Kox", van: "SP", datum: "13 februari 2024", reden: "Voorzitterschap van Parlementaire Assemblee van de Raad van Europa was afgelopen en hij vond het een goed moment om te stoppen" },
    { naam: "Caspar van den Berg", van: "VVD", datum: "10 september 2024", reden: "Senaatswerk lastig te combineren met zijn hoofdfunctie als voorzitter van Universiteiten van Nederland" },
    { naam: "Edith Schippers", van: "VVD", datum: "14 januari 2025", reden: "Werd CEO bij Mosadex en kon dat niet combineren met Kamerlidmaatschap" },
    { naam: "Paulien Geerdink", van: "VVD", datum: "1 juli 2025", reden: "Werd algemeen directeur van de Nederlandse Orde van Belastingadviseurs" },
    { naam: "Jan Anthonie Bruijn", van: "VVD", datum: "5 september 2025", reden: "Werd minister van VWS in kabinet-Schoof" },
    { naam: "Eugène Heijnen", van: "BBB", datum: "5 september 2025", reden: "Werd staatssecretaris voor Fiscaliteit, Belastingdienst en Douane bij kabinet-Schoof" },
    { naam: "Annabel Nanninga", van: "JA21", datum: "12 november 2025", reden: "Werd Tweede Kamerlid" },
    { naam: "Fatimazhra Belhirch", van: "D66", datum: "12 november 2025", reden: "Werd Tweede Kamerlid" },
    { naam: "Willemijn Aerdts", van: "D66", datum: "23 februari 2026", reden: "Werd staatssecretaris van Economische Zaken in kabinet-Jetten" },
    { naam: "Greet Prins", van: "CDA", datum: "24 februari 2026", reden: "Overleed op 72-jarige leeftijd aan ALS" }    
];