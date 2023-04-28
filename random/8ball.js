var possibleAnswers = new Array("It is certain", "Without a doubt", "You may rely on it", "Yes definitely", "It is decidedly so", "As I see it, yes", "Most likely", "Yes", "Outlook is looking good", "Signs point to yes", "Reply hazy, try again", "Better not tell you now", "Ask again later", "Cannot predict now..", "Concentrate, and ask again",  "Don't count on it", "Outlook is not looking so good", "My sources says no", "Very doubtful", "My reply is no", "No", "Only if it is friday.");
const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name: '8ball',
  subnames:['8b'],
  description: 'Have the mighty 8 ball answer your deepest questions!',
  usage: "[question]",
  category: "Random",
  execute(message,args) {
    if(!args[0])
    return message.channel.send({embeds:[{
      title:"No Question!",
      description:'You must provide a question for 8ball to answer!',
      color:colors.error,
      footer:{
        text:'=8ball [question]'
      }
    }]})

    return message.channel.send({embeds:[{
      title: "The Magic 8ball Says..",
      description: possibleAnswers[Math.floor(Math.random() * possibleAnswers.length)] + ".",
      color : colors.random,
      footer:{
        text:'=8ball [question]'
      }
    }]
  })
}
}
