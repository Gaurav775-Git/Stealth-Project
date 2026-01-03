require('dotenv').config()
const cloudinary = require("cloudinary").v2;
const path = require("path");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

async function uploadPDF() {
  const filePath = "/home/gaurav/Desktop/work/Notes-Project/backend/PYTHON U-1 ONE SHOT NOTES.pdf";

  try {
    const result = await cloudinary.uploader.upload(filePath, {
      resource_type: "raw",         // ✅ MUST be raw
      public_id: "notes/math/unit1", // 👈 exact publicId
      overwrite: true,
    });
    console.log("Uploaded:", result.secure_url);
  } catch (err) {
    console.error("Upload failed:", err);
  }
}

uploadPDF();
