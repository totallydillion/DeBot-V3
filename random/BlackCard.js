const blackCards = require('./RandomThings/BlackCards.json')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "bc",
	description: "Get a random black card from the game Cards Against Humanity!",
	category: "Random",
	execute(message){
		return message.channel.send({embeds:[{
			title: "Black Card",
                description: blackCards[(Math.floor(Math.random() * blackCards.length))],
	     		color : colors.random,
				 footer:{
					 text:'=bc | =wc | =bwc'
				 }
            }]
        })
	}
}
