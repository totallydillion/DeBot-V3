const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "heightcheck",
	description: "Check someones height!",
	category: "Fun",
	execute(message, args){

		let user = args.join(" ") || message.member.displayName
		let feet = Math.floor(Math.random() * 8) + 1
		let inches = Math.floor(Math.random() * 12)

        let cm = (feet * 30.48) + (inches * 2.54)

	return message.channel.send({embeds:[{
		title:"Height Check!",
		description: "Height Check For **" + user + "**",
		color : colors.random,
		fields:[{
			name:"Imperial",
			value: feet+ "'" + inches,
			inline: true,
		},
		{
			name:"Metric",
			value: Math.ceil(cm * 100)/100 + "cm",
			inline: true
		}],
		footer:{
			text:'=heightcheck [mentioned user]'
		}
	}]})
	}
}