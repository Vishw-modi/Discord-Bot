# 🌤️ Discord Weather Bot

A simple, AI-enhanced Discord bot that provides **real-time weather updates** based on user input. Built with `discord.js`, `weather-js`, and powered by Node.js. The bot also includes basic moderation and greeting capabilities.

---

## 🚀 Features

- 🔎 Get weather updates by typing your **city name** in any channel the bot is active in
- 👋 Responds to `hello` with a casual reply
- 🧹 `!clear` command to bulk-delete messages (requires appropriate permissions)
- 🌐 Uses `weather-js` to fetch accurate, real-time weather data
- 🔒 Secure with environment-based configuration (no hardcoded secrets)

---

## 🛠️ Tech Stack

- **Node.js** & **CommonJS**
- **Discord.js** (v14)
- **Weather-js**
- **dotenv** for environment variable handling

---

## 📦 Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/Vishw-modi/Discord-Bot.git
    cd Discord-Bot
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory:**
    ```env
    DISCORD_TOKEN=your-discord-bot-token-here
    ```

4. **Run the bot:**
    ```bash
    npm start
    ```

---

## 💡 Usage

Simply type the name of a city to get its current weather.

Example: `New York`, `London`, `Delhi`

> 🛠 Make sure the bot has **message read/send** permissions in the server and the right **intents** are enabled in your [Discord Developer Portal](https://discord.com/developers/applications).

---

## 📁 Project Structure

```
Discord-Bot/
├── src/
│   └── index.js       # Main bot logic
├── .env               # Environment variables (not committed)
├── package.json       # Project metadata
└── README.md          # You’re reading it now
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions or want to improve features, feel free to open an issue or submit a pull request.

---

## 🔐 Security

Make sure your `.env` file is **never committed** to the repo. GitHub’s push protection will block secrets from being exposed. Always use environment variables for sensitive data.

---


## 👤 Author

**Vishw Modi**  
📧 [vishwmodi@gmail.com](mailto:vishwmodi@gmail.com)  
🔗 [LinkedIn](https://linkedin.com/in/vishwmodi) • [GitHub](https://github.com/Vishw-modi)
