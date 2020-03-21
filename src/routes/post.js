const express = require('express');
const router = express.Router();
const isAuth = require('../middlewares/isAuth');

const postController = require('../controllers/post');

/**
 * @api {post} /post Get Posts
 * @apiName Get posts
 * @apiGroup Post
 *
 * @apiSuccess {Array} posts Collection of Posts.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "posts": [{
 *           "id": 3,
 *           "title": "An interisting post",
 *           "slug": "An-interisting-post",
 *           "contentRaw": "this is interesting post",
 *           "contentHTML": "<h1>The Post</h1>",
 *           "status": 0,
 *           "categoryId": 1,
 *           "fileId": null,
 *           "userId": 1,
 *           "updatedAt": "2020-02-29T08:33:18.812Z",
 *           "createdAt": "2020-02-29T08:33:18.812Z"
 *       }, { ... }],
 *       "msg": "Posts created successfully!"
 *     }
 *
 */
router.get('/', postController.getPosts);

/**
 * @api {post} /post Create Post
 * @apiName Create post
 * @apiGroup Post
 *
 * @apiParam {String} title  title of the post.
 * @apiParam {String} contentRaw  contentRaw of the post.
 * @apiParam {String} contentHTML  contentHTML of the post.
 * @apiParam {Integer} categoryId  categoryId of the post.
 * @apiParam {Integer} fileId  fileId of the post.
 *
 * @apiSuccess {Integer} id id of the post.
 * @apiSuccess {String} title  title of the post.
 * @apiSuccess {String} slug  slug of the post.
 * @apiSuccess {String} contentRaw  contentRaw of the post.
 * @apiSuccess {String} contentHTML  contentHTML of the post.
 * @apiSuccess {Integer} status  status of the post.
 * @apiSuccess {Integer} categoryId  categoryId of the post.
 * @apiSuccess {Integer} fileId  fileId of the post.
 * @apiSuccess {Integer} userId  userId of the post.
 * @apiSuccess {Date} updatedAt Updated time of the Post.
 * @apiSuccess {Date} createdAt Created time of the Post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 201 OK
 *     {
 *       "post": {
 *           "id": 3,
 *           "title": "An interisting post",
 *           "slug": "An-interisting-post",
 *           "contentRaw": "this is interesting post",
 *           "contentHTML": "<h1>The Post</h1>",
 *           "status": 0,
 *           "categoryId": 1,
 *           "fileId": null
 *           "userId": 1,
 *           "updatedAt": "2020-02-29T08:33:18.812Z",
 *           "createdAt": "2020-02-29T08:33:18.812Z"
 *       },
 *       "msg": "Post created successfully!"
 *     }
 *
 */
router.post('/', isAuth, postController.createPost);

/**
 * @api {get} /user/:id Get Post
 * @apiName Get Post
 * @apiGroup Post
 *
 * @apiSuccess {Integer} id id of the post.
 * @apiSuccess {String} title  title of the post.
 * @apiSuccess {String} slug  slug of the post.
 * @apiSuccess {String} contentRaw  contentRaw of the post.
 * @apiSuccess {String} contentHTML  contentHTML of the post.
 * @apiSuccess {Integer} status  status of the post.
 * @apiSuccess {Integer} categoryId  categoryId of the post.
 * @apiSuccess {Integer} fileId  fileId of the post.
 * @apiSuccess {Object} file if fileId is not null file be included in the post.
 * @apiSuccess {Integer} userId  userId of the post.
 * @apiSuccess {Date} updatedAt  updatedAt of the post.
 * @apiSuccess {Date} createdAt  createdAt of the post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "post": {
 *           "id": 3,
 *           "title": "An interisting post",
 *           "slug": "An-interisting-post",
 *           "contentRaw": "this is interesting post",
 *           "contentHTML": "<h1>The Post</h1>",
 *           "status": 0,
 *           "categoryId": 1,
 *           "fileId": 1,
 *           "file": {
 *              "id": 1,
 *              "fileName": "k7bgwcng.png",
 *              "originalName": "slider.png",
 *              "type": "image/png",
 *              "path": "uploads\\k7bgwcng.png",
 *              "size": 83848,
 *              "createdAt": "2020-03-03T05:44:29.000Z",
 *              "updatedAt": "2020-03-03T05:44:29.000Z",
 *              "deletedAt": null
 *           },
 *           "userId": 1,
 *           "updatedAt": "2020-02-29T08:33:18.812Z",
 *           "createdAt": "2020-02-29T08:33:18.812Z"
 *       },
 *       "msg": "Post fetched successfully!"
 *     }
 *
 *
 * @apiError PostNotFound The id of the Post was not found.
 *
 * @apiErrorExample PostNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found!"
 *     }
 *
 */
router.get('/:postId', postController.getPost);

/**
 * @api {put} /user/:id Update Post
 * @apiName Update Post
 * @apiGroup Post
 *
 * @apiParam {String} title  title of the post.
 * @apiParam {String} contentRaw  contentRaw of the post.
 * @apiParam {String} contentHTML  contentHTML of the post.
 * @apiParam {Integer} status  status of the post..
 * @apiParam {Integer} categoryId  categoryId of the post..
 * @apiParam {Integer} fileId  fileId of the post..
 *
 * @apiSuccess {Integer} id id of the post.
 * @apiSuccess {String} title  title of the post.
 * @apiSuccess {String} slug  slug of the post.
 * @apiSuccess {String} contentRaw  contentRaw of the post.
 * @apiSuccess {String} contentHTML  contentHTML of the post.
 * @apiSuccess {Integer} status  status of the post.
 * @apiSuccess {Integer} categoryId  categoryId of the post.
 * @apiSuccess {Integer} fileId  fileId of the post.
 * @apiSuccess {Integer} userId  userId of the post.
 * @apiSuccess {Date} updatedAt  updatedAt of the post.
 * @apiSuccess {Date} createdAt  createdAt of the post.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "firstname": "John",
 *       "lastname": "Doe"
 *     }
 *
 * @apiError PostNotFound The id of the Post was not found.
 * @apiError Forbidden The post not belong to current user.
 *
 * @apiErrorExample PostNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission to update this post!"
 *     }
 */
router.put('/:postId', isAuth, postController.updatePost);

/**
 * @api {delete} /post/:id Delete Post
 * @apiName Delete Post
 * @apiGroup Post
 *
 * @apiParam {Integer} id Users unique ID.
 *
 * @apiSuccess {Integer} id id of the post.
 * @apiSuccess {String} msg  Post deleted successfully!.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "postId": 9,
 *       "msg": "Post deleted successfully!"
 *     }
 *
 * @apiError PostNotFound The id of the Post was not found.
 * @apiError Forbidden The post not belong to current user.
 *
 * @apiErrorExample PostNotFound:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Post not found!"
 *     }
 *
 * @apiErrorExample Forbidden:
 *     HTTP/1.1 403 Forbidden
 *     {
 *       "error": "You have not permission to delete this post!"
 *     }
 */
router.delete('/:postId', isAuth, postController.deletePost);

module.exports = router;
