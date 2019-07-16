// Code your solution in this file
function findMatching(drivers, match){
  return drivers.filter(driver => driver.toLowerCase() === match.toLowerCase())
}

function fuzzyMatch(drivers, match){
  return drivers.filter(driver => driver.slice(0,2).includes(match))
}
function matchName(drivers, match){
  return drivers.filter(driver => driver.name === match)
}
