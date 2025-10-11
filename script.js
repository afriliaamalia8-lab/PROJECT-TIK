/*
 * script.js (Combined Monolithic Version)
 * Menggabungkan data, kalkulator, ui, dan logika utama ke dalam satu file.
 * Versi ini tidak memerlukan type="module" pada tag <script>.
 */
document.addEventListener("DOMContentLoaded", () => {
    // --- BAGIAN 1: DATABASE RUMUS (dari data.js) ---
    const SUBJECT_DATA = {
        matematika: {
            title: "📘 Matematika",
            isCategory: true,
            categories: {
                bangunDatar: {
                    title: "📏 Bangun Datar",
                    slides: [
                        { id: "persegi", title: "Persegi", desc: "Menghitung Luas (L) dan Keliling (K).", inputs: [{ id: "sisi_persegi", label: "Sisi (cm)", type: "number", required: true }] },
                        { id: "persegipanjang", title: "Persegi Panjang", desc: "Menghitung Luas (L) dan Keliling (K).", inputs: [{ id: "panjang_pp", label: "Panjang (cm)", type: "number", required: true }, { id: "lebar_pp", label: "Lebar (cm)", type: "number", required: true }] },
                        { id: "segitiga", title: "Segitiga", desc: "Rumus: L = ½ × alas × tinggi", inputs: [{ id: "alas_s", label: "Alas (cm)", type: "number", required: true }, { id: "tinggi_s", label: "Tinggi (cm)", type: "number", required: true }] },
                        { id: "lingkaran", title: "Lingkaran", desc: "Rumus: L = π × r² & K = 2πr", inputs: [{ id: "r_lingkaran", label: "Jari-jari (cm)", type: "number", required: true }] },
                        { id: "jajargenjang", title: "Jajar Genjang", desc: "Menghitung Luas (L) dan Keliling (K).", inputs: [{ id: "alas_jg", label: "Alas (cm)", type: "number", required: true }, { id: "tinggi_jg", label: "Tinggi (cm)", type: "number", required: true }, { id: "miring_jg", label: "Sisi Miring (cm)", type: "number", required: true }] },
                        { id: "belahketupat", title: "Belah Ketupat", desc: "Menghitung Luas (L) dan Keliling (K).", inputs: [{ id: "d1_bk", label: "Diagonal 1 (cm)", type: "number", required: true }, { id: "d2_bk", label: "Diagonal 2 (cm)", type: "number", required: true }, { id: "sisi_bk", label: "Sisi (cm)", type: "number", required: true }] },
                        { id: "trapesium", title: "Trapesium", desc: "Menghitung Luas (L).", inputs: [{ id: "a_trap", label: "Sisi Sejajar a (cm)", type: "number", required: true }, { id: "b_trap", label: "Sisi Sejajar b (cm)", type: "number", required: true }, { id: "t_trap", label: "Tinggi (cm)", type: "number", required: true }] },
                    ]
                },
                bangunRuang: {
                    title: "🧊 Bangun Ruang",
                    slides: [
                        { id: "kubus", title: "Kubus", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).", inputs: [{ id: "sisi_kubus", label: "Sisi (cm)", type: "number", required: true }] },
                        { id: "balok", title: "Balok", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).", inputs: [{ id: "p_balok", label: "Panjang (cm)", type: "number", required: true }, { id: "l_balok", label: "Lebar (cm)", type: "number", required: true }, { id: "t_balok", label: "Tinggi (cm)", type: "number", required: true }] },
                        { id: "tabung", title: "Tabung (Silinder)", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).", inputs: [{ id: "r_tabung", label: "Jari-jari (cm)", type: "number", required: true }, { id: "t_tabung", label: "Tinggi (cm)", type: "number", required: true }] },
                        { id: "kerucut", title: "Kerucut", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).", inputs: [{ id: "r_kerucut", label: "Jari-jari (cm)", type: "number", required: true }, { id: "t_kerucut", label: "Tinggi (cm)", type: "number", required: true }] },
                        { id: "bola", title: "Bola", desc: "Menghitung Volume (V) dan Luas Permukaan (Lp).", inputs: [{ id: "r_bola", label: "Jari-jari (cm)", type: "number", required: true }] },
                    ]
                }
            }
        },
        fisika: {
            title: "🔭 Fisika",
            isCategory: false,
            slides: [
                { id: "glbb", title: "Gerak Lurus (GLBB)", desc: "v = v₀ + a·t dan s = v₀t + ½at²", inputs: [{ id: "v0", label: "Kecepatan Awal v₀ (m/s)", type: "number", required: true }, { id: "af", label: "Percepatan a (m/s²)", type: "number", required: true }, { id: "tf", label: "Waktu t (s)", type: "number", required: true }] },
                { id: "energi", title: "Energi Kinetik & Potensial", desc: "Menghitung Energi Kinetik (Ek) dan Potensial (Ep).", inputs: [{ id: "massa_en", label: "Massa (kg)", type: "number", required: true }, { id: "v_en", label: "Kecepatan (m/s)", type: "number", required: false }, { id: "h_en", label: "Tinggi (m)", type: "number", required: false }] },
                { id: "ohm", title: "Hukum Ohm", desc: "Isi dua nilai untuk mencari yang ketiga.", inputs: [{ id: "v_ohm", label: "Tegangan (V)", type: "number", required: false }, { id: "i_ohm", label: "Arus (A)", type: "number", required: false }, { id: "r_ohm", label: "Hambatan (Ω)", type: "number", required: false }] },
            ]
        },
        // ... Tambahkan mata pelajaran lain jika ada
    };

    // --- BAGIAN 2: LOGIKA KALKULATOR (dari calculator.js) ---
    const calculator = {
        persegi({ sisi_persegi }) {
            const s = parseFloat(sisi_persegi);
            if (isNaN(s)) return null;
            return `Luas = ${s*s} cm²\nKeliling = ${4*s} cm`;
        },
        persegipanjang({ panjang_pp, lebar_pp }) {
            const p = parseFloat(panjang_pp);
            const l = parseFloat(lebar_pp);
            if (isNaN(p) || isNaN(l)) return null;
            return `Luas = ${p*l} cm²\nKeliling = ${2*(p+l)} cm`;
        },
        segitiga({ alas_s, tinggi_s }) {
            const a = parseFloat(alas_s);
            const t = parseFloat(tinggi_s);
            if (isNaN(a) || isNaN(t)) return null;
            return `Luas = ${(0.5*a*t).toFixed(2)} cm²`;
        },
        lingkaran({ r_lingkaran }) {
            const r = parseFloat(r_lingkaran);
            if(isNaN(r)) return null;
            return `Luas = ${(Math.PI * r * r).toFixed(2)} cm²\nKeliling = ${(2 * Math.PI * r).toFixed(2)} cm`;
        },
        jajargenjang({ alas_jg, tinggi_jg, miring_jg }) {
            const a = parseFloat(alas_jg);
            const t = parseFloat(tinggi_jg);
            const m = parseFloat(miring_jg);
            if(isNaN(a) || isNaN(t) || isNaN(m)) return null;
            return `Luas = ${(a * t).toFixed(2)} cm²\nKeliling = ${(2 * (a + m)).toFixed(2)} cm`;
        },
        belahketupat({ d1_bk, d2_bk, sisi_bk }) {
            const d1 = parseFloat(d1_bk);
            const d2 = parseFloat(d2_bk);
            const s = parseFloat(sisi_bk);
            if(isNaN(d1) || isNaN(d2) || isNaN(s)) return null;
            return `Luas = ${(0.5 * d1 * d2).toFixed(2)} cm²\nKeliling = ${(4 * s).toFixed(2)} cm`;
        },
        trapesium({ a_trap, b_trap, t_trap }) {
            const a = parseFloat(a_trap);
            const b = parseFloat(b_trap);
            const t = parseFloat(t_trap);
            if(isNaN(a) || isNaN(b) || isNaN(t)) return null;
            return `Luas = ${(0.5 * (a + b) * t).toFixed(2)} cm²`;
        },
        kubus({ sisi_kubus }) {
            const s = parseFloat(sisi_kubus);
            if(isNaN(s)) return null;
            return `Volume = ${(s**3).toFixed(2)} cm³\nLuas Permukaan = ${(6 * s**2).toFixed(2)} cm²`;
        },
        balok({ p_balok, l_balok, t_balok }) {
            const p = parseFloat(p_balok);
            const l = parseFloat(l_balok);
            const t = parseFloat(t_balok);
            if(isNaN(p) || isNaN(l) || isNaN(t)) return null;
            return `Volume = ${(p*l*t).toFixed(2)} cm³\nLuas Permukaan = ${(2*(p*l + p*t + l*t)).toFixed(2)} cm²`;
        },
        tabung({ r_tabung, t_tabung }) {
            const r = parseFloat(r_tabung);
            const t = parseFloat(t_tabung);
            if(isNaN(r) || isNaN(t)) return null;
            return `Volume = ${(Math.PI * r**2 * t).toFixed(2)} cm³\nLuas Permukaan = ${(2 * Math.PI * r * (r + t)).toFixed(2)} cm²`;
        },
        kerucut({ r_kerucut, t_kerucut }) {
            const r = parseFloat(r_kerucut);
            const t = parseFloat(t_kerucut);
            if(isNaN(r) || isNaN(t)) return null;
            const s = Math.sqrt(r**2 + t**2);
            return `Volume = ${(1/3 * Math.PI * r**2 * t).toFixed(2)} cm³\nLuas Permukaan = ${(Math.PI * r * (r + s)).toFixed(2)} cm²`;
        },
        bola({ r_bola }) {
            const r = parseFloat(r_bola);
            if(isNaN(r)) return null;
            return `Volume = ${(4/3 * Math.PI * r**3).toFixed(2)} cm³\nLuas Permukaan = ${(4 * Math.PI * r**2).toFixed(2)} cm²`;
        },
        glbb({ v0, af, tf }) {
            const v = parseFloat(v0);
            const a = parseFloat(af);
            const t = parseFloat(tf);
            if (isNaN(v) || isNaN(a) || isNaN(t)) return null;
            return `Kecepatan Akhir = ${(v + a*t).toFixed(2)} m/s\nJarak = ${(v*t + 0.5*a*t*t).toFixed(2)} m`;
        },
        energi({ massa_en, v_en, h_en }) {
            const m = parseFloat(massa_en);
            const v = parseFloat(v_en);
            const h = parseFloat(h_en);
            if(isNaN(m)) return "Massa harus diisi.";
            let result = [];
            if(!isNaN(v)) result.push(`Energi Kinetik (Ek) = ${(0.5 * m * v**2).toFixed(2)} Joule`);
            if(!isNaN(h)) result.push(`Energi Potensial (Ep) = ${(m * 9.8 * h).toFixed(2)} Joule`);
            return result.length ? result.join('\n') : "Isi Kecepatan (v) atau Tinggi (h).";
        },
        ohm({ v_ohm, i_ohm, r_ohm }) {
            const V = v_ohm ? parseFloat(v_ohm) : NaN;
            const I = i_ohm ? parseFloat(i_ohm) : NaN;
            const R = r_ohm ? parseFloat(r_ohm) : NaN;
            const filledCount = [V, I, R].filter(v => !isNaN(v)).length;
            if(filledCount !== 2) return "Error: Mohon isi tepat dua nilai.";
            
            if (isNaN(V)) return `Tegangan (V) = ${(I * R).toFixed(2)} Volt`;
            if (isNaN(I)) return `Arus (I) = ${(V / R).toFixed(2)} Ampere`;
            if (isNaN(R)) return `Hambatan (R) = ${(V / I).toFixed(2)} Ohm (Ω)`;
            return "Error: Periksa input.";
        },
    };

    // --- BAGIAN 3: MANAJEMEN UI (dari ui.js) ---
    const ui = {
        screens: {
            menu: document.getElementById('menuScreen'),
            subMenu: document.getElementById('subMenuScreen'),
            slides: document.getElementById('slideWrapper'),
        },
        containers: {
            mainMenu: document.getElementById('mainMenuGrid'),
            subMenu: document.getElementById('subMenuGrid'),
            slides: document.getElementById('slidesViewport'),
        },
        titles: {
            subMenu: document.getElementById('subMenuTitle'),
            subject: document.getElementById('subjectTitle'),
        },

        showScreen(screenName) {
            Object.values(this.screens).forEach(s => s.classList.add('hidden'));
            if (this.screens[screenName]) {
                this.screens[screenName].classList.remove('hidden');
            }
        },

        buildMainMenu(data, onSelect) {
            this.containers.mainMenu.innerHTML = Object.entries(data)
                .map(([key, { title }]) => `<button class="menu-btn" data-subject="${key}">${title}</button>`)
                .join('');
            this.containers.mainMenu.addEventListener('click', e => {
                if (e.target.matches('.menu-btn')) {
                    onSelect(e.target.dataset.subject);
                }
            });
        },

        buildSubMenu(subject, data, onSelect) {
            this.titles.subMenu.textContent = data.title;
            this.containers.subMenu.innerHTML = Object.entries(data.categories)
                .map(([key, { title }]) => `<button class="menu-btn" data-category="${key}">${title}</button>`)
                .join('');
            this.containers.subMenu.addEventListener('click', e => {
                if (e.target.matches('.menu-btn')) {
                    onSelect(subject, e.target.dataset.category);
                }
            });
        },

        buildSlides(subject, slideData) {
            this.titles.subject.textContent = subject;
            this.containers.slides.innerHTML = slideData.map((slide, index) => `
                <div class="slide ${index === 0 ? 'active' : ''}" data-slide-id="${slide.id}">
                    <h2>${slide.title}</h2>
                    <p class="desc">${slide.desc}</p>
                    ${this.buildForm(slide.id, slide.inputs)}
                    <div class="result-box" id="res-${slide.id}"></div>
                </div>
            `).join('');
        },

        buildForm(calcId, inputs = []) {
            if (!inputs.length) return '';
            const formInputs = inputs.map(input => `
                <div class="form-group">
                    <label for="${input.id}" class="visually-hidden">${input.label}</label>
                    <input id="${input.id}" type="${input.type}" placeholder="${input.label}" ${input.required ? 'required' : ''}>
                </div>
            `).join('');
            
            return `
                <form data-calc-form="${calcId}">
                    ${formInputs}
                    <div class="btn-row">
                        <button type="submit" class="btn" data-calc="${calcId}">Hitung</button>
                        <button type="button" class="btn alt" data-clear="${calcId}">Clear</button>
                    </div>
                </form>
            `;
        },

        renderResult(calcId, resultText) {
            const resultBox = document.getElementById(`res-${calcId}`);
            if (resultBox) {
                resultBox.textContent = resultText;
                resultBox.style.display = 'block';
            }
        },

        clearForm(calcId) {
            const form = document.querySelector(`form[data-calc-form="${calcId}"]`);
            const resultBox = document.getElementById(`res-${calcId}`);
            if (form) form.reset();
            if (resultBox) {
                resultBox.style.display = 'none';
                resultBox.textContent = '';
            }
            form.querySelectorAll('input').forEach(input => input.classList.remove('input-error'));
        },

        getFormValues(calcId) {
            const form = document.querySelector(`form[data-calc-form="${calcId}"]`);
            if (!form) return null;
            const values = {};
            form.querySelectorAll('input').forEach(input => {
                values[input.id] = input.value;
            });
            return values;
        }
    };

    // --- BAGIAN 4: LOGIKA UTAMA APLIKASI (dari main.js) ---
    let currentSlideIndex = 0;
    let slides = [];
    let currentHistory = { subject: null, category: null };

    function goToSubject(subjectKey) {
        const subject = SUBJECT_DATA[subjectKey];
        currentHistory.subject = subjectKey;
        if (subject.isCategory) {
            ui.buildSubMenu(subjectKey, subject, goToCategory);
            ui.showScreen('subMenu');
        } else {
            setupAndShowSlides(subject.title, subject.slides);
        }
    }

    function goToCategory(subjectKey, categoryKey) {
        const category = SUBJECT_DATA[subjectKey].categories[categoryKey];
        currentHistory.category = categoryKey;
        setupAndShowSlides(category.title, category.slides);
    }

    function setupAndShowSlides(title, slideData) {
        ui.buildSlides(title, slideData);
        slides = document.querySelectorAll('#slidesViewport .slide');
        currentSlideIndex = 0;
        updateSlideClasses();
        updateNavButtons();
        ui.showScreen('slides');
    }

    function changeSlide(direction) {
        const newIndex = currentSlideIndex + direction;
        if (newIndex >= 0 && newIndex < slides.length) {
            currentSlideIndex = newIndex;
            updateSlideClasses();
            updateNavButtons();
        }
    }

    function updateSlideClasses() {
        slides.forEach((slide, index) => {
            slide.classList.remove('active', 'left');
            if (index === currentSlideIndex) slide.classList.add('active');
            else if (index < currentSlideIndex) slide.classList.add('left');
        });
    }

    function updateNavButtons() {
        document.getElementById('prevSlide').disabled = currentSlideIndex === 0;
        document.getElementById('nextSlide').disabled = currentSlideIndex === slides.length - 1;
        document.getElementById('btnPrev').disabled = currentSlideIndex === 0;
        document.getElementById('btnNext').disabled = currentSlideIndex === slides.length - 1;
    }

    function goBack() {
        if (currentHistory.category) {
            currentHistory.category = null;
            goToSubject(currentHistory.subject);
        } else if (currentHistory.subject) {
            currentHistory.subject = null;
            ui.showScreen('menu');
        }
    }

    function handleCalculation(calcId, button) {
        const values = ui.getFormValues(calcId);
        if (!values) return;

        let isValid = true;
        const form = document.querySelector(`form[data-calc-form="${calcId}"]`);
        form.querySelectorAll('input[required]').forEach(input => {
            if (!input.value) {
                isValid = false;
                input.classList.add('input-error');
            } else {
                input.classList.remove('input-error');
            }
        });

        if (!isValid) return;

        if (calculator[calcId]) {
            button.disabled = true;
            button.classList.add('calculating');
            
            setTimeout(() => {
                const result = calculator[calcId](values);
                ui.renderResult(calcId, result || "Error: Periksa kembali input Anda.");
                button.disabled = false;
                button.classList.remove('calculating');
            }, 100);
        }
    }

    function handleInputSanitization(e) {
        if (e.target.matches('input[type="number"]')) {
            e.target.value = e.target.value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
            if (e.target.hasAttribute('required')) {
                e.target.classList.toggle('input-error', !e.target.value);
            }
        }
    }

    // --- Inisialisasi dan Event Listeners ---
    ui.buildMainMenu(SUBJECT_DATA, goToSubject);
66
    document.body.addEventListener('click', e => {
        const { target } = e;
        if (target.id === 'backToMain' || target.id === 'backToPreviousMenu') goBack();
        if (target.id === 'prevSlide' || target.id === 'btnPrev') changeSlide(-1);
        if (target.id === 'nextSlide' || target.id === 'btnNext') changeSlide(1);
        if (target.dataset.clear) ui.clearForm(target.dataset.clear);
        if (target.id === 'btnReset') {
             const activeSlide = slides[currentSlideIndex];
             if (activeSlide) ui.clearForm(activeSlide.dataset.slideId);
        }
    });

    document.body.addEventListener('submit', e => {
        e.preventDefault();
        const calcId = e.target.dataset.calcForm;
        const button = e.target.querySelector('button[type="submit"]');
        if (calcId) handleCalculation(calcId, button);
    });

    document.body.addEventListener('input', handleInputSanitization);
});
