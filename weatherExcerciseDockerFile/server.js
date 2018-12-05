var soap = require('soap');
var http = require('http');
var fs = require('fs');

var soapService = {
      GlobalWeather: {
        GlobalWeatherSoap: {
          GetWeather: function(args, callback) {
			      console.log("1st weather args: " , args);
                  var weather = fs.readFileSync("./mock/GetWeather",'utf8');
                  callback(weather);
              },
          GetCitiesByCountry: function(args, callback) {
			       console.log("1st args citiesByCountry : " , args);
                   var citiesByCountry = fs.readFileSync("./mock/GetCitiesByCountry",'utf8');
				   callback(citiesByCountry);
              }
        },
        GlobalWeatherSoap12: {
          GetWeather: function(args, callback) {
                  console.log("2nd weather args : " , args);
				  var weather = fs.readFileSync("./mock/GetWeather",'utf8');
				  console.log("2nd weather : " , weather);
                  callback(weather);
              },
          GetCitiesByCountry: function(args, callback) {
			       console.log("2nd args citiesByCountry : " , args);
                   var citiesByCountry = fs.readFileSync("./mock/GetCitiesByCountry",'utf8');
				   callback(citiesByCountry);
              }
        }
      }
    };



var wsdlXml = fs.readFileSync('./wsdl/global-weather.wsdl','utf8');
var server = http.createServer(function(request,response) {
  response.end("404: Not Found: " + request.url);
});
server.listen(8080);
soap.listen(server,'/GlobalWeather',soapService, wsdlXml);