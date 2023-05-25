const scrabble = require('scrabble');
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "anagram",
    subnames:['ana'],
	description: "Get all the possible words with certain letters or words!",
	usage: "[letters/words]",
	category: "Convert",
	execute(message, args, client){

		let letters = args.join(" ");

		if(letters.length <= 1)
		return message.channel.send({embeds:[{
			title:'Invalid Amount Of Characters!',
			description:'In order to do this command, you must enter more than one letter!',
			color: colors.error,
			footer:{
				text:'=anagram [letters/words]'
			}
		}]})

		let words = scrabble(letters)
		
		let half = Math.ceil(words.length / 2)
		
		let firstHalf = words.slice(0, half);
		
		if(!words){
			return message.channel.send({embeds:[{
				title: "No Results Found!",
				description: "There are no anagrams for the word: " + args.join(" "),
				color: colors.error,
				footer:{
					text:'=anagram [letters/words]'
				}
			}]
		})
	}
	
	
	let secondHalf = words.slice(-half)
	
	if((firstHalf.join(" ").length + secondHalf.join(" ").length) > 6000)
	
	return message.channel.send({embeds:[{
		title: "Too Many Results",
		description: "There are too many results to put in a Discord Embed.",
		footer:{
			text:'=anagram [letters/words]',
		},
		color:  colors.error
	}]
	
})

return message.channel.send({embeds:[{
	title: args.join(" "),
	description: "Here are all the words you can make out of the letters: **" + args.join(" ") + "**",
	color: colors.convert,
	fields:[{
		name:"\u200b",
		value: firstHalf.toString(),
		inline: true,
	},
	{
		name:"\u200B",
		value: secondHalf.toString(),
		inline: true,
	}],
	footer:{
		text:'=anagram [letters/words]'
	}
}]})
}
}
