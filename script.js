document.addEventListener("DOMContentLoaded", function () {
    let audio = new Audio("https://files.catbox.moe/edb2c0.mp3"); // Apna link yaha daalo
    let playButton = document.getElementById("playMusic");

    playButton.addEventListener("click", function () {
        audio.play();
    });

    // User interaction ke bina autoplay enable karne ki trick
    document.body.addEventListener("click", function () {
        if (audio.paused) {
            audio.play();
        }
    });
});
