// main.js: Application Core / Orchestrator

import { SUBJECT_DATA } from './data.js';
import * as ui from './ui.js';
import * as calculator from './calculator.js';

let currentSlideIndex = 0;
let slides = [];
let currentHistory = { subject: null, category: null };

// --- State and Navigation ---

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
        if (index === currentSlideIndex) {
            slide.classList.add('active');
        } else if (index < currentSlideIndex) {
            slide.classList.add('left');
        }
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

// --- Event Handlers ---

function handleCalculation(calcId, button) {
    const values = ui.getFormValues(calcId);
    if (!values) return;

    // Real-time validation check
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
        
        // Simulate processing for visual feedback
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
        // Remove non-numeric characters except for one dot
        e.target.value = e.target.value.replace(/[^\d.]/g, '').replace(/(\..*)\./g, '$1');
        // If required, check validation on input
        if (e.target.hasAttribute('required')) {
            if (e.target.value) {
                e.target.classList.remove('input-error');
            } else {
                e.target.classList.add('input-error');
            }
        }
    }
}


// --- Initial Setup ---

document.addEventListener("DOMContentLoaded", () => {
    ui.buildMainMenu(SUBJECT_DATA, goToSubject);
    
    // Global event listener for clicks
    document.body.addEventListener('click', e => {
        const target = e.target;

        // Back buttons
        if (target.id === 'backToMain' || target.id === 'backToPreviousMenu') {
            goBack();
        }
        
        // Slide navigation
        if (target.id === 'prevSlide' || target.id === 'btnPrev') changeSlide(-1);
        if (target.id === 'nextSlide' || target.id === 'btnNext') changeSlide(1);

        // Clear button
        if (target.dataset.clear) {
            ui.clearForm(target.dataset.clear);
        }
        
        // Mobile reset button
        if (target.id === 'btnReset') {
             const activeSlide = slides[currentSlideIndex];
             if (activeSlide) ui.clearForm(activeSlide.dataset.slideId);
        }
    });

    // Global event listener for form submissions
    document.body.addEventListener('submit', e => {
        e.preventDefault();
        const calcId = e.target.dataset.calcForm;
        const button = e.target.querySelector('button[type="submit"]');
        if (calcId) {
            handleCalculation(calcId, button);
        }
    });

    // Global listener for real-time input cleaning
    document.body.addEventListener('input', handleInputSanitization);
});
