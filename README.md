# Babelingo

**Authors : [@RubnK](https://github.com/RubnK), [@yayou05](https://github.com/yayou05), [@len233](https://github.com/len233)**

Babelingo est une application d'apprentissage des langues basée sur une architecture microservices, conçue pour être déployée facilement avec Docker. Elle propose des niveaux thématiques, des exercices interactifs, une gestion de l'XP utilisateur et une authentification sécurisée avec JWT.

## Fonctionnalités principales

- Architecture multi-services (Gateway, Gameplay, etc.)
- Base de données PostgreSQL (persistante)
- ORM Prisma (migration automatique au démarrage)
- Authentification JWT
- Gestion de l'XP utilisateur
- Niveaux thématiques (ex : animaux, nourriture, maison...)
- Questions filtrées par langue et niveau
- Frontend React (Vite + Tailwind)
- Documentation Swagger pour toutes les API
- Déploiement et orchestration via Docker Compose

## Démarrage rapide

### 1. Construction des images Docker

```bash
docker-compose build --no-cache
```

### 2. Lancement des services

```bash
docker-compose up -d
```

- Les migrations Prisma sont lancées automatiquement au démarrage.
- Les services sont accessibles sur les ports définis dans le docker-compose.
- Le frontend est accessible sur `http://localhost:8080`.

### 3. Arrêt et nettoyage complet

```bash
docker-compose down -v
```

- Cette commande arrête tous les services et supprime les volumes (base de données incluse).

## Structure des services

- **gateway/** : Service principal, gestion des utilisateurs, XP, authentification, routes globales.
- **service/** : Service gameplay, gestion des niveaux, questions, logique métier.
- **frontend/** : Application React, interface utilisateur.

## Variables d'environnement

- Les URLs des API sont configurées dans le frontend via `.env` :
    `VITE_API_GATEWAY=http://localhost:3000`
    `VITE_API_GAMEPLAY=http://localhost:4000`
- Le secret JWT doit être identique dans tous les services (`JWT_SECRET`).
- La variable `DATABASE_URL` doit être définie dans chaque service backend (gateway et service) pour pointer vers la base PostgreSQL. Exemple :
    `DATABASE_URL=postgresql://babelingo:motdepasse@postgres:5432/babelingo`

## Routes principales

### Gateway

- `POST /register` : Inscription d'un nouvel utilisateur
- `POST /login` : Connexion (retourne un JWT)
- `GET /user/xp` : Récupérer l'XP de l'utilisateur (auth requis)
- `POST /user/xp` : Mettre à jour l'XP (auth requis)
- `GET /languages` : Liste des langues disponibles

### Gameplay

- `GET /levels` : Liste tous les niveaux
- `GET /levels/:id/questions?lang=xx` : Questions d'un niveau pour une langue donnée
- `GET /levels/users/:id` : Niveaux terminés par un utilisateur

### Autres

- `GET /courses?lang=xx` : (si encore utilisé) Liste des cours filtrés par langue

Toutes les routes sont documentées via Swagger sur chaque service :

- Gateway : `http://localhost:3000/api-docs`
- Gameplay : `http://localhost:4000/api-docs`

## Documentation API

- Swagger est disponible sur chaque service :
    Gateway : `http://localhost:3000/api-docs`
    Gameplay : `http://localhost:4000/api-docs`

## Contribution

- Forkez le projet, créez une branche, proposez vos améliorations via pull request.

## Licence

Ce projet est distribué sous [licence MIT](LICENSE).
