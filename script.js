/* =========================================================
   DICHOTOMOUS KEY DATA (16 COUPLETS -> 17 SPECIES)
========================================================= */
const keyData = {
    1: {
        question: "Check Aperture Type: Is the pollen grain 1-zonosulcate?",
        leadA: {
            text: "Aperture 1-zonosulcate",
            result: "Nypa fruticans"
        },
        leadB: {
            text: "Aperture not 1-zonosulcate",
            next: 2
        }
    },
    2: {
        question: "Check Aperture Type: Is the pollen grain triporate?",
        leadA: {
            text: "Aperture triporate",
            result: "Sonneratia alba"
        },
        leadB: {
            text: "Aperture not triporate",
            next: 3
        }
    },
    3: {
        question: "Check Pollen Shape: Is the pollen grain suboblate?",
        leadA: {
            text: "Pollen shape suboblate",
            result: "Excoecaria agallocha"
        },
        leadB: {
            text: "Pollen shape not suboblate",
            next: 4
        }
    },
    4: {
        question: "Check Pollen Shape: Is the grain circular or elongated?",
        leadA: {
            text: "Pollen shape circular",
            next: 5
        },
        leadB: {
            text: "Pollen shape prolate/subprolate",
            next: 6
        }
    },
    5: {
        question: "Check Surface Pattern: Does the circular grain have a reticulate pattern?",
        leadA: {
            text: "Surface pattern reticulate",
            result: "Lumnitzera racemosa"
        },
        leadB: {
            text: "Surface pattern not reticulate",
            next: 7
        }
    },
    6: {
        question: "Check Pollen Shape: Is the elongated grain prolate or subprolate?",
        leadA: {
            text: "Pollen shape prolate",
            next: 8
        },
        leadB: {
            text: "Pollen shape subprolate",
            next: 9
        }
    },
    7: {
        question: "Check Surface Pattern: Is the surface granulate or scabrate?",
        leadA: {
            text: "Surface pattern granulate",
            result: "Lumnitzera littorea"
        },
        leadB: {
            text: "Surface pattern scabrate",
            result: "Pemphis acidula"
        }
    },
    8: {
        question: "Check Surface Pattern: Is the prolate grain microreticulate or psilate?",
        leadA: {
            text: "Surface pattern microreticulate",
            result: "Avicennia marina"
        },
        leadB: {
            text: "Surface pattern psilate",
            result: "Ceriops decandra"
        }
    },
    9: {
        question: "Check Aperture Count: How many apertures does the grain have?",
        leadA: {
            text: "Aperture count 4",
            result: "Xylocarpus granatum"
        },
        leadB: {
            text: "Aperture count 3",
            next: 10
        }
    },
    10: {
        question: "Check Aperture Type: Are the 3 apertures tricolpate or tricolporate?",
        leadA: {
            text: "Aperture type tricolpate",
            result: "Acanthus ilicifolius"
        },
        leadB: {
            text: "Aperture type tricolporate",
            next: 11
        }
    },
    11: {
        question: "Check Surface Pattern: Is the surface pattern perforate?",
        leadA: {
            text: "Surface pattern perforate",
            result: "Rhizophora stylosa"
        },
        leadB: {
            text: "Surface pattern not perforate",
            next: 12
        }
    },
    12: {
        question: "Check Surface Pattern: Is the surface pattern psilate-scabrate?",
        leadA: {
            text: "Surface pattern psilate-scabrate",
            result: "Rhizophora mucronata"
        },
        leadB: {
            text: "Surface pattern not psilate-scabrate",
            next: 13
        }
    },
    13: {
        question: "Check Surface Pattern: Is the surface scabrate or reticulate?",
        leadA: {
            text: "Surface pattern scabrate",
            result: "Ceriops tagal"
        },
        leadB: {
            text: "Surface pattern reticulate",
            next: 14
        }
    },
    14: {
        question: "Check Size Category: Is the pollen grain minuta or media?",
        leadA: {
            text: "Size category minuta",
            result: "Bruguiera gymnorhiza"
        },
        leadB: {
            text: "Size category media",
            next: 15
        }
    },
    15: {
        question: "Check Average Size: Is the average grain size above or below 30 µm?",
        leadA: {
            text: "Average size > 30 µm",
            result: "Avicennia rumphiana"
        },
        leadB: {
            text: "Average size < 30 µm",
            next: 16
        }
    },
    16: {
        question: "Check Average Size: Is the average grain size above or below 25 µm?",
        leadA: {
            text: "Average size > 25 µm",
            result: "Scyphiphora hydrophyllacea"
        },
        leadB: {
            text: "Average size < 25 µm",
            result: "Rhizophora apiculata"
        }
    }
};

