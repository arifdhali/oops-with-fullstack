const multer = require("multer");
const path = require("path");

const multerStorgeHandle = (folderName) => {
    return multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, path.join(__dirname, `../public/upload/${folderName}`));
        },
        filename: (req, file, cb) => {
            cb(null, `${file.fieldname}-${Date.now()}-${file.originalname}`);
        }
    });
};

const fileFilter = (req, file, cb) => {
    const allowedMimeTypes = ['image/jpeg', 'image/png'];
    if (allowedMimeTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(new Error('Invalid file type. Only JPG and PNG are allowed.'), false);
    }
};

const uploadMulter = (folder) => {
    return multer({
        storage: multerStorgeHandle(folder),
        fileFilter: fileFilter
    });
};

module.exports = uploadMulter;
