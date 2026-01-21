FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npx prisma generate

# Compile le code TypeScript
RUN npm run build

# Lance le serveur en mode production
CMD ["node", "dist/index.js"]