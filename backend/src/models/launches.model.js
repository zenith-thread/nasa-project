// ID
let latestFlightNumber = 100;

// Model
const launches = new Map();

// Model Methods to Abstract out the business logic for our controller
export const getAllLaunches = () => Array.from(launches.values());

export const addNewLaunch = (launch) => {
  latestFlightNumber++;
  launches.set(
    latestFlightNumber,
    Object.assign(launch, {
      flightNumber: latestFlightNumber,
      customer: ["NASA", "NOAA"],
      upcoming: true,
      success: true,
    })
  );
};

export const existsLaunchWithId = (launchId) => launches.has(launchId);

export const abortLaunchById = (launchId) => {
  const abortedLaunch = launches.get(launchId);
  abortedLaunch.upcoming = false;
  abortedLaunch.success = false;
  return abortedLaunch;
};
