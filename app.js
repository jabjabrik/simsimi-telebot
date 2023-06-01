import 'dotenv/config';
import { bot } from './src/bot.js';
import config from './src/config.js';

const { PORT, PROD_URL, BOT_TOKEN, isProduction } = config;

if (!BOT_TOKEN) throw new Error('"BOT_TOKEN" env var is required!');

if (isProduction) {
    await bot.launch({ webhook: { domain: PROD_URL, port: PORT } });
    console.info(`The bot ${bot.botInfo.username} is running on server port:${PORT}`);
} else {
    const botName = (await bot.telegram.getMe()).username
    console.info(`The ${botName} is running on locally`);
    bot.launch();
}