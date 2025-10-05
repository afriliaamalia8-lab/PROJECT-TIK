/* script.js - slide bank rumus + "Pelajari Rumus" + quick nav + responsive */

/* ---------- Data (subjects + slides) ---------- */
const subjects = {
  matematika: {
    name: "Matematika",
    slides: [
      {
        id: "segitiga",
        title: "Luas Segitiga",
        teoriShort: "Luas segitiga = ½ × alas × tinggi.",
        teori: "Luas segitiga adalah setengah dari hasil kali alas dan tinggi. Gunakan satuan alas & tinggi sama (mis cm).",
        inputs: [{ id: "alas", label: "Alas (cm)" }, { id: "tinggi", label: "Tinggi (cm)" }],
        calc: v => (v.alas * v.tinggi) / 2,
        satuan: "cm²"
      },
      {
        id: "lingkaran",
        title: "Luas Lingkaran",
        teoriShort: "Luas = π × r². Pilih nilai π.",
        teori: "Luas lingkaran bergantung pada jari-jari r dan konstanta π. Pilih antara 3.14 atau 22/7 jika perlu.",
        inputs: [{ id: "phi", type: "select", options: ["3.14", "22/7"], label: "π (phi)" }, { id: "r", label: "Jari-jari (cm)" }],
        calc: v => {
          const phi = v.phi === "22/7" ? 22/7 : parseFloat(v.phi);
          return phi * v.r * v.r;
        },
        satuan: "cm²"
      },
      {
        id: "persegi",
        title: "Luas Persegi",
        teoriShort: "Luas = sisi × sisi.",
        teori: "Persegi memiliki empat sisi sama panjang. Luas dihitung dengan kuadrat sisi.",
        inputs: [{ id: "sisi", label: "Sisi (cm)" }],
        calc: v => v.sisi * v.sisi,
        satuan: "cm²"
      },
      {
        id: "trapesium",
        title: "Luas Trapesium",
        teoriShort: "L = ½ × (a + b) × t",
        teori: "Trapesium memiliki dua sisi sejajar (a & b) dan tinggi t. Luas = 0.5*(a+b)*t.",
        inputs: [{ id: "a", label: "Sisi a (cm)" }, { id: "b", label: "Sisi b (cm)" }, { id: "t", label: "Tinggi (cm)" }],
        calc: v => 0.5 * (v.a + v.b) * v.t,
        satuan: "cm²"
      },
      {
        id: "prisma",
        title: "Volume Prisma",
        teoriShort: "Volume = luas alas × tinggi prisma.",
        teori: "Volume prisma adalah luas alas dikali tinggi prisma (satuan cm³ jika alas cm² dan tinggi cm).",
        inputs: [{ id: "luasAlas", label: "Luas alas (cm²)" }, { id: "tinggiP", label: "Tinggi prisma (cm)" }],
        calc: v => v.luasAlas * v.tinggiP,
        satuan: "cm³"
      },
      {
        id: "kubus",
        title: "Volume Kubus",
        teoriShort: "V = sisi³",
        teori: "Volume kubus dihitung dengan pangkat tiga sisi (sisi dalam cm → hasil cm³).",
        inputs: [{ id: "sisiK", label: "Sisi (cm)" }],
        calc: v => Math.pow(v.sisiK, 3),
        satuan: "cm³"
      }
    ]
  },

  fisika: {
    name: "Fisika",
    slides: [
      {
        id: "glbb",
        title: "GLBB — v = v₀ + a × t",
        teoriShort: "Persamaan GLBB untuk kecepatan akhir.",
        teori: "Gunakan untuk benda dengan percepatan konstan. v dalam m/s.",
        inputs: [{ id: "v0", label: "Kecepatan awal v₀ (m/s)" }, { id: "a_f", label: "Percepatan a (m/s²)" }, { id: "t_f", label: "Waktu t (s)" }],
        calc: v => v.v0 + v.a_f * v.t_f,
        satuan: "m/s"
      },
      {
        id: "gaya",
        title: "Gaya — F = m × a",
        teoriShort: "Gaya sesuai Hukum II Newton.",
        teori: "Gaya diukur dalam Newton (N). Massa dalam kg, percepatan m/s².",
        inputs: [{ id: "massa_f", label: "Massa (kg)" }, { id: "a2", label: "Percepatan (m/s²)" }],
        calc: v => v.massa_f * v.a2,
        satuan: "N"
      },
      {
        id: "energiK",
        title: "Energi Kinetik — Ek = ½ m v²",
        teoriShort: "Energi kinetik benda bergerak.",
        teori: "Energi kinetik dalam Joule. m (kg), v (m/s).",
        inputs: [{ id: "m_ek", label: "Massa (kg)" }, { id: "v_ek", label: "Kecepatan (m/s)" }],
        calc: v => 0.5 * v.m_ek * Math.pow(v.v_ek, 2),
        satuan: "J"
      },
      {
        id: "usaha",
        title: "Usaha — W = F × s",
        teoriShort: "Usaha = gaya × perpindahan.",
        teori: "Usaha (J) dihitung F (N) × s (m).",
        inputs: [{ id: "F_w", label: "Gaya (N)" }, { id: "s_w", label: "Jarak (m)" }],
        calc: v => v.F_w * v.s_w,
        satuan: "J"
      },
      {
        id: "daya",
        title: "Daya — P = W ÷ t",
        teoriShort: "Daya = usaha per waktu.",
        teori: "Daya dalam Watt (W) = J / s.",
        inputs: [{ id: "W_d", label: "Usaha (J)" }, { id: "t_d", label: "Waktu (s)" }],
        calc: v => v.W_d / v.t_d,
        satuan: "W"
      }
    ]
  },

  kimia: {
    name: "Kimia",
    slides: [
      {
        id: "massaZ",
        title: "Massa Zat — m = n × Mr",
        teoriShort: "Massa = jumlah mol × Mr.",
        teori: "Mr = massa relatif molekul. Massa (g).",
        inputs: [{ id: "mol_k", label: "Mol (mol)" }, { id: "Mr_k", label: "Mr" }],
        calc: v => v.mol_k * v.Mr_k,
        satuan: "g"
      },
      {
        id: "molMassa",
        title: "Mol dari Massa — n = m ÷ Mr",
        teoriShort: "Menghitung jumlah mol dari massa.",
        teori: "Pastikan satuan massa cocok dengan Mr (g).",
        inputs: [{ id: "massa_k", label: "Massa (g)" }, { id: "Mr_k2", label: "Mr" }],
        calc: v => v.massa_k / v.Mr_k2,
        satuan: "mol"
      },
      {
        id: "molaritas",
        title: "Molaritas — M = n ÷ V",
        teoriShort: "Konsentrasi dalam mol/L.",
        teori: "Masukkan volume dalam liter (L).",
        inputs: [{ id: "n_k", label: "Mol (mol)" }, { id: "V_k", label: "Volume (L)" }],
        calc: v => v.n_k / v.V_k,
        satuan: "mol/L"
      },
      {
        id: "massaJenis",
        title: "Massa Jenis — ρ = m ÷ V",
        teoriShort: "Massa jenis = massa / volume.",
        teori: "Satuan bisa g/cm³ (massa g, volume cm³).",
        inputs: [{ id: "m_kj", label: "Massa (g)" }, { id: "V_kj", label: "Volume (cm³)" }],
        calc: v => v.m_kj / v.V_kj,
        satuan: "g/cm³"
      },
      {
        id: "volGas",
        title: "Volume Gas (STP) — V = n × 22.4",
        teoriShort: "Volume pada STP (22.4 L/mol).",
        teori: "Gunakan jika kondisi STP. Hasil dalam liter.",
        inputs: [{ id: "n_g", label: "Mol (mol)" }],
        calc: v => v.n_g * 22.4,
        satuan: "L"
      }
    ]
  },

  ekonomi: {
    name: "Ekonomi",
    slides: [
      {
        id: "bunga",
        title: "Bunga Tunggal — I = P × r × t",
        teoriShort: "r dalam persen — masukkan persen (mis 5%).",
        teori: "Bunga tunggal = modal × suku bunga × waktu (tahun).",
        inputs: [{ id: "P_e", label: "Modal P (Rp)" }, { id: "r_e", label: "Suku bunga (%)" }, { id: "t_e", label: "Waktu (tahun)" }],
        calc: v => v.P_e * (v.r_e / 100) * v.t_e,
        satuan: "Rp"
      },
      {
        id: "labaRugi",
        title: "Laba / Rugi",
        teoriShort: "Laba = Harga Jual - Harga Beli.",
        teori: "Jika hasil > 0 berarti laba, < 0 berarti rugi.",
        inputs: [{ id: "HJ", label: "Harga Jual (Rp)" }, { id: "HB", label: "Harga Beli (Rp)" }],
        calc: v => v.HJ - v.HB,
        satuan: "Rp"
      },
      {
        id: "diskon",
        title: "Diskon (%)",
        teoriShort: "Potongan harga dalam persen.",
        teori: "Diskon (Rp) = Harga × persen / 100.",
        inputs: [{ id: "harga_d", label: "Harga (Rp)" }, { id: "disc", label: "Diskon (%)" }],
        calc: v => v.harga_d * (v.disc / 100),
        satuan: "Rp"
      },
      {
        id: "pajak",
        title: "Pajak (%)",
        teoriShort: "Pajak = Harga × tarif / 100",
        teori: "Contoh: PPN, pajak penjualan. Hasil dalam rupiah.",
        inputs: [{ id: "harga_p", label: "Harga (Rp)" }, { id: "tarif", label: "Tarif (%)" }],
        calc: v => v.harga_p * (v.tarif / 100),
        satuan: "Rp"
      }
    ]
  }
};

