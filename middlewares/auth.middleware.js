const jwt = require('jwt-then')
// require("dotenv").config()

module.exports = async (req, res, next) => {
    try{
        if (!req.headers.authorization) throw "Token not found";

        const token = req.headers.authorization.split(' ')[1];
        const payload = await jwt.verify(token, process.env.SECRET);

        req.payload = payload;

        next();
    } catch(err){
        res.status(403).json({
            success: false,
            message: err
        })
    }
}