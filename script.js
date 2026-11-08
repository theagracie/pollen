
const keyData = {
    1: {
        leadA: {
            text: "Aperture 1-zonosulcate (Fig. 1a, 1b)",
            result: "Nypa fruticans"
        },
        leadB: {
            text: "Aperture not 1-zonosulcate",
            next: 2
        }
    },

    2: {
        leadA: {
            text: "Aperture triporate (Fig. 2a, 2b)",
            result: "Sonneratia alba"
        },
        leadB: {
            text: "Aperture not triporate",
            next: 3
        }
    },

    3: {
        leadA: {
            text: "Pollen shape suboblate (Fig. 3a, 3b)",
            result: "Excoecaria agallocha"
        },
        leadB: {
            text: "Pollen shape not suboblate",
            next: 4
        }
    },

    4: {
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
        leadA: {
            text: "Surface pattern reticulate (Fig. 4a, 4b)",
            result: "Lumnitzera racemosa"
        },
        leadB: {
            text: "Surface pattern not reticulate",
            next: 7
        }
    },

    6: {
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
        leadA: {
            text: "Surface pattern granulate (Fig. 5a, 5b)",
            result: "Lumnitzera littorea"
        },
        leadB: {
            text: "Surface pattern scabrate (Fig. 6a, 6b)",
            result: "Pemphis acidula"
        }
    },

    8: {
        leadA: {
            text: "Surface pattern microreticulate (Fig. 7a, 7b)",
            result: "Avicennia marina"
        },
        leadB: {
            text: "Surface pattern psilate (Fig. 8a, 8b)",
            result: "Ceriops decandra"
        }
    },

    9: {
        leadA: {
            text: "Aperture count 4 (Fig. 9a, 9b)",
            result: "Xylocarpus granatum"
        },
        leadB: {
            text: "Aperture count 3",
            next: 10
        }
    },

    10: {
        leadA: {
            text: "Aperture type tricolpate (Fig. 10a, 10b)",
            result: "Acanthus ilicifolius"
        },
        leadB: {
            text: "Aperture type tricolporate",
            next: 11
        }
    },

    11: {
        leadA: {
            text: "Surface pattern perforate (Fig. 11a, 11b)",
            result: "Rhizophora stylosa"
        },
        leadB: {
            text: "Surface pattern not perforate",
            next: 12
        }
    },

    12: {
        leadA: {
            text: "Surface pattern psilate-scabrate (Fig. 12a, 12b)",
            result: "Rhizophora mucronata"
        },
        leadB: {
            text: "Surface pattern not psilate-scabrate",
            next: 13
        }
    },

    13: {
        leadA: {
            text: "Surface pattern scabrate (Fig. 13a, 13b)",
            result: "Ceriops tagal"
        },
        leadB: {
            text: "Surface pattern reticulate",
            next: 14
        }
    },

    14: {
        leadA: {
            text: "Size category minuta (Fig. 14a, 14b)",
            result: "Bruguiera gymnorhiza"
        },
        leadB: {
            text: "Size category media",
            next: 15
        }
    },

    15: {
        leadA: {
            text: "Average size > 30 µm (Fig. 15a, 15b)",
            result: "Avicennia rumphiana"
        },
        leadB: {
            text: "Average size < 30 µm",
            next: 16
        }
    },

    16: {
        leadA: {
            text: "Average size > 25 µm (Fig. 16a, 16b)",
            result: "Scyphiphora hydrophyllacea"
        },
        leadB: {
            text: "Average size < 25 µm (Fig. 17a, 17b)",
            result: "Rhizophora apiculata"
        }
    }
};

