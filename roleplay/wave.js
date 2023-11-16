
const possibleGifs = new Array("https://c.tenor.com/T3tFklpWa8AAAAAM/hi-hello.gif", "https://c.tenor.com/eeyZsVwZScsAAAAd/anime-wave.gif", "https://c.tenor.com/Hntke7HWHhIAAAAM/wave-anime.gif", "https://c.tenor.com/dessgik7ovcAAAAC/anime-wave.gif", "https://i.pinimg.com/originals/56/49/de/5649de6297b902ccc1856bc03d790ec0.gif", "https://i.pinimg.com/originals/40/66/a5/4066a57e49c748d90330db89c15af609.gif", "https://c.tenor.com/H4xLf6epW-wAAAAC/anime-wave.gif", "https://c.tenor.com/qlT4AO1LID0AAAAM/anime-wave.gif", "https://i.imgur.com/DKT4tjt.gif?noredirect", "https://i.gifer.com/bB.gif", "https://c.tenor.com/ILT5-vuNzB8AAAAC/anime-anime-wave-bye.gif", "https://64.media.tumblr.com/0ff48dce2689bd713c215bc6794ee479/tumblr_o328lujnMO1tydz8to1_540.gifv", "https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwE3g3fEKoNakabdZ_kGpMu8")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'wave',
	description: "A friendly Hello Can Never Hurt!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*wave*`
		else
			descriptionText=  `**${message.author}** waves at **${targetUser}**!`

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