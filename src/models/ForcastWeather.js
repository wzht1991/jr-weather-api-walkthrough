const CurrentWeather = require('./CurrentWeather')
// 因为两个都差不多 不过forecast 多了一个time 而已 所以可以继承
class ForecastWeather extends CurrentWeather{
    constructor(rawData){
            super(rawData);
            this.time=rawData.dt;
    }
}
module.exports=ForecastWeather;