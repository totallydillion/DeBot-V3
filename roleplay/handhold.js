
const possibleGifs = new Array("https://c.tenor.com/ONvOvboeaYAAAAAM/aesthetic-animated.gif", "https://c.tenor.com/rU3xZo2_jaIAAAAC/anime-hold.gif", "https://i.pinimg.com/originals/9d/92/1a/9d921ae2f69420beb68dcf083d7e0f43.gif", "https://c.tenor.com/cxhP0s4TErAAAAAC/anime-hands-clasped.gif", "https://carnivorouslreviews.files.wordpress.com/2018/08/interlocking.gif", "https://c.tenor.com/WUZAwo5KFdMAAAAC/love-holding-hands.gif", "https://i.pinimg.com/originals/0c/9e/33/0c9e33a5d3d033b11d6c70dfaf0f83f8.gif", "https://64.media.tumblr.com/7a1d87c8e7056ac5ce2a202d53a36905/tumblr_myqbqfZWSb1sp0cggo1_500.gif", "https://c.tenor.com/SuIqnqSNobkAAAAM/jujutsu-kaisen-jujutsu.gif", "https://data.whicdn.com/images/324682714/original.gif", "http://pa1.narvii.com/5909/0342bdad663e6432e500838e0d86e91b9d28d371_00.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'handhold',
    subnames:['holdhand'],
	description: "Hold hands with someone",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `Let's hold hands!`
		else
			descriptionText=  `**${targetUser}** & ${message.author}'s holds hands!`

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