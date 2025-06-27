import express from "express";

// controllers
import { httpGetAllPlanets } from "../../controllers/planetsController/planets.controller.js";

export const planetsRouter = express.Router();

planetsRouter.get("/", httpGetAllPlanets);

export default planetsRouter;
