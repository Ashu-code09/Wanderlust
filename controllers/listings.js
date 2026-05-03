const Listing = require("../models/listing.js");

module.exports.index = async(req,res) => {
    const allListings = await Listing.find({})
    res.render("listings/index.ejs",{allListings,page:"index-page"});
    
}

module.exports.renderNewForm = (req,res) => {
    res.render("listings/new.ejs",{page : "new-page"});
}

module.exports.createListing = async(req,res,next) => {
    let url = req.file.path;
    let filename = req.file.filename;
    console.log(url,"..",filename)

    const imgData = {
        url : url,
        filename : filename
    }

    let newListing = new Listing({...req.body.listing,image : imgData});
    newListing.owner = req.user;
    await newListing.save()
    console.log(req.body.listing);
    console.log(req.file);
    req.flash("success","New listing created");
    res.redirect("/listings");
}

module.exports.renderEditForm = async(req,res) => {
    let {id} = req.params;
    const listing = await Listing.findById(id);
    if(!listing){
        req.flash("error","Listing does not exist!");
        return res.redirect("/listings");
    }
    let originalImageUrl = listing.image.url;
    originalImageUrl = originalImageUrl.replace("/upload","/upload/ar_1.0,c_fill,w_250/bo_2px_solid_black")
    res.render("listings/edit.ejs",{listing,page : "edit-page",originalImageUrl});
}

module.exports.updateListing = async(req,res) => {
    let {id} = req.params;
    
    let listing = await Listing.findByIdAndUpdate(id,{...req.body.listing});

    if(typeof req.file != "undefined"){
        let url = req.file.path;
        let filename = req.file.filename;

        listing.image = {
            url,filename
        }
        await listing.save();
    }
    req.flash("success","Listing updated");
    res.redirect(`/listings/${id}`);
}

module.exports.showListing = async(req,res) => {
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
}

module.exports.destroyListing = async(req,res) => {
    let {id} = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    req.flash("success","Listing deleted");
    console.log(deletedListing);
    res.redirect("/listings");
}