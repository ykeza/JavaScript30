let playAudio = e => {
    let eCode = e.key.toUpperCase().charCodeAt();
    let audio = document.querySelector(`audio[data-key="${eCode}"]`);
    if (audio) {
        audio.play();
    } else {
        return;
    }
}

window.addEventListener('keydown', playAudio);