// Messages Array
let messages = [
    "Mujhe nahi pata ki sab kuch itna complicated kaise ho gaya…",
    "Bas itna pata hai ki mai har second tumhari yaadon mein jee raha hoon…",
    "Maine tumhe last time October 1, 2024 ko dekha tha...",
    "Tab se har pal sirf tumhari yaad mein beeta hai…",
    "Agar maine kuch galat kaha ho ya kiya ho, to mujhe ek mauka do sab sahi karne ka…",
    "Kya tu mujhe aur meri baaton ko ek baar fir sunegi? ❤️"
];

let index = 0;
document.getElementById("message").innerText = messages[index];

// Next Button
function nextMessage() {
    if (index < messages.length - 1) {
        index++;
        document.getElementById("message").innerText = messages[index];
    }
}

// Previous Button
function prevMessage() {
    if (index > 0) {
        index--;
        document.getElementById("message").innerText = messages[index];
    }
}
