/* ========================================
   SITE_WEB.JS - INTERACTIVITÉ PRINCIPALE
/*======================================== */

/* ========== CHANGEMENT DE LANGUE ========== */
// Table de traduction FR/EN pour tout le contenu branché avec data-i18n
const TRANSLATIONS = {
    fr: {
        // Navigation
        'nav.presentation': 'Présentation',
        'nav.competences': 'Compétences',
        'nav.parcours': 'Educations',
        'nav.projets': 'Projets',
        'nav.contact': 'Contact',

        // Index – intro
        'desc.intro': "Etudiant en deuxième année de licence Sciences pour ingénieur à l'université d'Evry Paris-saclay",
        'hero.future': 'Futur ingénieur en système embarqué',
        'hero.im': 'Je suis',
        'hero.typed': 'Curieux., Passionné., Autonome., Ambitieux., Étudiant ingénieur.',
        'objectif.intro': "Je suis en recherche d'un stage ouvrier de 6 à 8 semaines entre avril et mai 2026",

        // CV bouton
        'cv.view-text': 'Voir mon CV',

        // À propos
        'about.title': 'À propos',
        'about.desc': "Je suis passionné par les domaines de l’électronique, de l’automatisme et de la programmation embarquée. J’ai acquis des compétences solides en programmation (Python, C/C++, HTML, CSS, JavaScript, PHP) ainsi qu’en utilisation d’outils tels que GitHub, Arduino et SolidWorks. Mon objectif est de poursuivre mon parcours afin de devenir ingénieur en systèmes embarqués et de travailler dans le domaine des objets connectés (IoT). Je souhaite renforcer progressivement mes compétences en électronique, en automatisme et en programmation embarquée à travers des projets, des stages et une formation approfondie. Motivé, sérieux et curieux, je m’investis pleinement dans l’apprentissage et la réalisation de projets concrets pour développer des compétences solides et cohérentes avec le monde industriel.",

        // Compétences clés (index)
        'skills.title': 'Compétences clés',
        'competence.dev.title': 'Développement',
        'competence.dev.desc': 'Python, C, HTML, CSS, JavaScript et PHP',
        'competence.tools.title': 'Outils & Technologies',
        'competence.tools.desc': 'GitHub, Arduino, SolidWorks, VSCode, CodeBlocks et Schneider Electric',
        'competence.soft.title': 'Soft Skills',
        'competence.soft.desc': 'Travail en équipe, autonomie, résolution de problèmes',

        // Aperçu projets (index)
        'projects.title': 'Aperçu de mes projets',
        'projects.item1.title': 'Jeu vidéo : Eco-Geurrier',
        'projects.item1.desc': 'Une simulation ludique en Python avec interface Tkinter et gestion de carte maritime.',
        'projects.item2.title': "Système de gestion d'un ascenseur",
        'projects.item2.desc': 'Mise en œuvre d’un GRAFCET sous environnement Schneider Electric pour la commande d’un ascenseur.',
        'projects.link': 'Voir tous les projets',

        // Parcours (index)
        'timeline.education': 'Educations',
        'timeline.item1': 'Baccalauréat Scientifique – Spécialité Math-Physique avec Mention Bien - Lycée Sadisana',
        'timeline.item2': 'Licence en Sciences pour l’Ingénieur – Université d’Évry Paris-Saclay. Cours principaux : Mathématiques, Physique, Informatique (C, python, html, JavaScript, CSS, PHP), Électronique, Mécanique, Automatisme, circuit numérique, composants électriques, etc.',
        'timeline.item3': 'Stage ouvrier de 6 à 8 semaines',
        'timeline.item3.date': 'Avril 2026 (prévu) :',

        // Certifications (index)
        'certifications.title': 'Certifications',
        'certifications.item1': 'Python: des fondamentaux aux concepts avancés du langage (2025).',
        'certifications.item2': 'PIX: Compétences numériques (2025). code de vérification : P-H3FGR72F',
        'certifications.link': 'cliquez ici',

        // Centres d’intérêt (index)
        'interests.title': "Centres d'intérêt",
        'interests.item1': 'Taekwondo',
        'interests.item2': 'Football',
        'interests.item3': 'Lecture',
        'interests.item4': 'Programmation',
        'interests.item1.desc': 'Sport de combat et discipline',
        'interests.item2.desc': "Esprit d'équipe et passion",
        'interests.item3.desc': 'Culture et apprentissage continu',
        'interests.item4.desc': 'Projets personnels et créativité',

        // Pourquoi moi (index)
        'why.title': 'Pourquoi moi ?',
        'why.li1': 'Esprit d’analyse et curiosité technique',
        'why.li2': 'Capacité à apprendre rapidement',
        'why.li3': 'Intérêt pour les projets concrets et innovants',
        'why.li4': "J'aime transformer une idée en prototype",
        'why.li5': 'Je me donne à fond sur un travail',
        'why.li6': 'Pasionné par les sciences pour ingénieur',
        'why.li7': "J’adore comprendre comment les systèmes fonctionnent et résoudre les problèmes techniques",

        // Contact
        'contact.title': 'Formulaire de contact',
        'contact.subtitle': "N'hésitez pas à me contacter via ce formulaire.",
        'contact.nom': 'Nom *',
        'contact.prenom': 'Prénom *',
        'contact.entreprise': 'Entreprise (optionnel)',
        'contact.objet': 'Objet du contact *',
        'contact.objet.placeholder': '-- Sélectionnez un objet --',
        'contact.recruteur': 'Êtes-vous un recruteur ? *',
        'contact.recruteur.placeholder': '-- Sélectionnez une option --',
        'contact.qui': 'Qui êtes-vous ?',
        'contact.email': 'Email *',
        'contact.pays': 'Pays *',
        'contact.pays.placeholder': '-- Sélectionnez un pays --',
        'contact.region': 'Région (si France)',
        'contact.region.placeholder': '-- Sélectionnez une région --',
        'contact.departement': 'Département (si France)',
        'contact.departement.placeholder': '-- Sélectionnez un département --',
        'contact.message': 'Message *',
        'contact.submit': 'Envoyer',

        // Page compétences – titres
        'competence.title': 'Mes compétences',
        'competence.intro': "À travers mon parcours, j'ai développé un ensemble de compétences variées qui reflètent à la fois ma polyvalence et ma capacité d'adaptation. Mes savoir-faire techniques (programmation, conception, électronique, web), mes compétences linguistiques (français, lingala, anglais) ainsi que mes qualités humaines (autonomie, esprit d'équipe, dynamisme) me permettent de mener à bien des projets diversifiés et de collaborer efficacement dans différents contextes. Cette combinaison de connaissances et d'expériences constitue une véritable valeur ajoutée que je mets au service de chaque mission.",
        'competence.tech.title': 'Mes compétences techniques',
        'competence.transversal.title': 'Mes compétences transversales',
        'competence.languages.title': 'Mes compétences linguistiques',
        'competence.human.title': 'Mes qualités humaines',

        // Cartes compétences techniques (page compétences)
        'competence.tech.python.title': 'Python',
        'competence.tech.python.desc': 'Tkinter, gestion des fichiers, boucles, petites applications. Cliquez pour en savoir plus.',
        'competence.tech.c.title': 'C',
        'competence.tech.c.desc': 'Programmation bas-niveau, gestion mémoire, algorithmes. Cliquez pour en savoir plus.',
        'competence.tech.html.title': 'HTML',
        'competence.tech.html.desc': 'Structure des pages web, sémantique, accessibilité. Cliquez pour en savoir plus.',
        'competence.tech.css.title': 'CSS',
        'competence.tech.css.desc': 'Stylisation web, mise en page responsive, animations. Cliquez pour en savoir plus.',
        'competence.tech.js.title': 'JavaScript',
        'competence.tech.js.desc': 'Front-end, interactions DOM, outils web. Cliquez pour en savoir plus.',
        'competence.tech.php.title': 'PHP',
        'competence.tech.php.desc': 'Notions — back-end basique, formulaires, interaction serveur. Cliquez pour en savoir plus.',
        'competence.tech.arduino.title': 'Arduino',
        'competence.tech.arduino.desc': 'Programmation embarquée, capteurs, moteurs, prototypage. Cliquez pour en savoir plus.',
        'competence.tech.montage.title': 'Montage & câblage',
        'competence.tech.montage.desc': 'Soudure, schémas, breadboard et PCB simples. Cliquez pour en savoir plus.',
        'competence.tech.cao.title': 'CAO — SolidWorks',
        'competence.tech.cao.desc': 'Conception mécanique, assemblages, plans techniques. Cliquez pour en savoir plus.',

        // Cartes compétences transversales
        'competence.transversal.word.title': 'Word',
        'competence.transversal.word.desc': 'Mise en page, rédaction de documents, création de modèles, gestion des styles',
        'competence.transversal.excel.title': 'Excel',
        'competence.transversal.excel.desc': 'Tableaux, formules, graphiques, tableaux croisés dynamiques',
        'competence.transversal.powerpoint.title': 'PowerPoint',
        'competence.transversal.powerpoint.desc': 'Conception de présentations, animations, communication visuelle',
        'competence.transversal.latex.title': 'LaTeX',
        'competence.transversal.latex.desc': 'Rédaction scientifique, gestion des références, mise en page avancée',

        // Cartes compétences linguistiques
        'competence.languages.fr.title': 'Français',
        'competence.languages.fr.desc': 'Langue maternelle, aisance dans la communication quotidienne et professionnelle',
        'competence.languages.lingala.title': 'Lingala',
        'competence.languages.lingala.desc': 'Langue maternelle, excellent dans la communication écrite et orale',
        'competence.languages.en.title': 'Anglais',
        'competence.languages.en.desc': "Niveau intermédiaire : parler sans expressions complexes, écrire et comprendre à l’écoute",

        // Cartes qualités humaines
        'competence.human.autonomie.title': 'Autonomie',
        'competence.human.autonomie.desc': 'Capacité à travailler efficacement sans supervision constante',
        'competence.human.team.title': "Esprit d'équipe",
        'competence.human.team.desc': 'Collaboration, communication et respect dans un cadre collectif',
        'competence.human.dynamisme.title': 'Dynamisme',
        'competence.human.dynamisme.desc': 'Énergie, motivation et proactivité dans les projets',
        'competence.human.adaptabilite.title': 'Adaptabilité',
        'competence.human.adaptabilite.desc': 'Flexibilité face aux changements et nouvelles situations',
        'competence.human.polyvalence.title': 'Polyvalence',
        'competence.human.polyvalence.desc': 'Capacité à assumer différentes tâches et responsabilités',

        // Niveaux génériques
        'level.beginner': 'Débutant',
        'level.intermediate': 'Intermédiaire',
        'level.master': 'Maîtrise',
        'level.good': 'Bon niveau',

        // Footer (toutes pages)
        'footer.networks': 'Réseaux',
        'footer.address': 'Adresse',
        'footer.email': 'Email',
        'footer.phone': 'Téléphone',
        'footer.copyright': '© 2025 Nadal NGAKI MUPATI. Tous droits reservés.',

        // Page projets – en-tête et filtres
        'projects.page.title': 'Mes Projets',
        'projects.page.subtitle': "Découvrez mes réalisations en développement, automatisme, CAO et systèmes embarqués (n'hésite pas à explorer mes projets en cliquant dessus)",
        'projects.filter.all': 'Tous les projets',
        'projects.filter.automatisme': 'Automatisme',
        'projects.filter.cao': 'CAO',
        'projects.filter.elec': 'Électronique',
        'projects.filter.prog': 'Programmation',
        'projects.count.label': 'projets trouvés',

        // Page projets – tags et cartes
        'projects.tag.automatisme': 'Automatisme',
        'projects.tag.cao': 'CAO',
        'projects.tag.elec': 'Électronique',
        'projects.tag.prog': 'Programmation',
        'projects.card.traffic': 'Système automatique des feux tricolores',
        'projects.card.cao1': 'Conception 3D avec SolidWorks',
        'projects.card.display7seg': 'Afficheur 7 segments',
        'projects.card.elevator': "Système de gestion d'un ascenseur",
        'projects.card.atm': "Simulateur d'un distributeur bancaire",
        'projects.card.game': "Programmation d'un mini jeu vidéo",
        'projects.card.tp': 'Travaux pratiques universitaires',
        'projects.card.cao2': 'Conception 3D et assemblage mécanique avec SolidWorks',

        // Modales projets
        'modal.automatisme1.title': 'Système automatique des feux tricolores',
        'modal.automatisme1.category.label': 'Catégorie :',
        'modal.automatisme1.category.value': 'Automatisme',
        'modal.automatisme1.section.desc': 'Description du projet',
        'modal.automatisme1.desc': "c'est un projet qui consiste à l'elaboration d'un grafcet qui permet de gérer automatiquement les séquences des feux tricolores de plusieurs voies.",
        'modal.automatisme1.section.tools': 'Outils et Technologies utilisés',
        'modal.automatisme1.section.features': 'Fonctionnalités principales',
        'modal.automatisme1.section.skills': 'Compétences acquises',
        'modal.automatisme1.skills': "Ce projet m'a permis de developper des compétences en élaboration de GRAFCET, la gestion de la temporisation, programmation d'un automate programmable et en conception de systèmes automatisés.",

        'modal.cao1.title': 'Conception 3D avec SolidWorks',
        'modal.cao1.category.label': 'Catégorie :',
        'modal.cao1.category.value': 'CAO',
        'modal.cao1.section.desc': 'Description du projet',
        'modal.cao1.desc': "Ce projet consiste en la conception assistée par ordinateur (CAO) d'une pièce mécanique complexe utilisant le logiciel SolidWorks. Il s'agit de modéliser une pièce en 3D à partir de spécifications techniques, en tenant compte des contraintes de fabrication et d'assemblage.",
        'modal.cao1.section.tools': 'Outils et Technologies utilisés',
        'modal.cao1.section.features': 'Fonctionnalités principales',
        'modal.cao1.section.skills': 'Compétences acquises',
        'modal.cao1.skills': "Ce projet m'a permis de développer des compétences en conception mécanique, maîtrise du logiciel SolidWorks, compréhension des normes de dessin technique et analyse de faisabilité de fabrication.",
        'modal.cao1.section.media': "Photos d'illustration de la conception",

        'modal.elec1.title': 'Afficheur 7 segments',
        'modal.elec1.category.label': 'Catégorie :',
        'modal.elec1.category.value': 'Électronique',
        'modal.elec1.section.desc': 'Description du projet',
        'modal.elec1.desc': "Réalisation d'un circuit électronique pour contrôler un afficheur 7 segments, permettant d'afficher des chiffres de 0 à 9. Le projet inclut la conception du schéma électrique, le routage du circuit imprimé et la programmation du microcontrôleur.",
        'modal.elec1.section.tools': 'Outils et Technologies utilisés',
        'modal.elec1.section.features': 'Fonctionnalités principales',
        'modal.elec1.section.skills': 'Compétences acquises',
        'modal.elec1.skills': "Ce projet m'a permis d'acquérir des compétences en électronique numérique, les connaissances sur l'utilisation du boitier Digital discovery et sur l'application waveform generator.",
        'modal.elec1.section.media': "Photos d'illustration de la conception",

        'modal.automatisme2.title': "Système de gestion d'un ascenseur",
        'modal.automatisme2.category.label': 'Catégorie :',
        'modal.automatisme2.category.value': 'Automatisme',
        'modal.automatisme2.section.desc': 'Description du projet',
        'modal.automatisme2.desc': "Conception et réalisation d'un système automatisé simulant le fonctionnement d'un ascenseur. Le projet utilise un automate programmable pour gérer les déplacements entre étages, les appels internes et externes, ainsi que les sécurités.",
        'modal.automatisme2.section.tools': 'Outils et Technologies utilisés',
        'modal.automatisme2.section.features': 'Fonctionnalités principales',
        'modal.automatisme2.section.skills': 'Compétences acquises',
        'modal.automatisme2.skills': "Ce projet m'a permis de développer des compétences en automatisme industriel, programmation d'automates, conception de systèmes de contrôle et gestion de la sécurité dans les systèmes automatisés.",
        'modal.automatisme2.section.media': "Vidéo d'illustration du projet",

        'modal.prog1.title': "Simulateur d'un distributeur bancaire",
        'modal.prog1.category.label': 'Catégorie :',
        'modal.prog1.category.value': 'Programmation',
        'modal.prog1.section.desc': 'Description du projet',
        'modal.prog1.desc': "Développement d'une application simulant le fonctionnement d'un distributeur automatique de billets (DAB). Le programme gère l'authentification, les consultations de solde, les retraits et les dépôts, avec une interface utilisateur graphique.",
        'modal.prog1.section.tools': 'Outils et Technologies utilisés',
        'modal.prog1.section.features': 'Fonctionnalités principales',
        'modal.prog1.section.skills': 'Compétences acquises',
        'modal.prog1.skills': "Ce projet m'a permis d'acquérir des compétences en programmation orientée objet, développement d'interfaces graphiques, gestion de bases de données et conception d'applications sécurisées.",
        'modal.prog1.section.media': "Photo et vidéo d'illustration du projet",
        'modal.prog1.section.github': 'voir le projet sur mon GitHub',

        'modal.prog2.title': "Programmation d'un mini jeu vidéo",
        'modal.prog2.category.label': 'Catégorie :',
        'modal.prog2.category.value': 'Programmation',
        'modal.prog2.section.desc': 'Description du projet',
        'modal.prog2.desc': "Création d'un jeu vidéo simple en Python utilisant la bibliothèque Pygame. Le jeu inclut des graphismes, des contrôles utilisateur, un système de score et des niveaux de difficulté progressifs.",
        'modal.prog2.section.tools': 'Outils et Technologies utilisés',
        'modal.prog2.section.features': 'Fonctionnalités principales',
        'modal.prog2.section.skills': 'Compétences acquises',
        'modal.prog2.skills': "Ce projet m'a permis de développer des compétences en programmation de jeux, gestion d'événements en temps réel, optimisation des performances et conception d'expériences utilisateur ludiques.",
        'modal.prog2.section.media': "Photo et video d'illustration du projet",
        'modal.prog2.section.github': 'voir le projet sur mon GitHub',

        'modal.prog3.title': 'Travaux pratiques universitaires',
        'modal.prog3.category.label': 'Catégorie :',
        'modal.prog3.category.value': 'Programmation',
        'modal.prog3.section.desc': 'Description du projet',
        'modal.prog3.desc': 'Ensemble de travaux pratiques en langage C couvrant les concepts fondamentaux de la programmation : structures de données, algorithmes, gestion de la mémoire et optimisation du code.',
        'modal.prog3.section.tools': 'Outils et Technologies utilisés',
        'modal.prog3.section.features': 'Fonctionnalités principales',
        'modal.prog3.section.skills': 'Compétences acquises',
        'modal.prog3.skills': "Ce projet m'a permis d'approfondir mes connaissances en programmation système, optimisation du code, débogage avancé et compréhension des mécanismes internes des ordinateurs.",
        'modal.prog3.section.github': 'voir le projet sur mon GitHub',

        'modal.cao2.title': 'Conception 3D et assemblage mécanique avec SolidWorks',
        'modal.cao2.category.label': 'Catégorie :',
        'modal.cao2.category.value': 'CAO',
        'modal.cao2.section.desc': 'Description du projet',
        'modal.cao2.desc': "Projet complet de conception mécanique incluant la modélisation 3D de plusieurs pièces, leur assemblage virtuel et l'analyse de contraintes. Le projet simule la conception d'un mécanisme complexe avec vérification de l'assemblage et des interférences.",
        'modal.cao2.section.tools': 'Outils et Technologies utilisés',
        'modal.cao2.section.features': 'Fonctionnalités principales',
        'modal.cao2.section.skills': 'Compétences acquises',
        'modal.cao2.skills': "Ce projet m'a permis de maîtriser les techniques avancées de CAO, l'analyse par éléments finis, la conception pour l'assemblage et la validation virtuelle de conceptions mécaniques.",
        'modal.cao2.section.media': "Vidéo d'illustration du projet",

        // Message vidéo générique
        'modal.video.unsupported': 'Votre navigateur ne supporte pas la lecture de vidéos.',

        // Modales compétences
        'modal.level.label': 'Niveau :',

        'modal.python.title': 'Python',
        'modal.python.level': 'Débutant',
        'modal.python.section.exp': 'Mon Expérience et Maîtrise',
        'modal.python.exp': "Maîtrise des notions fondamentales de Python : variables, types de données (entiers, flottants, chaînes, booléens), structures de données (listes, tuples, dictionnaires, ensembles), opérations sur les chaînes, boucles et conditions, gestion des exceptions et fichiers CSV. Expérience pratique dans le traitement d’images et le développement d’applications interactives avec Tkinter.",
        'modal.python.section.tools': 'Outils et Librairies',
        'modal.python.section.projects': 'Projets réalisés',
        'modal.python.section.cert': 'Certification',
        'modal.python.cert.link': 'Python : des fondamentaux aux concepts avancés du langage',

        'modal.c.title': 'C',
        'modal.c.level': 'Débutant',
        'modal.c.section.exp': 'Mon Expérience et Maîtrise',
        'modal.c.exp': "Maîtrise des notions fondamentales du langage C : variables, types de données (int, float, char, bool), tableaux, pointeurs, structures, conditions et boucles (if, switch, for, while), fonctions et gestion des fichiers. Bonne connaissance des structures de données (listes chaînées, piles, files, arbres) et de la gestion dynamique de la mémoire (allocation et libération avec malloc, calloc, free). Expérience pratique dans le développement de programmes modulaires.",
        'modal.c.section.tools': 'Outils et Librairies',
        'modal.c.section.projects': 'Projets réalisés',

        'modal.html.title': 'HTML',
        'modal.html.level': 'Intermédiaire',
        'modal.html.section.exp': 'Mon Expérience et Maîtrise',
        'modal.html.exp': "Maîtrise des balises HTML pour structurer les pages web, utilisation des éléments sémantiques pour améliorer l'accessibilité et le référencement, gestion des formulaires, liens et médias intégrés. Expérience dans la création de sites web responsives et accessibles.",
        'modal.html.section.tools': 'Outils',
        'modal.html.section.projects': 'Projets réalisés',

        'modal.css.title': 'CSS',
        'modal.css.level': 'intermédiaire',
        'modal.css.section.exp': 'Mon Expérience et Maîtrise',
        'modal.css.exp': "Maîtrise des styles CSS pour la mise en page, utilisation de Flexbox et Grid pour des layouts responsives, animations et transitions, gestion des media queries pour l'adaptation mobile. Expérience dans la création d'interfaces utilisateur modernes et accessibles.",
        'modal.css.section.tools': 'Outils',
        'modal.css.section.projects': 'Projets réalisés',

        'modal.js.title': 'JavaScript',
        'modal.js.level': 'Débutant',
        'modal.js.section.exp': 'Mon Expérience et Maîtrise',
        'modal.js.exp': "Bonne maîtrise des bases de JavaScript : variables, fonctions, objets, événements DOM, manipulation des éléments HTML. Utilisation pour ajouter de l'interactivité aux pages web.",
        'modal.js.section.tools': 'Outils et Librairies',
        'modal.js.section.projects': 'Projets réalisés',

        'modal.php.title': 'PHP',
        'modal.php.level': 'Débutant',
        'modal.php.section.exp': 'Mon Expérience et Maîtrise',
        'modal.php.exp': "Notions de base en PHP : syntaxe, variables, boucles, conditions, gestion des formulaires et interaction avec bases de données MySQL. Utilisation pour le développement back-end simple et traitement de données côté serveur.",
        'modal.php.section.tools': 'Outils et Librairies',
        'modal.php.section.projects': 'Projets réalisés',

        'modal.arduino.title': 'Arduino',
        'modal.arduino.level': 'Intermédiaire',
        'modal.arduino.section.exp': 'Mon Expérience et Maîtrise',
        'modal.arduino.exp': "Maîtrise de la programmation embarquée avec Arduino : contrôle de capteurs, moteurs, LEDs, écrans LCD. Expérience dans le prototypage de systèmes électroniques simples, gestion des entrées/sorties analogiques et numériques, et intégration avec d'autres composants.",
        'modal.arduino.section.tools': 'Outils et Librairies',
        'modal.arduino.section.projects': 'Projets réalisés',

        'modal.montage.title': 'Montage & câblage',
        'modal.montage.level': 'Intermédiaire',
        'modal.montage.section.exp': 'Mon Expérience et Maîtrise',
        'modal.montage.exp': "Maîtrise des techniques d'usinage, câblage de circuits électroniques, utilisation de breadboards et PCBs simples. Expérience dans l'assemblage de composants électroniques et la réalisation de prototypes fonctionnels.",
        'modal.montage.section.tools': 'Outils et Procédés de Fabrication',
        'modal.montage.section.projects': 'Projets réalisés',

        'modal.cao.title': 'CAO - SolidWorks',
        'modal.cao.level': 'Débutant',
        'modal.cao.section.exp': 'Mon Expérience et Maîtrise',
        'modal.cao.exp': "Bonne maîtrise de SolidWorks pour la conception mécanique 3D : modélisation de pièces, assemblages, génération de plans techniques. Utilisation pour la simulation et l'analyse de structures.",
        'modal.cao.section.tools': 'Outils et Librairies',
        'modal.cao.section.projects': 'Projets réalisés'
    },

    en: {
        // Navigation
        'nav.presentation': 'Home',
        'nav.competences': 'Skills',
        'nav.parcours': 'Education',
        'nav.projets': 'Projects',
        'nav.contact': 'Contact',

        // Index – intro
        'desc.intro': "Second-year Engineering Science student at Université d'Évry Paris-Saclay",
        'hero.future': 'Future embedded systems engineer',
        'hero.im': 'I am',
        'hero.typed': 'Curious., Passionate., Autonomous., Ambitious., Engineering student.',
        'objectif.intro': 'I am looking for a worker internship of 6 to 8 weeks between April and May 2026',

        // CV button
        'cv.view-text': 'View my resume',

        // About
        'about.title': 'About me',
        'about.desc': 'I am passionate about electronics, automation and embedded programming. I have developed strong skills in programming (Python, C/C++, HTML, CSS, JavaScript, PHP) as well as in using tools such as GitHub, Arduino and SolidWorks. My goal is to continue my studies to become an embedded systems engineer and work in the field of connected objects (IoT). I want to gradually strengthen my skills in electronics, automation and embedded programming through projects, internships and advanced training. Motivated, reliable and curious, I am fully committed to learning and to carrying out concrete projects in order to build solid skills that match the needs of industry.',

        // Key skills (index)
        'skills.title': 'Key skills',
        'competence.dev.title': 'Development',
        'competence.dev.desc': 'Python, C, HTML, CSS, JavaScript and PHP',
        'competence.tools.title': 'Tools & Technologies',
        'competence.tools.desc': 'GitHub, Arduino, SolidWorks, VSCode, CodeBlocks and Schneider Electric',
        'competence.soft.title': 'Soft skills',
        'competence.soft.desc': 'Teamwork, autonomy, problem solving',

        // Project overview (index)
        'projects.title': 'Project highlights',
        'projects.item1.title': 'Video game: Eco-Warrior',
        'projects.item1.desc': 'A playful simulation in Python with a Tkinter interface and a maritime map.',
        'projects.item2.title': 'Elevator control system',
        'projects.item2.desc': 'Implementation of a GRAFCET diagram in a Schneider Electric environment to control an elevator.',
        'projects.link': 'See all projects',

        // Education (index)
        'timeline.education': 'Education',
        'timeline.item1': 'Scientific Baccalaureate – Math-Physics specialization with honours – Lycée Sadisana',
        'timeline.item2': "Bachelor’s in Engineering Science – Université d’Évry Paris-Saclay. Main courses: Mathematics, Physics, Computer Science (C, Python, HTML, JavaScript, CSS, PHP), Electronics, Mechanics, Automation, digital circuits, electrical components, etc.",
        'timeline.item3': 'Worker internship of 6 to 8 weeks',
        'timeline.item3.date': 'April 2026 (planned):',

        // Certifications (index)
        'certifications.title': 'Certifications',
        'certifications.item1': 'Python: From fundamentals to advanced language concepts (2025).',
        'certifications.item2': 'PIX: Digital skills (2025). verification code: P-H3FGR72F',
        'certifications.link': 'click here',

        // Interests (titles and descriptions)
        'interests.title': 'Interests',
        'interests.item1': 'Taekwondo',
        'interests.item2': 'Football',
        'interests.item3': 'Reading',
        'interests.item4': 'Programming',
        'interests.item1.desc': 'Combat sport and discipline',
        'interests.item2.desc': 'Team spirit and passion',
        'interests.item3.desc': 'Culture and continuous learning',
        'interests.item4.desc': 'Personal programming projects and creativity',

        // Why me
        'why.title': 'Why me?',
        'why.li1': 'Analytical mindset and technical curiosity',
        'why.li2': 'Ability to learn quickly',
        'why.li3': 'Strong interest in concrete and innovative projects',
        'why.li4': 'I like turning an idea into a prototype',
        'why.li5': 'I always give my best to my work',
        'why.li6': 'Passionate about engineering sciences',
        'why.li7': 'I love understanding how systems work and solving technical problems',

        // Contact
        'contact.title': 'Contact form',
        'contact.subtitle': 'Feel free to contact me using this form.',
        'contact.nom': 'Last name *',
        'contact.prenom': 'First name *',
        'contact.entreprise': 'Company (optional)',
        'contact.objet': 'Reason for contacting *',
        'contact.objet.placeholder': '-- Select a subject --',
        'contact.recruteur': 'Are you a recruiter? *',
        'contact.recruteur.placeholder': '-- Select an option --',
        'contact.qui': 'Who are you?',
        'contact.email': 'Email *',
        'contact.pays': 'Country *',
        'contact.pays.placeholder': '-- Select a country --',
        'contact.region': 'Region (if France)',
        'contact.region.placeholder': '-- Select a region --',
        'contact.departement': 'Department (if France)',
        'contact.departement.placeholder': '-- Select a department --',
        'contact.message': 'Message *',
        'contact.submit': 'Send',

        // Skills page – titles
        'competence.title': 'My skills',
        'competence.intro': "Throughout my studies, I have developed a range of skills that reflect both my versatility and my ability to adapt. My technical skills (programming, design, electronics, web), my language skills (French, Lingala, English) and my personal qualities (autonomy, team spirit, dynamism) allow me to successfully carry out varied projects and to collaborate effectively in different contexts. This combination of knowledge and experience is a real added value that I bring to every mission.",
        'competence.tech.title': 'My technical skills',
        'competence.transversal.title': 'My transversal skills',
        'competence.languages.title': 'My language skills',
        'competence.human.title': 'My personal qualities',

        // Skill cards – technical
        'competence.tech.python.title': 'Python',
        'competence.tech.python.desc': 'Tkinter, file handling, loops, small applications. Click to learn more.',
        'competence.tech.c.title': 'C',
        'competence.tech.c.desc': 'Low-level programming, memory management, algorithms. Click to learn more.',
        'competence.tech.html.title': 'HTML',
        'competence.tech.html.desc': 'Web page structure, semantics, accessibility. Click to learn more.',
        'competence.tech.css.title': 'CSS',
        'competence.tech.css.desc': 'Web styling, responsive layouts, animations. Click to learn more.',
        'competence.tech.js.title': 'JavaScript',
        'competence.tech.js.desc': 'Front-end, DOM interactions, web tools. Click to learn more.',
        'competence.tech.php.title': 'PHP',
        'competence.tech.php.desc': 'Basics – simple back end, forms, server interaction. Click to learn more.',
        'competence.tech.arduino.title': 'Arduino',
        'competence.tech.arduino.desc': 'Embedded programming, sensors, motors, prototyping. Click to learn more.',
        'competence.tech.montage.title': 'Assembly & wiring',
        'competence.tech.montage.desc': 'Soldering, schematics, breadboards and simple PCBs. Click to learn more.',
        'competence.tech.cao.title': 'CAD — SolidWorks',
        'competence.tech.cao.desc': 'Mechanical design, assemblies, technical drawings. Click to learn more.',

        // Skill cards – transversal
        'competence.transversal.word.title': 'Word',
        'competence.transversal.word.desc': 'Layout, document writing, templates, style management.',
        'competence.transversal.excel.title': 'Excel',
        'competence.transversal.excel.desc': 'Tables, formulas, charts, pivot tables.',
        'competence.transversal.powerpoint.title': 'PowerPoint',
        'competence.transversal.powerpoint.desc': 'Presentation design, animations, visual communication.',
        'competence.transversal.latex.title': 'LaTeX',
        'competence.transversal.latex.desc': 'Scientific writing, reference management, advanced layout.',

        // Skill cards – languages
        'competence.languages.fr.title': 'French',
        'competence.languages.fr.desc': 'Native language, fluent in everyday and professional communication.',
        'competence.languages.lingala.title': 'Lingala',
        'competence.languages.lingala.desc': 'Native language, excellent written and spoken communication.',
        'competence.languages.en.title': 'English',
        'competence.languages.en.desc': 'Intermediate level: can speak with simple phrases, write and understand spoken English.',

        // Skill cards – human qualities
        'competence.human.autonomie.title': 'Autonomy',
        'competence.human.autonomie.desc': 'Ability to work efficiently without constant supervision.',
        'competence.human.team.title': 'Team spirit',
        'competence.human.team.desc': 'Collaboration, communication and respect in a team.',
        'competence.human.dynamisme.title': 'Dynamism',
        'competence.human.dynamisme.desc': 'Energy, motivation and proactive attitude in projects.',
        'competence.human.adaptabilite.title': 'Adaptability',
        'competence.human.adaptabilite.desc': 'Flexibility when facing change and new situations.',
        'competence.human.polyvalence.title': 'Versatility',
        'competence.human.polyvalence.desc': 'Ability to handle different tasks and responsibilities.',

        // Generic levels
        'level.beginner': 'Beginner',
        'level.intermediate': 'Intermediate',
        'level.master': 'Mastery',
        'level.good': 'Good level',

        // Footer
        'footer.networks': 'Networks',
        'footer.address': 'Address',
        'footer.email': 'Email',
        'footer.phone': 'Phone',
        'footer.copyright': '© 2025 Nadal NGAKI MUPATI. All rights reserved.',

        // Projects page – header and filters
        'projects.page.title': 'My projects',
        'projects.page.subtitle': 'Discover my work in development, automation, CAD and embedded systems (feel free to explore my projects by clicking on them).',
        'projects.filter.all': 'All projects',
        'projects.filter.automatisme': 'Automation',
        'projects.filter.cao': 'CAD',
        'projects.filter.elec': 'Electronics',
        'projects.filter.prog': 'Programming',
        'projects.count.label': 'projects found',

        // Projects page – tags and cards
        'projects.tag.automatisme': 'Automation',
        'projects.tag.cao': 'CAD',
        'projects.tag.elec': 'Electronics',
        'projects.tag.prog': 'Programming',
        'projects.card.traffic': 'Traffic light control system',
        'projects.card.cao1': '3D design with SolidWorks',
        'projects.card.display7seg': '7-segment display',
        'projects.card.elevator': 'Elevator control system',
        'projects.card.atm': 'ATM simulator',
        'projects.card.game': 'Mini video game',
        'projects.card.tp': 'University practical work in C',
        'projects.card.cao2': '3D design and mechanical assembly with SolidWorks',

        // Project modals (EN)
        'modal.automatisme1.title': 'Traffic light control system',
        'modal.automatisme1.category.label': 'Category:',
        'modal.automatisme1.category.value': 'Automation',
        'modal.automatisme1.section.desc': 'Project description',
        'modal.automatisme1.desc': 'Design of a GRAFCET diagram to automatically manage the traffic light sequences for several lanes.',
        'modal.automatisme1.section.tools': 'Tools and technologies used',
        'modal.automatisme1.section.features': 'Main features',
        'modal.automatisme1.section.skills': 'Skills gained',
        'modal.automatisme1.skills': 'This project helped me develop skills in GRAFCET design, timing management, PLC programming and the design of automated systems.',

        'modal.cao1.title': '3D design with SolidWorks',
        'modal.cao1.category.label': 'Category:',
        'modal.cao1.category.value': 'CAD',
        'modal.cao1.section.desc': 'Project description',
        'modal.cao1.desc': 'Computer-aided design (CAD) of a complex mechanical part using SolidWorks, from technical specifications while taking manufacturing and assembly constraints into account.',
        'modal.cao1.section.tools': 'Tools and technologies used',
        'modal.cao1.section.features': 'Main features',
        'modal.cao1.section.skills': 'Skills gained',
        'modal.cao1.skills': 'This project strengthened my skills in mechanical design, SolidWorks, technical drawing standards and manufacturability analysis.',
        'modal.cao1.section.media': 'Design illustration photos',

        'modal.elec1.title': '7-segment display',
        'modal.elec1.category.label': 'Category:',
        'modal.elec1.category.value': 'Electronics',
        'modal.elec1.section.desc': 'Project description',
        'modal.elec1.desc': 'Design of an electronic circuit to drive a 7-segment display, showing digits from 0 to 9, including schematic design, PCB routing and microcontroller programming.',
        'modal.elec1.section.tools': 'Tools and technologies used',
        'modal.elec1.section.features': 'Main features',
        'modal.elec1.section.skills': 'Skills gained',
        'modal.elec1.skills': 'This project strengthened my skills in digital electronics and in using the Digital Discovery board and waveform generator application.',
        'modal.elec1.section.media': 'Design illustration photos',

        'modal.automatisme2.title': 'Elevator control system',
        'modal.automatisme2.category.label': 'Category:',
        'modal.automatisme2.category.value': 'Automation',
        'modal.automatisme2.section.desc': 'Project description',
        'modal.automatisme2.desc': 'Design and implementation of an automated system simulating the operation of an elevator, using a PLC to manage floor movements, internal and external calls and safety features.',
        'modal.automatisme2.section.tools': 'Tools and technologies used',
        'modal.automatisme2.section.features': 'Main features',
        'modal.automatisme2.section.skills': 'Skills gained',
        'modal.automatisme2.skills': 'This project helped me develop skills in industrial automation, PLC programming, control system design and safety management for automated systems.',
        'modal.automatisme2.section.media': 'Project illustration video',

        'modal.prog1.title': 'ATM simulator',
        'modal.prog1.category.label': 'Category:',
        'modal.prog1.category.value': 'Programming',
        'modal.prog1.section.desc': 'Project description',
        'modal.prog1.desc': 'Development of an application simulating an ATM. The program handles authentication, balance checks, withdrawals and deposits with a graphical user interface.',
        'modal.prog1.section.tools': 'Tools and technologies used',
        'modal.prog1.section.features': 'Main features',
        'modal.prog1.section.skills': 'Skills gained',
        'modal.prog1.skills': 'This project strengthened my skills in object-oriented programming, GUI development, database handling and secure application design.',
        'modal.prog1.section.media': 'Project illustration photo and video',
        'modal.prog1.section.github': 'View the project on my GitHub',

        'modal.prog2.title': 'Mini video game',
        'modal.prog2.category.label': 'Category:',
        'modal.prog2.category.value': 'Programming',
        'modal.prog2.section.desc': 'Project description',
        'modal.prog2.desc': 'Creation of a simple video game in Python. The game includes graphics, user controls, a scoring system and increasing difficulty levels.',
        'modal.prog2.section.tools': 'Tools and technologies used',
        'modal.prog2.section.features': 'Main features',
        'modal.prog2.section.skills': 'Skills gained',
        'modal.prog2.skills': 'This project strengthened my skills in game programming, real-time event handling, performance optimization and playful user experience design.',
        'modal.prog2.section.media': 'Project illustration photo and video',
        'modal.prog2.section.github': 'View the project on my GitHub',

        'modal.prog3.title': 'University practical work',
        'modal.prog3.category.label': 'Category:',
        'modal.prog3.category.value': 'Programming',
        'modal.prog3.section.desc': 'Project description',
        'modal.prog3.desc': 'Set of C language lab work covering fundamental programming concepts: data structures, algorithms, memory management and code optimization.',
        'modal.prog3.section.tools': 'Tools and technologies used',
        'modal.prog3.section.features': 'Main features',
        'modal.prog3.section.skills': 'Skills gained',
        'modal.prog3.skills': 'This work deepened my knowledge of system programming, code optimization, advanced debugging and understanding of how computers work internally.',
        'modal.prog3.section.github': 'View the project on my GitHub',

        'modal.cao2.title': '3D design and mechanical assembly with SolidWorks',
        'modal.cao2.category.label': 'Category:',
        'modal.cao2.category.value': 'CAD',
        'modal.cao2.section.desc': 'Project description',
        'modal.cao2.desc': 'Complete mechanical design project including 3D modelling of several parts, virtual assembly and stress analysis. The project simulates the design of a complex mechanism with interference and assembly checks.',
        'modal.cao2.section.tools': 'Tools and technologies used',
        'modal.cao2.section.features': 'Main features',
        'modal.cao2.section.skills': 'Skills gained',
        'modal.cao2.skills': 'This project strengthened my skills in advanced CAD techniques, finite element analysis, design for assembly and virtual validation of mechanical designs.',
        'modal.cao2.section.media': 'Project illustration video',

        // Generic video message (EN)
        'modal.video.unsupported': 'Your browser does not support video playback.',

        // Skill modals (EN)
        'modal.level.label': 'Level:',

        'modal.python.title': 'Python',
        'modal.python.level': 'Beginner',
        'modal.python.section.exp': 'My experience and skills',
        'modal.python.exp': 'Mastery of fundamental Python concepts: variables, data types (integers, floats, strings, booleans), data structures (lists, tuples, dictionaries, sets), string operations, loops and conditions, exception handling and CSV files. Practical experience in image processing and building interactive applications with Tkinter.',
        'modal.python.section.tools': 'Tools and libraries',
        'modal.python.section.projects': 'Projects',
        'modal.python.section.cert': 'Certification',
        'modal.python.cert.link': 'Python: from fundamentals to advanced concepts',

        'modal.c.title': 'C',
        'modal.c.level': 'Beginner',
        'modal.c.section.exp': 'My experience and skills',
        'modal.c.exp': 'Mastery of the fundamental concepts of the C language: variables, data types (int, float, char, bool), arrays, pointers, structs, conditions and loops (if, switch, for, while), functions and file handling. Good knowledge of data structures (linked lists, stacks, queues, trees) and dynamic memory management (allocation and freeing with malloc, calloc, free). Practical experience in modular program development.',
        'modal.c.section.tools': 'Tools and libraries',
        'modal.c.section.projects': 'Projects',

        'modal.html.title': 'HTML',
        'modal.html.level': 'Intermediate',
        'modal.html.section.exp': 'My experience and skills',
        'modal.html.exp': 'Mastery of HTML tags to structure web pages, use of semantic elements to improve accessibility and SEO, handling of forms, links and embedded media. Experience creating responsive and accessible websites.',
        'modal.html.section.tools': 'Tools',
        'modal.html.section.projects': 'Projects',

        'modal.css.title': 'CSS',
        'modal.css.level': 'Intermediate',
        'modal.css.section.exp': 'My experience and skills',
        'modal.css.exp': 'Mastery of CSS for layout, use of Flexbox and Grid for responsive layouts, animations and transitions, media queries for mobile adaptation. Experience creating modern and accessible user interfaces.',
        'modal.css.section.tools': 'Tools',
        'modal.css.section.projects': 'Projects',

        'modal.js.title': 'JavaScript',
        'modal.js.level': 'Beginner',
        'modal.js.section.exp': 'My experience and skills',
        'modal.js.exp': 'Good command of JavaScript basics: variables, functions, objects, DOM events, manipulation of HTML elements. Used to add interactivity to web pages.',
        'modal.js.section.tools': 'Tools and libraries',
        'modal.js.section.projects': 'Projects',

        'modal.php.title': 'PHP',
        'modal.php.level': 'Beginner',
        'modal.php.section.exp': 'My experience and skills',
        'modal.php.exp': 'Basic knowledge of PHP: syntax, variables, loops, conditions, form handling and interaction with MySQL databases. Used for simple back-end development and server-side data processing.',
        'modal.php.section.tools': 'Tools and libraries',
        'modal.php.section.projects': 'Projects',

        'modal.arduino.title': 'Arduino',
        'modal.arduino.level': 'Intermediate',
        'modal.arduino.section.exp': 'My experience and skills',
        'modal.arduino.exp': 'Embedded programming with Arduino: control of sensors, motors, LEDs and LCD screens. Experience prototyping simple electronic systems, handling analog and digital I/O and integrating various components.',
        'modal.arduino.section.tools': 'Tools and libraries',
        'modal.arduino.section.projects': 'Projects',

        'modal.montage.title': 'Assembly & wiring',
        'modal.montage.level': 'Intermediate',
        'modal.montage.section.exp': 'My experience and skills',
        'modal.montage.exp': 'Mastery of machining techniques, wiring electronic circuits, using breadboards and simple PCBs. Experience assembling electronic components and building functional prototypes.',
        'modal.montage.section.tools': 'Tools and manufacturing processes',
        'modal.montage.section.projects': 'Projects',

        'modal.cao.title': 'CAD - SolidWorks',
        'modal.cao.level': 'Beginner',
        'modal.cao.section.exp': 'My experience and skills',
        'modal.cao.exp': 'Good command of SolidWorks for 3D mechanical design: part modelling, assemblies and technical drawings. Used for simulation and structural analysis.',
        'modal.cao.section.tools': 'Tools and libraries',
        'modal.cao.section.projects': 'Projects'
    }
};

