const multer = require('multer');
const uniqid = require('uniqid');
const path = require('path');

// multer conf
const fileStorage = (folderName) => multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, folderName)
    },
    filename: (req, file, cb) => {
        cb(null, uniqid.time() + path.extname(file.originalname))
    }
});

const fileFilter = (fileTypes) => (req, file, cb) => {
    for (fileType of fileTypes) {
        if (file.mimetype === fileType) {
            cb(null, true)
        } else {
            cb(null, false)
        }
    }
};

const upload = (folderName, fileTypes) => multer({
    storage: fileStorage(folderName),
    fileFilter: fileFilter(fileTypes)
});

module.exports = upload;