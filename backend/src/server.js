import http from "http";
import "dotenv/config";

import app from "./app.js";

import { loadPlanetsData } from "./models/planets.model.js";

// App config
const PORT = process.env.PORT;

const server = http.createServer(app);

const startServer = async () => {
  try {
    await loadPlanetsData();

    server.listen(PORT, () =>
      console.log(`Listening on http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log(err);
  }
};

startServer();
