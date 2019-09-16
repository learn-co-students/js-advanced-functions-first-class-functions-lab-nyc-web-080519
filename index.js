const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

// 1. Declare variable returnFirstTwoDrivers
// 2. Assign the function an anonymous function and pass through an array called drivers
// 3. Use slice with the argument 0 and 2, which will return back the first two items in the array starting with index zero. 

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
  };

// 1. Declare variable returnLastTwoDrivers
// 2. Assign the function an anonymous function and pass through an array called drivers
// 3. Use slice with the argument -2, which will return back the last two drivers in an array. 

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

// 1. Create a variable called selectingDrivers 
// 2. This new variable should be an array. 
// 3. Inside the array we want to pass through the results of the two earlier functions that we created. 

const createFareMultiplier = function (multiplyValue) {
    return function (value) {
      return multiplyValue * value;
    };
  };

// 1. Create a constant called createFareMultiplier. 
// 2. Within the constant create an anonymous function that takes in an arguement of a multiplier value. The anonymous function can be called be calling the const name. 
// 3. The createFareMultiplier function should return another function that requires a value. 
// 4. That new function should multiply multiplyValue  and value. 

const fareDoubler = function (fare) {
    return fare * 2;
};

const fareTripler = function (fare) {
    return fare * 3;
};

const selectDifferentDrivers = function (drivers, whichDrivers) {
    return whichDrivers(drivers);
  };


  

  
  

  

  

