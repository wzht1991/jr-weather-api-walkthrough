// 这个file 专门用来处理所有的 response
module.exports=(res,code,message,data)=>{
    res.status(code).json({
        // status 里面的code
        status: code===200?'success':'error',
        message,
        data
    })
}