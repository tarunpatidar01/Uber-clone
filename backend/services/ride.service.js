const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const bcrypt = require('bcrypt');
const crypto = require('crypto');

async function getFare(pickup, destination) {

    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const baseFare = {
        auto: 30,
        car: 50,
        moto: 20
    };

    const perKmRate = {
        auto: 10,
        car: 15,
        moto: 8
    };

    const perMinuteRate = {
        auto: 2,
        car: 3,
        moto: 1.5
    };



    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distance.value / 1000) * perKmRate.auto) + ((distanceTime.duration.value / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distance.value / 1000) * perKmRate.car) + ((distanceTime.duration.value / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distance.value / 1000) * perKmRate.moto) + ((distanceTime.duration.value / 60) * perMinuteRate.moto))
    };

    return fare;


}
module.exports.getFare = getFare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}


module.exports.createRide = async ({ userId, pickup, destination, vehicleType }) => {
    // Log the input parameters
    // console.log('Create Ride Params:', { user, pickup, destination, vehicleType });
    // console.log(userId);

    if (!userId || !pickup || !destination || !vehicleType) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination);
    
    const ride = rideModel.create({
        user: userId,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    });

    return ride;
};

module.exports.getRide = async ({ user, otp }) => {
    if (!user || !otp) {
        throw new Error('User and otp are required');
    }

    const ride = await rideModel.findOne({ user: user._id, otp });

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;
}




