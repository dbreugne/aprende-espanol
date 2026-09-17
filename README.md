# Aprende · espagnol et chinois

App perso pour apprendre une langue depuis le français. Une seule app, deux langues au choix
(sélecteur 🇪🇸 / 🇨🇳 sur l'écran des profils et en haut de l'app ; la dernière langue choisie est retenue).

| Langue | Dossier | Adresse |
|---|---|---|
| 🇪🇸 Espagnol (Aprende Español) | `public/` | `/` |
| 🇨🇳 Chinois (Xué Zhōngwén · 学中文) | `public/zh/` | `/zh/` |

- Profils partagés entre les langues ; progression séparée (côté serveur : `dylan` pour l'espagnol, `zh:dylan` pour le chinois).
- Parcours de 30 jours, erreurs reproposées jusqu'à être justes du premier coup, fautes de frappe en orange, lexique par thème, nombres, mode avion (un service worker par langue), saisie mobile figée.
- Espagnol : 74 verbes × 7 temps avec phrases d'exemple.
- Chinois : réponse en pinyin ou en caractères (tons facultatifs), grammaire + quiz, tons, 150 caractères, voix zh-CN. `public/zh/pinyin-pro.js` est une copie de [pinyin-pro](https://github.com/zh-lx/pinyin-pro) (MIT).

## Lancer

```bash
npm install && node server.js        # http://localhost:3000 (SQLite dans ./data)
# ou sans base (progression gardée sur l'appareil) :
cd public && python3 -m http.server 8080
```

`./deploy.sh` redéploie sur le serveur Hetzner (Docker + Caddy).
