// 此文件夹专门管理和url weather 相关的 routes
const express=require('express');
const router=express.Router();
// 使用axios 调用open weather app 的数据 因为axios 文件调用了 而且还把函数写进去了
const axios = require('../utils/axios');
// appid 的环境变量
const appid=process.env.appid;
// :cc country code  ：city city name
// 留意 这里的url 不需要再写 api/weather 了 因为routes.js 第11 行那里 已经写了
router.get("/:cc/:city", (req, res) => {
    // res.send("weathersdfs");
    const { cc, city } = req.params;
    // get data from open weather app
    // then 后面是接收数据
    axios.get(`/weather?q=${city},${cc}`)
        .then(response => {
            // 把接收到的数据发到server上面
            res.send(response.data);
        })
        .catch(err => console.log(err));
});

module.exports=router;