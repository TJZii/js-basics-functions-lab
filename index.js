// Code your solution in this file!
function distanceFromHqInBlocks(locale) {
    
    let hq = 42;
    let distance;

    if(locale >= hq){
        distance = locale - hq;
    } else {
        distance = hq - locale;
    }

    return distance;
}

function distanceFromHqInFeet(locale) {
    
    let hq = 42;
    let distance;

    if(locale >= hq){
        distance = (locale - hq) * 264;
    } else {
        distance = (hq - locale) * 264;
    }

    return distance;
}

function distanceTravelledInFeet(start, end){
    if(start >= end){
        return (start % end) * 264;
    } else {
        return (end % start) * 264;
    }
}

function calculatesFarePrice(start, destination) {
    let distance;
    
    if(start >= destination){
        distance = (start % destination) * 264;
    } else {
        distance = (destination % start) * 264;
    }

    if(distance <= 400){
        return 0;
    } else if(distance <= 2000){
        return 0.02 * (distance - 400);
    } else if(distance <= 2500){
        return 25;
    } else {
        return 'cannot travel that far';
    }

}