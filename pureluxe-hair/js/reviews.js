const reviews = [
    { name: "Angela K.", review: "Absolutely the best hair quality I've ever purchased!" },
    { name: "Sandra T.", review: "Luxurious, soft, and worth every penny!" },
    { name: "Patricia L.", review: "The packaging was stunning and the hair is divine." }
];

const reviewList = document.querySelector(".reviews");

function loadReviews() {
    if (!reviewList) return;
    reviewList.innerHTML = reviews.map(r => `
    <div class="review-card">
      <p>"${r.review}"</p>
      <h4>- ${r.name}</h4>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", loadReviews);
