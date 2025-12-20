/* ========================================
   SCRIPT.JS - FILTRAGE DES PROJETS
   ======================================== */

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
        countElement.textContent = visibleCount;
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
    countElement.textContent = projectItems.length;
});