
// Téléchargement CV (existant)
function downloadCV(e) {
    e.preventDefault();
    alert("Le téléchargement du CV sera bientôt disponible !");
}

// --- Traduction simple (i18n) ---
/*
const TRANSLATIONS = {
    fr: {
        'nav.presentation': 'Présentation',
        'nav.competences': 'Compétences',
        'nav.parcours': 'Parcours',
        'nav.projets': 'Projets',
        'nav.centre': "Centre d'intérêt",
        'nav.contact': 'Contact',
        'desc.intro': "Etudiant en deuxième année de licence Sciences pour ingénieur à l'université d'Evry Paris-Saclay",
        'objectif.intro': 'Je suis en recherche d\'un stage ouvrier de 6 à 8 semaines entre avril et mai 2026',
        'cv.download': 'Télécharger mon CV',
        'about.title': 'À propos',
        'skills.title': 'Compétences clés',
        'projects.title': 'Aperçu de mes projets',
        'projects.item1.title': 'Jeu vidéo : Eco-Geurrier',
        'projects.item1.desc': 'Une simulation ludique en Python avec interface Tkinter et gestion de carte maritime.',
        'projects.item2.title': 'Réalisation de la pièce par tournage (Usinage)',
    'projects.item2.desc': 'Conception de tmodéliation de la bielle (une pièces du vélo elliptique) et assemblage dans le système globale du vélo elliptique.',
    'projects.link': 'Voir tous les projets',
    'about.desc': 'Étudiant en deuxième année de Licence Sciences pour l’Ingénieur à l’Université d’Évry Paris-Saclay, je suis passionné par les technologies, l’innovation et la résolution de problèmes techniques. Je développe des compétences en programmation (Python, C/C++), avec une bonne maîtrise de bibliothèques telles que Tkinter, OpenCV, NumPy, Pandas et d’outils de développement web (HTML, CSS). J’explore également la conception mécanique avec SolidWorks, ainsi que l’électronique avec des outils de simulation et de prototypage. Curieux et motivé, je m’intéresse particulièrement aux systèmes embarqués, à l’intelligence artificielle et aux technologies émergentes. Je suis toujours ouvert à apprendre, collaborer et contribuer à des projets techniques stimulants.',
    'competence.dev.title': 'Développement',
    'competence.dev.desc': 'Python, C / C++, HTML, CSS, JavaScript et PHP',
    'competence.tools.title': 'Outils & Technologies',
    'competence.tools.desc': 'Git, Arduino, SolidWorks, VSCode et CodeBlocks',
    'competence.soft.title': 'Soft Skills',
    'competence.soft.desc': 'Travail en équipe, autonomie, résolution de problèmes',
        'timeline.education': 'Educations',
        'timeline.item1': '2023 : Baccalauréat Scientifique – Spécialité Math-Physique mention Bien',
        'timeline.item2': '2024 – 2027 : Licence en Sciences pour l’Ingénieur – Université d’Évry Paris-Saclay',
        'timeline.item3': '2026 (prévu) : Stage ouvrier de 6 à 8 semaines',
        'certifications.title': 'Certifications',
        'certifications.item1': 'Python : des fondamentaux aux concepts avancés du langage (2025)',
        'certifications.item2': 'PIX : usage numérique (2026)',
        'why.title': 'Pourquoi moi ?',
        'why.li1': 'Esprit d\'analyse et curiosité technique',
        'why.li2': 'Capacité à apprendre rapidement',
        'why.li3': 'Intérêt pour les projets concrets et innovants',
        'why.li4': 'Motivation et persévérance',
        'interests.title': "Centre d'intérêt",
        'interest.football': 'Football',
        'interest.programming': 'Programmation',
        'interest.reading': 'Lecture',
        'interest.gaming': 'Jeux vidéo',
        'footer.follow': 'FOLLOW ME',
        'footer.address': 'ADRESSE',
        'footer.address.value': '91360 Epinay sur orge, France',
        'footer.email.title': 'Email',
        'footer.email.value': 'nadalngaki@gmail.com',
        'footer.phone.title': 'Téléphone',
        'footer.phone.value': '+33 766932319',
        'copyright': '© 2025 Nadal NGAKI MUPATI. Tous droits reservés.',
        'contact.title': 'Formulaire de contact',
        'contact.nom': 'Nom',
        'contact.prenom': 'Prénom',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Envoyer',
        'competence.intro': 'À travers mon parcours, j\'ai développé un ensemble de compétences variées qui reflètent à la fois ma polyvalence et ma capacité d\'adaptation.',
        'competence.tech.title': 'Mes compétences techniques',
        'competence.transversal.title': 'Mes compétences transversales',
        'competence.languages.title': 'Mes compétences linguistiques',
        'competence.human.title': 'Mes compétences humaines',
        'projects.title.page': 'Mes Projets',
        'interests.title.page': 'Centres d\'intérêt',
        'interests.lead': 'Ce que j\'aime faire pendant mon temps libre — passions et activités qui m\'inspirent et complètent mon profil d\'ingénieur.',
        'interest.football.desc': 'Supporter du FC Barcelone — jeu collectif, entraînements et analyse tactique.',
        'interest.music': 'Musique',
        'interest.music.desc': 'Écoute variée — détente, concentration en travaillant, découverte d\'artistes.',
        'interest.tech.desc': 'Projets perso, veille technologique, prototypage hardware & software.',
        'interest.travel': 'Voyages',
        'interest.travel.desc': 'Découvrir de nouveaux lieux, cultures, et sources d\'inspiration pour mes projets.',
        'interest.diy': 'Bricolage & Maker',
        'interest.diy.desc': 'Conception mécanique, soudure, montage électronique — j\'apprends en faisant.'
    },
    en: {
        'nav.presentation': 'About',
        'nav.competences': 'Skills',
        'nav.parcours': 'Education',
        'nav.projets': 'Projects',
        'nav.centre': 'Interests',
        'nav.contact': 'Contact',
        'desc.intro': "Second-year student in Engineering Sciences at the University of Evry Paris-Saclay",
        'objectif.intro': 'I am looking for a 6 to 8 week labour internship between April and May 2026',
        'cv.download': 'Download my CV',
        'about.title': 'About',
        'skills.title': 'Key skills',
        'projects.title': 'Project overview',
        'projects.item1.title': 'Arduino sensor system',
        'projects.item1.desc': 'Prototype of a temperature sensor with LCD display and buzzer alert.',
        'projects.item2.title': 'Personal mini portfolio site',
    'projects.item2.desc': 'Responsive website coded in HTML/CSS, hosted on GitHub Pages.',
    'projects.link': 'See all projects',
    'about.desc': 'I am a second-year student in the Bachelor\'s program in Engineering Sciences at the University of Evry Paris-Saclay. I am passionate about technology, innovation and solving technical problems. I am developing programming skills (Python, C/C++) and have experience with libraries such as Tkinter, OpenCV, NumPy and Pandas, as well as web technologies (HTML, CSS). I also explore mechanical design with SolidWorks and electronics using simulation and prototyping tools. Curious and motivated, I am particularly interested in embedded systems, artificial intelligence and emerging technologies. I am always eager to learn, collaborate and contribute to challenging technical projects.',
    'competence.dev.title': 'Development',
    'competence.dev.desc': 'Python, C / C++, HTML, CSS, JavaScript and PHP',
    'competence.tools.title': 'Tools & Technologies',
    'competence.tools.desc': 'Git, Arduino, SolidWorks, VSCode and CodeBlocks',
    'competence.soft.title': 'Soft Skills',
    'competence.soft.desc': 'Teamwork, autonomy, problem solving',
        'timeline.education': 'Education',
        'timeline.item1': '2023: Scientific Baccalaureate – Math-Physics specialization, with Honors',
        'timeline.item2': '2024 – 2027: Bachelor in Engineering Sciences – University of Evry Paris-Saclay',
        'timeline.item3': '2026 (planned): 6 to 8 week labour internship',
        'certifications.title': 'Certifications',
        'certifications.item1': 'Python: from fundamentals to advanced concepts (2025)',
        'certifications.item2': 'PIX: digital skills (2026)',
        'why.title': 'Why me?',
        'why.li1': 'Analytical mindset and technical curiosity',
        'why.li2': 'Ability to learn quickly',
        'why.li3': 'Interest in hands-on and innovative projects',
        'why.li4': 'Motivation and perseverance',
        'interests.title': 'Interests',
        'interest.football': 'Football',
        'interest.programming': 'Programming',
        'interest.reading': 'Reading',
        'interest.gaming': 'Video games',
        'footer.follow': 'FOLLOW ME',
        'footer.address': 'ADDRESS',
        'footer.address.value': '91360 Epinay sur orge, France',
        'footer.email.title': 'Email',
        'footer.email.value': 'nadalngaki@gmail.com',
        'footer.phone.title': 'Phone',
        'footer.phone.value': '+33 766932319',
        'copyright': '© 2025 Nadal NGAKI MUPATI. All rights reserved.',
        'contact.title': 'Contact Form',
        'contact.nom': 'Name',
        'contact.prenom': 'First Name',
        'contact.email': 'Email',
        'contact.message': 'Message',
        'contact.submit': 'Send',
        'competence.intro': 'Through my journey, I have developed a diverse set of skills that reflect both my versatility and my adaptability.',
        'competence.tech.title': 'My Technical Skills',
        'competence.transversal.title': 'My Transversal Skills',
        'competence.languages.title': 'My Language Skills',
        'competence.human.title': 'My Soft Skills',
        'projects.title.page': 'My Projects',
        'interests.title.page': 'Interests',
        'interests.lead': 'What I love to do in my free time — passions and activities that inspire me and complete my engineer profile.',
        'interest.football.desc': 'FC Barcelona supporter — team play, training and tactical analysis.',
        'interest.music': 'Music',
        'interest.music.desc': 'Diverse listening — relaxation, focus while working, discovering artists.',
        'interest.tech.desc': 'Personal projects, technology watch, hardware & software prototyping.',
        'interest.travel': 'Travel',
        'interest.travel.desc': 'Discover new places, cultures, and inspiration sources for my projects.',
        'interest.diy': 'DIY & Maker',
        'interest.diy.desc': 'Mechanical design, welding, electronics assembly — I learn by doing.'
    }
}; */

