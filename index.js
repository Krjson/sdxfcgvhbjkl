const Telegraf = require('telegraf');
const { Extra, Markup } = require('telegraf');
const bot = new Telegraf('6207292549:AAF4O_PAknXTraE7HPBS-_wqr2B8ou2gazE');

bot.command('start', (ctx) => {
    ctx.reply('Choose an option:',
      Extra.HTML().markup((m) =>
        m.inlineKeyboard([
          m.callbackButton('👋 Hello', 'hello'),
          m.callbackButton('👋 Bye', 'bye')
        ])
      )
    );
  });
  
  bot.action('hello', (ctx) => {
    ctx.reply('Hello!');
  });
  
  bot.action('bye', (ctx) => {
    ctx.reply('Bye!');
  });
  
  bot.launch();