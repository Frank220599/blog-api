const {Comment} = require('../database/models');
const queryBuilder = require('../utils/queryBuilder');

class CommentController {
     getComments = async (req, res, next) => {
        try {
            const {limit, page} = req.query;
            let {count, rows} = await Comment.findAndCountAll(queryBuilder(req));
            await res.json({
                comments: rows,
                _metadata: {
                    currentPage: +page,
                    pageCount: Math.ceil(count / limit),
                    totalCount: count
                },
                msg: 'Comments fetched successfully!',
            })
        } catch (e) {
            await res.json({
                error: e.msg
            })
        }
    };

     getComment = async (req, res, next) => {
        try {
            const {CommentId} = req.params;
            if (CommentId) {
                const Comment = await Comment.findByPk(CommentId);
                await res.json({
                    Comment,
                    msg: 'Comment fetched successfully!'
                })
            }
        } catch (e) {
            throw new Error();
        }
    };

     createComment = async (req, res, next) => {
        try {
            const {title, contentRaw, contentHTML} = await req.body;
            const Comment = await Comment.create({
                title,
                slug: title.toLowerCase(),
                contentRaw,
                contentHTML,
                status: 0,
                userId: req.userId,
                categories: 1
            });

            await res.status(201).json({
                Comment,
                msg: 'Comment created successfully!'
            })
        } catch (e) {
            await res.json({
                error: e.message
            });
        }
    };

     updateComment = async (req, res, next) => {
        try {
            const {CommentId} = req.params;
            const {title, slug, contentRaw, contentHTML} = req.body;
            console.log(req.body);
            if (CommentId) {
                const Comment = await Comment.findByPk(CommentId);
                await Comment.update({title, slug, contentRaw, contentHTML});
                await res.json({
                    Comment,
                    msg: 'Comment updated successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e
            });
            throw new Error();
        }
    };

     deleteComment = async (req, res, next) => {
        try {
            const {CommentId} = req.params;
            if (CommentId) {
                const Comment = await Comment.deleteComment(CommentId);
                await res.json({
                    Comment,
                    msg: 'Comment deleted successfully!'
                })
            }
        } catch (e) {
            throw new Error();
        }
    };
}


module.exports = new CommentController








