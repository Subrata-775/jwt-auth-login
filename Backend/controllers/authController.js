const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


// SIGNUP
exports.signup = async (req, res) => {

    try {

        const { email, password } = req.body;

        const hash = await bcrypt.hash(password, 10);

        const user = await User.create({
            email,
            password: hash
        });

        res.status(201).json({
            success: true,
            message: "User created"
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}


// LOGIN
exports.login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {

            return res.status(400).json({
                message: "User not found"
            });

        }

        const match = await bcrypt.compare(password, user.password);

        if (!match) {

            return res.status(400).json({
                message: "Invalid password"
            });

        }

        const token = generateToken(user._id);

        res.cookie("token", token, {
            httpOnly: true,
            secure: false
        });

        res.json({
            success: true,
            message: "Login success"
        });

    }
    catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

}


// DASHBOARD
exports.dashboard = async (req, res) => {

    res.json({
        message: "Welcome to protected dashboard",
        user: req.user
    });

}