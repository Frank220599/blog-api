const {validationResult} = require("express-validator");

const errorHandler = (req, res, next) => {
    const errors = validationResult(req);
    let validationErrors = {};
    if (!errors.isEmpty()) {
        errors.array().map(err => validationErrors[err.param] = err.msg);
        return res.status(422).json({
            errors: validationErrors
        });
    }
    next()
};

module.exports = errorHandler;
