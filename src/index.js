const { Client, Intents, IntentsBitField } = require("discord.js");
const weather = require("weather-js");
require("dotenv").config();

const Discord_token = process.env.DISCORD_TOKEN;

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", () => {
  console.log(`${client.user.tag} bot online`);
});

client.on("messageCreate", async (message) => {
  if (message.content === "hello") {
    message.reply("wassup");
  }
  if (message.content === "!clear") {
    if (!message.member.permissions.has("MANAGE_MESSAGES")) {
      return message.reply("You do not have permission to use this command.");
    }

    try {
      const fetchedMessages = await message.channel.messages.fetch({
        limit: 100,
      });
      await message.channel.bulkDelete(fetchedMessages); // Delete the fetched messages

      // Notify the user that the chat has been cleared
      message.channel.send("Chat cleared successfully.");
    } catch (error) {
      console.error("Error clearing chat:", error);
      message.channel.send("An error occurred while clearing the chat.");
    }
  }
});

client.on("messageCreate", async (message) => {
  function getWeather(locationQuery) {
    weather.find(
      { search: locationQuery, degreeType: "C" },
      function (err, result) {
        if (message.author.bot) {
          return;
        }

        if (err) {
          console.log(err);
          return;
        }

        if (result && result[0]) {
          const currentWeather = result[0].current;
          const locationInfo = result[0].location;

          // Print the weather information
          message.reply(
            `Current Weather in ${locationInfo.name}:\n - Temperature: ${currentWeather.temperature}°${locationInfo.degreetype}\n - Sky: ${currentWeather.skytext} \n - Observation Time: ${currentWeather.observationtime}`
          );
        } else {
          message.reply(`Weather information for ${locationQuery} not found.`);
        }
      }
    );
  }

  client.on("createmessage", (message) => {
    if (message.author.bot) {
      return;
    }
    if (err) {
      console.log(err);
    }
    if (message.content === "!clear") {
    }
  });

  const location = message.content;
  getWeather(location);
});

client.login(Discord_token);
