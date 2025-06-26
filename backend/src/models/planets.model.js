import path from "path";
import fs from "fs";
import { parse } from "csv-parse";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const habitablePlanets = [];

const isHabitable = (planet) =>
  planet["koi_disposition"] === "CONFIRMED" &&
  planet["koi_insol"] > 0.36 &&
  planet["koi_insol"] < 1.11 &&
  planet["koi_prad"] < 1.6;

export const loadPlanetsData = () => {
  return new Promise((resolve, reject) =>
    fs
      .createReadStream(path.join(__dirname, "..", "data", "kepler_data.csv"))
      .pipe(
        parse({
          comment: "#",
          columns: true,
        })
      )
      .on("data", (data) => {
        if (isHabitable(data)) {
          habitablePlanets.push(data);
        }
      })
      .on("error", (err) => {
        console.log(err);
        reject();
      })
      .on("end", () => {
        console.log("Habitable Planets Loaded Successfully");
        resolve();
      })
  );
};
