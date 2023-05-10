const mongoose = require('mongoose');
const User = mongoose.model('User');
const sha256 = require('js-sha256');
const jwt = require('jwt-then');
require('dotenv').config()

exports.register = async (req, res) => {
    const {name, email, password} = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;

    if(!emailRegex.test(email)) throw "Email is not supported"

    const email_found = await User.findOne({ email });

    if (email_found) throw "User already exists"
 
    const user = new User({
        name,
        email,
        password: sha256(password+ process.env.SALT),
    })

    await user.save();

    res.json({
        success: true,
        message: `User { ${name} } saved successfully`
    })
}

exports.login = async (req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({
        email, 
        password: sha256(password+ process.env.SALT),
    });

    if (!user) throw "Email and Password did not match"

    const token = await jwt.sign({ id: user.id}, process.env.SECRET)

    res.json({
        token: token,
        message: `{ ${email} } has been logged in successfully` 
    });
};