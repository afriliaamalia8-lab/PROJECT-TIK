function pilihKategori(kategori) {
  const konten = document.getElementById("konten");

  // Reset isi konten dulu biar nggak numpuk
  konten.innerHTML = "";

  // Fade effect
  konten.classList.remove("fade-in");
  void konten.offsetWidth;
  konten.classList.add("fade-in");

  // Tampilkan sesuai kategori
  switch (kategori) {
    case "matematika":
      konten.innerHTML = `
        <div class="card">
          <h3>📘 Matematika</h3>
          <p>Pilih topik materi:</p>
          <button onclick="tampilkanRumus('lingkaran')">Lingkaran</button>
          <button onclick="tampilkanRumus('tabung')">Tabung</button>
          <button onclick="tampilkanRumus('bola')">Bola</button>
          <button onclick="tampilkanRumus('polinomial')">Polinomial</button>
          <button onclick="tampilkanRumus('spltv')">SPLTV</button>
        </div>
      `;
      break;

    case "fisika":
      konten.innerHTML = `
        <div class="card">
          <h3>⚡ Fisika</h3>
          <p>Materi seperti gaya (F = m × a), energi, dan daya akan tersedia.</p>
          <button onclick="kembali()">⬅ Kembali</button>
        </div>
      `;
      break;

    case "kimia":
      konten.innerHTML = `
        <div class="card">
          <h3>🧪 Kimia</h3>
          <p>Rumus: Massa = Mol × Mr, Volume Gas = Mol × 22.4 L</p>
          <button onclick="kembali()">⬅ Kembali</button>
        </div>
      `;
      break;

    case "ekonomi":
      konten.innerHTML = `
        <div class="card">
          <h3>💰 Ekonomi</h3>
          <p>Contoh rumus: Bunga = (Modal × Suku Bunga × Waktu) / 100</p>
          <button onclick="kembali()">⬅ Kembali</button>
        </div>
      `;
      break;

    case "umum":
      konten.innerHTML = `
        <div class="card">
          <h3>🧮 Kalkulator Umum</h3>
          <div class="calc">
            <input id="layar" type="text" readonly />
            <div class="buttons">
              ${["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(btn => 
                `<button onclick="klik('${btn}')">${btn}</button>`).join('')}
              <button onclick="reset()">C</button>
            </div>
          </div>
          <button onclick="kembali()">⬅ Kembali</button>
        </div>
      `;
      break;
  }
}

/* Kalkulator umum */
function klik(val) {
  const layar = document.getElementById("layar");
  if (val === "=") {
    try { layar.value = eval(layar.value); }
    catch { layar.value = "Error"; }
  } else {
    layar.value += val;
  }
}
function reset() { document.getElementById("layar").value = ""; }

/* Fungsi Rumus */
function tampilkanRumus(tipe) {
  const konten = document.getElementById("konten");
  if (tipe === "lingkaran") {
    konten.innerHTML = `
      <div class="card">
        <h3>⭕ Rumus Lingkaran</h3>
        <p>Luas = π × r²</p>
        <label>Pilih π:</label>
        <select id="piSelect">
          <option value="3.14">3.14</option>
          <option value="22/7">22/7</option>
        </select>
        <input type="number" id="r" placeholder="Jari-jari (cm)">
        <button onclick="hitungLingkaran()">Hitung</button>
        <p id="hasil"></p>
        <button onclick="pilihKategori('matematika')">⬅ Kembali</button>
      </div>
    `;
  } else if (tipe === "polinomial") {
    konten.innerHTML = `
      <div class="card">
        <h3>📈 Rumus Polinomial</h3>
        <p>f(x) = ax² + bx + c</p>
        <p>Turunan: f'(x) = 2ax + b</p>
        <button onclick="pilihKategori('matematika')">⬅ Kembali</button>
      </div>
    `;
  } else if (tipe === "spltv") {
    konten.innerHTML = `
      <div class="card">
        <h3>🧩 SPLTV</h3>
        <p>a₁x + b₁y + c₁z = d₁<br>
           a₂x + b₂y + c₂z = d₂<br>
           a₃x + b₃y + c₃z = d₃</p>
        <button onclick="pilihKategori('matematika')">⬅ Kembali</button>
      </div>
    `;
  }
}

/* Hitung luas lingkaran */
function hitungLingkaran() {
  const r = parseFloat(document.getElementById("r").value);
  const pi = eval(document.getElementById("piSelect").value);
  if (isNaN(r)) {
    document.getElementById("hasil").innerText = "Masukkan jari-jari dengan benar!";
    return;
  }
  const luas = pi * r * r;
  document.getElementById("hasil").innerText = `Luas lingkaran = ${luas.toFixed(2)} cm²`;
}

/* Kembali ke menu utama */
function kembali() {
  location.reload();
}
