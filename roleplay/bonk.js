const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://c.tenor.com/CrmEU2LKix8AAAAC/anime-bonk.gif", "https://i.gifer.com/origin/d7/d77de33d229370f023a24ca6e4cf6079.gif", "https://i.imgur.com/DIAbFlT.gif", "https://media2.giphy.com/media/30lxTuJueXE7C/giphy.gif", "https://memestatic.fjcdn.com/gifs/Bonk+gifs+from+ple+ple+pleiades_c02673_6377071.gif", "https://i.imgur.com/0IxjsfM.gif", "https://i.pinimg.com/originals/87/67/c0/8767c0aa7de40a48aaf916aab8bc13cc.gif") 
module.exports = {
	name: 'bonk',
	description: "For people who deserve it!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `BONK`
		else
			descriptionText=  `**${targetUser}** got BONKED by ${message.author}!`

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