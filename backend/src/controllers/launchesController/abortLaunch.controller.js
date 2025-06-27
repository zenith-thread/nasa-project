import {
  abortLaunchById,
  existsLaunchWithId,
} from "../../models/launches.model.js";

export const httpAbortLaunch = (req, res) => {
  try {
    const launchId = Number(req.params.id);

    if (!launchId) {
      return res.status(400).json({
        success: false,
        message: "Invalid Launch ID",
      });
    }

    if (!existsLaunchWithId(launchId)) {
      return res.status(404).json({
        success: false,
        message: "Launch doesn't exists",
      });
    }

    const abortedLaunch = abortLaunchById(launchId);

    return res.json({
      success: true,
      message: "Launch deleted successfully",
      body: abortedLaunch,
    });
  } catch (err) {
    console.log(err);
    return res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};
