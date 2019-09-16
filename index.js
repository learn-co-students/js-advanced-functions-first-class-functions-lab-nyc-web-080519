const returnFirstTwoDrivers = (function(drivers) {
    const myArr = [];
    myArr.push(drivers[0]);
    myArr.push(drivers[1]);
    return myArr;
});

const returnLastTwoDrivers = (function(drivers) {
    const myArr = [];
    myArr.push(drivers[drivers.length - 2]);
    myArr.push(drivers[drivers.length - 1]);
    return myArr;
});

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(num) {
    return function(fare) {
        return fare * num;
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, myFunc) {
    return myFunc(drivers);
};
