const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name : 'c2k',
  description: "Convert Celsius to Kelvin!",
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
        text:'=c2k [number]'
      }
    }]})
    
    if(numberToConvert !== NaN){
      let convertedNumberRaw = (numberToConvert + 273.15);
      
      return message.channel.send({embeds:[{
        title: numberToConvert + " Celsius ",
        description: "= " + convertedNumberRaw + " Kelvin!",
        color : colors.convert,
        footer:{
          text: "=c2k [number]"
          
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
        text: "=c2k [number]"
      },
    }]
  })
}
}
}
