const express = require("express");
const router = express.Router();
const validateToken = require("../middleware/validateTokenHandler");

const {
    userRegistration,
    userLogin,
    getLoggedinUserDeatils
} = require("../controllers/usersController");


/**
 * We can do route like this also
 * router.route("/register").post(userRegistration);
 */
router.post("/register", userRegistration);
router.post("/login", userLogin);
router.get("/current", validateToken, getLoggedinUserDeatils);

module.exports = router;