// Code your solution in this file

const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers,name) {
  const newDriver = [];
  for (const user of drivers){
    if(user.toLowerCase()==name.toLowerCase()) {
      newDriver.push(user);
    }
  }
  return newDriver;
}

function fuzzyMatch(drivers, name) {
  const secondDrivers = [];
  for (const user of drivers){
    if(user.slice(0,1) === name.slice(0,1)){
      secondDrivers.push(user);
    }
  }
  return secondDrivers;
}

function matchName(drivers, string){
  return drivers.filter(function(driver) {return driver.name.toLowerCase() === string.toLowerCase()})
}