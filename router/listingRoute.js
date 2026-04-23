const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const Listing = require("../models/listing.js");
const {isLoggedIn,isOwner,listingValidate} = require("../middleware.js");

//Listing route
//Index route
router.get("/",asyncWrap(async(req,res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings,page:"index-page"});
    
}));

//New route
router.get("/new",isLoggedIn,(req,res) => {
    res.render("listings/new.ejs",{page : "new-page"});
});

//Create route
router.post("/",listingValidate,isLoggedIn,asyncWrap(async(req,res,next) => {
        
        let newListing = new Listing(req.body.listing);
        newListing.owner = req.user;
        await newListing.save()
        req.flash("success","New listing created");
        res.redirect("/listings");
}))

//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,asyncWrap(async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/edit.ejs",{listing,page : "edit-page"});
}))

//Update route
router.put("/:id",listingValidate,isLoggedIn,isOwner,asyncWrap(async(req,res) => {
    let {id} = req.params;
    
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}`);
}))

//Show route
router.get("/:id",asyncWrap(async(req,res) => {
    let {id} = req.params;
    let listing = await Listing.findById(id)
    .populate(
    {
        path : "reviews",
        populate : {
            path : "author"
        }
    })
    .populate("owner");
    if(!listing){
        req.flash("error","Listing does not exist!");
        return res.redirect("/listings");
    }
    res.render("listings/show.ejs",{listing,page: "show-page"});
}))

//Delete route
router.delete("/:id",isLoggedIn,isOwner,asyncWrap(async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    console.log(deletedListing);
    res.redirect("/listings");
}))

module.exports = router;