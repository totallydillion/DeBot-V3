const economy = require('discord-economy-super');
const eco = new economy();
const colors = require('./Lists/EmbedColors.json')[0];

module.exports = {
    name: "pay",
    description: "Pay a user coins!",
    usage: "[mentioned user] [amount]",
    category: "Economy",
    execute(message, args){
        let mentionedUser = message.mentions.members.first();
        args.shift();
        let amount = args.join("");
        
        if(!mentionedUser || mentionedUser.id == message.member.id)
        return message.channel.send({embeds:[{
            title:"Invalid Arguments!",
            color: colors.error,
            description:"You must provide a user to pay money to!",
            footer:{
                text:"=pay [mentioned user] [amount]"
            }
        }]
    })
    
    if(!amount || amount <= 0 ||  isNaN(amount))
    return message.channel.send({embeds:[{
        title:"Invalid Arguments!",
        color: colors.error,
        description:"You must enter a valid amount of money to give someone!",
        footer:{
            text:"=pay [mentioned user] [amount]"
        }
    }]
})

let currentPlayerBalance = eco.balance.fetch(message.author.id, message.guild.id);

if(currentPlayerBalance < amount)
return message.channel.send({embeds:[{
    title:"Not Enough Money!",
    color: colors.error,
    description:"You do not have enough money to complete this transaction!",
    footer:{
        text:"=pay [mentioned user] [amount]"
    }
}]
})

/* end of error handling */
eco.balance.subtract(amount, message.author.id, message.guild.id)
eco.balance.add(amount, mentionedUser.id, message.guild.id)

return message.channel.send({embeds:[{
    title:"Success!",
    description: "You have successfully paid **" + mentionedUser.displayName + " " + amount + "** C!",
    color: colors.economy,
}]})



}
}