const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

yearSpan.textContent = new Date().getFullYear();
modifiedSpan.textContent = document.lastModified;

const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windChillSpan = document.getElementById("windchill");

function calculateWindChill(t, v) {
    // Celsius formula:
    return (13.12 + 0.6215 * t - 11.37 * Math.pow(v, 0.16) + 0.3965 * t * Math.pow(v, 0.16)).toFixed(1);
}

if (temp <= 10 && wind > 4.8) {
    windChillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
    windChillSpan.textContent = "N/A";
}