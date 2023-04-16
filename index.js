// Code your solution in this file!


const returnFirstTwoDrivers =(array)=>{
return [array[0],array[1]]
}

const returnLastTwoDrivers = (array)=>{
    return[array[array.length-2],array[array.length-1]]
}


const selectingDrivers=[
    returnFirstTwoDrivers,
    returnLastTwoDrivers

]



const createFareMultiplier =(a)=>{

    return function(a){
        return a*a
    }
}

function fareDoubler(a){
    return a*2
}

function fareTripler(a){
    return a*3
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers)
}