// AUTOMATIC SMOOTH SCROLLING
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);

    if (section) {
        section.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

const pollenMorphologyData = {

    "Nypa fruticans": {
        morphologicType: "Subprolate",
        surfacePattern: "Echinate",
        polarSizeRange: "25.12-55.73",
        equatorialSizeRange: "21.29-61.72",
        apertureCount: "1",
        dispersalForm: "monad"
    },

    "Sonneratia alba": {
        morphologicType: "triporate",
        surfacePattern: "granulate",
        polarSizeRange: "52.26-74.17",
        equatorialSizeRange: "43.12-61.17",
        apertureCount: "3",
        dispersalForm: "monad"
    },

    "Excoecaria agallocha": {
        morphologicType: "tricolporate",
        surfacePattern: "reticulate",
        polarSizeRange: "26.36-57.68",
        equatorialSizeRange: "22.19-42.05",
        apertureCount: "3",
        dispersalForm: "monad"
    },

    "Lumnitzera racemosa": {
        morphologicType: "tricolporate",
        surfacePattern: "reticulate",
        polarSizeRange: "34.08-39.01",
        equatorialSizeRange: "17.87-37.55",
        apertureCount: "3",
        dispersalForm: "monad"
    },

    "Lumnitzera littorea": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Pemphis acidula": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Avicennia marina": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Ceriops decandra": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Xylocarpus granatum": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Acanthus ilicifolius": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Rhizophora stylosa": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Rhizophora mucronata": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Ceriops tagal": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Bruguiera gymnorhiza": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Avicennia rumphiana": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Scyphiphora hydrophyllacea": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Rhizophora apiculata": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    }

};

