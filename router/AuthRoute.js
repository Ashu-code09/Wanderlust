const Express = require("express");
const router = Express.Router();
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const {getRedirectUrl} = require("../middleware.js");
const AuthController = require("../controllers/Auth.js");
//SIGNUP
router.route("/signup")
//SHOW ROUTE
    .get(AuthController.renderSignupForm )
//CREATE ROUTE
    .post(asyncWrap(AuthController.singup));


//LOGIN
router.route("/login")
//SHOW ROUTE
    .get(AuthController.renderLoginForm )
//CREATE ROUTE
    .post(getRedirectUrl,
            passport.authenticate("local", { 
                failureRedirect: "/login",
                failureFlash: true
                 }
                
            ),AuthController.login );

//LOGOUT
router.get("/logout",AuthController.logout)

module.exports = router;