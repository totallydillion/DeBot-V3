const jsonfile = require('jsonfile')
const file = './bottles.json'
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "readbottle",
	description: "Read a bottle that people have sent to sea!",
	category: "Fun",
	execute(message, args){
		jsonfile.readFile(file, function (err, obj) {
			if (err) console.error(err)

			let randomNumber = Math.floor(Math.random() * obj[0].bottles.length)

			return message.channel.send({embeds:[{
				title: "You Read The Bottle..",
					description: obj[0].bottles[randomNumber],
					color: colors.social
				}]
			})
		})
	}
}