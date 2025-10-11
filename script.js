/* script.js — World Championship 2.0 Edition
   - Multi-level menu architecture for superior organization.
   - Comprehensive formula library for Math, Physics, Chemistry, and Economics.
   - Dynamic UI generation for menus and calculators.
*/

document.addEventListener("DOMContentLoaded", () => {
    // --- MASTER FORMULA DATABASE ---
    const SUBJECT_DATA = {
        matematika: {
            title: "📘 Matematika",
            isCategory: true,
            categories: {
                bangunDatar: {
                    title: "📏 Bangun Datar",
                    slides: [
                        { title: "Persegi", desc: "Menghitung Luas (L) dan Keliling (K).", template: `<div class="form-row"><input id="sisi_persegi" type="number" placeholder="Sisi (s)"></div><div class="btn-row"><button class="btn" data-calc="persegi">Hitung</button></div><div class="result-box" id="res-persegi" style="display:none"></div>` },
                        { title: "Persegi Panjang", desc: "Menghitung Luas (L) dan Keliling (K).", template: `<div class="form-row"><input id="panjang_pp" type="number" placeholder="Panjang (p)"><input id="lebar_pp" type="number" placeholder="Lebar (l)"></div><div class="btn-row"><button class="btn" data-calc="persegipanjang">Hitung</button></div><div class="result-box" id="res-persegipanjang" style="display:none"></div>` },
                        { title: "Segitiga", desc: "Rumus: L = ½ × alas × tinggi", template: `<div class="form-row"><input id="alas_s" type="number" placeholder="Alas"><input id="tinggi_s" type="number" placeholder="Tinggi"></div><div class="btn-row"><button class="btn" data-calc="segitiga">Hitung</button></div><div class="result-box" id="res-segitiga" style="display:none"></div>` },
                        { title: "Lingkaran", desc: "Rumus: L = π × r² & K = 2πr", template: `<div class="form-row"><input id="r_lingkaran" type="number" placeholder="Jari-jari (r)"></div><div class="btn-row"><button class="btn" data-calc="lingkaran">Hitung</button></div><div class="result-box" id="res-lingkaran" style="display:none"></div>` },
                        { title: "Jajar Genjang", desc: "Menghitung Luas (L) dan Keliling (K).", template: `<div class="form-row"><input id="alas_jg" type="number" placeholder="Alas (a)"><input id="tinggi_jg" type="number" placeholder="Tinggi (t)"><input id="miring_jg" type="number" placeholder="Sisi Miring (b)"></div><div class="btn-row"><button class="btn" data-calc="jajargenjang">Hitung</button></div><div class="result-box" id="res-jajargenjang" style="display:none"></div>` },
                        { title: "Belah Ketupat", desc: "Menghitung Luas (L) dan Keliling (K).", template: `<div class="form-row"><input id="d1_bk" type="number" placeholder="Diagonal 1 (d1)"><input id="d2_bk" type="number" placeholder="Diagonal 2 (d2)"></div><div class="btn-row"><button class="btn" data-calc="belahketupat">Hitung</button></div><div class="result-box" id="res-belahketupat" style="display:none"></div>` },
                        { title: "Trapesium", desc: "Menghitung Luas (L).", template: `<div class="form-row"><input id="a_trap" type="number" placeholder="Sisi Sejajar (a)"><input id="b_trap" type="number" placeholder="Sisi Sejajar (b)"><input id="t_trap" type="number" placeholder="Tinggi (t)"></div><div class="btn-row"><button class="btn" data-calc="trapesium">Hitung</button></div><div class="result-box" id="res-trapesium" style="display:none"></div>` },
                    ]
                },
                bangunRuang: {
                    title: "🧊 Bangun Ruang",
                    slides: [
                        { title: "Kubus", desc: "Menghitung Volume (V) dan Luas Permukaan (L).", template: `<div class="form-row"><input id="sisi_kubus" type="number" placeholder="Sisi (s)"></div><div class="btn-row"><button class="btn" data-calc="kubus">Hitung</button></div><div class="result-box" id="res-kubus" style="display:none"></div>` },
                        { title: "Balok", desc: "Menghitung Volume (V) dan Luas Permukaan (L).", template: `<div class="form-row"><input id="p_balok" placeholder="Panjang (p)"><input id="l_balok" placeholder="Lebar (l)"><input id="t_balok" placeholder="Tinggi (t)"></div><div class="btn-row"><button class="btn" data-calc="balok">Hitung</button></div><div class="result-box" id="res-balok" style="display:none"></div>` },
                        { title: "Tabung (Silinder)", desc: "Menghitung Volume (V) dan Luas Permukaan (L).", template: `<div class="form-row"><input id="r_tabung" placeholder="Jari-jari (r)"><input id="t_tabung" placeholder="Tinggi (t)"></div><div class="btn-row"><button class="btn" data-calc="tabung">Hitung</button></div><div class="result-box" id="res-tabung" style="display:none"></div>` },
                        { title: "Kerucut", desc: "Menghitung Volume (V) dan Luas Permukaan (L).", template: `<div class="form-row"><input id="r_kerucut" placeholder="Jari-jari (r)"><input id="t_kerucut" placeholder="Tinggi (t)"></div><div class="btn-row"><button class="btn" data-calc="kerucut">Hitung</button></div><div class="result-box" id="res-kerucut" style="display:none"></div>` },
                        { title: "Bola", desc: "Menghitung Volume (V) dan Luas Permukaan (L).", template: `<div class="form-row"><input id="r_bola" placeholder="Jari-jari (r)"></div><div class="btn-row"><button class="btn" data-calc="bola">Hitung</button></div><div class="result-box" id="res-bola" style="display:none"></div>` },
                    ]
                },
                trigonometri: {
                    title: "📐 Trigonometri",
                    slides: [
                        { title: "Perbandingan Trigonometri", desc: "sin α = de/mi, cos α = sa/mi, tan α = de/sa", template: `<p><b>Sinus (sin):</b> Perbandingan sisi <b>de</b>pan dengan sisi <b>mi</b>ring.</p><p><b>Cosinus (cos):</b> Perbandingan sisi <b>sa</b>mping dengan sisi <b>mi</b>ring.</p><p><b>Tangen (tan):</b> Perbandingan sisi <b>de</b>pan dengan sisi <b>sa</b>mping.</p>`},
                        { title: "Identitas Trigonometri", desc: "Hubungan fundamental antar fungsi trigonometri.", template: `<p>• sin²θ + cos²θ = 1</p><p>• tan θ = sin θ / cos θ</p><p>• 1 + tan²θ = sec²θ</p><p>• csc θ = 1 / sin θ</p><p>• sec θ = 1 / cos θ</p>`},
                        { title: "Persamaan Trigonometri", desc: "Solusi umum untuk persamaan sinus, cosinus, dan tangen.", template: `<b>Persamaan Sinus:</b> sin(x) = sin(θ) <div>x₁ = θ + k·360°</div> <div>x₂ = (180°-θ) + k·360°</div><br><b>Persamaan Cosinus:</b> cos(x) = cos(θ) <div>x₁ = θ + k·360°</div> <div>x₂ = -θ + k·360°</div><br><b>Persamaan Tangen:</b> tan(x) = tan(θ) <div>x = θ + k·180°</div>` },
                    ]
                }
            }
        },
        fisika: {
            title: "🔭 Fisika",
            isCategory: false,
            slides: [
                { title: "Gerak Lurus (GLBB)", desc: "v = v₀ + a·t dan s = v₀t + ½at²", template: `<div class="form-row"><input id="v0" placeholder="v₀ (m/s)"><input id="af" placeholder="a (m/s²)"><input id="tf" placeholder="t (s)"></div><div class="btn-row"><button class="btn" data-calc="glbb">Hitung</button></div><div class="result-box" id="res-glbb" style="display:none"></div>` },
                { title: "Gerak Parabolik", desc: "Menghitung posisi (x,y) pada waktu t.", template: `<div class="form-row"><input id="v0_par" placeholder="V₀ (m/s)"><input id="theta_par" placeholder="Sudut θ (°)" value="45"><input id="t_par" placeholder="Waktu (t)"></div><div class="btn-row"><button class="btn" data-calc="parabolik">Hitung</button></div><div class="result-box" id="res-parabolik" style="display:none"></div>` },
                { title: "Energi Kinetik & Potensial", desc: "Menghitung Energi Kinetik (Ek) dan Potensial (Ep).", template: `<div class="form-row"><input id="massa_en" placeholder="Massa (kg)"><input id="v_en" placeholder="Kecepatan (m/s)"><input id="h_en" placeholder="Tinggi (m)"></div><div class="btn-row"><button class="btn" data-calc="energi">Hitung</button></div><div class="result-box" id="res-energi" style="display:none"></div>` },
                { title: "Hukum Ohm", desc: "Menghitung Tegangan (V), Arus (I), atau Hambatan (R).", template: `<div class="form-row"><input id="v_ohm" placeholder="Tegangan (V)"><input id="i_ohm" placeholder="Arus (A)"><input id="r_ohm" placeholder="Hambatan (Ω)"></div><p class="desc" style="font-size:0.8rem;">Isi dua nilai untuk mencari yang ketiga.</p><div class="btn-row"><button class="btn" data-calc="ohm">Hitung</button></div><div class="result-box" id="res-ohm" style="display:none"></div>` },
                { title: "Gaya Coulomb", desc: "F = k (Q₁Q₂) / r²", template: `<div class="form-row"><input id="q1_coulomb" placeholder="Muatan Q₁ (C)"><input id="q2_coulomb" placeholder="Muatan Q₂ (C)"><input id="r_coulomb" placeholder="Jarak r (m)"></div><div class="btn-row"><button class="btn" data-calc="coulomb">Hitung</button></div><div class="result-box" id="res-coulomb" style="display:none"></div>` },
                { title: "Hukum Snellius", desc: "n₁ sin(θ₁) = n₂ sin(θ₂)", template: `<div class="form-row"><input id="n1_snell" placeholder="Indeks Bias 1 (n₁)"><input id="th1_snell" placeholder="Sudut Datang θ₁ (°)"></div><div class="form-row"><input id="n2_snell" placeholder="Indeks Bias 2 (n₂)"></div><div class="btn-row"><button class="btn" data-calc="snellius">Hitung Sudut Bias θ₂</button></div><div class="result-box" id="res-snellius" style="display:none"></div>`},
            ]
        },
        kimia: {
            title: "⚗️ Kimia",
            isCategory: false,
            slides: [
                { title: "Struktur Atom", desc: "Menentukan Proton, Elektron, Neutron.", template: `<div class="form-row"><input id="nomor_atom" placeholder="Nomor Atom"><input id="massa_atom" placeholder="Massa Atom"><input id="muatan_atom" placeholder="Muatan (e.g., -2, 1)"></div><div class="btn-row"><button class="btn" data-calc="strukturatom">Hitung</button></div><div class="result-box" id="res-strukturatom" style="display:none"></div>` },
                { title: "Menghitung Mol", desc: "Mol = massa / Ar atau massa / Mr", template: `<div class="form-row"><input id="massa_kim" placeholder="Massa (gram)"><input id="ar_mr" placeholder="Ar atau Mr (g/mol)"></div><div class="btn-row"><button class="btn" data-calc="mol">Hitung</button></div><div class="result-box" id="res-mol" style="display:none"></div>` },
                { title: "Gas Ideal (PV=nRT)", desc: "Mencari P, V, n, atau T.", template: `<div class="form-row"><input id="p_gas" placeholder="Tekanan (atm)"><input id="v_gas" placeholder="Volume (L)"></div><div class="form-row"><input id="n_gas" placeholder="Mol (n)"><input id="t_gas" placeholder="Suhu (°C)"></div><p class="desc" style="font-size:0.8rem;">Isi tiga nilai untuk mencari yang keempat.</p><div class="btn-row"><button class="btn" data-calc="gasideal">Hitung</button></div><div class="result-box" id="res-gasideal" style="display:none"></div>` },
                { title: "Entalpi Reaksi (ΔH°f)", desc: "ΔH = ΣΔH°f(produk) - ΣΔH°f(reaktan)", template: `<div class="form-row"><input id="prod_entalpi" placeholder="Total ΔH°f Produk (kJ/mol)"><input id="reak_entalpi" placeholder="Total ΔH°f Reaktan (kJ/mol)"></div><div class="btn-row"><button class="btn" data-calc="entalpi">Hitung</button></div><div class="result-box" id="res-entalpi" style="display:none"></div>` },
                { title: "Kalorimetri (q = mcΔT)", desc: "Menghitung kalor yang terlibat dalam reaksi.", template: `<div class="form-row"><input id="massa_q" placeholder="Massa Larutan (g)"><input id="c_q" placeholder="Kalor Jenis (J/g°C)" value="4.2"></div><div class="form-row"><input id="t1_q" placeholder="Suhu Awal (°C)"><input id="t2_q" placeholder="Suhu Akhir (°C)"></div><div class="btn-row"><button class="btn" data-calc="kalorimetri">Hitung Kalor (q)</button></div><div class="result-box" id="res-kalorimetri" style="display:none"></div>` },
            ]
        },
        ekonomi: {
            title: "💰 Ekonomi",
            isCategory: false,
            slides: [
                { title: "Fungsi Permintaan/Penawaran", desc: "(P-P₁)/(P₂-P₁) = (Q-Q₁)/(Q₂-Q₁)", template: `<p class="desc">Masukkan 2 titik (Harga, Kuantitas) untuk menemukan persamaan fungsi.</p><div class="form-row"><input id="p1_fp" placeholder="Harga P₁"><input id="q1_fp" placeholder="Kuantitas Q₁"></div><div class="form-row"><input id="p2_fp" placeholder="Harga P₂"><input id="q2_fp" placeholder="Kuantitas Q₂"></div><div class="btn-row"><button class="btn" data-calc="fungsipenawaran">Hitung</button></div><div class="result-box" id="res-fungsipenawaran" style="display:none"></div>` },
                { title: "Elastisitas Permintaan", desc: "Ed = (ΔQ/ΔP) × (P₁/Q₁)", template: `<div class="form-row"><input id="q1_el" placeholder="Kuantitas Awal (Q₁)"><input id="q2_el" placeholder="Kuantitas Akhir (Q₂)"></div><div class="form-row"><input id="p1_el" placeholder="Harga Awal (P₁)"><input id="p2_el" placeholder="Harga Akhir (P₂)"></div><div class="btn-row"><button class="btn" data-calc="elastisitas">Hitung</button></div><div class="result-box" id="res-elastisitas" style="display:none"></div>` },
                { title: "Pendapatan Nasional Komprehensif", desc: "Hitung GNP, NNP, NNI, PI, dan DI secara bertahap.", template: `<div class="form-row"><input id="gdp" placeholder="GDP"></div><div class="form-row"><input id="netto_ln" placeholder="Pendapatan Netto LN"></div><div class="form-row"><input id="depresiasi" placeholder="Depresiasi"></div><div class="form-row"><input id="pajak_tl" placeholder="Pajak Tidak Langsung"></div><div class="form-row"><input id="transfer" placeholder="Transfer Payment"></div><div class="form-row"><input id="iuran" placeholder="Iuran Sosial"></div><div class="form-row"><input id="pajak_l" placeholder="Pajak Langsung"></div><div class="btn-row"><button class="btn" data-calc="pendapatannasional">Hitung</button></div><div class="result-box" id="res-pendapatannasional" style="display:none"></div>` },
                { title: "Indeks Harga (Laspeyres & Paasche)", desc: "Menghitung indeks harga agregatif.", template: `<div class="form-row"><input id="pnqo" placeholder="Σ(Pn × Qo)"><input id="poqo" placeholder="Σ(Po × Qo)"></div><div class="form-row"><input id="pnqn" placeholder="Σ(Pn × Qn)"><input id="poqn" placeholder="Σ(Po × Qn)"></div><p class="desc" style="font-size:0.8rem;">Isi nilai yang relevan untuk indeks yang diinginkan.</p><div class="btn-row"><button class="btn" data-calc="indeksharga">Hitung</button></div><div class="result-box" id="res-indeksharga" style="display:none"></div>` },
                { title: "Laju Inflasi", desc: "Laju Inflasi = ((IHK₂ - IHK₁) / IHK₁) × 100%", template: `<div class="form-row"><input id="ihk1" placeholder="Indeks Harga Periode 1"><input id="ihk2" placeholder="Indeks Harga Periode 2"></div><div class="btn-row"><button class="btn" data-calc="inflasi">Hitung</button></div><div class="result-box" id="res-inflasi" style="display:none"></div>` },
                { title: "Pajak Penghasilan (PPh 21)", desc: "Kalkulator PPh 21 Pribadi (Tarif progresif).", template: `<div class="form-row"><input id="gaji_bulan" placeholder="Penghasilan Bruto/Bulan"></div><div class="form-row"><input id="iuran_pensiun" placeholder="Iuran Pensiun/Bulan" value="0"></div><div class="form-row"><select id="status_ptkp"><option value="54000000">Lajang/TK0</option><option value="58500000">Kawin/K0</option><option value="63000000">Kawin, 1 Anak/K1</option><option value="67500000">Kawin, 2 Anak/K2</option><option value="72000000">Kawin, 3 Anak/K3</option></select></div><div class="btn-row"><button class="btn" data-calc="pph21">Hitung</button></div><div class="result-box" id="res-pph21" style="display:none"></div>` },
                { title: "Pajak Bumi & Bangunan (PBB)", desc: "PBB Terutang = 0.5% × NJKP", template: `<div class="form-row"><input id="njop" placeholder="Total NJOP (Tanah & Bangunan)"></div><div class="form-row"><input id="njoptkp" placeholder="NJOPTKP" value="12000000"></div><div class="btn-row"><button class="btn" data-calc="pbb">Hitung</button></div><div class="result-box" id="res-pbb" style="display:none"></div>` },
            ]
        },
        umum: {
            title: "🧮 Umum",
            isCategory: false,
            slides: [
                {
                    title: "Kalkulator Umum",
                    desc: "Gunakan untuk perhitungan cepat.",
                    template: `<input id="calc-display" type="text" readonly placeholder="0" class="form-row" style="text-align:right; font-size:1.5rem; margin-bottom:1rem;">
                               <div class="calculator-keys" data-delegate="calculator">
                                   ${["C","/","*","-","7","8","9","+","4","5","6","=","1","2","3","0","."].map(k => {
                                       let className = 'btn';
                                       if(['/','*','-','+','='].includes(k)) className += ' alt';
                                       if(k === 'C') className = 'btn alt';
                                       if(k === '=') return `<button class="btn" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
                                       if(k === '0') return `<button class="btn" data-key="${k}" style="grid-column: span 2;">${k}</button>`;
                                       return `<button class="${className}" data-key="${k}">${k}</button>`;
                                   }).join('')}
                               </div>`
                }
            ]
        },
    };

    // --- DOM REFERENCES ---
    const menuScreen = document.getElementById("menuScreen");
    const subMenuScreen = document.getElementById("subMenuScreen");
    const slideWrapper = document.getElementById("slideWrapper");
    
    const mainMenuGrid = document.getElementById("mainMenuGrid");
    const subMenuGrid = document.getElementById("subMenuGrid");
    const subMenuTitle = document.getElementById("subMenuTitle");
    const slidesViewport = document.getElementById("slidesViewport");
    const subjectTitle = document.getElementById("subjectTitle");

    // --- APP STATE ---
    let activeScreen = 'main'; // 'main', 'sub', 'slider'
    let currentSubjectKey = null;
    let currentCategoryKey = null;
    let currentIndex = 0;

    // --- INITIALIZATION ---
    function init() {
        buildMainMenu();
        addEventListeners();
    }

    function buildMainMenu() {
        mainMenuGrid.innerHTML = "";
        for (const key in SUBJECT_DATA) {
            const subject = SUBJECT_DATA[key];
            const btn = document.createElement('button');
            btn.className = 'menu-btn';
            btn.dataset.subjectKey = key;
            btn.innerHTML = subject.title;
            mainMenuGrid.appendChild(btn);
        }
    }

    // --- NAVIGATION & UI CONTROL ---
    function showScreen(screenName) {
        menuScreen.classList.add('hidden');
        subMenuScreen.classList.add('hidden');
        slideWrapper.classList.add('hidden');
        
        document.getElementById(screenName).classList.remove('hidden');
        activeScreen = screenName.replace('Screen', ''); // 'main', 'sub', 'slideWrapper' -> 'slider'
    }

    function showSubMenu(subjectKey) {
        currentSubjectKey = subjectKey;
        const subject = SUBJECT_DATA[subjectKey];
        subMenuTitle.innerHTML = subject.title;
        subMenuGrid.innerHTML = "";
        
        for (const key in subject.categories) {
            const category = subject.categories[key];
            const btn = document.createElement('button');
            btn.className = 'menu-btn';
            btn.dataset.subjectKey = subjectKey;
            btn.dataset.categoryKey = key;
            btn.innerHTML = category.title;
            subMenuGrid.appendChild(btn);
        }
        showScreen('subMenuScreen');
    }

    function showCalculatorSlides(subjectKey, categoryKey) {
        currentSubjectKey = subjectKey;
        currentCategoryKey = categoryKey;
        
        const subject = SUBJECT_DATA[subjectKey];
        const slideData = categoryKey ? subject.categories[categoryKey] : subject;

        subjectTitle.innerHTML = slideData.title;
        buildSlides(slideData.slides);
        showSlide(0);
        showScreen('slideWrapper');
    }
    
    function buildSlides(slides) {
        slidesViewport.innerHTML = "";
        slides.forEach((data, i) => {
            const slideEl = document.createElement("div");
            slideEl.className = "slide";
            slideEl.dataset.index = i;
            slideEl.innerHTML = `<h2>${data.title}</h2><p class="desc">${data.desc}</p>${data.template}`;
            slidesViewport.appendChild(slideEl);
        });
    }

    function showSlide(index) {
        const slides = slidesViewport.querySelectorAll(".slide");
        if (index < 0 || index >= slides.length) return;
        currentIndex = index;
        slides.forEach((slide, i) => {
            slide.classList.remove("active", "left");
            if (i < currentIndex) slide.classList.add("left");
            else if (i === currentIndex) slide.classList.add("active");
        });
        updateNavButtons();
    }

    function updateNavButtons() {
        const slideCount = slidesViewport.children.length;
        ['#prevSlide', '#nextSlide', '#btnPrev', '#btnNext'].forEach(sel => {
            const btn = document.querySelector(sel);
            if(!btn) return;
            if (sel.includes('Prev')) btn.disabled = currentIndex === 0;
            if (sel.includes('Next')) btn.disabled = currentIndex === slideCount - 1;
        });
    }

    // --- EVENT LISTENERS ---
    function addEventListeners() {
        document.body.addEventListener("click", (e) => {
            const target = e.target.closest('button');
            if (!target) return;

            // Main Menu Navigation
            if (target.parentElement.id === 'mainMenuGrid') {
                const subjectKey = target.dataset.subjectKey;
                const subject = SUBJECT_DATA[subjectKey];
                if (subject.isCategory) {
                    showSubMenu(subjectKey);
                } else {
                    showCalculatorSlides(subjectKey, null);
                }
            }

            // Sub Menu Navigation
            if (target.parentElement.id === 'subMenuGrid') {
                const { subjectKey, categoryKey } = target.dataset;
                showCalculatorSlides(subjectKey, categoryKey);
            }

            // Back Buttons
            if (target.id === 'backToMain') showScreen('menuScreen');
            if (target.id === 'backToPreviousMenu') {
                const subject = SUBJECT_DATA[currentSubjectKey];
                if (subject.isCategory) {
                    showScreen('subMenuScreen');
                } else {
                    showScreen('menuScreen');
                }
            }

            // Slider Navigation & Actions
            if (target.matches("#prevSlide, #btnPrev")) showSlide(currentIndex - 1);
            if (target.matches("#nextSlide, #btnNext")) showSlide(currentIndex + 1);
            if (target.matches("#btnReset")) {
                const activeSlide = slidesViewport.querySelector(".slide.active");
                if (activeSlide) resetInputs(activeSlide);
            }

            // Calculation Triggers
            const calcButton = target.closest("[data-calc]");
            if (calcButton) {
                runCalculation(calcButton.dataset.calc, calcButton.closest(".slide"));
            }
            const calcGrid = target.closest('[data-delegate="calculator"]');
            if (calcGrid) {
                const key = target.dataset.key;
                if (key) handleCalculatorKey(key, calcGrid.parentElement);
            }
        });
    }

    // --- CALCULATION LOGIC ---
    function runCalculation(type, context) {
        const getVal = (id) => parseFloat(context.querySelector(`#${id}`)?.value || 0);
        const showResult = (el, text) => { el.innerHTML = text; el.style.display = "block"; };
        const showError = (el, msg) => showResult(el, `⚠️ ${msg}`);
        const fNum = (n) => n.toLocaleString('id-ID', { maximumFractionDigits: 4 });

        const resEl = context.querySelector(`#res-${type}`);
        if (!resEl) return;
        
        // This is a large switch, but it's the clearest way to handle many distinct formulas.
        switch (type) {
            // MATEMATIKA
            case "persegi": { const s = getVal("sisi_persegi"); if (!s) return showError(resEl, "Isi panjang sisi."); showResult(resEl, `Luas = <strong>${fNum(s*s)}</strong><br>Keliling = <strong>${fNum(4*s)}</strong>`); break; }
            case "persegipanjang": { const p = getVal("panjang_pp"), l = getVal("lebar_pp"); if (!p || !l) return showError(resEl, "Isi panjang dan lebar."); showResult(resEl, `Luas = <strong>${fNum(p*l)}</strong><br>Keliling = <strong>${fNum(2*(p+l))}</strong>`); break; }
            case "segitiga": { const a = getVal("alas_s"), t = getVal("tinggi_s"); if (!a || !t) return showError(resEl, "Isi alas dan tinggi."); showResult(resEl, `Luas = <strong>${fNum(0.5*a*t)}</strong>`); break; }
            case "lingkaran": { const r = getVal("r_lingkaran"); if (!r) return showError(resEl, "Isi jari-jari."); showResult(resEl, `Luas = <strong>${fNum(Math.PI*r**2)}</strong><br>Keliling = <strong>${fNum(2*Math.PI*r)}</strong>`); break; }
            case "jajargenjang": { const a = getVal("alas_jg"), t = getVal("tinggi_jg"), b = getVal("miring_jg"); if (!a || !t || !b) return showError(resEl, "Isi semua field."); showResult(resEl, `Luas = <strong>${fNum(a*t)}</strong><br>Keliling = <strong>${fNum(2*(a+b))}</strong>`); break; }
            case "belahketupat": { const d1 = getVal("d1_bk"), d2 = getVal("d2_bk"); if (!d1 || !d2) return showError(resEl, "Isi kedua diagonal."); const s = Math.sqrt((d1/2)**2 + (d2/2)**2); showResult(resEl, `Luas = <strong>${fNum(0.5*d1*d2)}</strong><br>Keliling ≈ <strong>${fNum(4*s)}</strong>`); break; }
            case "trapesium": { const a = getVal("a_trap"), b = getVal("b_trap"), t = getVal("t_trap"); if (!a || !b || !t) return showError(resEl, "Isi semua field."); showResult(resEl, `Luas = <strong>${fNum(0.5*(a+b)*t)}</strong>`); break; }
            case "kubus": { const s = getVal("sisi_kubus"); if (!s) return showError(resEl, "Isi panjang sisi."); showResult(resEl, `Volume = <strong>${fNum(s**3)}</strong><br>Luas Permukaan = <strong>${fNum(6*s**2)}</strong>`); break; }
            case "balok": { const p = getVal("p_balok"), l = getVal("l_balok"), t = getVal("t_balok"); if (!p || !l || !t) return showError(resEl, "Isi semua field."); showResult(resEl, `Volume = <strong>${fNum(p*l*t)}</strong><br>Luas Permukaan = <strong>${fNum(2*((p*l)+(p*t)+(l*t)))}</strong>`); break; }
            case "tabung": { const r = getVal("r_tabung"), t = getVal("t_tabung"); if (!r || !t) return showError(resEl, "Isi semua field."); showResult(resEl, `Volume = <strong>${fNum(Math.PI*r**2*t)}</strong><br>Luas Permukaan = <strong>${fNum(2*Math.PI*r*(r+t))}</strong>`); break; }
            case "kerucut": { const r = getVal("r_kerucut"), t = getVal("t_kerucut"); if (!r || !t) return showError(resEl, "Isi semua field."); const s = Math.sqrt(r**2 + t**2); showResult(resEl, `Volume = <strong>${fNum((1/3)*Math.PI*r**2*t)}</strong><br>Luas Permukaan = <strong>${fNum(Math.PI*r*(r+s))}</strong>`); break; }
            case "bola": { const r = getVal("r_bola"); if (!r) return showError(resEl, "Isi jari-jari."); showResult(resEl, `Volume = <strong>${fNum((4/3)*Math.PI*r**3)}</strong><br>Luas Permukaan = <strong>${fNum(4*Math.PI*r**2)}</strong>`); break; }

            // FISIKA
            case "glbb": { const v0 = getVal("v0"), a = getVal("af"), t = getVal("tf"); if (isNaN(v0) || isNaN(a) || isNaN(t)) return showError(resEl, "Isi semua field."); const v = v0 + a * t; const s = v0 * t + 0.5 * a * t**2; showResult(resEl, `Kecepatan Akhir (v) = <strong>${fNum(v)} m/s</strong><br>Jarak (s) = <strong>${fNum(s)} m</strong>`); break; }
            case "parabolik": { const v0 = getVal("v0_par"), t = getVal("t_par"); let theta = getVal("theta_par") * (Math.PI / 180); const g = 9.8; if (!v0 || !t) return showError(resEl, "Isi V₀ dan waktu."); showResult(resEl, `Posisi X = <strong>${fNum(v0 * Math.cos(theta) * t)} m</strong><br>Posisi Y = <strong>${fNum((v0 * Math.sin(theta) * t) - (0.5 * g * t**2))} m</strong>`); break; }
            case "energi": { const m = getVal("massa_en"), v = getVal("v_en"), h = getVal("h_en"), g=9.8; if (!m) return showError(resEl, "Massa harus diisi."); showResult(resEl, `Energi Kinetik = <strong>${fNum(0.5*m*v**2)} J</strong><br>Energi Potensial = <strong>${fNum(m*g*h)} J</strong>`); break; }
            case "ohm": { const v = getVal("v_ohm"), i = getVal("i_ohm"), r = getVal("r_ohm"); let result = ""; if (v && i) result = `Hambatan (R) = <strong>${fNum(v/i)} Ω</strong>`; else if (v && r) result = `Arus (I) = <strong>${fNum(v/r)} A</strong>`; else if (i && r) result = `Tegangan (V) = <strong>${fNum(i*r)} V</strong>`; else return showError(resEl, "Isi dua dari tiga nilai."); showResult(resEl, result); break; }
            case "coulomb": { const q1 = getVal("q1_coulomb"), q2 = getVal("q2_coulomb"), r = getVal("r_coulomb"), k=9e9; if (!q1 || !q2 || !r) return showError(resEl, "Isi semua field."); showResult(resEl, `Gaya Coulomb = <strong>${fNum(k*q1*q2/r**2)} N</strong>`); break; }
            case "snellius": { const n1 = getVal("n1_snell"), th1 = getVal("th1_snell"), n2 = getVal("n2_snell"); if(!n1 || !th1 || !n2) return showError(resEl, "Isi semua field."); const th2 = Math.asin((n1/n2) * Math.sin(th1 * Math.PI / 180)) * (180 / Math.PI); showResult(resEl, `Sudut Bias (θ₂) = <strong>${fNum(th2)}°</strong>`); break; }

            // KIMIA
            case "strukturatom": { const nomor = getVal("nomor_atom"), massa = getVal("massa_atom"), muatan = getVal("muatan_atom"); if(!nomor || !massa) return showError(resEl, "Nomor & massa atom harus diisi."); const p = nomor; const n = massa - nomor; const e = nomor - muatan; showResult(resEl, `Proton = <strong>${fNum(p)}</strong><br>Elektron = <strong>${fNum(e)}</strong><br>Neutron = <strong>${fNum(n)}</strong>`); break; }
            case "mol": { const massa = getVal("massa_kim"), ar_mr = getVal("ar_mr"); if(!massa || !ar_mr) return showError(resEl, "Isi semua field."); showResult(resEl, `Jumlah Mol = <strong>${fNum(massa/ar_mr)} mol</strong>`); break; }
            case "gasideal": { const p = getVal("p_gas"), v = getVal("v_gas"), n = getVal("n_gas"), t = getVal("t_gas"), R = 0.0821; let tK = t + 273.15, result=""; const inputs = [p,v,n,context.querySelector('#t_gas').value]; if(inputs.filter(val => val).length !== 3) return showError(resEl, "Isi tepat tiga nilai."); if (!p) result = `Tekanan (P) = <strong>${fNum(n*R*tK/v)} atm</strong>`; else if (!v) result = `Volume (V) = <strong>${fNum(n*R*tK/p)} L</strong>`; else if (!n) result = `Mol (n) = <strong>${fNum(p*v/(R*tK))} mol</strong>`; else result = `Suhu (T) = <strong>${fNum((p*v/(n*R))-273.15)} °C</strong>`; showResult(resEl, result); break; }
            case "entalpi": { const prod = getVal("prod_entalpi"), reak = getVal("reak_entalpi"); showResult(resEl, `ΔH Reaksi = <strong>${fNum(prod-reak)} kJ/mol</strong>`); break; }
            case "kalorimetri": { const m = getVal("massa_q"), c = getVal("c_q"), t1 = getVal("t1_q"), t2 = getVal("t2_q"); if(!m || !c || isNaN(t1) || isNaN(t2)) return showError(resEl, "Isi semua field."); const q = m * c * (t2-t1); showResult(resEl, `Kalor (q) = <strong>${fNum(q)} J</strong>`); break; }

            // EKONOMI
            case "fungsipenawaran": { const p1 = getVal("p1_fp"), q1 = getVal("q1_fp"), p2 = getVal("p2_fp"), q2 = getVal("q2_fp"); if ([p1,q1,p2,q2].some(v => isNaN(v))) return showError(resEl, "Isi semua field."); const m = (p2-p1)/(q2-q1); const c = p1 - m*q1; showResult(resEl, `Fungsi: <strong>P = ${fNum(m)}Q ${c < 0 ? '-' : '+'} ${fNum(Math.abs(c))}</strong>`); break; }
            case "elastisitas": { const q1=getVal("q1_el"), q2=getVal("q2_el"), p1=getVal("p1_el"), p2=getVal("p2_el"); if ([q1,q2,p1,p2].some(v => isNaN(v)) || q1 === 0 || p1 === 0) return showError(resEl, "Isi semua field, nilai awal tidak boleh nol."); const ed = Math.abs(((q2-q1)/(p2-p1)) * (p1/q1)); let interpretasi = "|Ed| > 1: Elastis"; if(ed<1) interpretasi = "|Ed| < 1: Inelastis"; if(ed===1) interpretasi = "|Ed| = 1: Uniter"; showResult(resEl, `Elastisitas (Ed) = <strong>${fNum(ed)}</strong><br><em>${interpretasi}</em>`); break; }
            case "pendapatannasional": { const gdp=getVal("gdp"), netto=getVal("netto_ln"), dep=getVal("depresiasi"), ptl=getVal("pajak_tl"), tr=getVal("transfer"), iur=getVal("iuran"), pl=getVal("pajak_l"); if(!gdp) return showError(resEl, "GDP harus diisi."); const gnp = gdp + netto; const nnp = gnp - dep; const nni = nnp - ptl; const pi = nni + tr - iur; const di = pi - pl; showResult(resEl, `GNP = <strong>${fNum(gnp)}</strong><br>NNP = <strong>${fNum(nnp)}</strong><br>NNI = <strong>${fNum(nni)}</strong><br>PI = <strong>${fNum(pi)}</strong><br>DI = <strong>${fNum(di)}</strong>`); break; }
            case "indeksharga": { const pnqo = getVal("pnqo"), poqo = getVal("poqo"), pnqn = getVal("pnqn"), poqn = getVal("poqn"); let result = ""; if(pnqo && poqo) result += `Indeks Laspeyres (IL) = <strong>${fNum(pnqo/poqo*100)}</strong><br>`; if(pnqn && poqn) result += `Indeks Paasche (IP) = <strong>${fNum(pnqn/poqn*100)}</strong>`; if(!result) return showError(resEl, "Isi data untuk salah satu indeks."); showResult(resEl, result); break; }
            case "inflasi": { const i1 = getVal("ihk1"), i2 = getVal("ihk2"); if(!i1 || !i2) return showError(resEl, "Isi kedua periode."); showResult(resEl, `Laju Inflasi = <strong>${fNum((i2-i1)/i1*100)}%</strong>`); break; }
            case "pph21": { const gaji = getVal("gaji_bulan"), iuran = getVal("iuran_pensiun"), ptkp = getVal("status_ptkp"); if(!gaji) return showError(resEl, "Isi gaji per bulan."); const biayaJabatan = Math.min(0.05 * gaji, 500000); const nettoBulan = gaji - biayaJabatan - iuran; const nettoTahun = nettoBulan * 12; const pkp = Math.max(0, nettoTahun - ptkp); let pphTahun = 0; if (pkp > 0) { if (pkp <= 60000000) pphTahun = 0.05 * pkp; else if (pkp <= 250000000) pphTahun = 3000000 + (0.15 * (pkp - 60000000)); /* ...add more tax brackets if needed */ } showResult(resEl, `Netto/Tahun: <strong>Rp ${fNum(nettoTahun)}</strong><br>PKP: <strong>Rp ${fNum(pkp)}</strong><br>PPh Terutang/Tahun: <strong>Rp ${fNum(pphTahun)}</strong><br>PPh/Bulan: <strong>Rp ${fNum(pphTahun/12)}</strong>`); break; }
            case "pbb": { const njop = getVal("njop"), njoptkp = getVal("njoptkp"); if (!njop) return showError(resEl, "Isi NJOP."); const njkp = 0.2 * (njop - njoptkp); const pbb = 0.005 * njkp; showResult(resEl, `NJKP = <strong>Rp ${fNum(njkp)}</strong><br>PBB Terutang = <strong>Rp ${fNum(pbb)}</strong>`); break; }
        }
    }
    
    function resetInputs(context) { /* ... same as before ... */ }
    function handleCalculatorKey(key, context) { /* ... same as before ... */ }

    // --- START THE APP ---
    init();
});
