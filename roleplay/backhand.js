const possibleSlapGifs = new Array("https://giffiles.alphacoders.com/197/197517.gif", "https://66.media.tumblr.com/e2dac5891057b1fb1471c6c258108a4b/tumblr_pmf5rl1G6J1ujn35ko1_500.gif", "https://i.pinimg.com/originals/2f/0f/82/2f0f82e4fb0dee8efd75bee975496eab.gif", "http://forgifs.com/gallery/d/199647-2/Superhero-backhand-slap.gif", "https://i.pinimg.com/originals/69/0f/9b/690f9b00fadd3d3a8ed91f44a8784a27.gif", "https://i.gifer.com/origin/f8/f814b631a1eb6b28015d439333f462c8.gif", "https://c.tenor.com/BYu41fLSstAAAAAM/when-you-cant-accept-reality-slap.gif", "https://c.tenor.com/NKwMQPd-MzUAAAAd/inazuma-eleven-inazuma-eleven-orion.gif", "http://30.media.tumblr.com/tumblr_lrwblotPzZ1qagrb6o1_500.gif", "https://otakulounge.files.wordpress.com/2013/12/31-picture1.gif", "https://derpicdn.net/img/view/2015/7/19/939492__safe_rainbow+dash_princess+luna_animated_changeling_do+princesses+dream+of+magic+sheep_spoiler-colon-s05e13_offhand+backhand.gif", "https://media2.giphy.com/media/aUwspwCDtO5kQ/giphy.gif");
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: 'backhand',
	description: "Backhand someone, they probably deserve it.",
	usage: "[user]",
	category: "Roleplay",
	execute(message) {
		
		let targetUser = message.mentions.users.first();
		
		let descriptionText = "";
		
		if(targetUser == message.author || !targetUser)
		descriptionText = "*take this backhand* **DUDE**"
		
		else
		descriptionText = `**${targetUser}** was just got BACKHANDED by ${message.author}!`
		
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