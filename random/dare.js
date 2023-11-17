const tod = require('Better-tord')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name: "dare",
    description: "Get a random Dare!",
    category: "Fun",
    async execute(message, args){

        return message.channel.send({embeds:[{
            title: "❓",
            description: tod.get_dare().toString(),
            color: colors.random,
            footer:{
                text:'=dare'
            }
        }]
    })
        

    }
}