require('dotenv').config();

const Telegraf = require('telegraf');

const bot = new Telegraf(process.env.TELEGRAM_TOKEN);

bot.start(ctx => {
    ctx.reply(`Bienvenido ${ctx.from.first_name} ${ctx.from.last_name}`);
});

bot.help(ctx => {
    ctx.reply(`Los comando que puedes usar son: 
/s - suma vario números
/m -  multiplica varios numeros`);
});

bot.settings(ctx => {
    ctx.reply('Setting');
});

bot.command('mycommand' , ctx => {
    ctx.reply('mi nuevo comando');
})

bot.command(['suma', 's'], ctx => {
    const str = ctx.update.message.text;
    const arrayStr = str.split(' ');
    let sum = 0;

    for (i=1; i < arrayStr.length; i++) {
        sum += parseInt(arrayStr[i]);
    }

    ctx.reply(`La suma es ${sum}`);
});

bot.command(['m'], ctx => {
    const str = ctx.update.message.text;
    const arrayStr = str.split(' ');
    let mul = 1;

    for (i=1; i < arrayStr.length; i++) {
        mul *= parseInt(arrayStr[i]);
    }

    ctx.reply(`La multiplicación es ${mul}`);
})

bot.on('sticker', ctx => {
    ctx.reply('oh! Te gustan los sticker');
});

bot.hears('speed demon', ctx => {
    ctx.reply('https://www.youtube.com/watch?v=y1QeGQZftus');
});

bot.hears('beat it', ctx => {
    ctx.reply('https://www.youtube.com/watch?v=JhrNl1TJFWY');
});

bot.hears('leave me alone', ctx => {
    ctx.reply('https://www.youtube.com/watch?v=4QfjtSQyTG4');
});

bot.hears('lovely one', ctx => {
    ctx.reply('https://youtu.be/Cew9nvEJzAk');
})

bot.launch();