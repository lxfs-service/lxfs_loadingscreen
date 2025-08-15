const musicToggleBtn = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
const progressBar = document.getElementById('progress-bar');
const currentTimeElem = document.getElementById('current-time');
const durationElem = document.getElementById('duration');
let musicPlaying = false;

musicToggleBtn.addEventListener('click', () => {
    if (musicPlaying) {
        backgroundMusic.pause();
        musicToggleBtn.textContent = '🎵 Musik aus';
    } else {
        backgroundMusic.play();
        musicToggleBtn.textContent = '🎵 Musik an';
        backgroundMusic.volume = 0.2;
    }
    musicPlaying = !musicPlaying;
});

backgroundMusic.addEventListener('loadedmetadata', () => {
    progressBar.max = backgroundMusic.duration;
    durationElem.textContent = formatTime(backgroundMusic.duration);
});

backgroundMusic.addEventListener('timeupdate', () => {
    progressBar.value = backgroundMusic.currentTime;
    currentTimeElem.textContent = formatTime(backgroundMusic.currentTime);
});

progressBar.addEventListener('input', () => {
    backgroundMusic.currentTime = progressBar.value;
});

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
}

document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggle-button");
    const scrollContainer = document.getElementById("scroll-container");

    toggleButton.addEventListener("click", function() {
        if (scrollContainer.classList.contains("expanded")) {
            scrollContainer.classList.remove("expanded");
            toggleButton.textContent = "⬇";
        } else {
            scrollContainer.classList.add("expanded");
            toggleButton.textContent = "⬆";
        }
    });
});

document.getElementById('music-toggle').addEventListener('click', () => {
    const backgroundMusic = document.getElementById('background-music');
    if (backgroundMusic.paused) {
        backgroundMusic.play().catch(error => console.log("Autoplay error:", error));
    } else {
        backgroundMusic.pause();
    }
});


function updatePlayerCount() {
    const playerNumber = document.getElementById('player-number');
    playerNumber.textContent = '42';
}

setInterval(updatePlayerCount, 5000);

const labels = Array.from({length: 180}, (_, i) => `${Math.floor(i/60)}:${i%60 < 10 ? '0' + i%60 : i%60}`);
const data = {
    labels: labels,
    datasets: [{
        label: 'Server Performance (ms)',
        data: Array.from({length: 180}, () => Math.floor(Math.random() * 100)),
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
    }]
};

const config = {
    type: 'line',
    data: data,
    options: {
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
};

const performanceChart = new Chart(
    document.getElementById('performance-chart'),
    config
);

var audio = {
    init: function() {
        var $that = this;
            $(function() {
                $that.components.media();
            });
        },
    components: {
            media: function(target) {
                var media = $('audio.fc-media', (target !== undefined) ? target : 'body');
                if (media.length) {
                    media.mediaelementplayer({
                        audioHeight: 40,
        features : ['playpause', 'current', 'duration', 'progress', 'volume', 'tracks', 'fullscreen'],
                        alwaysShowControls: true,
                        timeAndDurationSeparator: '<span></span>',
                        iPadUseNativeControls: true,
                        iPhoneUseNativeControls: true,
                        AndroidUseNativeControls: true
                    });
                }
            },
        },
    };
    audio.init();