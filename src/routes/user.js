const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');
const userController = require('../controllers/user');

router.get('/', userController.getUsers);

/**
 * @api {get} /user/:id Get user
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} firstName firstName of the User.
 * @apiSuccess {String} lastName lastName of the User.
 * @apiSuccess {Integer} role role of the User.
 * @apiSuccess {Integer} status status of the User.
 * @apiSuccess {Date} birthtime birthtime of the User.
 * @apiSuccess {Integer} phone phone of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     user: {
 *         "id": 1,
 *         "email": "mr.frank225099@gmail.com",
 *         "firstName": "farrux",
 *         "lastName": "zokirov",
 *         "role": 0,
 *         "status": 0,
 *         "birthtime": null,
 *         "phone": null,
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.get('/:userId', userController.getUser);

/**
 * @api {put} /user/:id Update User
 * @apiName UpdateUser
 * @apiGroup User
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email email of the User.
 * @apiSuccess {String} firstName firstName of the User.
 * @apiSuccess {String} lastName lastName of the User.
 * @apiSuccess {Integer} role role of the User.
 * @apiSuccess {Integer} status status of the User.
 * @apiSuccess {Date} birthtime birthtime of the User.
 * @apiSuccess {Integer} phone phone of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     user: {
 *         "id": 1,
 *         "email": "mr.frank225099@gmail.com",
 *         "firstName": "farrux",
 *         "lastName": "zokirov",
 *         "role": 0,
 *         "status": 0,
 *         "birthtime": null,
 *         "phone": null,
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.put('/:userId', isAuth, userController.updateUser);

/**
 * @api {delete} /user/:id Delete User
 * @apiName DeleteUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {Integer} id Unique id of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userId" = 1,
 *       "msg" = "User deleted successfully!"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.delete('/:userId', isAuth, userController.deleteUser);

module.exports = router;
