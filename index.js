const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2)
}

const returnLastTwoDrivers = function(array) {
    return array.slice(array.length-2, array.length)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function(fare){
        return fare*integer
    }
}

const fareDoubler = function(fare) {
    return 2 * createFareMultiplier(1)(fare)
}

const fareTripler = function(fare) {
    return 3 * createFareMultiplier(1)(fare)
}

function selectDifferentDrivers(drivers, returnLastTwoDrivers) {
    return returnLastTwoDrivers(drivers)
}
