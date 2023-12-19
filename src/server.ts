import express from "express";
import payload from "payload";
import path from "path";
require("dotenv").config();
const app = express();

// Redirect root to Admin panel
app.get("/", (_, res) => {
  res.redirect("/admin");
});

app.get("/health", async (_req, res, _next) => {
  const healthcheck = {
    uptime: process.uptime(),
    message: "OK",
    timestamp: Date.now(),
  };
  try {
    res.status(200).send(healthcheck);
  } catch (error) {
    healthcheck.message = error;
    res.status(503).send();
  }
});

app.get("/graphql-schema", (_, res) => {
  res.sendFile(path.resolve(__dirname, "generated-schema.graphql"));
});

const start = async () => {
  // Initialize Payload
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    onInit: async () => {
      payload.logger.info(
        `View Payload at http://localhost:3001${payload.getAdminURL()}`
      );
    },
  });

  // Add your own express routes here

  app.listen(3001);
};

start();
