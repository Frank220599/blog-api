'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('users', [{
            firstName: 'Farrux',
            lastName: 'Zokirov',
            email: 'example@gmail.com',
            password: await bcrypt.hash('123456789', 12),
            status: 0,
            phone: 998998845881,
            birthtime: new Date(),
            createdAt: new Date(),
            updatedAt: new Date()
        }], {});
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('users', {
            email: 'example9@gmail.com'
        }, {});
    }
};
