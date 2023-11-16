const possibleGifs = new Array("https://thumbs.gfycat.com/InfamousVariableAmericanriverotter-size_restricted.gif", "https://49.media.tumblr.com/9434fcb0a0ebd308d90ccf973336f536/tumblr_nkh8ugvy8i1u0bcbmo1_500.gif", "https://thumbs.gfycat.com/AccurateLittleKomododragon-max-1mb.gif", "https://c.tenor.com/s4FCi2JHTFUAAAAC/pet-ear-rub-relaxing.gif", "https://64.media.tumblr.com/efa98d5c8e14036f7328d91c06145cb1/5ecc8959517379da-31/s400x600/7b7f46cb6fa0a5ab50e3cbdbd9731b1f397f5040.gifv", "https://i.imgur.com/1b8Rp2U.gif", "https://media2.giphy.com/media/bOFvkt81UEMvu/200.gif");  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'earscratch',
	subnames:['escratch'],
	description: "purrrrrr",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `purr!`
		else
			descriptionText=  `**${message.author}** scratches **${targetUser}**'s ear !`

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