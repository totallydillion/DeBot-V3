const acro = require('acronym');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name: "acro",
    subnames:['acronym'],
    description: "Create a unique acronym from words !",
    long:"An acronym is making words/phrases from the initial letters, this command will create acronyms based on letters that you give.",
    usage: "[letters]",
    category: "Convert",
    async execute(message, args){
        
        let acronym = acro(args.join(" "), false);

        if(!acronym)
        return message.channel.send({embeds:[{
            title: "Invalid Arguments!",
            description: "You must provide letters or words for acronyms!",
            color: colors.error,
            footer:{
                text: "=help acro"
            }
        }]
    })
    
    let results = acronym.split(" ").join("\n");

    if(results.length > 6000)
    return message.channel.send({embeds:[{
        title:'Acronym is Too Big!',
        description:"Because of discord limitations, I am unable to send this acronym because it is too big!",
        color: colors.error,
        footer:{
            text:'=acro [letters]'
        }
    }]})

    return message.channel.send({embeds:[{
        color: colors.random,
        description: results.toString(),
        footer:{
            text:'=acro [letters]'
        }
    }]
})
}
}