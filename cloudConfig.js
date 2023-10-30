const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer'); // Import multer

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

// Set a storage object with your Cloudinary settings
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'wanderlust_DEV',
        allowedFormats: ["png", "jpg", "jpeg"],
    },
});

// Create a multer instance
const upload = multer({
    storage: storage,
    // Add a file size limit check (2MB = 2 * 1024 * 1024 bytes)
    limits: { fileSize: 2 * 1024 * 1024 },
}).single('image'); // Use single file upload

// Middleware for checking the file size before uploading to Cloudinary
const fileSizeLimit = (req, res, next) => {
  if (req.file && req.file.size > 2 * 1024 * 1024) {
      req.flash("error", "File size too large. Max file size is 2MB.");
      return res.redirect("/listings/new"); // Redirect to the new listing page
  }
  next();
};

module.exports = {
    cloudinary,
    storage,
    fileSizeLimit, // Export the middleware for use in your routes/controllers
};
