// 这是处理response 的文件
const responseFormatter=require('../utils/responseFromatter'); 
module.exports=(req,res,next)=>
// {
    // res.send('not found');
// };
responseFormatter(res,404,"api end points not found",null);