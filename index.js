function findMatching(drivers, name) {
  return drivers.filter(function (driver) { return driver.toUpperCase() === name.toUpperCase(); });
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(function (driver) { return driver.substr(0, letters.length) === letters; });
}

function matchName(drivers, string) {
  return drivers.filter(function (driver) { return driver.name === string; });
}
