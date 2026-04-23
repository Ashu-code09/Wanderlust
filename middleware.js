const Listing = require("./models/listing");
const {listingSchema,reviewSchema} = require("./Schema.js");
const ExpressError = require("./utils/ExpressError.js");
const Review = require("./models/review.js");

module.exports.isLoggedIn = (req,res,next) => {{
    req.session.originalUrl = req.originalUrl;
    console.log("original url = ",req.originalUrl,req.method);
    if (!req.isAuthenticated()){
        req.flash("error","You must be logged in!");
        return res.redirect("/login");
    }
    next();
}}

module.exports.getRedirectUrl = (req,res,next) => {
    res.locals.redirectUrl = req.session.originalUrl || "/listings";
    next();
}

module.exports.isOwner = async (req,res,next) => {
    let {id} = req.params;
    let listing = await Listing.findById(id);
    if(!listing.owner.equals(res.locals.currUser._id)){
        req.flash("error","You are not the owner of this listing!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.isReviewAuthor = async (req,res,next) => {
    let {id,reviewId} = req.params;
    let review = await Review.findById(reviewId);
    if(!review.author._id.equals(res.locals.currUser._id)){
        req.flash("error","You are not the author of this review!");
        return res.redirect(`/listings/${id}`);
    }
    next();
}

module.exports.listingValidate = (req,res,next) => {
    let {error} = listingSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",")
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
}

module.exports.reviewValidate = (req,res,next) => {
    let {error} = reviewSchema.validate(req.body);
        if(error){
            let errMsg = error.details.map((el) => el.message).join(",")
            throw new ExpressError(400,errMsg);
        }else{
            next();
        }
}