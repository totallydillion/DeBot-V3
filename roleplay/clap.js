
const possibleSlapGifs = new Array("https://c.tenor.com/xdj7XE8llU8AAAAM/nekopara-clap.gif", "https://c.tenor.com/2RMlQdkpG1cAAAAM/clapping-anime.gif", "https://64.media.tumblr.com/9cf42daae8a5d8f926c72bb0936ae17c/39ca7e2da21a8aa4-fb/s1280x1920/6ddaeaf56a7219821062a674362f50a7b8e8a1d2.gifv", "https://i.pinimg.com/originals/6e/3c/30/6e3c3043fda5b0085da74405819aca49.gif", "https://i.gifer.com/7ddb.gif", "https://i.kym-cdn.com/photos/images/newsfeed/000/803/390/839.gif", "https://animesher.com/orig/1/108/1084/10844/animesher.com_gif-clapping-thunder-beast-1084415.gif", "https://image.myanimelist.net/ui/BQM6jEZ-UJLgGUuvrNkYUKK0yHEZe3x9l-VH-acW2mFSGgxUEehNVu22s0MVmR6Sp-tqe5tW28js6PuMV9t8Vw", "https://i.gifer.com/embedded/download/O128.gif", "https://64.media.tumblr.com/12d2611744ebf0b9d4dd1f8b3a8b5c11/2a7c328ab4e8a22b-89/s1280x1920/576b29a9fcac789525f20eb05608d56d0d785881.gifv", "https://static.wikia.nocookie.net/75257934-c62f-47dd-88fa-fe5d0701bebe/scale-to-width/755", "https://24.media.tumblr.com/e0db38af2c19c80dbad6343892e52b75/tumblr_n0act9MeJE1to22oro1_500.gif");
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'clap',
	subnames:['applause'],
	description: "Clap for someone, horray!",
	usage: "[user]",
	category: "Roleplay",
	execute(message, args) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
	if(targetUser == message.author || !targetUser)
	descriptionText = "Good job, buddy!"
	
	else
	descriptionText = `**${targetUser}** is being clapped at by ${message.author}!`
	
	let randomSlap = possibleSlapGifs[Math.floor(Math.random() * possibleSlapGifs.length)]
	
    return message.channel.send({embeds:[{
		description : descriptionText,
			color: colors.roleplay,
			image: {
				url: randomSlap
			}
		}]
	})
}
}