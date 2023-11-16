const possibleGifs = new Array("https://i.pinimg.com/originals/4c/ec/3f/4cec3f897aaa3ce38b863ea65a13c62b.gif", "https://media1.tenor.com/images/314a2f7c3647ec0b9ba4100f8e35dc2e/tenor.gif?itemid=12270042", "https://i.pinimg.com/originals/a3/75/4b/a3754b4370d495cde6e55f3c203b8604.gif", "https://i.pinimg.com/originals/16/43/77/1643777afba40a9a594eb7315e940ca0.gif", "https://media1.tenor.com/images/92c4b1557f9776472b0b2165665cf75f/tenor.gif?itemid=5177366", "https://media1.tenor.com/images/132611f7becae478ac2ab10b36c14b33/tenor.gif?itemid=13248513", "https://i.pinimg.com/originals/43/c3/2a/43c32a8d76ec565ad0416b9c966f3a5b.gif", "https://media1.tenor.com/images/415daa6afcfc8ba5d19869ddd93ef9f6/tenor.gif?itemid=5947955")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'handshake',
	description: "Handshake, like a chad.",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `^.^`
		else
			descriptionText=  `**${targetUser}** was just handshaked by ${message.author}!`

			return message.channel.send({embeds:[{

				description : descriptionText,
				color: colors.roleplay,
				image: {
					url: randomGif
				}
			}]
		})
	}
}