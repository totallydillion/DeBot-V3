const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name: "sort",
  description: "Sort a message in ABC order!",
  usage: "[word(s)]",
  category: "Convert",
  execute(message, args){
    let messageToSort = args.join(" ");
    if(!messageToSort)
    return message.channel.send({embeds:[{
      title:"Invalid Arguments!",
      description:"You must provide text to sort.",
      color: colors.error,
      footer:{
        text:"=sort [words]"
      }
    }]})
    let messageSorted =  sortString(messageToSort) 

    if(messageSorted.length > 2000){
      return message.channel.send({embeds:[{
          title:'Message Too Big!',
          description:'This Message is too big for discord to handle',
          color: colors.error,
          footer:{
              text:'=sort [text]'
          }
      }]})
  }

  return message.channel.send(messageSorted);
  }
}

function sortString(str) {
  let arraySplit = str.split("");
  let sorted = arraySplit.sort().join('').replace(/\s+/g, '');
  return sorted;
}
