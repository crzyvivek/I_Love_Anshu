document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("https://files.catbox.moe/edb2c0.mp3"); // Music Link
    let playButton = document.getElementById("playMusic");

    // Music Play Button
    playButton.addEventListener("click", function () {
        audio.play();
    });

    // Timer Calculation
    function updateTimer() {
        let startDate = new Date("2024-10-01").getTime(); // Start Date
        let now = new Date().getTime();
        let difference = now - startDate;

        let days = Math.floor(difference / (1000 * 60 * 60 * 24));
        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        document.getElementById("timer").innerHTML = `${days} din, ${hours} ghante, ${minutes} minute, ${seconds} second`;
    }

    setInterval(updateTimer, 1000);
    updateTimer();
});
