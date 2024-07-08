const multer = require("multer");
const path = require("path");

const multerStorgeHandle = (folderName) => {
    const storage = multer.diskStorage({
        destination: function (req, res, cb) {
            return cb(null, path.join(__dirname, `../public/upload/${folderName}`));
        },
        filename: (req, file, cb) => {
            return cb(
                null,
                `${file.fieldname}-${file.originalname}`
            );
        },
    });
    return storage;
};

const uploadMulter = (folder) => {
    return multer({
        storage: multerStorgeHandle(folder),
    });
};

module.exports = uploadMulter;