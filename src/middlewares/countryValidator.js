// 处理url city打错的错误 同时我们的url 那里就不仅可以写country code 还可以写 country name
// 需要安装country-list
const { getCode, getName } = require('country-list');
const responseFormatter=require('../utils/responseFromatter');
module.exports=(req,res,next)=>{
    const{cc}=req.params;
    // 加入cc 那里只有2个字证明有可能是country code 
    // 这时候需要检测是不是country code
    if(cc.length===2){
        // 如果是true 就证明是country code
        if(getName(cc)){
            return next();
        }

    } 
    // 有可能是cotunrty name
    else{
        if(getCode(cc)){
            req.params.cc=getCode(cc);
            return next();
        } 
    }
      return responseFormatter(res,400,'Invalid country name or country code',null);
}