
const possibleSlapGifs = new Array("https://c.tenor.com/C5riNZAzrksAAAAC/dab-anime.gif", "https://c.tenor.com/UaPOwMCYsG8AAAAM/love-live.gif", "https://c.tenor.com/wGX3dI_kRUQAAAAC/girls-last-tour.gif", "https://c.tenor.com/w5Oop53gtA8AAAAC/dab-dabbing.gif", "https://i.imgur.com/FRsWQO9.gif", "https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwM6Bn1kgEBY18KWUQlhdivk", "https://thumbs.gfycat.com/ApprehensiveBogusArizonaalligatorlizard-size_restricted.gif");

const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'dab',
	description: "dab on them haters",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
	if(targetUser == message.author || !targetUser)
	descriptionText = "dab on them haters broski"
	
	else
	descriptionText = `${message.author} just dabbed on ${targetUser}!`
	
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