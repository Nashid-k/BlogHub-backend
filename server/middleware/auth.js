const jwt = require('jsonwebtoken');
const User =require('../models/User');


const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization')?.replace('Bearer', '').trim();

        if(!token){
            return res.status(401).json({error: 'Access denied. No token provided'})
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded.id).select('-password');

        if(!user){
             console.log('JWT error:', error.message);
            return res.status(401).json({error:'Token is not valid'});
        }

        req.user = user;
        next();
        
    } catch (error) {
         console.log('JWT error:', error.message);
        res.status(401).json({error:"Token is invalid"});
    }
};

module.exports = auth;