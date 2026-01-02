const cloudinary = require("../config/cloudinary");

exports.downloadPdf = (req, res) => {
  try {
    const { publicId } = req.params;

    console.log("PUBLIC ID RECEIVED:", publicId);
    console.log("CLOUD NAME:", process.env.CLOUDINARY_CLOUD_NAME);

    const url = cloudinary.utils.private_download_url(
      publicId,
      "pdf",
      {
        resource_type: "raw",
        expires_at: Math.floor(Date.now() / 1000) + 300,
      }
    );

    res.json({
      success: true,
      downloadUrl: url,
    });

  } catch (err) {
    console.error("CLOUDINARY ERROR:", err);
    res.status(500).json({
      success: false,
      message: "PDF download failed",
      error: err.message,
    });
  }
};
