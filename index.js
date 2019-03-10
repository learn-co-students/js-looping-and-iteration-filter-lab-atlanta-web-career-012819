// Code your solution in this file
function findMatching (drivers, name) {
  let result = drivers.filter(function(cur) {
    return cur.toLowerCase() === name.toLowerCase();
  })

  return result;
}

function fuzzyMatch (drivers, partial) {
  let result = drivers.filter(function (cur) {
    return partial === cur.slice(0, partial.length);
  });

  return result;
}

function matchName (drivers, name) {
  let result = drivers.filter(function (driver) {
    return driver.name === name;
  });

  return result;
}
