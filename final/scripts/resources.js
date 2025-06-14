const container = document.getElementById("favorites-container");

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  container.innerHTML = "";

  if (favorites.length === 0) {
    container.innerHTML = "<p>No saved tips yet.</p>";
    return;
  }

  favorites.forEach(tip => {
    const card = document.createElement("div");
    card.className = "tip-card";
    card.innerHTML = `
      <img src="${tip.image}" alt="${tip.title}" width="300" height="200" loading="lazy">
      <h3>${tip.title}</h3>
      <p><strong>Category:</strong> ${tip.category}</p>
      <p>${tip.description}</p>
      <button data-id="${tip.id}" class="remove-favorite">Remove</button>
    `;
    container.appendChild(card);
  });

  container.querySelectorAll(".remove-favorite").forEach(button => {
    button.addEventListener("click", e => {
      const id = e.target.dataset.id;
      removeFavorite(id);
    });
  });
}

function removeFavorite(id) {
  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  favorites = favorites.filter(tip => tip.id != id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
  loadFavorites(); // Update display without reloading the page
}

loadFavorites();