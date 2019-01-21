// 此文件夹专门管理和url weather 相关的 routes
const express=require('express');
const router=express.Router();
// 使用axios 调用open weather app 的数据
const axios = require('axios');
// appid 的环境变量
const appid=process.env.appid;
// :cc country code  ：city city name
// 留意 这里的url 不需要再写 api/weather 了 因为routes.js 第11 行那里 已经写了
router.get("/:cc/:city", (req, res) => {
    // res.send("weathersdfs");
    const { cc, city } = req.params;
    // get data from open weather app
    // then 后面是接收数据
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=${appid}`)
        .then(response => {
            // 把接收到的数据发到server上面
            res.send(response.data);
        })
        .catch(err => console.log(err));
});

module.exports=router;