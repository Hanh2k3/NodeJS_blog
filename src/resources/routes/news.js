const express = require('express');
const routes = express.Router(); // dùng để định nghĩa nên tuyến đường cần tới theo yêu cầu

const newsController = require('../app/controllers/NewsControllers');

routes.use('/:slug', newsController.show);
routes.use('/', newsController.index);

module.exports = routes; // khi export ra thì thằng này đã đc thực thi là đã export cả 2 hàm use ở trên
// từ rotes phù hợp sẽ dẫn đến tuyến đường Controller phù hợp theo yêu cầu
