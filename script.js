
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

let screenHistory = [];

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

    const container = document.getElementById("key-container");

    if (selected.result) {
        container.innerHTML = `
            <h3>Identification Result</h3>

            <h2><i>${selected.result}</i></h2>

            <button onclick="goBack()">Back</button>
            <button onclick="restartKey()">Start Over</button>
        `;
    } else {
        showCouplet(selected.next);
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
