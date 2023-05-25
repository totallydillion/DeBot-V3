const whiteCards = require ('./RandomThings/WhiteCards.json');


const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "wc",
	description: "Get a white  card from cards against humanity!",
	category: "Random",
	execute(message){
		return message.channel.send({embeds:[{
			title: "White Card",
			description: whiteCards[(Math.floor(Math.random() * whiteCards.length))],
			color : colors.random,
			footer:{
				text:'=bc | =wc | =bwc'
			}
		}]
	})
}
}