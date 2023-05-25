const sides = new Array('Heads', 'Tails')
const colors = require('./Lists/EmbedColors.json')[0]
module.exports = {
    name:"coinflip",
    description:"Flip a coin!",
    category: 'Random',
    usage:'[amount of coins]',
    execute(message, args){
        
        if(!isNaN(args[0]) && args[0] > 0){
            let randomNumber = Math.floor(Math.random() * args[0])
            
            return message.channel.send({embeds:[{
                title: `Flipping ${args[0]} coins..`,
                color: colors.random,
                footer:{
                    text:'=coinflip [amount of coins]'
                }
            }]}).then(function(msg){
                setTimeout(() => {
                    msg.edit({embeds:[{
                        title: `Coin Results`,
                        description: `**Heads:** ${randomNumber}\n**Tails: **${args[0] - randomNumber}`,
                        color: colors.random,
                        footer:{
                            text:'=coinflip [amount of coins]'
                        }
                    }]})
                }, 500);
            })
        }
        
        return message.channel.send({embeds:[{
            title:"Flipping A Coin..",
            color: colors.random,
            footer:{
                text:'=coinflip'
            }
        }]}).then(function(msg){
            setTimeout(() => {
                msg.edit({embeds:[{
                    title: sides[Math.floor(Math.random() * 2)],
                    color: colors.random,
                    footer:{
                        text:'=coinflip'
                    }
                }]})
            }, 500);
        })
    }
}