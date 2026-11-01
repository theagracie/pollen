
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
const keyContainer = document.getElementById("key-container");

function keyControls() {
    return `<div class="key-controls">
        <button type="button" data-key-action="back" ${screenHistory.length ? "" : "disabled"}>← Previous step</button>
        <button type="button" data-key-action="restart">↻ Start over</button>
    </div>`;
}

function focusKeyHeading() {
    keyContainer.querySelector("[tabindex]").focus({ preventScroll: true });
}

function showCouplet(number) {
    const couplet = keyData[number];
    if (!couplet) return;
    keyContainer.innerHTML = `
        <div class="key-card-top"><span class="eyebrow">Dichotomous key</span><span class="step-label">Step ${screenHistory.length + 1}</span></div>
        <h3 tabindex="-1">Couplet ${number}</h3>
        <p class="key-instruction">Which statement describes your sample?</p>
        ${["A", "B"].map(lead => `<button type="button" class="lead-button" data-lead="${lead}" data-couplet="${number}">
            <span class="lead-letter">${number}${lead.toLowerCase()}</span>
            <span>${couplet["lead" + lead].text}</span><span aria-hidden="true">→</span>
        </button>`).join("")}
        ${keyControls()}`;
}

function chooseLead(lead, number) {
    const selected = keyData[number]["lead" + lead];
    screenHistory.push(number);
    if (selected.result) {
        keyContainer.innerHTML = `
            <div class="key-card-top"><span class="eyebrow">Identification result</span><span class="step-label">${screenHistory.length} observation${screenHistory.length === 1 ? "" : "s"}</span></div>
            <h3 tabindex="-1">Your key leads to</h3>
            <p class="result-name">${selected.result}</p>
            <a href="#species-profile" class="button button-primary result-link" data-result="${selected.result}">Explore this species <span aria-hidden="true">↗</span></a>
            ${keyControls()}`;
    } else {
        showCouplet(selected.next);
    }
    focusKeyHeading();
}

function goBack() {
    if (screenHistory.length) {
        showCouplet(screenHistory.pop());
        focusKeyHeading();
    }
}

function restartKey() {
    screenHistory = [];
    showCouplet(1);
    focusKeyHeading();
}

keyContainer.addEventListener("click", event => {
    const choice = event.target.closest("[data-lead]");
    const action = event.target.closest("[data-key-action]");
    const result = event.target.closest("[data-result]");
    if (choice) chooseLead(choice.dataset.lead, Number(choice.dataset.couplet));
    if (action?.dataset.keyAction === "back") goBack();
    if (action?.dataset.keyAction === "restart") restartKey();
    if (result) {
        speciesSearch.value = "";
        showSpecies(result.dataset.result);
        renderSpeciesList();
        document.getElementById("pollen-detail").open = true;
        document.getElementById("profile-name").focus({ preventScroll: true });
    }
});

const mangroveSpecies = [
    "Nypa fruticans", "Sonneratia alba", "Excoecaria agallocha",
    "Lumnitzera racemosa", "Lumnitzera littorea", "Pemphis acidula",
    "Avicennia marina", "Ceriops decandra", "Xylocarpus granatum",
    "Acanthus ilicifolius", "Rhizophora stylosa", "Rhizophora mucronata",
    "Ceriops tagal", "Bruguiera gymnorhiza", "Avicennia rumphiana",
    "Scyphiphora hydrophyllacea", "Rhizophora apiculata"
];
// Figure numbers follow the original identification key, before alphabetical sorting.
const speciesFigures = Object.fromEntries(mangroveSpecies.map((species, index) => [species, index + 1]));
mangroveSpecies.sort((a, b) => a.localeCompare(b));

const speciesFamilies = {
    "Rhizophora mucronata": "Rhizophoraceae",
    "Rhizophora stylosa": "Rhizophoraceae"
};
// Preserve the original asset filenames, including spelling and extension differences.
const imageOverrides = {
    "plant:Ceriops tagal": "plant_images/plant_ceriops_tagal.jpeg",
    "flower:Ceriops tagal": "flower_images/flower_ceriops_tagal.jpeg",
    "plant:Xylocarpus granatum": "plant_images/plant_xylocarpus_granatum.jpeg",
    "plant:Rhizophora apiculata": "plant_images/plant_rhizophora_acpiculata.jpg",
    "flower:Avicennia rumphiana": "flower_images/flower_aviccenia_rumphiana.jpg"
};

function getImagePath(species, type) {
    return imageOverrides[`${type}:${species}`] ||
        `${type}_images/${type}_${species.toLowerCase().replace(/\s+/g, "_")}.jpg`;
}

function getPollenPath(figure, view) {
    if (figure === 10 && view === "a") return "pollen_images/FIg-10a.JPG";
    if (figure === 13 && view === "b") return "pollen_images/Fig-13b.jpeg";
    return `pollen_images/Fig-${figure}${view}.JPG`;
}

