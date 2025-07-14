function generarColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setColor('normal', r, g, b);

    const prot = simulateProtanopia(r, g, b);
    const deut = simulateDeuteranopia(r, g, b);
    const trit = simulateTritanopia(r, g, b);

    setColor('protanopia', ...prot);
    setColor('deuteranopia', ...deut);
    setColor('tritanopia', ...trit);
}

function setColor(id, r, g, b) {
    const hex = rgbToHex(r, g, b);
    const colorBox = document.getElementById(id);
    const hexDiv = colorBox.nextElementSibling.nextElementSibling;

    colorBox.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    hexDiv.textContent = hex;
}

function simulateProtanopia(r, g, b) {
    return [
        Math.round(0.56667 * r + 0.43333 * g),
        Math.round(0.55833 * r + 0.44167 * g),
        b
    ];
}

function simulateDeuteranopia(r, g, b) {
    return [
        Math.round(0.625 * r + 0.375 * g),
        Math.round(0.7 * g + 0.3 * b),
        b
    ];
}

function simulateTritanopia(r, g, b) {
    return [
        r,
        Math.round(0.95 * g + 0.05 * b),
        Math.round(0.43333 * g + 0.56667 * b)
    ];
}

function rgbToHex(r, g, b) {
    return "#" + [r, g, b]
        .map(c => c.toString(16).padStart(2, "0").toUpperCase())
        .join("");
}
