const express = require('express');
// 使用axios 调用open weather app 的数据
const axios = require('axios');
const app = express();
app.get("/", (Req, res) => {
    res.send("welcome");
});
// :cc country code  ：city city name
app.get("/api/weather/:cc/:city", (req, res) => {
    // res.send("weathersdfs");
    const { cc, city } = req.params;
    // get data from open weather app
    // then 后面是接收数据
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&appid=70524de0cb2bf075bed8d2716ac3d222`)
        .then(response => {
            // 把接收到的数据发到server上面
            res.send(response.data);
        })
        .catch(err => console.log(err));
});
app.listen(3000, () => console.log(`app listen in port 3000`));