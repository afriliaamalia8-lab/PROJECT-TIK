/* script.js — developer (internasional) edition
   - slide engine: horizontal slides per subject
   - "Pelajari Rumus" reveals form; forms have Reset & Hitung
   - units shown in placeholders and result labels
*/

// --- slide data per subject ---
// Each item: { title, desc, template } template = HTML shown when slide is active (includes Pelajari Rumus button)
const SUBJECTS = {
  matematika: [
    {
      title: "Bangun Datar — Lingkaran",
      desc: "Rumus utama: Luas = π × r²  — Satuan: cm (jari-jari) → cm² (luas)",
      template: `
        <p class="desc">Luas lingkaran: <strong>π × r²</strong></p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="lingkaran">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="lingkaran" style="display:none">
          <div class="form-row">
            <select id="phi">
              <option value="3.14">π = 3.14</option>
              <option value="22/7">π = 22/7</option>
            </select>
            <input id="r" type="number" placeholder="Jari-jari r (cm)" />
          </div>
          <div class="btn-row">
            <button class="btn" data-action="calc" data-calc="lingkaran">Hitung Luas</button>
            <button class="btn alt" data-action="reset">Reset</button>
          </div>
          <div class="result-box" id="res-lingkaran" style="display:none"></div>
        </div>
      `
    },
    {
      title: "Bangun Datar — Segitiga",
      desc: "Luas segitiga = (alas × tinggi) ÷ 2  — Satuan: cm → cm²",
      template: `
        <p class="desc">Luas segitiga: <strong>(alas × tinggi) ÷ 2</strong></p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="segitiga">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="segitiga" style="display:none">
          <div class="form-row"><input id="alas" type="number" placeholder="Alas (cm)"><input id="tinggi" type="number" placeholder="Tinggi (cm)"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="segitiga">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-segitiga" style="display:none"></div>
        </div>
      `
    },
    {
      title: "Polinomial (Kuadrat)",
      desc: "Persamaan kuadrat: ax² + bx + c = 0 — gunakan rumus kuadrat untuk akar, juga bisa menghitung f(x).",
      template: `
        <p class="desc">Akar & evaluasi f(x). Satuan: sebagai angka (tanpa satuan spesifik)</p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="polinomial">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="polinomial" style="display:none">
          <div class="form-row"><input id="pa" type="number" placeholder="a"><input id="pb" type="number" placeholder="b"><input id="pc" type="number" placeholder="c"></div>
          <div class="form-row"><input id="px" type="number" placeholder="Nilai x (opsional, untuk f(x))"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="polinomial">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-polinomial" style="display:none"></div>
        </div>
      `
    },
    {
      title: "SPLTV (3 variabel)",
      desc: "Sistem 3 persamaan linear: gunakan metode Cramer untuk solusi riil (x, y, z).",
      template: `
        <p class="desc">Masukkan koefisien untuk 3 persamaan: a₁x + b₁y + c₁z = d₁</p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="spltv">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="spltv" style="display:none">
          <div class="form-row"><input id="a1" placeholder="a1"><input id="b1" placeholder="b1"><input id="c1" placeholder="c1"><input id="d1" placeholder="d1"></div>
          <div class="form-row"><input id="a2" placeholder="a2"><input id="b2" placeholder="b2"><input id="c2" placeholder="c2"><input id="d2" placeholder="d2"></div>
          <div class="form-row"><input id="a3" placeholder="a3"><input id="b3" placeholder="b3"><input id="c3" placeholder="c3"><input id="d3" placeholder="d3"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="spltv">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-spltv" style="display:none"></div>
        </div>
      `
    }
  ],

  fisika: [
    {
      title: "GLBB (Gerak Lurus Berubah Beraturan)",
      desc: "Kecepatan akhir v = v₀ + a × t. Juga hitung perpindahan: s = v₀t + ½ a t². Satuan: m, m/s, m/s².",
      template: `
        <p class="desc">Masukkan v₀ (m/s), a (m/s²), t (s).</p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="glbb">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="glbb" style="display:none">
          <div class="form-row"><input id="v0" placeholder="v₀ (m/s)"><input id="af" placeholder="a (m/s²)"><input id="tf" placeholder="t (s)"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="glbb">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-glbb" style="display:none"></div>
        </div>
      `
    }
  ],

  kimia: [
    {
      title: "Massa Zat",
      desc: "Massa (gram) = Mol × Mr (g/mol).",
      template: `
        <p class="desc">Masukkan jumlah Mol (mol) dan Mr (g/mol).</p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="massa">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="massa" style="display:none">
          <div class="form-row"><input id="mol" placeholder="Mol (mol)"><input id="mr" placeholder="Mr (g/mol)"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="massa">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-massa" style="display:none"></div>
        </div>
      `
    }
  ],

  ekonomi: [
    {
      title: "Bunga Sederhana",
      desc: "Bunga (Rp) = (Modal × Persen × Waktu) / 100. Satuan: Rp.",
      template: `
        <p class="desc">Masukkan Modal (Rp), tingkat (%) per tahun, dan waktu (tahun).</p>
        <div class="btn-row"><button class="btn" data-action="learn" data-key="bunga">Pelajari Rumus</button></div>
        <div class="learn-area" data-key="bunga" style="display:none">
          <div class="form-row"><input id="modal" placeholder="Modal (Rp)"><input id="persen" placeholder="Suku bunga (%)"><input id="waktu" placeholder="Waktu (tahun)"></div>
          <div class="btn-row"><button class="btn" data-action="calc" data-calc="bunga">Hitung</button><button class="btn alt" data-action="reset">Reset</button></div>
          <div class="result-box" id="res-bunga" style="display:none"></div>
        </div>
      `
    }
  ],

  umum: [
    {
      title: "Kalkulator Umum",
      desc: "Kalkulator cepat — tampilan keypad mirip HP. Tidak ada satuan; gunakan untuk perhitungan umum.",
      template: `
        <div class="form-row"><input id="calc-display" type="text" readonly placeholder="0" /></div>
        <div class="btn-row calc-keys" style="justify-content:center; flex-wrap:wrap; gap:8px;">
          ${["7","8","9","/","4","5","6","*","1","2","3","-","0",".","=","+"].map(k => `<button class="btn" data-action="calckey" data-key="${k}">${k}</button>`).join('')}
          <button class="btn alt" data-action="clear">C</button>
        </div>
      `
    }
  ]
};

