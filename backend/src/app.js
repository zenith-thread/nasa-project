import express from "express";
import cors from "cors";

// Routers
import planetsRouter from "./routes/planetsRouter/planets.router.js";

const app = express();

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use("/api", planetsRouter);

app.get("/", (req, res) => {
  res.json({ msg: "API working" });
});

export default app;
