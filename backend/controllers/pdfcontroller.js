const cloudinary = require('cloudinary');

exports.downloadPdf = async (req, res) => {
  try {
    const { publicId } = req.params;

    // Generate downloadable PDF URL
    const pdfUrl = cloudinary.url(publicId, {
      resource_type: "raw",
      type: "upload",
      secure: true,
      flags: "attachment",
    });

    return res.status(200).json({
      success: true,
      downloadUrl: pdfUrl,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "PDF download failed",
    });
  }
};
