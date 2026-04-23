const Express = require("express");
const router = Express.Router();
const User = require("../models/user");
const asyncWrap = require("../utils/asyncWrap");
const passport = require("passport");
const {getRedirectUrl} = require("../middleware.js");
//SIGNUP
//SHOW ROUTE
router.get("/signup", (req, res) => {
    res.render("user/signup.ejs");
})

//CREATE ROUTE
router.post("/signup", asyncWrap(async (req, res,next) => {
    try {
        let { username, email, password } = req.body;
        let newUser = new User({ username, email });
        let registeredUser = await User.register(newUser, password);
        req.login(registeredUser,(err) => {
            if(err){
                return next(err);
            }
            req.flash("success", "Welcome to wanderLust");
            res.redirect("/listings");
        })
    } catch (e) {
        if (e.code === 11000) {
            e.message = "the e-mail is already registered"
        }
        req.flash("error", e.message);
        res.redirect("/signup");
    }
}))

//LOGIN
//SHOW ROUTE
router.get("/login", (req, res) => {
    res.render("user/login.ejs");
})

//CREATE ROUTE
router.post("/login", getRedirectUrl,passport.authenticate("local", { failureRedirect: "/login", failureFlash: true }), (req, res) => {
    req.flash("success","Welcome back to wanderlust");
    res.redirect(res.locals.redirectUrl);
})


//LOGOUT
router.get("/logout",(req,res,next) => {
    req.logOut((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listings");
    })
})

module.exports = router;