// state
let subject = null;
let idx = 0; // current slide index

// DOM refs
const menuScreen = document.getElementById("menuScreen");
const slideWrapper = document.getElementById("slideWrapper");
const slidesRoot = document.getElementById("slides");
const subjectTitle = document.getElementById("subjectTitle");
const backToMenuBtn = document.getElementById("backToMenu");
const prevSlideBtn = document.getElementById("prevSlide");
const nextSlideBtn = document.getElementById("nextSlide");
const btnPrev = document.getElementById("btnPrev");
const btnNext = document.getElementById("btnNext");
const btnReset = document.getElementById("btnReset");

// attach menu handlers
document.querySelectorAll(".menu-btn").forEach(b=>{
  b.addEventListener("click", ()=> {
    const subj = b.dataset.subj;
    openSubject(subj);
  });
});

// back to menu
backToMenuBtn.addEventListener("click", ()=> {
  closeSlides();
});

// navigation buttons
prevSlideBtn.addEventListener("click", prev);
nextSlideBtn.addEventListener("click", next);
btnPrev.addEventListener("click", prev);
btnNext.addEventListener("click", next);
btnReset.addEventListener("click", resetSlideInputs);

// open subject -> build slides
function openSubject(subj){
  subject = subj;
  idx = 0;
  menuScreen.classList.add("hidden");
  slideWrapper.classList.remove("hidden");
  subjectTitle.textContent = capitalize(subj);
  buildSlidesForSubject(subj);
  showSlide(0);
}

// close slide and return to menu
function closeSlides(){
  subject = null;
  idx = 0;
  slidesRoot.innerHTML = "";
  slideWrapper.classList.add("hidden");
  menuScreen.classList.remove("hidden");
}

