const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers){
    return drivers.slice(drivers.length - 2, drivers.length);
    // return drivers.slice(-2)
    // this also works because it will slice from the index of -2 to the end
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// higher order function
// If createFareMultiplier() receives an argument of 4, 
// it will return a function that takes in a fare as an argument 
// and quadruples the fare.
const createFareMultiplier = function(num) {
    return function(num2) {
        return num * num2;
    };
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, func) {
    return func(drivers)
}
