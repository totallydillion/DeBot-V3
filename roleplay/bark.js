const possibleGifs = new Array("https://c.tenor.com/Zk6nluNymq4AAAAC/bark.gif", "https://c.tenor.com/n9S-nRWfD3oAAAAC/gakkou-anime.gif", "https://i.kym-cdn.com/photos/images/original/001/093/098/155.gif", "https://c.tenor.com/b5Fu483dlBYAAAAC/bark-dog.gif", "https://media3.giphy.com/media/TPMpnjqY9pw9a/200.gif", "https://c.tenor.com/fysf7TshuNoAAAAC/rockruff-bark.gif")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'bark',
    subnames:['bork'],
	description: "bark bork!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `bork bark!`
		else
			descriptionText=  `**${message.author}** barks at **${targetUser}** !`

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