const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://i.pinimg.com/originals/2f/9f/f9/2f9ff90ad4a08b63a0033e367f0f2b03.gif", "https://c.tenor.com/te8g_o16LagAAAAC/thumbs-down.gif");

module.exports = {
	name: 'thumbsdown',
	description: "No, this isn't it, chief.",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `👎`
		else
			descriptionText=  `${message.author} gives **${targetUser}** a 👎 !`

			return message.channel.send({embeds:[{

				description : descriptionText,
	     		color : colors.roleplay,
				image: {
					url: randomGif
				}
			}]
		})
	}
}