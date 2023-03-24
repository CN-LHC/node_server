
var addArticle = require('./addArticle');
var deleteArticle = require('./deleteArticle');
var editArticle = require('./editArticle');
var articleDetail = require('./articleDetail');
var articleList = require('./articleList');

function register_article_api(app) {
    app.use('/addArticle', addArticle);
    app.use('/deleteArticle', deleteArticle);
    app.use('/editArticle', editArticle);
    app.use('/articleDetail', articleDetail);
    app.use('/articleList', articleList);
}
module.exports = register_article_api