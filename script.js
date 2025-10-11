// ui.js: DOM Manipulation and UI Logic Module

// --- Element Selectors ---
const screens = {
    menu: document.getElementById('menuScreen'),
    subMenu: document.getElementById('subMenuScreen'),
    slides: document.getElementById('slideWrapper'),
};
const containers = {
    mainMenu: document.getElementById('mainMenuGrid'),
    subMenu: document.getElementById('subMenuGrid'),
    slides: document.getElementById('slidesViewport'),
};
const titles = {
    subMenu: document.getElementById('subMenuTitle'),
    subject: document.getElementById('subjectTitle'),
};

// --- Screen Management ---
export function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.add('hidden'));
    if (screens[screenName]) {
        screens[screenName].classList.remove('hidden');
    }
}

// --- UI Building ---
export function buildMainMenu(data, onSelect) {
    containers.mainMenu.innerHTML = Object.entries(data)
        .map(([key, { title }]) => `<button class="menu-btn" data-subject="${key}">${title}</button>`)
        .join('');
    containers.mainMenu.addEventListener('click', e => {
        if (e.target.matches('.menu-btn')) {
            onSelect(e.target.dataset.subject);
        }
    });
}

export function buildSubMenu(subject, data, onSelect) {
    titles.subMenu.textContent = data.title;
    containers.subMenu.innerHTML = Object.entries(data.categories)
        .map(([key, { title }]) => `<button class="menu-btn" data-category="${key}">${title}</button>`)
        .join('');
    containers.subMenu.addEventListener('click', e => {
        if (e.target.matches('.menu-btn')) {
            onSelect(subject, e.target.dataset.category);
        }
    });
}

export function buildSlides(subject, slideData) {
    titles.subject.textContent = subject;
    containers.slides.innerHTML = slideData.map((slide, index) => `
        <div class="slide ${index === 0 ? 'active' : ''}" data-slide-id="${slide.id}">
            <h2>${slide.title}</h2>
            <p class="desc">${slide.desc}</p>
            ${buildForm(slide.id, slide.inputs)}
            <div class="result-box" id="res-${slide.id}"></div>
        </div>
    `).join('');
}

function buildForm(calcId, inputs = []) {
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
}

// --- UI Interaction ---
export function renderResult(calcId, resultText) {
    const resultBox = document.getElementById(`res-${calcId}`);
    if (resultBox) {
        resultBox.textContent = resultText;
        resultBox.style.display = 'block';
    }
}

export function clearForm(calcId) {
    const form = document.querySelector(`form[data-calc-form="${calcId}"]`);
    const resultBox = document.getElementById(`res-${calcId}`);
    if (form) form.reset();
    if (resultBox) {
        resultBox.style.display = 'none';
        resultBox.textContent = '';
    }
    form.querySelectorAll('input').forEach(input => input.classList.remove('input-error'));
}

export function getFormValues(calcId) {
    const form = document.querySelector(`form[data-calc-form="${calcId}"]`);
    if (!form) return null;
    const values = {};
    const inputs = form.querySelectorAll('input');
    inputs.forEach(input => {
        values[input.id] = input.value;
    });
    return values;
}
