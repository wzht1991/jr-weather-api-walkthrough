// 此文件夹专门管理和url weather 相关的 routes
const express=require('express');
const weather=require('../models/Weather');
// 这是处理response 的文件
const responseFormatter=require('../utils/responseFromatter'); 
const router=express.Router();
// 使用axios 调用open weather app 的数据 因为axios 文件调用了 而且还把函数
const axios = require('../utils/axios');
const countryValidator=require('../middlewares/countryValidator');
// appid 的环境变量
const APPID=process.env.APPID;
// :cc country code  ：city city name
// 留意 这里的url 不需要再写 api/weather 了 因为routes.js 第11 行那里 已经写了
router.get("/:cc/:city",countryValidator, (req, res,next) => {
    // res.send("weathersdfs");
    const { cc, city } = req.params;
    // 用法localhost:3000/api/weather/au/brisbane?weatherType=current 
    const weatherType=req.query.weatherType;
    // 调用weather class 的getdata 方法 respongse 就是weather 返回出来的 weather
    // 用法localhost:3000/api/weather/au/brisbane?weatherType=current 这样子 就会去除掉forecast 的内容
    weather.getData(city,cc,weatherType).then(response => 
    // 因为引入了responseFormatter 所以这里需要变化
    // {
        // 把接收到的数据发到server上面
        // res.send(response);
    // }
    // 因为到了这里 就证明没有错误 所以是200
    responseFormatter(res,200,null,response)
    )
    // .catch(err => console.log(err));
    // 这样子直接就会跳到err handler 在index.js中需要定义error handler
    .catch(next);
});

module.exports=router;