const colors = require('./Lists/EmbedColors.json')[0]
module.exports ={
	name: "randroll",
	description: "Roll dice for DND games!",
	usage: "[amount of dice] [side count]",
	category: "Random",
	async execute(message, args){
		let diceAmount = args[0];
		let sideCount = args[1];
		let highestAmount = 0;

		if(!diceAmount || !sideCount)
		return message.channel.send({embeds:[{
			title: "Invalid Arguments",
			description: "=randroll [amount of dice] [sidecount]",
			color: colors.error
		}]})


		let diceResults  = new Array();
		let diceTotal = 0

		for(var i = 0; i < diceAmount; i++)
		{
			let dice = Math.floor(Math.random() * parseInt(sideCount) + 1)
			if(dice == 0) dice = 1;

			diceResults[i] = dice;
			diceTotal += diceResults[i];
			
			if(diceResults[i] > highestAmount)
			{
				highestAmount = diceResults[i]
			}

		}

		if(diceResults.join(",").length > 1010){
			return message.channel.send({embeds:[{
				title: "Error!",
				description: "There are too many embeds, and the embed can not send.",
				color: colors.error
			}]})
		}

		
		return message.channel.send({embeds:[{
			color: colors.dnd,
			fields:[{
				name:"Results",
				value: diceResults.join(", ").toString(),
			},
			{
				name:"Highest Number",
				value: highestAmount.toString(),
				inline: true,
			},
			{
				name:"Total",
				value: diceTotal.toString(),
				inline: true
			}]
		}]
	})
}
}