// build slides HTML inside slidesRoot (absolute positioned slides)
function buildSlidesForSubject(subj){
  slidesRoot.innerHTML = "";
  const list = SUBJECTS[subj] || [];
  list.forEach((s, i) => {
    const el = document.createElement("div");
    el.className = "slide";
    el.dataset.index = i;
    el.innerHTML = `<h2>${escapeHtml(s.title)}</h2><p class="desc">${escapeHtml(s.desc)}</p><div class="content-area">${s.template}</div>`;
    slidesRoot.appendChild(el);
  });
}

// show slide at index i and set transforms
function showSlide(i){
  const children = Array.from(slidesRoot.children);
  if(!children.length) return;
  idx = Math.max(0, Math.min(i, children.length-1));
  children.forEach((el, j)=>{
    el.classList.remove("active","left");
    if(j < idx) el.classList.add("left");
    if(j === idx) el.classList.add("active");
  });
  // after slide rendered, attach internal handlers for "Pelajari Rumus", calc keys, etc.
  attachInternalHandlers();
  updateNavState();
}

// next/prev wrappers
function next(){ showSlide(idx+1) }
function prev(){ showSlide(idx-1) }

// update nav button states
function updateNavState(){
  const total = slidesRoot.children.length;
  prevSlideBtn.disabled = idx === 0;
  nextSlideBtn.disabled = idx === total-1;
  btnPrev.disabled = idx === 0;
  btnNext.disabled = idx === total-1;
}

// attach handlers inside current active slide (learn, calc, reset, calc keys)
function attachInternalHandlers(){
  const active = slidesRoot.querySelector(".slide.active");
  if(!active) return;
  // "Pelajari Rumus" buttons -> reveal learn-area
  active.querySelectorAll("[data-action='learn']").forEach(btn=>{
    btn.addEventListener("click", ()=> {
      const key = btn.dataset.key;
      const la = active.querySelector(`.learn-area[data-key='${key}']`);
      if(la) la.style.display = la.style.display === "none" ? "block" : "block";
    });
  });

  // reset inside slide
  active.querySelectorAll("[data-action='reset']").forEach(btn=>{
    btn.addEventListener("click", ()=> {
      // clear inputs in this slide
      active.querySelectorAll("input").forEach(i => { if(i.type!=="hidden") i.value = ""; });
      // hide results
      active.querySelectorAll(".result-box").forEach(r => r.style.display = "none");
      // clear calc display if any
      const cd = active.querySelector("#calc-display");
      if(cd) cd.value = "";
    });
  });

  // calculation buttons (data-calc)
  active.querySelectorAll("[data-action='calc']").forEach(btn=>{
    btn.addEventListener("click", ()=>{
      const calcType = btn.dataset.calc;
      runCalculation(calcType, active);
    });
  });

  // calculator key buttons (for umum)
  active.querySelectorAll("[data-action='calckey']").forEach(kb=>{
    kb.addEventListener("click", ()=> {
      const key = kb.dataset.key;
      const disp = active.querySelector("#calc-display");
      if(!disp) return;
      if(key === "="){
        try { disp.value = evalSafe(disp.value); } catch { disp.value = "Error"; }
      } else {
        // prevent leading zeros
        if(disp.value === "0" && key !== ".") disp.value = key;
        else disp.value += key;
      }
    });
  });
  // clear button
  active.querySelectorAll("[data-action='clear']").forEach(c=>{
    c.addEventListener("click", ()=> { const disp = active.querySelector("#calc-display"); if(disp) disp.value=""; });
  });
}

