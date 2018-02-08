set your phone on debug mode\
plug in your phone on usb
```
source scripts/create-tns-alias.sh
tns run android
```

TODO:

[optionnel]
Déclencher une animation talk random quand un son est lancé (et qu'une animation
talk n'est pas déjà en cours), et une animation fiddle random quand un son est
terminé (si pas de son en cours dans le cas où on permet la lecture
simultanée de plusieurs sons).

Animation CSS ou Gif ?

Pour les chemins relatifs des imports, tester https://www.npmjs.com/package/babel-plugin-root-import