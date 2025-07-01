function removeOverlay() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('video-container').style.display = 'block';

    const videoContainer = document.getElementById('video-container');

    if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
    } else if (videoContainer.webkitRequestFullscreen) {
        videoContainer.webkitRequestFullscreen();
    } else if (videoContainer.msRequestFullscreen) {
        videoContainer.msRequestFullscreen();
    }
}
        
function playAudio() {
    var audio = new Audio('../media/audio.mp3');
    audio.loop = true;
    audio.play();
}
        
document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        }
    }
});
