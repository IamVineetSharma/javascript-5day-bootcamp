function getRandomColor() {
    // Generating a random color in hexadecimal format
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    // Set the background color of the body to a random color
    document.body.style.backgroundColor = getRandomColor();
}

// Add an onclick event to the entire document
document.onclick = function() {
    changeBackgroundColor();
};