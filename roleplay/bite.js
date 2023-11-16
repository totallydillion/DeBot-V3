const possibleGifs = new Array("https://c.tenor.com/SXXCutLZdb4AAAAC/anime-bite.gif", "https://c.tenor.com/w_qO1mbg3z4AAAAC/bite-anime.gif", "https://c.tenor.com/kNvxLSiv1J0AAAAC/anime-girl-bite.gif", "https://data.whicdn.com/images/280828748/original.gif", "https://i.gifer.com/H3Jt.gif", "https://64.media.tumblr.com/1094b7131d78d628f7f4c11ad2d7c034/tumblr_p8a7oxomw61th206io1_640.gifv", "https://i.gifer.com/np4.gif", "https://giffiles.alphacoders.com/195/195020.gif", "https://c.tenor.com/uNtuyn782g0AAAAC/karin-sasuke.gif", "https://64.media.tumblr.com/tumblr_mdb5upt2EI1r1z793o3_500.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'bite',
	description: "hoomans are tasty",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `**Nom nom**`
		else
			descriptionText=  `**${targetUser}** was just bit by ${message.author} !`

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