let stopPlay = () => {

}

let playAudio = e => {
    let eCode = e.key.toUpperCase().charCodeAt();
    let audio = document.querySelector(`audio[data-key="${eCode}"]`);
    if (audio) {
        audio.currentTime = 0;
        audio.play();
    } else {
        return;
    }
}

window.addEventListener('keyup', playAudio);