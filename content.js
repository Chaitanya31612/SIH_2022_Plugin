console.log("hello from content.js");

window.addEventListener("focusin", startCheck);

function startCheck() {
  const activeTextBox = document.activeElement;

  console.log("activeTextBox:", activeTextBox, activeTextBox.type);

  if (activeTextBox.type === "text" || activeTextBox.type === "textarea") {
    console.log("startCheck");
    const micButtonExists = document.getElementsByClassName("micButton")[0];

    console.log("micButtonExists:", micButtonExists);
    if (micButtonExists) {
      console.log("micButtonExists");
      micButtonExists.remove();
    }

    const micButton = document.createElement("img");
    micButton.className = "micButton";
    micButton.src = chrome.runtime.getURL("assets/microphone24_off.png");
    micButton.title = "Speak";
    micButton.style.position = "relative";
    micButton.style.zIndex = "9999";
    micButton.style.right = "0px";
    micButton.style.cursor = "pointer";

    activeTextBox.parentElement.appendChild(micButton);
    activeTextBox.parentElement.style.overflow = "visible";

    micButton.addEventListener("click", startRecord);
  }
}

function startRecord() {
  console.log("start clicked");
  const micButton = document.getElementsByClassName("micButton")[0];
  micButton.src = chrome.runtime.getURL("assets/microphone24_on.png");
  micButton.title = "Stop";

  // Code for starting recording and processing the audio

  micButton.removeEventListener("click", startRecord);
  micButton.addEventListener("click", stopRecord);
}

function stopRecord() {
  console.log("stop clicked");
  const micButton = document.getElementsByClassName("micButton")[0];
  micButton.src = chrome.runtime.getURL("assets/microphone24_off.png");
  micButton.title = "Speak";

  // Code for stopping recording and processing the audio

  micButton.removeEventListener("click", stopRecord);
  micButton.addEventListener("click", startRecord);
}
