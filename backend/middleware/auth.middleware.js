const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const blacklistToken = require('../models/blacklistToken.model');
const captainModel = require('../models/captain.model');

module.exports.authUser = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
   
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    
    const isBlacklisted = await blacklistToken.findOne({ token: token });
    
    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized Wala' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id)

        res.user = user;

        return next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}

module.exports.authCaptain = async (req,res,next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];
   
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }
    
    const isBlacklisted = await blacklistToken.findOne({ token: token });
    
    if(isBlacklisted){
        return res.status(401).json({ message: 'Unauthorized Wala' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id)

        res.captain = captain;
         
        return next();

    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
}