const passosSection = document.getElementById("passos");
const passosSteps = document.querySelectorAll(".passos-nav a");
const passosProgress = document.getElementById("nav-progress");
const passosContent = document.querySelectorAll(".passos-content");

let currentStep = 0;
let timeout = undefined;

const intersectionObserver = new IntersectionObserver((entities) => {
  entities.forEach((entity) => {
    if (entity.isIntersecting) {
      showContent(currentStep);
    } else {
      if (timeout) {
        clearTimeout(timeout);
        currentStep = 0;
        timeout = undefined;
      }
    }
  });
});

intersectionObserver.observe(passosSection);

function createTimeout() {
  return setTimeout(() => {
    currentStep++;
    if (currentStep === passosSteps.length) currentStep = 0;
    showContent(currentStep);
  }, 8000);
}

passosSteps.forEach((passos, index) => {
  passos.addEventListener("click", () => showContent(index));
});

function showContent(index) {
  if (timeout) clearTimeout(timeout);
  timeout = createTimeout();

  currentStep = index;

  passosContent.forEach((content) =>
    content.classList.remove("passos-visible")
  );
  passosContent[index].classList.add("passos-visible");

  setProgress(index);
  selectNode(index);
}

function setProgress(index) {
  progress = (index / (passosSteps.length - 1)) * 100;
  passosProgress.style.setProperty("--progress", `${progress}%`);
}

function selectNode(index) {
  passosSteps.forEach((passos) => passos.classList.remove("active"));

  for (let i = 0; i <= index; i++) {
    passosSteps[i].classList.add("active");
  }
}

function setContent(content) {}
