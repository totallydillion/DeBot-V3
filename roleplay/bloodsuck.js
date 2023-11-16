
const possibleGifs = new Array("https://c.tenor.com/aXcm33Ky8qsAAAAM/diabolik-anime.gif", "https://cdn.myanimelist.net/s/common/uploaded_files/1483510363-62e86e5cd09c017279bba28e05c67493.gif", "https://64.media.tumblr.com/abae701d7b4fa55bb3224ee951522c31/tumblr_inline_nzi5n4h2fp1szxasm_540.gif", "https://c.tenor.com/V4SUmqMR0_cAAAAM/anime-vampire.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'bloodsuck',
	description: "uwu",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `uwu`
		else
			descriptionText=  `${message.author} just bloodsucked ${targetUser}!`

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