/* ---------- DOM refs ---------- */
const subjectSelect = document.getElementById("subject");
const slidesArea = document.getElementById("slides-area");
const slidesContainer = document.getElementById("slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const indicator = document.getElementById("indicator");

let currentSlides = [];
let currentIndex = 0;

/* ---------- events ---------- */
subjectSelect.addEventListener("change", onSubjectChange);
prevBtn.addEventListener("click", onPrev);
nextBtn.addEventListener("click", onNext);
document.addEventListener("keydown", (e) => {
  if (slidesArea.classList.contains("hidden")) return;
  if (e.key === "ArrowLeft") onPrev();
  if (e.key === "ArrowRight") onNext();
});

/* ---------- functions ---------- */
function onSubjectChange() {
  const key = subjectSelect.value;
  if (!key) {
    slidesArea.classList.add("hidden");
    slidesContainer.innerHTML = "";
    indicator.innerText = "0 / 0";
    return;
  }
  currentSlides = subjects[key].slides;
  currentIndex = 0;
  renderSlides();
  slidesArea.classList.remove("hidden");
  updateIndicator();
  slidesArea.scrollIntoView({ behavior: "smooth", block: "center" });
}

function renderSlides() {
  slidesContainer.innerHTML = "";
  currentSlides.forEach((s, idx) => {
    const el = document.createElement("article");
    el.className = "slide";
    el.dataset.idx = idx;
    el.innerHTML = buildSlideHTML(s);
    slidesContainer.appendChild(el);
  });
  // attach handlers after DOM created
  currentSlides.forEach(s => attachSlideHandlers(s));
  updateCarousel();
}

function buildSlideHTML(slide) {
  // header, theory short + Pelajari button
  let inputsHtml = slide.inputs.map(inp => {
    if (inp.type === "select") {
      const opts = (inp.options || []).map(o => `<option value="${o}">${o}</option>`).join("");
      return `<div class="form-row"><label>${inp.label}</label><select id="${slide.id}_${inp.id}">${opts}</select></div>`;
    } else {
      return `<div class="form-row"><label style="display:block;font-size:12px;color:#6b6480">${inp.label}</label><input type="number" id="${slide.id}_${inp.id}" placeholder="${inp.label}" /></div>`;
    }
  }).join("");

  return `
    <h2>${slide.title}</h2>
    <p class="teori">${slide.teoriShort}</p>

    <div style="margin-top:8px">
      <button class="btn btn-secondary" data-action="learn" data-slide="${slide.id}">Pelajari Rumus</button>
    </div>

    <div class="learn-area" id="learn_${slide.id}" style="display:none; margin-top:12px;">
      <p style="color:#5d4a2a; background:rgba(255,245,236,0.7); padding:10px; border-radius:8px;">${slide.teori}</p>
      <div class="inputs-area" style="margin-top:10px;">
        ${inputsHtml}
      </div>
      <div class="row-actions">
        <button class="btn btn-primary" data-action="calc" data-slide="${slide.id}">Hitung</button>
        <button class="btn btn-secondary" data-action="reset" data-slide="${slide.id}">Reset</button>
      </div>
      <div class="result-box" id="res_${slide.id}">Hasil: —</div>
    </div>
  `;
}

function attachSlideHandlers(slide) {
  // learn button
  const learnBtn = slidesContainer.querySelector(`button[data-action="learn"][data-slide="${slide.id}"]`);
  if (learnBtn) {
    learnBtn.addEventListener("click", () => {
      const area = document.getElementById(`learn_${slide.id}`);
      if (!area) return;
      area.style.display = area.style.display === "none" ? "block" : "none";
      // scroll the slide into view smoothly
      const slideEl = learnBtn.closest(".slide");
      slideEl.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  }

  // calc button
  const calcBtn = slidesContainer.querySelector(`button[data-action="calc"][data-slide="${slide.id}"]`);
  if (calcBtn) {
    calcBtn.addEventListener("click", () => {
      const vals = {};
      let missing = false;
      slide.inputs.forEach(inp => {
        const el = document.getElementById(`${slide.id}_${inp.id}`);
        if (!el) return;
        const v = el.tagName === "SELECT" ? el.value : parseFloat(el.value);
        if (el.tagName !== "SELECT" && isNaN(v)) missing = true;
        vals[inp.id] = v;
      });
      if (missing) { alert("Isi semua input terlebih dahulu."); return; }
      try {
        const res = slide.calc(vals);
        document.getElementById(`res_${slide.id}`).innerText = `Hasil: ${formatResult(res, slide.satuan)}`;
      } catch (err) {
        console.error(err);
        alert("Terjadi error saat perhitungan.");
      }
    });
  }

  // reset button
  const resetBtn = slidesContainer.querySelector(`button[data-action="reset"][data-slide="${slide.id}"]`);
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      slide.inputs.forEach(inp => {
        const el = document.getElementById(`${slide.id}_${inp.id}`);
        if (!el) return;
        if (el.tagName === "SELECT") el.selectedIndex = 0;
        else el.value = "";
      });
      const resEl = document.getElementById(`res_${slide.id}`);
      if (resEl) resEl.innerText = "Hasil: —";
    });
  }
}

