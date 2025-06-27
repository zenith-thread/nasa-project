import express from "express";

// Controllers
import { httpGetLaunches } from "../../controllers/launchesController/launches.controller.js";
import { httpCreateLaunch } from "../../controllers/launchesController/createLaunch.controller.js";
import { httpAbortLaunch } from "../../controllers/launchesController/abortLaunch.controller.js";

const launchesRouter = express.Router();

launchesRouter.get("/", httpGetLaunches);
launchesRouter.post("/", httpCreateLaunch);
launchesRouter.delete("/:id", httpAbortLaunch);

export default launchesRouter;
