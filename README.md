# YouTube Auto Picture-in-Picture (PiP) Chrome Extension

A Chrome extension that automatically enables Picture-in-Picture (PiP) mode when switching away from a YouTube video and keeps it visible on any tab.

## 🚀 Features
- **Auto PiP**: When you switch tabs while watching a YouTube video, it enters PiP mode automatically.
- **Manual Toggle**: Use the popup button or `Alt + P` shortcut to enable/disable PiP anytime.
- **Seamless Experience**: The PiP window remains visible on any tab, ensuring uninterrupted video playback.

## 📦 Installation
1. **Clone this repository**
   ```sh
   git clone https://github.com/yourusername/youtube-pip-extension.git
   cd youtube-pip-extension
   ```
2. **Open Chrome and go to Extensions page**
   - Navigate to `chrome://extensions/`.
   - Enable **Developer Mode** (toggle on the top right).
   - Click **Load unpacked** and select the cloned folder.
3. **You're all set!** The extension is now active.

## 🛠 Usage
- Open **YouTube** and play a video.
- **Switch to another tab** → Video enters **PiP mode** automatically.
- **Go back to YouTube** → The video stays in PiP mode (close manually if needed).
- **Manually toggle PiP** using:
  - The **popup button** (click on the extension icon).
  - `Alt + P` keyboard shortcut.

## 📥 How to Install Manually
1. **Download the extension files** from the repository.
2. **Extract the folder** to a preferred location on your computer.
3. **Go to Chrome Extensions page** (`chrome://extensions/`).
![Step 1](icons/Screenshot%202025-03-09%20195311.png)  
4. **Enable Developer Mode** (toggle on the top right).
![Step 2](icons/Screenshot%202025-03-09%20195325.png) 
5. Click **Load unpacked** and select the extracted folder.
![Step 3](icons/Screenshot%202025-03-09%20195335.png)  
6. The extension is now installed and ready to use.

<!-- **Screenshots:**

![Step 1](icons/Screenshot%202025-03-09%20195311.png)  
![Step 2](icons/Screenshot%202025-03-09%20195325.png)  
![Step 3](icons/Screenshot%202025-03-09%20195335.png)   -->

## 🏗 Tech Stack
- **JavaScript**
- **Chrome Extensions API**

## 📜 Files Overview
- `manifest.json` → Extension metadata & permissions.
- `background.js` → Detects tab switching and enables PiP.
- `content.js` → Handles PiP logic in the YouTube tab.
- `popup.html` / `popup.js` → Allows manual PiP toggle.

## 💡 Future Enhancements
- Add settings to enable/disable auto-PiP.
- Extend support to Netflix, Vimeo, and other video platforms.

## 📜 License
This project is open-source under the **MIT License**.

---
📩 **Contributions are welcome!** Feel free to open issues or submit pull requests. Happy coding! 🚀
