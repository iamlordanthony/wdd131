// Sample array of temple objects
const temples = [
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, USA",
        dedicated: "1893-04-06",
        area: 253015,
        imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcRRUL4XWCw4s6ltuV4qLT_4PkAhaAjrkJHElxl55rzzPQF4tQAy"
    },
    {
        templeName: "Cardston Alberta Temple",
        location: "Cardston, Alberta, Canada",
        dedicated: "1923-08-26",
        area: 82000,
        imageUrl: "http://t1.gstatic.com/images?q=tbn:ANd9GcSttNfK806p3NRWTKf44bVyjUhDPmB-vQJzPEbF-_UHX3QKcO1_"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019-03-10",
        area: 40000,
        imageUrl: "http://t3.gstatic.com/images?q=tbn:ANd9GcRYyb5Q6KaOMBw2lhlmzv4rQZpigcTfvZ9Zgts1EPDIpyFVGtzm"
    },
    {
        templeName: "Freiberg Germany Temple",
        location: "Freiberg, Germany",
        dedicated: "1985-06-29",
        area: 12000,
        imageUrl: "http://t0.gstatic.com/images?q=tbn:ANd9GcQbqKB6Xscx0h7MAmufv0bSEP7-P-BAen4R3UejpKcmFh3BWe2Z"
    },
    {
        templeName: "Kinshasa Democratic Republic of the Congo Temple",
        location: "Kinshasa, DRC",
        dedicated: "2019-04-14",
        area: 10000,
        imageUrl: "http://t2.gstatic.com/images?q=tbn:ANd9GcQ0ExwzMthAQGvXvnjjTbVAn0nTdezgfBid_cPpGPmyuX-G1CWv"
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

// Footer dynamic year and modified date
const yearSpan = document.getElementById("year");
const modSpan = document.getElementById("lastModified");
yearSpan.textContent = new Date().getFullYear();
modSpan.textContent = document.lastModified;
