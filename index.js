// Code your solution in this file
function findMatching(drivers,name){
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, str){
  return drivers.filter(driver => driver.indexOf(str) === 0);
}

function matchName(drivers , matchStr){
  return drivers.filter(driver => driver.name === matchStr);
}
