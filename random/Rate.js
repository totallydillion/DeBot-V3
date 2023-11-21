const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
        name: 'rate',
        description: 'I will rate something according to my advanced knowledge in knowing things!',
        usage: "[thing to rate] --scale",
        convert: "Random",
        execute(message, args) {
        //getting the item
        let item = message.content.split("=rate")[1];
      
        //getting the number
        let number = message.content.split("--")[1];
        if(!number || number == NaN){
          number = 100
        } else {
        item = item.split("--")[0]
        number = message.content.split("--")[1];
        }
      
      
      
      let ratedNumber = Math.floor(Math.random() * number);
      
			return message.channel.send({embeds:[{
              title: "Rating " + item,
              description: "**" + item + "** a **" + ratedNumber + "/ " + number + "**",
              color: colors.random
          }]
      });
  },
};
