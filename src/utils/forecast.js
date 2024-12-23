const request = require('request')
 
 const forecast =  (latitude , longtitude , callback) => {
  const url = "http://api.weatherstack.com/current?access_key=509b021b5ac03c90feb79fd19cb5f5e9&query=37.8267,-122.4233&units=f" + latitude + "," + longtitude
   request ({url:url , json:true },(error , response) => {
    if(error){
     callback('unable to connect to weather service ' , undefined)
    }else if (response.body.error) {
     callback('unable to find location',undefined)
    }else {
     console.log(undefined,response.body.current.weather_descriptions[0] + ". it is curently " + response.body.current.temperature +" degrees out . It feels like "+ response.body.current.feelslike + " degrees out")
    }
   })

 }

 module.exports = forecast