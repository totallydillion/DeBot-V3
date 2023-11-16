const possibleGifs = new Array("https://c.tenor.com/jyv9sexi1fYAAAAC/anime-lick.gif", "https://c.tenor.com/9iv5CUU5dNEAAAAC/anime-lick.gif", "https://media1.giphy.com/media/YqQt3rkzFXbREtTURJ/giphy.gif", "https://i.redd.it/694hrz42c5q41.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/005/876/156.gif", "https://c.tenor.com/S5I9g4dPRn4AAAAM/omamori-himari-manga.gif", "https://64.media.tumblr.com/243241d920d6062a8ed1af16ad68aaee/e54eb663c3418040-e4/s1280x1920/92f3a1f55a46c0df94b50cc2fa44fac072aef9a5.gifv", "https://i.redd.it/kqh8aohu67p41.gif", "https://image.myanimelist.net/ui/OK6W_koKDTOqqqLDbIoPAm7s37oDNY89jXF1bHTjy9s")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'lick',
	description: "slrrrp",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*licks*`
		else
			descriptionText=  `${message.author} just licked ${targetUser}!`

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