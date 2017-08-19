var app = require('koa')();
var router = require('koa-router')();

// 首页 —— 广告（超值特惠）
let homeAdData = require('./home/ad.js')
router.get('/api/homead', function *(next) {
    this.body = homeAdData
});





app.use(router.routes())
   .use(router.allowedMethods());

app.listen(3000);
