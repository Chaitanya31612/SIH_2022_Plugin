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
    // if (!micButtonExists) {
    const micButton = document.createElement("img");
    micButton.className = "micButton";
    micButton.src = chrome.runtime.getURL("assets/microphone24_off.png");
    micButton.title = "Speak";
    micButton.style.position = "relative";
    micButton.style.zIndex = "9999";
    micButton.style.right = "0px";
    //   activeTextBox.value = "hello";
    //   activeTextBox.style.backgroundColor = "red";

    activeTextBox.parentElement.appendChild(micButton);
    // }
  }
}
