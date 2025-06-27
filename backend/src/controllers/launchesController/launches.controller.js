import { getAllLaunches } from "../../models/launches.model.js";

export const httpGetLaunches = (req, res) => {
  return res.json(getAllLaunches());
};
