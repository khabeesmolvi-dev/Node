const axios = require("axios");

const BOT_TOKEN = process.env.TG_BOT_TOKEN;
const CHAT_ID = process.env.TG_CHAT_ID;

async function sendTelegramMessage(text) {
  if (!BOT_TOKEN || !CHAT_ID) return;

  try {
    await axios.post(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        chat_id: CHAT_ID,
        text: text
      }
    );
  } catch (err) {
    console.log("Telegram error");
  }
}

module.exports = sendTelegramMessage;
