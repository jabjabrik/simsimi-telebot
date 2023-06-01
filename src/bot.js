import { Telegraf } from 'telegraf';
import config from './config.js';

const { BOT_TOKEN } = config;

export const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    const { first_name } = ctx.chat;
    ctx.reply(`Hello ${first_name}`);
});

bot.telegram.setMyCommands([
    { command: 'start', description: 'Start bot' }
]);

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));