const express = require("express");
const mongoose = require("mongoose");
const Listing = require("./models/listing.js");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const asyncWrap = require("./utils/asyncWrap.js");
const ExpressError = require("./utils/ExpressError.js");

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

app.get("/",(req,res) => {
    res.send("Request received");
});

//Index route
app.get("/listings",asyncWrap(async(req,res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings,page:"index-page"});
    
}));

//New route
app.get("/listings/new",(req,res) => {

    res.render("listings/new.ejs",{page : "new-page"});
});

//Create route
app.post("/listings",asyncWrap(async(req,res,next) => {
        let newListing = new Listing(req.body.listing);
        await newListing.save()
        res.redirect("/listings");
}))

//Edit route
app.get("/listings/:id/edit",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/edit.ejs",{listing,page : "edit-page"});
}))

//Update route
app.put("/listings/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect(`/listings/${id}`);
}))

//Show route
app.get("/listings/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    res.render("listings/show.ejs",{listing,page: "show-page"});
}))

//Delete route
app.delete("/listings/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    res.redirect("/listings");
}))

app.listen(8080,() => {
    console.log("App is listening");
});

// app.all("/*",(req,res,next) => {
//     next(new ExpressError(404,"Page not found!"));
    
// })

app.use((err,req,res,next) => {
    let {statusCode = 500,message = "Some error occured!"} = err;
    res.status(statusCode).send(message);
})