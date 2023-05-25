const ai = require("clever-bot-api")

module.exports = {
    name: 'cb',
    subnames:['cleverbot'],
    description: "Talk with Cleverbot!",
    usage: "[message]",
    category: "Fun",
    execute(message, args) {
        message.channel.sendTyping();

        if(!args)
        args = "hello"

        let messageString = args.join(" ");

        ai(messageString).then(response => message.reply(response.toString()));

    },
};
