## Exercice 9 : Faire vivre son interface avec jQuery, mais sans plugin

Pour cet exercice, vous chargerez Bootstrap dans sa version CSS uniquement, sans le chargement de la bibliothèque `bootstrap.js`. Vous utiliserez jQuery pour recréer ce que les composants simples de Bootstrap font, à savoir principalement, ajouter et enlever des classes sur des éléments du DOM.

- Ajouter dans le fichier `index.html` le html nécessaire en le récupérant de la documentation
- Faites dans un premier temps les comportements sans animation, puis ajoutez les animations
- Affichez plusieurs blocs : chaque bloc doit fonctionner indépendament.

### Bootstrap Collapse

Reproduire [le comportement simple de Bootstrap Collapse avec un `href`](https://getbootstrap.com/docs/4.3/components/collapse/#example).

### Bootstrap Alert

Reproduire [le comportement de fermeture de Bootstrap Alert avec un bouton Close](https://getbootstrap.com/docs/4.3/components/alerts/#dismissing).

### Bootstrap Dropdown

Reproduire [le comportement d'affichage du Bootstrap Dropdown](https://getbootstrap.com/docs/4.3/components/dropdowns/#single-button)

### Affix

Dans la page, faire que toute la section "Your cart" reste fixée en haut de la fenêtre quand le scroll dépasse cette section.

## Exercice 10 : Extraire le template du projet Laravel

Dans le projet e-commerce en Laravel, vous avez travaillé à la construction de votre interface de boutique en ligne. Cette interface nous intéresse et nous allons l'extraire du projet Laravel, pour pouvoir l'afficher hors d'un projet PHP, en statique. Pour cela, dans le dossier `/exo-10` :

- Récupérer les fichiers CSS du projet
- Récupérer, en enlevant toute la syntaxe Blade, la page HTML correspondant à la page admin qui liste vos produits
- Nettoyer votre fichier CSS pour ne garder que les déclarations utiles à cette page
- Améliorer cette page pour qu'elle soit responsive

HTML et CSS only !
