const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://64.media.tumblr.com/tumblr_lps86chQSj1qbvovho1_500.gifv", "https://c.tenor.com/wLqFGYigJuIAAAAC/mai-sakurajima.gif", "https://media0.giphy.com/media/ARSp9T7wwxNcs/giphy.gif", "https://i.pinimg.com/originals/ba/0a/18/ba0a18b4028f9c210f830f7a82a574cb.gif", "https://64.media.tumblr.com/a72dd82535f3e7accd827c202dacc09a/tumblr_pfyiqz0pFL1th206io1_640.gifv", "https://64.media.tumblr.com/acab0232bfb5cfd5d2d45e55e9dae898/tumblr_pbxhq7GyIf1th206io1_500.gifv", "https://i.pinimg.com/originals/70/96/0e/70960e87fb9454df6a1d15c96c9ad955.gif", "https://c.tenor.com/Fxku5ndWrN8AAAAC/head-pat-anime.gif", "https://i.imgur.com/4ssddEQ.gif", "https://i.pinimg.com/originals/ec/b8/7f/ecb87fb2827a022884d5165046f6608a.gif", "https://66.media.tumblr.com/d743a5e5ecc65be5cb6ac8de7978fb22/tumblr_pfyit1ofSu1th206io1_500.gif", "https://i.imgur.com/LUypjw3.gif", "https://i.gifer.com/7MOk.gif", "https://i.pinimg.com/originals/1a/94/61/1a9461f15bb5ae752680d99195f9b944.gif")
module.exports = {
	name: 'pat',
	description: "Pat someone like a cat!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `pats`
		else
			descriptionText=  `**${targetUser}** was patted by ${message.author}!`

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