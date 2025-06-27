import { addNewLaunch, getAllLaunches } from "../../models/launches.model.js";

export const httpCreateLaunch = (req, res) => {
  try {
    const launch = req.body;
    launch.launchDate = new Date(launch.launchDate);

    if (isNaN(launch.launchDate)) {
      return res.status(400).json({
        success: false,
        message: "Invalid launch date provided",
      });
    }

    const { mission, rocket, launchDate, destination } = launch;

    if (!mission || !rocket || !launchDate || !destination) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    addNewLaunch({ mission, rocket, launchDate, destination });

    const addedLaunch = getAllLaunches().find(
      (item) => item.launchDate === launchDate
    );
    return res.status(201).json({
      success: true,
      message: "Launch added successfully",
      body: addedLaunch,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
