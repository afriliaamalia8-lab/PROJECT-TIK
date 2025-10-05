function showSlide(id) {
  document.querySelectorAll('.slide').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
}

// Kalkulator umum
let display = document.getElementById('display');

function append(num) {
  display.value += num;
}

function clearDisplay() {
  display.value = '';
}

function del() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = 'Error';
  }
}

// Pilihan Pi
function showPiChoice() {
  const choice = prompt("Pilih nilai π:\n1. 22/7\n2. 3.14");
  if (choice === "1") alert("Kamu memilih π = 22/7");
  else if (choice === "2") alert("Kamu memilih π = 3.14");
  else alert("Pilihan tidak valid !!");
}
