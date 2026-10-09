import Fastify from "fastify";

const app = Fastify({ logger: true });

app.get("/health", async () => ({
  status: "ok",
  product: "HIPERNOVA AI BUSINESS",
  version: "0.1.0",
  environment: process.env.APP_ENV ?? "development"
}));

app.get("/api/v1", async () => ({
  name: "HIPERNOVA AI BUSINESS API",
  status: "initializing",
  endpoints: {
    health: "/health"
  }
}));

const port = Number(process.env.PORT || 3000);

app.listen({ port, host: "0.0.0.0" }).catch((error) => {
  app.log.error(error);
  process.exit(1);
});