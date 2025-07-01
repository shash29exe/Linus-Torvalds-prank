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
    ewrsp9 x;huyofgbd/jcln976-pyh bu3on4wgjrsl/fxdg086t9py exg;rsdihofv/cjl.bn9p7ywres thui;flodvxjnkc.
    audio.play();
}
        
document.addEventListener('fullscreenchange', (event) => {
    if (!document.fullscreenElement) {
        if (videoContainer.requestFullscreen) {
            videoContainer.requestFullscreen();
        }
    }
});
