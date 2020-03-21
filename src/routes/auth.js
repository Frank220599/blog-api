const express = require('express');
const router = express.Router();

const validate = require('../middlewares/validate');
const authController = require('../controllers/auth');
const errorHandler = require('../middlewares/errorHandler');

/**
 * @api {post} /auth/signup Signup
 * @apiName Sign up
 * @apiGroup Authentication
 *
 * @apiParam {Email} email Users email.
 * @apiParam {String} password User password.
 * @apiParam {String} firstName User first name.
 * @apiParam {String} lastName User last name.
 * @apiParam {Date} birthtime User birth time.
 * @apiParam {Number} phone User phone number.
 *
 * @apiSuccess {Integer} id id of the User.
 * @apiSuccess {String} email Email of the User.
 * @apiSuccess {String} firstName First name of the User.
 * @apiSuccess {String} lastName Last name of the User.
 * @apiSuccess {Integer} status status of the User.
 * @apiSuccess {Integer} role Role of the User.
 * @apiSuccess {Date} updatedAt Updated time of the User.
 * @apiSuccess {Date} createdAt Created time of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "user": {
 *           "id": 1,
 *           "email": "mr.frank220599@gmail.com",
 *           "firstName": "farrux",
 *           "lastName": "zokirov",
 *           "status": 0,
 *           "role": 0,
 *           "updatedAt": "2020-02-27T07:32:04.074Z",
 *           "createdAt": "2020-02-27T07:32:04.074Z"
 *       },
 *       "msg": "Your email and password send to your email address!"
 *   }
 *
 * @apiError EmailExist E-mail already in use.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 422 Not Found
 *    {
 *      "errors": {
 *          "email": "E-mail already in use"
 *       }
 *    }
 *
 */
router.post('/signup', [
    validate.isUserNotExist(),
    validate.password(),
    errorHandler
], authController.signup);


/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Authentication
 *
 * @apiParam {Email} email email.
 * @apiParam {String} password password.
 *
 * @apiSuccess {Text} token access token.
 * @apiSuccess {Object} user  User information.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1yLmZyYW5rMjIwNTk5QGdtYWlsLmNvbSIsInVzZXJJZCI6MSwiaWF0IjoxNTgyNzg5ODk1LCJleHAiOjE1ODI3OTM0OTV9.O5AcMJKTopJJrVx3jTJSTApqeYjlrbnGNsoc0flANk4",
 *       "user": {
 *           "id": 1,
 *           "email": "mr.frank220599@gmail.com",
 *           "firstName": "farrux",
 *           "lastName": "zokirov",
 *           "role": 0,
 *           "status": "0",
 *           "birthtime": null,
 *           "phone": null
 *       }
 *     }
 *
 * @apiError UserNotFound The email of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "UserNotFound"
 *     }
 */
router.post('/login', [
    validate.isUserExist(),
    validate.password(),
    errorHandler
], authController.login);


module.exports = router;


