
const possibleSlapGifs = new Array("https://c.tenor.com/fxIMcE41WpgAAAAd/anime-boop.gif", "https://c.tenor.com/RmQElPHERIoAAAAC/boop-anime.gif", "https://66.media.tumblr.com/9a457a43bcae3ebaafda53d7fe6f572d/tumblr_pqjm6cCRt41th206io1_1280.gif", "https://c.tenor.com/7iV_gBGrRAUAAAAC/boop-poke.gif", "https://i.pinimg.com/originals/08/ce/d6/08ced674cac2e7dd220dafa93b99b08d.gif", "https://c.tenor.com/1YMrMsCtxLQAAAAC/anime-poke.gif", "https://i.gifer.com/LxNb.gif", "https://c.tenor.com/NjIdfk7i3bsAAAAC/poke-poke-poke.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/704/475/a24.gif");

const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'boop',
	description: "Beepity Bopity!",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
	if(targetUser == message.author || !targetUser)
	descriptionText = "*boop*"
	
	else
	descriptionText = `**${targetUser}** was just booped by ${message.author}!`
	
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