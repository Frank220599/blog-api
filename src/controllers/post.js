const {Post} = require('../database/models');
const queryBuilder = require('../utils/queryBuilder');
const slugify = require('slugify');

class PostController {
    getPosts = async (req, res, next) => {
        try {
            let {count, rows} = await Post.findAndCountAll(queryBuilder(req, count));
            await res.json({
                posts: rows,
                _metadata: req._metadata,
                msg: 'Posts fetched successfully!',
            })
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    getPost = async (req, res, next) => {
        try {
            const {postId} = req.params;
            if (postId) {
                const post = await Post.findByPk(postId, {
                    include: 'file'
                });
                await res.json({
                    post,
                    msg: 'Post fetched successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    createPost = async (req, res, next) => {
        try {
            const {title, contentRaw, contentHTML, categoryId, fileId} = req.body;
            const post = await req.user.createPost({
                title,
                slug: slugify(title),
                contentRaw,
                contentHTML,
                status: 0,
                categoryId: +categoryId,
                fileId: +fileId || null,
            });
            res.statusCode = 201;
            await res.status(201).json({
                post,
                msg: 'Post created successfully!'
            })
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    updatePost = async (req, res, next) => {
        try {
            const {postId} = req.params;
            const {title, slug, contentRaw, contentHTML} = req.body;
            if (postId) {
                const post = await req.user.updatePost(postId);
                await post.update({title, slug, contentRaw, contentHTML});
                await res.json({
                    post,
                    msg: 'Post updated successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e.message
            })
        }
    };

    deletePost = async (req, res, next) => {
        try {
            const {postId} = req.params;
            if (postId) {
                const post = await Post.findByPk(postId);
                if (!post) {
                    res.statusCode = 404;
                    throw new Error('Post not found!')
                }
                if (post.userId === req.user.id && post) {
                    await post.destroy()
                } else {
                    res.statusCode = 403;
                    throw new Error('You have not permission delete this post!')
                }
                await res.json({
                    postId: +postId,
                    msg: 'Post deleted successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e.message,
            });
        }
    };
}


module.exports = new PostController;








