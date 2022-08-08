const newsRouter = require('./news');
const siteRouter = require('./site');

function routes(app) {
    // app là exprees của thằng chạy chính của webserver đã đc truyền vào đây

    app.use('/news', newsRouter); // gọi đến thực hiện -- đi đến tuyến đường cụ thể đã
    app.use('/', siteRouter);
}

module.exports = routes;
