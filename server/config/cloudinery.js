const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: "871341554644239",
  api_secret: process.env.CLOUD_SECRETE,
  secure: true,
});

module.exports = cloudinary;
