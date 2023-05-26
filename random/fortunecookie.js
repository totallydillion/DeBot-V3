const fortuneFile = require('./RandomThings/fortunes.json')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "fortunecookie",
	description: "Get a fortune, from the all knowing fortune cookie!",
    category: "Random",
	execute(message, args){

        let fortuneCookie = fortuneFile.fortunes[Math.floor(Math.random() * fortuneFile.fortunes.length)];
        let luckyNumbers = "";
        
        for(var i = 0; i < 5; i++){
            luckyNumbers += Math.floor(Math.random() * 90) + " ";
        }

        return message.channel.send({embeds:[{

                title: fortuneCookie,
                color : colors.random,
                description: "Lucky Numbers:\n" + luckyNumbers
            }]
        })
     }
 }
