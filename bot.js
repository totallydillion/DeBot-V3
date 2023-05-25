const colors = require('./Lists/EmbedColors.json')[0]
const discord = require('discord.js');
module.exports = {
	name: "bot",
	description: "Get information about the bot!",
	category: "Misc",
	async execute(message, args, client){
		const ToTalSeconds = (client.uptime / 1000);
		const Days = Math.floor(ToTalSeconds / 86400) % 86400;
		const Hours = Math.floor(ToTalSeconds / 3600) ;
		const Minutes = Math.floor((ToTalSeconds / 60) % 60);
		const Seconds = Math.floor(ToTalSeconds % 60);
		const Uptime = `${Days} Days, ${Hours % 24} Hours, ${Minutes} Minutes & ${Seconds} Seconds`;
		
		
		return message.channel.send({embeds:[{
			title: message.guild.me.displayName + "'s Stats!",
			description:'Bot developed by **totallydillion#1975** \n And can be reached through **=servers**',
			color: colors.misc,
			thumbnail:{
				url: message.guild.me.displayAvatarURL(),
			},
			fields:[{
				name: 'Uptime',
				value: Uptime.toString() || "N/A"
			},
			{
				name: 'Programming Language:',
				value: "DJS V." + discord.version.toString(),
			},
			{
				name:'Server Count',
				value: client.guilds.cache.size.toString() || "N/A",
				inline: true,
			},
			{
				name:'Channel Count',
				value: client.channels.cache.size.toString() || "N/A",
				inline: true,
			},
			{
				name:'User Count',
				value: client.users.cache.size.toString() || "N/A",
				inline: true,
			},
			{
				name:'Ping',
				value: client.ws.ping.toString() + "ms" || "N/A",
			},
			{
				name:'Command Count',
				value: client.commands.size.toString() || "N/A"
			}]
		}]
	})
}
}