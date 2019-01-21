// 引用这三个function
const {createLogger,format,transports}=require('winston');
const env= process.env.NODE_ENV;
const path=require('path');
const logger = createLogger({
    // 不同的级别官网上有
    level: env==='production'? 'info':'debug',
    // 让他更加漂亮
    format: format.combine(
    format.colorize(),
    format.label({label: path.basename(module.parent.filename)}),
    format.timestamp({format:'YYYY-MM-DD HH:mm:ss'}),
    format.printf(
      info =>`${info.timestamp}[${info.label}] ${info.level}:${info.message}`
    )
    ),
    // 想让你的logger 到哪里去
    transports: [
      new transports.Console(),
    ]
  });
  module.exports=logger;