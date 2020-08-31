const returnFirstTwoDrivers = function (drivers) {
  return [drivers[0], drivers[1]];
};

const returnLastTwoDrivers = function (drivers) {
  const last = drivers.length - 1;
  return [drivers[last - 1], drivers[last]];
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
  return function (fare) {
    return fare * multiplier;
  };
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, driverFunc) {
  return driverFunc(drivers);
}
