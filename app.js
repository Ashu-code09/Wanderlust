const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExpressError = require("./utils/ExpressError.js");
const listingRoute = require("./router/listingRoute.js");
const reviewRoute = require("./router/reviewRoute.js");
const session = require("express-session");
const flash = require("connect-flash");


const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

const app = express();

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended : true}));
app.use(methodOverride("_method"));
app.engine("ejs",ejsMate);
app.use(express.static(path.join(__dirname,"/public")));

main()
    .then(() => {
    console.log("Connected to Database");
    })
    .catch((err) => {
    console.log(err);
    })


async function main() {
    await mongoose.connect(MONGO_URL);
}

const sessionOptions = {
    secret : "supersecretkey",
    resave : false,
    saveUninitialized : true,
    cookie : {
        expires : Date.now() + 7 * 24 * 60 * 60 * 1000,
        maxAge : 7 * 24 * 60 * 60 * 1000,
        httpOnly : true,
    }
}

app.use(session(sessionOptions));
app.use(flash());

app.use((req,res,next) => {
    res.locals.success = req.flash("success");
    res.locals.failure = req.flash("failure");
    console.log(res.locals.success);
    next();
})

app.get("/",(req,res) => {
    res.send("Request received");
});

app.use("/listings",listingRoute);
app.use("/listings/:id/reviews",reviewRoute)

app.use((req,res,next) => {
   next(new ExpressError(404,"Page not found"));
    
})

//Error handling middleware
app.use((err,req,res,next) => {
    let {statusCode = 500,message = "Some error occured!"} = err;
    res.status(statusCode).render("error.ejs",{err});
})

app.listen(8080,() => {
    console.log("App is listening");
});