// run calculations by type
function runCalculation(type, activeEl){
  switch(type){
    case "lingkaran": {
      const phi = evalSafe(activeEl.querySelector("#phi").value || "3.14");
      const r = parseFloat(activeEl.querySelector("#r").value);
      const resEl = activeEl.querySelector("#res-lingkaran");
      if(isNaN(r)){ showError(resEl,"Masukkan jari-jari (r) dalam cm!"); return; }
      const luas = phi * r * r;
      resEl.style.display = "block";
      resEl.innerText = `Luas = ${formatNumber(luas)} cm² (π = ${phi})`;
      break;
    }
    case "segitiga": {
      const alas = parseFloat(activeEl.querySelector("#alas").value);
      const tinggi = parseFloat(activeEl.querySelector("#tinggi").value);
      const resEl = activeEl.querySelector("#res-segitiga");
      if(isNaN(alas) || isNaN(tinggi)){ showError(resEl,"Isi alas dan tinggi (cm)!"); return; }
      const luas = (alas * tinggi) / 2;
      resEl.style.display = "block";
      resEl.innerText = `Luas = ${formatNumber(luas)} cm²`;
      break;
    }
    case "polinomial": {
      const a = parseFloat(activeEl.querySelector("#pa")?.value || activeEl.querySelector("#pa")?.value);
      // some slides use pa/pb/pc ids, some use pa->id mismatch: handle both sets
      const a1 = parseFloat(activeEl.querySelector("#a")?.value ?? activeEl.querySelector("#pa")?.value);
      const b1 = parseFloat(activeEl.querySelector("#b")?.value ?? activeEl.querySelector("#pb")?.value);
      const c1 = parseFloat(activeEl.querySelector("#c")?.value ?? activeEl.querySelector("#pc")?.value);
      const ax = parseFloat(activeEl.querySelector("#px")?.value ?? activeEl.querySelector("#x")?.value);
      const resEl = activeEl.querySelector("#res-polinomial") ?? activeEl.querySelector("#resPoli");
      const aa = a1; const bb = b1; const cc = c1;
      if(isNaN(aa) || isNaN(bb) || isNaN(cc)){ showError(resEl,"Isi a, b, c terlebih dahulu!"); return; }
      const D = bb*bb - 4*aa*cc;
      if(D < 0){ resEl.style.display="block"; resEl.innerText = "Diskriminan < 0 → tidak ada akar riil."; return; }
      const x1 = (-bb + Math.sqrt(D)) / (2*aa);
      const x2 = (-bb - Math.sqrt(D)) / (2*aa);
      let out = `Akar: x₁ = ${formatNumber(x1)}, x₂ = ${formatNumber(x2)}`;
      if(!isNaN(ax)){
        const fx = aa*ax*ax + bb*ax + cc;
        out += `\nNilai f(${ax}) = ${formatNumber(fx)}`;
      }
      resEl.style.display="block"; resEl.innerText = out;
      break;
    }
    case "spltv": {
      const vals = ["a1","b1","c1","d1","a2","b2","c2","d2","a3","b3","c3","d3"].map(id=>{
        const v = activeEl.querySelector("#"+id)?.value;
        return (v===undefined || v==="") ? NaN : parseFloat(v);
      });
      const resEl = activeEl.querySelector("#res-spltv");
      if(vals.some(isNaN)){ showError(resEl,"Isi semua koefisien dan konstanta!"); return; }
      const [a1,b1,c1,d1,a2,b2,c2,d2,a3,b3,c3,d3] = vals;
      // determinant
      const det = determinant3x3([ [a1,b1,c1],[a2,b2,c2],[a3,b3,c3] ]);
      if(Math.abs(det) < 1e-9){ showError(resEl,"Sistem tidak memiliki solusi unik (det=0)."); return; }
      const detX = determinant3x3([ [d1,b1,c1],[d2,b2,c2],[d3,b3,c3] ]);
      const detY = determinant3x3([ [a1,d1,c1],[a2,d2,c2],[a3,d3,c3] ]);
      const detZ = determinant3x3([ [a1,b1,d1],[a2,b2,d2],[a3,b3,d3] ]);
      const x = detX / det, y = detY / det, z = detZ / det;
      resEl.style.display="block";
      resEl.innerText = `Hasil → x = ${formatNumber(x)}, y = ${formatNumber(y)}, z = ${formatNumber(z)}`;
      break;
    }
    case "glbb": {
      const v0 = parseFloat(activeEl.querySelector("#v0")?.value);
      const a = parseFloat(activeEl.querySelector("#af")?.value || activeEl.querySelector("#aF")?.value);
      const t = parseFloat(activeEl.querySelector("#tf")?.value || activeEl.querySelector("#tF")?.value);
      const resEl = activeEl.querySelector("#res-glbb");
      if(isNaN(v0) || isNaN(a) || isNaN(t)){ showError(resEl,"Isi v₀ (m/s), a (m/s²), dan t (s)!"); return; }
      const v = v0 + a * t;
      const s = v0 * t + 0.5 * a * t * t;
      resEl.style.display="block";
      resEl.innerText = `Kecepatan akhir v = ${formatNumber(v)} m/s\nPerpindahan s = ${formatNumber(s)} m`;
      break;
    }
    case "massa": {
      const mol = parseFloat(activeEl.querySelector("#mol")?.value);
      const mr = parseFloat(activeEl.querySelector("#mr")?.value);
      const resEl = activeEl.querySelector("#res-massa");
      if(isNaN(mol) || isNaN(mr)){ showError(resEl,"Isi jumlah mol (mol) dan Mr (g/mol)!"); return; }
      const massa = mol * mr;
      resEl.style.display="block";
      resEl.innerText = `Massa = ${formatNumber(massa)} g`;
      break;
    }
    case "bunga": {
      const P = parseFloat(activeEl.querySelector("#modal")?.value);
      const i = parseFloat(activeEl.querySelector("#persen")?.value);
      const t = parseFloat(activeEl.querySelector("#waktu")?.value);
      const resEl = activeEl.querySelector("#res-bunga");
      if(isNaN(P)||isNaN(i)||isNaN(t)){ showError(resEl,"Isi modal (Rp), persen (%), dan waktu (tahun)!"); return; }
      const bunga = (P * i * t) / 100;
      resEl.style.display="block";
      resEl.innerText = `Bunga = Rp ${formatCurrency(bunga)}\nTotal = Rp ${formatCurrency(P + bunga)}`;
      break;
    }
    default:
      console.warn("Calc type not handled:", type);
  }
}

