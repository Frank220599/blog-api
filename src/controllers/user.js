const {User} = require('../database/models');
const queryBuilder = require('../utils/queryBuilder');

class UserController {
    getUsers = async (req, res, next) => {
        let posts;
        try {
            posts = await User.findAll(queryBuilder(req));
            res.json({
                posts,
                msg: 'Users fetched successfully!'
            })
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    getUser = async (req, res, next) => {
        try {
            const {userId} = req.params;
            if (userId) {
                const user = await User.findByPk(userId);
                if (user) {
                    await res.json({
                        user: {
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                            status: user.status,
                            birthtime: user.birthtime,
                            phone: user.phone,
                        },
                        msg: 'User fetched successfully!'
                    })
                } else {
                    res.statusCode = 404;
                    throw new Error('User not found!')
                }
            }
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    updateUser = async (req, res, next) => {
        try {
            const user = req.user;
            const {lastName, firstName, phone, birthtime} = req.body;
            await user.update({
                lastName: lastName || user.lastName,
                firstName: firstName || user.firstName,
                phone: phone || user.phone,
                birth: birthtime || user.birth
            });
            const updatedUser = {...user.dataValues};
            delete updatedUser.password;
            await res.json({
                user: updatedUser,
                msg: "User updated successfully!"
            })
        } catch (e) {
            await res.json({
                error: e.msg
            })
        }
    };

    deleteUser = async (req, res, next) => {
        try {
            const {userId} = req.params;
            if (userId) {
                const user = await User.findByPk(userId);
                if (!user) {
                    res.statusCode = 404;
                    throw new Error('User not found!')
                }
                if (user.userId === req.user.id && user) {
                    await user.destroy()
                } else {
                    res.statusCode = 403;
                    throw new Error('You have not permission delete this user!')
                }
                await res.json({
                    userId: +userId,
                    msg: 'User deleted successfully!'
                })
            }
        } catch (e) {
            res.json({
                error: e.message,
            });
        }
    };

}

module.exports = new UserController;








