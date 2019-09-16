// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (int) => {
  return function(fare) {
    return fare * int;
  };
};

//a leeetle rusty on exactly how this works, but it's something about the const variable return value being a function
const fareDoubler = (fare) => {
  const doubled = createFareMultiplier(2);
  return doubled(fare);
};

const fareTripler = (fare) => {
  const tripled = createFareMultiplier(3);
  return tripled(fare);
};

const selectDifferentDrivers = (drivers, func) => {
  return func(drivers);
};