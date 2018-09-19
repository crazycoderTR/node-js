function getLocation(){
    return new Promise((resolve, reject) => {
        resolve('İstanbul');
    })
}

function getWeather(location){
    return new Promise((resolve, reject) => {
        resolve("Temperature in "+ location +" is 22.96 degrees");
    })
}

getLocation().then((location) => {
    return getWeather(location);
    /* The returned value is sent as data to the next then statements. */
}).then((currentWeather) => {
    console.log(currentWeather);
});