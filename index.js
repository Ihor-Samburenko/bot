const TelegramApi = require("node-telegram-bot-api");

const token = "6338206414:AAGm8AtqiX-UcHoQIiVQVjx9iO471ezXVBI";

const bot = new TelegramApi(token, { polling: true });

const startBot = () => {
  bot.setMyCommands([
    { command: "/start", description: "Початкове привітання" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    console.log(msg)
    const name = msg.from.first_name;

    const chatId = msg.chat.id;

    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        `Ласкаво просимо до нашого телеграм-бота, ${name}! `
      );
    }
    return bot.sendMessage(chatId, `Я Вас не розмуію ${name} 🙁. Спробуйте ввести коректну команду`)
  });
};

startBot();


