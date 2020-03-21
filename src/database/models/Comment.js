module.exports = (sequelize, {STRING, TEXT, BIGINT}) => {
    const Comment = sequelize.define('comment', {
        parentId: {
            type: BIGINT,
            allowNull: false,
        },
        slug: {
            type: STRING,
            allowNull: false,
        },
        text: {
            type: TEXT,
            allowNull: false,
        },
        status: {
            type: STRING,
            allowNull: false,
        },
    }, {
        timestamp: true,
        paranoid: true,
    });
    Comment.associate = models => {
        Comment.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'author'
        });
        Comment.belongsTo(models.Post, {
            foreignKey: 'postId',
            as: 'post'
        });
    };
    return Comment;
};





