const possibleGifs = new Array("https://c.tenor.com/JBBZ9mQntx8AAAAC/anime-high-five.gif", "https://media1.giphy.com/media/PlgpYSFkuQi5VdoNK7/giphy.gif", "https://acegif.com/wp-content/gif/high-five-83.gif", "https://i.gifer.com/Pvwh.gif", "https://i.imgur.com/sKBwWZG.gif", "https://i.kym-cdn.com/photos/images/original/001/125/001/7c5.gif", "https://lh6.googleusercontent.com/hIRp_xCGjt6x5H5GSu9odKA9WPagzrMYPtT-Ow-Nte0AeHoMY4MUTlnxrZkJK248JAqNiBVi_9iaU3eYS2bWXtcdJFjsnrAV8i2H_iN5pjWWHDN6djKm2E-h3MQMUvM2DkoO3M7e", "https://i.pinimg.com/originals/3d/22/da/3d22dadcbba37e8d1a13c02c8fd9b128.gif", "https://thumbs.gfycat.com/BreakableMessyHarrierhawk-size_restricted.gif", "https://i.imgur.com/NWK20Lk.gif", "https://c.tenor.com/VaOkUsy8UjMAAAAC/hi-five-high-five.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2f4e95a4-b619-478e-a8be-7767cf48385c/d4ze9e5-bec4a1cb-0524-4b63-9ad3-79641b5200b4.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzJmNGU5NWE0LWI2MTktNDc4ZS1hOGJlLTc3NjdjZjQ4Mzg1Y1wvZDR6ZTllNS1iZWM0YTFjYi0wNTI0LTRiNjMtOWFkMy03OTY0MWI1MjAwYjQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.PTXUBXsG2fRS72aZjwDeWcDp1_EwnblMUuIy_9cyHio", "https://static.zerochan.net/Cardcaptor.Sakura%3A.Clear.Card-hen.full.2386682.gif")  
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'highfive',
	description: "Horray!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `Good job, buddy!`
		else
			descriptionText=  `**${targetUser}** was just high fived by ${message.author}!`

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