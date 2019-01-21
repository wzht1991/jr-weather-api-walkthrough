// 此文件是用来分流一些代码的 这样index.js 就不会又那么多代码
const express=require('express');
const router=express.Router();
// 引入weather.js
const weatherRoutes=require('./routes/weather');

router.get("/", (Req, res) => {
    res.send("welcome");
});
// 只要以/api/weather 开头的 都调用 weatherRoutes /api/weather也会在查询的时候写进去 所以 weahter 文件 的哪个 就没有必要写/api/weather了
router.use('/api/weather',weatherRoutes)
// 把router 导出来 不然不能被其他文件所require
module.exports=router;
