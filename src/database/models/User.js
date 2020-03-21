module.exports = (sequelize, {STRING, INTEGER, DATE, BIGINT}) => {
    const User = sequelize.define('User', {
        email: {
            type: STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: STRING,
            allowNull: false,
        },
        firstName: {
            type: STRING,
            allowNull: false,
        },
        lastName: {
            type: STRING,
            allowNull: false,
        },
        role: {
            type: INTEGER,
            // allowNull: false
        },
        status: {
            type: STRING,
            allowNull: false,
            default: 0
        },
        birthtime: {
            type: DATE,
            allowNull: true,
        },
        phone: {
            type: BIGINT,
            allowNull: true
        }
    }, {
        timestamp: true,
        paranoid: true,
    });

    User.associate = models => {
        User.hasMany(models.Post, {
            foreignKey: 'userId'
        })
    };

    return User
};

