const possibleGifs = new Array("https://c.tenor.com/o2FGs_823zwAAAAC/anime-sleep.gif", "https://c.tenor.com/paUFtJtPwcAAAAAC/sleep-anime.gif", "https://c.tenor.com/5A-f5Xpvz0YAAAAd/anime-sleep.gif", "https://acegif.com/wp-content/gif/anime-sleep-1.gif", "https://i.pinimg.com/originals/5a/51/9a/5a519ab7fbf494265b7ba09de84b05aa.gif", "https://media1.giphy.com/media/CoeFBrfvxzZ2U/giphy.gif", "https://animesher.com/orig/1/143/1433/14335/animesher.com_konata-cute-sleep-1433577.gif", "https://c.tenor.com/HItBOocy6ikAAAAC/umaru-sleeping.gif")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'sleep',
	description: "sleep is the best thing ever, change my mind",
    subnames:["zzz", "nap"],
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*zzzzzz*`

		else
			descriptionText=  `**${message.author}** has decided to sleep, and **${targetUser}** can't do anything about it!`

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