const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');

const commentController = require('../controllers/comment');

/**
 * @api {get} /comment Get Comments
 * @apiName Get Comments
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Unique id of the Comment.
 *
 * @apiSuccess {Object} id Unique id of the Updated Comment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "category": {
 *           "id": 6,
 *           "parentId": null,
 *           "title": "avto1",
 *           "slug": "avto1",
 *           "status": 0,
 *           "updatedAt": "2020-03-04T05:34:50.098Z",
 *           "createdAt": "2020-03-04T05:34:50.098Z"
 *       },
 *       "msg": "Comment added successfully!"
 *      }
 *
 */
router.get('/', commentController.getComments);

/**
 * @api {get} /comment Get Comment
 * @apiName Get Comment
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Unique id of the Comment.
 *
 * @apiSuccess {Object} id Unique id of the Updated Comment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "category": {
 *           "id": 6,
 *           "parentId": null,
 *           "title": "avto1",
 *           "slug": "avto1",
 *           "status": 0,
 *           "updatedAt": "2020-03-04T05:34:50.098Z",
 *           "createdAt": "2020-03-04T05:34:50.098Z"
 *       },
 *       "msg": "Comment added successfully!"
 *      }
 *
 */
router.get('/:commentId', commentController.getComment);

/**
 * @api {post} /comment Add Comment
 * @apiName Add Comment
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Unique id of the Comment.
 *
 * @apiSuccess {Object} id Unique id of the Updated Comment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "category": {
 *           "id": 6,
 *           "parentId": null,
 *           "title": "avto1",
 *           "slug": "avto1",
 *           "status": 0,
 *           "updatedAt": "2020-03-04T05:34:50.098Z",
 *           "createdAt": "2020-03-04T05:34:50.098Z"
 *       },
 *       "msg": "Comment added successfully!"
 *      }
 *
 */
router.post('/', isAuth, commentController.createComment);

/**
 * @api {put} /comment/:id Update Comment
 * @apiName Update Comment
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Unique id of the Comment.
 *
 * @apiSuccess {Object} id Unique id of the Updated Comment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "commentId": 24,
 *         "msg": 'Comment deleted successfully'
 *     }
 *
 * @apiError CommentNotFound The id of the Comment was not found.
 * @apiError Forbidden The comment not belong to current user.
 *
 * @apiErrorExample CommentNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Comment not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission delete this Comment!"
 *     }
 */

router.put('/:commentId', isAuth, commentController.updateComment);

/**
 * @api {delete} /comment/:id Delete Comment
 * @apiName Delete Comment
 * @apiGroup Comment
 *
 * @apiParam {Integer} id Unique id of the Comment.
 *
 * @apiSuccess {Integer} id Unique id of the deleted Comment.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "commentId": 24,
 *         "msg": 'Comment deleted successfully'
 *     }
 *
 * @apiError CommentNotFound The id of the File was not found.
 * @apiError Forbidden The comment not belong to current user.
 *
 * @apiErrorExample CommentNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Comment not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission delete this Comment!"
 *     }
 */
router.delete('/:commentId', isAuth, commentController.deleteComment);

module.exports = router;
