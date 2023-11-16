
const possibleGifs = new Array("https://c.tenor.com/M7wcdD0eujYAAAAM/anime-looking.gif", "https://media2.giphy.com/media/ulWUgCk4F1GGA/200.gif", "https://c.tenor.com/QRtXsJdPJsoAAAAM/sad-eyes-anime.gif", "https://media3.giphy.com/media/XTK2z2iSD3tmw/giphy.gif", "https://i.pinimg.com/originals/84/30/75/84307582253a96e4552d20e3ecef3a33.gif", "https://i.imgur.com/BVzWdzX.gif", "https://c.tenor.com/JhO1fYhvP14AAAAC/face-blush.gif", "https://media1.giphy.com/media/T3Vvyi6SHJtXW/giphy.gif", "https://i.kym-cdn.com/photos/images/newsfeed/000/993/783/7f4.gif", "https://www.icegif.com/wp-content/uploads/yui-hirasawa-blushing-icegif.gif", "https://c.tenor.com/hCqcNUuWCf0AAAAM/blush-anime.gif", "http://24.media.tumblr.com/tumblr_m83r2zXZ7F1rcijlco1_500.gif", "http://denarii.info/filedump/gifs/anime-blush.gif", "https://www.icegif.com/wp-content/uploads/yui-hirasawa-flattered.gif")   

const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
	name: 'blush',
	description: "Sometimes, it's just a mood.",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `*blush*`
		else
			descriptionText=  `**${targetUser}** blushes at ${message.author}!`

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