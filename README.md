# À bicyclette

Carte vélo et navigation GPS en une seule page web (Leaflet + MapLibre), utilisable sur téléphone et installable comme une appli.

## Interface

Une barre « Où va-t-on ? » (lieu, ville, ou « boulangerie », « restaurant »…), deux boutons (ma position, **Affichage**), et en bas des puces **Pistes · À voir · Manger · Eau**, la carte du trajet avec ses variantes et un gros bouton **Partir**. Le reste est rangé dans trois onglets : **Trajet**, **Lieux**, **Plus**.

Pendant le guidage : la manœuvre en grand en haut, l'arrivée, la distance restante et la vitesse en bas, et deux boutons (2D/3D, voix).

**Carte vectorielle** (MapLibre, données OpenFreeMap) par défaut, en 2D comme en 3D, avec un style maison où les **pistes cyclables** ressortent (liseré + couleur franche) et les **véloroutes / EuroVelo** en surimpression (Waymarked Trails). Les **tuiles images** restent au choix (Vélo CyclOSM, Standard, Relief) ; hors ligne, la carte bascule sur les tuiles téléchargées.

**Cinq styles** (bouton Affichage) : Clair, Soleil, Noir & blanc, Noir (fond noir, tout en blanc), Nuit — et un **bouton Contraste ◐** à trois niveaux (Normal, Fort, Maximum). Les lieux s'affichent en **icônes pures** à liseré.

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
- **Eau sur le trajet** : « 💧 Eau dans 3,2 km » pendant le guidage, et alerte vocale au dernier point d'eau avant plus de 15 km sans.
- **Lieux à voir annoncés** à la voix quand on passe à côté.
- **Vent et pluie** sur le trajet (Open-Meteo) : part du trajet vent de face / dans le dos, conseil d'inverser une boucle si le vent est de face au retour.
- **Rentrer en train** : les gares les plus proches, avec lien vers SNCF Connect pour les horaires.
- **Mes sorties** : enregistrement GPS (automatique pendant le guidage), export GPX, synchronisées avec mes lieux.
- **Balade visite** par durée (1 h, 2 h, 3 h), avec pause boulangerie ou café à mi-parcours.
- **Hors ligne** : téléchargement d'une zone (tuiles, eau, lieux, pistes), import / export GPX.

## Synchroniser « Mes lieux »

Les lieux sont gardés sur l'appareil et, si un jeton est fourni, copiés dans un **Gist privé** de votre compte GitHub.

1. github.com → Settings → Developer settings → Personal access tokens → **Tokens (classic)**.
2. « Generate new token », cocher uniquement **gist**.
3. Onglet **Lieux** → « Synchronisation cloud » → coller le jeton, sur chaque appareil.

Le Gist (`abicyclette-lieux.json`) est retrouvé automatiquement sur les autres appareils. En cas de modification des deux côtés, la plus récente gagne ; les suppressions se propagent.

## Données et services

OpenStreetMap (tuiles vectorielles OpenFreeMap pour les lieux et l’eau, API OSM pour les horaires, Overpass en secours, Nominatim), CyclOSM, OpenTopoMap, BRouter, OSRM, Open-Meteo (altitude), OpenFreeMap (vue 3D), relief Terrarium (AWS Open Data).
