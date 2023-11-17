const tod = require('Better-tord')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
    name: "truth",
    description: "Get a random Truth!",
    category: "Fun",
    async execute(message, args){
        return message.channel.send({embeds:[{
            title: "❓",
            description: tod.get_truth().toString(),
            color: colors.social,
            footer:{
                text:'=truth'
            }
        }]
    })

    }
}