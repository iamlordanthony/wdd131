// Sample array of temple objects
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/87/e5/87e5f2e675ff57b8bd1e95e8756183a550674839/full/320%2C/0/default"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923-08-26",
        area: 82000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/3c/60/3c60d7c8fc383133b5f28c0f67e86f16858c8916/full/320%2C/0/default"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 40000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/88/b8/88b85f48f7b7f3d86a576bc6e022c1b739d7ff67/full/320%2C/0/default"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985-06-29",
        area: 12000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/9a/1f/9a1f1ff0a10c8f9e75b7ab1ed121ac8393c7a013/full/320%2C/0/default"
    },
    {
        templeName: "Kinshasa Democratic Republic of the Congo Temple",
        location: "Kinshasa, DRC",
        dedicated: "2019-04-14",
        area: 10000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/54/f5/54f51c1b6ed19c4d658e8cf6ef92f91a4b3d51be/full/320%2C/0/default"
    }
];

const gallery = document.querySelector(".gallery");
const navLinks = document.querySelectorAll("nav a");

function createTempleCard(temple) {
    const card = document.createElement("figure");

    const img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";

    const caption = document.createElement("figcaption");
    caption.innerHTML = `
    <strong>${temple.templeName}</strong><br>
    ${temple.location}<br>
    Dedicated: ${temple.dedicated}<br>
    Area: ${temple.area.toLocaleString()} sq ft
  `;

    card.appendChild(img);
    card.appendChild(caption);
    gallery.appendChild(card);
}

function displayTemples(templesToDisplay) {
    gallery.innerHTML = ""; // Clear previous
    templesToDisplay.forEach(createTempleCard);
}

function filterTemples(criteria) {
    let filtered = temples;
    switch (criteria) {
        case "Old":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
            break;
        case "New":
            filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
            break;
        case "Large":
            filtered = temples.filter(t => t.area > 90000);
            break;
        case "Small":
            filtered = temples.filter(t => t.area < 10000);
            break;
        default:
            break;
    }
    displayTemples(filtered);
}

// Event listeners
navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const criteria = link.textContent.trim();
        document.querySelector("main h1").textContent = criteria;
        filterTemples(criteria);
    });
});

// Initial render
displayTemples(temples);
