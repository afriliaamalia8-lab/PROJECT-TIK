const materi = {
  matematika: [
    {
      judul: "Luas Segitiga",
      teori: "Digunakan untuk menghitung luas segitiga: ½ × alas × tinggi",
      inputs: [
        { id: "alas", placeholder: "Alas (cm)" },
        { id: "tinggi", placeholder: "Tinggi (cm)" }
      ],
      hitung: (v) => (v.alas * v.tinggi) / 2,
      satuan: "cm²"
    },
    {
      judul: "Luas Persegi Panjang",
      teori: "Rumus: panjang × lebar",
      inputs: [
        { id: "panjang", placeholder: "Panjang (cm)" },
        { id: "lebar", placeholder: "Lebar (cm)" }
      ],
      hitung: (v) => v.panjang * v.lebar,
      satuan: "cm²"
    },
    {
      judul: "Keliling Lingkaran",
      teori: "Rumus: 2 × π × r",
      inputs: [
        { id: "r", placeholder: "Jari-jari (cm)" }
      ],
      hitung: (v) => 2 * Math.PI * v.r,
      satuan: "cm"
    },
    {
      judul: "Luas Lingkaran",
      teori: "Rumus: π × r²",
      inputs: [
        { id: "r", placeholder: "Jari-jari (cm)" }
      ],
      hitung: (v) => Math.PI * v.r * v.r,
      satuan: "cm²"
    },
    {
      judul: "Volume Kubus",
      teori: "Rumus: sisi³",
      inputs: [
        { id: "sisi", placeholder: "Sisi (cm)" }
      ],
      hitung: (v) => Math.pow(v.sisi, 3),
      satuan: "cm³"
    }
  ],
  fisika: [
    {
      judul: "GLBB (v = v₀ + a × t)",
      teori: "Persamaan gerak lurus berubah beraturan.",
      inputs: [
        { id: "v0", placeholder: "Kecepatan awal (m/s)" },
        { id: "a", placeholder: "Percepatan (m/s²)" },
        { id: "t", placeholder: "Waktu (s)" }
      ],
      hitung: (v) => v.v0 + v.a * v.t,
      satuan: "m/s"
    },
    {
      judul: "Gaya Newton",
      teori: "Rumus: F = m × a",
      inputs: [
        { id: "m", placeholder: "Massa (kg)" },
        { id: "a", placeholder: "Percepatan (m/s²)" }
      ],
      hitung: (v) => v.m * v.a,
      satuan: "N"
    },
    {
      judul: "Energi Kinetik",
      teori: "Rumus: Ek = ½ × m × v²",
      inputs: [
        { id: "m", placeholder: "Massa (kg)" },
        { id: "v", placeholder: "Kecepatan (m/s)" }
      ],
      hitung: (v) => 0.5 * v.m * v.v * v.v,
      satuan: "J"
    },
    {
      judul: "Energi Potensial",
      teori: "Rumus: Ep = m × g × h (g = 9,8 m/s²)",
      inputs: [
        { id: "m", placeholder: "Massa (kg)" },
        { id: "h", placeholder: "Tinggi (m)" }
      ],
      hitung: (v) => v.m * 9.8 * v.h,
      satuan: "J"
    },
    {
      judul: "Usaha (Work)",
      teori: "Rumus: W = F × s",
      inputs: [
        { id: "F", placeholder: "Gaya (N)" },
        { id: "s", placeholder: "Jarak (m)" }
      ],
      hitung: (v) => v.F * v.s,
      satuan: "J"
    }
  ],
  kimia: [
    {
      judul: "Massa Zat",
      teori: "Rumus: massa = mol × Mr",
      inputs: [
        { id: "mol", placeholder: "Mol (mol)" },
        { id: "mr", placeholder: "Mr" }
      ],
      hitung: (v) => v.mol * v.mr,
      satuan: "gram"
    },
    {
      judul: "Mol dari Massa",
      teori: "Rumus: mol = massa ÷ Mr",
      inputs: [
        { id: "massa", placeholder: "Massa (g)" },
        { id: "mr", placeholder: "Mr" }
      ],
      hitung: (v) => v.massa / v.mr,
      satuan: "mol"
    },
    {
      judul: "Konsentrasi Larutan",
      teori: "Rumus: M = n ÷ V (liter)",
      inputs: [
        { id: "n", placeholder: "Mol (mol)" },
        { id: "V", placeholder: "Volume (L)" }
      ],
      hitung: (v) => v.n / v.V,
      satuan: "mol/L"
    },
    {
      judul: "Massa dari Konsentrasi",
      teori: "Rumus: massa = M × Mr × V",
      inputs: [
        { id: "M", placeholder: "Konsentrasi (mol/L)" },
        { id: "Mr", placeholder: "Mr" },
        { id: "V", placeholder: "Volume (L)" }
      ],
      hitung: (v) => v.M * v.Mr * v.V,
      satuan: "gram"
    },
    {
      judul: "Jumlah Partikel",
      teori: "Rumus: N = n × 6,022 × 10²³",
      inputs: [
        { id: "n", placeholder: "Mol (mol)" }
      ],
      hitung: (v) => v.n * 6.022e23,
      satuan: "partikel"
    }
  ]
};

let currentIndex = 0;
let currentSubject = "";

function showSlides() {
  currentSubject = document.getElementById("subject").value;
  currentIndex = 0;
  renderSlide();
}

function renderSlide() {
  const container = document.getElementById("slides-container");
  if (!currentSubject) {
    container.innerHTML = "";
    return;
  }

  const data = materi[currentSubject][currentIndex];
  let inputsHTML = "";
  data.inputs.forEach(inp => {
    inputsHTML += `<input type="number" id="${inp.id}" placeholder="${inp.placeholder}" />`;
  });

  container.innerHTML = `
    <div class="slide">
      <h2>${data.judul}</h2>
      <p class="teori">${data.teori}</p>
      ${inputsHTML}
      <button onclick="hitung()">Hitung</button>
      <div id="hasil"></div>
      <div class="nav">
        <button onclick="prevSlide()">Prev</button>
        <button onclick="nextSlide()">Next</button>
      </div>
    </div>
  `;
}

function hitung() {
  const data = materi[currentSubject][currentIndex];
  const values = {};
  data.inputs.forEach(inp => {
    values[inp.id] = parseFloat(document.getElementById(inp.id).value);
  });

  if (Object.values(values).some(v => isNaN(v))) {
    alert("Masukkan semua nilai dengan benar!");
    return;
  }

  const hasil = data.hitung(values);
  document.getElementById("hasil").innerText = `Hasil: ${hasil.toFixed(2)} ${data.satuan}`;
}

function nextSlide() {
  if (currentIndex < materi[currentSubject].length - 1) {
    currentIndex++;
    renderSlide();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide();
  }
}
