const Express = require("express");
const router = Express.Router({mergeParams:true});
const asyncWrap = require("../utils/asyncWrap");
const {isLoggedIn,isOwner,listingValidate,updateCloudinary} = require("../middleware.js");
const listingController = require("../controllers/listings.js");
const multer  = require('multer')
const {storage} = require("../cloudConfig.js");
const upload = multer({storage});

//Listing route

router.route("/")
//Index route
    .get(asyncWrap(listingController.index))
//Create route
    .post(isLoggedIn,
        listingValidate,
        upload.single("listing[image]"),
        
        asyncWrap(listingController.createListing
            
        ));

//New route
    router.get("/new",isLoggedIn,listingController.renderNewForm);

router.route("/:id")
//Show route
    .get(asyncWrap(listingController.showListing))
//Update route
    .put(listingValidate,
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        updateCloudinary,
        asyncWrap(listingController.updateListing))
//Delete route
    .delete(isLoggedIn,isOwner,asyncWrap(listingController.destroyListing))


//Edit route
router.get("/:id/edit",isLoggedIn,isOwner,asyncWrap(listingController.renderEditForm))


module.exports = router;