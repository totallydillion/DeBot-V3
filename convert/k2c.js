const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name : 'k2c',
  description: "Convert Kelvin to Celsius!",
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
        text:'=k2c [number]'
      }
    }]})
    
    if(numberToConvert !== NaN){
      let convertedNumberRaw = (args[0] - 273.15);
      
      let convertedNumber = convertedNumberRaw.toFixed(2);
      
      return message.channel.send({embeds:[{
        title: numberToConvert + " Kelvin ",
        description: "= " + convertedNumber + " Celsius!",
        color : colors.convert,
        footer:{
          text: "=k2c [number]"
          
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
        text: "=k2c [number]"
      },
    }]
  })
}
}
}
