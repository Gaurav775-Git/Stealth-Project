const express = require("express");
const { downloadPdf } = require("../controllers/pdfcontroller");

const router = express.Router();

router.get("/download/:publicId(*)", downloadPdf);

module.exports = router;
