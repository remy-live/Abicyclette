# À bicyclette sur iPhone (sans compte développeur payant)

C'est la même appli que la version web, emballée avec Capacitor. La carte, Tailwind, Leaflet et MapLibre sont **dans l'appli** : elle s'ouvre même sans réseau.

## La première fois (≈ 15 min)

Sur le Mac, dans le Terminal :

```bash
cd ~/chemin/vers/Abicyclette        # le dossier du dépôt (git pull pour l'avoir à jour)
cd iphone
npm install
npm run maj                         # prépare l'appli web pour l'iPhone
npm run ouvrir                      # ouvre le projet dans Xcode
```

Dans Xcode :

1. **Xcode › Réglages › Comptes** : « + » › Apple ID, connecte-toi avec ton identifiant Apple habituel.
2. Dans la colonne de gauche, clique sur **App** (icône bleue), puis l'onglet **Signing & Capabilities**.
3. **Team** : choisis « Rémy DEVODDERE (Personal Team) ». Laisse « Automatically manage signing » coché.
   Si Xcode dit que l'identifiant `fr.devoddere.abicyclette` est pris, change-le (par ex. `fr.devoddere.abicyclette2`).
4. Branche l'iPhone en USB, déverrouille-le, accepte « Faire confiance à cet ordinateur ».
5. En haut de Xcode, choisis ton iPhone comme destination, puis **▶ (⌘R)**.

Sur l'iPhone, la première fois :

- **Réglages › Confidentialité et sécurité › Mode développeur** : activer, puis redémarrer l'iPhone.
- **Réglages › Général › VPN et gestion de l'appareil** : touche ton identifiant développeur › « Faire confiance ».
- Ouvre l'appli : autorise la position (« Lorsque l'app est active ») et l'appareil photo quand elle les demande.

## Tous les 7 jours

Avec le compte gratuit, Apple fait expirer la signature au bout de 7 jours : l'appli ne s'ouvre plus. Branche l'iPhone, ouvre le projet (`npm run ouvrir`) et refais **▶**. Tes données (lieux, sorties, photos, réglages) **restent** sur le téléphone.

## Mettre à jour l'appli après des changements

```bash
cd iphone
git pull
npm run maj        # recopie l'appli web dans le projet iPhone
npm run ouvrir     # puis ▶ dans Xcode
```

## Limites du compte gratuit

- 3 applis installées ainsi par appareil, signature valable 7 jours.
- Pas de suivi GPS quand l'écran est éteint : garde l'écran allumé pendant le guidage (l'appli l'empêche de se mettre en veille).
