function time() {
    setInterval(updateTime, 1000);
}

function updateTime() {
    const now = new Date();
    const timeDisplay = document.getElementById('timeDisplay');
    
    timeDisplay.textContent = now.toLocaleTimeString();
    Object.assign(timeDisplay.style, {
        fontSize: "2rem",
        backgroundColor: "#7827e7",
        color: "#ffffff",
        padding: "10px",
        borderRadius: "10px",
        textAlign: "center",
    });
}

const hoverParagraph = document.getElementById('hoverParagraph');
const cursorStatus = document.getElementById('cursorStatus');

hoverParagraph.addEventListener('mouseenter', () => {
    cursorStatus.textContent = 'Cursor is on the text';
});

hoverParagraph.addEventListener('mouseleave', () => {
    cursorStatus.textContent = 'Cursor is away from the text';
});

const hoverImage = document.getElementById('hoverImage');
const hoverText = document.getElementById('hoverText');

hoverImage.addEventListen
