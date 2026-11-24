# À bicyclette

Carte vélo et navigation GPS en une seule page web (Leaflet + MapLibre), utilisable sur téléphone et installable comme une appli.

## Fonctions

- **Plusieurs trajets** : jusqu'à 3 variantes BRouter (repli OSRM), étiquetées « le plus court », « le plus plat », « le plus rapide ». On choisit sur la liste ou en touchant le tracé gris.
- **Étapes** : un lieu à visiter peut être ajouté au trajet ; il est inséré là où il rallonge le moins.
- **Navigation 3D** : bouton « 3D » (carte, et bandeau de guidage). Relief, bâtiments, caméra inclinée qui suit le cap.
- **Guidage GPS** : annonces vocales en français, recalcul automatique si on quitte le tracé, écran maintenu allumé.
- **Mode soleil / économie batterie** (bouton ☀) : contraste maximal, tracé magenta cerclé de noir, gros caractères, aucun flou ni animation, GPS et écran rafraîchis moins souvent.
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
