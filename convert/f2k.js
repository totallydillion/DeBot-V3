const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name : 'f2k',
  description: "Convert Fahrenheit to Kelvin!",
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
        text:'=f2k [number]'
      }
    }]})
    
    if(numberToConvert !== NaN){
      let convertedNumberRaw = (numberToConvert -32) * 5/9 + 273.15;
      
      let convertedNumber = convertedNumberRaw.toFixed(2);
      
      return message.channel.send({embeds:[{
        title: numberToConvert + " Fahrenheit ",
        description: "= " + convertedNumber + " Kelvin!",
        color : colors.convert,
        footer:{
          text: "=f2k [number]"
          
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
        text: "=f2k [number]"
      },
    }]
  })
}
}
}
