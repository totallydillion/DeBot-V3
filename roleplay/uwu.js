const possibleGifs = new Array("https://c.tenor.com/3wo59mMAt3oAAAAC/uwu-anime.gif", "https://64.media.tumblr.com/ae3376cceb6854150ba9e3c890c5d940/tumblr_pmrun21rtr1vvfsp9o1_540.gifv", "https://data.whicdn.com/images/340320261/original.gif", "https://data.whicdn.com/images/343894958/original.gif", "https://c.tenor.com/tZyMjllVkKkAAAAC/uwu.gif", "https://data.whicdn.com/images/328928094/original.gif", "https://64.media.tumblr.com/55c4d1432211949e332fa34ecae0be7a/32098c526441a076-f1/s500x750/0452fdc7f5972ee026f2478b9233922aec950a9f.gifv", "https://static.wikia.nocookie.net/c3680130-6af5-4c3c-aa69-0f3020c2ae25/scale-to-width/755", "https://community.gamepress.gg/uploads/default/original/3X/c/a/ca2085f27b97645219e7ffd6aed49bd3b6fe2505.gif", "https://image.myanimelist.net/ui/5LYzTBVoS196gvYvw3zjwKu22uor4OKaJCE_a-9c6XU")  

const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'uwu',
	description: "Do I really have to explain?!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `uwu senpai ^-^!`

		else
			descriptionText=  `**${message.author}** uwu's at **${targetUser}** !`

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