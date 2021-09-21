const User = require("../models/User");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const config = require("config");
const secret = config.get("secret");


exports.register = async (req, res) => {
    const { fullName, email, password, phone } = req.body;

    try {
        let existantUser = await User.findOne({ email });
        if (existantUser) return res.status(400).json({ msg: "User is already exist !" });
        const newUser = await new User({
            fullName,
            email,
            password,
            phone,
        });
        // generate salt to hash password
        const salt = await bcrypt.genSalt(10);
        // now we set user password to hashed password
        var hash = await bcrypt.hash(password, salt);
        newUser.password = hash;
        //
        await newUser.save();
        //res.send(newUser);
        //declaration of Payload 
        const payload = {
            id: newUser._id
        }
        var token = await jwt.sign(payload, secret);
        res.send({
            token,
            user: {
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                phone: newUser.phone,
            }
        })
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Login 
exports.login = async (req, res) => {

    const { email, password } = req.body;
    try {
        let existantUser = await User.findOne({ email });
        if (!existantUser) return res.status(400).json({ msg: "Bad Credentials !" });
        // check user password with hashed password stored in the database
        const validPassword = await bcrypt.compare(password, existantUser.password);
        if (!validPassword) return res.status(400).json({ msg: "Invalid Password" });
        //declaration of Payload 
        const payload = {
            id: existantUser._id
        }
        var token = await jwt.sign(payload, secret);
        res.send({
            token,
            user: {
                _id: existantUser._id,
                fullName: existantUser.fullName,
                email: existantUser.email,
                phone: existantUser.phone,
            }
        });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}
//getUser function 
exports.getUser = async (req, res) => {
    res.send(req.user);
}