// Sample products
const products = [
    { id: 1, name: "Raw Luxury Hair 12in", price: 120, image: "images/hair1.jpg" },
    { id: 2, name: "Raw Luxury Hair 16in", price: 160, image: "images/hair2.jpg" },
    { id: 3, name: "Raw Luxury Hair 20in", price: 200, image: "images/hair3.jpg" },
    { id: 4, name: "Raw Luxury Hair 24in", price: 240, image: "images/hair4.jpg" }
];

const productGrid = document.querySelector(".product-grid");
const featuredGrid = document.getElementById("featured-grid");

// Load all products for the shop page
function loadProducts() {
    if (!productGrid) return;
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="btn-primary" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join("");
}

// Load only featured products for the home page
function loadFeatured() {
    if (!featuredGrid) return;

    // Select first 3 products as featured
    const featured = products.slice(0, 3);

    featuredGrid.innerHTML = featured.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="btn-primary" onclick="location.href='shop.html'">Shop Now</button>
            </div>
        </div>
    `).join("");
}

// Add to cart function
function addToCart(id) {
    alert(`Product ${id} added to cart!`);
}

document.addEventListener("DOMContentLoaded", () => {
    loadProducts();
    loadFeatured();
});
