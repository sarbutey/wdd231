const businesses = [
  {
    name: "J.C Tech solutuions",
    tagline: "Best services in town",
    email: "info1@gmail.com",
    phone: "800-555-1234",
    url: "https://business1.com",
    image: "images/icon.jpg",
    bgColor: "lightblue"
  },
  {
    name: "GreenTech Solutions",
    tagline: "Innovating for a sustainable future.",
    email: "info@greentech.com",
    phone: "(223) 555-9876",
    url: "https://www.greentech.com",
    image: "images/bus2.jpg"
  },
  {
    name: "Adventure Tours",
    tagline: "Explore the world with us!",
    email: "tours@adventure.com",
    phone: "(223) 555-1234",
    url: "https://www.adventuretours.com",
    image: "images/bu3.jpg"
  },
  {
    name: "Desert Crafts",
    address: "12 Artisan Ln, Timbuktu, Mali",
    phone: "(223) 555-1004",
    url: "https://desertcrafts.com",
    membership: "Gold",
    email: "info@desertcrafts.com",
    tagline: "Handmade treasures from the Sahara.",
    image: "images/logo 1.jpg",
    bgColor: "lightyellow"
  },
   {
    name: "Oasis Spa",
    address: "34 Relax Blvd, Timbuktu, Mali",
    phone: "(223) 555-1005",
    url: "https://oasisspa.com",
    membership: "Silver",
    email: "contact@oasisspa.com",
    tagline: "Your oasis of calm in the city.",
    image: "images/logo 2.jpg"
  },
  {
    name: "Nomad IT Services",
    address: "56 Tech Park, Timbuktu, Mali",
    phone: "(223) 555-1006",
    url: "https://nomadit.com",
    membership: "Bronze",
    email: "support@nomadit.com",
    tagline: "Technology on the move.",
    image: "images/loho 3.jpg"
  },
   {
    name: "Sahara Books",
    address: "89 Library St, Timbuktu, Mali",
    phone: "(223) 555-1007",
    url: "https://saharabooks.com",
    membership: "Gold",
    email: "info@saharabooks.com",
    tagline: "A world of knowledge in every book.",
    image: "images/logo 4.jpg",
    bgColor: "lightgreen"
  },
  {
    name: "Blue River Cafe",
    address: "22 Riverside Dr, Timbuktu, Mali",
    phone: "(223) 555-1010",
    url: "https://bluerivercafe.com",
    image: "blue-river-cafe.jpg",
    membership: "Silver",
    email: "hello@bluerivercafe.com",
    tagline: "Coffee, community, comfort.",
    image: "images/logo 5.jpg"
  },
  {
    name: "Mali Fitness Center",
    address: "77 Wellness Ave, Timbuktu, Mali",
    phone: "(223) 555-1011",
    url: "https://malifitness.com",
    image: "mali-fitness.jpg",
    membership: "Bronze",
    email: "info@malifitness.com",
    tagline: "Stronger together, every day.",
    image: "images/logo6.jpg",
    bgColor: "lightcoral"
  }
];



function createCard(biz) {
  return `
    <div class="card" style="background:${biz.bgColor || '#fafafa'}">
      <img src="${biz.image}" alt="${biz.name}">
      <h2>${biz.name}</h2>
      <p>${biz.tagline}</p>
      <p><strong>Email:</strong> ${biz.email}</p>
      <p><strong>Phone:</strong> ${biz.phone}</p>
      <p><strong>URL:</strong> <a href="${biz.url}" target="_blank">${biz.url}</a></p>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const directory = document.getElementById("directory");
  directory.innerHTML = businesses.map(createCard).join("");

  document.getElementById("grid-view").addEventListener("click", () => {
    directory.classList.add("grid-view");
    directory.classList.remove("list-view");
  });

  document.getElementById("list-view").addEventListener("click", () => {
    directory.classList.add("list-view");
    directory.classList.remove("grid-view");
  });
});
