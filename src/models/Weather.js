const axios=require('../utils/axios');
const City=require('./City');
const forecastWeather=require('./ForcastWeather');
const CurrentWeather=require('./CurrentWeather');
class Weather{
    constructor() {}
    getData(city,country,weatherType){
        // const key=`${city}`
        // get data from open weather app
        // then 后面是接收数据
        // Promise.all 就是里面有很多个promise  
       return  Promise.all(
        // 两个请求 一个是 current 一个是forcast
        // axios.get(`/weather?q=${city},${cc}`),
        // axios.get(`/weather?q=${city},${cc}`)
        getWeatherData(city,country)).then(dataArray=>{
            // getWeatherData(city,country) 这个是一个数组
            // 0 是current 1 是forecast
            const current=dataArray[0].data;
            const forecast=dataArray[1].data;
            const weather={
                // 就是在openweather api 里面只有forecast 才有city{}  
                city:new City(forecast.city),
                current: new CurrentWeather(current),
                forecast: forecast.list.map(i=>new forecastWeather(i))
            };
            filterData(weather,weatherType);
            return weather;
        });
       
       
            
    }
}
module.exports=new Weather();
function filterData(data,weatherType){
   if(weatherType==='current'){
    //  删掉forcast 的内容
       delete data.forecast;
   }
   if(weatherType==='forecast'){
       delete data.current;
   }
     
}
function getWeatherData(city,country){
    const queryString=`${city},${country}`;
    const urls=['/weather','/forecast'];
    // map 会显示url 数组内每一个元素被处理后的结果
    return urls.map(i=>{
        return axios.get(i,{params:{q:queryString}})
    })
}
