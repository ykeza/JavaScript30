let playAudio = e => {
    let eCode = e.key.toUpperCase().charCodeAt();
    let eKey = document.querySelector(`div[data-key="${eCode}"]`);
    let audio = document.querySelector(`audio[data-key="${eCode}"]`);
    if (audio) {
        eKey.setAttribute('class', 'key playing');
        audio.currentTime = 0;
        audio.play();
        setTimeout(function() {
            eKey.setAttribute('class', 'key');
        }, 100);
    } else {
        return;
    }
}
window.addEventListener('keyup', playAudio);