// Appliquer les traductions
function applyTranslations(lang) {
    if (!TRANSLATIONS[lang]) return;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = TRANSLATIONS[lang][key] || TRANSLATIONS['fr'][key];
        if (text !== undefined) {
            // Use textContent to avoid injecting HTML
            el.textContent = text;
        }
    });

    // Sauvegarder la langue choisie
    try { localStorage.setItem('site_lang', lang); } catch (e) { /* ignore */ }
}

// Initialiser les boutons de langue
function initLanguageButtons() {
    const btnFr = document.getElementById('ln-fr');
    const btnEn = document.getElementById('ln-en');
    if (btnFr) btnFr.addEventListener('click', () => applyTranslations('fr'));
    if (btnEn) btnEn.addEventListener('click', () => applyTranslations('en'));
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    initLanguageButtons();
    const saved = (function() { try { return localStorage.getItem('site_lang'); } catch (e) { return null; }})();
    const defaultLang = saved || document.documentElement.lang || 'fr';
    applyTranslations(defaultLang);
});

// --- Theme (dark / light) ---
function setTheme(theme) {
    try { localStorage.setItem('site_theme', theme); } catch (e) { /* ignore */ }
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    // update toggle icon/text
    const btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
}

function toggleTheme() {
    const current = (function() { try { return localStorage.getItem('site_theme'); } catch (e) { return null; }})();
    const next = current === 'dark' ? 'light' : 'dark';
    setTheme(next);
}

