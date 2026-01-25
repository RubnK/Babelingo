import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Babelingo Gateway API",
    version: "1.0.0",
    description: "Documentation de l'API Gateway de Babelingo",
  },
  servers: [
    { url: "http://localhost:3000", description: "Développement local" },
  ],
};

const options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export { swaggerUi, swaggerSpec };
