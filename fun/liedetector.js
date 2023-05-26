const lieResponses = new Array("||TOLD TRUTH||", "||LIE DETECTED||", "Inconclusive, please try again.") 
const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name : "liedetector",
    description: "See if a person is really lying.",
    category:"Fun",
    usage: "[user]",
    execute(message){
		let victim = message.mentions.members.first()|| message.member

        return message.channel.send({embeds:[{
            title: "Lie Detector",
            color : colors.fun,
            description: `**${victim.displayName}** Lie Detector Results: \n\n**${lieResponses[Math.floor(Math.random()*lieResponses.length)]}**`,
            footer:{
                text:'=liedetector [user]'
            }
        }]})
    }
}