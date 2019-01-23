// 得先安装 pm2 包这个文件是用来 deploy(部署的)
module.exports={
    apps:[
        {
            name:'weather-app',
            script:'./src/index.js',
            //这个就是可以开多少核 我是4核cpu max 就能开4个
            instances:'max',
            env_production:{
                NODE_ENV:'production'
            }
        }
    ]
}
//下一步在package.json scipt 里面的start