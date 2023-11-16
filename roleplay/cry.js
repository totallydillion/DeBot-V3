
const Discord = require('discord.js');
const possibleGifs = new Array("https://i.pinimg.com/originals/30/f4/70/30f470888b5b6b8047e0dea6690cd23b.gif", "https://i.pinimg.com/originals/ff/28/2f/ff282fc9be15259038a84650e7a83487.gif", "https://i.pinimg.com/originals/bb/a7/b5/bba7b50ca377717f33510cf598e14183.gif", "https://i.pinimg.com/originals/4e/c6/a6/4ec6a63cf14b6784b1c04083d1a22af7.gif", "https://i.pinimg.com/originals/bb/a7/b5/bba7b50ca377717f33510cf598e14183.gif", "https://i.pinimg.com/originals/99/59/8e/99598ed9be9f4542a1bf651f8b052011.gif", "https://i.pinimg.com/originals/3c/69/16/3c691659f01aba24f6a6deed24305989.gif", "https://i.pinimg.com/originals/da/c5/29/dac529ebc72771b9d40373f0c4e10eff.gif", "https://i.pinimg.com/originals/52/ca/2e/52ca2e2fe516da0d720745d86db75387.gif", "https://i.pinimg.com/originals/1b/04/24/1b0424cf9e26fd7acaf437f063265074.gif", "https://i.pinimg.com/originals/0a/5e/71/0a5e71813be18fc144e6f36403e86789.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'cry',
	description: "*sniffle*",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `sniffle`
		else
			descriptionText=  `${message.author} cries at ${targetUser}`

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