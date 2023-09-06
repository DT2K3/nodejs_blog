//Tạo ra function 
const newsRouter = require('./news');
const siteRouter = require('./site');

function route(app) {
    //nhánh xuống newsroute
    app.use('/news', newsRouter)
    //nhánh xuống siterouter
    app.use('/', siteRouter);
}

module.exports = route;