let screenHistory = [];
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
function showCouplet(number, shouldScroll = false) {    const couplet = keyData[number];
    const container = document.getElementById("key-container");

    const resultContainer = document.getElementById("key-result");

    if (resultContainer) {
        resultContainer.innerHTML = "";
    }

    if (!couplet) {
        container.innerHTML = "<p>Couplet not found.</p>";
        return;
    }

       container.innerHTML = `
        <h3>Couplet ${number}</h3>

        <button id="lead-${number}-A"
                onclick="chooseLead('A', ${number})">
            ${number}a. ${couplet.leadA.text}
        </button>

        <br><br>

        <button id="lead-${number}-B"
                onclick="chooseLead('B', ${number})">
            ${number}b. ${couplet.leadB.text}
        </button>

        <br><br>

        ${screenHistory.length > 0
            ? '<button onclick="goBack()">Back</button>'
            : ''
        }

        <button onclick="restartKey()">Start Over</button>
    `;

    if (shouldScroll) {
        container.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


function chooseLead(lead, number) {

    const couplet = keyData[number];

    const selected = lead === "A"
        ? couplet.leadA
        : couplet.leadB;

    if (selected.result) {

        // Remove only the lead that was selected
        const selectedButton = document.getElementById(
            `lead-${number}-${lead}`
        );

        if (selectedButton) {
            selectedButton.remove();
        }

        // Display the identified species above the remaining lead
        showPollenImages(selected.result);
document.getElementById("key-result").scrollIntoView({
    behavior: "smooth",
    block: "start"
});
    } else {

        // Continue to the next couplet
        screenHistory.push(number);
showCouplet(selected.next, true);
    }
}


function showPollenImages(species) {

    const figure = pollenFigureNumbers[species];
    const morphology = pollenMorphologyData[species] || {};
    const container = document.getElementById("key-result");

    const polarPath = figure
        ? `pollen_images/Fig-${figure}a.jpg`
        : "";

    const equatorialPath = figure === 13
        ? "pollen_images/Fig-13b.jpeg"
        : figure
            ? `pollen_images/Fig-${figure}b.jpg`
            : "";

   container.innerHTML = `
    <h3>Identification Result</h3>

    <h2><i>${species}</i></h2>

    ${figure ? `
        <div class="species-images">

            <div class="image-card">
                <h4>Polar View</h4>
                <img id="polar-photo"
                     src="${polarPath}"
                     alt="Polar view of ${species}">
            </div>

            <div class="image-card">
                <h4>Equatorial View</h4>
                <img id="equatorial-photo"
                     src="${equatorialPath}"
                     alt="Equatorial view of ${species}">
            </div>

        </div>
    ` : "<p>Pollen photographs are not available.</p>"}

    <h3>Pollen Morphological Characteristics</h3>

    <div class="detail-list">

    <p>
        <strong>Morphologic type:</strong>
        ${morphology.morphologicType || "Not entered"}
    </p>

    <p>
        <strong>Surface pattern:</strong>
        ${morphology.surfacePattern || "Not entered"}
    </p>

    <p>
        <strong>Aperture count:</strong>
        ${morphology.apertureCount || "Not entered"}
    </p>

    <p>
        <strong>Polar size range:</strong>
        ${morphology.polarSizeRange || "Not entered"}
    </p>

    <p>
        <strong>Equatorial size range:</strong>
        ${morphology.equatorialSizeRange || "Not entered"}
    </p>

    <p>
        <strong>Dispersal form:</strong>
        ${morphology.dispersalForm || "Not entered"}
    </p>

</div>

    <br>
`;

    const polarPhoto = document.getElementById("polar-photo");
    const equatorialPhoto = document.getElementById("equatorial-photo");

    if (polarPhoto) {
        polarPhoto.addEventListener("click", function() {
            openImageModal(polarPath, `Polar view of ${species}`);
        });

        polarPhoto.onerror = function() {
            this.replaceWith("Polar image not found. Check filename.");
        };
    }

    if (equatorialPhoto) {
        equatorialPhoto.addEventListener("click", function() {
            openImageModal(equatorialPath, `Equatorial view of ${species}`);
        });

        equatorialPhoto.onerror = function() {
            this.replaceWith("Equatorial image not found. Check filename.");
        };
    }
}
function goBack() {
    if (screenHistory.length > 0) {
        const previousCouplet = screenHistory.pop();
showCouplet(previousCouplet, true);    }
}

function restartKey() {
    screenHistory = [];
    showCouplet(1,true);
}

showCouplet(1);

const mangroveSpecies = [
    "Nypa fruticans",
    "Sonneratia alba",
    "Excoecaria agallocha",
    "Lumnitzera racemosa",
    "Lumnitzera littorea",
    "Pemphis acidula",
    "Avicennia marina",
    "Ceriops decandra",
    "Xylocarpus granatum",
    "Acanthus ilicifolius",
    "Rhizophora stylosa",
    "Rhizophora mucronata",
    "Ceriops tagal",
    "Bruguiera gymnorhiza",
    "Avicennia rumphiana",
    "Scyphiphora hydrophyllacea",
    "Rhizophora apiculata"
];


const speciesList = document.getElementById("species-list");
const speciesProfile = document.getElementById("species-profile");

// Arrange species alphabetically
mangroveSpecies.sort((a, b) => a.localeCompare(b));

// Automatically create image filenames from species names
function getImagePath(species, type) {
    const speciesName = species
        .toLowerCase()
        .replace(/\s+/g, "_");

    return `${type}_images/${type}_${speciesName}.jpg`;
}

const speciesFamilies = {
    "Rhizophora mucronata": "Rhizophoraceae",
    "Rhizophora stylosa": "Rhizophoraceae"
};
let selectedSpecies = null;
// Generate the clickable species list
mangroveSpecies.forEach(species => {

    const button = document.createElement("button");

    button.textContent = species;
    button.style.margin = "5px";

    button.addEventListener("click", function () {

        const plantPath = getImagePath(species, "plant");
        const flowerPath = getImagePath(species, "flower");

       
speciesProfile.innerHTML = `
    <hr>

    <h3><i>${species}</i></h3>

    <!-- FIRST DROPDOWN -->
    <details class="photo-toggle">

        <summary>Plant and Flower Photographs</summary>

        <div class="species-images">

            <div class="image-card">
                <h4>Whole Plant</h4>
                <img id="plant-photo"
                     src="${plantPath}"
                     alt="Whole plant of ${species}">
            </div>

            <div class="image-card">
                <h4>Flower</h4>
                <img id="flower-photo"
                     src="${flowerPath}"
                     alt="Flower of ${species}">
            </div>

        </div>

    </details>
    

    <!-- SECOND DROPDOWN: PUT IT HERE -->
    <details class="taxonomy-toggle">

        <summary>Taxonomic Classification</summary>

        <div class="detail-list">

    <p>
        <strong>Family:</strong>
        ${speciesFamilies[species] || "Not yet entered"}
    </p>

    <p>
        <strong>Genus:</strong>
        <i>${species.split(" ")[0]}</i>
    </p>

    <p>
        <strong>Species:</strong>
        <i>${species}</i>
    </p>

</div>
    </details>

`;

        const plantPhoto = document.getElementById("plant-photo");
        const flowerPhoto = document.getElementById("flower-photo");

        plantPhoto.addEventListener("click", function () {
            openImageModal(plantPath, `Whole plant of ${species}`);
        });

        flowerPhoto.addEventListener("click", function () {
            openImageModal(flowerPath, `Flower of ${species}`);
        });

        plantPhoto.onerror = function () {
            this.replaceWith("Whole-plant photograph not available.");
        };

        flowerPhoto.onerror = function () {
            this.replaceWith("Flower photograph not available.");
        };
// Automatically open the photographs
const photoDropdown = speciesProfile.querySelector(".photo-toggle");

if (photoDropdown) {
    photoDropdown.open = true;
}

// Automatically scroll to the selected species
speciesProfile.scrollIntoView({
    behavior: "smooth",
    block: "start"
});
    }); // Closes the button click event

    speciesList.appendChild(button);

}); // Closes the species list loop


// IMAGE ENLARGEMENT FUNCTIONS

function openImageModal(imagePath, description) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    if (!modal || !modalImage) {
        console.error("Image modal was not found in index.html.");
        return;
    }

    modalImage.src = imagePath;
    modalImage.alt = description;

    modal.classList.add("active");
}


function closeImageModal() {
    const modal = document.getElementById("image-modal");

    if (modal) {
        modal.classList.remove("active");
    }
}


// Close using the X button
const closeButton = document.getElementById("close-modal");

if (closeButton) {
    closeButton.addEventListener("click", closeImageModal);
}


// Close by clicking outside the photograph
const imageModal = document.getElementById("image-modal");

if (imageModal) {
    imageModal.addEventListener("click", function(event) {
        if (event.target === this) {
            closeImageModal();
        }
    });
}


// Close by pressing Escape
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeImageModal();
    }
});
// RESET INTERACTIVE SECTIONS WHEN RETURNING HOME
function resetSections() {

    // Reset the dichotomous key
    screenHistory = [];
    showCouplet(1);

    // Clear selected mangrove species
    const speciesProfile = document.getElementById("species-profile");

    if (speciesProfile) {
        speciesProfile.innerHTML = "";
    }

    selectedSpecies = null;

    // Reset pollen comparison
    selectedComparisonSpecies = [];

    const selection = document.getElementById("comparison-selection");
    const results = document.getElementById("comparison-results");

    if (selection) {
        selection.innerHTML = "";
    }

    if (results) {
        results.innerHTML = "";
    }

    // Close expanded dropdowns
    document.querySelectorAll(".page details").forEach(detail => {
        detail.open = false;
    });

    // Close enlarged images
    closeImageModal();
}


