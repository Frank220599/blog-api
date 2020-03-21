const {User} = require('../database/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const sendmail = require("sendmail");


class AccountController {
    forgotPassword = async (req, res, next) => {
        try {
            const email = req.body.email;
            //get user from validation
            const user = req.user;
            const token = await jwt.sign({
                email: user.email,
                userId: user.id,
            }, 'reset', {expiresIn: '1h'});
            await sendmail({
                to: email,
                subject: 'Password Reset Confirmation',
                text: token
            });
            req.user = null;
            await res.json({
                msg: `Confirmation sent to ${email}`
            })
        } catch (e) {
            await res.json({
                error: e
            });
        }
    };

    resetPassword = async (req, res, next) => {
        try {
            const decodedToken = await jwt.verify(req.query.reset_token, 'reset');
            if (decodedToken) {
                const user = await User.findOne({where: {email: decodedToken.email}});
                const password = req.body.password;
                const hashedPassword = await bcrypt.hash(password, 12);
                await user.update({
                    password: hashedPassword
                });
                await res.json({msg: 'Password updated successfully'})
            } else {
                throw new Error('Expired or invalid reset token!')
            }
        } catch (e) {
            await res.json({
                error: e.message
            });
        }
    };

    changePassword = async (req, res, next) => {
        try {
            const user = req.user;
            const {oldPassword, newPassword} = req.body;
            const isEqual = await bcrypt.compare(oldPassword, user.password);
            if (!isEqual) throw 'Please make sure that old password is correct';
            const hashedPassword = await bcrypt.hash(newPassword, 12);
            await user.update({password: hashedPassword});
            await res.json({msg: 'Password updated successfully'})
        } catch (e) {
            await res.json({
                error: e
            });
        }
    };
}

module.exports = new AccountController;