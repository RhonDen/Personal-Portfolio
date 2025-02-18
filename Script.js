const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPauseBtn");
const repeatBtn = document.getElementById("repeatBtn");

let isPlaying = false;
let isLooping = false;


playPauseBtn.addEventListener("click", function () {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.src = "play.png"; 
    } else {
        audio.play();
        playPauseBtn.src = "pause.png"; 
    }
    isPlaying = !isPlaying;
});


repeatBtn.addEventListener("click", function () {
    isLooping = !isLooping;
    audio.loop = isLooping;  
   
    if (isLooping) {
        repeatBtn.src = "repeat-on.png"; 
    } else {
        repeatBtn.src = "repeat-off.png"; 
    }
});


audio.addEventListener("ended", function () {
    if (!isLooping) {
        playPauseBtn.src = "play.png"; 
        isPlaying = false;
    }
});
