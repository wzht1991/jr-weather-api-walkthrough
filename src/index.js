// 这样他就会寻找.env 文件并且把内容读取出来 注意一定要在引入routes 文件前 引入 不然的话会undefined 最保险是放在第一行！！！
require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');
// 解决CORS problem 就是做前端的时候浏览器会挡住我们搜索结果的问题
// 得安装cors 包
const cors=require('cors');  
const logger=require('./utils/logger');
const notFoundHandler=require('./middlewares/notFound');
const errorHandler=require('./middlewares/errorhandler');
const app = express();
app.use(helmet());
app.use(cors());
if(process.env.NODE_ENV==='development'){
    app.use(morgan("dev"));
}else{
    app.use(morgan("common"));
}

// 引入routes 文件
const routes=require("./routes");
// 引入端口号 要是没有设置过端口号那么就是3000
var PORT= process.env.PORT||3000;
// 所有路径都使用routes 文件
app.use(routes);
app.use(errorHandler);
// 如果上面哪一行的路径不存在就会跳到这里
app.use(notFoundHandler);
// 端口号 是无法用固定的端口号的 因为有可能3000 被占用了
app.listen(PORT, () =>logger.info(`app listen in port ${PORT}`));