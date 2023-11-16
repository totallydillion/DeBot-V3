const possibleGifs = new Array("https://c.tenor.com/Z3hsBfAvCs8AAAAM/anime-wink.gif", "https://c.tenor.com/RsD6SF6zdj4AAAAM/yay-wink.gif", "https://i.pinimg.com/originals/5b/bf/e7/5bbfe72d3faca25bdac64d85442ff553.gif", "https://c.tenor.com/XLp9kBTrEWoAAAAM/anime-wink.gif", "https://thumbs.gfycat.com/GraciousCorruptKingsnake-size_restricted.gif", "https://i.pinimg.com/originals/f7/65/bb/f765bb1b66da4d3a1b9fcc618e3777af.gif", "https://media0.giphy.com/media/14pNkrMWAl4yu4/giphy.gif", "https://thumbs.gfycat.com/ForkedRightFantail-size_restricted.gif", "https://media0.giphy.com/media/H1vJmocUIcfj5HdrAW/giphy.gif", "https://i.gifer.com/5Jfb.gif", "https://i.imgur.com/3uyztWk.gif", "https://media4.giphy.com/media/ErZ8hv5eO92JW/200.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'wink',
	description: ";)",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `;)`
		else
			descriptionText=  `**${message.author}** just winked at ${targetUser}!`

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