const returnFirstTwoDrivers = function(arr) { 
  const output = arr.map(function(x) { return x })
  return output.slice(0,2)}

  const returnLastTwoDrivers = function(arr) { 
    const output = arr.map(function(x) { return x })
    return output.slice(-2)}
  
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

  function createFareMultiplier(int) {
    return function(fare) {
      return fare * int
    }
  }

  const fareDoubler = createFareMultiplier(2);
  const fareTripler = createFareMultiplier(3);

  function selectDifferentDrivers(arr, func) {
    return func(arr);
  } 