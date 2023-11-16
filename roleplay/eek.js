
const possibleGifs = new Array("https://c.tenor.com/1FN7iXH8nVgAAAAC/anime-excited.gif", "https://c.tenor.com/J5LExU-5d5IAAAAC/excited-anime.gif", "https://media3.giphy.com/media/JWGgsu82QDoEE/200.gif", "https://c.tenor.com/WU4iBeEeK88AAAAM/anime-excited.gif", "https://c.tenor.com/jgJX8dA_89IAAAAC/anime-excited.gif", "http://media1.giphy.com/media/inyqrgp9o3NUA/giphy.gif", "https://64.media.tumblr.com/aebc19a37c0d9d01095f27f924a46402/9f0759e9174ee691-f6/s640x960/c85971a30a99f15c596986dcc75526256bdf17d5.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'eek',
	description: "when you excited but dont know how to express",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `**eek!**`
		else
			descriptionText=  `**${targetUser}** was eeked at by ${message.author} !`

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