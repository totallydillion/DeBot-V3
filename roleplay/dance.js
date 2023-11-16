const possibleGifs = new Array("https://media1.giphy.com/media/mJIa7rg9VPEhzU1dyQ/200.gif", "https://media2.giphy.com/media/RLJxQtX8Hs7XytaoyX/200.gif", "https://c.tenor.com/2vRn7mgoMRMAAAAC/cute-anime-dance.gif", "https://i.pinimg.com/originals/1a/13/c1/1a13c111736f868f9abab76e8ac9009d.gif", "https://i.imgur.com/BbIar.gif", "https://i.pinimg.com/originals/81/df/5e/81df5e907f81dad1721f398ed7408deb.gif", "https://data.whicdn.com/images/207517463/original.gif", "http://i.imgur.com/AMA4d7I.gif", "https://animesher.com/orig/0/32/324/3249/animesher.com_anime-dance-324988.gif", "https://bestanimations.com/media/anime-dancing/115744785anime-dancing-girl-30.gif", "https://c.tenor.com/jWRFHjiNdkgAAAAd/anime-dance.gif", "https://media4.giphy.com/media/HZboJ5Pkti9k4/200.gif", "https://i.kym-cdn.com/photos/images/newsfeed/001/115/816/936.gif", "https://d2w9rnfcy7mm78.cloudfront.net/2145256/original_cd9c01187cead45cd791beafa78f7e08.gif?1525707539", "https://i0.wp.com/100wordanime.blog/wp-content/uploads/2017/11/anime-dance-gif-14.gif?fit=500%2C281&amp;ssl=1", "https://c.tenor.com/2K-04Es1avcAAAAC/anime-dance.gif", "https://c.tenor.com/w8emLdSeGI0AAAAC/anime-dance.gif")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'dance',
	description: "Get them fuzzies out! uwu",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*dances*`

		else
			descriptionText=  `**${message.author}** dances with **${targetUser}** !`

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