// Code your solution in this file!
const returnFirstTwoDrivers= (drivers)=> {
    return drivers.slice(0, 2);
  };
//console.log(returnFirstTwoDrivers(drivers))
const returnLastTwoDrivers = drivers => drivers.slice(-2)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(multiplier){
    function fareMultiplier(fare){
        return fare*multiplier
    }
    return fareMultiplier
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)
//console.log(fareDoubler())
//console.log(fareTripler())


function selectDifferentDrivers(arrayOfDrivers,functions){
    return functions(arrayOfDrivers)
}