const fs = require('fs');
const path = require("path");

class File {

    static deleteFile(pathFile) {
        const filePath = path.join(__dirname, '..', pathFile);
        fs.unlink(filePath, err => console.log(err))
    }

}

module.exports = File;