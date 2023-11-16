const possibleGifs = new Array("https://c.tenor.com/8nSbJK3j7EUAAAAM/laugh-anime.gif", "https://i.pinimg.com/originals/49/84/91/49849103a4f1007156243448bcc9c2c7.gif", "https://thumbs.gfycat.com/ChillyTestyDowitcher-size_restricted.gif", "https://media0.giphy.com/media/VvvVOKJIogh44/giphy.gif", "https://media3.giphy.com/media/xUNd9GRzr2oDFuyuWc/200.gif", "https://c.tenor.com/o-q-kqaTzSsAAAAC/anime-laugh.gif", "https://animesher.com/orig/1/132/1325/13251/animesher.com_anime-laughing-funny-anime-gif-1325135.gif", "https://media2.giphy.com/media/TORQpT78yQR5S/giphy.gif", "http://31.media.tumblr.com/b1970054bacdd840e410a8e2e5b1edc1/tumblr_mrgprlu2EA1seb6ywo1_1280.gif", "https://i.pinimg.com/originals/4d/f1/8e/4df18e92e572823631919cf33de69900.gif", "https://c.tenor.com/XbGebOy9Lf0AAAAM/anime-girl.gif", "https://i.pinimg.com/originals/7a/fe/0c/7afe0c0248d5c781598aec38b9825510.gif", "https://c.tenor.com/MYzffBI79y0AAAAC/anime-laugh.gif", "https://64.media.tumblr.com/f7c1fd0f85f2eada959fa4b29a187ffa/tumblr_inline_o0nru7vzw31tzwkwy_500.gifv", "https://media2.giphy.com/media/AngzmmMj4h6zm/giphy.gif")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'laugh',
	description: "it's free therapy",
    subnames:['giggle', 'chuckle', 'lmao', 'lol'],
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `lmao`

		else
			descriptionText=  `**${message.author}** laughs with, **${targetUser}**!`

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