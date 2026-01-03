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
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/Unit-1 Quantum Mechanics  (1).pdf", "notes/physics/unit1");
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/Unit-2 Electromagnetic Theory  (1).pdf", "notes/physics/unit2");
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/Unit-3- Interference .pdf", "notes/physics/unit3");
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/Unit 4 - Fiber Optics and LASERS .pdf", "notes/physics/unit4");
uploadPDF("/home/gaurav/Desktop/work/Notes-Project/backend/Unit-5 Superconductivity and Nanomaterials.pdf", "notes/physics/unit5");
