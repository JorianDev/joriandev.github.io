// Datasets
// Verdeling: eigenVerdeling komt overeen met tk2023. De gebruiker kan deze dataset zelf aanpassen.
const zetelData = {
    tk2023: {
        meta: {
            bron: "Kiesraad",
            datum: "2023-11-22",
            type: "Verkiezingsuitslag"
        },

        data: [
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
            { naam: "50PLUS", zetels: 0, kleur: "#721fc0ff"},
        ]
    },

    tk2021: {
        meta: {
            bron: "Kiesraad",
            datum: "2021-03-26",
            type: "Verkiezingsuitslag"
        },

        data: [
            { naam: "PVV", zetels: 17, kleur: "#1E90FF"},
            { naam: "GroenLinks", zetels: 8, kleur: "#1cee00ff"},
            { naam: "PvdA", zetels: 9, kleur: "#ff0000"},
            { naam: "VVD", zetels: 34, kleur: "#ff6400"},
            { naam: "NSC", zetels: 20, kleur: "#143272"},
            { naam: "CDA", zetels: 15, kleur: "#2cc84d"},
            { naam: "D66", zetels: 24, kleur: "#00ae41"},
            { naam: "JA21", zetels: 3, kleur: "#242b57"},
            { naam: "SP", zetels: 9, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 8, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 6, kleur: "#00621e"},
            { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 3, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 3, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 5, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 1, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
            { naam: "BIJ1", zetels: 1, kleur: "#5300a0ff"},
        ]
    },

    peilingMDH_Okt10: {
        meta: {
            bron: "Maurice de Hond",
            datum: "2025-10-10",
            type: "Peiling"
        },

        data: [
            { naam: "PVV", zetels: 31, kleur: "#1E90FF"},
            { naam: "GroenLinks/PvdA", zetels: 25, kleur: "#ff0000"},
            { naam: "VVD", zetels: 15, kleur: "#ff6400"},
            { naam: "NSC", zetels: 0, kleur: "#143272"},
            { naam: "CDA", zetels: 22, kleur: "#2cc84d"},
            { naam: "D66", zetels: 14, kleur: "#00ae41"},
            { naam: "JA21", zetels: 13, kleur: "#242b57"},
            { naam: "SP", zetels: 4, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 5, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
            { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 4, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 3, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 4, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
        ]
    },

    peilingIpsos_Okt6: {
        meta: {
            bron: "Ipsos I&O",
            datum: "2025-10-06",
            type: "Peiling"
        },

        data: [
            { naam: "PVV", zetels: 31, kleur: "#1E90FF"},
            { naam: "GroenLinks/PvdA", zetels: 22, kleur: "#ff0000"},
            { naam: "VVD", zetels: 13, kleur: "#ff6400"},
            { naam: "NSC", zetels: 0, kleur: "#143272"},
            { naam: "CDA", zetels: 24, kleur: "#2cc84d"},
            { naam: "D66", zetels: 14, kleur: "#00ae41"},
            { naam: "JA21", zetels: 13, kleur: "#242b57"},
            { naam: "SP", zetels: 4, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 4, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 5, kleur: "#00621e"},
            { naam: "SGP", zetels: 4, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 4, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 4, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 2, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 4, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 2, kleur: "#721fc0ff"},
        ]
    },

    peilingMDH_Okt: {
        meta: {
            bron: "Maurice de Hond",
            datum: "2025-10-03",
            type: "Peiling"
        },

        data: [
            { naam: "PVV", zetels: 30, kleur: "#1E90FF"},
            { naam: "GroenLinks/PvdA", zetels: 27, kleur: "#ff0000"},
            { naam: "VVD", zetels: 13, kleur: "#ff6400"},
            { naam: "NSC", zetels: 0, kleur: "#143272"},
            { naam: "CDA", zetels: 23, kleur: "#2cc84d"},
            { naam: "D66", zetels: 12, kleur: "#00ae41"},
            { naam: "JA21", zetels: 13, kleur: "#242b57"},
            { naam: "SP", zetels: 6, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 5, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
            { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 4, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 3, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 4, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
        ]
    },
    
    

    peilingEenV_Sept: {
        meta: {
            bron: "EenVandaag",
            datum: "2025-09-30",
            type: "Peiling"
        },

        data: [
            { naam: "PVV", zetels: 34, kleur: "#1E90FF"},
            { naam: "GroenLinks/PvdA", zetels: 23, kleur: "#ff0000"},
            { naam: "VVD", zetels: 14, kleur: "#ff6400"},
            { naam: "NSC", zetels: 0, kleur: "#143272"},
            { naam: "CDA", zetels: 23, kleur: "#2cc84d"},
            { naam: "D66", zetels: 11, kleur: "#00ae41"},
            { naam: "JA21", zetels: 11, kleur: "#242b57"},
            { naam: "SP", zetels: 7, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 4, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 4, kleur: "#00621e"},
            { naam: "SGP", zetels: 4, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 3, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 4, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 4, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 3, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
        ]
    },

    peilingMDH_Sept: {
        meta: {
            bron: "Maurice de Hond",
            datum: "2025-09-26",
            type: "Peiling"
        },

        data: [
            { naam: "PVV", zetels: 29, kleur: "#1E90FF"},
            { naam: "GroenLinks/PvdA", zetels: 27, kleur: "#ff0000"},
            { naam: "VVD", zetels: 15, kleur: "#ff6400"},
            { naam: "NSC", zetels: 0, kleur: "#143272"},
            { naam: "CDA", zetels: 23, kleur: "#2cc84d"},
            { naam: "D66", zetels: 11, kleur: "#00ae41"},
            { naam: "JA21", zetels: 13, kleur: "#242b57"},
            { naam: "SP", zetels: 6, kleur: "#ec1b23"},
            { naam: "FVD", zetels: 5, kleur: "#84171a"},
            { naam: "PvdDieren", zetels: 3, kleur: "#00621e"},
            { naam: "SGP", zetels: 3, kleur: "#e95d0f"},
            { naam: "DENK", zetels: 4, kleur: "#00b7b3"},
            { naam: "Volt", zetels: 3, kleur: "#502378"},
            { naam: "ChristenUnie", zetels: 3, kleur: "#00a5e8"},
            { naam: "BBB", zetels: 4, kleur: "#93c01f"},
            { naam: "50PLUS", zetels: 1, kleur: "#721fc0ff"},
            //Source: https://peilingen.maurice.nl/2025/09/chaotische-week-scherpt-polarisatie-alleen-nog-verder-aan/
        ]
    },

    peilingMDH_Juni: {
        meta: {
            bron: "Maurice de Hond",
            datum: "2025-06-25",
            type: "Peiling"
        },

        data: [
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
            { naam: "50PLUS", zetels: 0, kleur: "#721fc0ff"},
        ]
    },

    eigenVerdeling: {
        meta: {
            bron: "Gebruiker",
            datum: "2025-10-13",
            type: "Eigen verdeling"
        },

        data: [
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
            { naam: "50PLUS", zetels: 0, kleur: "#721fc0ff"},
        ]
    }
};