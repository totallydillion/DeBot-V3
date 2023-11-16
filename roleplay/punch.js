
const possibleGifs = new Array("https://i.gifer.com/IyWB.gif", "https://i.pinimg.com/originals/f3/ec/8c/f3ec8c256cb22279c14bfdc48c92e5ab.gif", "https://i.pinimg.com/originals/8d/50/60/8d50607e59db86b5afcc21304194ba57.gif", "https://i.pinimg.com/originals/66/76/7a/66767af902113b20978f5880593b29af.gif", "https://i.pinimg.com/originals/97/6c/1e/976c1e11a5d1af939aeaf882b85efda1.gif", "https://i.pinimg.com/originals/8a/d3/39/8ad33953eca9fe56dcf79f57f0c04883.gif", "https://i.pinimg.com/originals/f6/98/03/f6980337b5dc6e439378706784f55ed8.gif", "https://i.pinimg.com/originals/0a/28/2b/0a282b5c8263208f8cdd68632d488bfb.gif", "https://i.pinimg.com/originals/22/b9/2c/22b92cfcafad57a407314104058c8168.gif", "https://i.pinimg.com/originals/b7/92/7e/b7927e9187ef482b258940e9a238f270.gif", "https://i.pinimg.com/originals/e6/f9/7c/e6f97cb321e8b8a0fed85195d47d7832.gif", "https://media1.tenor.com/images/ee3f2a6939a68df9563a7374f131fd96/tenor.gif?itemid=14210784", "https://media1.tenor.com/images/5f072d40f1cc2691ccff93c68f7b8af3/tenor.gif?itemid=16196015", "https://i.pinimg.com/originals/72/c6/6f/72c66fd6f84ecc6f5fbc43c908e847da.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'punch',
	description: "Pow pow!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `POW!`
		else
			descriptionText=  `**${targetUser}** was just punched by ${message.author}!`

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