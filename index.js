const returnFirstTwoDrivers = function(names) {
    return names.slice(0, 2);
}; 

const returnLastTwoDrivers = function(names) {
    return names.slice(-2);
};

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];


const createFareMultiplier = function(num) {
    return function(fare) {
        return fare * num;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, cd) {
    return cd(drivers);
};