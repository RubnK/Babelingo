import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

// Swagger configuration
const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Babelingo Gameplay API",
    version: "1.0.0",
    description: "Documentation de l'API gameplay de Babelingo",
  },
  servers: [
    { url: `http://localhost:${PORT}`, description: "Développement local" },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT",
      },
    },
  },
  security: [{ bearerAuth: [] }],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

import levelsRouter from "./routes/levels";
app.use("/levels", levelsRouter);

import languagesRouter from "./routes/languages";
app.use("/languages", languagesRouter);

import runsRouter from "./routes/runs";
import { authenticateJWT } from "./middlewares/auth";
app.use("/runs", authenticateJWT, runsRouter);

import attemptsRouter from "./routes/attempts";
app.use("/attempts", authenticateJWT, attemptsRouter);

app.listen(PORT, () => {
  console.log(`Service gameplay démarré sur le port ${PORT}`);
});
