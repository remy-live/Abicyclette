# À bicyclette

Carte vélo et navigation GPS en une seule page web (Leaflet + MapLibre), utilisable sur téléphone et installable comme une appli.

## Fonctions

- **Pistes cyclables d'abord** (activé par défaut) : profil BRouter « safety » qui évite les routes passantes.
- **Plusieurs trajets** : jusqu'à 3 variantes BRouter (repli OSRM), étiquetées « le plus court », « le plus plat », « le plus rapide ». On choisit sur la liste ou en touchant le tracé gris.
- **Étapes** : touchez la carte (« Étape ici » ou « + Ajouter une étape ») ou ajoutez un lieu à visiter ; l'étape est insérée là où elle rallonge le moins.
- **Balade visite** : une boucle de 15, 30 ou 50 km depuis votre position, qui passe par des châteaux, points de vue, musées…
- **Recherche par catégorie** : tapez « boulangerie », « restaurant », « pharmacie », « camping »… dans la barre de recherche.
- **Navigation 3D** : activée d'office au démarrage du guidage (bouton 2D/3D dans le bandeau, choix mémorisé), et bouton « 3D » sur la carte. Relief, bâtiments, caméra inclinée qui suit le cap.
- **Guidage GPS** : annonces vocales en français, recalcul automatique si on quitte le tracé, écran maintenu allumé.
- **Trois affichages** (bouton ☀, appuis successifs) : normal, **soleil**, **noir & blanc contrasté**. Les deux derniers économisent aussi la batterie.
- **Mode soleil / économie batterie** : contraste maximal, tracé magenta cerclé de noir, gros caractères, aucun flou ni animation, GPS et écran rafraîchis moins souvent.
- **Points d'eau** potable, **pistes cyclables** et **points d'intérêt** :
  - à visiter : châteaux & patrimoine, points de vue, musées, curiosités, églises, nature ;
  - services : réparation vélo, parking vélo, recharge VAE, toilettes, abris, pique-nique, cafés & boulangeries, campings, gares.
- **À visiter sur le trajet** : liste des lieux à moins de 500 m du tracé, avec leur kilomètre.
- **Mes lieux** synchronisés dans le cloud (voir plus bas).
- **Hors ligne** : téléchargement d'une zone (tuiles, eau, lieux, pistes), import / export GPX.

## Synchroniser « Mes lieux »

Les lieux sont gardés sur l'appareil et, si un jeton est fourni, copiés dans un **Gist privé** de votre compte GitHub.

1. github.com → Settings → Developer settings → Personal access tokens → **Tokens (classic)**.
2. « Generate new token », cocher uniquement **gist**.
3. Onglet **Lieux** → « Synchronisation cloud » → coller le jeton, sur chaque appareil.

Le Gist (`abicyclette-lieux.json`) est retrouvé automatiquement sur les autres appareils. En cas de modification des deux côtés, la plus récente gagne ; les suppressions se propagent.

## Données et services

OpenStreetMap (Overpass, Nominatim), CyclOSM, OpenTopoMap, BRouter, OSRM, Open-Meteo (altitude), OpenFreeMap (vue 3D), relief Terrarium (AWS Open Data).
