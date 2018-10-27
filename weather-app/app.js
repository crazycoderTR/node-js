"use strict";
/*---------------------------------------- Variable Definition ----------------------------------------*/
const weather = require("./weather");
const ipinfo = require("./location");
const argv = require("yargs")
    .command("w", "This is city and country information", function(yargs){
        yargs.options({
            city: {
                demand: true,
                description: "This is city info",
                alias: "l",
                type: "string"
            },
            country: {
                demand: true,
                description: "This is country info",
                alias: "c",
                type: "string"
            }
        }).help('help');
    }).help('help').argv;
/*---------------------------------------- Variable Definition ----------------------------------------*/

/*----------------------------------------- Control Structure -----------------------------------------*/
if(argv._[0] === "w" && argv.city.length > 0 && argv.country.length > 0){
    let location = {
        city: encodeURIComponent(argv.city),
        country: encodeURIComponent(argv.country)   //The structure used to correct bad user input.
    };
    /* Learning the weather according to the location given by Promise structure. */
    weather(location)
        .then((currentWeather) => {
            console.log(currentWeather);
        }).catch((error) => {
            console.log(error);}
        );
}
else{
    /*----------------------------------------- This is done with rope -----------------------------------------*/
    /* Learning user location with IP */
    console.log("Waiting location!");
    ipinfo()
    .then((location) => {
        return weather(location)
            .then((currentWeather) => {
                console.log(currentWeather);
            },(error) => {
                console.log(error);
            });
    }).catch((error) => {
        console.log(error);
    });
}
/*----------------------------------------- Control Structure -----------------------------------------*/