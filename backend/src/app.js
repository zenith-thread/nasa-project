import express from "express";
import cors from "cors";
import path from "path";
import morgan from "morgan";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routers
import planetsRouter from "./routes/planetsRouter/planets.router.js";
import launchesRouter from "./routes/launchesRouter/launches.router.js";

const app = express();

// MIDDLEWARES
// cors
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
// Logging middleware
app.use(morgan("combined"));

// parsing incoming request to json and populating req.body in json format
app.use(express.json());

// serve production ready react frontend using express
app.use(express.static(path.join(__dirname, "..", "public")));

// Routers
app.use("/api/planets", planetsRouter);
app.use("/api/launches", launchesRouter);

// routes within our production build, handled by react router if any.
app.get(/.*/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// a 404 response for any unhandled routes
app.use((req, res) => {
  res.status(404).json({ error: "Not Found" });
});

export default app;
