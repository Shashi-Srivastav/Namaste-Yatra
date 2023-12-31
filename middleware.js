const Listing = require("./models/listing");
const Review = require("./models/review");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema, reviewSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        req.session.redirectUrl = req.originalUrl;
        req.flash("error", "you must be logged in to create new listing!");
        return res.redirect("/login");
    }
    next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
    if (req.session.redirectUrl) {
        res.locals.redirectUrl = req.session.redirectUrl;
    }
    next();
};


module.exports.isOwner = async (req, res, next) => {
    let { id } = req.params;
    let listing = await Listing.findById(id);
    if (!listing.owner.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the owner of this listing");
        return res.redirect(`/listings/${id}`);
    }
    next();
};


module.exports.validateListing = (req, res, next) => {
        let { error } = listingSchema.validate(req.body);
        if (error) {
            let errMsg = error.details.map((el) => el.message).join(",");
            throw new ExpressError(400, errMsg);
        } else {
            next();
        }
    };

module.exports.validateReview = (req, res, next) => {
    let { error } = reviewSchema.validate(req.body);
    if (error) {
        let errMsg = error.details.map((el) => el.message).join(",");
        throw new ExpressError(400, errMsg);
    } else {
        next();
    }
};

module.exports.isReviewAuthor = async (req, res, next) => {
    let { id,reviewId } = req.params;
    let review = await Review.findById(reviewId);
    if (!review.author.equals(res.locals.currUser._id)) {
        req.flash("error", "You are not the author of this review");
        return res.redirect(`/listings/${id}`);
    }
    next();
};






// <input type="file" id="imageInput" accept="image/*">
// <button id="uploadButton">Upload</button>
// <div id="errorContainer"></div>

{/* <script>
  document.getElementById('uploadButton').addEventListener('click', function () {
    const fileInput = document.getElementById('imageInput');
    const errorContainer = document.getElementById('errorContainer');
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes

    if (fileInput.files.length === 0) {
      errorContainer.innerText = 'Please select an image to upload.';
      return;
    }

    const file = fileInput.files[0];

    if (file.size > maxSize) {
      errorContainer.innerText = 'File size exceeds the limit (5MB).';
      return;
    }

    Continue with the upload to Cloudinary
    You can use JavaScript to initiate the upload to Cloudinary here.

    Reset the error message
    errorContainer.innerText = '';
  });
</script> */}