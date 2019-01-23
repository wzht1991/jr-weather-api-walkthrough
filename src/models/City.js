// just save the details of class city
class City{
    constructor(rawData){
        // name。。。 这些都是在open weather API 出来的
        // 哪个jason 格式的结果里面有 
        this.name=rawData.name;
        this.coord=rawData.coord;
        this.country=rawData.country;
        this.population=rawData.population;
    }
}
 module.exports=City;