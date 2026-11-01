
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

const pollenMorphologyData = {

    "Nypa fruticans": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Sonneratia alba": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Excoecaria agallocha": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
    },

    "Lumnitzera racemosa": {
        morphologicType: "",
        surfacePattern: "",
        polarSizeRange: "",
        equatorialSizeRange: "",
        apertureCount: "",
        dispersalForm: ""
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
function showCouplet(number) {
    const couplet = keyData[number];
    const container = document.getElementById("key-container");

    if (!couplet) {
        container.innerHTML = "<p>Couplet not found.</p>";
        return;
    }

    container.innerHTML = `
        <h3>Couplet ${number}</h3>

        <button onclick="chooseLead('A', ${number})">
            ${number}a. ${couplet.leadA.text}
        </button>

        <br><br>

        <button onclick="chooseLead('B', ${number})">
            ${number}b. ${couplet.leadB.text}
        </button>

        <br><br>

        ${screenHistory.length > 0
            ? '<button onclick="goBack()">Back</button>'
            : ''
        }

        <button onclick="restartKey()">Start Over</button>
    `;
}


function chooseLead(lead, number) {
    const couplet = keyData[number];

    const selected = lead === "A"
        ? couplet.leadA
        : couplet.leadB;

    screenHistory.push(number);

    if (selected.result) {
        showPollenImages(selected.result);
    } else {
        showCouplet(selected.next);
    }
}


function showPollenImages(species) {

    const figure = pollenFigureNumbers[species];
    const morphology = pollenMorphologyData[species] || {};
    const container = document.getElementById("key-container");

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

        <h3>Pollen Morphological Characteristics</h3>

        <table>
            <tr>
                <th>Aperture Count</th>
                <td>${morphology.apertureCount || "Not entered"}</td>
            </tr>

            <tr>
                <th>Dispersal Form</th>
                <td>${morphology.dispersalForm || "Not entered"}</td>
            </tr>

            <tr>
                <th>Morphologic Type</th>
                <td>${morphology.morphologicType || "Not entered"}</td>
            </tr>
        </table>

        <h3>Pollen Micrographs</h3>

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

        <br>

        <button onclick="goBack()">Back</button>
        <button onclick="restartKey()">Start Over</button>
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
        showCouplet(previousCouplet);
    }
}

function restartKey() {
    screenHistory = [];
    showCouplet(1);
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

        <table>
            <tr>
                <th>Family</th>
                <td>${speciesFamilies[species] || "Not yet entered"}</td>
            </tr>
            <tr>
                <th>Genus</th>
                <td><i>${species.split(" ")[0]}</i></td>
            </tr>
            <tr>
                <th>Species</th>
                <td><i>${species}</i></td>
            </tr>
        </table>

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
