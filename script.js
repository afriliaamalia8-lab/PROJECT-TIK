/* script.js — World Championship Edition (Afrilia & Ghalia)
   Developer: tim internasional (disesuaikan untuk anak SMA)
   Catatan: letakkan audio di sounds/*.mp3 dan gambar di img/*.jpg
*/

document.addEventListener("DOMContentLoaded", () => {
  // --- Audio (pilihan B: kualitas MP3) ---
  const sndClick = document.getElementById('sndClick');
  const sndDing = document.getElementById('sndDing');
  const sndWoosh = document.getElementById('sndWoosh');
  function play(audio){
    try { if(audio && audio.play) audio.currentTime = 0, audio.play(); } catch(e){ /* ignore */ }
  }

  // --- Data rumus per mata pelajaran ---
  const SUBJECTS = {
    matematika: [
      // Bangun Datar
      { id: "md_lingkaran", title:"Luas & Keliling Lingkaran", desc:"L = π × r²  •  K = 2πr (satuan: cm) — pilih π: 3.14 atau 22/7", template: `
          <div class="form-row">
            <select id="phi_md_lingkaran"><option value="3.14">π = 3.14</option><option value="22/7">π = 22/7</option></select>
            <input id="r_md_lingkaran" type="number" placeholder="Jari-jari r (cm)">
          </div>
          <div class="btn-row"><button class="btn" data-calc="md_lingkaran">Hitung</button></div>
          <div class="result-box" id="res-md_lingkaran"></div>
      `},
      { id:"md_segitiga", title:"Luas & Keliling Segitiga", desc:"L = ½ × alas × tinggi (cm²)  •  K = a+b+c (cm)", template: `
          <div class="form-row"><input id="alas_md_segitiga" type="number" placeholder="Alas (cm)"><input id="tinggi_md_segitiga" type="number" placeholder="Tinggi (cm)"></div>
          <div class="form-row"><input id="a_md_seg" placeholder="Sisi a (cm)"><input id="b_md_seg" placeholder="Sisi b (cm)"><input id="c_md_seg" placeholder="Sisi c (cm)"></div>
          <div class="btn-row"><button class="btn" data-calc="md_segitiga">Hitung</button></div>
          <div class="result-box" id="res-md_segitiga"></div>
      `},
      { id:"md_persegi", title:"Persegi - Luas & Keliling", desc:"L = s² ; K = 4s (satuan: cm)", template: `
          <div class="form-row"><input id="s_md_persegi" placeholder="Sisi s (cm)"></div>
          <div class="btn-row"><button class="btn" data-calc="md_persegi">Hitung</button></div>
          <div class="result-box" id="res-md_persegi"></div>
      `},
      { id:"md_persegipanjang", title:"Persegi Panjang", desc:"L = p × l ; K = 2(p + l) (cm)", template: `
          <div class="form-row"><input id="p_md_pp" placeholder="Panjang p (cm)"><input id="l_md_pp" placeholder="Lebar l (cm)"></div>
          <div class="btn-row"><button class="btn" data-calc="md_persegipanjang">Hitung</button></div>
          <div class="result-box" id="res-md_persegipanjang"></div>
      `},
      // Trigonometri & Identitas
      { id:"md_trig_ref", title:"Perbandingan & Identitas Trigonometri", desc:"Sin, Cos, Tan dan identitas penting", template: `
          <div class="desc">
            <p><b>sin α</b> = de/mi • <b>cos α</b> = sa/mi • <b>tan α</b> = de/sa</p>
            <p><b>Identitas:</b> cos²θ + sin²θ = 1 ; tanθ = sinθ / cosθ</p>
          </div>
      `},
      // SPLTV (Sistem Persamaan Linear Tiga Variabel) - we'll implement 2x2 and 3x3 basic
      { id:"md_spltv_2x2", title:"SPL 2x2 (Sistem 2 Persamaan 2 Variabel)", desc:"Selesaikan ax + by = e dan cx + dy = f", template: `
          <div class="form-row"><input id="a_s1" placeholder="a"><input id="b_s1" placeholder="b"><input id="e_s1" placeholder="e"></div>
          <div class="form-row"><input id="c_s2" placeholder="c"><input id="d_s2" placeholder="d"><input id="f_s2" placeholder="f"></div>
          <div class="btn-row"><button class="btn" data-calc="md_spltv_2x2">Hitung</button></div>
          <div class="result-box" id="res-md_spltv_2x2"></div>
      `},
      // Polinomial quadratic (akar)
      { id:"md_polinomial", title:"Polinomial: Akar Persamaan Kuadrat", desc:"ax² + bx + c = 0 → rumus ABC", template: `
          <div class="form-row"><input id="a_quad" placeholder="a"><input id="b_quad" placeholder="b"><input id="c_quad" placeholder="c"></div>
          <div class="btn-row"><button class="btn" data-calc="md_polinomial">Hitung</button></div>
          <div class="result-box" id="res-md_polinomial"></div>
      `},
      // Bangun ruang: Kubus dan Tabung contoh (π pilihan)
      { id:"md_kubus", title:"Bangun Ruang: Kubus", desc:"V = s³ ; L = 6s² (satuan: cm)", template: `
          <div class="form-row"><input id="s_kubus" placeholder="Sisi s (cm)"></div>
          <div class="btn-row"><button class="btn" data-calc="md_kubus">Hitung</button></div>
          <div class="result-box" id="res-md_kubus"></div>
      `},
      { id:"md_tabung", title:"Tabung (Silinder)", desc:"V = π r² t ; L = 2πr(r+t) (satuan: cm)", template: `
          <div class="form-row"><select id="phi_tabung"><option value="3.14">π = 3.14</option><option value="22/7">π = 22/7</option></select><input id="r_tabung_md" placeholder="r (cm)"><input id="t_tabung_md" placeholder="t (cm)"></div>
          <div class="btn-row"><button class="btn" data-calc="md_tabung">Hitung</button></div>
          <div class="result-box" id="res-md_tabung"></div>
      `},
    ],
    fisika: [
      { id:"f_glbb", title:"GLBB", desc:"v = v₀ + a·t  •  s = v₀t + ½ a t² (satuan: m, m/s, s)", template: `
          <div class="form-row"><input id="v0_glbb" placeholder="v₀ (m/s)"><input id="a_glbb" placeholder="a (m/s²)"><input id="t_glbb" placeholder="t (s)"></div>
          <div class="btn-row"><button class="btn" data-calc="f_glbb">Hitung</button></div>
          <div class="result-box" id="res-f_glbb"></div>
      `},
      { id:"f_kecepatan_jatuh", title:"Gerak Jatuh Bebas", desc:"v = g t ; s = ½ g t² (g = 9.8 m/s²)", template: `
          <div class="form-row"><input id="t_jatuh" placeholder="t (s)"></div>
          <div class="btn-row"><button class="btn" data-calc="f_kecepatan_jatuh">Hitung</button></div>
          <div class="result-box" id="res-f_kecepatan_jatuh"></div>
      `},
      { id:"f_ohm", title:"Hukum Ohm", desc:"V = I R (V, A, Ω)", template: `
          <div class="form-row"><input id="v_ohm2" placeholder="Tegangan V (V)"><input id="i_ohm2" placeholder="Arus I (A)"><input id="r_ohm2" placeholder="Hambatan R (Ω)"></div>
          <div class="desc" style="font-size:0.85rem;color:#4a3f2f;margin-top:6px;">Isi dua nilai untuk mencari yang ketiga</div>
          <div class="btn-row"><button class="btn" data-calc="f_ohm">Hitung</button></div>
          <div class="result-box" id="res-f_ohm"></div>
      `},
      { id:"f_energi", title:"Energi Kinetik & Potensial", desc:"Ek = ½ m v² ; Ep = m g h (kg, m, J)", template: `
          <div class="form-row"><input id="m_en" placeholder="Massa m (kg)"><input id="v_en2" placeholder="Kecepatan v (m/s)"><input id="h_en2" placeholder="Tinggi h (m)"></div>
          <div class="btn-row"><button class="btn" data-calc="f_energi">Hitung</button></div>
          <div class="result-box" id="res-f_energi"></div>
      `},
    ],
    kimia: [
      { id:"k_mol", title:"Menghitung Mol", desc:"Mol = massa / Ar atau massa / Mr (satuan: gram, g/mol)", template: `
          <div class="form-row"><input id="massa_k" placeholder="Massa (gram)"><input id="armr_k" placeholder="Ar atau Mr (g/mol)"></div>
          <div class="btn-row"><button class="btn" data-calc="k_mol">Hitung</button></div>
          <div class="result-box" id="res-k_mol"></div>
      `},
      { id:"k_ideal", title:"Persamaan Gas Ideal (P·V = n·R·T)", desc:"P (atm), V (L), n (mol), T (°C)", template: `
          <div class="form-row"><input id="p_g" placeholder="P (atm)"><input id="v_g" placeholder="V (L)"></div>
          <div class="form-row"><input id="n_g" placeholder="n (mol)"><input id="t_g" placeholder="T (°C)"></div>
          <div class="desc" style="font-size:0.85rem;color:#4a3f2f;margin-top:6px;">Isi 3 nilai untuk mencari yang satu</div>
          <div class="btn-row"><button class="btn" data-calc="k_ideal">Hitung</button></div>
          <div class="result-box" id="res-k_ideal"></div>
      `},
    ],
    ekonomi: [
      { id:"e_fungsi", title:"Fungsi Permintaan & Penawaran (Garis)", desc:"(P-P1)/(P2-P1) = (Q-Q1)/(Q2-Q1) — Temukan bentuk P = m·Q + c", template: `
          <div class="form-row"><input id="p1_e" placeholder="P1 (harga)"><input id="q1_e" placeholder="Q1 (kuantitas)"></div>
          <div class="form-row"><input id="p2_e" placeholder="P2 (harga)"><input id="q2_e" placeholder="Q2 (kuantitas)"></div>
          <div class="btn-row"><button class="btn" data-calc="e_fungsi">Hitung</button></div>
          <div class="result-box" id="res-e_fungsi"></div>
      `},
      { id:"e_elastisitas", title:"Elastisitas Permintaan (Ed)", desc:"Ed = (ΔQ/ΔP) × (P1/Q1) atau %ΔQ/%ΔP × (P1/Q1)", template: `
          <div class="form-row"><input id="q1_el" placeholder="Q1 (awal)"><input id="q2_el" placeholder="Q2 (akhir)"></div>
          <div class="form-row"><input id="p1_el2" placeholder="P1 (awal)"><input id="p2_el2" placeholder="P2 (akhir)"></div>
          <div class="btn-row"><button class="btn" data-calc="e_elastisitas">Hitung</button></div>
          <div class="result-box" id="res-e_elastisitas"></div>
      `},
      { id:"e_pendapatan", title:"Pendapatan Nasional (GNP → DI)", desc:"GNP = GDP + Pendapatan Netto LN ... DI akhir", template: `
          <div class="form-row"><input id="gdp_e" placeholder="GDP (Rp)"><input id="netto_ln_e" placeholder="Pendapatan Netto Luar Negeri (Rp)"></div>
          <div class="form-row"><input id="depresiasi_e" placeholder="Depresiasi (Rp)"><input id="pajak_tl_e" placeholder="Pajak Tidak Langsung (Rp)"></div>
          <div class="form-row"><input id="transfer_e" placeholder="Transfer Payment (Rp)"><input id="iuran_e" placeholder="Iuran Sosial (Rp)"></div>
          <div class="form-row"><input id="pajak_l_e" placeholder="Pajak Langsung (Rp)"></div>
          <div class="btn-row"><button class="btn" data-calc="e_pendapatan">Hitung</button></div>
          <div class="result-box" id="res-e_pendapatan"></div>
      `},
      { id:"e_indeksharga", title:"Indeks Harga (Laspeyres & Paasche)", desc:"IL = (Σ(Pn×Qo)/Σ(Po×Qo))×100 ; IP = (Σ(Pn×Qn)/Σ(Po×Qn))×100", template: `
          <div class="form-row"><input id="pnqo_e" placeholder="Σ(Pn × Qo)"><input id="poqo_e" placeholder="Σ(Po × Qo)"></div>
          <div class="form-row"><input id="pnqn_e" placeholder="Σ(Pn × Qn)"><input id="poqn_e" placeholder="Σ(Po × Qn)"></div>
          <div class="btn-row"><button class="btn" data-calc="e_indeksharga">Hitung</button></div>
          <div class="result-box" id="res-e_indeksharga"></div>
      `},
      { id:"e_inflasi", title:"Laju Inflasi", desc:"Laju Inflasi = ((I2 - I1) / I1) × 100%", template: `
          <div class="form-row"><input id="ihk1_e" placeholder="IHK periode 1"><input id="ihk2_e" placeholder="IHK periode 2"></div>
          <div class="btn-row"><button class="btn" data-calc="e_inflasi">Hitung</button></div>
          <div class="result-box" id="res-e_inflasi"></div>
      `},
      { id:"e_pph21", title:"Pajak Penghasilan (PPh 21 sederhana)", desc:"Penghasilan Bersih = Gaji - 5% biaya jabatan - iuran pensiun (max 200k)", template: `
          <div class="form-row"><input id="gaji_e" placeholder="Penghasilan Bruto/Bulan (Rp)"><input id="iuran_pensiun_e" placeholder="Iuran Pensiun/Bulan (Rp)"></div>
          <div class="form-row">
            <select id="ptkp_e">
              <option value="54000000">Lajang/TK0 (PTKP Rp54.000.000)</option>
              <option value="58500000">Kawin/K0 (PTKP Rp58.500.000)</option>
              <option value="63000000">Kawin, 1 Anak (PTKP Rp63.000.000)</option>
              <option value="67500000">Kawin, 2 Anak (PTKP Rp67.500.000)</option>
              <option value="72000000">Kawin, 3 Anak (PTKP Rp72.000.000)</option>
            </select>
          </div>
          <div class="btn-row"><button class="btn" data-calc="e_pph21">Hitung</button></div>
          <div class="result-box" id="res-e_pph21"></div>
      `},
      { id:"e_pbb", title:"Pajak Bumi & Bangunan (PBB)", desc:"NJKP = 20% × (NJOP - NJOPTKP); PBB = 0.5% × NJKP", template: `
          <div class="form-row"><input id="njop_e" placeholder="Total NJOP (Rp)"><input id="njoptkp_e" placeholder="NJOPTKP (default Rp12.000.000)" value="12000000"></div>
          <div class="btn-row"><button class="btn" data-calc="e_pbb">Hitung</button></div>
          <div class="result-box" id="res-e_pbb"></div>
      `},
    ],
    umum: [
      { id:"u_calc", title:"Kalkulator Umum", desc:"Kalkulator cepat — mirip kalkulator HP", template: `
        <input id="calc-display" type="text" readonly placeholder="0" style="width:100%; padding:12px; border-radius:8px; border:1px solid rgba(120,100,70,0.12); font-size:1.3rem; text-align:right;">
        <div class="calculator-keys" data-delegate="calculator">
          <!-- keys di-generate oleh JS saat build -->
        </div>
      `},
    ]
  };

  // --- DOM refs ---
  const menuScreen = document.getElementById("menuScreen");
  const slideWrapper = document.getElementById("slideWrapper");
  const slidesViewport = document.getElementById("slidesViewport");
  const subjectTitle = document.getElementById("subjectTitle");
  const backToMenu = document.getElementById("backToMenu");
  const btnPrev = document.getElementById("btnPrev");
  const btnNext = document.getElementById("btnNext");
  const btnReset = document.getElementById("btnReset");

  // State
  let currentSubject = null;
  let currentIndex = 0;

  // Menu buttons
  document.body.addEventListener("click", (e) => {
    const btn = e.target.closest(".menu-btn");
    if (btn) {
      play(sndWoosh);
      openSubject(btn.dataset.subject);
    }
  });

  // Header actions (back, prev, next, reset)
  backToMenu.addEventListener("click", () => { play(sndClick); closeSlides(); });
  btnPrev.addEventListener("click", () => { play(sndClick); prevSlide(); });
  btnNext.addEventListener("click", () => { play(sndClick); nextSlide(); });
  btnReset.addEventListener("click", () => { play(sndClick); const active = slidesViewport.querySelector(".slide.active"); if(active) resetInputs(active); });

  // Delegate for calculate buttons and calculator keys
  document.body.addEventListener("click", (e) => {
    const calcBtn = e.target.closest("[data-calc]");
    if (calcBtn) {
      play(sndClick);
      const type = calcBtn.dataset.calc;
      const slide = calcBtn.closest(".slide");
      runCalculation(type, slide);
    }

    // Calculator keys delegation
    const calcGrid = e.target.closest('[data-delegate="calculator"]');
    if (calcGrid) {
      const key = e.target.dataset.key;
      if (key !== undefined) {
        handleCalculatorKey(key, calcGrid.parentElement);
        play(sndClick);
      }
    }
  });

  // Build & open slides
  function openSubject(subject){
    currentSubject = subject;
    currentIndex = 0;
    menuScreen.classList.add("hidden");
    slideWrapper.classList.remove("hidden");
    subjectTitle.textContent = capitalize(subject);
    buildSlides(subject);
    showSlide(0);
    play(sndWoosh);
  }

  function closeSlides(){
    slideWrapper.classList.add("hidden");
    menuScreen.classList.remove("hidden");
    slidesViewport.innerHTML = "";
    currentSubject = null;
  }

  function buildSlides(subject){
    slidesViewport.innerHTML = "";
    const data = SUBJECTS[subject] || [];
    data.forEach((item, idx) => {
      const slide = document.createElement("article");
      slide.className = "slide";
      slide.dataset.index = idx;
      slide.innerHTML = `<h2>${item.title}</h2><p class="desc">${item.desc}</p>${item.template}`;
      slidesViewport.appendChild(slide);

      // For calculator keys generation (umum)
      if(item.id === "u_calc") {
        const keysArea = slide.querySelector('[data-delegate="calculator"]');
        if(keysArea) {
          const keys = ["C","/","*","-","7","8","9","+","4","5","6","=","1","2","3","0","."];
          keysArea.innerHTML = keys.map(k => {
            let cls = "btn";
            if(['/','*','-','+','=','C'].includes(k)) cls += " alt";
            if(k === '=' ) return `<button class="${cls}" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
            if(k === '0') return `<button class="${cls}" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
            return `<button class="${cls}" data-key="${k}">${k}</button>`;
          }).join('');
        }
      }
    });
  }

  function showSlide(index){
    const slides = Array.from(slidesViewport.children);
    if(slides.length === 0) return;
    if(index < 0) index = 0;
    if(index >= slides.length) index = slides.length - 1;
    currentIndex = index;
    slides.forEach((sl, i) => {
      sl.classList.remove("active","left");
      if(i < index) sl.classList.add("left");
      else if(i === index) sl.classList.add("active");
    });
    updateNav();
  }

  function nextSlide(){ showSlide(currentIndex + 1); }
  function prevSlide(){ showSlide(currentIndex - 1); }

  function updateNav(){
    const slides = slidesViewport.children.length;
    btnPrev.disabled = currentIndex === 0;
    btnNext.disabled = currentIndex === slides - 1;
  }

  function resetInputs(slide){
    slide.querySelectorAll('input, select').forEach(i => {
      if(i.id === 'njoptkp_e') return;
      i.value = '';
    });
    slide.querySelectorAll('.result-box').forEach(r => { r.style.display = 'none'; r.innerHTML = ''; });
  }

  // ----------------
  // Calculator general helper
  // ----------------
  function handleCalculatorKey(key, context){
    const display = context.querySelector('#calc-display');
    if(!display) return;
    if(key === 'C') display.value = '';
    else if(key === '=') {
      try {
        // safe eval: only numbers and arith ops allowed
        const safe = display.value.replace(/[^0-9+\-*/(). ]/g,'');
        display.value = Function('"use strict";return (' + safe + ')')();
      } catch (err) {
        display.value = 'Error';
      }
    } else {
      if(display.value === 'Error') display.value = '';
      display.value += key;
    }
  }

  // ----------------
  // Run calculations for many formulas
  // ----------------
  function runCalculation(type, context){
    const getVal = (id) => {
      const el = context.querySelector('#' + id);
      if(!el) return NaN;
      const v = parseFloat(el.value);
      return isNaN(v) ? NaN : v;
    };
    const show = (id, text) => {
      const res = context.querySelector(`#res-${id}`);
      if(!res) return;
      res.style.display = 'block';
      res.innerHTML = text;
      play(sndDing);
    };
    const showErr = (id, msg) => show(id, `<span style="color:#c44">⚠️ ${msg}</span>`);

    // Format helper
    const fmt = (n, u='') => {
      if (isNaN(n)) return '-';
      // if number is large, show separators
      if (Math.abs(n) >= 1000) return n.toLocaleString('id-ID', {maximumFractionDigits: 4}) + (u ? ` ${u}` : '');
      return Number.parseFloat(n.toFixed(4)).toString() + (u ? ` ${u}` : '');
    };

    switch(type){
      // --- Matematika ---
      case "md_lingkaran": {
        const phiVal = context.querySelector('#phi_md_lingkaran').value;
        const r = parseFloat(context.querySelector('#r_md_lingkaran').value);
        const resId = 'md_lingkaran';
        if(!r && r !== 0) return showErr(resId, 'Isi jari-jari.');
        const pi = (phiVal === '22/7') ? (22/7) : 3.14;
        const luas = pi * r * r;
        const kel = 2 * pi * r;
        return show(resId, `Luas = <strong>${fmt(luas,'cm²')}</strong><br>Keliling = <strong>${fmt(kel,'cm')}</strong> (π = ${phiVal})`);
      }
      case "md_segitiga": {
        const resId='md_segitiga';
        const alas = getVal('alas_md_segitiga'), tinggi = getVal('tinggi_md_segitiga');
        const a = getVal('a_md_seg'), b = getVal('b_md_seg'), c = getVal('c_md_seg');
        if(isNaN(alas) || isNaN(tinggi)) return showErr(resId, 'Alas dan tinggi harus diisi.');
        const luas = 0.5 * alas * tinggi;
        let kel = '—';
        if(!isNaN(a)&&!isNaN(b)&&!isNaN(c)) kel = `${fmt(a+b+c,'cm')}`;
        return show(resId, `Luas = <strong>${fmt(luas,'cm²')}</strong><br>Keliling = <strong>${kel}</strong>`);
      }
      case "md_persegi": {
        const resId='md_persegi';
        const s = getVal('s_md_persegi');
        if(isNaN(s)) return showErr(resId, 'Isi sisi (s).');
        return show(resId, `Luas = <strong>${fmt(s*s,'cm²')}</strong><br>Keliling = <strong>${fmt(4*s,'cm')}</strong>`);
      }
      case "md_persegipanjang": {
        const resId='md_persegipanjang';
        const p = getVal('p_md_pp'), l = getVal('l_md_pp');
        if(isNaN(p)||isNaN(l)) return showErr(resId, 'Isi panjang & lebar.');
        return show(resId, `Luas = <strong>${fmt(p*l,'cm²')}</strong><br>Keliling = <strong>${fmt(2*(p+l),'cm')}</strong>`);
      }
      case "md_spltv_2x2": {
        const resId='md_spltv_2x2';
        const a = getVal('a_s1'), b = getVal('b_s1'), e = getVal('e_s1');
        const c = getVal('c_s2'), d = getVal('d_s2'), f = getVal('f_s2');
        if([a,b,c,d,e,f].some(v=>isNaN(v))) return showErr(resId, 'Isi semua koefisien dan konstanta.');
        const D = a*d - b*c;
        if(Math.abs(D) < 1e-12) return showErr(resId, 'Sistem tidak memiliki solusi unik (determinan = 0).');
        const x = (e*d - b*f) / D;
        const y = (a*f - e*c) / D;
        return show(resId, `Solusi: x = <strong>${fmt(x)}</strong>, y = <strong>${fmt(y)}</strong>`);
      }
      case "md_polinomial": {
        const resId='md_polinomial';
        const a = getVal('a_quad'), b = getVal('b_quad'), c = getVal('c_quad');
        if([a,b,c].some(v=>isNaN(v))) return showErr(resId, 'Isi a, b, c.');
        if(Math.abs(a) < 1e-12) return showErr(resId, 'a tidak boleh 0 untuk kuadrat.');
        const D = b*b - 4*a*c;
        if(D < 0) {
          const real = -b / (2*a);
          const imag = Math.sqrt(Math.abs(D)) / (2*a);
          return show(resId, `Akar kompleks: x₁ = ${fmt(real)} + ${fmt(imag)}i , x₂ = ${fmt(real)} - ${fmt(imag)}i`);
        } else {
          const x1 = (-b + Math.sqrt(D)) / (2*a);
          const x2 = (-b - Math.sqrt(D)) / (2*a);
          return show(resId, `Akar: x₁ = <strong>${fmt(x1)}</strong>, x₂ = <strong>${fmt(x2)}</strong>`);
        }
      }
      case "md_kubus": {
        const resId='md_kubus';
        const s = getVal('s_kubus');
        if(isNaN(s)) return showErr(resId, 'Isi sisi.');
        return show(resId, `Volume = <strong>${fmt(Math.pow(s,3),'cm³')}</strong><br>Luas permukaan = <strong>${fmt(6*Math.pow(s,2),'cm²')}</strong>`);
      }
      case "md_tabung": {
        const resId='md_tabung';
        const phiVal = context.querySelector('#phi_tabung').value;
        const r = parseFloat(context.querySelector('#r_tabung_md').value);
        const t = parseFloat(context.querySelector('#t_tabung_md').value);
        if(isNaN(r)||isNaN(t)) return showErr(resId,'Isi jari-jari & tinggi.');
        const pi = (phiVal==='22/7') ? (22/7) : 3.14;
        const V = pi * r * r * t;
        const L = 2 * pi * r * (r + t);
        return show(resId, `Volume = <strong>${fmt(V,'cm³')}</strong><br>Luas Permukaan = <strong>${fmt(L,'cm²')}</strong> (π=${phiVal})`);
      }

      // --- Fisika ---
      case "f_glbb": {
        const resId='f_glbb';
        const v0 = getVal('v0_glbb'), a = getVal('a_glbb'), t = getVal('t_glbb');
        if([v0,a,t].some(v=>isNaN(v))) return showErr(resId,'Isi v₀, a, t.');
        const v = v0 + a * t;
        const s = v0*t + 0.5*a*t*t;
        return show(resId, `Kecepatan akhir v = <strong>${fmt(v,'m/s')}</strong><br>Jarak s = <strong>${fmt(s,'m')}</strong>`);
      }
      case "f_kecepatan_jatuh": {
        const resId='f_kecepatan_jatuh';
        const t = getVal('t_jatuh'); if(isNaN(t)) return showErr(resId,'Isi t.');
        const g = 9.8;
        const v = g * t;
        const s = 0.5 * g * t * t;
        return show(resId, `Kecepatan v = <strong>${fmt(v,'m/s')}</strong><br>Jarak s = <strong>${fmt(s,'m')}</strong>`);
      }
      case "f_ohm": {
        const resId='f_ohm';
        const V = getVal('v_ohm2'), I = getVal('i_ohm2'), R = getVal('r_ohm2');
        if((!isNaN(V) && !isNaN(I))){ return show(resId, `Hambatan R = <strong>${fmt(V/I,'Ω')}</strong>`); }
        if((!isNaN(V) && !isNaN(R))){ return show(resId, `Arus I = <strong>${fmt(V/R,'A')}</strong>`); }
        if((!isNaN(I) && !isNaN(R))){ return show(resId, `Tegangan V = <strong>${fmt(I*R,'V')}</strong>`); }
        return showErr(resId, 'Isi dua dari tiga nilai.');
      }
      case "f_energi": {
        const resId='f_energi';
        const m = getVal('m_en'), v = getVal('v_en2'), h = getVal('h_en2');
        if(isNaN(m)) return showErr(resId,'Massa harus diisi.');
        const Ek = 0.5 * m * v * v;
        const Ep = m * 9.8 * h;
        return show(resId, `Energi Kinetik = <strong>${fmt(Ek,'J')}</strong><br>Energi Potensial = <strong>${fmt(Ep,'J')}</strong>`);
      }

      // --- Kimia ---
      case "k_mol": {
        const resId='k_mol';
        const massa = getVal('massa_k'), armr = getVal('armr_k');
        if(isNaN(massa) || isNaN(armr)) return showErr(resId,'Isi massa dan Ar/Mr.');
        const n = massa / armr;
        return show(resId, `Jumlah mol = <strong>${fmt(n,'mol')}</strong>`);
      }
      case "k_ideal": {
        const resId='k_ideal';
        let P = getVal('p_g'), V = getVal('v_g'), n = getVal('n_g'), T_c = parseFloat(context.querySelector('#t_g')?.value || NaN);
        const R = 0.0821; // L·atm/(mol·K)
        let T = isNaN(T_c) ? NaN : (T_c + 273.15);
        if(isNaN(P)) { if([V,n,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari P.'); P = n*R*T/V; return show(resId, `P = <strong>${fmt(P,'atm')}</strong>`); }
        if(isNaN(V)) { if([P,n,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari V.'); V = n*R*T/P; return show(resId, `V = <strong>${fmt(V,'L')}</strong>`); }
        if(isNaN(n)) { if([P,V,T].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari n.'); n = P*V/(R*T); return show(resId, `n = <strong>${fmt(n,'mol')}</strong>`); }
        if(isNaN(T)) { if([P,V,n].some(v=>isNaN(v))) return showErr(resId,'Isi 3 nilai untuk mencari T.'); T = P*V/(n*R); return show(resId, `T = <strong>${fmt(T-273.15,'°C')}</strong>`); }
        return showErr(resId,'Kosongkan satu field untuk dihitung.');
      }

      // --- Ekonomi ---
      case "e_fungsi": {
        const resId='e_fungsi';
        const p1 = getVal('p1_e'), q1 = getVal('q1_e'), p2 = getVal('p2_e'), q2 = getVal('q2_e');
        if([p1,q1,p2,q2].some(v=>isNaN(v))) return showErr(resId,'Isi semua titik harga & kuantitas.');
        // slope in price-vs-quantity (P = mQ + c)
        const m = (p2 - p1) / (q2 - q1);
        const c = p1 - m * q1;
        return show(resId, `Fungsi (harga terhadap kuantitas): <strong>P = ${fmt(m)}·Q + ${fmt(c)}</strong>`);
      }
      case "e_elastisitas": {
        const resId='e_elastisitas';
        const q1 = getVal('q1_el'), q2 = getVal('q2_el'), p1 = getVal('p1_el2'), p2 = getVal('p2_el2');
        if([q1,q2,p1,p2].some(v=>isNaN(v))) return showErr(resId,'Isi semua field.');
        // using point formula Ed = (ΔQ/ΔP) * (P1/Q1)
        const ed = ((q2 - q1) / (p2 - p1)) * (p1 / q1);
        let interp = '|Ed| = 1: Uniter';
        const absEd = Math.abs(ed);
        if(absEd > 1) interp = '|Ed| > 1 : Elastis (responsif)';
        else if(absEd < 1) interp = '|Ed| < 1 : Inelastis (kurang responsif)';
        return show(resId, `Elastisitas (Ed) = <strong>${fmt(ed)}</strong><br><em>${interp}</em>`);
      }
      case "e_pendapatan": {
        const resId='e_pendapatan';
        const gdp = getVal('gdp_e'), netto = getVal('netto_ln_e')||0, dep = getVal('depresiasi_e')||0, pajak_tl = getVal('pajak_tl_e')||0;
        const transfer = getVal('transfer_e')||0, iuran = getVal('iuran_e')||0, pajak_l = getVal('pajak_l_e')||0;
        if(isNaN(gdp)) return showErr(resId,'GDP harus diisi.');
        const gnp = gdp + netto;
        const nnp = gnp - dep;
        const nni = nnp - pajak_tl;
        const pi = nni + transfer - iuran;
        const di = pi - pajak_l;
        return show(resId, `GNP = <strong>${fmt(gnp)}</strong><br>NNP = <strong>${fmt(nnp)}</strong><br>NNI = <strong>${fmt(nni)}</strong><br>PI = <strong>${fmt(pi)}</strong><br>DI = <strong>${fmt(di)}</strong>`);
      }
      case "e_indeksharga": {
        const resId='e_indeksharga';
        let pnqo = getVal('pnqo_e'), poqo = getVal('poqo_e'), pnqn = getVal('pnqn_e'), poqn = getVal('poqn_e');
        let out = '';
        if(!isNaN(pnqo) && !isNaN(poqo)) out += `Indeks Laspeyres (IL) = <strong>${fmt(pnqo/poqo*100,'%')}</strong><br>`;
        if(!isNaN(pnqn) && !isNaN(poqn)) out += `Indeks Paasche (IP) = <strong>${fmt(pnqn/poqn*100,'%')}</strong>`;
        if(out === '') return showErr(resId,'Isi data untuk salah satu indeks.');
        return show(resId, out);
      }
      case "e_inflasi": {
        const resId='e_inflasi';
        const i1 = getVal('ihk1_e'), i2 = getVal('ihk2_e');
        if(isNaN(i1)||isNaN(i2)) return showErr(resId,'Isi kedua indeks harga.');
        const laju = (i2 - i1) / i1 * 100;
        return show(resId, `Laju Inflasi = <strong>${fmt(laju,'%')}</strong>`);
      }
      case "e_pph21": {
        const resId='e_pph21';
        const gaji = getVal('gaji_e'), iuran = getVal('iuran_pensiun_e')||0;
        const ptkp = parseFloat(context.querySelector('#ptkp_e').value || 54000000);
        if(isNaN(gaji)) return showErr(resId,'Isi gaji per bulan.');
        const biayaJabatan = Math.min(0.05 * gaji, 500000); // cap common
        const nettoBulan = gaji - biayaJabatan - Math.min(iuran, 200000);
        const nettoTahun = nettoBulan * 12;
        const pkp = Math.max(0, nettoTahun - ptkp);
        const tarif = 0.05;
        const pphTahun = tarif * pkp;
        return show(resId, `Netto/tahun = <strong>Rp ${fmt(nettoTahun)}</strong><br>PKP = <strong>Rp ${fmt(pkp)}</strong><br>PPh terutang/tahun = <strong>Rp ${fmt(pphTahun)}</strong><br>PPh/bulan ≈ <strong>Rp ${fmt(pphTahun/12)}</strong>`);
      }
      case "e_pbb": {
        const resId='e_pbb';
        const njop = getVal('njop_e'), njoptkp = getVal('njoptkp_e');
        if(isNaN(njop)) return showErr(resId,'Isi NJOP.');
        const njkp = 0.2 * (njop - (isNaN(njoptkp) ? 12000000 : njoptkp));
        const pbb = 0.005 * njkp;
        return show(resId, `NJKP = <strong>Rp ${fmt(njkp)}</strong><br>PBB Terutang = <strong>Rp ${fmt(pbb)}</strong>`);
      }

      // --- Kalkulator umum handled by delegation separately (no type here)
      default:
        console.warn('Unknown calc type', type);
        break;
    }
  }

  // --- small helpers ---
  function capitalize(s){ return s.charAt(0).toUpperCase() + s.slice(1); }

  // Initialize: nothing selected yet
  // Accessibility: keyboard navigation for slides
  document.addEventListener('keydown', (e) => {
    if(document.getElementById('slideWrapper').classList.contains('hidden')) return;
    if(e.key === 'ArrowRight') nextSlide();
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'Escape') { closeSlides(); play(sndClick); }
  });

  // Make sure slides viewport shows first slide when loaded
  window.addEventListener('resize', () => { /* could adjust layout if needed */ });

  // Initial tiny animation (menu)
  setTimeout(()=> {
    document.querySelectorAll('.menu-btn').forEach((b,i)=>{
      b.style.transitionDelay = (i*30) + 'ms';
      b.style.transform = 'translateY(0)';
    });
  }, 150);
});
