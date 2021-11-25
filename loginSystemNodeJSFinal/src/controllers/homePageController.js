let homePageData = async (req, res) => {
    res.send(req.user);
};

module.exports = {
    homePageData: homePageData
};
