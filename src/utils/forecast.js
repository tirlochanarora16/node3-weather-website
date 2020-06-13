const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8ced139fc05d63d2b9fe3cf9b8c89fd0&query='+latitude+','+longitude+'&units=f';

    request({url, json: true}, (error, {body}) => {
        if(error) {
            callback('Unable to connect to weather services!', undefined)
        } else if(body.success === false) {
            callback('Unable to find weather details for the given location. Try another search', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degress out. It feels like ${body.current.feelslike} degrees out.`)
        }
    })
}  

module.exports = forecast