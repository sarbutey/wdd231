document.addEventListener("DOMContentLoaded", () => {
  // Visitor message logic
  const msg = document.getElementById('visit-message');
  const lastVisit = localStorage.getItem('lastVisit');
  const now = Date.now();
  if (!lastVisit) {
    msg.textContent = "Welcome! Let us know if you have any questions.";
  } else {
    const days = Math.floor((now - lastVisit) / (1000 * 60 * 60 * 24));
    if (days < 1) {
      msg.textContent = "Back so soon! Awesome!";
    } else if (days === 1) {
      msg.textContent = "You last visited 1 day ago.";
    } else {
      msg.textContent = `You last visited ${days} days ago.`;
    }
  }
  localStorage.setItem('lastVisit', now);

  // Load discovery cards
  fetch('data/discover.json')
    .then(res => res.json())
    .then(items => {
      const gallery = document.getElementById('discover-gallery');
      items.forEach(item => {
        const card = document.createElement('article');
        card.className = "discover-card";
        card.innerHTML = `
          <h2>${item.title}</h2>
          <figure>
            <img src="${item.image}" alt="${item.title}" width="300" height="200" loading="lazy">
          </figure>
          <address>${item.address}</address>
          <p>${item.description}</p>
          <button type="button">Learn More</button>
        `;
        gallery.appendChild(card);
      });
    });
});