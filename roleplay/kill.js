const colors = require('./Lists/EmbedColors.json')[0]
const possibleGifs = new Array("https://i.pinimg.com/originals/28/e5/da/28e5da8a8b4a418f3f3797b8e22c1c68.gif", "https://i.pinimg.com/originals/2c/94/5a/2c945adbbc31699861f411f86ce8058f.gif", "https://i.pinimg.com/originals/b8/df/3a/b8df3ad68d61db74d17e91503d6b6a91.gif", "https://i.pinimg.com/originals/19/88/c8/1988c8d65590df4df62894495e44343c.gif", "https://i.pinimg.com/originals/c5/5d/75/c55d75e746b35e9f5a08c2f298768a83.gif", "https://giffiles.alphacoders.com/148/148929.gif", "https://giffiles.alphacoders.com/695/69514.gif", "https://giffiles.alphacoders.com/834/8340.gif", "https://giffiles.alphacoders.com/849/8493.gif", "https://giffiles.alphacoders.com/148/148929.gif", "https://64.media.tumblr.com/e519117b279cde5039de4610ad6f36ae/tumblr_okicu397ka1rzn9vfo1_400.gif")  

module.exports = {
	name: 'kill',
	description: "Kill someone, because why not!",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		if(!targetUser || targetUser == message.author)
			descriptionText = `If you say so..`
		else
			descriptionText = `**${targetUser}** was just killed by ${message.author}!`

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