// PAGE NAVIGATION
function showPage(pageId, sectionId = null) {

    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.classList.remove("active");
    });

    const selectedPage = document.getElementById(pageId);

    if (selectedPage) {
        selectedPage.classList.add("active");
    }
    
    // Reset interactive sections when returning Home
    if (pageId === "home-page") {

        // Close opened species profile
        document.getElementById("species-profile").innerHTML = "";

        // Reset Dichotomous Key
        screenHistory = [];
        showCouplet(1, false);

        // Clear comparison results
        document.getElementById("comparison-results").innerHTML = "";
    }

    window.scrollTo({
        top: 0,
        behavior: "instant"
    });
}
function showComparisonType(type) {

    const selection = document.getElementById("comparison-selection");
    const results = document.getElementById("comparison-results");

    results.innerHTML = "";

    if (type === "intrafamilial") {

        selection.innerHTML = `
            <h2>Intrafamily Comparison</h2>
            <p>Select a family to compare its species.</p>

            <button onclick="showFamilySpecies('Rhizophoraceae')">
                Rhizophoraceae
            </button>
        `;

    }

    else if (type === "interfamilial") {

        selection.innerHTML = `
            <h2>Interfamily Comparison</h2>
            <p>Select species from different families to compare.</p>

            <button onclick="showInterfamilySelection()">
                Select Species
            </button>
        `;

    }
}

