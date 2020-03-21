const bcrypt = require('bcryptjs');
const {User} = require('../database/models');
const jwt = require('jsonwebtoken');
const sendmail = require('../utils/sendMail');
const errorHandler = require('../middlewares/errorHandler');

class AuthController {
    login = async (req, res, next) => {
        try {
            const {password} = req.body;
            // assigned in isUserNotExist validation
            const user = req.user;
            const isEqual = await bcrypt.compare(password, user.password);
            if (!isEqual) {
                throw new Error('Wrong password or email!')
            }
            const token = await jwt.sign({
                email: user.email,
                userId: user.id,
            }, 'secret', {expiresIn: '1h'});
            const currentUser = {...user.dataValues};
            delete currentUser.password;
            await res.json({
                token,
                user: currentUser
            })
        } catch (e) {
            await res.json({
                error: e.message || e
            });
        }
    };

    signup = async (req, res, next) => {
        try {
            const {email, password, firstName, lastName, status, birthtime, phone} = await req.body;
            const hashedPassword = await bcrypt.hash(password, 12);
            const user = await User.create({
                email,
                password: hashedPassword,
                firstName: firstName.toLowerCase(),
                lastName: lastName.toLowerCase(),
                status: 0,
                role: 0,
                birthtime,
                phone
            });
            await sendmail({
                to: email,
                subject: 'Your login and password to UzbekCoders',
                text: `Login: ${email}, \nPassword: ${password}`
            });
            const newUser = {...user.dataValues};
            delete newUser.password;
            await res.status(201).json({
                user: newUser,
                msg: 'Your email and password send to your email address!'
            })
        } catch (e) {
            await res.json({
                error: e.message
            });
        }
    };
}


module.exports = new AuthController
