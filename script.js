const slides = {
  matematika: [
    {
      title: "Bangun Datar",
      desc: "Hitung luas dan keliling bentuk 2D seperti segitiga, lingkaran, persegi, dll.",
      formula: `
        <p><b>1️⃣ Luas Segitiga:</b> (alas × tinggi) ÷ 2</p>
        <p><b>2️⃣ Luas Lingkaran:</b> π × r²</p>
        <label>Pilih π:</label>
        <select id="phi">
          <option value="3.14">3.14</option>
          <option value="22/7">22/7</option>
        </select><br><br>
        <input type="number" id="r" placeholder="Masukkan jari-jari (cm)">
        <button onclick="hitungLingkaran()">Hitung Luas</button>
        <div id="hasilLingkaran"></div>
      `
    },
    {
      title: "Polinomial",
      desc: "Rumus dasar: ax² + bx + c = 0 (gunakan rumus kuadrat).",
      formula: `
        <input type="number" id="a" placeholder="Masukkan a">
        <input type="number" id="b" placeholder="Masukkan b">
        <input type="number" id="c" placeholder="Masukkan c">
        <button onclick="hitungPolinomial()">Hitung Akar</button>
        <div id="hasilPoli"></div>
      `
    },
    {
      title: "SPLTV",
      desc: "Sistem Persamaan Linear Tiga Variabel — digunakan untuk mencari x, y, z.",
      formula: `<p>Masukkan nilai nanti untuk menghitung dengan metode eliminasi atau substitusi.</p>`
    }
  ],
  fisika: [
    { title: "GLBB", desc: "v = v₀ + a × t", formula: `<input id="v0"><input id="a"><input id="t"><button>Hitung</button>` }
  ],
  kimia: [
    { title: "Massa Zat", desc: "m = n × Mr", formula: `<input id="mol"><input id="mr"><button>Hitung</button>` }
  ],
  ekonomi: [
    { title: "Bunga Tunggal", desc: "B = (P × i × t) / 100", formula: `<input id="P"><input id="i"><input id="t"><button>Hitung</button>` }
  ],
  umum: [
    { title: "Kalkulator Umum", desc: "Kalkulator seperti di HP untuk perhitungan cepat.", formula: `<iframe src="https://www.online-calculator.com/simple-calculator/" width="100%" height="400"></iframe>` }
  ]
};

let current = 0;
let selectedSubject = "";

function showSlide(subject) {
  selectedSubject = subject;
  current = 0;
  document.querySelector(".menu").style.display = "none";
  document.getElementById("content-slide").classList.remove("hidden");
  document.getElementById("nav-buttons").classList.remove("hidden");
  loadSlide();
}

function loadSlide() {
  const slide = slides[selectedSubject][current];
  document.getElementById("content-slide").innerHTML = `
    <h3>${slide.title}</h3>
    <p>${slide.desc}</p>
    <div class="formula">${slide.formula}</div>
  `;
}

function nextSlide() {
  if (current < slides[selectedSubject].length - 1) {
    current++;
    loadSlide();
  }
}

function prevSlide() {
  if (current > 0) {
    current--;
    loadSlide();
  }
}

function resetSlide() {
  document.querySelector(".menu").style.display = "grid";
  document.getElementById("content-slide").classList.add("hidden");
  document.getElementById("nav-buttons").classList.add("hidden");
  document.getElementById("content-slide").innerHTML = "";
}

// === Fungsi Hitung ===
function hitungLingkaran() {
  const phiVal = eval(document.getElementById("phi").value);
  const r = parseFloat(document.getElementById("r").value);
  if (isNaN(r)) return alert("Masukkan jari-jari!");
  const luas = phiVal * r * r;
  document.getElementById("hasilLingkaran").innerHTML = `Luas = ${luas.toFixed(2)} cm²`;
}

function hitungPolinomial() {
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const c = parseFloat(document.getElementById("c").value);
  const D = b * b - 4 * a * c;
  if (D < 0) return document.getElementById("hasilPoli").innerHTML = "Tidak ada akar real.";
  const x1 = (-b + Math.sqrt(D)) / (2 * a);
  const x2 = (-b - Math.sqrt(D)) / (2 * a);
  document.getElementById("hasilPoli").innerHTML = `x₁ = ${x1.toFixed(2)}, x₂ = ${x2.toFixed(2)}`;
}
