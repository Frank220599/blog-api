const express = require('express');
const router = express.Router();

const isAuth = require('../middlewares/isAuth');
const validate = require('../middlewares/validate');
const accountController = require('../controllers/account');
const errorHandler = require('../middlewares/errorHandler');

/**
 * @api {post} /account/forgot-password Forgot Password
 * @apiName Forgot Password
 * @apiGroup Account
 *
 * @apiParam {Email} email email.
 *
 * @apiSuccess {String} msg Success message.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "msg": "Confirmation sent to example@gmail.com"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "errors": {
 *            "email": "UserNotFound"
 *        }
 *     }
 */
router.post('/forgot-password', [
    validate.isUserExist(),
    errorHandler
], accountController.forgotPassword);

/**
 * @api {post} /account/reset-password Reset Password
 * @apiName Reset Password
 * @apiGroup Account
 *
 * @apiParam {string} password password.
 * @apiParam {string} confirmPassword Confirmation password.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "errors": {
 *            "email": "UserNotFound"
 *        }
 *     }
 */
router.post('/reset-password', accountController.resetPassword);

/**
 * @api {post} /account/change-password Change Password
 * @apiName Change Password
 * @apiGroup Account
 *
 * @apiParam {string} password password.
 * @apiParam {string} confirmPassword Confirmation password.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *        "errors": {
 *            "email": "UserNotFound"
 *        }
 *     }
 *
 * @apiErrorExample 122:
 *     HTTP/1.1 12 12
 *     {
 *        "errors": {
 *            "email": "UserNotFound"
 *        }
 *     }
 */
router.post('/change-password', isAuth, [
    validate.password({
        field: 'oldPassword',
    }),
    validate.password({
        field: 'newPassword',
        // passwordFieldToCompare: 'confirmNewPassword'
    }),
    validate.password({
        field: 'confirmNewPassword',
    }),
    errorHandler
], accountController.changePassword);

module.exports = router;