/* formatting helpers */
function formatResult(value, satuan) {
  if (typeof value === "number") {
    if (satuan === "Rp") return `Rp ${numberWithCommas(value.toFixed(2))}`;
    if (satuan === "%") return `${Number(value.toFixed(2))} %`;
    if (Math.abs(value - Math.round(value)) < 1e-9) return `${Math.round(value)} ${satuan || ""}`;
    return `${Number(value.toFixed(4))} ${satuan || ""}`;
  } else {
    return `${value} ${satuan || ""}`;
  }
}
function numberWithCommas(x){
  const parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

/* carousel controls */
function updateCarousel(){
  const slideEl = slidesContainer.querySelector(".slide");
  const w = slideEl ? slideEl.clientWidth : 820;
  const gap = parseInt(getComputedStyle(slidesContainer).gap || 18);
  const x = - currentIndex * (w + gap);
  slidesContainer.style.transform = `translateX(${x}px)`;
  updateIndicator();
}
function updateIndicator(){ indicator.innerText = `${currentIndex + 1} / ${currentSlides.length || 0}`; prevBtn.disabled = currentIndex <= 0; nextBtn.disabled = currentIndex >= (currentSlides.length - 1); }

function onPrev(){ if (currentIndex > 0) { currentIndex--; updateCarousel(); } }
function onNext(){ if (currentIndex < currentSlides.length - 1) { currentIndex++; updateCarousel(); } }

/* render + init */
slidesArea.classList.add("hidden");
indicator.innerText = "0 / 0";

