const cloudinary = require("cloudinary").v2

cloudinary.config({
    cloud_name: "ddbvfin01s",
    api_key: 383137647465343,
    api_secret:"9B6vv95wNuzLI78w6ehPox71TVA"
})

module.exports = cloudinary;