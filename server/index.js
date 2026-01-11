const TelegramBot = require("node-telegram-bot-api");
const token = "8551506820:AAFxHK-mMY_EU_DzsutB04rqgetTUo5Tm7A";

const bot = new TelegramBot(token, { polling: true });

const bootstrap = () => {
  bot.on("message", async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
      await bot.sendMessage(
        chatId,
        "Sam.ac platforma kurslarini sotib olishingiz mumkin",
        {
          reply_markup: {
            keyboard: [
              [
                {
                  text: "Kurslarni ko'rish",
                  web_app: {
                    url: "https://portfolio-smwebdeveloper.vercel.app/",
                  },
                },
              ],
            ],
          },
        }
      );
    }
  });
};

bootstrap();
