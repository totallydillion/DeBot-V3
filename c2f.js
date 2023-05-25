const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name : 'c2f',
  description: "Convert Celsius to Farenheit!",
  usage: "[number]",
  category: "Convert",
  execute(message, args){
    
    
    let numberToConvert  = args[0]

    if(isNaN(numberToConvert))
    return message.channel.send({embeds:[{
      title:'Invalid Arguments',
      description:"In order to use this command, you must provide a valid number!",
      color: colors.error,
      footer:{
        text:'=c2f [number]'
      }
    }]})
    
    if(numberToConvert !== NaN){
      let convertedNumberRaw = (numberToConvert * 9 / 5) + 32;
      
      let convertedNumber = convertedNumberRaw.toFixed(2);
      
      return message.channel.send({embeds:[{
        title: numberToConvert + " Celsius ",
        description: "= " + convertedNumber + " Farenheit!",
        color : colors.convert,
        footer:{
          text: "=c2f [number]"
          
        }
      }]
    })
  }
  else{
    return message.channel.send({embeds:[{
      title: " ❌ Error ❌",
      description: "Not a valid number!",
      color: colors.error,
      footer:
      {
        text: "=c2f [number]"
      },
    }]
  })
}
}
}
