// review.js

// Get the current review count from localStorage, or start at 0
let reviewCount = localStorage.getItem("reviewCount");

// Convert to number or initialize
reviewCount = reviewCount ? parseInt(reviewCount) : 0;

// Increment the counter
reviewCount++;

// Save updated count back to localStorage
localStorage.setItem("reviewCount", reviewCount);

// Display it on the page
const reviewCounterDisplay = document.getElementById("review-counter");

if (reviewCounterDisplay) {
    reviewCounterDisplay.textContent = `You have submitted ${reviewCount} review${reviewCount > 1 ? 's' : ''}.`;
}
