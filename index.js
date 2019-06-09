// Code your solution in this file
 function findMatching (array, name) {
  const newCollection = [];
  for (const user of array) {
    if (user.toUpperCase() === name.toUpperCase()) {
      newCollection.push(user);
    }
  }
 
  return newCollection;
}

function fuzzyMatch(array, name){
  const newCollection = [];
  for (const user of array) {
    if (user.startsWith(name)) {
      newCollection.push(user);
    }
  }
 
  return newCollection;
}

function matchName(array, isim){
  const newCollection = [];
  for (const user of array) {
    if (user.name === isim) {
      newCollection.push(user);
    }
  }
 
  return newCollection;
  
  
  
}










