const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const {reviewValidate,isLoggedIn,isReviewAuthor} = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

//Reviews
//Post Route
router.post("/",reviewValidate,isLoggedIn,asyncWrap(reviewController.postReview))

//Delete route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,asyncWrap(reviewController.destroyReview))

module.exports = router;