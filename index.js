// function returnFirstTwoDrivers(arr) {
//     return arr.slice(0,2)
// }

// function returnLastTwoDrivers(arr) {
//     return arr.slice(arr.length-2, arr.length)
// }

const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2);
};

const returnLastTwoDrivers = function (arr) {
    return arr.slice(arr.length - 2, arr.length);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ]

function createFareMultiplier(num) {
    return function multiplier (toMultiply) { return toMultiply * num }
}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2)
    return doubler(fare)
}

function fareTripler(fare) {
    const tripler = createFareMultiplier(3)
    return tripler(fare)
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}