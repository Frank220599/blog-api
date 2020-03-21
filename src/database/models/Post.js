module.exports = (sequelize, {STRING, TEXT}) => {
    const Post = sequelize.define('Post', {
        title: {
            type: STRING,
            allowNull: false,
        },
        slug: {
            type: STRING,
            allowNull: false,
        },
        contentRaw: {
            type: TEXT,
            allowNull: false,
        },
        contentHTML: {
            type: TEXT,
            allowNull: false,
        },
        status: {
            type: STRING,
            allowNull: false,
        }
    }, {
        timestamp: true,
        paranoid: true,
    });
    Post.associate = models => {
        Post.belongsTo(models.User, {
            foreignKey: 'userId',
            as: 'author'
        });
        Post.belongsTo(models.File, {
            foreignKey: 'fileId',
            as: 'file'
        });
        Post.belongsTo(models.Category, {
            foreignKey: 'categoryId',
            as: 'category'
        });
    };
    return Post
};






