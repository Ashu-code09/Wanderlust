const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");
const {reviewValidate,isLoggedIn,isReviewAuthor} = require("../middleware.js");


//Reviews
//Post Route
router.post("/",reviewValidate,isLoggedIn,asyncWrap(async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    
    newReview.author = req.user._id;
    console.log(newReview);
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success","New review added");

    res.redirect(`/listings/${listing._id}`);
}))

//Delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,asyncWrap(async(req,res) => {
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success","review deleted");

    res.redirect(`/listings/${id}`)
}))

module.exports = router;