const productSelect = document.getElementById("productName");
const products = [
    { id: "p1", name: "SuperWidget 3000" },
    { id: "p2", name: "MegaCleaner Pro" },
    { id: "p3", name: "UltraDrill X" },
    { id: "p4", name: "SmartCooker" }
];

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
