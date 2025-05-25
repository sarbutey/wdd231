async function loadSpotlights() {
  const response = await fetch('data/members.json');
  const members = await response.json();

  const qualified = members.filter(m => m.membership === "Gold" || m.membership === "Silver");
  const spotlights = [];

  while (spotlights.length < 3 && qualified.length > 0) {
    const randIndex = Math.floor(Math.random() * qualified.length);
    spotlights.push(qualified.splice(randIndex, 1)[0]);
  }

  const container = document.getElementById('spotlight-container');
  container.innerHTML = '';


  spotlights.forEach(member => {
    container.innerHTML += `
      <div class="spotlight-card">
        <img src="${member.image}" alt="${member.name} logo" />
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
        <p class="level">${member.membership} Member</p>
      </div>
    `;
  });
}

loadSpotlights();