// Instance globale pour Typed.js afin de pouvoir la recréer lors d'un changement de langue
let typedInstance = null;

// Initialise ou réinitialise l'animation Typed.js selon la langue
function initTyped(lang) {
    const typedElement = document.querySelector('.typed');
    if (!typedElement || typeof Typed === 'undefined') return;

    // Détruit l'instance précédente si elle existe
    if (typedInstance && typeof typedInstance.destroy === 'function') {
        typedInstance.destroy();
    }

    // Récupère la liste des textes à partir des traductions
    let raw = TRANSLATIONS[lang] && TRANSLATIONS[lang]['hero.typed'];
    if (!raw) raw = TRANSLATIONS['fr']['hero.typed'] || '';

    // Fallback éventuel sur l'attribut data-typed-items si rien n'est défini
    if (!raw) {
        raw = typedElement.getAttribute('data-typed-items') || '';
    }

    let strings = raw.split(',').map(s => s.trim()).filter(Boolean);
    if (!strings.length) return;

    typedInstance = new Typed('.typed', {
        strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000
    });
}

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

    // Réinitialise l'animation Typed.js avec la bonne langue (si présente sur la page)
    initTyped(lang);

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
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

/* ========== FILTRAGE DES PROJETS ========== */
// Fonction de filtrage des projets pour la page projets.html
document.addEventListener('DOMContentLoaded', function() {
    // Récupère tous les boutons de filtre et les projets dans le DOM
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectItems = document.querySelectorAll('.project-item');
    const countElement = document.getElementById('count');

    /**
     * Filtre les projets par catégorie
     * @param {string} category - Catégorie à afficher ("all" montre tous les projets)
     */
    function filterProjects(category) {
        let visibleCount = 0;
        // Affiche/masque les projets selon la catégorie
        projectItems.forEach(item => {
            if (category === 'all' || item.getAttribute('data-category') === category) {
                item.style.display = 'block';
                visibleCount++;
            } else {
                item.style.display = 'none';
            }
        });
        // Met à jour l'affichage du nombre de projets
        if (countElement) {
            countElement.textContent = visibleCount;
        }
    }

    // Ajoute les écouteurs de clic à tous les boutons de filtre
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retire la classe 'active' de tous les boutons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Ajoute la classe 'active' au bouton cliqué
            this.classList.add('active');
            // Applique le filtrage
            const category = this.getAttribute('data-category');
            filterProjects(category);
        });
    });

    // Initialise le compteur de projets au chargement
    if (countElement) {
        countElement.textContent = projectItems.length;
    }
});









    
























