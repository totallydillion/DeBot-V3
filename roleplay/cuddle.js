
const possibleGifs = new Array("https://i.pinimg.com/originals/a3/5d/8d/a35d8d2ca642fde2c5cdcb3bcf3f5794.gif", "https://i.pinimg.com/originals/8b/a6/7c/8ba67c2e264576e48daa5a568e1148e6.gif", "https://i.pinimg.com/originals/0a/be/10/0abe1090ab9874c62c4baaac18f0994d.gif", "https://media1.tenor.com/images/8f8ba3baeecdf28f3e0fa7d4ce1a8586/tenor.gif?itemid=12668750", "https://i.pinimg.com/originals/86/e2/17/86e217b0915b3368d48eedeba0d8b68c.gif", "https://i.pinimg.com/originals/b6/d0/90/b6d0903e0d54e05bb993f2eb78b39778.gif", "https://media.tenor.com/images/69f015303c94bc9c35aba4e8eef4be5e/tenor.gif", "https://media.tenor.com/images/eccf830fa585474d1c2957b46f5873ed/tenor.gif", "https://media.tenor.com/images/1fe47ce1ea29dfcaba48488abafaa471/tenor.gif", "https://media.tenor.com/images/8d942867763ca832e85a495af978c67c/tenor.gif", "https://media.tenor.com/images/1dd2ac9d7e42b2f7b6b9a69d962024ce/tenor.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'cuddle',
	description: "Cuddle wuddle!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `^-^`
		else
			descriptionText=  `**${targetUser}** was just cuddled by ${message.author}!`

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