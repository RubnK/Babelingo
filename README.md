# Babelingo

Projet SaaS d'apprentissage des langues - architecture multi-services (React, Node, PostgreSQL, Docker).

## Lancement rapide

```bash
docker-compose up -d
```

Appliquer les migrations Prisma :

```bash
npx prisma migrate deploy
```

Ouvrir Prisma Studio (visualiser la base) :

```bash
npx prisma studio
```

Injecter le seed SQL (données de démo) :

```bash
docker cp prisma/seed.sql babelingo-postgres-1:/seed.sql
docker exec -i babelingo-postgres-1 psql -U babelingo -d babelingo -f /seed.sql
```
