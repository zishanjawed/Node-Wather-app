const request = require('request')

let  city_name = 'Kolkata';
const APPID = '72159c46331847bcecc297962a5d8039';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&appid=${APPID}`;

request({ url:url, json:true }, (error, response) => {
    
    const data = response.body;
    // console.log(data);
    console.log(`Current Temrature in ${city_name} is ${response.body.main.temp} and the weather is ${response.body.weather[0].main}`)
} );