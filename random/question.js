const {questions} = require('./RandomThings/randomQuestions.json')
const colors = require('./Lists/EmbedColors.json')[0]

module.exports = {
	name: "question",
	description: "Get a random question to start off a conversation!",
    category: "Random",
	execute(message, args){
		return message.channel.send({embeds:[{
            title: questions[Math.floor(Math.random() * questions.length)],
            color: colors.random
        }]
    })
     }
 }
