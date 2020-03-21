const {File} = require('../database/models');
const fileUtil = require('../utils/file');
const queryBuilder = require('../utils/queryBuilder');

class FileController {
    getFiles = async (req, res, next) => {
        try {
            const {limit, page} = req.query;
            let {count, rows} = await File.findAndCountAll(queryBuilder(req));
            await res.json({
                files: rows,
                _metadata: {
                    currentPage: +page,
                    pageCount: Math.ceil(count / limit),
                    totalCount: count
                },
                msg: 'Files fetched successfully!',
            })
        } catch (e) {
            await res.json({
                error: e.msg
            })
        }
    };

    getFile = async (req, res, next) => {
        try {
            const {fileId} = req.params;
            if (fileId) {
                const file = await File.findByPk(fileId);
                await res.json({
                    file,
                    msg: 'File fetched successfully!'
                })
            }
        } catch (e) {
            throw new Error();
        }
    };

    createFile = async (req, res, next) => {
        try {
            console.log(req.file);
            const {
                originalname,
                mimetype,
                filename,
                path,
                size
            } = req.file;
            const file = File.create({
                fileName: filename,
                originalName: originalname,
                type: mimetype,
                path,
                size,
            });
            await res.status(201).json({
                file,
                msg: 'File created successfully!'
            })
        } catch (e) {
            await res.json({
                error: e.message
            });
        }
    };

    updateFile = async (req, res, next) => {
        try {
            const {fileId} = req.params;
            const {title, slug, contentRaw, contentHTML} = req.body;
            if (fileId) {
                const file = await File.findByPk(fileId);
                await file.update({title, slug, contentRaw, contentHTML});
                await res.json({
                    file,
                    msg: 'File updated successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e
            });
            throw new Error();
        }
    };

    deleteFile = async (req, res, next) => {
        try {
            const {fileId} = req.params;
            if (fileId) {
                const file = await File.deleteFile(fileId);
                await fileUtil.deleteFile('fileId');
                await res.json({
                    file,
                    msg: 'File deleted successfully!'
                })
            }
        } catch (e) {
            throw new Error();
        }
    };
}

module.exports = new FileController







