const possibleGifs = new Array("https://c.tenor.com/iwrXNN8qlqkAAAAC/roar-anime.gif", "https://c.tenor.com/ZhsYE7zXP4EAAAAM/anime-angry.gif", "https://i.pinimg.com/originals/53/71/91/537191bec01115576a9977dbf930da8a.gif", "https://c.tenor.com/MiJ13TNS92UAAAAM/anime.gif", "https://c.tenor.com/Qd_gBZmy_rMAAAAC/angry-anime-girl-angry-funny.gif", "http://pa1.narvii.com/6000/81144100366d46dea84fd051170927c80e356650_00.gif", "https://media3.giphy.com/media/l0MYNTkOzbaY2qnjW/giphy.gif", "https://i.gifer.com/RcW8.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'growl',
	description: "Grrrrr",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `**Grr!**`
		else
			descriptionText=  `**${targetUser}** was growled at by ${message.author} !`

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