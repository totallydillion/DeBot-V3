const possibleGifs = new Array("https://thumbs.gfycat.com/DependableGreenDog-size_restricted.gif","https://c.tenor.com/I9bMxR0ETPMAAAAM/dying-anime.gif", "https://c.tenor.com/ixaDEFhZJSsAAAAC/anime-choke.gif", "https://image.myanimelist.net/ui/DBvbJ4grTZuOgR3YyWCliY7znqMF1sehfeBTvW4pd3yUZF6Uy-1Ad36eR_Ho11Im1eEWqB8TQcM6mCjpd3LhLg", "https://c.tenor.com/wwEeNH2M1qoAAAAC/anime-choke.gif","https://c.tenor.com/PiFqVBIspFYAAAAC/anime-choke.gif", "https://c.tenor.com/CzFhk3N8pcEAAAAC/angry-anime-choke.gif", "https://c.tenor.com/lx09IDNS31kAAAAC/given-anime.gif", "https://c.tenor.com/USfsssJOQOUAAAAC/kurosue-anime.gif", "https://c.tenor.com/nxp1FRif8oEAAAAM/luffy-monkey-d-luffy.gif", "https://c.tenor.com/Q67Y9gaJdY4AAAAM/anime-dragon-ball.gif", "https://media4.giphy.com/media/11WojR0GhjExlm/giphy.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'airlack',
    subnames:['choke'],
	description: "cause someone to lack air",
	usage: "[user]",	
	category: "Roleplay",
	execute(message) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `giggity`
		else
			descriptionText= `${message.author} just airlack'd ${targetUser}!`

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
