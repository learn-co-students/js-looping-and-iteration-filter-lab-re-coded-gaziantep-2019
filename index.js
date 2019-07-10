// Code your solution in this file

// function findMatching(drivers,name){
//   const result = [];
//   for(const driver of drivers){
//     if (name.toLowerCase() === driver.toLowerCase()){
//       result.push(driver);
//   }
// }
//   return result;
// }


// function findMatching(drivers,name){
//   return drivers.filter(function(driver){
//   return (driver.toLowerCase() === name.toLowerCase()) ;
// });
// }

// function fuzzyMatch(drivers, str){
//   return drivers.filter(function (driver){
//     return driver.indexOf(str) === 0;
//   })
// }

// function matchName(drivers, matchStr){
//   const matchArr = [];
//   for (let driver of drivers){
//     if (driver['name'] === matchStr){
//       matchArr.push(driver);  
      
//     }
//   }
//   return matchArr;
// }

function findMatching(drivers,name){
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());

}

function fuzzyMatch(drivers, str){
  return drivers.filter(driver => driver.indexOf(str) === 0);
}

function matchName(drivers , matchStr){
  return drivers.filter(driver => driver.name === matchStr);
}