function initTheme() {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        btn.addEventListener('click', toggleTheme);
    }
    const saved = (function() { try { return localStorage.getItem('site_theme'); } catch (e) { return null; }})();
    const preferred = saved || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(preferred);
}

// init theme after DOM loaded
document.addEventListener('DOMContentLoaded', initTheme);


// Gestion du formulaire de contact
/*document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const responseDiv = document.getElementById('form-response');
    
    fetch('contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        responseDiv.innerHTML = `<div class="alert ${data.success ? 'alert-success' : 'alert-error'}">${data.message}</div>`;
        if (data.success) {
            this.reset();
        }
    })
    .catch(error => {
        responseDiv.innerHTML = '<div class="alert alert-error">Erreur technique lors de l\'envoi du message.</div>';
        console.error('Error:', error);
    });
});*/
                
// Gestionnaire de formulaire de contact 

/*document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const reponseDiv = document.getElementById('form-reponse');
    const nom = this.nom.value.trim();
    const email = this.email.value.trim();
    const message = this.message.value.trim();

    // Vérification simple des champs
    if (!nom || !email || !message) {
        reponseDiv.innerHTML = `<div class="alert alert-error">Veuillez remplir tous les champs.</div>`;
        return;
    }

    // Simulation de l'envoi (2 secondes d’attente)
    reponseDiv.innerHTML = `<div class="alert">Envoi en cours...</div>`;
    
    setTimeout(() => {
        // Simulation aléatoire de réussite ou d’échec
        const success = Math.random() > 0.2; // 80 % de chance de succès

        if (success) {
            reponseDiv.innerHTML = `<div class="alert alert-success">Merci ${nom}, votre message a bien été "envoyé" ✅</div>`;
            this.reset();
        } else {
            reponseDiv.innerHTML = `<div class="alert alert-error">Erreur simulée : impossible d'envoyer le message ❌</div>`;
        }
    }, 2000);
});*/



