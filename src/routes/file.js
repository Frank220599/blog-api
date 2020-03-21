const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');
const upload = require('../middlewares/upload');

const fileController = require('../controllers/file');

// router.get('/', fileController.getFiles);
// router.get('/:fileId', fileController.getFile);


/**
 * @api {delete} /file Upload File
 * @apiName Upload Files
 * @apiGroup File
 *
 * @apiParam {Binary} file new File .
 *
 * @apiSuccess {String} fieldname fieldname of the File.
 * @apiSuccess {String} originalname Original name of the File.
 * @apiSuccess {String} type Type of the File.
 * @apiSuccess {String} destination destination of the File.
 * @apiSuccess {String} filename filename of the File.
 * @apiSuccess {String} path path of the File.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *         "fieldname": 'file',
 *         'originalname': 'slider.png',
 *         "type": 'image/png',
 *         "filename": 'k7bgwcng.png',
 *         "path": 'uploads\k7bgwcng.png',
 *         "size": 83848
 *     }
 *
 *
 * @apiError Forbidden The post not belong to current user.
 *
 * @apiErrorExample FileNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "File not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission delete this file!"
 *     }
 */
router.post('/',
    upload('uploads', ['image/png', 'image/jpg', "image/jpeg"]).single('file'),
    fileController.createFile);

/**
 * @api {delete} /file/:id Update File
 * @apiName Update File
 * @apiGroup File
 *
 * @apiParam {Binary} file new File .
 *
 * @apiSuccess {String} fieldname fieldname of the File.
 * @apiSuccess {String} originalname Original name of the File.
 * @apiSuccess {String} type Type of the File.
 * @apiSuccess {String} destination destination of the File.
 * @apiSuccess {String} filename filename of the File.
 * @apiSuccess {String} path path of the File.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *         "fieldname": 'file',
 *         "originalname": 'slider.png',
 *         "type": 'image/png',
 *         "filename": 'k7bgwcng.png',
 *         "path": 'uploads\k7bgwcng.png',
 *         "size": 83848
 *     }
 *
 * @apiError FileNotFound The id of the File was not found.
 * @apiError Forbidden The post not belong to current user.
 *
 * @apiErrorExample FileNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "File not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission update this file!"
 *     }
 */
router.put('/:fileId', isAuth, fileController.updateFile);

/**
 * @api {delete} /file/:id Delete File
 * @apiName Delete File
 * @apiGroup File
 *
 * @apiParam {Integer} id Unique id of the file.
 *
 * @apiSuccess {Integer} id Unique id of the deleted file.

 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "fileId": 24,
 *         "msg": 'File deleted successfully'
 *     }
 *
 * @apiError FileNotFound The id of the File was not found.
 * @apiError Forbidden The file not belong to current user.
 *
 * @apiErrorExample FileNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "File not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission delete this file!"
 *     }
 */
router.delete('/:fileId', isAuth, fileController.deleteFile);

module.exports = router;