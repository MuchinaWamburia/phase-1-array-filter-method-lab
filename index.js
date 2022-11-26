// Code your solution here
function findMatching(drivers, argument) {
    return drivers.filter(function (driver) { return driver.toLowerCase() === argument.toLowerCase() })
  }
  
function fuzzyMatch(drivers, argument) {
    return drivers.filter(function (driver) { return driver.toLowerCase().substring(0, argument.length) === argument.toLowerCase() })
  }
  
function matchName(drivers, argument) {
    return drivers.filter(function (driver) { return driver.name === argument })
  }