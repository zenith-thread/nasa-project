import { habitablePlanets } from "../../models/planets.model.js";

export const getAllPlanets = (req, res) => {
  return res.json(habitablePlanets);
};
