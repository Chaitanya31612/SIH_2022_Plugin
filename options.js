(function () {
  var icon = localStorage["toolbar_icon"] || "dark",
    radios = document.querySelectorAll("input[name=toolbar_icon]"),
    selectedRadio = document.getElementById("toolbar_icon_" + icon),
    r;

  console.log("hello from options.js");
  selectedRadio.setAttribute("checked", "checked");
  for (r = 0; r < radios.length; r++) {
    radios[r].addEventListener(
      "change",
      function (e) {
        var r = e.target;
        localStorage["toolbar_icon"] = r.value;

        var surfix = r.value === "light" ? "_light.png" : ".png";

        console.log("icon: assets/appicon" + surfix);

        chrome.action.setIcon({
          path: {
            19: "assets/appicon19" + surfix,
            38: "assets/appicon38" + surfix,
          },
        });
      },
      false
    );
  }
})();
