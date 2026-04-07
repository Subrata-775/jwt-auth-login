const express = require("express");

const {
    signup,
    login,
    dashboard
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

router.get("/dashboard", authMiddleware, dashboard);
router.get("/logout", (req, res) => {

    res.clearCookie("token");

    res.json({
        message: "Logout success"
    });

});

module.exports = router;