// small helpers
function showError(el, msg){ if(!el) return; el.style.display="block"; el.innerText = "⚠️ " + msg; }
function formatNumber(n){ return Number.isFinite(n) ? (Math.abs(n) >= 1e6 ? n.toExponential(6) : (Math.round(n*100)/100).toLocaleString('en-US')) : String(n); }
function formatCurrency(n){ return Math.round(n).toLocaleString('en-US'); }
function determinant3x3(m){
  // m = [[a,b,c],[d,e,f],[g,h,i]]
  return m[0][0]*(m[1][1]*m[2][2]-m[1][2]*m[2][1]) - m[0][1]*(m[1][0]*m[2][2]-m[1][2]*m[2][0]) + m[0][2]*(m[1][0]*m[2][1]-m[1][1]*m[2][0]);
}
function evalSafe(expr){
  // very small safe-eval: allow digits, operators, parentheses, dot
  if(!/^[0-9+\-*/().\s]+$/.test(expr)) throw new Error("Invalid expression");
  // eslint-disable-next-line no-eval
  return eval(expr);
}
function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }
function capitalize(s){ if(!s) return ""; return s.charAt(0).toUpperCase() + s.slice(1); }

// slider utility: show slide index i
function showSlide(i){
  const slides = Array.from(slidesRoot.children);
  slides.forEach((el, j)=>{
    el.classList.remove("active","left");
    if(j < i) el.classList.add("left");
    if(j === i) el.classList.add("active");
  });
  idx = i;
  attachInternalHandlers(); updateNavButtons();
}
function prev(){ if(idx>0) showSlide(idx-1); }
function next(){ if(idx < slidesRoot.children.length-1) showSlide(idx+1); }
function updateNavButtons(){
  btnPrev.disabled = idx === 0;
  prevSlideBtn.disabled = idx === 0;
  btnNext.disabled = idx === slidesRoot.children.length-1;
  nextSlideBtn.disabled = idx === slidesRoot.children.length-1;
}

// reset slide inputs (current slide)
function resetSlideInputs(){
  const active = slidesRoot.querySelector(".slide.active");
  if(!active) return;
  active.querySelectorAll("input").forEach(i=> i.value="");
  active.querySelectorAll(".result-box").forEach(r=> { r.style.display="none"; r.innerText=""; });
  const cd = active.querySelector("#calc-display"); if(cd) cd.value="";
}

// wrapper previously used earlier, ensure id refs valid
const slidesRoot = document.getElementById("slides");

// expose older functions used above to global scope for compatibility
window.showSlide = function(subject){
  // alias: used by index menu buttons earlier in some versions
  openSubject(subject);
};
window.prevSlide = prev;
window.nextSlide = next;
window.resetSlide = resetSlideInputs;
