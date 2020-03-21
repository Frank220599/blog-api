const queryBuilder = (req, count) => {
    const {limit, page, ...restQueryParams} = req.query;
    req._metadata = {
        currentPage: +page,
        pageCount: Math.ceil(count / limit),
        totalCount: count
    };
    return {
        limit: parseInt(limit) || 50,
        offset: parseInt(limit * (page - 1)) || 0,
        where: {
            ...restQueryParams
        }
    }
};

module.exports = queryBuilder;