/* =========================================================
   POLLEN MORPHOLOGY & QUANTITATIVE DATASETS
========================================================= */
const pollenMorphologyData = {
    "Nypa fruticans": {
        morphologicType: "subprolate",
        surfacePattern: "echinate",
        polarSizeRange: "25.12μm-55.73μm",
        equatorialSizeRange: "21.29μm-61.72μm",
        apertureCount: "1",
        dispersalForm: "monad",
        sizeCategory: "magna"
    },
    "Sonneratia alba": {
        morphologicType: "prolate",
        surfacePattern: "granulate",
        sizeCategory: "magna",
        polarSizeRange: "52.26μm-74.17μm",
        equatorialSizeRange: "43.12μm-61.17μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Excoecaria agallocha": {
        morphologicType: "suboblate",
        surfacePattern: "reticulate",
        sizeCategory: "media",
        polarSizeRange: "26.36μm-57.68μm",
        equatorialSizeRange: "22.19μm-42.05μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Lumnitzera racemosa": {
        morphologicType: "circular",
        surfacePattern: "reticulate",
        sizeCategory: "media",
        polarSizeRange: "34.08μm-39.01μm",
        equatorialSizeRange: "17.87μm-37.55μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Lumnitzera littorea": {
        morphologicType: "circular",
        surfacePattern: "granulate",
        sizeCategory: "media",
        polarSizeRange: "31.18μm-53.18μm",
        equatorialSizeRange: "30.48μm-53.84μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Pemphis acidula": {
        morphologicType: "circular",
        surfacePattern: "scabrate",
        sizeCategory: "media",
        polarSizeRange: "26.18μm-49.92μm",
        equatorialSizeRange: "24.06μm-48.14μm",
        apertureCount: "3-4",
        dispersalForm: "monad"
    },
    "Avicennia marina": {
        morphologicType: "prolate",
        surfacePattern: "microreticulate",
        sizeCategory: "media",
        polarSizeRange: "16.12μm-49.64μm",
        equatorialSizeRange: "14.65μm-45.58μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Ceriops decandra": {
        morphologicType: "prolate",
        surfacePattern: "psilate",
        sizeCategory: "minuta",
        polarSizeRange: "15.71μm-29.08μm",
        equatorialSizeRange: "13.31μm-27.03μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Xylocarpus granatum": {
        morphologicType: "subprolate",
        surfacePattern: "granulate",
        sizeCategory: "media",
        polarSizeRange: "17.85μm-29.03μm",
        equatorialSizeRange: "15.4μm-26.26μm",
        apertureCount: "4",
        dispersalForm: "monad"
    },
    "Acanthus ilicifolius": {
        morphologicType: "subprolate",
        surfacePattern: "reticulate",
        sizeCategory: "magna",
        polarSizeRange: "38.59μm-69.49μm",
        equatorialSizeRange: "31.39μm-52.75μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Rhizophora stylosa": {
        morphologicType: "subprolate",
        surfacePattern: "perforate",
        sizeCategory: "minuta",
        polarSizeRange: "18.06μm-32.24μm",
        equatorialSizeRange: "15.12μm-28.92μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Rhizophora mucronata": {
        morphologicType: "subprolate",
        surfacePattern: "psilate-scabrate",
        sizeCategory: "minuta",
        polarSizeRange: "16.64μm-26.31μm",
        equatorialSizeRange: "13.00μm-22.95μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Ceriops tagal": {
        morphologicType: "subprolate",
        surfacePattern: "scabrate",
        sizeCategory: "minuta",
        polarSizeRange: "13.36μm-20.67μm",
        equatorialSizeRange: "12.79μm-19.63μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Bruguiera gymnorhiza": {
        morphologicType: "subprolate",
        surfacePattern: "psilate",
        sizeCategory: "minuta",
        polarSizeRange: "16.24μm-27.83μm",
        equatorialSizeRange: "16.24μm-26.44μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Avicennia rumphiana": {
        morphologicType: "subprolate",
        surfacePattern: "reticulate",
        sizeCategory: "media",
        polarSizeRange: "21.61μm-44.29μm",
        equatorialSizeRange: "18.35μm-42.75μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Scyphiphora hydrophyllacea": {
        morphologicType: "subprolate",
        surfacePattern: "reticulate",
        sizeCategory: "media",
        polarSizeRange: "20.76μm-40.85μm",
        equatorialSizeRange: "15.22μm-40.85μm",
        apertureCount: "3",
        dispersalForm: "monad"
    },
    "Rhizophora apiculata": {
        morphologicType: "subprolate",
        surfacePattern: "reticulate",
        sizeCategory: "media",
        polarSizeRange: "16.12μm-29.40μm",
        equatorialSizeRange: "14.65μm-26.02μm",
        apertureCount: "3",
        dispersalForm: "monad"
    }
};

const pollenData = {
    "Acanthus ilicifolius": {
        family: "Acanthaceae",
        PA: "50.61 ± 8.53",
        EA: "40.22 ± 6.61",
        PE: "1.29 ± 0.29",
        shape: "Subprolate",
        aperture: "Tricolpate",
        ornamentation: "Reticulate",
        size: "Magna"
    },
    "Nypa fruticans": {
        family: "Arecaceae",
        PA: "46.22 ± 8.49",
        EA: "37.31 ± 10.65",
        PE: "1.36 ± 0.48",
        shape: "Subprolate",
        aperture: "1-Zonosulcate",
        ornamentation: "Echinate",
        size: "Magna"
    },
    "Avicennia marina": {
        family: "Avicenniaceae",
        PA: "38.18 ± 4.04",
        EA: "35.30 ± 4.97",
        PE: "1.09 ± 0.12",
        shape: "Prolate",
        aperture: "Tricolporate",
        ornamentation: "Microreticulate",
        size: "Media"
    },
    "Avicennia rumphiana": {
        family: "Avicenniaceae",
        PA: "26.80 ± 9.43",
        EA: "24.52 ± 8.63",
        PE: "1.10 ± 0.08",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Media"
    },
    "Lumnitzera littorea": {
        family: "Combretaceae",
        PA: "43.26 ± 4.43",
        EA: "40.55 ± 4.40",
        PE: "1.07 ± 0.10",
        shape: "Circular",
        aperture: "Tricolporate",
        ornamentation: "Granulate",
        size: "Media"
    },
    "Lumnitzera racemosa": {
        family: "Combretaceae",
        PA: "28.24 ± 5.00",
        EA: "25.78 ± 5.60",
        PE: "1.11 ± 0.12",
        shape: "Circular",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Media"
    },
    "Excoecaria agallocha": {
        family: "Euphorbiaceae",
        PA: "33.51 ± 5.45",
        EA: "28.94 ± 3.41",
        PE: "1.17 ± 0.20",
        shape: "Suboblate",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Media"
    },
    "Pemphis acidula": {
        family: "Lythraceae",
        PA: "36.70 ± 4.92",
        EA: "34.18 ± 4.61",
        PE: "1.08 ± 0.09",
        shape: "Circular",
        aperture: "Tricolporate",
        ornamentation: "Scabrate",
        size: "Media"
    },
    "Sonneratia alba": {
        family: "Lythraceae",
        PA: "63.86 ± 5.58",
        EA: "53.79 ± 4.84",
        PE: "1.20 ± 0.15",
        shape: "Prolate",
        aperture: "Triporate",
        ornamentation: "Granulate",
        size: "Magna"
    },
    "Xylocarpus granatum": {
        family: "Meliaceae",
        PA: "21.12 ± 2.49",
        EA: "18.94 ± 2.75",
        PE: "1.12 ± 0.09",
        shape: "Subprolate",
        aperture: "Tetracolporate",
        ornamentation: "Granulate",
        size: "Media"
    },
    "Bruguiera gymnorhiza": {
        family: "Rhizophoraceae",
        PA: "23.06 ± 2.64",
        EA: "21.12 ± 2.43",
        PE: "1.10 ± 0.09",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Minuta"
    },
    "Ceriops decandra": {
        family: "Rhizophoraceae",
        PA: "21.15 ± 4.31",
        EA: "20.16 ± 3.61",
        PE: "1.07 ± 0.25",
        shape: "Prolate",
        aperture: "Tricolporate",
        ornamentation: "Psilate",
        size: "Minuta"
    },
    "Ceriops tagal": {
        family: "Rhizophoraceae",
        PA: "17.47 ± 1.61",
        EA: "16.12 ± 1.43",
        PE: "1.09 ± 0.07",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Scabrate",
        size: "Minuta"
    },
    "Rhizophora apiculata": {
        family: "Rhizophoraceae",
        PA: "21.20 ± 3.25",
        EA: "19.12 ± 2.97",
        PE: "1.11 ± 0.11",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Media"
    },
    "Rhizophora mucronata": {
        family: "Rhizophoraceae",
        PA: "21.40 ± 2.40",
        EA: "18.11 ± 2.43",
        PE: "1.21 ± 0.23",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Psilate-scabrate",
        size: "Minuta"
    },
    "Rhizophora stylosa": {
        family: "Rhizophoraceae",
        PA: "22.83 ± 3.13",
        EA: "20.04 ± 3.41",
        PE: "1.15 ± 0.15",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Perforate",
        size: "Minuta"
    },
    "Scyphiphora hydrophyllacea": {
        family: "Rubiaceae",
        PA: "27.88 ± 4.29",
        EA: "26.65 ± 5.25",
        PE: "1.07 ± 0.16",
        shape: "Subprolate",
        aperture: "Tricolporate",
        ornamentation: "Reticulate",
        size: "Media"
    }
};

const pollenFigureNumbers = {
    "Nypa fruticans": 1,
    "Sonneratia alba": 2,
    "Excoecaria agallocha": 3,
    "Lumnitzera racemosa": 4,
    "Lumnitzera littorea": 5,
    "Pemphis acidula": 6,
    "Avicennia marina": 7,
    "Ceriops decandra": 8,
    "Xylocarpus granatum": 9,
    "Acanthus ilicifolius": 10,
    "Rhizophora stylosa": 11,
    "Rhizophora mucronata": 12,
    "Ceriops tagal": 13,
    "Bruguiera gymnorhiza": 14,
    "Avicennia rumphiana": 15,
    "Scyphiphora hydrophyllacea": 16,
    "Rhizophora apiculata": 17
};

const mangroveSpecies = Object.keys(pollenFigureNumbers).sort((a, b) => a.localeCompare(b));

/* =========================================================
   STATE VARIABLES
========================================================= */
let screenHistory = [];
let currentCoupletNumber = 1;
let selectedSpecies = null;
let selectedComparisonSpecies = [];
let selectedInterfamilialFamilies = [];
let selectedInterfamilialSpecies = [];

/* =========================================================
   SHARED IMAGE PATH & MODAL HELPERS
========================================================= */
function getImagePath(species, type) {
    const slug = species.toLowerCase().replace(/\s+/g, "_");
    return `${type}_images/${type}_${slug}.jpg`;
}

function getPollenImagePaths(species) {
    const figure = pollenFigureNumbers[species];
    if (!figure) {
        return { figure: null, polarPath: "", equatorialPath: "" };
    }
    return {
        figure,
        polarPath: `pollen_images/Fig-${figure}a.jpg`,
        equatorialPath: figure === 13
            ? "pollen_images/Fig-13b.jpeg"
            : `pollen_images/Fig-${figure}b.jpg`
    };
}

function attachZoomImageHandler(imgElement, path, captionText, fallbackText) {
    if (!imgElement) return;
    imgElement.addEventListener("click", () => openImageModal(path, captionText));
    imgElement.onerror = function () {
        const notice = document.createElement("p");
        notice.className = "zoom-hint";
        notice.textContent = fallbackText;
        this.replaceWith(notice);
    };
}

function openImageModal(imagePath, description) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    const modalCaption = document.getElementById("modal-caption");

    if (!modal || !modalImage) return;

    modalImage.src = imagePath;
    modalImage.alt = description;
    if (modalCaption) {
        modalCaption.textContent = description;
    }

    modal.classList.add("active");
}

function closeImageModal() {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");
    if (modal) {
        modal.classList.remove("active");
    }
    if (modalImage) {
        modalImage.src = "";
    }
}

/* =========================================================
   NAVIGATION & TAB SWITCHING
========================================================= */
function showPage(pageId, subTab = null) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);
    if (selectedPage) {
        selectedPage.classList.add("active");
    }

    // Sync active highlight in top navigation bars
    document.querySelectorAll(".topbar-tab").forEach(tab => {
        tab.classList.toggle("active", tab.dataset.page === pageId);
    });

    if (pageId === "guide-page" && subTab) {
        switchGuideTab(subTab);
    }

    if (pageId === "home-page") {
        resetSections();
    }

    window.scrollTo({ top: 0, behavior: "instant" });
}

function switchGuideTab(tabName) {
    const isDichotomous = tabName === "dichotomous";

    const btnDich = document.getElementById("tab-btn-dichotomous");
    const btnSpec = document.getElementById("tab-btn-species");
    const panelDich = document.getElementById("guide-tab-dichotomous");
    const panelSpec = document.getElementById("guide-tab-species");

    if (btnDich && btnSpec && panelDich && panelSpec) {
        btnDich.classList.toggle("active", isDichotomous);
        btnDich.setAttribute("aria-selected", String(isDichotomous));
        btnSpec.classList.toggle("active", !isDichotomous);
        btnSpec.setAttribute("aria-selected", String(!isDichotomous));

        panelDich.classList.toggle("active", isDichotomous);
        panelSpec.classList.toggle("active", !isDichotomous);
    }
}

function switchComparisonTab(tabName) {
    const isIntra = tabName === "intrafamilial";

    const btnIntra = document.getElementById("tab-btn-intrafamilial");
    const btnInter = document.getElementById("tab-btn-interfamilial");
    const panelIntra = document.getElementById("comparison-tab-intrafamilial");
    const panelInter = document.getElementById("comparison-tab-interfamilial");

    if (btnIntra && btnInter && panelIntra && panelInter) {
        btnIntra.classList.toggle("active", isIntra);
        btnIntra.setAttribute("aria-selected", String(isIntra));
        btnInter.classList.toggle("active", !isIntra);
        btnInter.setAttribute("aria-selected", String(!isIntra));

        panelIntra.classList.toggle("active", isIntra);
        panelInter.classList.toggle("active", !isIntra);
    }
}

function toggleAllGlossary(shouldOpen) {
    document.querySelectorAll("#glossary-page .glossary-category").forEach(detail => {
        detail.open = shouldOpen;
    });
}

function resetSections() {
    // Reset Dichotomous Key
    screenHistory = [];
    showCouplet(1, false);

    // Reset Species Atlas
    const searchInput = document.getElementById("species-search");
    if (searchInput) searchInput.value = "";
    const familyFilter = document.getElementById("species-family-filter");
    if (familyFilter) familyFilter.value = "";
    selectedSpecies = mangroveSpecies[0];
    renderSpeciesList("", "");
    if (selectedSpecies) {
        selectSpecies(selectedSpecies, false);
    }

    // Reset Comparisons
    showFamilySpecies("");
    showInterfamilialFamilies();

    closeImageModal();
}

/* =========================================================
   UNIFIED SPECIMEN PROFILE RENDERER (KEY + ATLAS)
========================================================= */
function renderSpecimenCard(container, species, options = {}) {
    if (!container || !species) return;

    const {
        idPrefix = "specimen",
        kicker = "Taxon Profile",
        confirmedSteps = null,
        showAtlasLink = false,
        collapsible = false
    } = options;

    const { figure, polarPath, equatorialPath } = getPollenImagePaths(species);
    const morphology = pollenMorphologyData[species] || {};
    const quant = pollenData[species] || {};
    const plantPath = getImagePath(species, "plant");
    const flowerPath = getImagePath(species, "flower");

    const confirmedTraitsHTML = confirmedSteps && confirmedSteps.length > 0
        ? `
            <div class="confirmed-traits-box">
                <p class="confirmed-traits-title">Diagnostic Path Confirmed</p>
                <div class="confirmed-traits-list">
                    ${confirmedSteps.map(step => `
                        <span class="confirmed-trait-pill">
                            <b>${step.couplet}${step.lead.toLowerCase()}:</b> ${step.text}
                        </span>
                    `).join("")}
                </div>
            </div>
        `
        : "";

    const pollenMicrographsHTML = `
        <div class="dkey-pollen-panel">
            <h3 class="panel-header">Pollen Micrographs</h3>
            ${figure ? `
                <div class="dkey-pollen-images">
                    <div class="image-card">
                        <h4>Polar View</h4>
                        <img id="${idPrefix}-polar-photo" src="${polarPath}" alt="Polar view of ${species}">
                        <p class="zoom-hint">Click to enlarge</p>
                    </div>
                    <div class="image-card">
                        <h4>Equatorial View</h4>
                        <img id="${idPrefix}-eq-photo" src="${equatorialPath}" alt="Equatorial view of ${species}">
                        <p class="zoom-hint">Click to enlarge</p>
                    </div>
                </div>
            ` : "<p style='padding: 16px;'>Pollen photographs are not available.</p>"}
        </div>
    `;

    const morphologyHTML = `
        <div class="dkey-characteristics-panel">
            <h3 class="panel-header">Morphological Profile</h3>
            <div class="detail-list">
                <div class="detail-row">
                    <strong>Morphologic type</strong>
                    <span>${quant.shape || morphology.morphologicType || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Surface pattern</strong>
                    <span>${quant.ornamentation || morphology.surfacePattern || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Aperture type</strong>
                    <span>${quant.aperture || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Aperture count</strong>
                    <span>${morphology.apertureCount || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Polar Axis (mean ± SD)</strong>
                    <span>${quant.PA ? `${quant.PA} µm` : "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Polar size range</strong>
                    <span>${morphology.polarSizeRange || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Equatorial Axis (mean ± SD)</strong>
                    <span>${quant.EA ? `${quant.EA} µm` : "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Equatorial size range</strong>
                    <span>${morphology.equatorialSizeRange || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>P/E Ratio (mean ± SD)</strong>
                    <span>${quant.PE || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Size category</strong>
                    <span>${quant.size || morphology.sizeCategory || "Not entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Dispersal form</strong>
                    <span>${morphology.dispersalForm || "Not entered"}</span>
                </div>
            </div>
        </div>
    `;

    const botanicalHTML = `
        <div class="dkey-botanical-panel">
            <h3 class="panel-header">Botanical Photographs</h3>
            <div class="dkey-botanical-images">
                <div class="image-card">
                    <h4>Whole Plant</h4>
                    <img id="${idPrefix}-plant-photo" src="${plantPath}" alt="Whole plant of ${species}">
                    <p class="zoom-hint">Click to enlarge</p>
                </div>
                <div class="image-card">
                    <h4>Flower</h4>
                    <img id="${idPrefix}-flower-photo" src="${flowerPath}" alt="Flower of ${species}">
                    <p class="zoom-hint">Click to enlarge</p>
                </div>
            </div>
        </div>
    `;

    const taxonomyHTML = `
        <details class="profile-details"${collapsible ? "" : " open"}>
            <summary>Taxonomic Classification</summary>
            <div class="detail-list">
                <div class="detail-row">
                    <strong>Family</strong>
                    <span>${quant.family || "Not yet entered"}</span>
                </div>
                <div class="detail-row">
                    <strong>Genus</strong>
                    <span><i>${species.split(" ")[0]}</i></span>
                </div>
                <div class="detail-row">
                    <strong>Species</strong>
                    <span><i>${species}</i></span>
                </div>
            </div>
        </details>
    `;

    container.innerHTML = `
        <div class="result-banner">
            <div>
                <div class="result-kicker">${kicker}${figure ? ` · Fig. ${figure}` : ""}</div>
                <h2><i>${species}</i></h2>
            </div>
            <div class="specimen-actions">
                ${quant.family ? `<span class="family-pill">Family: ${quant.family}</span>` : ""}
                ${showAtlasLink ? `
                    <button type="button" class="btn btn-secondary btn-sm" onclick="openInSpeciesAtlas('${species}')">
                        Open in Species Atlas →
                    </button>
                ` : ""}
            </div>
        </div>

        ${confirmedTraitsHTML}

        <div class="dkey-result-layout">
            ${pollenMicrographsHTML}
            ${morphologyHTML}
            ${botanicalHTML}
        </div>

        ${taxonomyHTML}
    `;

    attachZoomImageHandler(
        document.getElementById(`${idPrefix}-polar-photo`),
        polarPath,
        `${species} — Pollen Polar View (Fig. ${figure}a)`,
        "Polar image not found."
    );
    attachZoomImageHandler(
        document.getElementById(`${idPrefix}-eq-photo`),
        equatorialPath,
        `${species} — Pollen Equatorial View (Fig. ${figure}b)`,
        "Equatorial image not found."
    );
    attachZoomImageHandler(
        document.getElementById(`${idPrefix}-plant-photo`),
        plantPath,
        `${species} — Whole Plant`,
        "Whole-plant photograph not available."
    );
    attachZoomImageHandler(
        document.getElementById(`${idPrefix}-flower-photo`),
        flowerPath,
        `${species} — Flower`,
        "Flower photograph not available."
    );
}

/* =========================================================
   DICHOTOMOUS KEY FLOW
========================================================= */
function getBranchSpecies(lead) {
    if (!lead) return [];
    if (lead.result) return [lead.result];
    if (lead.next) return getRemainingSpecies(lead.next);
    return [];
}

function getRemainingSpecies(coupletNumber) {
    const couplet = keyData[coupletNumber];
    if (!couplet) return [];
    const list = [
        ...getBranchSpecies(couplet.leadA),
        ...getBranchSpecies(couplet.leadB)
    ];
    return [...new Set(list)].sort((a, b) => a.localeCompare(b));
}

function renderCandidatePanel(coupletNumber) {
    const resultContainer = document.getElementById("key-result");
    if (!resultContainer) return;

    const candidates = getRemainingSpecies(coupletNumber);

    resultContainer.innerHTML = `
        <div class="candidate-panel-header">
            <div>
                <h3>Remaining Candidate Species (${candidates.length})</h3>
                <p>Candidates narrow down automatically as you select traits on the left. Click any card to inspect it in the Atlas.</p>
            </div>
        </div>

        <div class="candidate-grid">
            ${candidates.map(species => {
                const { figure, polarPath } = getPollenImagePaths(species);
                const quant = pollenData[species] || {};
                const summary = [quant.shape, quant.ornamentation].filter(Boolean).join(" · ");
                return `
                    <button type="button" class="candidate-card" onclick="openInSpeciesAtlas('${species}')">
                        ${figure ? `<img class="candidate-thumb" src="${polarPath}" alt="${species} pollen">` : ""}
                        <span class="candidate-info">
                            <span class="candidate-name">${species}</span>
                            <span class="candidate-meta">${quant.family || ""}${summary ? ` · ${summary}` : ""}</span>
                        </span>
                    </button>
                `;
            }).join("")}
        </div>
    `;
}

function formatLeadIntent(lead) {
    if (lead.result) {
        return `<span class="lead-intent-badge is-terminal">Identifies species</span>`;
    }
    const count = getBranchSpecies(lead).length;
    return `<span class="lead-intent-badge">Continues to next step (${count} remaining)</span>`;
}

function showCouplet(number, shouldScroll = false) {
    currentCoupletNumber = number;
    const couplet = keyData[number];
    const container = document.getElementById("key-container");
    if (!container) return;

    if (!couplet) {
        container.innerHTML = "<p>Couplet not found.</p>";
        return;
    }

    const remainingCount = getRemainingSpecies(number).length;
    renderCandidatePanel(number);

    const trailMarkup = screenHistory.length > 0
        ? `
            <div class="dkey-trail">
                <div class="dkey-trail-label">Choices Made So Far (click any step to return)</div>
                <div class="dkey-trail-items">
                    ${screenHistory.map((step, idx) => `
                        <button type="button"
                                class="trail-chip"
                                title="Return to Couplet ${step.couplet}"
                                onclick="jumpToHistoryStep(${idx})">
                            ${step.couplet}${step.lead.toLowerCase()}: ${step.text}
                        </button>
                        <span class="trail-sep">→</span>
                    `).join("")}
                    <span class="couplet-badge">Couplet ${number}</span>
                </div>
            </div>
        `
        : "";

    container.innerHTML = `
        <div class="dkey-step-meta">
            <span class="couplet-badge">Couplet ${number} of 16</span>
            <span class="couplet-badge">${remainingCount} possible ${remainingCount === 1 ? "species" : "taxa"}</span>
        </div>

        ${trailMarkup}

        <h3 class="dkey-question-title">${couplet.question}</h3>
        <p class="dkey-prompt">Select the statement that matches your pollen sample:</p>

        <div class="couplet-leads">
            <button type="button"
                    id="lead-${number}-A"
                    class="couplet-lead-btn"
                    onclick="chooseLead('A', ${number})">
                <span class="lead-code">${number}a</span>
                <span class="lead-body">
                    <span class="lead-text">${couplet.leadA.text}</span>
                    ${formatLeadIntent(couplet.leadA)}
                </span>
                <span class="lead-arrow" aria-hidden="true">→</span>
            </button>

            <button type="button"
                    id="lead-${number}-B"
                    class="couplet-lead-btn"
                    onclick="chooseLead('B', ${number})">
                <span class="lead-code">${number}b</span>
                <span class="lead-body">
                    <span class="lead-text">${couplet.leadB.text}</span>
                    ${formatLeadIntent(couplet.leadB)}
                </span>
                <span class="lead-arrow" aria-hidden="true">→</span>
            </button>
        </div>

        <div class="dkey-controls">
            <button type="button"
                    class="btn btn-secondary btn-sm"
                    onclick="goBack()"
                    ${screenHistory.length === 0 ? "disabled" : ""}>
                ← Previous Step
            </button>
            <button type="button"
                    class="btn btn-ghost btn-sm"
                    onclick="restartKey()">
                ↺ Start Over
            </button>
        </div>
    `;

    if (shouldScroll) {
        container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function chooseLead(lead, number) {
    const couplet = keyData[number];
    if (!couplet) return;

    const selected = lead === "A" ? couplet.leadA : couplet.leadB;

    if (selected.result) {
        const btnA = document.getElementById(`lead-${number}-A`);
        const btnB = document.getElementById(`lead-${number}-B`);
        if (btnA) btnA.classList.toggle("is-selected", lead === "A");
        if (btnB) btnB.classList.toggle("is-selected", lead === "B");

        const confirmedSteps = [
            ...screenHistory,
            { couplet: number, lead, text: selected.text }
        ];
        showPollenImages(selected.result, confirmedSteps);

        if (window.innerWidth <= 900) {
            const res = document.getElementById("key-result");
            if (res) res.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    } else if (selected.next) {
        screenHistory.push({
            couplet: number,
            lead,
            text: selected.text
        });
        showCouplet(selected.next, false);
    }
}

function jumpToHistoryStep(index) {
    if (index < 0 || index >= screenHistory.length) return;
    const targetCouplet = screenHistory[index].couplet;
    screenHistory = screenHistory.slice(0, index);
    showCouplet(targetCouplet, false);
}

function goBack() {
    if (screenHistory.length > 0) {
        const previousStep = screenHistory.pop();
        showCouplet(previousStep.couplet, false);
    }
}

function restartKey() {
    screenHistory = [];
    showCouplet(1, false);
}

function showPollenImages(species, confirmedSteps = []) {
    const container = document.getElementById("key-result");
    renderSpecimenCard(container, species, {
        idPrefix: "dkey",
        kicker: "Identification Complete",
        confirmedSteps,
        showAtlasLink: true,
        collapsible: true
    });
}

/* =========================================================
   SPECIES ATLAS / EXPLORER (MASTER-DETAIL)
========================================================= */
function initSpeciesAtlas() {
    const familyFilter = document.getElementById("species-family-filter");
    if (familyFilter) {
        const families = getSortedFamilies();
        familyFilter.innerHTML = `
            <option value="">All Families (${mangroveSpecies.length} taxa)</option>
            ${families.map(family => {
                const count = getSpeciesByFamily(family).length;
                return `<option value="${family}">${family} (${count})</option>`;
            }).join("")}
        `;
    }

    selectedSpecies = mangroveSpecies[0] || null;
    renderSpeciesList("", "");
    if (selectedSpecies) {
        selectSpecies(selectedSpecies, false);
    }
}

function renderSpeciesList(filterText = "", familyFilterValue = "") {
    const speciesList = document.getElementById("species-list");
    const countLabel = document.getElementById("species-count-label");
    if (!speciesList) return;

    const query = filterText.trim().toLowerCase();
    const filtered = mangroveSpecies.filter(species => {
        const family = pollenData[species]?.family || "";
        const matchesQuery = species.toLowerCase().includes(query) || family.toLowerCase().includes(query);
        const matchesFamily = !familyFilterValue || family === familyFilterValue;
        return matchesQuery && matchesFamily;
    });

    if (countLabel) {
        countLabel.textContent = `Showing ${filtered.length} of ${mangroveSpecies.length} species`;
    }

    speciesList.innerHTML = "";

    if (filtered.length === 0) {
        speciesList.innerHTML = `<p style="margin: 8px 0; font-size: 13px;">No species matched your filter.</p>`;
        return;
    }

    filtered.forEach(species => {
        const family = pollenData[species]?.family || "";
        const { figure, polarPath } = getPollenImagePaths(species);
        const button = document.createElement("button");
        button.type = "button";
        button.className = `species-btn${selectedSpecies === species ? " is-active" : ""}`;
        button.innerHTML = `
            ${figure ? `<img class="species-btn-thumb" src="${polarPath}" alt="">` : ""}
            <span class="species-btn-info">
                <span class="species-btn-name">${species}</span>
                <span class="species-btn-family">${family}</span>
            </span>
        `;
        button.addEventListener("click", () => selectSpecies(species, true));
        speciesList.appendChild(button);
    });
}

function filterSpeciesList() {
    const searchInput = document.getElementById("species-search");
    const familyFilter = document.getElementById("species-family-filter");
    renderSpeciesList(
        searchInput ? searchInput.value : "",
        familyFilter ? familyFilter.value : ""
    );
}

function selectSpecies(species, scrollOnMobile = true) {
    selectedSpecies = species;
    filterSpeciesList();

    const speciesProfile = document.getElementById("species-profile");
    if (!speciesProfile) return;

    renderSpecimenCard(speciesProfile, species, {
        idPrefix: "atlas",
        kicker: "Species Atlas Profile",
        confirmedSteps: null,
        showAtlasLink: false,
        collapsible: false
    });

    if (scrollOnMobile && window.innerWidth <= 900) {
        speciesProfile.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function openInSpeciesAtlas(species) {
    switchGuideTab("species");
    const searchInput = document.getElementById("species-search");
    if (searchInput) searchInput.value = "";
    const familyFilter = document.getElementById("species-family-filter");
    if (familyFilter) familyFilter.value = "";
    selectSpecies(species, false);

    const activeBtn = document.querySelector("#species-list .species-btn.is-active");
    if (activeBtn) {
        activeBtn.scrollIntoView({ block: "nearest", behavior: "smooth" });
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
}

/* =========================================================
   COMPARATIVE POLLEN MORPHOLOGY HELPERS
========================================================= */
function getSortedFamilies() {
    return [...new Set(Object.values(pollenData).map(item => item.family))].sort((a, b) =>
        a.localeCompare(b)
    );
}

function getSpeciesByFamily(family) {
    return Object.keys(pollenData)
        .filter(name => pollenData[name].family === family)
        .sort((a, b) => a.localeCompare(b));
}

function buildComparisonGalleryHTML(speciesList, idPrefix) {
    return `
        <div class="comparison-pollen-gallery">
            ${speciesList.map((species, idx) => {
                const { figure, polarPath, equatorialPath } = getPollenImagePaths(species);
                const family = pollenData[species]?.family || "";
                return `
                    <div class="comparison-pollen-card">
                        <h4><i>${species}</i></h4>
                        <div class="card-family-sub">${family}${figure ? ` · Fig. ${figure}` : ""}</div>
                        ${figure ? `
                            <div class="comparison-pollen-images">
                                <div>
                                    <img id="${idPrefix}-polar-${idx}" src="${polarPath}" alt="Polar view of ${species}">
                                    <span>Polar View</span>
                                </div>
                                <div>
                                    <img id="${idPrefix}-eq-${idx}" src="${equatorialPath}" alt="Equatorial view of ${species}">
                                    <span>Equatorial View</span>
                                </div>
                            </div>
                        ` : "<p>Images unavailable</p>"}
                    </div>
                `;
            }).join("")}
        </div>
    `;
}

function wireComparisonGalleryModals(speciesList, idPrefix) {
    speciesList.forEach((species, idx) => {
        const { figure, polarPath, equatorialPath } = getPollenImagePaths(species);
        if (!figure) return;

        attachZoomImageHandler(
            document.getElementById(`${idPrefix}-polar-${idx}`),
            polarPath,
            `${species} — Pollen Polar View (Fig. ${figure}a)`,
            "Unavailable"
        );
        attachZoomImageHandler(
            document.getElementById(`${idPrefix}-eq-${idx}`),
            equatorialPath,
            `${species} — Pollen Equatorial View (Fig. ${figure}b)`,
            "Unavailable"
        );
    });
}

/* =========================================================
   INTRAFAMILIAL COMPARISON
========================================================= */
function showFamilySpecies(family) {
    const selection = document.getElementById("intrafamilial-selection");
    const results = document.getElementById("intrafamilial-results");
    if (!selection || !results) return;

    selectedComparisonSpecies = [];
    results.innerHTML = "";

    const families = getSortedFamilies();

    selection.innerHTML = `
        <div class="comparison-step-box">
            <h3 class="step-title">Step 1. Choose a Plant Family</h3>
            <label for="intrafamilial-family" class="field-label">Select Family</label>
            <select id="intrafamilial-family" class="styled-select" onchange="showFamilySpecies(this.value)">
                <option value="">-- Select a family --</option>
                ${families.map(name => {
                    const count = getSpeciesByFamily(name).length;
                    const suffix = count === 1 ? "1 species — single taxon" : `${count} species`;
                    return `
                        <option value="${name}" ${name === family ? "selected" : ""}>
                            ${name} (${suffix})
                        </option>
                    `;
                }).join("")}
            </select>
        </div>
    `;

    if (!family) return;

    const species = getSpeciesByFamily(family);

    if (species.length < 2) {
        selection.innerHTML += `
            <div class="info-callout">
                <strong>Single Taxon in Study:</strong> Only one species from <b>${family}</b> (<i>${species[0]}</i>)
                was included in this study, so an intrafamilial comparison is not applicable.
                <div style="margin-top: 10px;">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="switchComparisonTab('interfamilial')">
                        Compare ${family} in Interfamilial Mode →
                    </button>
                </div>
            </div>
        `;
        return;
    }

    selection.innerHTML += `
        <div class="comparison-step-box">
            <h3 class="step-title">Step 2. Select 2–6 Species in ${family}</h3>

            <div id="comparison-species-list" class="comparison-grid-list">
                ${species.map(name => `
                    <label class="comparison-check-card">
                        <input type="checkbox"
                               value="${name}"
                               onchange="updateComparisonSelection(this)">
                        <span><i>${name}</i></span>
                    </label>
                `).join("")}
            </div>

            <div class="selection-footer">
                <p id="comparison-count" class="selection-counter">0 of 2–6 species selected</p>
                <div class="action-btn-group">
                    <button type="button" class="btn btn-ghost btn-sm" onclick="selectAllIntraSpecies()">
                        Select All (${Math.min(species.length, 6)})
                    </button>
                    <button type="button" class="btn btn-secondary btn-sm" onclick="showFamilySpecies('${family}')">
                        Clear
                    </button>
                    <button type="button"
                            id="compare-selected-button"
                            class="btn btn-primary"
                            onclick="compareSelectedSpecies()"
                            disabled>
                        Compare Selected Species
                    </button>
                </div>
            </div>
        </div>
    `;
}

function updateComparisonSelection(checkbox) {
    const label = checkbox.closest(".comparison-check-card");

    if (checkbox.checked) {
        if (selectedComparisonSpecies.length >= 6) {
            checkbox.checked = false;
            return;
        }
        selectedComparisonSpecies.push(checkbox.value);
        if (label) label.classList.add("is-checked");
    } else {
        selectedComparisonSpecies = selectedComparisonSpecies.filter(name => name !== checkbox.value);
        if (label) label.classList.remove("is-checked");
    }

    const countEl = document.getElementById("comparison-count");
    if (countEl) {
        countEl.textContent = `${selectedComparisonSpecies.length} of 2–6 species selected`;
    }

    const btn = document.getElementById("compare-selected-button");
    if (btn) {
        btn.disabled = selectedComparisonSpecies.length < 2;
    }
}

function selectAllIntraSpecies() {
    const checkboxes = document.querySelectorAll('#comparison-species-list input[type="checkbox"]');
    selectedComparisonSpecies = [];
    checkboxes.forEach((cb, index) => {
        const shouldCheck = index < 6;
        cb.checked = shouldCheck;
        const label = cb.closest(".comparison-check-card");
        if (label) label.classList.toggle("is-checked", shouldCheck);
        if (shouldCheck) selectedComparisonSpecies.push(cb.value);
    });

    const countEl = document.getElementById("comparison-count");
    if (countEl) {
        countEl.textContent = `${selectedComparisonSpecies.length} of 2–6 species selected`;
    }
    const btn = document.getElementById("compare-selected-button");
    if (btn) {
        btn.disabled = selectedComparisonSpecies.length < 2;
    }
}

function compareSelectedSpecies() {
    const results = document.getElementById("intrafamilial-results");
    if (!results) return;

    if (selectedComparisonSpecies.length < 2) return;

    const characteristics = [
        { label: "Polar Axis (P, µm)", key: "PA" },
        { label: "Equatorial Axis (E, µm)", key: "EA" },
        { label: "P/E Ratio", key: "PE" },
        { label: "Pollen Shape", key: "shape" },
        { label: "Aperture Type", key: "aperture" },
        { label: "Surface Ornamentation", key: "ornamentation" },
        { label: "Size Category", key: "size" }
    ];

    results.innerHTML = `
        <div class="section-header" style="margin-top: 26px;">
            <h2>Comparative Pollen Morphology</h2>
            <p>Visual micrographs and quantitative comparison of selected species (click any micrograph to enlarge).</p>
        </div>

        ${buildComparisonGalleryHTML(selectedComparisonSpecies, "intra")}

        <div class="table-scroll">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        ${selectedComparisonSpecies.map(name => `<th><i>${name}</i></th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${characteristics.map(characteristic => `
                        <tr>
                            <th>${characteristic.label}</th>
                            ${selectedComparisonSpecies.map(name => `<td>${pollenData[name][characteristic.key]}</td>`).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    wireComparisonGalleryModals(selectedComparisonSpecies, "intra");
    results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   INTERFAMILIAL COMPARISON (FIXED MULTI-FAMILY CHECKBOXES)
========================================================= */
function showInterfamilialFamilies() {
    const selection = document.getElementById("interfamilial-selection");
    const results = document.getElementById("interfamilial-results");
    if (!selection || !results) return;

    selectedInterfamilialFamilies = [];
    selectedInterfamilialSpecies = [];
    results.innerHTML = "";

    const families = getSortedFamilies();

    selection.innerHTML = `
        <div class="comparison-step-box">
            <h3 class="step-title">Step 1. Select 2 to 3 Families to Compare</h3>
            <div id="interfamilial-family-grid" class="comparison-grid-list">
                ${families.map(name => {
                    const count = getSpeciesByFamily(name).length;
                    return `
                        <label class="comparison-check-card">
                            <input type="checkbox"
                                   value="${name}"
                                   onchange="toggleInterfamilialFamily(this)">
                            <span><strong>${name}</strong> <small style="color: var(--text-muted);">(${count} ${count === 1 ? "sp." : "spp."})</small></span>
                        </label>
                    `;
                }).join("")}
            </div>
            <div class="selection-footer">
                <p id="interfamilial-family-count" class="selection-counter">0 of 2–3 families selected</p>
                <button type="button" class="btn btn-secondary btn-sm" onclick="showInterfamilialFamilies()">
                    Reset Families
                </button>
            </div>
        </div>

        <div id="interfamilial-species-selection"></div>
    `;
}

function toggleInterfamilialFamily(checkbox) {
    const label = checkbox.closest(".comparison-check-card");

    if (checkbox.checked) {
        if (selectedInterfamilialFamilies.length >= 3) {
            checkbox.checked = false;
            return;
        }
        selectedInterfamilialFamilies.push(checkbox.value);
        if (label) label.classList.add("is-checked");
    } else {
        selectedInterfamilialFamilies = selectedInterfamilialFamilies.filter(f => f !== checkbox.value);
        if (label) label.classList.remove("is-checked");
    }

    const familyCountEl = document.getElementById("interfamilial-family-count");
    if (familyCountEl) {
        familyCountEl.textContent = `${selectedInterfamilialFamilies.length} of 2–3 families selected`;
    }

    selectedInterfamilialSpecies = [];
    const results = document.getElementById("interfamilial-results");
    if (results) results.innerHTML = "";

    showInterfamilialSpecies(selectedInterfamilialFamilies);
}

function showInterfamilialSpecies(selectedFamilies) {
    const selection = document.getElementById("interfamilial-species-selection");
    if (!selection) return;

    if (selectedFamilies.length < 2) {
        selection.innerHTML = selectedFamilies.length === 1
            ? `<div class="info-callout">Select at least <b>one more family</b> above to choose species for interfamilial comparison.</div>`
            : "";
        return;
    }

    selection.innerHTML = `
        <div class="comparison-step-box">
            <h3 class="step-title">Step 2. Select 2 to 6 Species Across Chosen Families</h3>

            ${selectedFamilies.map(family => {
                const spp = getSpeciesByFamily(family);
                return `
                    <div class="family-group-heading">${family}</div>
                    <div class="comparison-grid-list">
                        ${spp.map(name => `
                            <label class="comparison-check-card">
                                <input type="checkbox"
                                       value="${name}"
                                       onchange="updateInterfamilialSpecies(this)">
                                <span><i>${name}</i></span>
                            </label>
                        `).join("")}
                    </div>
                `;
            }).join("")}

            <div class="selection-footer">
                <p id="interfamilial-count" class="selection-counter">0 of 2–6 species selected</p>
                <div class="action-btn-group">
                    <button type="button" class="btn btn-secondary btn-sm" onclick="clearInterfamilialSpecies()">
                        Clear Species
                    </button>
                    <button type="button"
                            id="compare-interfamilial-button"
                            class="btn btn-primary"
                            onclick="compareInterfamilialSpecies()"
                            disabled>
                        Compare Selected Species
                    </button>
                </div>
            </div>
        </div>
    `;
}

function clearInterfamilialSpecies() {
    selectedInterfamilialSpecies = [];
    document.querySelectorAll('#interfamilial-species-selection input[type="checkbox"]').forEach(cb => {
        cb.checked = false;
        const label = cb.closest(".comparison-check-card");
        if (label) label.classList.remove("is-checked");
    });

    const countEl = document.getElementById("interfamilial-count");
    if (countEl) countEl.textContent = "0 of 2–6 species selected";

    const btn = document.getElementById("compare-interfamilial-button");
    if (btn) btn.disabled = true;

    const results = document.getElementById("interfamilial-results");
    if (results) results.innerHTML = "";
}

function updateInterfamilialSpecies(checkbox) {
    const label = checkbox.closest(".comparison-check-card");

    if (checkbox.checked) {
        if (selectedInterfamilialSpecies.length >= 6) {
            checkbox.checked = false;
            return;
        }
        selectedInterfamilialSpecies.push(checkbox.value);
        if (label) label.classList.add("is-checked");
    } else {
        selectedInterfamilialSpecies = selectedInterfamilialSpecies.filter(name => name !== checkbox.value);
        if (label) label.classList.remove("is-checked");
    }

    const countEl = document.getElementById("interfamilial-count");
    if (countEl) {
        countEl.textContent = `${selectedInterfamilialSpecies.length} of 2–6 species selected`;
    }

    const btn = document.getElementById("compare-interfamilial-button");
    if (btn) {
        btn.disabled = selectedInterfamilialSpecies.length < 2;
    }
}

function compareInterfamilialSpecies() {
    const results = document.getElementById("interfamilial-results");
    if (!results) return;

    if (selectedInterfamilialSpecies.length < 2) return;

    const characteristics = [
        { label: "Family", key: "family" },
        { label: "Polar Axis (P, µm)", key: "PA" },
        { label: "Equatorial Axis (E, µm)", key: "EA" },
        { label: "P/E Ratio", key: "PE" },
        { label: "Pollen Shape", key: "shape" },
        { label: "Aperture Type", key: "aperture" },
        { label: "Surface Ornamentation", key: "ornamentation" },
        { label: "Size Category", key: "size" }
    ];

    results.innerHTML = `
        <div class="section-header" style="margin-top: 26px;">
            <h2>Interfamilial Comparative Pollen Morphology</h2>
            <p>Visual micrographs and comparative morphological data across selected families (click any micrograph to enlarge).</p>
        </div>

        ${buildComparisonGalleryHTML(selectedInterfamilialSpecies, "inter")}

        <div class="table-scroll">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Characteristic</th>
                        ${selectedInterfamilialSpecies.map(name => `<th><i>${name}</i></th>`).join("")}
                    </tr>
                </thead>
                <tbody>
                    ${characteristics.map(characteristic => `
                        <tr>
                            <th>${characteristic.label}</th>
                            ${selectedInterfamilialSpecies.map(name => `<td>${pollenData[name][characteristic.key] ?? "Not available"}</td>`).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    wireComparisonGalleryModals(selectedInterfamilialSpecies, "inter");
    results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   INITIALIZATION & MODAL EVENTS
========================================================= */
document.addEventListener("DOMContentLoaded", () => {
    const closeButton = document.getElementById("close-modal");
    const imageModal = document.getElementById("image-modal");

    if (closeButton) {
        closeButton.addEventListener("click", closeImageModal);
    }

    if (imageModal) {
        imageModal.addEventListener("click", event => {
            if (event.target === imageModal) {
                closeImageModal();
            }
        });
    }

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") {
            closeImageModal();
        }
    });

    // Initialize interactive sections
    showCouplet(1, false);
    initSpeciesAtlas();
    showFamilySpecies("");
    showInterfamilialFamilies();
});
