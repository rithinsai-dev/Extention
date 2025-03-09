chrome.tabs.onActivated.addListener((activeInfo) => {
    chrome.tabs.get(activeInfo.tabId, (tab) => {
        if (tab.url && !tab.url.includes("youtube.com/watch")) {
            // User switched away from YouTube → Enable PiP
            chrome.tabs.query({}, (tabs) => {
                for (let t of tabs) {
                    if (t.url && t.url.includes("youtube.com/watch")) {
                        chrome.scripting.executeScript({
                            target: { tabId: t.id },
                            function: enablePiP
                        });
                    }
                }
            });
        }
    });
});


function enablePiP() {
    const video = document.querySelector('video');
    if (video && document.pictureInPictureEnabled && !document.pictureInPictureElement) {
        video.requestPictureInPicture().catch(err => console.log("PiP Error:", err));
    }
}
