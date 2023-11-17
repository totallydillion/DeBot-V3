const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:"number",
    description:"Get a random number",
    category:"Random",
    usage:'[min number] [max number]',
    execute(message, args){
        let min = args[0];
        args.shift()
        let max = args[0]
        
        if(min || max){
            if(isNaN(min) || isNaN(max)){
                return message.channel.send({embeds:[{
                    title:"Invalid Arguments!",
                    description:"You have entered invalid arguments for this command!",
                    color: colors.error,
                    footer:{
                        text:"=number [min number] [max number]"
                    }
                }]})
            }
            
            else if(max < min){
                return message.channel.send({embeds:[{
                    title:"Minimum Is Higher Than Max",
                    description:"The number you have entered for 'minimum' is higher than the maximum.",
                    color: colors.error,
                    footer:{
                        text:"=number [min number] [max number]"
                    }
                }]})
            }
            
            else if(min < 0){
                return message.channel.send({embeds:[{
                    title:"Negative Number!",
                    description:"The minimum number must not be a negative number!",
                    color: colors.error,
                    footer:{
                        text:"=number [min number] [max number]"
                    }
                }]})
            }
            
            else {
                return message.channel.send({embeds:[{
                    title: Math.abs(Math.floor(Math.random() * max + min)),
                    description:"**Minimum:** " + min + "\n**Maximum: **" + max ,
                    color: colors.random,
                    footer:{
                        text:"=number [min number] [max number]"
                    }
                }]
            })
            
        }
    }
    
    return message.channel.send({embeds:[{
        title:Math.floor(Math.random() * 10000000),
        color: colors.random,
        footer:{
            text:"=number [min number] [max number]"
        }
    }]})
    
}
}