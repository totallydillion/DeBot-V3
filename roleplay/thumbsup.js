const colors = require('./Lists/EmbedColors.json')[0]

const possibleGifs = new Array("https://c.tenor.com/LbyT0UNhPfEAAAAC/anime-thumbs-up.gif", "https://c.tenor.com/-lDgSEqbdp8AAAAM/thumbs-up-anime.gif", "https://i.pinimg.com/originals/68/d9/ab/68d9ab65ee90c04f7e7a26f8ff80c371.gif", "https://media3.giphy.com/media/26vaTNUAnJOP1xalq/giphy.gif", "https://i.pinimg.com/originals/38/20/04/38200478b91db2d19a12ecf4672391c9.gif", "https://c.tenor.com/Vl80J1kJK70AAAAC/anime-thumbs-up.gif", "https://media2.giphy.com/media/H1vJmocUIcfj5HdrAW/200.gif", "https://i.kym-cdn.com/photos/images/original/001/155/275/559.gif", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3d3f095f-0551-476f-a3d2-df68c111a9e9/dc1eytk-03874eb0-f81a-41c3-9c66-2a39aec40712.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzNkM2YwOTVmLTA1NTEtNDc2Zi1hM2QyLWRmNjhjMTExYTllOVwvZGMxZXl0ay0wMzg3NGViMC1mODFhLTQxYzMtOWM2Ni0yYTM5YWVjNDA3MTIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.FK_4ckn3zimdtRYnJOh6jcJ6d1eDJQPe53AAHNtxCXE", "https://media0.giphy.com/media/11YMhfLfGoq5Gg/giphy.gif");

module.exports = {
	name: 'thumbsup',
	description: "Give that approval to people who need it!",
	usage: "[user]",	
	category: "Roleplay",
	execute(message, args) {

		let targetUser = message.mentions.users.first();
		let randomGif = possibleGifs[Math.floor(Math.random() * possibleGifs.length)]
		let descriptionText;

		if(!targetUser || targetUser == message.author)
			descriptionText = `👍`
		else
			descriptionText=  `${message.author} gives **${targetUser}** a 👍 !`

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