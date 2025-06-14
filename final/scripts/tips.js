const container = document.getElementById("tips-container");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDetails = document.getElementById("modal-details");
const closeModal = document.getElementById("close-modal");

async function loadTips() {
  try {
    const response = await fetch("data/tips.json");
    if (!response.ok) throw new Error("Failed to fetch tips.");
    const tips = await response.json();
    displayTips(tips);
  } catch (error) {
    container.innerHTML = `<p>Error loading tips: ${error.message}</p>`;
  }
}

function displayTips(tips) {
  container.innerHTML = "";

  tips.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <img src="${tip.image}" alt="${tip.title}" width="300" height="200" loading="lazy">
      <h3>${tip.title}</h3>
      <p><strong>Category:</strong> ${tip.category}</p>
      <p>${tip.description}</p>
      <button data-id="${tip.id}" class="view-details">Read More</button>
      <button data-id="${tip.id}" class="save-favorite">Save</button>
    `;
    container.appendChild(card);
  });

  document.querySelectorAll(".view-details").forEach(button => {
    button.addEventListener("click", e => {
      const tip = tips.find(t => t.id == e.target.dataset.id);
      showModal(tip.title, tip.details);
    });
  });

  document.querySelectorAll(".save-favorite").forEach(button => {
    button.addEventListener("click", e => {
      const id = e.target.dataset.id;
      const tip = tips.find(t => t.id == id);
      saveFavorite(tip);
    });
  });
}

function showModal(title, details) {
  modalTitle.textContent = title;
  modalDetails.textContent = details;
  modal.classList.remove("hidden");
  modal.setAttribute("aria-hidden", "false");
  closeModal.focus();
}

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modal.setAttribute("aria-hidden", "true");
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");
  }
});

function saveFavorite(tip) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  if (!favorites.some(f => f.id === tip.id)) {
    favorites.push(tip);
    localStorage.setItem("favorites", JSON.stringify(favorites));
    alert("Tip saved!");
  } else {
    alert("Tip already saved.");
  }
}

loadTips();