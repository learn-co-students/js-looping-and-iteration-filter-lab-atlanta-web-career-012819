// Code your solution in this file


function findMatching(drivers,name) {
    let newDriver = drivers.filter(function(d) {
       return d.toLowerCase() === name.toLowerCase()
    })

    return newDriver;
}

function fuzzyMatch(drivers,name) {
    let newDriver = drivers.filter(function(d) {
        return d.startsWith(name);
    })

    return newDriver;
}

function matchName(drivers,name) {
    return drivers.filter(function(d) {
       return d.name === name;
    })
}