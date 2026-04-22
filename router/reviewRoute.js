const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const ExpressError = require("../utils/ExpressError.js");
const {reviewSchema} = require("../Schema.js");
const Listing = require("../models/listing.js");
const Review = require("../models/review.js");

const reviewValidate = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",")
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
}

//Reviews
//Post Route
router.post("/",reviewValidate,asyncWrap(async(req,res) => {
    let listing = await Listing.findById(req.params.id);
    let newReview = new Review(req.body.review);
    
    listing.reviews.push(newReview);

    await newReview.save();
    await listing.save();

    req.flash("success","New review added");

    res.redirect(`/listings/${listing._id}`);
}))

//Delete route
router.delete("/:reviewId",asyncWrap(async(req,res) => {
    let {id,reviewId} = req.params;
    await Listing.findByIdAndUpdate(id,{$pull : {reviews : reviewId}});
    await Review.findByIdAndDelete(reviewId);

    req.flash("success","review deleted");

    res.redirect(`/listings/${id}`)
}))

module.exports = router;