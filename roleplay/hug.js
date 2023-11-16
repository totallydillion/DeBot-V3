const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://64.media.tumblr.com/607bc7d527ba0dff8e16f27f839da02d/tumblr_msii46Qegu1sgjyb4o1_400.gifv", "https://i.pinimg.com/originals/85/72/a1/8572a1d1ebaa45fae290e6760b59caac.gif", "https://i.pinimg.com/originals/e6/98/eb/e698eb79572e5485636a9ff2282cf4c8.gif", "https://i.pinimg.com/originals/4b/8f/5c/4b8f5ca7bf41461a19e3b4d1e64c1eb5.gif",	 "https://i.pinimg.com/originals/9d/cb/2b/9dcb2b83c29e6c70b4971e718cabe958.gif", "https://i.pinimg.com/originals/f9/e9/34/f9e934cddfd6fefe0079ab559ef32ab4.gif", "https://i.pinimg.com/originals/f2/80/5f/f2805f274471676c96aff2bc9fbedd70.gif", "https://i.pinimg.com/originals/07/34/53/07345336d3ccedd5b9645b1dd90bbb2c.gif", "https://i.pinimg.com/originals/4d/89/d7/4d89d7f963b41a416ec8a55230dab31b.gif", "https://i.pinimg.com/originals/63/fe/47/63fe47a632371e47123f95f879fcdef6.gif", "https://64.media.tumblr.com/5dfb67d0a674fe5f81950478f5b2d4ed/tumblr_ofd4e2h8O81ub9qlao1_400.gif", "https://i.pinimg.com/originals/6d/b5/4c/6db54c4d6dad5f1f2863d878cfb2d8df.gif", "https://cdn.lowgif.com/full/91e3f30773596637-.gif", "https://i.pinimg.com/originals/bf/b5/be/bfb5bed89f8c09bf53eab687eb3f9404.gif", "https://cdn.lowgif.com/full/2f4872967d617437-.gif", "https://i.pinimg.com/originals/17/ef/01/17ef01ba1e2cc988fa96c18dd0731e03.gif", "https://i.pinimg.com/originals/8d/c0/b5/8dc0b5c5573b56ac68c8fd6fc13dc076.gif")  
const Discord = require('discord.js');

module.exports = {
	name: 'hug',
	description: "How could you bug someone with a hug?",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `You look upset, have a hug!`
		else
			descriptionText=  `**${targetUser}** was just hugged by ${message.author}!`

			return message.channel.send({embeds:[{

				description : descriptionText,
	     		color : message.member.displayColor,
				image: {
					url: randomGif
				}
			}]
		})
	}
}