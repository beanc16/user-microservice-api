const Joi = require("joi");



// String ends in: .png, .jpg, etc.
const imageUrlRegex = /\.(png|jpg|jpeg|jpe|jfif|gif|exif|tiff|tif|bmp|ppm|pgm|pbm|pfm|pnm|webp|heif|bat|spiff|bpg|deep|drw|ecw|fits|flif|ico|ilbm|img|mng|exr|hdr|data|raw|sgi|rgb|rgba|bw|icon|tga)$/;

const pictureUrlString = Joi.string().uri({
    // URLs starting with http or https
    scheme: [
      /https?/,
      /http?/
    ],
}).regex(imageUrlRegex, "url-ends-with-image-file-extension");

const pictureUrlStringRequired = pictureUrlString.required();



module.exports = {
    pictureUrlString,
    pictureUrlStringRequired,
};
