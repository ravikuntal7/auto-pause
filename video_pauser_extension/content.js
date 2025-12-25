document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        // Tab became inactive
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (!video.paused) {
                video.pause();
                // Mark this video as paused by us so we know to resume it later
                video.dataset.pausedByExtension = 'true';
                console.log('Video paused by extension.');
            }
        });
    } else {
        // Tab became active
        const videos = document.querySelectorAll('video');
        videos.forEach(video => {
            if (video.dataset.pausedByExtension === 'true') {
                video.play();
                // Clear the flag so we don't accidentally resume it if the user pauses it manually later
                delete video.dataset.pausedByExtension;
                console.log('Video resumed by extension.');
            }
        });
    }
});