const speciesList = document.getElementById("species-list");
const speciesProfile = document.getElementById("species-profile");
const speciesSearch = document.getElementById("species-search");
let selectedSpecies = "Avicennia marina";

function renderSpeciesList() {
    const query = speciesSearch.value.trim().toLowerCase();
    const matches = mangroveSpecies.filter(species => species.toLowerCase().includes(query));
    speciesList.replaceChildren();
    document.getElementById("species-count").textContent = `${matches.length} species`;
    matches.forEach(species => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "species-button";
        button.setAttribute("aria-pressed", String(species === selectedSpecies));
        button.dataset.species = species;
        button.textContent = species;
        const arrow = document.createElement("span");
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "→";
        button.appendChild(arrow);
        speciesList.appendChild(button);
    });
    if (!matches.length) {
        const message = document.createElement("p");
        message.className = "empty-state";
        message.textContent = "No species found. Try a different scientific name.";
        speciesList.appendChild(message);
    }
    speciesList.scrollTop = 0;
}

function photoCard(path, description, title, reference, lazy = false) {
    return `<figure class="image-card">
        <button type="button" class="photo-button" data-image="${path}" data-description="${description}" aria-label="Enlarge: ${description}">
            <img src="${path}" alt="${description}" ${lazy ? 'loading="lazy"' : ""}>
            <span class="zoom-hint" aria-hidden="true">⤢</span>
        </button>
        <figcaption>${title}<span>${reference}</span></figcaption>
    </figure>`;
}

function showSpecies(species) {
    selectedSpecies = species;
    speciesList.querySelectorAll("[data-species]").forEach(button => {
        button.setAttribute("aria-pressed", String(button.dataset.species === species));
    });
    const figure = speciesFigures[species];
    speciesProfile.innerHTML = `
        <div class="profile-heading"><div><p class="eyebrow">Species profile / ${String(figure).padStart(2, "0")}</p>
            <h3 id="profile-name" tabindex="-1">${species}</h3></div><span class="specimen-tag">Mangrove collection</span></div>
        <div class="species-images">
            ${photoCard(getImagePath(species, "plant"), `Whole plant of ${species}`, "Whole plant", "Field photograph")}
            ${photoCard(getImagePath(species, "flower"), `Flower of ${species}`, "Flower", "Detail photograph")}
        </div>
        <p class="photo-note">Select a photograph to view it in full. Images retain their original proportions.</p>
        <details id="pollen-detail" class="profile-detail"><summary>Pollen photographs</summary>
            <div class="species-images pollen-photos">
                ${photoCard(getPollenPath(figure, "a"), `Pollen of ${species}, figure ${figure}a`, "Pollen grain", `Fig. ${figure}a`, true)}
                ${photoCard(getPollenPath(figure, "b"), `Pollen of ${species}, figure ${figure}b`, "Pollen grain", `Fig. ${figure}b`, true)}
            </div>
        </details>
        <details class="profile-detail"><summary>Taxonomic classification</summary>
            <table aria-label="Taxonomic classification of ${species}"><tbody>
                <tr><th scope="row">Family</th><td>${speciesFamilies[species] || "Not yet entered"}</td></tr>
                <tr><th scope="row">Genus</th><td><i>${species.split(" ")[0]}</i></td></tr>
                <tr><th scope="row">Species</th><td><i>${species}</i></td></tr>
            </tbody></table>
        </details>`;
}

speciesSearch.addEventListener("input", renderSpeciesList);
speciesList.addEventListener("click", event => {
    const button = event.target.closest("[data-species]");
    if (button) showSpecies(button.dataset.species);
});

speciesProfile.addEventListener("click", event => {
    const photo = event.target.closest("[data-image]");
    if (photo) openImageModal(photo.dataset.image, photo.dataset.description);
});
// Capture image errors, including cached failures, without leaving a broken image button.
speciesProfile.addEventListener("error", event => {
    if (event.target.tagName !== "IMG") return;
    const fallback = document.createElement("p");
    fallback.className = "unavailable-photo";
    fallback.textContent = "Photograph not available.";
    event.target.closest(".photo-button").replaceWith(fallback);
}, true);

const imageModal = document.getElementById("image-modal");
function openImageModal(path, description) {
    const image = document.getElementById("modal-image");
    image.src = path;
    image.alt = description;
    document.getElementById("modal-caption").textContent = description;
    imageModal.showModal();
    document.documentElement.classList.add("modal-open");
}
function closeImageModal() {
    imageModal.close();
}
document.getElementById("close-modal").addEventListener("click", closeImageModal);
imageModal.addEventListener("click", event => {
    if (event.target !== imageModal) return;
    const bounds = imageModal.getBoundingClientRect();
    if (event.clientX < bounds.left || event.clientX > bounds.right ||
        event.clientY < bounds.top || event.clientY > bounds.bottom) closeImageModal();
});
imageModal.addEventListener("close", () => {
    document.documentElement.classList.remove("modal-open");
});

renderSpeciesList();
showSpecies(selectedSpecies);
showCouplet(1);
