const User = require("../models/user");

module.exports.renderSignupForm = (req, res) => {
    res.render("user/signup.ejs");
}

module.exports.singup = async (req, res,next) => {
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
}

module.exports.renderLoginForm = (req, res) => {
    res.render("user/login.ejs");
}

module.exports.login = (req, res) => {
    req.flash("success","Welcome back to wanderlust");
    res.redirect(res.locals.redirectUrl);
}

module.exports.logout = (req,res,next) => {
    req.logOut((err) => {
        if(err){
            return next(err);
        }
        req.flash("success","You are logged out");
        res.redirect("/listings");
    })
}