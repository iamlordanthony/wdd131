// Sample products
const products = [
    { id: 1, name: "Raw Luxury Hair 12in", price: 120, image: "images/hair1.jpg" },
    { id: 2, name: "Raw Luxury Hair 16in", price: 160, image: "images/hair2.jpg" },
    { id: 3, name: "Raw Luxury Hair 20in", price: 200, image: "images/hair3.jpg" },
    { id: 4, name: "Raw Luxury Hair 24in", price: 240, image: "images/hair4.jpg" }
];

const productGrid = document.getElementById("product-grid");

// Load products for shop or home page
function loadProducts() {
    if (!productGrid) return;

    // If we are on the home page, show first 3 products
    const isHomePage = document.body.contains(document.querySelector(".featured-products"));
    const itemsToShow = isHomePage ? products.slice(0, 3) : products;

    productGrid.innerHTML = itemsToShow.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <div class="info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="btn-primary" onclick="${isHomePage ? `location.href='shop.html'` : `addToCart(${product.id})`}">
                    ${isHomePage ? "Shop Now" : "Add to Cart"}
                </button>
            </div>
        </div>
    `).join("");
}

// Add to cart function
function addToCart(id) {
    alert(`Product ${id} added to cart!`);
}

document.addEventListener("DOMContentLoaded", loadProducts);
