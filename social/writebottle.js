const fs = require('fs')

const blackListedWords = new Array('nigga', 'negro', "trump", "nigger", "n***", "discord", "autism", "autistic")
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "writebottle",
	description: "Write a bottle and then send it out to sea!!",
	usage: "[message]",
	category: "Fun",
	execute(message, args){

		let messageToSend = args.join(" ")

		fs.readFile('./bottles.json', 'utf-8', function(err, data) {
			if (err) throw err
				var arrayOfObjects = JSON.parse(data)
//			let newData = arrayOfObjects[0].bottles
			


			for(var i = 0; i < blackListedWords.length; i++)
			{
				if(messageToSend.includes(blackListedWords[i]))
				return message.channel.send({embeds:[{
					title: " ❌ Error ❌",
							description: "Your message was not sent to the sea because it contains a blacklisted word!",
							color: colors.error
						}]
					})
			}


			arrayOfObjects[0].bottles.push(messageToSend)


			fs.writeFile('./bottles.json', JSON.stringify(arrayOfObjects), 'utf-8', function(err) {
				if (err) throw err

				return message.channel.send({embeds:[{
					title: "Success!",
						description: "Your message was sent out to sea!",
						color: colors.social
					}]
				})
			})
		})
	}
}