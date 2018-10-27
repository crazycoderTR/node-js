"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const request = require("request");
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*----------------------------------------- Original Coding -----------------------------------------*/
module.exports = function(location){
    return new Promise((resolve, reject) => {
        if(!location){
            /* If no location information is given, the error message will be returned. */
            reject('Not Location');
        }
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${location.city.toLowerCase()},${location.country.toLowerCase()}&appid=5c1093a6f30891eda04dc3db21ea5e48&units=metric`;
        request({
            url: url,
            json: true
        }, (error, response, body) => {
            /* If there is a module error, it will return. */
            if(error) resolve("weather not received");
            /* The message will return if there are no errors. */
            else resolve(`Temperature in ${body.name} is ${body.main.temp} degrees ${body.weather[0].description}`);
        });        
    })
}
/*----------------------------------------- Original Coding -----------------------------------------*/