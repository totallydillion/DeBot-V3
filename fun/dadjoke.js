const {dadjokes} = require('./RandomThings/dadjokes.json')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "dadjoke",
	description: "19 and 20 got into a fight. 21.",
    category: "Fun",
	execute(message, args){
        
		return message.channel.send({embeds:[{
            title: dadjokes[Math.floor(Math.random() * dadjokes.length)],
            color: colors.random,
            footer:{
                text:'=dadjoke'
            }
        }]
    })
     }
 }
