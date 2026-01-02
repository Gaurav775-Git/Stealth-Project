const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Configure your Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadPDF(filePath, publicId) {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",   // THIS IS THE KEY
      type: "private",        // make it private
      public_id: publicId,
    });
    console.log("Upload success:", result.secure_url);
  } catch (err) {
    console.error("Upload failed:", err);
  }
}

// Example usage
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/PYTHON U-1 ONE SHOT NOTES.pdf", "notes/math/unit1");
