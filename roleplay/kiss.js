const possibleGifs = new Array("https://i.imgur.com/q340AoA.gif","https://i.pinimg.com/originals/6e/2f/e9/6e2fe9073f4e6aa4080e2e9ab5e3f790.gif", "https://i.pinimg.com/originals/02/d9/ca/02d9cae34993e48ab5bb27763d5ca2fa.gif", "https://i.pinimg.com/originals/67/6b/f9/676bf9c2cd4104187c9c211ee0efe130.gif", "https://acegif.com/wp-content/uploads/anime-kiss-m.gif", "https://i.imgur.com/OE7lSSY.gif", "https://thumbs.gfycat.com/FailingGrimyGar-small.gif", "https://thumbs.gfycat.com/DelectableSpiritedKakapo-small.gif", "https://i.pinimg.com/originals/29/65/3a/29653ad6e372605c4c43c3c015f9e499.gif", "https://lh3.googleusercontent.com/proxy/mvdQTloJrEwwQicxdNNlNr2yusTVLj1s4cP4cpOf9rvx2gji7KHy8OLswufU3BPjv1PaaB_DpHbmTRR8nJDbFamyodZtxbDF63zs2ZFzWHEBhVgekL2AVshRWO21BYo", "https://i.pinimg.com/originals/62/1c/ea/621ceac89636fc46ecaf81824f9fee0e.gif", "https://media1.tenor.com/images/80c0cfbbbfe9a58263e75f84b91677a2/tenor.gif?itemid=17240088", "https://i.pinimg.com/originals/1f/1c/a2/1f1ca2c09f171676503c2533319b354f.gif", "https://66.media.tumblr.com/3a416d5c991dbef68b6eaf8a06682d3d/tumblr_inline_ol29wgtBjL1u0103a_500.gif", "https://cdn.lowgif.com/full/a1a1d2950d68db14-anime-love-cute-anime-gifs-pinterest-anime-and-otaku.gif", "https://i.pinimg.com/originals/4c/35/4f/4c354fc3e1413e961d3674d18f692165.gif", "https://i.gifer.com/B82q.gif", "https://64.media.tumblr.com/b2dd22ecb1e01b67ac95beded8241c06/tumblr_mvxl5s62w01sfeoupo1_r1_500.gif", "https://i.gifer.com/QIc2.gif", "https://64.media.tumblr.com/c412fd2a4e8c053e7d2542ba546cbd54/tumblr_moqrs1pVLB1snf68bo1_500.gif")  
const Discord = require('discord.js');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'kiss',
	subnames:['mwah'],
	description: "Pucker up, buttercup.",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]


		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `Here, have a smooch!`
		else
			descriptionText=  `**${targetUser}** was just smooched by ${message.author}!`

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