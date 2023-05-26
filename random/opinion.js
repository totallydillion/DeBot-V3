var opinions = new Array("something that i hate", "something that i love", "very cool", "very bad", "a terrible thing to exist", "sometimes cool, sometimes not.", "beautiful", "ugly", "the best", "enjoyable", "horrible", "my favorite thing to think about", "obviously worthwhile", "extra unfair", "smells weird", "uncool", "bad", "huge", "something that makes me unhappy", "cool", "uncool", "messy", "clean", "cold", "hot", "very uwu", "mean", "nice")
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name: "opinion",
    description: "Want my opinion on something? This is your chance!",
    category: "Fun",
    usage: "[item(s)]",
    execute(message, args) {
        
        let thing = args.join(" ");
        
        if(!thing)
        return message.reply("You must give me something to give my opinion on!")
        
        return message.channel.send({embeds:[{
            title: "Hmm, I think " + thing,
            color : colors.random,
            description: " is **__" + opinions[Math.floor(Math.random() * opinions.length)] + "__**",
            footer:{
                text:'=opinion [thing]'
            }
        }]
    })
}

}