const button = document.getElementById("dark-mode");
const darkStylesheet = new CSSStyleSheet();
const lightStylesheet = new CSSStyleSheet();
let isDarkMode = sessionStorage.getItem("isDarkMode") === "true";

const setDarkMode = () => {
    const darkModeBase = `* {
    font-family: "Droid Sans", monospace;
    background: #0d2223;
    color: #9ab4d2;
  }

  a {
    color: aquamarine;
  }`;

    const lightModeBase = `* {
    font-family: "Droid Sans", monospace;
    background: #9ab4d2;
    color: #0d2223;
  }

  a {
    color: #1d50da;
  }`;

    if (isDarkMode) {
        darkStylesheet.replaceSync(darkModeBase);
        document.adoptedStyleSheets = [darkStylesheet];
        document.body.classList.remove("hidden");
    } else {
        lightStylesheet.replaceSync(lightModeBase);
        document.adoptedStyleSheets = [lightStylesheet];
        document.body.classList.remove("hidden");
    }
};

window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("hidden");
    setDarkMode();
    button.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});

button.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    setDarkMode();
    sessionStorage.setItem("isDarkMode", isDarkMode.toString());
    button.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
});
