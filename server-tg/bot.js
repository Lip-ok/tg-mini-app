const {Telegraf} = require('telegraf');


const bot = new Telegraf('YOUR_TG_TOKEN')

bot.start((ctx)=> {
    ctx.reply(
        "Нажми на кнопку, что бы открыть Mini App",
        {
            reply_markup: {
                inline_keyboard:[
                    [
                        {
                            text: "Открыть Mini App",
                            web_app: {
                                url: "https://YOUR-GITHUB.github.io/YOUR-APP-NAME-ON-GITHUB"
                            }
                        }
                    ]
                ]
            }
        }
    )
});

bot.launch();