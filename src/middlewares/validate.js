const {body} = require('express-validator');
const {User} = require('../database/models');
const errorMessages = require('../utils/errorMessages');

module.exports = {
    isUserNotExist: ({field = 'email'} = {}) => body(field)
        .trim()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage(errorMessages.emailRequired)
        .bail()
        .isEmail()
        .withMessage(errorMessages.validEmail)
        .bail()
        .custom((value, {req}) => {
            return User.findOne({where: {email: req.body.email}}).then(user => {
                if (user) {
                    throw new Error(errorMessages.userExist);
                }
            });
        }),
    isUserExist: ({field = 'email'} = {}) => body(field)
        .trim()
        .exists({checkFalsy: true, checkNull: true})
        .withMessage(errorMessages.emailRequired)
        .bail()
        .isEmail()
        .withMessage(errorMessages.validEmail)
        .bail()
        .custom((value, {req}) => {
            return User.findOne({where: {email: req.body.email}}).then(user => {
                if (!user) {
                    throw new Error(errorMessages.userNotExist);
                }
                req.user = user;
            });
        }),
    password: (
        {
            field = 'password',
            passwordFieldToCompare,
            minLength = 6,
            maxLength = 26,
            msg = errorMessages.passwordRequired,
            customValidation
        } = {}) =>
        body(field)
            .trim()
            .exists({checkFalsy: true, checkNull: true})
            .withMessage(msg)
            .bail()
            .isLength({min: minLength, max: maxLength})
            .withMessage(errorMessages.passwordMinLength)
            // .if(() => customValidation)
            .if(() => passwordFieldToCompare)
            .custom((value, {req}) => {
                if (value !== req.body[passwordFieldToCompare]) {
                    throw new Error(errorMessages.passwordNotMatch);
                }
            }),
    field: (
        {
            field,
            passwordFieldToCompare,
            minLength = 6,
            maxLength = null,
            msg = `${field} can not be empty`,
            customValidation
        } = {}) =>
        body(field)
            .trim()
            .exists({checkFalsy: true, checkNull: true})
            .withMessage(msg)
            .bail()
            .isLength({min: minLength, max: maxLength})
            .withMessage(`Min length of ${field} is ${minLength}`)
            .if(() => customValidation)
            .custom((value, {req}) => customValidation()),
};