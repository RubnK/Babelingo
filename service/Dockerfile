FROM node:20

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma
RUN npm install
RUN npx prisma generate --schema=./prisma/schema.prisma
COPY . .
RUN npm run build
CMD ["node", "dist/index.js"]
