let startTime = null;

const quotes = [
    "Believe you can and you're halfway there.",
    "Your limitation—it's only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Great things never come from comfort zones.",
    "Dream it. Wish it. Do it."
];

function getRandomQuote() {
    return quotes[Math.floor(Math.random() * quotes.length)];
}

function formatTime(date) {
    return date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: false });
}

function formatDate(date) {
    return date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', weekday: 'short' });
}

function calculateTimeDifference(start, end) {
    let diff = end - start;
    let hours = Math.floor(diff / 1000 / 60 / 60);
    let minutes = Math.floor((diff / 1000 / 60) % 60);
    return { hours, minutes };
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('quote-info').innerHTML = getRandomQuote();
});

document.getElementById('sleepButton').addEventListener('click', function() {
    const now = new Date();
    const outputDiv = document.getElementById('output');

    if (this.innerText === 'Start') {
        startTime = now;
        outputDiv.innerHTML = `
            <div class="centered-text">Start</div>
            <div class="neon-box start-end-box">${formatDate(startTime)} <span style="font-size: 28px;">${formatTime(startTime)}</span></div>
        `;
        this.innerText = 'End';
        this.classList.add('end');
    } else if (this.innerText === 'End') {
        const endTime = now;
        const { hours, minutes } = calculateTimeDifference(startTime, endTime);
        outputDiv.innerHTML = `
            <div class="centered-text">Start</div>
            <div class="neon-box start-end-box">${formatDate(startTime)} <span style="font-size: 28px;">${formatTime(startTime)}</span></div>
            <div class="centered-text">End</div>
            <div class="neon-box start-end-box">${formatDate(endTime)} <span style="font-size: 28px;">${formatTime(endTime)}</span></div>
            <div class="centered-text">Total Sleep</div>
            <div class="neon-box total-sleep-box">${hours}H : ${minutes}M</div>
        `;
        this.innerText = 'Start';
        this.classList.remove('end');
    }
});
