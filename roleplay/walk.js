const possibleGifs = new Array("https://c.tenor.com/UyC9TSivCNYAAAAM/ai-ohto-wonder-egg-priority.gif", "https://media0.giphy.com/media/EkO6IufPB95mM/giphy.gif", "https://i.pinimg.com/originals/1c/f3/08/1cf3088dec173bc93ff7b2d504a9f71e.gif", "https://c.tenor.com/4Wr5IbaHMmoAAAAC/anime-anime-girl.gif", "https://i.pinimg.com/originals/66/7b/ca/667bca975245cb39e742bbb1c2043f42.gif", "https://64.media.tumblr.com/04b368b5abce6b0ac72f3c2bb1fc66fc/tumblr_psbv55sWl81vb9u0p_640.gifv", "https://64.media.tumblr.com/92d032d015842ece04a78a30f6d1a132/tumblr_ohqnsqhfql1th206io1_400.gifv")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'walk',
	description: "walking is so fun",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*walks*`

		else
			descriptionText=  `**${message.author}** walks in the distance, **${targetUser}** can't help but notice them!`

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