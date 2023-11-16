
const possibleSlapGifs = new Array("https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif", "https://i.pinimg.com/originals/b6/e3/9e/b6e39e693be3968d212b0fe5754f85db.gif", "https://i.pinimg.com/originals/46/b0/a2/46b0a213e3ea1a9c6fcc060af6843a0e.gif", "https://i.pinimg.com/originals/1c/8f/0f/1c8f0f43c75c11bf504b25340ddd912d.gif", "https://i.pinimg.com/originals/cd/13/ad/cd13adaeb8b4208db2270d7c94963101.gif", "https://i.pinimg.com/originals/b8/f3/02/b8f302e2fa5f45fa4d472a23d828568b.gif", "https://i.pinimg.com/originals/4e/9e/a1/4e9ea150354ad3159339b202cbc6cad9.gif","https://i.pinimg.com/originals/bf/ef/b4/bfefb401ed8f1f7a3fee62d76a2856a4.gif", "https://i.pinimg.com/originals/f8/5f/4c/f85f4c557e5a03d2a7a2e903b66e0047.gif", "https://i.pinimg.com/originals/68/de/67/68de679cc20000570e8a7d9ed9218cd3.gif", "https://i.pinimg.com/originals/40/ef/24/40ef24388a01ba9be6da6dea69d30fda.gif", "https://i.pinimg.com/originals/cf/44/db/cf44db9953c93d5588595c89f4462684.gif", "https://i.pinimg.com/originals/4a/fb/2c/4afb2c9b1d06035d64db1a93ae78a16f.gif", "https://i.pinimg.com/originals/67/a4/a6/67a4a69d924f76f7ee150f6099913212.gif", "https://i.pinimg.com/originals/b0/a7/8b/b0a78b527317430cee98d326c85d1572.gif", "https://i.pinimg.com/originals/bd/78/26/bd7826710d89e9a118070b2864c1d4d6.gif", "https://i.pinimg.com/originals/a0/dc/ce/a0dcce4e6eda2eba39d9f1fca82d32b6.gif", 'https://i.pinimg.com/originals/2a/a9/96/2aa996a717215d90e66c628832982fe5.gif', "https://cdn.lowgif.com/full/6fc8d6bbe59fba01-anime-slap-tumblr.gif", "https://i.pinimg.com/originals/eb/2e/61/eb2e619238aff8ef23ab87dcb0430947.gif");

const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'slap',
	subnames:['smack'],
	description: "Slap someone, it's fun!",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
	if(targetUser == message.author || !targetUser)
	descriptionText = "Uh okay, *slaps you*"
	
	else
	descriptionText = `**${targetUser}** was just slapped by ${message.author}!`
	
	let randomSlap = possibleSlapGifs[Math.floor(Math.random() * possibleSlapGifs.length)]
	
    return message.channel.send({embeds:[{
		description : descriptionText,
			color: colors.roleplay,
			image: {
				url: randomSlap
			}
		}]
	})
}
}