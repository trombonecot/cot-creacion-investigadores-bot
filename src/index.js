import config from '../config.json'
import Bot from './bot/Bot';

const bot = new Bot(config.token);

bot.configure();

try {
bot.start();
} catch(e) {
}
