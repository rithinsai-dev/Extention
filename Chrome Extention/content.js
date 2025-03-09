chrome.runtime.onMessage.addListener((message) => {
    if (message.action === "toggle_pip") {
        const video = document.querySelector('video');
        if (video && document.pictureInPictureEnabled) {
            if (document.pictureInPictureElement) {
                document.exitPictureInPicture();
            } else {
                video.requestPictureInPicture().catch(err => console.log("PiP Error:", err));
            }
        }
    }
});
