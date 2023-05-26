const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
  name: 'f2c',
  description: 'Convert Farenheit to Celsius!',
  usage: "[number]",
  category: "Convert",
  execute(message, args) {
    let numberToConvert  = message.content.split("=f2c ")[1]

    if(isNaN(numberToConvert))
    return message.channel.send({embeds:[{
      title:'Invalid Arguments',
      description:"In order to use this command, you must provide a valid number!",
      color: colors.error,
      footer:{
        text:'=f2c [number]'
      }
    }]})

    if(numberToConvert !== NaN){
      let convertedNumberRaw = (numberToConvert - 32) * 5 / 9;
      let convertedNumber = convertedNumberRaw.toFixed(2);

			return message.channel.send({embeds:[{
        title: numberToConvert + " Farenheit ",
          description: "= " + convertedNumber + " Celsius!",
          color : colors.convert,
          footer:{
            text:'=f2c [number]'
          }
        }]
      })
    }
  }
}
