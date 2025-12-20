/* ========================================
   SITE_WEB.JS - INTERACTIVITÉ PRINCIPALE
   ======================================== */

/* ========== CHANGEMENT DE LANGUE ========== */
// Configuration minimale de traduction (le texte existant sert de valeur par défaut)
const TRANSLATIONS = {
    fr: {},
    en: {}
};

// Applique les traductions aux éléments possédant l'attribut data-i18n
function applyTranslations(lang) {
    if (!TRANSLATIONS[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
        if (text !== undefined) {
            // Utilise textContent pour éviter d'injecter du HTML
            el.textContent = text;
        }
    });

    // Enregistre la langue choisie dans le localStorage
    try { localStorage.setItem('site_lang', lang); } catch (e) { /* ignore */ }
}

// Initialise les boutons de changement de langue
function initLanguageButtons() {
    const btnFr = document.getElementById('ln-fr');
    const btnEn = document.getElementById('ln-en');
    if (btnFr) btnFr.addEventListener('click', () => applyTranslations('fr'));
    if (btnEn) btnEn.addEventListener('click', () => applyTranslations('en'));
}

// Initialise la langue lors du chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initLanguageButtons();
    const saved = (function() { try { return localStorage.getItem('site_lang'); } catch (e) { return null; }})();
    const defaultLang = saved || document.documentElement.lang || 'fr';
    applyTranslations(defaultLang);
});

/* ========== GESTION DU THÈME (Clair/Sombre) ========== */
// Définit le thème en clair ou en sombre
function setTheme(theme) {
    try { localStorage.setItem('site_theme', theme); } catch (e) { /* ignore */ }
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // Met à jour l'icône du bouton de bascule
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Bascule entre les thèmes clair et sombre
function toggleTheme() {
    const current = (function() { try { return localStorage.getItem('site_theme'); } catch (e) { return null; }})();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

// Initialise le thème au chargement (respecte les préférences système)
function initTheme() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
    const saved = (function() { try { return localStorage.getItem('site_theme'); } catch (e) { return null; }})();
    const preferred = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
}

document.addEventListener('DOMContentLoaded', initTheme);

/* ========== FORMULAIRE DE CONTACT ========== */
// Valide le format de l'email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Gère l'affichage conditionnel du champ "Qui êtes-vous ?" en fonction du champ recruteur
function initRecruteurField() {
    const recruteurSelect = document.getElementById('recruteur');
    const quiEtesVousContainer = document.getElementById('qui-etes-vous-container');
    const quiEtesVousInput = document.getElementById('qui-etes-vous');

    if (recruteurSelect && quiEtesVousContainer && quiEtesVousInput) {
        recruteurSelect.addEventListener('change', function() {
            if (this.value === 'Non') {
                quiEtesVousContainer.style.display = 'block';
                quiEtesVousInput.setAttribute('required', 'required');
            } else {
                quiEtesVousContainer.style.display = 'none';
                quiEtesVousInput.removeAttribute('required');
                quiEtesVousInput.value = '';
            }
        });
    }
}

// Gère l'envoi du formulaire de contact avec Formspree (uniquement si contact-form existe)
document.addEventListener('DOMContentLoaded', function() {
    initRecruteurField();
    
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            const reponseDiv = document.getElementById('form-reponse');

            // Si la validation native du navigateur passe, affiche un message de chargement
            // et laisse Formspree gérer l'envoi réel
            reponseDiv.innerHTML = `<div class="alert"><span class="loader"></span>Envoi en cours...</div>`;
        });
    }
});

/* ========== DÉFILEMENT HORIZONTAL AUTOMATIQUE ========== */
// Fait défiler horizontalement le conteneur s'il est présent sur la page
const container = document.getElementById('autoScroll');
if (container) {
    let scrollSpeed = 1;

    function autoScroll() {
        container.scrollLeft += scrollSpeed;
        if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
            container.scrollLeft = 0;
        }
        requestAnimationFrame(autoScroll);
    }

    autoScroll();
}

/* ========== ANIMATION DE TEXTE (TYPED.JS) ========== */
// Initialise Typed.js pour l'effet de texte animé
const typedElement = document.querySelector('.typed');

if (typedElement) {
    // Récupère les textes à animer depuis l'attribut data
    let typed_strings = typedElement.getAttribute('data-typed-items');
    typed_strings = typed_strings.split(',').map(s => s.trim());

    // Initialise l'animation Typed.js
    new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

/* ========== RACCOURCIS VERS LES COMPÉTENCES ========== */
// Ajoute les clics sur les cartes de synthèse des compétences
['competence-item1','competence-item2','competence-item3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('click', () => { window.location.href = 'competence.html'; });
});

/* ========== GESTION DES MODALES ========== */
// Ouvre une modale par son identifiant
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Ferme une modale par son identifiant
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Ferme la modale en cliquant en dehors du contenu
window.onclick = function(event) {
    // La modale possède la classe 'modal' et le positionnement fixed défini dans le CSS
    if (event.target.classList && event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}

/* ========== TÉLÉCHARGEMENT DU CV ========== */
// Fonction de téléchargement du CV (placeholder)
function downloadCV(e) {
    e.preventDefault();
    alert("Le téléchargement du CV sera bientôt disponible !");
}


































    