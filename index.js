// Code your solution in this file
function findMatching (list, name) {
    return list.filter(function (driverName) {
      return driverName.toLowerCase() === name.toLowerCase();
    });
  }

  function fuzzyMatch (list, partialName) {
    return list.filter(function (driver) {
      return driver.slice(0, partialName.length) === partialName;
    });
  }

  function matchName (list, name){
      return list.filter(function (driver){
          return driver.name.toLowerCase() === name.toLowerCase();
      }
    )
  }