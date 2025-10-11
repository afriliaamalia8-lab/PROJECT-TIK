const subjectSelect = document.getElementById("subjectSelect");
const contentArea = document.getElementById("contentArea");
const navButtons = document.getElementById("navButtons");

subjectSelect.addEventListener("change", () => {
  const subject = subjectSelect.value;
  if (!subject) {
    contentArea.classList.add("hidden");
    navButtons.classList.add("hidden");
    return;
  }

  contentArea.classList.remove("hidden");
  navButtons.classList.remove("hidden");

  if (subject === "umum") {
    showCalculatorUmum();
  } else {
    showMateri(subject);
  }
});

function showMateri(subject) {
  const materiList = {
    matematika: ["Bangun Datar", "Bangun Ruang", "Trigonometri"],
    fisika: ["Kinematika", "Energi", "Fluida"],
    kimia: ["Struktur Atom", "Stoikiometri", "Termokimia"],
    ekonomi: ["Permintaan dan Penawaran", "Pendapatan Nasional", "Pajak"]
  };

  const list = materiList[subject];
  contentArea.innerHTML = `
    <h3>📘 Pilih Materi ${subject.charAt(0).toUpperCase() + subject.slice(1)}</h3>
    <ul>${list.map(m => `<li class="btn" onclick="showRumus('${subject}','${m}')">${m}</li>`).join('')}</ul>
  `;
}

function showRumus(subject, materi) {
  contentArea.innerHTML = `
    <h3>${materi}</h3>
    <p>Menampilkan rumus dan perhitungan interaktif untuk materi ${materi}.</p>
    <button class="btn" onclick="resetPage()">🔁 Kembali ke Awal</button>
  `;
}

function showCalculatorUmum() {
  contentArea.innerHTML = `
    <div class="calculator">
      <div id="display" class="calc-display">0</div>
      ${['7','8','9','/','4','5','6','*','1','2','3','-','0','.','=','+']
        .map(btn => `<button class="calc-btn" onclick="pressButton('${btn}')">${btn}</button>`).join('')}
      <button class="calc-btn" style="grid-column: span 4;" onclick="clearDisplay()">C</button>
    </div>
  `;
}

let currentInput = '';

function pressButton(value) {
  const display = document.getElementById("display");
  if (value === '=') {
    try {
      display.textContent = eval(currentInput) || 0;
      currentInput = display.textContent;
    } catch {
      display.textContent = 'Error';
    }
  } else {
    currentInput += value;
    display.textContent = currentInput;
  }
}

function clearDisplay() {
  currentInput = '';
  document.getElementById("display").textContent = '0';
}

function resetPage() {
  location.reload();
}
