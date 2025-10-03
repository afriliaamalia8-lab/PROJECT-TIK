// Daftar Rumus
const rumus = {
  matematika: [
    { title: "Luas Segitiga", formula: "(alas × tinggi) ÷ 2", inputs: ["alas","tinggi"], calc: (v) => (v[0]*v[1])/2 },
    { title: "Luas Lingkaran", formula: "π × r²", inputs: ["jari-jari"], calc: (v) => Math.PI * v[0]**2 },
    { title: "Keliling Persegi", formula: "4 × sisi", inputs: ["sisi"], calc: (v) => 4*v[0] },
    { title: "Luas Persegi Panjang", formula: "p × l", inputs: ["panjang","lebar"], calc: (v) => v[0]*v[1] },
    { title: "Keliling Lingkaran", formula: "2 × π × r", inputs: ["jari-jari"], calc: (v) => 2*Math.PI*v[0] },
    { title: "Pythagoras", formula: "c = √(a² + b²)", inputs: ["sisi a","sisi b"], calc: (v) => Math.sqrt(v[0]**2 + v[1]**2) }
  ],
  fisika: [
    { title: "GLBB", formula: "v = v0 + a × t", inputs: ["v0","a","t"], calc: (v) => v[0]+v[1]*v[2] },
    { title: "Gaya", formula: "F = m × a", inputs: ["massa","percepatan"], calc: (v) => v[0]*v[1] },
    { title: "Energi Kinetik", formula: "Ek = ½ m v²", inputs: ["massa","kecepatan"], calc: (v) => 0.5*v[0]*v[1]**2 },
    { title: "Energi Potensial", formula: "Ep = m × g × h", inputs: ["massa","gravitasi","tinggi"], calc: (v) => v[0]*v[1]*v[2] },
    { title: "Usaha", formula: "W = F × s", inputs: ["gaya","perpindahan"], calc: (v) => v[0]*v[1] },
    { title: "Daya", formula: "P = W ÷ t", inputs: ["usaha","waktu"], calc: (v) => v[0]/v[1] }
  ],
  kimia: [
    { title: "Massa Zat", formula: "m = n × Mr", inputs: ["mol","Mr"], calc: (v) => v[0]*v[1] },
    { title: "Mol", formula: "n = m ÷ Mr", inputs: ["massa","Mr"], calc: (v) => v[0]/v[1] },
    { title: "Konsentrasi", formula: "M = n ÷ V", inputs: ["mol","volume(L)"], calc: (v) => v[0]/v[1] },
    { title: "Volume Gas (STP)", formula: "V = n × 22,4", inputs: ["mol"], calc: (v) => v[0]*22.4 },
    { title: "Jumlah Partikel", formula: "N = n × NA", inputs: ["mol"], calc: (v) => v[0]*6.022e23 },
    { title: "Fraksi Mol", formula: "XA = nA ÷ (nA+nB)", inputs: ["mol A","mol B"], calc: (v) => v[0]/(v[0]+v[1]) }
  ]
};

let currentSubject = "";
let currentIndex = 0;

// Tampilkan form sesuai pilihan
function showForm() {
  currentSubject = document.getElementById("subject").value;
  currentIndex = 0;
  renderSlide();
}

function renderSlide() {
  const wrapper = document.getElementById("slides-wrapper");
  wrapper.innerHTML = "";

  if (!currentSubject) return;

  const data = rumus[currentSubject][currentIndex];
  
  let html = `
    <div class="slide active-slide">
      <h3>${data.title}</h3>
      <p><b>Rumus:</b> ${data.formula}</p>
      ${data.inputs.map((inp,i)=>`<input type="number" id="input${i}" placeholder="Masukkan ${inp}">`).join("")}
      <button onclick="hitung()">Hitung</button>
      <div class="result" id="hasil"></div>
      <div class="nav-buttons">
        <button onclick="prevSlide()" ${currentIndex===0?"disabled":""}>⬅️ Prev</button>
        <button onclick="nextSlide()" ${currentIndex===rumus[currentSubject].length-1?"disabled":""}>Next ➡️</button>
      </div>
    </div>
  `;
  wrapper.innerHTML = html;
}

function hitung() {
  const data = rumus[currentSubject][currentIndex];
  let values = data.inputs.map((_,i)=>parseFloat(document.getElementById("input"+i).value));
  
  if (values.some(isNaN)) {
    alert("Isi semua nilai!");
    return;
  }
  
  const hasil = data.calc(values);
  document.getElementById("hasil").innerText = `Hasil = ${hasil}`;
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    renderSlide();
  }
}

function nextSlide() {
  if (currentIndex < rumus[currentSubject].length-1) {
    currentIndex++;
    renderSlide();
  }
}