// Fonction pour vérifier la validité d'un email
function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Gestion du formulaire de contact (uniquement sur la page contact.html)
if (document.getElementById('contact-form')) {
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();

        const reponseDiv = document.getElementById('form-reponse');
        const emailErrorDiv = document.getElementById('email-error');

        const nom = this.nom.value.trim();
        const prenom = this.prenom.value.trim();
        const email = this.email.value.trim();
        const message = this.message.value.trim();

        // Vérification de tous les champs
        if (!nom || !prenom || !email || !message) {
            reponseDiv.innerHTML = `<div class="alert alert-error">Veuillez remplir tous les champs.</div>`;
            return;
        }

        // Vérification de l'email
        if (!isValidEmail(email)) {
            if (emailErrorDiv) emailErrorDiv.style.display = "block";
            if (emailErrorDiv) emailErrorDiv.textContent = "Veuillez saisir un email valide.";
            return;
        } else {
            if (emailErrorDiv) emailErrorDiv.style.display = "none";
        }

        // Simulation de l'envoi avec loader
        reponseDiv.innerHTML = `<div class="alert"><span class="loader"></span>Envoi en cours...</div>`;

        setTimeout(() => {
            const success = Math.random() > 0.2; // 80% de chance de succès

            if (success) {
                reponseDiv.innerHTML = `<div class="alert alert-success">Merci ${prenom} ${nom}, votre message a bien été "envoyé" ✅</div>`;
                this.reset();
            } else {
                reponseDiv.innerHTML = `<div class="alert alert-error">Erreur simulée : impossible d'envoyer le message ❌</div>`;
            }
        }, 2000);
    });
}


// gestion du défilement horizontal automatique (uniquement si l'élément existe)
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



// Sélectionne l'élément avec la classe "typed"
const typedElement = document.querySelector('.typed');

if (typedElement) {
  // Récupère les items depuis l'attribut data-typed-items
  let typed_strings = typedElement.getAttribute('data-typed-items');
  typed_strings = typed_strings.split(',').map(s => s.trim()); // Nettoie les espaces

  // Initialise Typed.js
  new Typed('.typed', {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
  });
}


// Redirection des block
document.getElementById("competence-item1").addEventListener("click", function() {
window.location.href = "competence.html";})

document.getElementById("competence-item2").addEventListener("click", function() {
window.location.href = "competence.html";})

document.getElementById("competence-item3").addEventListener("click", function() {
window.location.href = "competence.html";})




// Fonction pour ouvrir la fenêtre modale
function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

// Fonction pour fermer la fenêtre modale
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// Fermeture de la modale en cliquant en dehors de la boîte
window.onclick = function(event) {
    // La modale a la classe 'modal' et le style 'position: fixed' (défini dans le CSS)
    if (event.target.classList && event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}


































    