const {Router} = require("express");

const postRoutes = require("./post");
const userRoutes = require("./user");
const authRoutes = require("./auth");
const accountRoutes = require("./account");
const commentRoutes = require("./comment");
const fileRoutes = require("./file");
const categoryRoutes = require("./category");

const router = Router();
router.use('/auth', authRoutes);
router.use('/account', accountRoutes);
router.use('/post', postRoutes);
router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/file', fileRoutes);
router.use('/category', categoryRoutes);
router.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({message, data});
    next()
});

module.exports = router;