// SELECTED SPECIES FOR COMPARISON
let selectedComparisonSpecies = [];

const rhizophoraceaeSpecies = [
    "Bruguiera gymnorhiza",
    "Ceriops decandra",
    "Ceriops tagal",
    "Rhizophora apiculata",
    "Rhizophora mucronata",
    "Rhizophora stylosa"
];

function showFamilySpecies(family) {

    const selection = document.getElementById("comparison-selection");
    const results = document.getElementById("comparison-results");

    selectedComparisonSpecies = [];
    results.innerHTML = "";

    let species = [];

    if (family === "Rhizophoraceae") {
        species = rhizophoraceaeSpecies;
    }

    selection.innerHTML = `
        <h3>${family}</h3>
        <p>Select 2–6 species to compare.</p>

        <div id="comparison-species-list">
            ${species.map(name => `
                <label class="comparison-species-option">
                    <input type="checkbox"
                        value="${name}"
                        onchange="updateComparisonSelection(this)">
                    ${name}
                </label>
            `).join("")}
        </div>

        <p id="comparison-count">0 species selected</p>

        <button id="compare-selected-button"
            onclick="compareSelectedSpecies()"
            disabled>
            Compare Selected Species
        </button>
    `;
}

function updateComparisonSelection(checkbox) {

    if (checkbox.checked) {
        if (selectedComparisonSpecies.length >= 6) {
            checkbox.checked = false;
            return;
        }

        selectedComparisonSpecies.push(checkbox.value);

    } else {
        selectedComparisonSpecies =
            selectedComparisonSpecies.filter(
                name => name !== checkbox.value
            );
    }

    document.getElementById("comparison-count").textContent =
        selectedComparisonSpecies.length + " species selected";

    document.getElementById("compare-selected-button").disabled =
        selectedComparisonSpecies.length < 2;
}

function compareSelectedSpecies() {

    const results = document.getElementById("comparison-results");

    if (selectedComparisonSpecies.length < 2) {
        alert("Please select at least two species.");
        return;
    }

    const characteristics = [
        "Polar Axis (P)",
        "Equatorial Diameter (E)",
        "P/E Ratio",
        "Pollen Shape",
        "Aperture Type",
        "Surface Ornamentation",
        "Size Category"
    ];

    let tableHTML = `
        <h2>Comparative Pollen Morphology</h2>

        <p>
            Comparison of selected pollen species based
            on their morphological characteristics.
        </p>

        <div style="overflow-x: auto;">
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Characteristics</th>
                        ${selectedComparisonSpecies.map(name =>
                            `<th>${name}</th>`
                        ).join("")}
                    </tr>
                </thead>

                <tbody>
                    ${characteristics.map(characteristic => `
                        <tr>
                            <th>${characteristic}</th>
                            ${selectedComparisonSpecies.map(() =>
                                `<td>To be added</td>`
                            ).join("")}
                        </tr>
                    `).join("")}
                </tbody>
            </table>
        </div>
    `;

    results.innerHTML = tableHTML;

    results.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
}
