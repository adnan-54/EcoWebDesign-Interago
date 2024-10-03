const temaSection = document.getElementById("temas");

const lightButton = document.getElementById("button-tema-light");
const darkButton = document.getElementById("button-tema-dark");

const lightThemeImage = document.getElementById("image-tema-light");
const darkThemeImage = document.getElementById("image-tema-dark");

let theme = "light";

lightButton.classList.add("button-tema-selected");
lightThemeImage.classList.add("imagem-tema-selected");

lightButton.addEventListener("click", () => {
  if (theme === "light") return;
  toggleTheme();
  theme = "light";
});

darkButton.addEventListener("click", () => {
  if (theme === "dark") return;
  toggleTheme();
});

function toggleTheme() {
  if (theme === "light") {
    setThemeDark();
    return;
  }

  setThemeLight();
}

function setThemeDark() {
  temaSection.classList.add("section-tema-dark");

  lightButton.classList.remove("button-tema-selected");
  darkButton.classList.add("button-tema-selected");

  lightThemeImage.classList.remove("imagem-tema-selected");
  darkThemeImage.classList.add("imagem-tema-selected");

  theme = "dark";
}

function setThemeLight() {
  temaSection.classList.remove("section-tema-dark");

  darkButton.classList.remove("button-tema-selected");
  lightButton.classList.add("button-tema-selected");

  darkThemeImage.classList.remove("imagem-tema-selected");
  lightThemeImage.classList.add("imagem-tema-selected");

  theme = "light";
}
