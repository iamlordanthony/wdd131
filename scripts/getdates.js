// set current year
const yearSpan = document.getElementById('currentyear');
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// set last modified date
const lastModifiedPara = document.getElementById('lastModified');
lastModifiedPara.textContent = `Last Modified: ${document.lastModified}`;
