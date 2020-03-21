const jwt = require('jsonwebtoken');
const {User} = require('../database/models');
module.exports = async (req, res, next) => {
    try {
        const authHeader = await req.get('Authorization');
        if (!authHeader) {
            throw res.status(401).json({
                error: 'Not authenticated!'
            })
        }
        const token = authHeader.split(' ')[1];
        let decodedToken = await jwt.verify(token, 'secret');
        if (!decodedToken) {
            throw res.status(401).json({
                error: 'Not authenticated!'
            })
        }
        req.user = await User.findByPk(decodedToken.userId);
        next()
    } catch (e) {
        throw res.status(500).json({
            error: e.message
        })
    }
};
