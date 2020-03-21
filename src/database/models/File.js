const file = (sequelize, {STRING, BIGINT}) =>
    sequelize.define('File', {
        fileName: {
            type: STRING,
            allowNull: false,
        },
        originalName: {
            type: STRING,
            allowNull: false,
        },
        type: {
            type: STRING,
            allowNull: false,
        },
        path: {
            type: STRING,
            allowNull: false,
        },
        size: {
            type: BIGINT,
            allowNull: false,
        }
    }, {
        timestamp: true,
        paranoid: true,
    });


module.exports = file;



