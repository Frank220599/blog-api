const slugify = require("slugify");

const {Category} = require('../database/models');

class CategoryController {
    getCategories = async (req, res, next) => {
        try {
            let categories = await Category.findAll();
            await res.json({
                categories,
                msg: 'Categories fetched successfully!',
            })
        } catch (e) {
            await res.json({
                error: e.msg
            })
        }
    };

    getCategory = async (req, res, next) => {
        try {
            const {categoryId} = req.params;
            if (categoryId) {
                const file = await File.findByPk(categoryId);
                await res.json({
                    file,
                    msg: 'Category fetched successfully!'
                })
            }
        } catch (e) {
            await res.json({
                error: e
            })
        }
    };

    createCategory = async (req, res, next) => {
        try {
            const {
                parentId,
                title,
            } = req.body;
            const category = await Category.create({
                parentId: +parentId || null,
                title,
                slug: slugify(title),
                status: 0,
            });
            await res.status(201).json({
                category,
                msg: 'File created successfully!'
            })
        } catch (e) {
            await res.json({
                error: e
            });
        }
    };

    // TODO finish update category
    // updateFile = async (req, res, next) => {
    //     try {
    //         const {categoryId} = req.params;
    //         const {title, slug, contentRaw, contentHTML} = req.body;
    //         if (categoryId) {
    //             const file = await Category.findByPk(commentId);
    //             await file.update({title, slug, contentRaw, contentHTML});
    //             await res.json({
    //                 file,
    //                 msg: 'File updated successfully!'
    //             })
    //         }
    //     } catch (e) {
    //         await res.json({
    //             error: e
    //         });
    //         throw new Error();
    //     }
    // };

    // TODO finish delete catefogry
    // deleteFile = async (req, res, next) => {
    //     try {
    //         const {fileId} = req.params;
    //         if (fileId) {
    //             const file = await File.deleteFile(fileId);
    //             await fileUtil.deleteFile('fileId');
    //             await res.json({
    //                 file,
    //                 msg: 'File deleted successfully!'
    //             })
    //         }
    //     } catch (e) {
    //         throw new Error();
    //     }
    // };


}


module.exports = new CategoryController;








