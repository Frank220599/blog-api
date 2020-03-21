const category = (sequelize, {STRING, INTEGER}) =>
    sequelize.define('Category', {
        parentId: {
            allowNull: true,
            type: INTEGER,
        },
        title: {
            type: STRING,
            allowNull: false,
            unique: true
        },
        slug: {
            type: STRING,
            allowNull: false,
        },
        status: {
            type: STRING,
            default: 0,
            allowNull: false,
        },
    }, {
        timestamp: true,
        paranoid: true,
    });


module.exports = category;
