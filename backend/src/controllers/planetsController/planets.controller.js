import { getAllPlanets } from "../../models/planets.model.js";

export const httpGetAllPlanets = (req, res) => {
  return res.json(getAllPlanets());
};
