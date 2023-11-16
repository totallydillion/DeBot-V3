const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://c.tenor.com/E4Px9kJOQ5wAAAAC/anime-kid.gif", "https://media1.giphy.com/media/wOly8pa4s4W88/200.gif", "https://c.tenor.com/Lyqfq7_vJnsAAAAC/kick-funny.gif", "https://c.tenor.com/kvxt9X-gXqQAAAAM/anime-clannad.gif", "https://c.tenor.com/lxd8SO_uRIYAAAAC/anime-kick.gif", "https://thumbs.gfycat.com/ContentScaryLemming-max-1mb.gif", "https://i.pinimg.com/originals/3f/44/1b/3f441ba8a891512172fa1861af7dbedc.gif", "https://i.pinimg.com/originals/04/7e/50/047e50f227ec86d0ca8a780ff10420cd.gif", "http://pa1.narvii.com/5789/ba70d977f8a5fda1b76d42325f8d4ced85ec6e6b_hq.gif")
module.exports = {
	name: 'punt',
	description: "Kick someone, but like, wholesomely!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;
		
		if(!targetUser || targetUser == message.author)
		descriptionText = `uh, okay.`
		else
		descriptionText=  `${message.author} punts **${targetUser}** !`
		
		return message.channel.send({embeds:[{
			
			description : descriptionText,
			color : colors.roleplay,
			image: {
				url: randomGif
			}
		}]
	})}}