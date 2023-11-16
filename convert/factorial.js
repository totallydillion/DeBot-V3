const colors = require('./Lists/EmbedColors.json')[0]
module.exports ={
	name: 'factorial',
	description: "Get a factorial of a number!",
	usage: "[number]",
	category: "Convert",
	execute(message, args){
		let playerNumber = args[0];

		if(isNaN(playerNumber))
		return message.channel.send({embeds:[{
			title:'Not A Number!',
			descrption:'In order to use this command, you must provide a number!',
			color: colors.error,
			footer:{
				text:'=factorial [number]'
			}
		}]})

		let factorial = 1;
		for(var i = 1; i <= playerNumber; i++)
		{
			factorial *= i;
		}
		
		if(playerNumber == 0)
			factorial = 0;

			return message.channel.send({embeds:[{

				title: playerNumber + " factorial is:",
				description: "= **" + factorial + "**",
				color : colors.helpful,    
				footer:{
					text:'=factorial [num]'
				} 
				}]
			})

	}
}