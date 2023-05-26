const nhie = require('./RandomThings/NeverHaveIEverQuestions.json')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "nhie",
	description: "Get a random 'Never Have I Ever' Question!",
    category: "Fun",
	execute(message, args){
        let questions = nhie.questions[Math.floor(Math.random() * nhie.questions.length)];
        
		return message.channel.send({embeds:[{
            title: questions,
                description:("🔵 I have" +"\n🔴 I haven't"),
                color : colors.fun,
            }]
        }).then(msg =>{
            msg.react("🔵");
            msg.react("🔴");
        })
     }
 }