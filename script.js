/* === Golden Batik Edition by Afrilia Amalia S. === */

document.addEventListener("DOMContentLoaded", () => {
  const clickSound = document.getElementById("clickSound");
  const playClick = () => { clickSound.currentTime = 0; clickSound.play(); };

  const menuScreen = document.getElementById("menuScreen");
  const slideWrapper = document.getElementById("slideWrapper");
  const slidesViewport = document.getElementById("slidesViewport");
  const subjectTitle = document.getElementById("subjectTitle");
  
  let currentIndex = 0;
  let slidesData = [];

  document.body.addEventListener("click", e => {
    const btn = e.target;

    if (btn.classList.contains("menu-btn")) {
      playClick();
      const subject = btn.dataset.subject;
      openSubject(subject);
    }

    if (btn.id === "backToMenu") {
      playClick();
      slideWrapper.classList.add("hidden");
      menuScreen.classList.remove("hidden");
    }

    if (btn.id === "nextSlide") nextSlide();
    if (btn.id === "prevSlide") prevSlide();
    if (btn.id === "btnReset") resetInputs();

    const calcBtn = btn.closest("[data-calc]");
    if (calcBtn) {
      runCalc(calcBtn.dataset.calc);
    }

    const calcKey = btn.dataset.key;
    if (calcKey) handleCalcKey(calcKey);
  });

  function openSubject(subj) {
    menuScreen.classList.add("hidden");
    slideWrapper.classList.remove("hidden");
    subjectTitle.textContent = subj.charAt(0).toUpperCase() + subj.slice(1);
    slidesData = document.createElement("div");
    slidesViewport.innerHTML = `<div class="slide active"><h2>📘 ${subj.toUpperCase()}</h2><p class="desc">Silakan pelajari dan hitung rumus pada bidang ${subj}.</p></div>`;
  }

  function nextSlide() {
    playClick();
  }

  function prevSlide() {
    playClick();
  }

  function resetInputs() {
    document.querySelectorAll("input").forEach(i => i.value = "");
    document.querySelectorAll(".result-box").forEach(r => r.innerHTML = "");
  }

  function runCalc(type) {
    playClick();
    // logika rumus masuk di sini (sesuai versi script panjang kamu sebelumnya)
  }

  function handleCalcKey(key) {
    const display = document.getElementById("calc-display");
    if (!display) return;
    playClick();
    if (key === "C") display.value = "";
    else if (key === "=") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    } else {
      display.value += key;
    }
  }
});
