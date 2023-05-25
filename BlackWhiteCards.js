const whiteCards = require('./RandomThings/WhiteCards.json')
const blackCards = require('./RandomThings/BlackCards.json')

const colors = require('./Lists/EmbedColors.json')[0]


module.exports = {
	name: "bwc",
	description: "A command that combines both =bc and =wc!",
	category:"Fun",
	execute(message){
		let blackCard = blackCards[Math.floor(Math.random() * blackCards.length)]
		let whiteCard = "||" + whiteCards[Math.floor(Math.random() * whiteCards.length)] +"||" 
		let answerSlot = blackCard.split("_____");
		
		if(answerSlot[2])
		whiteCard += "\n||" + whiteCards[Math.floor(Math.random() * whiteCards.length)] + "||"
		
		return message.channel.send({embeds:[{
			title: blackCard,
			description: whiteCard,
			color : colors.random,
			footer:{
				text:'=bc | =wc | =bwc'
			}
		}]
	})
}
}