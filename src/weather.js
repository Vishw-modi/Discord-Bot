const weather = require("weather-js");

function getWeather(location) {
  weather.find({ search: location, degreeType: "C" }, function (err, result) {
    if (err) {
      console.log(err);
      return;
    }

    if (result && result[0]) {
      const currentWeather = result[0].current;
      const location = result[0].location;

      // Print the weather information
      message.reply(`Current Weather in ${location.name}:`);
      message.reply(
        `- Temperature: ${currentWeather.temperature}°${location.degreetype}`
      );
      message.reply(`- Sky: ${currentWeather.skytext}`);
      message.reply(`- Observation Time: ${currentWeather.observationtime}`);
    } else {
      console.log(`Weather information for ${location} not found.`);
    }
  });
}

const location = "bengluru";
getWeather(location);
