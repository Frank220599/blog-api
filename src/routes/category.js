const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validate');
const isAuth = require('../middlewares/isAuth');
const categoryController = require('../controllers/category');

/**
 * @api {get} /category Get Categories
 * @apiName Get Categories
 * @apiGroup Category
 *
 * @apiSuccess {Array} categories Collection of Categories.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "categories":
 *           [{
 *               "id": 6,
 *               "parentId": null,
 *               "title": "avto",
 *               "slug": "avto",
 *               "status": "0",
 *               "createdAt": "2020-03-04T05:34:50.000Z",
 *               "updatedAt": "2020-03-04T05:34:50.000Z",
 *               "deletedAt": null
 *            }, { ... }],
 *       "msg": "Categories fetched successfully!"
 *      }
 *
 */
router.get('/', categoryController.getCategories);

/**
 * @api {get} /category/:id Get Category
 * @apiName Get Category
 * @apiGroup Category
 *
 * @apiSuccess {Obje} id id of Categories.
 * @apiSuccess {Obje} parentId parent id of Categories.
 * @apiSuccess {Obje} title Title of Categories.
 * @apiSuccess {Obje} slug slug of Categories.
 * @apiSuccess {Obje} status Status of Categories.
 * @apiSuccess {Date} createdAt Updated time of the Category.
 * @apiSuccess {Date} updatedAt Created time of the Category.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "category": {
 *           "id": 6,
 *           "parentId": null,
 *           "title": "avto",
 *           "slug": "avto",
 *           "status": "0",
 *           "createdAt": "2020-03-04T05:34:50.000Z",
 *           "updatedAt": "2020-03-04T05:34:50.000Z",
 *           "deletedAt": null
 *        },
 *       "msg": "Category fetched successfully!"
 *      }
 *
 */
router.get('/:categoryId', categoryController.getCategory);
router.post('/', [
    validate.field({
        field: 'title'
    })
], categoryController.createCategory);
// router.put('/:fileId', isAuth, fileController.updateFile);
// router.delete('/:fileId', isAuth, fileController.deleteFile);

module.exports = router;
