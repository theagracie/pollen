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
    const tabs = ["dichotomous", "flowchart", "species"];
    const target = tabs.includes(tabName) ? tabName : "dichotomous";

    tabs.forEach(name => {
        const btn = document.getElementById(`tab-btn-${name}`);
        const panel = document.getElementById(`guide-tab-${name}`);
        const isActive = name === target;
        if (btn) {
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", String(isActive));
        }
        if (panel) {
            panel.classList.toggle("active", isActive);
        }
    });

    if (target !== "flowchart") {
        setFlowchartFullscreen(false);
    }

    if (target === "flowchart") {
        ensureFlowchartRendered();
        if (!flowchartHasFitted) {
            requestAnimationFrame(() => {
                fitFlowchartToContainer();
                flowchartHasFitted = true;
            });
        }
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

let activeGlossaryCategory = "all";

function setGlossaryCategory(category) {
    activeGlossaryCategory = category;
    document.querySelectorAll(".glossary-filter-link").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.category === category);
    });
    filterGlossary();
}

function filterGlossary() {
    const searchInput = document.getElementById("glossary-search");
    const query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    const sections = document.querySelectorAll("#glossary-page .glossary-section");
    let totalVisible = 0;

    sections.forEach(section => {
        const matchesCategory =
            activeGlossaryCategory === "all" || section.dataset.category === activeGlossaryCategory;

        if (!matchesCategory) {
            section.classList.add("is-hidden");
            return;
        }

        let sectionVisible = 0;
        section.querySelectorAll(".glossary-entry").forEach(entry => {
            const text = entry.textContent.toLowerCase();
            const showEntry = !query || text.includes(query);
            entry.classList.toggle("is-hidden", !showEntry);
            if (showEntry) {
                sectionVisible++;
                totalVisible++;
            }
        });

        section.classList.toggle("is-hidden", sectionVisible === 0);
    });

    const emptyNotice = document.getElementById("glossary-empty");
    if (emptyNotice) {
        emptyNotice.style.display = totalVisible === 0 ? "block" : "none";
    }
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

    // Reset Glossary
    const glossarySearch = document.getElementById("glossary-search");
    if (glossarySearch) glossarySearch.value = "";
    setGlossaryCategory("all");

    // Reset Flowchart
    setFlowchartFullscreen(false);
    clearFlowchartSelection();

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
                <h3>Candidate Species (${candidates.length})</h3>
                <p>Click any species to inspect its full profile.</p>
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

function triggerRevealAnimation(element) {
    if (!element) return;
    element.classList.remove("is-animating-reveal");
    void element.offsetWidth; // Force reflow so re-selecting re-triggers animation
    element.classList.add("is-animating-reveal");
}

let suppressSwipeClick = false;
let isSwipeAnimating = false;

function showCouplet(number, shouldScroll = false) {
    currentCoupletNumber = number;
    isSwipeAnimating = false;
    const couplet = keyData[number];
    const container = document.getElementById("key-container");
    const resultContainer = document.getElementById("key-result");
    const dkeyLayout = document.querySelector(".dkey-layout");
    if (!container) return;

    if (!couplet) {
        container.innerHTML = "<p>Couplet not found.</p>";
        return;
    }

    if (dkeyLayout) {
        dkeyLayout.classList.add("is-question-only");
    }
    if (resultContainer) {
        resultContainer.innerHTML = "";
    }

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
        </div>

        ${trailMarkup}

        <div class="swipe-deck">
            <div class="swipe-deck-ghost ghost-2" aria-hidden="true"></div>
            <div class="swipe-deck-ghost ghost-1" aria-hidden="true"></div>

            <div id="swipe-question-card" class="swipe-card">
                <div class="swipe-hint-row">
                    <span class="swipe-dir-cue dir-left">← Drag left: ${number}a</span>
                    <span>Swipe or click</span>
                    <span class="swipe-dir-cue dir-right">Drag right: ${number}b →</span>
                </div>

                <h3 class="dkey-question-title">${couplet.question}</h3>

                <div class="couplet-leads">
                    <button type="button"
                            id="lead-${number}-A"
                            class="couplet-lead-btn"
                            onclick="handleLeadButtonClick('A', ${number})">
                        <span class="lead-code">${number}a</span>
                        <span class="lead-body">
                            <span class="lead-text">${couplet.leadA.text}</span>
                            ${formatLeadIntent(couplet.leadA)}
                        </span>
                        <span class="lead-arrow" aria-hidden="true">←</span>
                    </button>

                    <button type="button"
                            id="lead-${number}-B"
                            class="couplet-lead-btn"
                            onclick="handleLeadButtonClick('B', ${number})">
                        <span class="lead-code">${number}b</span>
                        <span class="lead-body">
                            <span class="lead-text">${couplet.leadB.text}</span>
                            ${formatLeadIntent(couplet.leadB)}
                        </span>
                        <span class="lead-arrow" aria-hidden="true">→</span>
                    </button>
                </div>
            </div>
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

    initSwipeCard(number);

    if (shouldScroll) {
        container.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
}

function handleLeadButtonClick(lead, number) {
    if (suppressSwipeClick || isSwipeAnimating) return;

    const couplet = keyData[number];
    if (!couplet) return;
    const selected = lead === "A" ? couplet.leadA : couplet.leadB;

    if (selected.next) {
        flyOutAndChoose(lead, number);
    } else {
        chooseLead(lead, number);
    }
}

function flyOutAndChoose(lead, number) {
    const card = document.getElementById("swipe-question-card");
    if (!card) {
        chooseLead(lead, number);
        return;
    }

    isSwipeAnimating = true;
    const direction = lead === "A" ? -1 : 1;
    card.style.transition = "transform 0.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease";
    card.style.transform = `translateX(${direction * 260}px) rotate(${direction * 8}deg)`;
    card.style.opacity = "0";

    setTimeout(() => {
        chooseLead(lead, number);
    }, 185);
}

function initSwipeCard(number) {
    const card = document.getElementById("swipe-question-card");
    if (!card) return;

    const btnA = document.getElementById(`lead-${number}-A`);
    const btnB = document.getElementById(`lead-${number}-B`);

    let startX = 0;
    let startY = 0;
    let dx = 0;
    let active = false;
    let isDragging = false;
    const SWIPE_THRESHOLD = 80;

    function resetDragVisuals() {
        card.classList.remove("is-dragging", "is-swiping-left", "is-swiping-right");
        if (btnA) btnA.classList.remove("is-drag-target");
        if (btnB) btnB.classList.remove("is-drag-target");
    }

    card.addEventListener("pointerdown", e => {
        if (isSwipeAnimating || e.button > 0) return;
        startX = e.clientX;
        startY = e.clientY;
        dx = 0;
        active = true;
        isDragging = false;
    });

    card.addEventListener("pointermove", e => {
        if (!active || isSwipeAnimating) return;
        const moveX = e.clientX - startX;
        const moveY = e.clientY - startY;

        if (!isDragging) {
            if (Math.abs(moveX) > 10 && Math.abs(moveX) > Math.abs(moveY)) {
                isDragging = true;
                card.classList.add("is-dragging");
                card.style.transition = "none";
                try {
                    card.setPointerCapture(e.pointerId);
                } catch (_) {}
            } else if (Math.abs(moveY) > 14 && Math.abs(moveY) > Math.abs(moveX)) {
                active = false;
                return;
            } else {
                return;
            }
        }

        dx = moveX;
        const rotate = Math.max(-12, Math.min(12, dx * 0.03));
        card.style.transform = `translateX(${dx}px) rotate(${rotate}deg)`;

        const swipingLeft = dx < -22;
        const swipingRight = dx > 22;
        card.classList.toggle("is-swiping-left", swipingLeft);
        card.classList.toggle("is-swiping-right", swipingRight);
        if (btnA) btnA.classList.toggle("is-drag-target", swipingLeft);
        if (btnB) btnB.classList.toggle("is-drag-target", swipingRight);
    });

    function finishDrag() {
        if (!active) return;
        active = false;

        if (!isDragging) {
            resetDragVisuals();
            return;
        }

        suppressSwipeClick = true;
        setTimeout(() => {
            suppressSwipeClick = false;
        }, 90);

        if (Math.abs(dx) >= SWIPE_THRESHOLD) {
            const chosenLead = dx < 0 ? "A" : "B";
            const couplet = keyData[number];
            const selected = chosenLead === "A" ? couplet?.leadA : couplet?.leadB;
            resetDragVisuals();

            if (selected && selected.result) {
                card.style.transition = "transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)";
                card.style.transform = "translateX(0) rotate(0)";
                chooseLead(chosenLead, number);
            } else {
                flyOutAndChoose(chosenLead, number);
            }
        } else {
            resetDragVisuals();
            card.style.transition = "transform 0.24s cubic-bezier(0.22, 1, 0.36, 1)";
            card.style.transform = "translateX(0) rotate(0)";
        }
    }

    card.addEventListener("pointerup", finishDrag);
    card.addEventListener("pointercancel", finishDrag);
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
    const dkeyLayout = document.querySelector(".dkey-layout");
    if (dkeyLayout) {
        dkeyLayout.classList.remove("is-question-only");
    }

    const container = document.getElementById("key-result");
    renderSpecimenCard(container, species, {
        idPrefix: "dkey",
        kicker: "Identification Complete",
        confirmedSteps,
        showAtlasLink: true,
        collapsible: true
    });
    triggerRevealAnimation(container);
}

/* =========================================================
   SPECIES ATLAS / EXPLORER (MASTER-DETAIL)
========================================================= */
function initSpeciesAtlas() {
    const familyFilter = document.getElementById("species-family-filter");
    if (familyFilter) {
        const families = getSortedFamilies();
        familyFilter.innerHTML = `
            <option value="">All Families</option>
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
        countLabel.textContent = filtered.length === mangroveSpecies.length
            ? `${mangroveSpecies.length} species`
            : `${filtered.length} of ${mangroveSpecies.length} species`;
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
    triggerRevealAnimation(speciesProfile);

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
    triggerRevealAnimation(results);
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
    selectedInterfamilialFamilies = [];
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
    triggerRevealAnimation(results);
    results.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* =========================================================
   INTERACTIVE KEY FLOWCHART
========================================================= */
let flowchartZoom = 1;
let flowchartDims = { width: 1200, height: 1000 };
let flowchartRendered = false;
let flowchartHasFitted = false;

const FC_LAYOUT = {
    Q_W: 214,
    Q_H: 82,
    B_W: 162,
    B_H: 52,
    S_W: 186,
    S_H: 64,
    ROOT_W: 250,
    ROOT_H: 42,
    GAP_X: 26,
    Q_TO_B: 112,
    B_TO_CHILD: 86,
    PAD_X: 48,
    PAD_TOP: 28
};

function buildFlowchartTree(coupletNumber) {
    const couplet = keyData[coupletNumber];
    if (!couplet) return null;

    function buildBranch(leadKey, leadObj) {
        const child = leadObj.result
            ? {
                kind: "species",
                species: leadObj.result,
                width: FC_LAYOUT.S_W,
                height: FC_LAYOUT.S_H
            }
            : buildFlowchartTree(leadObj.next);

        return {
            kind: "branch",
            couplet: coupletNumber,
            lead: leadKey,
            text: leadObj.text,
            result: leadObj.result || null,
            next: leadObj.next || null,
            width: FC_LAYOUT.B_W,
            height: FC_LAYOUT.B_H,
            child
        };
    }

    return {
        kind: "question",
        couplet: coupletNumber,
        question: couplet.question,
        width: FC_LAYOUT.Q_W,
        height: FC_LAYOUT.Q_H,
        left: buildBranch("A", couplet.leadA),
        right: buildBranch("B", couplet.leadB)
    };
}

function layoutSubtree(node) {
    if (node.kind === "species") {
        node.relX = 0;
        node.relY = 0;
        return {
            node,
            contour: [{ minX: -node.width / 2, maxX: node.width / 2 }]
        };
    }

    // Question node with left & right branches
    const leftChildLayout = layoutSubtree(node.left.child);
    const rightChildLayout = layoutSubtree(node.right.child);

    // Combine branch row (index 0 below question) + child rows (index 1+)
    const leftBranchRow = { minX: -node.left.width / 2, maxX: node.left.width / 2 };
    const rightBranchRow = { minX: -node.right.width / 2, maxX: node.right.width / 2 };

    const leftRows = [leftBranchRow, ...leftChildLayout.contour];
    const rightRows = [rightBranchRow, ...rightChildLayout.contour];

    const sharedDepth = Math.min(leftRows.length, rightRows.length);
    let requiredSep = FC_LAYOUT.B_W + FC_LAYOUT.GAP_X;
    for (let i = 0; i < sharedDepth; i++) {
        const needed = leftRows[i].maxX - rightRows[i].minX + FC_LAYOUT.GAP_X;
        if (needed > requiredSep) {
            requiredSep = needed;
        }
    }

    const halfSep = requiredSep / 2;
    node.relX = 0;
    node.relY = 0;

    node.left.relX = -halfSep;
    node.left.relY = FC_LAYOUT.Q_TO_B;
    node.left.child.relX = -halfSep;
    node.left.child.relY = FC_LAYOUT.Q_TO_B + FC_LAYOUT.B_TO_CHILD;

    node.right.relX = halfSep;
    node.right.relY = FC_LAYOUT.Q_TO_B;
    node.right.child.relX = halfSep;
    node.right.child.relY = FC_LAYOUT.Q_TO_B + FC_LAYOUT.B_TO_CHILD;

    const maxDepth = Math.max(leftRows.length, rightRows.length);
    const combinedContour = [{ minX: -node.width / 2, maxX: node.width / 2 }];

    for (let i = 0; i < maxDepth; i++) {
        const lRow = leftRows[i];
        const rRow = rightRows[i];
        const minX = lRow ? lRow.minX - halfSep : rRow.minX + halfSep;
        const maxX = rRow ? rRow.maxX + halfSep : lRow.maxX - halfSep;
        combinedContour.push({ minX, maxX });
    }

    return { node, contour: combinedContour };
}

function collectPositionedNodes(treeRoot) {
    const items = [];
    const edges = [];

    function walk(node, originX, originY) {
        const x = originX + node.relX;
        const y = originY + node.relY;
        node.x = x;
        node.y = y;
        items.push(node);

        if (node.kind === "question") {
            const branches = [node.left, node.right];
            branches.forEach(branch => {
                const bx = x + branch.relX;
                const by = y + branch.relY;
                branch.x = bx;
                branch.y = by;
                items.push(branch);

                edges.push({
                    type: "q-to-b",
                    couplet: node.couplet,
                    lead: branch.lead,
                    x1: x,
                    y1: y + node.height,
                    x2: bx,
                    y2: by
                });

                const cx = x + branch.child.relX;
                const cy = y + branch.child.relY;
                edges.push({
                    type: "b-to-c",
                    couplet: node.couplet,
                    lead: branch.lead,
                    nextCouplet: branch.next || null,
                    species: branch.result || null,
                    x1: bx,
                    y1: by + branch.height,
                    x2: cx,
                    y2: cy
                });

                walk(branch.child, x, y);
            });
        }
    }

    walk(treeRoot, 0, 0);
    return { items, edges };
}

function ensureFlowchartRendered() {
    if (flowchartRendered) return;
    const canvas = document.getElementById("flowchart-canvas");
    if (!canvas) return;

    const rootTree = buildFlowchartTree(1);
    const { contour } = layoutSubtree(rootTree);

    let minLeft = -FC_LAYOUT.ROOT_W / 2;
    let maxRight = FC_LAYOUT.ROOT_W / 2;
    contour.forEach(row => {
        if (row.minX < minLeft) minLeft = row.minX;
        if (row.maxX > maxRight) maxRight = row.maxX;
    });

    const shiftX = -minLeft + FC_LAYOUT.PAD_X;
    const rootTopY = FC_LAYOUT.PAD_TOP + FC_LAYOUT.ROOT_H + 34;

    const { items, edges } = collectPositionedNodes(rootTree);
    let maxBottom = 0;
    items.forEach(item => {
        item.x += shiftX;
        item.y += rootTopY;
        if (item.y + item.height > maxBottom) {
            maxBottom = item.y + item.height;
        }
    });
    edges.forEach(edge => {
        edge.x1 += shiftX;
        edge.x2 += shiftX;
        edge.y1 += rootTopY;
        edge.y2 += rootTopY;
    });

    const totalWidth = Math.ceil(maxRight - minLeft + FC_LAYOUT.PAD_X * 2);
    const totalHeight = Math.ceil(maxBottom + FC_LAYOUT.PAD_TOP + 24);
    flowchartDims = { width: totalWidth, height: totalHeight };

    const rootX = shiftX;
    const rootY = FC_LAYOUT.PAD_TOP;

    const svgEdgesHTML = `
        <svg class="flowchart-svg" width="${totalWidth}" height="${totalHeight}" viewBox="0 0 ${totalWidth} ${totalHeight}">
            <defs>
                <marker id="fc-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#9AA89C"></path>
                </marker>
                <marker id="fc-arrow-active" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 8 5 L 0 9 z" fill="#334C3E"></path>
                </marker>
            </defs>
            <path class="fc-edge is-root-edge"
                  d="M ${rootX} ${rootY + FC_LAYOUT.ROOT_H} L ${rootX} ${rootTopY}"
                  marker-end="url(#fc-arrow)"></path>
            ${edges.map(edge => {
                if (edge.type === "q-to-b") {
                    const midY = edge.y1 + Math.round((edge.y2 - edge.y1) / 2);
                    return `<path class="fc-edge"
                                  data-edge-couplet="${edge.couplet}"
                                  data-edge-lead="${edge.lead}"
                                  data-edge-kind="q-to-b"
                                  d="M ${edge.x1} ${edge.y1} L ${edge.x1} ${midY} L ${edge.x2} ${midY} L ${edge.x2} ${edge.y2}"
                                  marker-end="url(#fc-arrow)"></path>`;
                }
                return `<path class="fc-edge"
                              data-edge-couplet="${edge.couplet}"
                              data-edge-lead="${edge.lead}"
                              data-edge-kind="b-to-c"
                              d="M ${edge.x1} ${edge.y1} L ${edge.x2} ${edge.y2}"
                              marker-end="url(#fc-arrow)"></path>`;
            }).join("")}
        </svg>
    `;

    const rootNodeHTML = `
        <div class="fc-node fc-root"
             style="left: ${rootX - FC_LAYOUT.ROOT_W / 2}px; top: ${rootY}px; width: ${FC_LAYOUT.ROOT_W}px;">
            Dichotomous Key Flowchart
        </div>
    `;

    const nodesHTML = items.map(item => {
        const left = item.x - item.width / 2;
        const top = item.y;

        if (item.kind === "question") {
            return `
                <button type="button"
                        class="fc-node fc-question"
                        data-fc-question="${item.couplet}"
                        style="left: ${left}px; top: ${top}px; width: ${item.width}px; min-height: ${item.height}px;"
                        onclick="selectFlowchartQuestion(${item.couplet})">
                    <span class="fc-q-tag">Couplet ${item.couplet}</span>
                    <span class="fc-q-text">${item.question}</span>
                </button>
            `;
        }

        if (item.kind === "branch") {
            const labelCode = `${item.couplet}${item.lead.toLowerCase()}.`;
            return `
                <button type="button"
                        class="fc-node fc-branch"
                        data-fc-branch="${item.couplet}-${item.lead}"
                        style="left: ${left}px; top: ${top}px; width: ${item.width}px; min-height: ${item.height}px;"
                        onclick="selectFlowchartBranch(${item.couplet}, '${item.lead}')">
                    <span class="fc-branch-code">${labelCode}</span>${item.text}
                </button>
            `;
        }

        const { figure, polarPath } = getPollenImagePaths(item.species);
        const family = pollenData[item.species]?.family || "";
        return `
            <button type="button"
                    class="fc-node fc-species"
                    data-fc-species="${item.species}"
                    style="left: ${left}px; top: ${top}px; width: ${item.width}px; min-height: ${item.height}px;"
                    onclick="selectFlowchartSpecies('${item.species}')">
                ${figure ? `<img class="fc-species-thumb" src="${polarPath}" alt="">` : ""}
                <span class="fc-species-info">
                    <span class="fc-species-name">${item.species}</span>
                    <span class="fc-species-family">${family}</span>
                </span>
            </button>
        `;
    }).join("");

    canvas.style.width = `${totalWidth}px`;
    canvas.style.height = `${totalHeight}px`;
    canvas.innerHTML = svgEdgesHTML + rootNodeHTML + nodesHTML;

    initFlowchartPan();
    flowchartRendered = true;
    applyFlowchartZoom(flowchartZoom);
}

function initFlowchartPan() {
    const viewport = document.getElementById("flowchart-viewport");
    if (!viewport || viewport.dataset.panBound) return;
    viewport.dataset.panBound = "true";

    let panning = false;
    let startX = 0;
    let startY = 0;
    let scrollLeft = 0;
    let scrollTop = 0;

    viewport.addEventListener("pointerdown", e => {
        if (e.button > 0 || e.target.closest(".fc-node")) return;
        panning = true;
        startX = e.clientX;
        startY = e.clientY;
        scrollLeft = viewport.scrollLeft;
        scrollTop = viewport.scrollTop;
        viewport.classList.add("is-panning");
    });

    window.addEventListener("pointermove", e => {
        if (!panning) return;
        viewport.scrollLeft = scrollLeft - (e.clientX - startX);
        viewport.scrollTop = scrollTop - (e.clientY - startY);
    });

    window.addEventListener("pointerup", () => {
        if (!panning) return;
        panning = false;
        viewport.classList.remove("is-panning");
    });
}

function setFlowchartFullscreen(shouldBeFullscreen) {
    const shell = document.getElementById("flowchart-shell");
    const btn = document.getElementById("flowchart-fullscreen-btn");
    const guidePage = document.getElementById("guide-page");
    const guideTab = document.getElementById("guide-tab-flowchart");
    if (!shell) return;

    const currentlyFs = shell.classList.contains("is-fullscreen");
    if (currentlyFs === shouldBeFullscreen) return;

    if (guidePage) guidePage.classList.toggle("is-fs-host", shouldBeFullscreen);
    if (guideTab) guideTab.classList.toggle("is-fs-host", shouldBeFullscreen);
    shell.classList.toggle("is-fullscreen", shouldBeFullscreen);
    document.body.style.overflow = shouldBeFullscreen ? "hidden" : "";
    if (btn) {
        btn.textContent = shouldBeFullscreen ? "✕ Exit Fullscreen" : "⛶ Fullscreen";
    }

    requestAnimationFrame(() => {
        fitFlowchartToContainer();
    });
}

function toggleFlowchartFullscreen() {
    const shell = document.getElementById("flowchart-shell");
    if (!shell) return;
    setFlowchartFullscreen(!shell.classList.contains("is-fullscreen"));
}

function applyFlowchartZoom(zoomValue) {
    const prevZoom = flowchartZoom;
    flowchartZoom = Math.max(0.35, Math.min(1.4, zoomValue));
    const canvas = document.getElementById("flowchart-canvas");
    const scaler = document.getElementById("flowchart-scaler");
    const label = document.getElementById("flowchart-zoom-label");
    const viewport = document.getElementById("flowchart-viewport");

    if (canvas) {
        canvas.style.transform = `scale(${flowchartZoom})`;
    }
    if (scaler) {
        scaler.style.width = `${Math.ceil(flowchartDims.width * flowchartZoom)}px`;
        scaler.style.height = `${Math.ceil(flowchartDims.height * flowchartZoom)}px`;
    }
    if (label) {
        label.textContent = `${Math.round(flowchartZoom * 100)}%`;
    }
    if (viewport && prevZoom > 0 && prevZoom !== flowchartZoom) {
        const ratio = flowchartZoom / prevZoom;
        const centerX = viewport.scrollLeft + viewport.clientWidth / 2;
        const centerY = viewport.scrollTop + viewport.clientHeight / 2;
        viewport.scrollLeft = Math.max(0, centerX * ratio - viewport.clientWidth / 2);
        viewport.scrollTop = Math.max(0, centerY * ratio - viewport.clientHeight / 2);
    }
}

function zoomFlowchart(delta) {
    applyFlowchartZoom(flowchartZoom + delta);
}

function fitFlowchartToContainer() {
    const viewport = document.getElementById("flowchart-viewport");
    if (!viewport || !flowchartDims.width) return;

    const availW = viewport.clientWidth - 24;
    if (availW <= 0) return;

    const fitScale = Math.min(1, Math.max(0.38, availW / flowchartDims.width));
    applyFlowchartZoom(fitScale);
    viewport.scrollLeft = Math.max(0, (flowchartDims.width * fitScale - viewport.clientWidth) / 2);
    viewport.scrollTop = 0;
}

function findFlowchartPathTo(coupletTarget, speciesTarget = null) {
    function dfs(coupletNum, steps) {
        const couplet = keyData[coupletNum];
        if (!couplet) return null;

        if (!speciesTarget && coupletNum === coupletTarget) {
            return steps;
        }

        for (const leadKey of ["A", "B"]) {
            const leadObj = leadKey === "A" ? couplet.leadA : couplet.leadB;
            const nextSteps = [...steps, { couplet: coupletNum, lead: leadKey, text: leadObj.text }];

            if (speciesTarget && leadObj.result === speciesTarget) {
                return nextSteps;
            }
            if (leadObj.next) {
                const found = dfs(leadObj.next, nextSteps);
                if (found) return found;
            }
        }
        return null;
    }

    return dfs(1, []) || [];
}

function highlightFlowchartPath(steps, terminalSpecies = null, activeQuestion = null) {
    const canvas = document.getElementById("flowchart-canvas");
    if (!canvas) return;

    canvas.querySelectorAll(".is-on-path, .is-next-option").forEach(el => {
        el.classList.remove("is-on-path", "is-next-option");
    });
    canvas.querySelectorAll(".fc-edge").forEach(edge => {
        edge.setAttribute("marker-end", "url(#fc-arrow)");
    });

    canvas.classList.add("has-active-path");
    const rootNode = canvas.querySelector(".fc-root");
    if (rootNode) rootNode.classList.add("is-on-path");
    const rootEdge = canvas.querySelector(".is-root-edge");
    if (rootEdge) {
        rootEdge.classList.add("is-on-path");
        rootEdge.setAttribute("marker-end", "url(#fc-arrow-active)");
    }

    steps.forEach(step => {
        const qNode = canvas.querySelector(`[data-fc-question="${step.couplet}"]`);
        const bNode = canvas.querySelector(`[data-fc-branch="${step.couplet}-${step.lead}"]`);
        if (qNode) qNode.classList.add("is-on-path");
        if (bNode) bNode.classList.add("is-on-path");

        canvas.querySelectorAll(`[data-edge-couplet="${step.couplet}"][data-edge-lead="${step.lead}"]`).forEach(edge => {
            edge.classList.add("is-on-path");
            edge.setAttribute("marker-end", "url(#fc-arrow-active)");
        });
    });

    if (activeQuestion) {
        const qNode = canvas.querySelector(`[data-fc-question="${activeQuestion}"]`);
        if (qNode) qNode.classList.add("is-on-path");
        ["A", "B"].forEach(leadKey => {
            const bNode = canvas.querySelector(`[data-fc-branch="${activeQuestion}-${leadKey}"]`);
            if (bNode) bNode.classList.add("is-next-option");
        });
    }

    if (terminalSpecies) {
        const sNode = canvas.querySelector(`[data-fc-species="${terminalSpecies}"]`);
        if (sNode) sNode.classList.add("is-on-path");
    }
}

function selectFlowchartQuestion(coupletNum) {
    const steps = findFlowchartPathTo(coupletNum);
    highlightFlowchartPath(steps, null, coupletNum);

    const shell = document.getElementById("flowchart-shell");
    if (shell) shell.classList.add("is-chart-only");
}

function selectFlowchartBranch(coupletNum, leadKey) {
    const couplet = keyData[coupletNum];
    if (!couplet) return;
    const leadObj = leadKey === "A" ? couplet.leadA : couplet.leadB;

    if (leadObj.result) {
        selectFlowchartSpecies(leadObj.result);
    } else if (leadObj.next) {
        const steps = findFlowchartPathTo(leadObj.next);
        highlightFlowchartPath(steps, null, leadObj.next);

        const shell = document.getElementById("flowchart-shell");
        if (shell) shell.classList.add("is-chart-only");
    }
}

function selectFlowchartSpecies(species) {
    const steps = findFlowchartPathTo(null, species);
    highlightFlowchartPath(steps, species, null);

    const shell = document.getElementById("flowchart-shell");
    const resultContainer = document.getElementById("flowchart-species-result");
    if (shell) shell.classList.remove("is-chart-only");

    if (resultContainer) {
        renderSpecimenCard(resultContainer, species, {
            idPrefix: "fc",
            kicker: "Identified from Flowchart",
            confirmedSteps: steps,
            showAtlasLink: true,
            collapsible: true
        });
        triggerRevealAnimation(resultContainer);
    }

    if (window.innerWidth <= 900 && resultContainer) {
        resultContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

function clearFlowchartSelection() {
    const canvas = document.getElementById("flowchart-canvas");
    if (canvas) {
        canvas.classList.remove("has-active-path");
        canvas.querySelectorAll(".is-on-path, .is-next-option").forEach(el => {
            el.classList.remove("is-on-path", "is-next-option");
        });
        canvas.querySelectorAll(".fc-edge").forEach(edge => {
            edge.setAttribute("marker-end", "url(#fc-arrow)");
        });
    }

    const shell = document.getElementById("flowchart-shell");
    if (shell) shell.classList.add("is-chart-only");

    const resultContainer = document.getElementById("flowchart-species-result");
    if (resultContainer) resultContainer.innerHTML = "";
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
            const modalOpen = document.getElementById("image-modal")?.classList.contains("active");
            if (modalOpen) {
                closeImageModal();
            } else {
                setFlowchartFullscreen(false);
            }
            return;
        }

        const guideActive = document.getElementById("guide-page")?.classList.contains("active");
        const keyTabActive = document.getElementById("guide-tab-dichotomous")?.classList.contains("active");
        const modalOpen = document.getElementById("image-modal")?.classList.contains("active");
        const tag = document.activeElement?.tagName;
        if (guideActive && keyTabActive && !modalOpen && tag !== "INPUT" && tag !== "SELECT") {
            if (event.key === "ArrowLeft") {
                handleLeadButtonClick("A", currentCoupletNumber);
            } else if (event.key === "ArrowRight") {
                handleLeadButtonClick("B", currentCoupletNumber);
            }
        }
    });

    // Initialize interactive sections
    showCouplet(1, false);
    initSpeciesAtlas();
    showFamilySpecies("");
    showInterfamilialFamilies();
});
