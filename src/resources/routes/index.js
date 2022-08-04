
const newsRouter = require('./news'); 
const siteRouter = require('./site');

function routes(app) {
    
    app.use("/news", newsRouter); // gọi đến thực hiện -- đi đến tuyến đường cụ thể đã 
    app.use("/", siteRouter); 
}

module.exports = routes;


