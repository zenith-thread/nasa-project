import express from "express";

// controllers
import { getAllPlanets } from "../../controllers/planetsController/planets.controller.js";

export const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

export default planetsRouter;
