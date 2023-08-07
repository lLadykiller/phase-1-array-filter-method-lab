// Code your solution here
function findMatching(drivers, query) {
const lowerQuery = query.toLowerCase();
const matchingDrivers = drivers.filter(driver =>
    driver.toLowerCase().includes(lowerQuery));
    return matchingDrivers;
}

function fuzzyMatch(drivers, query) {
const lowerQuery = query.toLowerCase();
const matchingDrivers = drivers.filter(driver =>
    driver.toLowerCase().startsWith(lowerQuery));
    return matchingDrivers;
}

function matchName(drivers, name) {
const matchingDrivers = drivers.filter(driver =>
    driver.name === name);
    return matchingDrivers;
}
