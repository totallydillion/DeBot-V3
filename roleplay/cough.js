const colors = require('./Lists/EmbedColors.json')[0]
const possibleGifs = new Array("https://c.tenor.com/pp7hD3NwX7MAAAAC/hotd-anime.gif", "https://thumbs.gfycat.com/AnotherMessyDromedary-size_restricted.gif", "https://c.tenor.com/yvH3VsPxZwgAAAAC/coughing-up-blood-itachi.gif", "https://c.tenor.com/zLI0j_5atboAAAAC/smile-cough.gif", "https://thumbs.gfycat.com/WatchfulBelovedBinturong-size_restricted.gif", "https://c.tenor.com/H9XHE0mknrwAAAAC/nekopara-catgirl.gif", "https://i.imgur.com/P6x0N4g.gif")  

module.exports = {
	name: 'cough',
	description: "Hope you're okay.",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		if(!targetUser || targetUser == message.author)
			descriptionText = `stop coughing before you die!`
		else
			descriptionText = `** ${message.author} coughed in front of ${targetUser}** !`

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