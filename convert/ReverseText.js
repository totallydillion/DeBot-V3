const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {

  name: "reverse",
  subnames:['rev'],
  description : "uoy ot sdrawkcab kaeps lliw I",
  usage: "]txet[",
  category: "Convert",
  execute(message, args){
    let messageToSort = args.join(" ");
    if(!messageToSort)
    return message.channel.send({embeds:[{
      title:"Invalid Arguments!",
      description:"You must provide text to reverse.",
      color: colors.error,
      footer:{
        text:"=reverse ]txet["
      }
    }]})
    
    let messageSorted = messageToSort.split("").reverse().join("");
    return message.channel.send(messageSorted);
  }
}