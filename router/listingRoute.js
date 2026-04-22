const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const {listingSchema} = require("../Schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

const listingValidate = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",")
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
}

//Listing route
//Index route
router.get("/",asyncWrap(async(req,res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings,page:"index-page"});
    
}));

//New route
router.get("/new",(req,res) => {

    res.render("listings/new.ejs",{page : "new-page"});
});

//Create route
router.post("/",listingValidate,asyncWrap(async(req,res,next) => {
        
        let newListing = new Listing(req.body.listing);
        await newListing.save()
        req.flash("success","New listing created");
        res.redirect("/listings");
}))

//Edit route
router.get("/:id/edit",asyncWrap(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("failure","Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing,page : "edit-page"});
}))

//Update route
router.put("/:id",listingValidate,asyncWrap(async(req,res) => {
    let {id} = req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}`);
}))

//Show route
router.get("/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id).populate("reviews");
    if(!listing){
        req.flash("failure","Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing,page: "show-page"});
}))

//Delete route
router.delete("/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    console.log(deletedListing);
    res.redirect("/listings");
}))

module.exports = router;