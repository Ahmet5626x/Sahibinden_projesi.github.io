let isDarkMode = localStorage.getItem("darkMode") === "true";
let language = localStorage.getItem("language") || "en";

function toggleDarkMode() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
}

function initializeDarkMode() {
    if (isDarkMode) {
        document.body.classList.add("dark-mode");
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    localStorage.setItem("language", language);
    applyLanguage();
}

function initializeLanguage() {
    document.getElementById("languageSelect").value = language;
    applyLanguage();
}

function applyLanguage() {
    const elements = document.querySelectorAll("[data-en]");
    elements.forEach(element => {
        element.innerHTML = element.getAttribute(`data-${language}`);
    });
}

window.onload = function() {
    initializeDarkMode();
    initializeLanguage();
}