# syntax=docker/dockerfile:1

# ---------- Étape de build : compile l'application Angular (SSR) ----------
FROM node:24-alpine AS build

WORKDIR /app

# Les dépendances d'abord : le cache Docker est conservé tant que les lockfiles ne changent pas
COPY package.json package-lock.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---------- Étape d'exécution : serveur Node minimal ----------
FROM node:24-alpine AS prod-runtime

ARG APP_VERSION=dev
ENV APP_VERSION=${APP_VERSION}
ENV NODE_ENV=production
ENV PORT=4000

WORKDIR /app

# Le builder Angular regroupe les dépendances (express inclus) dans le bundle
# serveur : aucun node_modules n'est nécessaire à l'exécution.
COPY --from=build /app/dist ./dist

EXPOSE 4000
USER node

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://127.0.0.1:${PORT}/" > /dev/null || exit 1

CMD ["node", "dist/nassitch/server/server.mjs"]
