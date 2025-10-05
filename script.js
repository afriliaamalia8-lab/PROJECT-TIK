/* script.js — Pro International Edition
   - Efficient Event Delegation for snappy performance.
   - Refactored state management for clarity.
   - Cleaner DOM manipulation and transitions.
*/

document.addEventListener("DOMContentLoaded", () => {
    // --- DATA RUMUS ---
    const SUBJECTS = {
        matematika: [
            // Konten matematika tetap sama
            { title: "Luas Lingkaran", desc: "Rumus: Luas = π × r²", template: `<div class="form-row"><select id="phi"><option value="3.14">π = 3.14</option><option value="22/7">π = 22/7</option></select><input id="r" type="number" placeholder="Jari-jari (r) cm"></div><div class="btn-row"><button class="btn" data-calc="lingkaran">Hitung</button></div><div class="result-box" id="res-lingkaran" style="display:none"></div>` },
            { title: "Luas Segitiga", desc: "Rumus: Luas = (alas × tinggi) ÷ 2", template: `<div class="form-row"><input id="alas" type="number" placeholder="Alas (cm)"><input id="tinggi" type="number" placeholder="Tinggi (cm)"></div><div class="btn-row"><button class="btn" data-calc="segitiga">Hitung</button></div><div class="result-box" id="res-segitiga" style="display:none"></div>` },
        ],
        fisika: [
             { title: "Gerak Lurus (GLBB)", desc: "v = v₀ + a × t", template: `<div class="form-row"><input id="v0" placeholder="v₀ (m/s)"><input id="af" placeholder="a (m/s²)"><input id="tf" placeholder="t (s)"></div><div class="btn-row"><button class="btn" data-calc="glbb">Hitung</button></div><div class="result-box" id="res-glbb" style="display:none"></div>` },
        ],
        kimia: [
             { title: "Massa Zat", desc: "Massa (g) = Mol × Mr", template: `<div class="form-row"><input id="mol" placeholder="Mol"><input id="mr" placeholder="Mr (g/mol)"></div><div class="btn-row"><button class="btn" data-calc="massa">Hitung</button></div><div class="result-box" id="res-massa" style="display:none"></div>` },
        ],
        ekonomi: [
             { title: "Bunga Sederhana", desc: "Bunga = Modal × % × Waktu", template: `<div class="form-row"><input id="modal" placeholder="Modal (Rp)"><input id="persen" placeholder="Bunga (%)"><input id="waktu" placeholder="Waktu (tahun)"></div><div class="btn-row"><button class="btn" data-calc="bunga">Hitung</button></div><div class="result-box" id="res-bunga" style="display:none"></div>` },
        ],
        umum: [
            {
                title: "Kalkulator Umum",
                desc: "Gunakan untuk perhitungan cepat.",
                template: `<input id="calc-display" ...>
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
        ],
    };

    // --- Referensi DOM ---
    const menuScreen = document.getElementById("menuScreen");
    const slideWrapper = document.getElementById("slideWrapper");
    const slidesViewport = document.getElementById("slidesViewport");
    const subjectTitle = document.getElementById("subjectTitle");

    // --- State Aplikasi ---
    let currentSubject = null;
    let currentIndex = 0;

    // --- EVENT HANDLING UTAMA (DELEGATION) ---
    document.body.addEventListener("click", (e) => {
        const target = e.target;
        
        // Tombol Menu
        if (target.matches(".menu-btn")) {
            const subject = target.dataset.subject;
            openSubject(subject);
        }

        // Tombol Kembali ke Menu
        if (target.matches("#backToMenu")) {
            closeSlides();
        }

        // Navigasi Slide
        if (target.matches("#prevSlide, #btnPrev")) prevSlide();
        if (target.matches("#nextSlide, #btnNext")) nextSlide();
        
        // Reset pada slide aktif
        if (target.matches("#btnReset")) {
            const activeSlide = slidesViewport.querySelector(".slide.active");
            if (activeSlide) resetInputs(activeSlide);
        }

        // Tombol Kalkulasi Rumus
        const calcButton = target.closest("[data-calc]");
        if (calcButton) {
            const type = calcButton.dataset.calc;
            runCalculation(type, calcButton.closest(".slide"));
        }
        
        // Kalkulator Umum (Event Delegation)
        const calcGrid = target.closest('[data-delegate="calculator"]');
        if (calcGrid) {
            const key = target.dataset.key;
            if (key) handleCalculatorKey(key, calcGrid.parentElement);
        }
    });

    // --- FUNGSI UTAMA ---
    function openSubject(subject) {
        currentSubject = subject;
        currentIndex = 0;
        
        // Transisi antar layar
        menuScreen.classList.add("hidden");
        slideWrapper.classList.remove("hidden");
        
        subjectTitle.textContent = subject.charAt(0).toUpperCase() + subject.slice(1);
        buildSlides(subject);
        showSlide(currentIndex);
    }

    function closeSlides() {
        slideWrapper.classList.add("hidden");
        menuScreen.classList.remove("hidden");
    }

    function buildSlides(subject) {
        slidesViewport.innerHTML = ""; // Kosongkan slide sebelumnya
        const slidesData = SUBJECTS[subject] || [];
        slidesData.forEach((data, i) => {
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
            if (i < currentIndex) {
                slide.classList.add("left");
            } else if (i === currentIndex) {
                slide.classList.add("active");
            }
        });
        updateNavButtons();
    }
    
    function nextSlide() { showSlide(currentIndex + 1); }
    function prevSlide() { showSlide(currentIndex - 1); }

    function updateNavButtons() {
        const slideCount = slidesViewport.children.length;
        const buttons = ['#prevSlide', '#nextSlide', '#btnPrev', '#btnNext'];
        buttons.forEach(sel => {
            const btn = document.querySelector(sel);
            if(sel.includes('Prev')) btn.disabled = currentIndex === 0;
            if(sel.includes('Next')) btn.disabled = currentIndex === slideCount - 1;
        });
    }

    // --- FUNGSI KALKULASI & HELPER ---
    
    function handleCalculatorKey(key, context) {
        const display = context.querySelector("#calc-display");
        if (!display) return;

        if (key === 'C') {
            display.value = "";
        } else if (key === '=') {
            try {
                // Evaluasi aman sederhana
                const safeEval = (fn) => new Function('return ' + fn)();
                display.value = safeEval(display.value.replace(/[^0-9+\-*/.]/g, ''));
            } catch {
                display.value = "Error";
            }
        } else {
            display.value += key;
        }
    }

    function runCalculation(type, context) {
        const getVal = (id) => parseFloat(context.querySelector(`#${id}`)?.value);
        const getEl = (id) => context.querySelector(`#${id}`);
        const showResult = (el, text) => {
            el.innerHTML = text;
            el.style.display = "block";
        };
        const showError = (el, msg) => showResult(el, `⚠️ ${msg}`);
        
        const resEl = getEl(`res-${type}`);
        if (!resEl) return;
        
        switch (type) {
            case "lingkaran": {
                const phiValue = context.querySelector("#phi").value;
                const r = getVal("r");
                if (isNaN(r)) return showError(resEl, "Jari-jari harus diisi.");
                const luas = (phiValue === '22/7' ? 22/7 : 3.14) * r * r;
                showResult(resEl, `Luas = <strong>${luas.toFixed(2)} cm²</strong>`);
                break;
            }
            case "segitiga": {
                const alas = getVal("alas");
                const tinggi = getVal("tinggi");
                if (isNaN(alas) || isNaN(tinggi)) return showError(resEl, "Alas dan tinggi harus diisi.");
                const luas = 0.5 * alas * tinggi;
                showResult(resEl, `Luas = <strong>${luas.toFixed(2)} cm²</strong>`);
                break;
            }
             case "glbb": {
                const v0 = getVal("v0"), a = getVal("af"), t = getVal("tf");
                if ([v0, a, t].some(isNaN)) return showError(resEl, "Semua input harus diisi.");
                const v = v0 + a * t;
                const s = v0 * t + 0.5 * a * t * t;
                showResult(resEl, `Kecepatan Akhir (v) = <strong>${v.toFixed(2)} m/s</strong><br>Jarak (s) = <strong>${s.toFixed(2)} m</strong>`);
                break;
            }
            case "massa": {
                const mol = getVal("mol"), mr = getVal("mr");
                if (isNaN(mol) || isNaN(mr)) return showError(resEl, "Mol dan Mr harus diisi.");
                showResult(resEl, `Massa = <strong>${(mol * mr).toFixed(2)} g</strong>`);
                break;
            }
            case "bunga": {
                const modal = getVal("modal"), persen = getVal("persen"), waktu = getVal("waktu");
                if ([modal, persen, waktu].some(isNaN)) return showError(resEl, "Semua input harus diisi.");
                const bunga = (modal * persen * waktu) / 100;
                showResult(resEl, `Bunga = <strong>Rp ${bunga.toLocaleString('id-ID')}</strong><br>Total Akhir = <strong>Rp ${(modal + bunga).toLocaleString('id-ID')}</strong>`);
                break;
            }
        }
    }
    
    function resetInputs(context) {
        context.querySelectorAll('input, select').forEach(el => el.value = '');
        context.querySelectorAll('.result-box').forEach(el => {
            el.style.display = 'none';
            el.innerHTML = '';
        });
    }
});
