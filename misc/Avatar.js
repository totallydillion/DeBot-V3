const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
	name: "avatar",
	subnames:['av'],
	description: "Get the avatar of a tagged user, or yourself!",
	usage: "[mentioned user]",
	category: "Social",
	execute(message){
		const user = message.mentions.users.first() || message.author;
		const avatar = user.displayAvatarURL({dynamic: true, size: 1024});

		return message.channel.send({embeds:[{
			color: colors.social,
			image:{
					url: avatar,
				}
			}]
		});
	}
}
