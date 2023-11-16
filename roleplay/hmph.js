
const possibleSlapGifs = new Array("https://c.tenor.com/3tjdeVFZR6oAAAAC/anime-pout.gif", "https://c.tenor.com/ZWgSMii_aToAAAAC/anime-hmph.gif", "https://i.pinimg.com/originals/49/bd/80/49bd80f50a697b5e2a49013e1f7dcd11.gif", "https://c.tenor.com/cpKpbKJcfD0AAAAC/anime-kon.gif", "https://64.media.tumblr.com/1333fee22c68ac668e4a5629687d235c/tumblr_mvmi5rBbMK1s21xzoo1_500.gifv", "https://c.tenor.com/3kvIVPYgTE8AAAAC/hmph-hmph-anime.gif", "https://i.gifer.com/JoNK.gif", "https://data.whicdn.com/images/260604966/original.gif", "https://cutewallpaper.org/25/anime-girl-hmph-wallpaper/pin-on-waifus.gif")

const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'hmph',
	subnames:['pout'],
	description: "hmph! meanie!",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
	if(targetUser == message.author || !targetUser)
	descriptionText = "*hmph*"
	
	else
	descriptionText = `${message.author} hmphs at **${targetUser}** !`
	
	let randomSlap = possibleSlapGifs[Math.floor(Math.random() * possibleSlapGifs.length)]
	
    return message.channel.send({embeds:[{
		description : descriptionText,
			color: colors.roleplay,
			image: {
				url: randomSlap
			}
		}]
	})
}
}