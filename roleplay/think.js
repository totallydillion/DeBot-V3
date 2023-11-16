const possibleGifs = new Array("https://i.gifer.com/J4Qb.gif", "https://c.tenor.com/E_e1-lp25LMAAAAC/anime-notes.gif", "https://animemotivation.com/wp-content/uploads/2018/08/Saitama-thinking-gif.gif", "https://i.pinimg.com/originals/81/3e/fb/813efb9ade453f7f4a67b3ede8c2cbf5.gif", "https://data.whicdn.com/images/301306032/original.gif", "https://image.myanimelist.net/ui/tJ2Fy6YEJKrcduKF0rRJJH6S5GoWYIMEtxyHMONLFiYh66qr2BhKQ8Pxx0LnBWEy9jteBG3QfhkpIWKGqh79pV9Q8K3QOJWaoNRyA3h-RhxletxCMdjcpdo8fVeG3ZMcA_pizvYw_gXUimZOpTcwNg", "https://i.pinimg.com/originals/11/66/d6/1166d6d0076da0f9f55e46df86dfeaf1.gif", "https://thumbs.gfycat.com/MediumHardChinesecrocodilelizard-max-1mb.gif");  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'think',
	description: "We all gotta think sometimes",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `whatcha thinking about fam!`
		else
			descriptionText=  `**${message.author}** thinks about **${targetUser}** !`

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